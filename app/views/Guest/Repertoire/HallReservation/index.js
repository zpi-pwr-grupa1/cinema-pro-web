
import React, {Component} from 'react';
import Page from 'components/Page';
import splitEvery from "ramda/es/splitEvery";
import reduce from "ramda/es/reduce";
import './index.scss';
import FontIcon from 'material-ui/FontIcon';
import {hall} from 'services/api';
import {Link} from "react-router-dom";
import Checkbox from 'material-ui/Checkbox';
import {RaisedButton} from 'material-ui';

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

      },
      seats: {},
      hallId: "2a13a875-a310-4109-9914-1df9c117b86b"
    };
  }

  componentDidMount() {
    hall.get(this.state.hallId)
      .then((response) => {
        console.log('asd', response)
        // FOr checkbox purposes
        const seatIds = reduce((acc, seat) => Object.assign(acc, { [seat.id]: false }), {}, response.data.seats);
        this.setState({
          ...this.state,
          seats: seatIds,
          form: response.data
        })
      })

    hall.getColumnsAndRows(this.state.hallId)
      .then((response) => {
        console.log(response)
        this.setState({
          ...this.state,
          hall: response.data
        })
      })
  }

  handleChange = event => {
    this.setState({ seats: { [event.target.name]: event.target.checked }});
  };

  render() {
    return (
      <Page>
        <div className="container">
        <div className="reservation-movie-info">"Nazwa filmu" "Numer sali" "Godzina seansu"</div>
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

