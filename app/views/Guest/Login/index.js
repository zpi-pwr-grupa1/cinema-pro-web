import React, {Component} from 'react';
import './index.scss';
import {user} from "services/api";
import {auth} from "services/auth";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: 'client@example.com',
        password: 'haslo123',
      }
    };
  }

  onInputChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      form: {
        ...this.state.form,
        [name]: value,
      }
    });
  }

  handleSubmit(event) {
    return user.login(this.state.form)
      .then(data => {
        auth.authenticate(data);
        this.props.history.push('/');
      })
      .catch(err => alert('server respond with err: ' + err))
  }

  render() {
    return (
      <div className="page-container login">
        <form className="" action="javascript:() => false;" noValidate>
          <div className="field">
            <label className="label">Email</label>
            <input className="input"
                   type="text"
                   name="email"
                   value={this.state.form.email}
                   onChange={this.onInputChange}
                   required/>
          </div>

          <div className="field">
            <label className="label">Hasło</label>
            <input className="input"
                   type="password"
                   name="password"
                   value={this.state.form.password}
                   onChange={this.onInputChange}
                   required/>
          </div>

          <button className="button" onClick={() => this.handleSubmit()}>Zaloguj</button>

        </form>
      </div>
    )
  }
}

export default Login;
