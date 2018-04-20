import React, {Component} from 'react';
import './index.scss';
import {RaisedButton, Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from "material-ui";
import {showing} from 'services/api';
import ShowtimeForm from "views/Admin/CinemaInfo/Information/AddForm/ShowtimeForm";

class Showtime extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showings: [],
			isEdited: false,
      showingEdited: null,
      cinemaId: props.id,
    };
  }

  componentDidMount() {
		showing.all()
      .then(response => {
        this.setState({
          ...this.state,
					showings: response.data
        })
      })
  }

  changeToEdit(showing) {
    this.setState({
      isEdited: !this.state.isEdited,
      showingEdited: showing && {
        ...showing,
        movie: showing.movie.id,
        hall: showing.hall.id,
			},
    })
  }

	onDelete(id) {
		showing
			.delete(id)
			.then((response) => this.setState({
				...this.state,
				showings: this.state.showings.filter(s => s.id !== id),
				snackbar: true
			}))
	}

  render() {
		if (this.state.isEdited) {
		  return <div className="container">
				<RaisedButton className="add_button" label="Powrót do listy" onClick={() => this.changeToEdit()} />
				<ShowtimeForm back={this.changeToEdit.bind(this)} form={this.state.showingEdited} />
      </div>
		}

    return (
      <div>
        <div className="container">
					<RaisedButton className="add_button" label="Dodaj seans" onClick={() => this.changeToEdit()} />

          <Table className="showtime-table" displaySelectAll={false} selectable={false}>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn>id</TableHeaderColumn>
                <TableHeaderColumn>film</TableHeaderColumn>
                <TableHeaderColumn>id sali</TableHeaderColumn>
								<TableHeaderColumn>czas rozpoczęcia</TableHeaderColumn>
                <TableHeaderColumn />
              </TableRow>
            </TableHeader>

						<TableBody displayRowCheckbox={false}>
							{
								this.state.showings
									.map(show =>
										<TableRow key={show.id} hoverable={true}>
											<TableRowColumn>{show.id}</TableRowColumn>
											<TableRowColumn>{show.movie.title}</TableRowColumn>
											<TableRowColumn>{show.hall.id}</TableRowColumn>

											<TableRowColumn>
                        <button className="button edit-btn" onClick={() => this.changeToEdit(show)}>Edytuj</button>
                        <button className="button edit-btn" onClick={() => this.onDelete(show.id)}>Usuń</button>
											</TableRowColumn>
										</TableRow>
									)
							}

            </TableBody>
          </Table>
        </div>
      </div>
    )
  }
}

export default Showtime;