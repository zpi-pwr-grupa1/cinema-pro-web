import React, {Component} from 'react';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
		<label> Podaj email: 
			<input type="email" name="email" />
		</label> <br />
		<label> Podaj imię: 
			<input type="text" name="name" />
		</label> <br />
        <label> Podaj nazwisko: 
			<input type="text" name="surname" />
		</label> <br />
		<label> Podaj hasło: 
			<input type="password" name="password" />
		</label> <br />
		<label> Powtórz hasło: 
			<input type="password" name="repassword" />
		</label> <br />
		<input type="submit" value="Submit" />
      </form>
    );
  }
}
export default User;
