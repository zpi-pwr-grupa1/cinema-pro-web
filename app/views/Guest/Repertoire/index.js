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
import {Link} from "react-router-dom";
import {auth} from "services/auth";
import ReactTooltip from 'react-tooltip'
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

  handleOpen = (showing) => {
    this.setState({
			open: true,
			dialogShowing: showing,
    });
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
												<Link to={"/admin/movies/info/"+showings[0].movie.id} key={showings[0].movie.id}>
													<img src={showings[0].movie.imgURL} />
												</Link>
											</div>
											<div className="movie-info">
												<div>{title}</div>												
												<div>12 lat</div>												
												<div>{showings[0].movie.groups.map((g, i) => `${g.label}${i+1 !== showings[0].movie.groups.length ? ',':''} `)}</div>												
												<div>{showings[0].movie.runTime} min</div>												
											</div>
											<div className="showings-info">
												{
													showings
														.map(showing =>
															auth.isLogged()
															 	?  <div key={showing.id} onClick={() => this.handleOpen(showing)} className="div-hoverhand">
																		<b>{moment(showing.screeningStart).format("HH:mm")}</b>
																	</div>
																: <div key={showing.id}>
																		<b data-tip data-for={`reservation${showing.id}`}>{moment(showing.screeningStart).format("HH:mm")}</b>
																	<ReactTooltip id={`reservation${showing.id}`} type='info'>
																		Musisz być zalogowany aby móc dokonać rezerwacji
																	</ReactTooltip>
																	</div>
													)
													
												}
                        <Dialog
                          actions={this.actionButton(this.state.dialogShowing)}
                          modal={false}
                          open={this.state.open}
                          onRequestClose={this.handleClose}
                        >
													{
														this.state.dialogShowing &&
															<div className="movie-info-wrapper">
																<div className="movie-info-img">
																	<div className="imgimg">
																		<img className="poster" src={this.state.dialogShowing.movie.imgURL} />
																	</div>
																</div>
																<div className="movie-info-txt">
																	<h1>{this.state.dialogShowing.movie.title}</h1>
																	{this.state.dialogShowing.movie.groups.map((group) =>
																		<p key={group.id} className="types">{group.label}</p>
																	)}
																	<p>Czas trwania: {this.state.dialogShowing.movie.runTime} min. </p>
																	<p>Od lat: {this.state.dialogShowing.movie.age} </p>
																	<p>Produkcja: {this.state.dialogShowing.movie.country}</p>
																	<p>.............................................</p>
																	<p className="headingsp2">Kino:</p>
																	<p className="types2">{cinema.current.name}</p>
																	<p className="headingsp2">Data:</p>
																	<p className="types2">{moment(this.state.dialogShowing.screeningStart).format("YYYY-MM-DD  hh:mm")}</p>
																</div>
															</div>
													}
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
