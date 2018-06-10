import React, {Component} from 'react';
import Page from 'components/Page';
import './index.scss';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from "material-ui";
import {client} from "services/api";
import {cinema} from "services/cinema";
import moment from 'moment';

class MyReservations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clientID: "c9895a98-0f2a-4ccb-8241-765dad0ae01a",
      reservations: [],
    };
  }

  componentDidMount() {
    client.getReservations()
      .then(response => {
        console.log(response)
        this.setState({
          ...this.state,
          reservations: response.data
        })
      })
      .catch(error => {
        console.log(error.response)
      });
  }

  render() {
    console.log(this.state.reservations)
    return (
      <Page>
        <div className="movie-list">
          <section className="hero is-light">
            <div className="hero-body">
              <div className="container">
                <h1 className="title is-pulled-left">Lista rezerwacji</h1>
              </div>
            </div>
          </section>
          <div className="container">
            <Table className="my-table" displaySelectAll={false} selectable={false}>
              <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                  <TableHeaderColumn>Nr rezerwacji</TableHeaderColumn>
                  <TableHeaderColumn>Data seansu</TableHeaderColumn>
                  <TableHeaderColumn>Film</TableHeaderColumn>
                  <TableHeaderColumn>Sala</TableHeaderColumn>
                  <TableHeaderColumn>Miejsca</TableHeaderColumn>
                  <TableHeaderColumn>Kino</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false}>
                {
                  this.state.reservations
                    .map(reservation =>
                      <TableRow key={reservation.id} hoverable={true}>
                        <TableRowColumn>{reservation.id}</TableRowColumn>
                        <TableRowColumn>{moment(reservation.showing.screeningStart).format("YYYY-MM-DD  hh:mm")}</TableRowColumn>
                        <TableRowColumn>{reservation.showing.movie.title}</TableRowColumn>
                        <TableRowColumn>{reservation.showing.hall.hallNumber}</TableRowColumn>
                        <TableRowColumn>{
                          reservation.tickets
                          .map(ticket =>
                            <p>Rząd: {ticket.seat.seatRow} Miejsce: {ticket.seat.seatColumn}</p>
                        )}</TableRowColumn>
                        <TableRowColumn>{cinema.current.name}</TableRowColumn>
                      </TableRow>
                    )
                }
              </TableBody>
            </Table>
          </div>
        </div>
      </Page>
    )
  }
}

export default MyReservations;
