import React, {Component} from 'react';
import Page from 'components/Page';
import './index.scss';
import {ticketType} from 'services/api';
import Editable from "react-x-editable";
import {auth} from "services/auth";
import {Snackbar} from "material-ui";

class Tickets extends Component {

	state = {
		ticketTypes: [],
		snackBar: false,
	};
	
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

	onInputChange = (id, event) => {
		const { value } = event.target;
		ticketType
			.update({
				id,
				price: value,
			})
			.then(_ => this.setState({
				snackBar: true
			}))
	}
	
	onDelete(id) {
  	ticketType
			.delete(id)
			.then(_ => this.setState({
				ticketTypes: this.state.ticketTypes.filter(tt => tt.id !== id)
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
										<div className="name column has-text-right">{ticket.name}</div>
										<div className="price column">
											<Editable
												className="is-inline-block"
												onInputChange={this.onInputChange.bind(this, ticket.id)} 
												dataType="text" 
												showButtons={false} 
												mode="inline" 
												value={ticket.price}
												disabled={!auth.user}
											/>
											zł
											{ auth.user && <i className="delete" onClick={() => this.onDelete(ticket.id)}/>}
										</div>
									</div>
								)}
						</div>
					</div>

					<Snackbar
						open={this.state.snackBar}
						message={'Pomyślnie edytowano cenę biletu'}
						autoHideDuration={2000}
						onRequestClose={ () => this.setState({ snackBar: false }) }
					/>
					
				</div>
			</Page>
    )
  }
}

export default Tickets;
