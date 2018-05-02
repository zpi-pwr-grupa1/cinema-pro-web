import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './index.scss'

import {movie} from 'services/api';
import Page from 'components/Page';

class MovieInfo extends Component {
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
    };
  }

  componentDidMount() {
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

  render() {
    return (
      <Page>
        <div>
          <section className="hero is-light">
            <div className="hero-body">
              <div className="container">
                <h1>{this.state.form.title}</h1>
              </div>
            </div>
          </section>
          <div className="movie-info-wrapper">
            <div className="movie-info-txt">
              <p className="types">Science-Fiction</p>
              <p>Czas trwania: {this.state.form.runTime} min. / Od lat: {this.state.form.age} / Produkcja: {this.state.form.country}</p>
              <p className="headingsp">Premiera:</p>
              <p>{this.state.form.polishReleaseDate} (Polska), {this.state.form.worldReleaseDate} (Świat)</p>
              <p className="headingsp">Reżyseria:</p>
              <p>{this.state.form.director}</p>
              <p className="headingsp">Obsada:</p>
              <p>{this.state.form.movieCast}</p>
              <p className="headingsp">Opis filmu:</p>
              <p>{this.state.form.storyline}</p>
              <div className="arrow">
              <Link to="/admin/movies"><i className="material-icons">keyboard_arrow_left</i>Powrót do listy</Link>
              </div>
            </div>
            <div className="movie-info-img">
              <div className="imgimg">
                <img className="poster" src={this.state.form.imgURL} />
              </div>
            </div>
          </div>
        </div>
      </Page>
    )
  }
}

export default MovieInfo;
