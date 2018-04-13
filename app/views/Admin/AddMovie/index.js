import React, {Component} from 'react';
import {Snackbar, TextField} from 'material-ui';
import './index.scss'

import {movie} from 'services/api';
import Page from 'components/Page';
import Form from 'components/FormElements/Form';
import Button from "material-ui/es/Button/Button";

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
	  snackbar: false,
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
	if(!this.movieId) {
      return;
    }
	
	movie.get(this.movieId)
      .then(response => {
        console.log(response);
        this.setState({
          ...this.state,
          form: response.data
        })
      })
  }
  
  get movieId() {
    return this.props.match.params.id;
  }

  onHandleClick = () => {
    movie.new(this.state.form)
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
          <h1>{this.movieId ? 'Edytuj ' + this.state.form.title : 'Dodawanie filmu'}</h1>
           <div>
              <TextField
                name="title"                
                floatingLabelText="Tytuł:"
                fullWidth={true}
                floatingLabelFixed={true}
                onChange={this.onInputChange}
				        value={this.state.form.title}
                inputStyle={hideAutoFillColorStyle}
                hintStyle={hintStyle} 
              />
                <TextField
                name="age"
                floatingLabelText="Rok:"
                fullWidth={true}
                floatingLabelFixed={true}
                onChange={this.onInputChange}
				        value={this.state.form.age}
                inputStyle={hideAutoFillColorStyle}
                hintStyle={hintStyle} 
              />
                <TextField
                name="country"
                floatingLabelText="Kraj:"
                fullWidth={true}
                floatingLabelFixed={true}
                onChange={this.onInputChange}
				        value={this.state.form.country}
                inputStyle={hideAutoFillColorStyle}
                hintStyle={hintStyle} 
              />
                <TextField
                name="runTime"
                floatingLabelText="Czas trwania:"
                fullWidth={true}
                floatingLabelFixed={true}
                onChange={this.onInputChange}
				        value={this.state.form.runTime}
                inputStyle={hideAutoFillColorStyle}
                hintStyle={hintStyle} 
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
              />
              <TextField
                name="storyline"
                floatingLabelText="Opis:"
                fullWidth={true}
                floatingLabelFixed={true}
                onChange={this.onInputChange}
				        value={this.state.form.storyline}
                inputStyle={hideAutoFillColorStyle}
                hintStyle={hintStyle} 
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
              />
              <Button className="add_button" label={this.movieId ? 'Edytuj' : 'Dodaj'} onClick={this.onHandleClick} />
            </div>
        </Form>
		
		    <Snackbar
          open={this.state.snackbar}
          message={this.movieId ? 'Pomyślnie edytowano film' : 'Pomyślnie dodano film'}
          autoHideDuration={2000}
          onRequestClose={ () => { this.state.snackbar = false } }
        />
      </Page>
    )
  }
}

export default AddMovie;
