import React, {Component} from 'react';
import {client} from 'services/api';
import './index.scss'
import DatePicker from "react-datepicker";
import moment from "moment";

class Register extends Component {

  constructor(props) {
    super(props);

    this.state = {
      form: {
        email: "",
        password: "",
        birthDate: null,
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

	dateChange (value) {
		return this.setState({ form: {
				...this.state.form,
				birthDate: value
			}});
	}
	
	isFormInvalid() {
  	return !this.state.form.birthDate || !this.state.form.password || !this.state.form.email || !this.validateEmail(this.state.form.email)
	}
	
	validateEmail(email) {
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}
	

  render() {
    return (
      <div className="page-container register">
        <form className="">
          <div className="field">
            <label className="label">Email <span style={{color: 'red', marginLeft: '5px'}}>*</span></label>
            <input className="input"
                   type="email"
                   name="email"
                   value={this.state.form.email}
                   onChange={this.onInputChange}
                   required/>
          </div>
          <div className="field">
            <label className="label">Hasło <span style={{color: 'red', marginLeft: '5px'}}>*</span></label>
            <input className="input"
                   type="password"
                   name="password"
                   value={this.state.form.password}
                   onChange={this.onInputChange}
                   required/>
          </div>
					<DatePicker
						customInput={
						  <div className="field">
                <label className="label">Data urodzenia <span style={{color: 'red', marginLeft: '5px'}}>*</span></label>
                <input className="input"
                       type="text"
                       name="birthDate"
                       value={this.state.form.birthDate ? this.state.form.birthDate.format('YYYY-MM-DD') : ''}
                       required/>
              </div>
						}
						showMonthDropdown
						showYearDropdown
						dropdownMode="select"
						showDisabledMonthNavigation
						dateFormat="YYYY-MM-DD"
						selected={this.state.form.birthDate}
						onChange={this.dateChange.bind(this)}
					/>

          <button type="button" className="button" disabled={this.isFormInvalid()} onClick={this.onHandleClick}>Zarejestruj</button>

        </form>
      </div>
    )
  }
}

export default Register;
