import React, {Component} from 'react';
import * as axios from "axios";
import './index.scss'

//FIXME utilise redux
class User extends Component {

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
      <div className="user container">
        <form action="javascript:() => false;" noValidate>
          <div className="field">
            <label className="label">Podaj email:</label>
            <input className="input" type="email" name="email" value={this.state.userForm.email}
                   onChange={this.handleInputChange.bind(this)}/>
          </div>
          <div className="field">
            <label className="label"> Podaj imię:</label>
            <input className="input" type="text" name="name" value={this.state.userForm.name}
                   onChange={this.handleInputChange.bind(this)}/>
          </div>
          <div className="field">
            <label className="label"> Podaj nazwisko:</label>
            <input className="input" type="text" name="lastName" value={this.state.userForm.lastName}
                   onChange={this.handleInputChange.bind(this)}/>
          </div>
          <div className="field">
            <label className="label"> Podaj hasło:</label>
            <input className="input" type="password" name="password" value={this.state.userForm.password}
                   onChange={this.handleInputChange.bind(this)}/>
          </div>
          <div className="field">
            <label className="label"> Powtórz hasło: </label>
            <input className="input" type="password" name="passwordConfirm" value={this.state.userForm.passwordConfirm}
                   onChange={this.handleInputChange.bind(this)}/>
          </div>
          <button className="button" onClick={() => this.handleSubmit()}>Wyślij</button>
        </form>
      </div>
    );
  }
}

export default User;
