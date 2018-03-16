import React from 'react';

const UserRegisterForm = (props) => (
  <div className="main_containter">
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
            name='birthDate'
            label='Podaj datę urodzenia:'
            type='date'
          />
      </Form>
      <button onClick={this.onClickHandler.bind(this)}>Submit</button>
    </div>
  </div>
);

export default UserRegisterForm;