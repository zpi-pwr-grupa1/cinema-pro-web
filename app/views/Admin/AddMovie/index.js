import React, { Component } from 'react';
import { MuiThemeProvider, TextField } from 'material-ui';
import RaisedButton from 'material-ui/RaisedButton';
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
      },
      error: '',
    };
  }

  cleanForm = () => {
    this.setState({
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

  }

  onHandleClick = () => {
    movie.new(this.state.form).then((response) => {
      alert('Nowy film został dodany.');
      this.cleanForm();
    }).catch((error) => {
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
          <h1>Dodawanie nowego filmu:</h1>
          <MuiThemeProvider>
           <div>
              <TextField
                name="title"
                value={this.state.form.title}
                floatingLabelText="Tytuł:"
                fullWidth={true}
                floatingLabelFixed={true}
                onChange={this.onInputChange}
                inputStyle={hideAutoFillColorStyle}
                hintStyle={hintStyle} 
              />
                <TextField
                name="age"
                value={this.state.form.age}
                floatingLabelText="Rok:"
                fullWidth={true}
                floatingLabelFixed={true}
                onChange={this.onInputChange}
                inputStyle={hideAutoFillColorStyle}
                hintStyle={hintStyle} 
              />
                <TextField
                name="country"
                value={this.state.form.country}
                floatingLabelText="Kraj:"
                fullWidth={true}
                floatingLabelFixed={true}
                onChange={this.onInputChange}
                inputStyle={hideAutoFillColorStyle}
                hintStyle={hintStyle} 
              />
                <TextField
                name="runTime"
                value={this.state.form.runTime}
                floatingLabelText="Czas trwania:"
                fullWidth={true}
                floatingLabelFixed={true}
                onChange={this.onInputChange}
                inputStyle={hideAutoFillColorStyle}
                hintStyle={hintStyle} 
                />
              <TextField
                name="director"
                value={this.state.form.director}
                floatingLabelText="Reżyseria:"
                fullWidth={true}
                floatingLabelFixed={true}
                onChange={this.onInputChange}
                inputStyle={hideAutoFillColorStyle}
                hintStyle={hintStyle} 
              />
              <TextField
                name="movieCast"
                value={this.state.form.movieCast}
                floatingLabelText="Obsada:"
                fullWidth={true}
                floatingLabelFixed={true}
                multiLine={true}
                onChange={this.onInputChange}
                inputStyle={hideAutoFillColorStyle}
                hintStyle={hintStyle} 
              />
              <TextField
                name="storyline"
                value={this.state.form.storyline}
                floatingLabelText="Opis:"
                fullWidth={true}
                floatingLabelFixed={true}
                onChange={this.onInputChange}
                inputStyle={hideAutoFillColorStyle}
                hintStyle={hintStyle} 
              />
              <TextField
                name="polishReleaseDate"
                value={this.state.form.polishReleaseDate}
                floatingLabelText="Premiera(Polska):"
                fullWidth={true}
                floatingLabelFixed={true}
                onChange={this.onInputChange}
                inputStyle={hideAutoFillColorStyle}
                hintStyle={hintStyle} 
              />
              <TextField
                name="worldReleaseDate"
                value={this.state.form.worldReleaseDate}
                floatingLabelText="Premiera(Świat):"
                fullWidth={true}
                floatingLabelFixed={true}
                onChange={this.onInputChange}
                inputStyle={hideAutoFillColorStyle}
                hintStyle={hintStyle} 
              />
              <TextField
                name="imgURL"
                value={this.state.form.imgURL}
                floatingLabelText="Plakat (url):"
                fullWidth={true}
                floatingLabelFixed={true}
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

export default AddMovie;
