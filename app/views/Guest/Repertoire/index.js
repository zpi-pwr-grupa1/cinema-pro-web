import React, {Component} from 'react';
import './index.scss';
import {showing} from "services/api";
import {cinema} from "services/cinema";
import Page from "components/Page";
import {groupBy} from "ramda";
import avatarImg from "assets/images/avatar.png";
import {Link} from "react-router-dom";

class Repertoire extends Component {

	state = {
		showings: [],
	}
  
  constructor(props) {
    super(props)
  }

  componentDidMount() {
		showing
      .allForCinema(cinema.current.id)
			.then(response => {
				this.setState({
					showings: response.data,
				})
			})
  }
  
  groupByMovie = groupBy((showing) => showing.movie.id)

  render() {
    return (
			<Page>
        <div className="repertoire">
					<section className="hero is-light">
						<div className="hero-body">
							<div className="container">
								<h1 className="title">W dniu</h1>
							</div>
						</div>
					</section>

					<div className="container">
            <div className="list">
              {
                this.state.showings
                  .map((showing, key) =>
                    <div key={showing.id} className="tile  hvr-grow">
											<div className="has-text-centered">
												<img src={showing.movie.imgURL} />
											</div>
											<div className="movie-info">
												<div>{showing.movie.title}</div>												
												<div>12 lat</div>												
												<div>{showing.movie.groups.map((g, i) => `${g.label}${i+1 !== showing.movie.groups.length ? ',':''} `)}</div>												
												<div>{showing.movie.runTime} min</div>												
											</div>
											<div className="showings-info">
                        <Link to={'/repertoire/reservation/' + showing.id} >
  												<b>10:10</b>
                        </Link>
  												<b>13:30</b>
  												<b>19:50</b>
											</div>
                    </div>
                )
              }
              
            </div>
          </div>
          
          
        </div>
      </Page>
    )
  }
}

export default Repertoire;
