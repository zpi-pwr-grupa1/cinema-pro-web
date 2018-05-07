import React, {Component} from 'react';
import {TextField, DropDownMenu, MenuItem, Snackbar} from 'material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import './index.scss'
import {cinema, employee} from 'services/api';

import Page from 'components/Page';
import Form from 'components/FormElements/Form';
import {Link} from "react-router-dom";

const hideAutoFillColorStyle = {
  WebkitBoxShadow: '0 0 0 1000px white inset',
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

class AddEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        name: "",
        surname: "",
        city: "",
        street: "",
        streetNumber: "",
        postCode: "",
        telephone: "",
        email: "",
        startingDateOfEmployment: "",
        cinema: {},
      },
      data: {
        cinemas: [],
      },
      snackbar: false,
      error: '',
    };
  }

  componentDidMount() {
    cinema.all()
      .then(response => {
        this.setState({
          ...this.state,
          data: {
            cinemas: response.data
          }
        })
      })

    if(!this.employeeId) {
      return;
    }
    employee.get(this.employeeId)
      .then(response => {
        this.setState({
          ...this.state,
          form: response.data
        })
      })
  }

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ form: {
      ...this.state.form,
      [name]: value,
    }});
  }

  cinemaChange (event, index, value) {
    return this.setState({ form: {
        ...this.state.form,
        cinema: value
    }});
  }

  onHandleClick = () => {
    if(this.employeeId) {
      employee.modify(this.state.form)
        .then((response) => this.setState({
          ...this.state,
          snackbar: true
        }))
    } else {
      employee.update(this.state.form)
        .then((response) => this.setState({
          ...this.state,
          snackbar: true
        }))
      }
  }

  get employeeId() {
    return this.props.match.params.id;
  }

  render() {
    return (
      <Page>
        <div>
          <section className="hero is-light">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">
                  {this.employeeId ? 'Edytuj pracownika' : 'Dodaj nowego pracownika'}
                </h1>
              </div>
            </div>
          </section>

          <div className="container">
            <Link to="/admin/employees"><i className="material-icons">keyboard_arrow_left</i>Powrót do listy</Link>

            <Form>
              <div>
                Kino: {this.state.form.cinema.name}
                <DropDownMenu
                  style={{width: "100%", padding: 0}} 
                  onChange={this.cinemaChange.bind(this)} 
                  maxHeight={300} 
                  value={this.state.form.cinema}
                >
                  {this.state.data.cinemas.map(cinema =>
                    <MenuItem 
                      style={{width: '300px'}} 
                      value={cinema} 
                      label={cinema.name} 
                      key={cinema.id} 
                      primaryText={cinema.name} />
                  )}
                </DropDownMenu>
                <TextField
                  name="name"
                  floatingLabelText="Imię pracownika:"
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
                  name="surname"
                  floatingLabelText="Nazwisko pracownika:"
                  fullWidth={true}
                  floatingLabelFixed={true}
                  onChange={this.onInputChange}
                  value={this.state.form.surname}
                  inputStyle={hideAutoFillColorStyle}
                  hintStyle={hintStyle}
                  underlineFocusStyle={styles.underlineStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                />
                <TextField
                  name="city"
                  floatingLabelText="Miejsce zamieszkania:"
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
                  floatingLabelText="Nr lokalu:"
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
                  name="startingDateOfEmployment"
                  floatingLabelText="Data zatrudnienia:"
                  fullWidth={true}
                  floatingLabelFixed={true}
                  onChange={this.onInputChange}
                  value={this.state.form.startingDateOfEmployment}
                  inputStyle={hideAutoFillColorStyle}
                  hintStyle={hintStyle}
                  underlineFocusStyle={styles.underlineStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                />

                <RaisedButton className="btn add_button" label={this.employeeId ? 'Edytuj' : 'Dodaj'} onClick={this.onHandleClick} />
              </div>
            </Form>
            <Snackbar
              open={this.state.snackbar}
              message={this.employeeId ? 'Pomyślnie edytowano dane pracownika' : 'Pomyślnie dodano pracownika'}
              autoHideDuration={2000}
              onRequestClose={ () => { this.state.snackbar = false } }
          />
          </div>
        </div>
      </Page>
    )
  }
}

export default AddEmployee;
