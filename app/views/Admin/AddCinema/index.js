import React, { Component } from 'react';
import { MuiThemeProvider, Snackbar, TextField } from 'material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import './index.scss'

import { cinema } from 'services/api';
import Page from 'components/Page';
import Input from 'components/FormElements/Input';
import Form from 'components/FormElements/Form';
import {Link} from "react-router-dom";

const hideAutoFillColorStyle = {
  WebkitBoxShadow: '0 0 0 1000px white inset'
};
const hintStyle = {
  zIndex: '1'
};

const styles = {
  floatingLabelFocusStyle: {
    color: "#FF4081",
  },
  underlineStyle: {
    borderColor: "#FF4081",
  },
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
    !this.cinemaId && this.setState({
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
    if(!this.cinemaId) {
      return;
    }

    cinema.get(this.cinemaId)
      .then(response => {
        this.setState({
          ...this.state,
          form: response.data
        })
      })
  }

  get cinemaId() {
    return this.props.id || this.props.match.params.id;
  }

  onHandleClick = () => {
    cinema.update(this.state.form)
      .then((response) => this.setState({
        ...this.state,
        snackbar: true
      }))
      .catch(error => {
        console.log(error.response)
      });
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
				<div>
					<section className="hero is-light">
						<div className="hero-body">
							<div className="container">
								<h1 className="title">
									{this.cinemaId ? 'Edytuj ' + this.state.form.name : 'Dodaj nowe kino'}
								</h1>
							</div>
						</div>
					</section>
        <div className="container">
        <Link to="/admin/cinemas"><i className="material-icons">keyboard_arrow_left</i>Powrót do listy</Link>

        <Form>
          <div>
            <TextField
              name="name"
              floatingLabelText="Nazwa kina:"
              fullWidth={true}
              floatingLabelFixed={true}
              onChange={this.onInputChange}
              value={this.state.form.name}
              inputStyle={hideAutoFillColorStyle}
              hintStyle={hintStyle}
              underlineFocusStyle={styles.underlineStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
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
              underlineFocusStyle={styles.underlineStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            />
            <TextField
              name="streetNumber"
              floatingLabelText="Numer lokalu:"
              fullWidth={true}
              floatingLabelFixed={true}
              onChange={this.onInputChange}
              value={this.state.form.streetNumber}
              inputStyle={hideAutoFillColorStyle}
              hintStyle={hintStyle}
              underlineFocusStyle={styles.underlineStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
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
              hintText="xx-xxx"
              underlineFocusStyle={styles.underlineStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
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
              underlineFocusStyle={styles.underlineStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            />
            <TextField
              name="telephone"
              floatingLabelText="Telefon kontaktowy:"
              fullWidth={true}
              floatingLabelFixed={true}
              onChange={this.onInputChange}
              value={this.state.form.telephone}
              inputStyle={hideAutoFillColorStyle}
              hintStyle={hintStyle}
              hintText="xxx-xxx-xxx"
              underlineFocusStyle={styles.underlineStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            />
            <TextField
              name="email"
              floatingLabelText="Adres email:"
              fullWidth={true}
              floatingLabelFixed={true}
              onChange={this.onInputChange}
              value={this.state.form.email}
              inputStyle={hideAutoFillColorStyle}
              hintStyle={hintStyle}
              underlineFocusStyle={styles.underlineStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            />
            <TextField
              name="description"
              floatingLabelText="Opis kina:"
              fullWidth={true}
              floatingLabelFixed={true}
              multiLine={true}
              onChange={this.onInputChange}
              value={this.state.form.description}
              inputStyle={hideAutoFillColorStyle}
              hintStyle={hintStyle}
              underlineFocusStyle={styles.underlineStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
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
        </div>
        </div>
      </Page>
    )
  }
}

export default AddCinema;
