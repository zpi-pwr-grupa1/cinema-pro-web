import React, {Component} from 'react';
import * as axios from "axios";
import {client} from 'services/api';
import './index.scss'

class Register extends Component {

  constructor(props) {
    super(props);

    this.state = {
      form: {
        email: "",
        password: "",
        birthDate: "",
      }
    };
  }

  onHandleClick = () => {
    client.update(this.state.form)
      .then((response) => this.setState({
        ...this.state,
      }))
  }

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ form: {
      ...this.state.form,
      [name]: value,
    }});
  }

  render() {
    return (
      <div className="page-container register">
        <form className="effect5">
          <div className="field">
            <label className="label">Podaj email:</label>
            <input className="input"
                   type="email"
                   name="email"
                   value={this.state.form.email}
                   onChange={this.onInputChange}
                   required/>
          </div>
          <div className="field">
            <label className="label">Podaj hasło:</label>
            <input className="input"
                   type="password"
                   name="password"
                   value={this.state.form.password}
                   onChange={this.onInputChange}
                   required/>
          </div>
          <div className="field">
            <label className="label">Podaj datę urodzenia:</label>
            <input className="input"
                   type="text"
                   name="birthDate"
                   value={this.state.form.birthDate}
                   onChange={this.onInputChange}
                   required/>
          </div>
          <div className="field">
            <label className="label">Wybierz ulubione typy filmów:</label>
            <input className="input"
                   type="text"
                   name="groups"/>
          </div>

          <button type="button" className="button" onClick={this.onHandleClick}>Zarejestruj</button>

        </form>
      </div>
    )
  }
}

export default Register;
