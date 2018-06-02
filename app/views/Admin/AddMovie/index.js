import React, {Component} from 'react';
import {Snackbar, TextField, SelectField, RaisedButton, MenuItem} from 'material-ui';
import './index.scss'

import {movie, movieGroup} from 'services/api';
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
  customWidth: {
    width: 300,
  }
};

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        title: '',
        age: '',
        country: '',
        runTime: '',
        polishReleaseDate: '',
        worldReleaseDate: '',
        storyline: '',
        imgURL: '',
        director: '',
        movieCast: '',
        groups: [],
      },
      groups: [],
      snackbar: false,
      error: '',
    };
  }

  cleanForm = () => {
    !this.movieId && this.setState({
      form: {
        title: '',
        age: '',
        country: '',
        runTime: '',
        polishReleaseDate: '',
        worldReleaseDate: '',
        storyline: '',
        imgURL: '',
        director: '',
        movieCast: '',
      }
    });
  }

  componentDidMount() {
    movieGroup.all()
      .then(response => {
        this.setState({
          groups: response.data
        })
      })

    if(!this.movieId) {
      return;
    }

    movie.get(this.movieId)
      .then(response => {
        this.setState({
          ...this.state,
          form: response.data
        })
      })
  }

  get movieId() {
    return this.props.match.params.id;
  }

  handleChange = (event, index, values) => {
    this.setState({ form: {
      ...this.state.form,
      groups: values
    }});
  }

  onHandleClick = () => {
    movie.new(this.state.form)
      .then((response) => this.setState({
        ...this.state,
        snackbar: true
      }))
      .catch(error => {
        console.log(error.response)
        alert("Nie można dodać/edytować filmu.")
      });
  }

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ form: {
        ...this.state.form,
        [name]: value,
      }});
  }

  menuItems(values) {
    return this.state.groups.map((group) => (
      <MenuItem
        key={group.id}
        insetChildren={true}
        checked={values && values.indexOf(group) > -1}
        value={group}
        primaryText={group.label}
      />
    ));
  }

  render() {
    const {groups} = this.state.form;
    return (
      <Page>
        <div>
					<section className="hero is-light">
						<div className="hero-body">
							<div className="container">
								<h1 className="title">
									{this.movieId ? 'Edytuj ' + this.state.form.title : 'Dodaj nowy film'}
								</h1>
							</div>
						</div>
					</section>

          <div className="container">
            <Link to="/admin/movies"><i className="material-icons">keyboard_arrow_left</i>Powrót do listy</Link>

            <Form>
              <div>
                <TextField
                  name="title"
                  floatingLabelText="Tytuł filmu:"
                  fullWidth={true}
                  floatingLabelFixed={true}
                  onChange={this.onInputChange}
                  value={this.state.form.title}
                  inputStyle={hideAutoFillColorStyle}
                  hintStyle={hintStyle}
                  underlineFocusStyle={styles.underlineStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                />
                <TextField
                  name="age"
                  floatingLabelText="Rok produkcji:"
                  fullWidth={true}
                  floatingLabelFixed={true}
                  onChange={this.onInputChange}
                  value={this.state.form.age}
                  inputStyle={hideAutoFillColorStyle}
                  hintStyle={hintStyle}
                  hintText="xxxx"
                  underlineFocusStyle={styles.underlineStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                />
                <TextField
                  name="country"
                  floatingLabelText="Kraj produkcji:"
                  fullWidth={true}
                  floatingLabelFixed={true}
                  onChange={this.onInputChange}
                  value={this.state.form.country}
                  inputStyle={hideAutoFillColorStyle}
                  hintStyle={hintStyle}
                  underlineFocusStyle={styles.underlineStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                />
                <TextField
                  name="runTime"
                  floatingLabelText="Czas trwania (min.):"
                  fullWidth={true}
                  floatingLabelFixed={true}
                  onChange={this.onInputChange}
                  value={this.state.form.runTime}
                  inputStyle={hideAutoFillColorStyle}
                  hintStyle={hintStyle}
                  underlineFocusStyle={styles.underlineStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                />
                <TextField
                  name="director"
                  floatingLabelText="Reżyseria:"
                  fullWidth={true}
                  floatingLabelFixed={true}
                  onChange={this.onInputChange}
                  value={this.state.form.director}
                  inputStyle={hideAutoFillColorStyle}
                  hintStyle={hintStyle}
                  underlineFocusStyle={styles.underlineStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                />
                <TextField
                  name="movieCast"
                  floatingLabelText="Obsada:"
                  fullWidth={true}
                  floatingLabelFixed={true}
                  multiLine={true}
                  onChange={this.onInputChange}
                  value={this.state.form.movieCast}
                  inputStyle={hideAutoFillColorStyle}
                  hintStyle={hintStyle}
                  underlineFocusStyle={styles.underlineStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                />
                <TextField
                  name="storyline"
                  floatingLabelText="Opis filmu:"
                  fullWidth={true}
                  floatingLabelFixed={true}
                  onChange={this.onInputChange}
                  value={this.state.form.storyline}
                  inputStyle={hideAutoFillColorStyle}
                  hintStyle={hintStyle}
                  underlineFocusStyle={styles.underlineStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                />
                <TextField
                  name="polishReleaseDate"
                  floatingLabelText="Premiera(Polska):"
                  fullWidth={true}
                  floatingLabelFixed={true}
                  onChange={this.onInputChange}
                  value={this.state.form.polishReleaseDate}
                  inputStyle={hideAutoFillColorStyle}
                  hintStyle={hintStyle}
                  hintText="yyyy-mm-dd"
                  underlineFocusStyle={styles.underlineStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                />
                <TextField
                  name="worldReleaseDate"
                  floatingLabelText="Premiera(Świat):"
                  fullWidth={true}
                  floatingLabelFixed={true}
                  onChange={this.onInputChange}
                  value={this.state.form.worldReleaseDate}
                  inputStyle={hideAutoFillColorStyle}
                  hintStyle={hintStyle}
                  hintText="yyyy-mm-dd"
                  underlineFocusStyle={styles.underlineStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                />
                <TextField
                  name="imgURL"
                  floatingLabelText="Plakat (url):"
                  fullWidth={true}
                  floatingLabelFixed={true}
                  onChange={this.onInputChange}
                  value={this.state.form.imgURL}
                  inputStyle={hideAutoFillColorStyle}
                  hintStyle={hintStyle}
                  underlineFocusStyle={styles.underlineStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                />
                <p className="add-types">Typ filmu:</p>
                <SelectField
                  multiple={true}
                  hintText="Select a name"
                  value={groups}
                  onChange={this.handleChange}
                  style={styles.customWidth}
                >
                {this.menuItems(groups)}
              </SelectField>
                <RaisedButton className="btn add_button" label={this.movieId ? 'Edytuj' : 'Dodaj'} onClick={this.onHandleClick} />
              </div>
            </Form>
          </div>

          <Snackbar
            open={this.state.snackbar}
            message={this.movieId ? 'Pomyślnie edytowano film' : 'Pomyślnie dodano film'}
            autoHideDuration={2000}
            onRequestClose={ () => { this.setState({snackbar: false}) } }
          />
        </div>
      </Page>
    )
  }
}

export default AddMovie;
