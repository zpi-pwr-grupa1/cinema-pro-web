import React, { Component } from 'react';
import {MuiThemeProvider, Snackbar, TextField, RaisedButton } from 'material-ui';
import './index.scss'
import { hall } from 'services/api';
import { cinema } from 'services/api';

import Page from 'components/Page';
import Input from 'components/FormElements/Input';
import Form from 'components/FormElements/Form';

const hideAutoFillColorStyle = {
  WebkitBoxShadow: '0 0 0 1000px white inset'
};
const hintStyle = {
  zIndex: '1'
};


class AddHall extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
      },
    };
  }

  componentDidMount() {
    if(!this.cinemaId) {
      return;
    }

    cinema.get(this.cinemaId)
      .then(response => {
        console.log(response);
        this.setState({
          ...this.state,
          form: response.data
        })
      })
  }

  get cinemaId() {
    return this.props.match.params.id;
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
      <Page>
        <Form>
          <h1>{this.cinemaId ? 'Edytuj ' : 'Dodawanie sali'}</h1>
          <div>
            <TextField
              name=""
              floatingLabelText="Kino:"
              fullWidth={true}
              floatingLabelFixed={true}
              inputStyle={hideAutoFillColorStyle}
              hintStyle={hintStyle}
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
              floatingLabelText="Liczba kolumn:"
              fullWidth={true}
              floatingLabelFixed={true}
              inputStyle={hideAutoFillColorStyle}
              hintStyle={hintStyle}
            />
            <TextField
              name=""
              floatingLabelText="Liczba rzędów:"
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

export default AddHall;
