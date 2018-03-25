import React, { Component } from 'react';
import { MuiThemeProvider, TextField } from "material-ui";

import Page from 'components/Page';
import Input from 'components/FormElements/Input';
import Form from 'components/FormElements/Form';


class AddCinema extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        address: "",
        phone: "",
        email: "",
        description: ""
      }
    };
  }

  componentDidMount() {

  }

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ form: {
      ...this.state.form,
      [name]: value,
    }});
  }

  render() {
    console.log(this.state)
    return (
      <Page>
        <Form>
          <h1>Informacje o kinie:</h1>
          <MuiThemeProvider>
           <div>
              <TextField
                defaultValue=""
                floatingLabelText="Adres:"
                fullWidth={true}
                floatingLabelFixed={true}
              />
              <TextField
                defaultValue=""
                floatingLabelText="Telefon:"
                fullWidth={true}
                floatingLabelFixed={true}
              />
              <TextField
                defaultValue=""
                floatingLabelText="Email:"
                fullWidth={true}
                floatingLabelFixed={true}
              />
              <TextField
                defaultValue=""
                floatingLabelText="Opis:"
                fullWidth={true}
                floatingLabelFixed={true}
                multiLine={true}
              />
            </div>
            </MuiThemeProvider>
        </Form>
      </Page>
    )
  }
}

export default AddCinema;
