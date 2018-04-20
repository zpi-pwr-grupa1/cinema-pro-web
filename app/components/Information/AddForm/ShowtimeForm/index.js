import React, { Component } from 'react';
import {MuiThemeProvider, Snackbar, TextField, RaisedButton } from 'material-ui';
import './index.scss'
import { showtime } from 'services/api';
import { cinema } from 'services/api';

import Input from 'components/FormElements/Input';
import Form from 'components/FormElements/Form';

const hideAutoFillColorStyle = {
  WebkitBoxShadow: '0 0 0 1000px white inset'
};
const hintStyle = {
  zIndex: '1'
};


class ShowtimeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
      },
    };
  }

  onHandleClick = () => {
    hall.new(this.state.form)
      .then((response) => this.setState({
        ...this.state,
        snackbar: true
      }))
    this.cleanForm();
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
      <Form>
        <h1>{this.cinemaId ? 'Edytuj ' : 'Dodawanie seansu'}</h1>
          <div>
            <TextField
              name=""
              floatingLabelText="ID kina:"
              fullWidth={true}
              floatingLabelFixed={true}
              inputStyle={hideAutoFillColorStyle}
              hintStyle={hintStyle}
            />
            <TextField
              name=""
              floatingLabelText="Nazwa kina:"
              fullWidth={true}
              floatingLabelFixed={true}
              inputStyle={hideAutoFillColorStyle}
              hintStyle={hintStyle}
            />
            <TextField
              name=""
              floatingLabelText="Data i czas rozpoczęcia seansu:"
              fullWidth={true}
              floatingLabelFixed={true}
              inputStyle={hideAutoFillColorStyle}
              hintStyle={hintStyle}
              hintText="yyyy-mm-dd"
            />
            <TextField
              name=""
              floatingLabelText="Numer sali:"
              fullWidth={true}
              floatingLabelFixed={true}
              inputStyle={hideAutoFillColorStyle}
              hintStyle={hintStyle}
            />
            <TextField
              name=""
              floatingLabelText="Nazwa filmu:"
              fullWidth={true}
              floatingLabelFixed={true}
              inputStyle={hideAutoFillColorStyle}
              hintStyle={hintStyle}
            />
            <RaisedButton className="add_button" label='Dodaj' />
          </div>
      </Form>
    )
  }
}

export default ShowtimeForm;