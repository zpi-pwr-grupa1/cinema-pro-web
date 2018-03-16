import React, {Component} from 'react';
import Layout from 'components/Layout';
import Header from 'components/Header';
import {Form, Field} from 'simple-react-forms';

class SimpleFormDemo extends Component {
  onClickHandler () {
    console.log(this.refs['simpleForm'].getFormValues());
  }
  render () {
    return (
    <div>
      <Form ref='simpleForm'>
          <Field
            name='name'
            label='Podaj imię'
            type='text'
          />
          <Field
            name='surname'
            label='Podaj nazwisko'
            type='text'
          />
		  <Field
            name='email'
            label='Podaj email'
            type='email'
          />
		  <Field
            name='password'
            label='Podaj hasło'
            type='password'
          />
		  <Field
            name='repeatPassword'
            label='Powtórz hasło'
            type='password'
          />
		  <Field
            name='dateOfBirth'
            label='Podaj datę urodzenia:'
            type='date'
          />
      </Form>
      <button onClick={this.onClickHandler.bind(this)}>Submit</button>
    </div>

    );
  }
}
export default App;
