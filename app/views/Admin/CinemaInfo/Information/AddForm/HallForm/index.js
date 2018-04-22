import React, {Component} from 'react';
import {RaisedButton, TextField} from 'material-ui';
import './index.scss'
import {hall} from 'services/api';
import Form from 'components/FormElements/Form';

const hideAutoFillColorStyle = {
  WebkitBoxShadow: '0 0 0 1000px white inset'
};
const hintStyle = {
  zIndex: '1'
};


class HallForm extends Component {
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
    )
  }
}

export default HallForm;
