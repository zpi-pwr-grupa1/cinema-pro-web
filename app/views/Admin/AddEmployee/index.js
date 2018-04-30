import React, {Component} from 'react';
import {TextField, DropDownMenu, MenuItem} from 'material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import './index.scss'
import {cinema} from 'services/api';

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

const initialState = {
  form: {
    cinema: {},
  },
  data: {
    cinemas: [],
  }
};

class AddEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = initialState
  }

  componentDidMount() {
    Promise
      .all([
        cinema.all(),
      ])
      .then(([resM, resH]) =>
        this.setState({
          form: this.props.form ? {
            cinema: resM.data.filter(m => m.id === this.props.form.cinema.id)[0],
          } : initialState.form,
          data: {
            cinemas: resM.data,
          }
        })
      )

  }

  get employeeId() {
    return this.props.match.params.id;
  }

  cinemaChange (event, index, value) {
    return this.setState({ form: {
        ...this.state.form,
        cinema: value
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
                  {this.employeeId ? 'Edytuj ' : 'Dodaj nowego pracownika'}
                </h1>
              </div>
            </div>
          </section>

          <div className="container">
            <Link to="/admin/employees"><i className="material-icons">keyboard_arrow_left</i>Powrót do listy</Link>

            <Form>
              <div>
                Wybierz kino:
                <DropDownMenu
                  style={{width: "100%", padding: 0}} 
                  onChange={this.cinemaChange.bind(this)} 
                  maxHeight={300} 
                  value={this.state.form.cinema}
                >
                  {this.state.data.cinemas.map(m =>
                    <MenuItem 
                      style={{width: '300px'}} 
                      value={m} 
                      label={m.name} 
                      key={m.id} 
                      primaryText={m.name} />
                  )}
                </DropDownMenu>
                <TextField
                  name="title"
                  floatingLabelText="Imię pracownika:"
                  fullWidth={true}
                  floatingLabelFixed={true}
                  inputStyle={hideAutoFillColorStyle}
                  hintStyle={hintStyle}
                  underlineFocusStyle={styles.underlineStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                />
                <TextField
                  name="title"
                  floatingLabelText="Nazwisko pracownika:"
                  fullWidth={true}
                  floatingLabelFixed={true}
                  inputStyle={hideAutoFillColorStyle}
                  hintStyle={hintStyle}
                  underlineFocusStyle={styles.underlineStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                />
                <TextField
                  name="title"
                  floatingLabelText="Miejsce zamieszkania:"
                  fullWidth={true}
                  floatingLabelFixed={true}
                  inputStyle={hideAutoFillColorStyle}
                  hintStyle={hintStyle}
                  underlineFocusStyle={styles.underlineStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                />
                <TextField
                  name="title"
                  floatingLabelText="Ulica:"
                  fullWidth={true}
                  floatingLabelFixed={true}
                  inputStyle={hideAutoFillColorStyle}
                  hintStyle={hintStyle}
                  underlineFocusStyle={styles.underlineStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                />
                <TextField
                  name="title"
                  floatingLabelText="Nr lokalu:"
                  fullWidth={true}
                  floatingLabelFixed={true}
                  inputStyle={hideAutoFillColorStyle}
                  hintStyle={hintStyle}
                  underlineFocusStyle={styles.underlineStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                />
                <TextField
                  name="title"
                  floatingLabelText="Kod pocztowy:"
                  fullWidth={true}
                  floatingLabelFixed={true}
                  inputStyle={hideAutoFillColorStyle}
                  hintStyle={hintStyle}
                  underlineFocusStyle={styles.underlineStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                />
                <TextField
                  name="title"
                  floatingLabelText="Telefon kontaktowy:"
                  fullWidth={true}
                  floatingLabelFixed={true}
                  inputStyle={hideAutoFillColorStyle}
                  hintStyle={hintStyle}
                  underlineFocusStyle={styles.underlineStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                />
                <TextField
                  name="title"
                  floatingLabelText="Adres email:"
                  fullWidth={true}
                  floatingLabelFixed={true}
                  inputStyle={hideAutoFillColorStyle}
                  hintStyle={hintStyle}
                  underlineFocusStyle={styles.underlineStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                />
                <TextField
                  name="title"
                  floatingLabelText="Data zatrudnienia:"
                  fullWidth={true}
                  floatingLabelFixed={true}
                  inputStyle={hideAutoFillColorStyle}
                  hintStyle={hintStyle}
                  underlineFocusStyle={styles.underlineStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                />

                <RaisedButton className="btn add_button" label={this.employeeId ? 'Edytuj' : 'Dodaj'} onClick={this.onHandleClick} />
              </div>
            </Form>
          </div>
        </div>
      </Page>
    )
  }
}

export default AddEmployee;
