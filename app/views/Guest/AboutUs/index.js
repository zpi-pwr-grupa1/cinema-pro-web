
import React, {Component} from 'react';
import Page from 'components/Page';
import './index.scss';
import {cinema} from 'services/api';
import {cinema as c} from "services/cinema";

class AboutUs extends Component {

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
      error: '',
    };
  }

  componentDidMount() {
    this.setCinema()
  }

  setCinema() {
    return cinema
      .get(c.current.id)
      .then(response => {
        this.setState({
          form: response.data
        })
      })
  }

  render() {
    return (
      <Page>
        <div className="about_us">
          <section className="hero is-light">
            <div className="hero-body">
              <div className="container">
                <h1 className="title is-pulled-left">O nas</h1>
              </div>
            </div>
          </section>
          <div className="container">
            <div className="cinema-info-wrapper">
              <div className="cinema-info-txt">
                <span className="label">Opis:</span>
                <p>{this.state.form.description}</p>
                <span className="label">Telefon:</span>
                <p>{this.state.form.telephone}</p>
                <span className="label">Email:</span>
                <p>{this.state.form.email}</p>
                <span className="label">Ulica:</span>
                <p>{this.state.form.street}</p>
                <p>{this.state.form.streetNumber}</p>
                <p>{this.state.form.city}</p>
                <p>{this.state.form.postCode}</p>
              </div>
              <div className="cinema-info-img">
                <img src={this.state.form.imgUrl} />
              </div>
            </div>
          </div>
        </div>
      </Page>
    )
  }
}

export default AboutUs;