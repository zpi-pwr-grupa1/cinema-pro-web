import React, {Component} from 'react';
import './index.scss';
import {showing} from "services/api";
import {cinema} from "services/cinema";
import Page from "components/Page";
import {groupBy} from "ramda";
import moment from 'moment';
import {Link} from "react-router-dom";
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  flatbtn: {
    fontSize: 20,
  },
};

const daysAhead = 7;

class Repertoire extends Component {

	state = {
		showings: [],
		dates: Array
						.from(Array(daysAhead).keys())
						.map(number => moment().add(number, 'days')),
		selectedDate: moment(),
    cinema: {},
    open: false,
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

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  actionButton = (showingId) => (
    <RaisedButton
      label="Zarezerwuj miejsca"
      primary={true}
      onClick={() => this.props.history.push(`/repertoire/reservation/` + showingId)}
      labelStyle={styles.flatbtn}
    />
  );
  
  groupByMovie = groupBy((showing) => showing.movie.id)

  render() {
    console.log(this.state)
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
                        <div onClick={this.handleOpen} className="div-hoverhand">
  												<b>10:10</b>
                        </div>
  												<b>13:30</b>
  												<b>19:50</b>
                        <Dialog
                          actions={this.actionButton(showing.id)}
                          modal={false}
                          open={this.state.open}
                          onRequestClose={this.handleClose}
                        >
                          <div className="movie-info-wrapper">
                            <div className="movie-info-img">
                              <div className="imgimg">
                                <img className="poster" src={showing.movie.imgURL} />
                              </div>
                            </div>
                            <div className="movie-info-txt">
                              <h2>{showing.movie.title}</h2>
                              {showing.movie.groups.map((group) =>
                                <p key={group.id} className="types">{group.label}</p>
                              )}
                              <p>Czas trwania: {showing.movie.runTime} min. </p>
                              <p>Od lat: {showing.movie.age} </p>
                              <p>Produkcja: {showing.movie.country}</p>
                              <p>.............................................</p>
                              <p className="headingsp2">Kino:</p>
                              <p className="types2">{cinema.current.name}</p>
                              <p className="headingsp2">Data:</p>
                              <p className="types2">{moment(showing.screeningStart).format("YYYY-MM-DD  hh:mm")}</p>
                            </div>
                          </div>
                        </Dialog>
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
