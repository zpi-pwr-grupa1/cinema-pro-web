import React, {Component} from 'react';
import Page from 'components/Page';
import splitEvery from "ramda/es/splitEvery";
import './index.scss';
import {reservation, showing, ticketType} from 'services/api';
import Checkbox from 'material-ui/Checkbox';
import {Dialog, DropDownMenu, FlatButton, MenuItem, RaisedButton} from 'material-ui';
import moment from 'moment';

const iconStyles = {
  fontSize: 150,
};

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    margin: 0,
  },
};

class HallReservation extends Component {
	state = {
		reservations: [],
		showing: null,
		ticketTypes: null,
		open: false,
	};
  
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
    Promise
			.all([
				showing.get(this.showingId),
				showing.getSeats(this.showingId),
				ticketType.all(),
			])
      .then(([
          { data: showing },
          { data: seats }, 
					{ data: ticketTypes }
        ]
      ) => {
        this.setState({
          showing: {
            ...showing,
            hall: {
              ...showing.hall,
              seats: seats.sort((a, b) => a.seatColumn - b.seatColumn || a.seatRow - b.seatRow)
            }
          },
					ticketTypes,
        });
      });
  }

  handleChange = (seat, event) => {
  	const seatRef = this.state.showing.hall.seats.find(s => s.id === seat.id)
		seatRef.takenByMe = !seatRef.takenByMe 
		
		this.setState({
			showing: { 
				...this.state.showing,
				hall: {
					...this.state.showing.hall,
					seats: this.state.showing.hall.seats
				}},
				reservations: seatRef.takenByMe 
					? [
							...this.state.reservations,
							{seat: seatRef}
						]
					: this.state.reservations.filter(r => r.seat.id !== seatRef.id)
		});
  };
  
  onTicketTypeChange(reservation, event, index, value) {
  	reservation.ticketType = value
		return this.setState({ 
			reservations: this.state.reservations,
		});
	}

  get showingId() {
    return this.props.match.params.id;
  }

  ShowAlertWithDelay = () => {
		reservation
			.book({
				showingId: this.showingId,
				reservations: [
					...this.state.reservations.map(r => ({
						seatId: r.seat.id,
						ticketTypeId: r.ticketType.id,
					}))
				]})
			.then(() => {
				alert("Miejsca zostały zarezerwowane.")
				setTimeout(function() {
					this.setState({open: false});
					this.props.history.push(`/repertoire`);
				}.bind(this), 500);
			})
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Anuluj"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Potwierdź rezerwacje"
        primary={true}
        onClick={this.ShowAlertWithDelay}
      />,
    ];
    return (
      <Page>
				{this.state.showing &&
				<div className="container reservation">
					<Dialog
						title="REZERWACJA"
						actions={actions}
						modal={false}
						open={this.state.open}
						onRequestClose={this.handleClose}
						titleStyle={{textAlign: "center"}}
					>
						<p className="confirm-txt">Film: {this.state.showing.movie.title}</p>
						{/*<p className="confirm-txt">Sala: {this.state.form.hallNumber}</p>*/}
						<p className="confirm-txt">Miejsca:</p>
						{
							this.state.reservations
								.map(reservation =>
									<div key={reservation.seat.id}>
										<span>rząd: {reservation.seat.seatRow+1}</span>
										<span style={{marginLeft: '5px'}}>kolumna: {reservation.seat.seatColumn+1}</span>
										<span style={{marginLeft: '5px'}}>bilet: {reservation.ticketType && reservation.ticketType.name}</span>
									</div>
								)
						}
						<p className="confirm-txt">Data i godzina
							seansu: {moment(showing.screeningStart).format("YYYY-MM-DD  hh:mm")}</p>
					</Dialog>
					<div className="reservation-movie-info">
						<p>{this.state.showing.movie.title} {moment(showing.screeningStart).format("YYYY-MM-DD  hh:mm")}</p>
						{/*<p>Sala: {this.state.form.hallNumber}</p>*/}
					</div>
					<div className="screen">EKRAN</div>
					<div className="home-wrapper">
						{splitEvery(
						  this.state.showing.hall.seats.reduce((p, c) => c.seatRow > p.seatRow ? c : p).seatRow + 1, 
              this.state.showing.hall.seats
            ).map((rows, index) =>
                <div key={index}>
                  {rows.map(seat =>
										<Checkbox
											key={seat.id}
											name={seat.id}
											onCheck={() => this.handleChange(seat, event)}
											checked={seat.taken || seat.takenByMe}
											disabled={seat.taken}
											style={styles.checkbox}
											color="primary"
										/>
                    )}
                </div>
                )}
					</div>
					<div className="bookings has-text-centered">
						{
							this.state.reservations
								.map(reservation => 
									<div key={reservation.seat.id}>
										<span>rząd: {reservation.seat.seatRow+1}</span>
										<span>kolumna: {reservation.seat.seatColumn+1}</span>
										<DropDownMenu maxHeight={300} value={reservation.ticketType} onChange={this.onTicketTypeChange.bind(this, reservation)}>
											{this.state.ticketTypes.map(tt =>
												<MenuItem style={{width: '300px'}} value={tt} label={tt.name} key={tt.id} primaryText={tt.name}  />
											)}
										</DropDownMenu>
									</div>
								)
						}
					</div>
					<div className="btn-grp">
						<RaisedButton className="seats-btn" label="Zarezerwuj" onClick={this.handleOpen}/>
					</div>
					<p>Miejsca wolne:</p><Checkbox checked={false} disabled/>
					<p>Miejsca zajęte:</p><Checkbox checked={true} disabled/>
					<p>Miejsca wybrane:</p><Checkbox checked={true}/>
				</div>
				}
      </Page>
    )
  }
}

export default HallReservation;

