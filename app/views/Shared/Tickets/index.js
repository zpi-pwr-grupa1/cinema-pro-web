import React, {Component} from 'react';
import Page from 'components/Page';
import './index.scss';
import {ticketType} from 'services/api';

class Tickets extends Component {
	
  constructor(props) {
    super(props);

    this.state = {
			ticketTypes: [],
    };
  }

  componentDidMount() {
		ticketType.all()
			.then(response => {
        this.setState({
          ticketTypes: response.data
        })
			})
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
										<div className="price column">{ticket.price} zł</div>
									</div>
								)}
						</div>
					</div>
					
				</div>
			</Page>
    )
  }
}

export default Tickets;
