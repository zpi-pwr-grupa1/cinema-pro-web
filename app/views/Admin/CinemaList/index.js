import React, {Component} from 'react';
import Page from 'components/Page';
import splitEvery from "ramda/es/splitEvery";
import './index.scss';
import {cinema} from 'services/api';
import {Link} from "react-router-dom";

class CinemaList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cinemas: [],
    };
  }

  componentDidMount() {
    cinema.all()
      .then(response => {
        this.setState({
          ...this.state,
          cinemas: response.data
        })
      })
  }

  render() {
    return (
      <Page>
        <div className="cinema-list">
          <section className="hero is-light">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">
                  Lista wszystkich kin
                </h1>
              </div>
            </div>
          </section>

          {/*TODO REFACTOR ME ;( */}
          <div className="container">
            {splitEvery(3, this.state.cinemas)
              .map((threeCinemas, index) =>
                <div key={index} className="tile is-parent">
                  {threeCinemas
                    .map(cinema =>
                      <Link to={'/admin/cinema/'+cinema.id} key={cinema.id} className="tile is-4 is-parent cinema-tile hvr-grow">
                        <article className="tile is-child notification is-dark">
                          <p className="title">{cinema.name}</p>
                          <p className="subtitle">{cinema.description}</p>
                        </article>
                      </Link>
                    )}

                  { Math.floor(this.state.cinemas.length/3) === index
                    && <Link to='/admin/cinemas/new' className="button add-button">+</Link>
                  }
                </div>
              )}

            { !(this.state.cinemas.length % 3)
                && <Link to='/admin/cinemas/new'  className="tile is-4 is-parent cinema-tile hvr-grow button add-button">
                      {/*<a className="button add-button">+</a>*/}
                    </Link>
            }
          </div>
        </div>
      </Page>
    )
  }
}

export default CinemaList;