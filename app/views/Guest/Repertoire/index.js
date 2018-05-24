import React, {Component} from 'react';
import './index.scss';
import {showing} from "services/api";
import {cinema} from "services/cinema";
import Page from "components/Page";
import {groupBy} from "ramda";
import moment from 'moment';
import {Link} from "react-router-dom";

const daysAhead = 7;

class Repertoire extends Component {

	state = {
		showings: [],
		dates: Array
						.from(Array(daysAhead).keys())
						.map(number => moment().add(number, 'days')),
		selectedDate: moment(),
	}
  
  constructor(props) {
    super(props)
  }

  componentDidMount() {
		this.setShowings()	
  }
  
  setShowings() {
		return showing
			.allForCinemaWithDate(cinema.current.id, this.state.selectedDate)
			.then(response => {
				this.setState({
					showings: response.data,
				})
			})
	}
  
  selectDate(date) {
		this.setState({
			selectedDate: date,
		}, () => this.setShowings())
	}
  
  groupByMovie = groupBy((showing) => showing.movie.id)

  render() {
    return (
			<Page>
        <div className="repertoire">
					<section className="header hero is-light">
						<div className="hero-body">
							<div className="container">
								<div className="dates">
									{
										this.state.dates.map(date =>
												<div key={date.day()}
														 onClick={() => this.selectDate(date)} 
														 className={this.state.selectedDate.day() === date.day() ? 'date active' : 'date'} >
													<span>{date.format('DD.MM')}</span>
													<span>{date.locale('pl').format('ddd')}</span>
												</div>
										)
									}
								</div>
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
							{
								!this.state.showings.length && <div className="has-text-centered">Brak seansów w wybranym dniu</div>
							}
              
            </div>
          </div>
          
          
        </div>
      </Page>
    )
  }
}

export default Repertoire;
