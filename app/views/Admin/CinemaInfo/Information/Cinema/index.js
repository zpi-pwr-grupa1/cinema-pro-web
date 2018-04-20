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
            <h1 className="cinema-header">{this.state.form.name}</h1>
            <div>
              <p className="info-txt">{this.state.form.description}</p>
              <p className="info-txt">{this.state.form.telephone}</p>
              <p className="info-txt">{this.state.form.email}</p>
              <p className="info-txt">{this.state.form.street} {this.state.form.streetNumber}, {this.state.form.postCode} {this.state.form.city}</p>

              <RaisedButton className="cinema-btn" label="Usuń kino" />
            </div>
          </div>
          <div className="cinema-info-img">
            <img src={this.state.form.imgUrl} />
          </div>
        </div>
    )
  }
}

export default Cinema;
