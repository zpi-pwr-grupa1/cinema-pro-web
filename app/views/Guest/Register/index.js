import React, {Component} from 'react';
import * as axios from "axios";
import './index.scss'

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {userForm: {}};
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;

    this.setState({
      userForm: {
        [name]: event.value
      }
    });
  }

  handleSubmit(event) {
    return axios
      .post('/client/update', this.state.userForm) // FIXME move to service
      .then(data => alert('wow, it succeeded'))
      .catch(err => alert('server respond with err: ' + err))
  }

  render() {
    return (
      <div className="page-container register">
        <form className="effect5" action="javascript:() => false;" noValidate>
          <div className="field">
            <label className="label">Podaj email</label>
            <input className="input"
                   type="email"
                   name="email"
                   required/>
          </div>
          <div className="field">
            <label className="label">Podaj imię</label>
            <input className="input"
                   type="text"
                   name="name"
                   required/>
          </div>
          <div className="field">
            <label className="label">Podaj nazwisko</label>
            <input className="input"
                   type="text"
                   name="lastname"
                   required/>
          </div>
          <div className="field">
            <label className="label">Podaj hasło</label>
            <input className="input"
                   type="password"
                   name="password"
                   required/>
          </div>
          <div className="field">
            <label className="label">Powtórz hasło</label>
            <input className="input"
                   type="password"
                   name="password"
                   required/>
          </div>

          <button className="button" onClick={() => this.handleSubmit()}>Zarejestruj</button>

        </form>
      </div>
    )
  }
}

export default Register;
