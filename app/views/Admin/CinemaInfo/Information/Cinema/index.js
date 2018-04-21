import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './index.scss'

import {cinema} from 'services/api';

class Cinema extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        name: '',
        street: '',
        streetNumber: '',
        postCode: '',
        city: '',
        telephone: '',
        email: '',
        description: ''
      },
      snackbar: false,
      error: '',
    };
  }

  componentDidMount() {
    if(this.cinemaId) {
      cinema.get(this.cinemaId)
        .then(response => {
          this.setState({
            ...this.state,
            form: response.data
          })
        })
    }
  }

	get cinemaId() {
		return this.props.id;
	}

  render() {
    return (
        <div className="cinema-info-wrapper">
          <div className="cinema-info-txt">
            <span className="label">Opis:</span>
            <p className="info-txt">{this.state.form.description}</p>
						<span className="label">Telefon:</span>
            <p className="info-txt">{this.state.form.telephone}</p>
						<span className="label">Email:</span>
            <p className="info-txt">{this.state.form.email}</p>
						<span className="label">Ulica:</span>
            <p className="info-txt">{this.state.form.street} {this.state.form.streetNumber}, {this.state.form.postCode} {this.state.form.city}</p>

            <RaisedButton className="edit" label="Edytuj" />
          </div>
          <div className="cinema-info-img">
            <img src={this.state.form.imgUrl} />
          </div>
        </div>
    )
  }
}

export default Cinema;
