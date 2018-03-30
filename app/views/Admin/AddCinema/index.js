import React, { Component } from 'react';
import { MuiThemeProvider, TextField } from 'material-ui';
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
        street: '',
        streetNumber: '',
        postCode: '',
        city: '',
        telephone: '',
        email: '',
        description: ''
      },
      error: '',
    };
  }

  componentDidMount() {

  }

  onHandleClick = () => {
    cinema.new(this.state.form).then((response) => {
      console.log(response)
      alert('Nowe kino zostało dodane.');
    }).catch((error) => {
      console.log(error)
      this.setState({ error: response.error })
    })
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
          <h1>Dodawanie kina:</h1>
          <MuiThemeProvider>
           <div>
              <TextField
                name="street"
                defaultValue=""
                floatingLabelText="Ulica:"
                fullWidth={true}
                floatingLabelFixed={true}
                onChange={this.onInputChange}
                inputStyle={hideAutoFillColorStyle}
                hintStyle={hintStyle} 
              />
                <TextField
                name="streetNumber"
                defaultValue=""
                floatingLabelText="Nr:"
                fullWidth={true}
                floatingLabelFixed={true}
                onChange={this.onInputChange}
                inputStyle={hideAutoFillColorStyle}
                hintStyle={hintStyle} 
              />
                <TextField
                name="postCode"
                defaultValue=""
                floatingLabelText="Kod pocztowy:"
                fullWidth={true}
                floatingLabelFixed={true}
                onChange={this.onInputChange}
                inputStyle={hideAutoFillColorStyle}
                hintStyle={hintStyle} 
              />
                <TextField
                name="city"
                defaultValue=""
                floatingLabelText="Miasto:"
                fullWidth={true}
                floatingLabelFixed={true}
                onChange={this.onInputChange}
                inputStyle={hideAutoFillColorStyle}
                hintStyle={hintStyle} 
                />
              <TextField
                name="telephone"
                defaultValue=""
                floatingLabelText="Telefon:"
                fullWidth={true}
                floatingLabelFixed={true}
                onChange={this.onInputChange}
                inputStyle={hideAutoFillColorStyle}
                hintStyle={hintStyle} 
              />
              <TextField
                name="email"
                defaultValue=""
                floatingLabelText="Email:"
                fullWidth={true}
                floatingLabelFixed={true}
                onChange={this.onInputChange}
                inputStyle={hideAutoFillColorStyle}
                hintStyle={hintStyle} 
              />
              <TextField
                name="description"
                defaultValue=""
                floatingLabelText="Opis:"
                fullWidth={true}
                floatingLabelFixed={true}
                multiLine={true}
                onChange={this.onInputChange}
                inputStyle={hideAutoFillColorStyle}
                hintStyle={hintStyle} 
              />
              <RaisedButton className="add_button" label="DODAJ" onClick={this.onHandleClick} />
            </div>
          </MuiThemeProvider>
        </Form>
      </Page>
    )
  }
}

export default AddCinema;
