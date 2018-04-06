import React, { Component } from 'react';
import {MuiThemeProvider, Snackbar, TextField} from 'material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import './index.scss'

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

class AddCinema extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        name: '',
        street: '',
        streetNumber: '',
        postCode: '',
        city: '',
        telephone: '',
        email: '',
        description: ''
      },
      snackbar: false,
      error: '',
    };
  }

  cleanForm = () => {
    this.setState({
      form: {
        name: '',
        street: '',
        streetNumber: '',
        postCode: '',
        city: '',
        telephone: '',
        email: '',
        description: ''
      }
    });
  }

  componentDidMount() {
    if(this.cinemaId) {
      cinema.get(this.cinemaId)
        .then(response => {
          console.log(response);
          this.setState({
            ...this.state,
            form: response.data
          })
        })
    }
  }

  get cinemaId() {
    return this.props.match.params.id;
  }

  onHandleClick = () => {
    cinema.new(this.state.form)
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
          <h1>{this.cinemaId ? 'Edytuj ' + this.state.form.name : 'Dodawanie kina'}</h1>
           <div>
             <TextField
               name="name"
               floatingLabelText="Nazwa:"
               fullWidth={true}
               floatingLabelFixed={true}
               onChange={this.onInputChange}
               value={this.state.form.name}
               inputStyle={hideAutoFillColorStyle}
               hintStyle={hintStyle}
             />
              <TextField
                name="street"
                floatingLabelText="Ulica:"
                fullWidth={true}
                floatingLabelFixed={true}
                onChange={this.onInputChange}
                value={this.state.form.street}
                inputStyle={hideAutoFillColorStyle}
                hintStyle={hintStyle} 
              />
                <TextField
                name="streetNumber"
                floatingLabelText="Nr:"
                fullWidth={true}
                floatingLabelFixed={true}
                onChange={this.onInputChange}
                value={this.state.form.streetNumber}
                inputStyle={hideAutoFillColorStyle}
                hintStyle={hintStyle} 
              />
                <TextField
                name="postCode"
                floatingLabelText="Kod pocztowy:"
                fullWidth={true}
                floatingLabelFixed={true}
                onChange={this.onInputChange}
                value={this.state.form.postCode}
                inputStyle={hideAutoFillColorStyle}
                hintStyle={hintStyle} 
              />
                <TextField
                name="city"
                floatingLabelText="Miasto:"
                fullWidth={true}
                floatingLabelFixed={true}
                onChange={this.onInputChange}
                value={this.state.form.city}
                inputStyle={hideAutoFillColorStyle}
                hintStyle={hintStyle} 
                />
              <TextField
                name="telephone"
                floatingLabelText="Telefon:"
                fullWidth={true}
                floatingLabelFixed={true}
                onChange={this.onInputChange}
                value={this.state.form.telephone}
                inputStyle={hideAutoFillColorStyle}
                hintStyle={hintStyle} 
              />
              <TextField
                name="email"
                floatingLabelText="Email:"
                fullWidth={true}
                floatingLabelFixed={true}
                onChange={this.onInputChange}
                value={this.state.form.email}
                inputStyle={hideAutoFillColorStyle}
                hintStyle={hintStyle} 
              />
              <TextField
                name="description"
                floatingLabelText="Opis:"
                fullWidth={true}
                floatingLabelFixed={true}
                multiLine={true}
                onChange={this.onInputChange}
                value={this.state.form.description}
                inputStyle={hideAutoFillColorStyle}
                hintStyle={hintStyle} 
              />
              <RaisedButton className="add_button" label={this.cinemaId ? 'Edytuj' : 'Dodaj'} onClick={this.onHandleClick} />
            </div>
        </Form>

        <Snackbar
          open={this.state.snackbar}
          message={this.cinemaId ? 'Pomyślnie edytowano kino' : 'Pomyślnie dodano kino'}
          autoHideDuration={2000}
          onRequestClose={ () => { this.state.snackbar = false } }
        />
      </Page>
    )
  }
}

export default AddCinema;
