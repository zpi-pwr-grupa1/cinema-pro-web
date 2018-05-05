import React, {Component} from 'react';
import Page from 'components/Page';
import './index.scss';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from "material-ui";
import {movie} from "services/api";
import {Link} from "react-router-dom";
import {Popconfirm} from "antd";

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
		movie.all()
			.then(response => {
				this.setState({
					...this.state,
					movies: response.data
				})
			})
  }

  onDelete(id) {
    movie
      .delete(id)
      .then((response) => this.setState({
        ...this.state,
        movies: this.state.movies.filter(m => m.id !== id),
      }))
  }

  render() {
    return (
      <Page>
				<div className="movie-list">
					<section className="hero is-light">
						<div className="hero-body">
							<div className="container">
								<h1 className="title is-pulled-left">Lista wszystkich filmów</h1>
								<div className="button round-btn is-pulled-right">
									<i className="material-icons" onClick={() => this.props.history.push(`/admin/movies/new`)}>add</i>
								</div>
							</div>
						</div>
					</section>
					<div className="container">
						<Table className="my-table" displaySelectAll={false} selectable={false}>
							<TableHeader displaySelectAll={false} adjustForCheckbox={false}>
								<TableRow>
									<TableHeaderColumn>Tytuł</TableHeaderColumn>
									<TableHeaderColumn>Czas trwania (min)</TableHeaderColumn>
									<TableHeaderColumn>Premiera światowa</TableHeaderColumn>
									<TableHeaderColumn>Reżyser</TableHeaderColumn>
									<TableHeaderColumn></TableHeaderColumn>
								</TableRow>
							</TableHeader>
							<TableBody displayRowCheckbox={false}>
								{
									this.state.movies
										.map(movie =>
                      <TableRow key={movie.id} hoverable={true}>
                          <TableRowColumn>
                            <Link to={"/admin/movies/info/"+movie.id} key={movie.id}>
                              {movie.title}
                            </Link>
                          </TableRowColumn>
                        <TableRowColumn>{movie.runTime}</TableRowColumn>
                        <TableRowColumn>{movie.worldReleaseDate}</TableRowColumn>
                        <TableRowColumn>{movie.director}</TableRowColumn>
                        <TableRowColumn>
                        <Link to={'/admin/movies/'+movie.id} key={movie.id}>
                          <button className="btn button edit-btn">Edytuj</button>
                        </Link>
													<Popconfirm placement="bottom" title="Czy napewno chcesz usunąć ten film?"
																			onConfirm={() => this.onDelete(movie.id)} okText="Tak" cancelText="Nie">
														<button className="btn button edit-btn">Usuń</button>
													</Popconfirm>
                        </TableRowColumn>
                      </TableRow>
										)
								}
							</TableBody>
						</Table>
					</div>
				</div>
      </Page>
    )
  }
}

export default MovieList;
