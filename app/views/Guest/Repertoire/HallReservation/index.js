import React, {Component} from 'react';
import Page from 'components/Page';
import splitEvery from "ramda/es/splitEvery";
import reduce from "ramda/es/reduce";
import './index.scss';
import FontIcon from 'material-ui/FontIcon';
import {hall, showing} from 'services/api';
import {Link} from "react-router-dom";
import Checkbox from 'material-ui/Checkbox';
import {RaisedButton} from 'material-ui';
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
  ckck: {
    color: "#000000",
  },
};

class HallReservation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        hallNumber: 0,
        seats: [],
      },
      hall: {
        rows: 0,
        columns: 0,
      },
      showing: {
        movie: {},
        hall: {},
      },
      seats: {},
      hallId: "",
    };
  }

  componentDidMount() {
    showing.get(this.showingId)
      .then(response => {
        console.log(response)
        this.setState({
          ...this.state,
          showing: response.data,
          hallId: response.data.hall.id
        });
        hall.get(response.data.hall.id)
        .then((response) => {
          // FOr checkbox purposes
          const seatIds = reduce((acc, seat) => Object.assign(acc, { [seat.id]: false }), {}, response.data.seats);
          this.setState({
            ...this.state,
            seats: seatIds,
            form: response.data
          });
        });
        hall.getColumnsAndRows(response.data.hall.id)
        .then((response) => {
          this.setState({
            ...this.state,
            hall: response.data
          })
        })
      });
  }

  handleChange = event => {
    this.setState({ seats: { [event.target.name]: event.target.checked }});
  };

  get showingId() {
    return this.props.match.params.id;
  }


  render() {
    return (
      <Page>
        <div className="container">
        <div className="reservation-movie-info">
            <p>{this.state.showing.movie.title} {moment(showing.screeningStart).format("YYYY-MM-DD  hh:mm")}</p>
            <p>Sala: {this.state.form.hallNumber}</p>
        </div>
        <div className="screen">EKRAN</div>
          <div className="home-wrapper">
          {this.state.hall.rows > 0 &&
          Object.keys(this.state.seats).length > 0 && splitEvery(this.state.hall.rows, this.state.form.seats)
            .map((rows, index) =>
              <div key={index}>
                {rows
                  .map(seat =>
                    <Checkbox
                      key={seat.id}
                      name={seat.id}
                      checked={this.state.seats[seat.id]}
                      onChange={this.handleChange}
                      style={styles.checkbox}
                      color="primary"
                    />
                )}
              </div>
            )}
          </div>
          <div className="btn-grp">
            <RaisedButton className="seats-btn" label="Kup bilety" />
            <RaisedButton className="seats-btn" label="Rezerwuj miejsca" />
          </div>
            <p>Miejsca wolne:</p><Checkbox checked={false} disabled/> 
            <p>Miejsca zajęte:</p><Checkbox checked={true} disabled />
            <p>Miejsca wybrane:</p><Checkbox checked={true} />
          </div>
      </Page>
    )
  }
}

export default HallReservation;

