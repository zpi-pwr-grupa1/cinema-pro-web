import React, {Component} from 'react';
import Page from 'components/Page';
import './index.scss';
import {ticketType} from 'services/api';
import Editable from "react-x-editable";
import {auth} from "services/auth";
import {RaisedButton, Snackbar} from "material-ui";
import {Popconfirm} from "antd";

const initialState = {
	ticketTypes: [],
	snackBar: false,
	newTicketType: {
		name: '',
		price: '',
	}
}; 
	

class Tickets extends Component {

	state = initialState;
	
  constructor(props) {
    super(props);
  }

  componentDidMount() {
		ticketType.all()
			.then(response => {
        this.setState({
          ticketTypes: response.data
        })
			})
  }

	onFormEdit = (type, ticket, event) => {
		const { value } = event.target;
		ticket[type] = value
	}

	onInputChange = (event) => {
		const { name, value } = event.target;
		this.setState({ newTicketType: {
				...this.state.newTicketType,
				[name]: value,
			}});
	}
	
	onDelete(id) {
  	ticketType
			.delete(id)
			.then(_ => this.setState({
				ticketTypes: this.state.ticketTypes.filter(tt => tt.id !== id)
			}))
	}
	
	onAdd() {
		ticketType
			.update(this.state.newTicketType)
			.then(({data}) => {
				this.state.ticketTypes.push(data)
				this.setState({
					ticketTypes: this.state.ticketTypes,
					newTicketType: initialState.newTicketType,
				})
			})
	}
	
	submit() {
  	Promise.all(this.state.ticketTypes.map(ticket => ticketType.update(ticket)))
			.then(_ => this.setState({
				snackBar: true
			}))
	}

  render() {
    return (
      <Page>
				<div className="tickets">
					<section className="hero is-light">
						<div className="hero-body">
							<div className="container">
								<h1 className="title is-pulled-left">Cennik biletów</h1>
							</div>
						</div>
					</section>

					<div className="container">
						<div className="tickets-table">
							{this.state.ticketTypes
								.map(ticket => 
									<div key={ticket.id} className="columns">
										<div className="name column has-text-right">
											<Editable
												className="is-inline-block"
												onInputChange={this.onFormEdit.bind(this, 'name', ticket)}
												dataType="text"
												showButtons={false}
												mode="inline"
												value={ticket.name}
												disabled={!auth.user}
											/>
										</div>
										<div className="price column">
											<Editable
												className="is-inline-block"
												onInputChange={this.onFormEdit.bind(this, 'price', ticket)} 
												dataType="text" 
												showButtons={false} 
												mode="inline" 
												value={ticket.price}
												disabled={!auth.user}
											/>
											zł
											{auth.user &&
											<Popconfirm placement="bottom" title="Czy napewno chcesz usunąć ten bilet?"
																	onConfirm={() => this.onDelete(ticket.id)} okText="Tak" cancelText="Nie">
												<i className="delete has-text-danger"/>
											</Popconfirm>
											}
										</div>
									</div>
								)}
							<div className="columns">
								<div className="name column has-text-right">
									<input name="name" value={this.state.newTicketType.name} onChange={this.onInputChange}/>
								</div>
								<div className="price column">
									<input name="price" value={this.state.newTicketType.price} onChange={this.onInputChange}/>
									zł
									<i className="material-icons add" onClick={this.onAdd.bind(this)}>add_circle</i>
								</div>
							</div>
							<div className="columns">
								<div className="column has-text-centered">
									<RaisedButton className="is-center" label="Zaaplikuj zmiany" onClick={this.submit.bind(this)} />
								</div>
							</div>
						</div>
					</div>

					<Snackbar
						open={this.state.snackBar}
						message={'Pomyślnie zaaplikowano zmiany'}
						autoHideDuration={2000}
						onRequestClose={ () => this.setState({ snackBar: false }) }
					/>
					
				</div>
			</Page>
    )
  }
}

export default Tickets;
