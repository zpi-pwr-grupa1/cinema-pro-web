import React, {Component} from 'react';
import './index.scss';
import {showing} from "services/api";
import {cinema} from "services/cinema";
import Page from "components/Page";
import {groupBy} from "ramda";
import moment from 'moment';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import {CircularProgress} from "material-ui";

const styles = {
  flatbtn: {
    fontSize: 20,
  },
};

const daysAhead = 7;
const groupByMovie = groupBy(showing => showing.movie.title)

class Repertoire extends Component {

	state = {
		showings: {},
		showingsLoading: true,
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
					showings: groupByMovie(response.data),
					showingsLoading: false,
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
						
						{
							this.state.showingsLoading && 
								<div className="circle-progress has-text-centered">
									<CircularProgress />
								</div>
						}
						
            <div className="list">
              {
                Object.entries(this.state.showings)
                  .map(([title, showings], index) =>
                    <div key={showings[0].movie.id} className="tile  hvr-grow">
											<div className="has-text-centered">
												<img src={showings[0].movie.imgURL} />
											</div>
											<div className="movie-info">
												<div>{title}</div>												
												<div>12 lat</div>												
												<div>{showings[0].movie.groups.map((g, i) => `${g.label}${i+1 !== showings[0].movie.groups.length ? ',':''} `)}</div>												
												<div>{showings[0].movie.runTime} min</div>												
											</div>
											<div className="showings-info">
												{
													showings.map(showing =>
														<div key={showing.id} onClick={this.handleOpen} className="div-hoverhand">
															<b>{moment(showing.screeningStart).format("hh:mm")}</b>
														</div>
													)
													
												}
                        <Dialog
                          actions={this.actionButton(showings[0].id)}
                          modal={false}
                          open={this.state.open}
                          onRequestClose={this.handleClose}
                        >
                          <div className="movie-info-wrapper">
                            <div className="movie-info-img">
                              <div className="imgimg">
                                <img className="poster" src={showings[0].movie.imgURL} />
                              </div>
                            </div>
                            <div className="movie-info-txt">
                              <h2>{showings[0].movie.title}</h2>
                              {showings[0].movie.groups.map((group) =>
                                <p key={group.id} className="types">{group.label}</p>
                              )}
                              <p>Czas trwania: {showings[0].movie.runTime} min. </p>
                              <p>Od lat: {showings[0].movie.age} </p>
                              <p>Produkcja: {showings[0].movie.country}</p>
                              <p>.............................................</p>
                              <p className="headingsp2">Kino:</p>
                              <p className="types2">{cinema.current.name}</p>
                              <p className="headingsp2">Data:</p>
                              <p className="types2">{moment(showings[0].screeningStart).format("YYYY-MM-DD  hh:mm")}</p>
                            </div>
                          </div>
                        </Dialog>
                      </div>
                  </div>
                )
              }
							{
								!this.state.showingsLoading && !Object.entries(this.state.showings).length && <div className="has-text-centered">Brak seansów w wybranym dniu</div>
							}
              
            </div>
          </div>
        </div>
      </Page>
    )
  }
}

export default Repertoire;
