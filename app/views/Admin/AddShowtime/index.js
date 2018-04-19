import React, { Component } from 'react';
import {MuiThemeProvider, Snackbar, TextField, RaisedButton } from 'material-ui';
import './index.scss'

import { movie } from 'services/api';
import Page from 'components/Page';
import Input from 'components/FormElements/Input';
import Form from 'components/FormElements/Form';

const hideAutoFillColorStyle = {
  WebkitBoxShadow: '0 0 0 1000px white inset'
};
const hintStyle = {
  zIndex: '1'
};


class AddShowtime extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
      },
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <Page>
        <Form>
          <h1>Dodawanie seansu</h1>
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
      </Page>
    )
  }
}

export default AddShowtime;
