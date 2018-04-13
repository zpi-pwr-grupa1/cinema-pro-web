import React, { Component } from 'react';
import './index.scss'
import { Link } from "react-router-dom";

import { cinema } from 'services/api';
import Page from 'components/Page';
import Input from 'components/FormElements/Input';
import Form from 'components/FormElements/Form';
import Button from "material-ui/es/Button/Button";

class CinemaInfo extends Component {
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
    return this.props.match.params.id;
  }

  render() {
    return (
      <Page>
        <div className="cinema-info-wrapper">
          <div className="cinema-info-txt">
            <h1 className="cinema-header">{this.state.form.name}</h1>
              <div>
                <p className="info-txt">{this.state.form.description}</p>
                <p className="info-txt">{this.state.form.telephone}</p>
                <p className="info-txt">{this.state.form.email}</p>
                <p className="info-txt">{this.state.form.street} {this.state.form.streetNumber}, {this.state.form.postCode} {this.state.form.city}</p>
                <Link to={'/admin/cinemas/new/'+this.cinemaId}>
                  <Button className="cinema-btn" label="Dodaj" />
                </Link>
                <Link to={'/admin/cinemas/'+this.cinemaId}>
                  <Button className="cinema-btn" label="Edytuj" />
                </Link>
              </div>
          </div>
          <div className="cinema-info-img">
            <img src="/assets/images/cinema.jpg" />
          </div>
        </div>
      </Page>
    )
  }
}

export default CinemaInfo;
