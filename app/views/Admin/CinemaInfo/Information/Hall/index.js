import React, {Component} from 'react';
import './index.scss';
import {RaisedButton, Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from "material-ui";
import {hall} from 'services/api';
import HallForm from "views/Admin/CinemaInfo/Information/AddForm/HallForm";


class Hall extends Component {
  constructor(props) {
    super(props);

    this.state = {
      halls: [],
      isEdited: false,
      hallEdited: null,
    };
  }

  componentDidMount() {
    hall.all()
      .then(response => {
        this.setState({
          ...this.state,
          halls: response.data
        })
      })
  }

  changeToEdit(hall) {
    this.setState({
      isEdited: !this.state.isEdited,
      hallEdited: hall
    })
  }

  onDelete(id) {
    hall.delete(id)
      .then((response) => {
        this.setState({
          ...this.state,
          halls: this.state.halls.filter(h => h.id !== id),
          snackbar: true
        })})
  }

  get cinemaId() {
    return this.props.id;
  }

  render() {
    if (this.state.isEdited) {
      return <div className="container">
        <RaisedButton className="add_button" label="Powrót do listy" onClick={() => this.changeToEdit()} />
        <HallForm back={this.changeToEdit.bind(this)} form={this.state.hallEdited} />
      </div>
    }

    return (
      <div className="halls-list">
        <div className="container">
          <RaisedButton className="add-button is-pulled-right" label="Dodaj sale" onClick={() => this.changeToEdit()} />

          <div className="is-clearfix"></div>

          <Table className="hall-table" displaySelectAll={false} selectable={false}>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn>kino</TableHeaderColumn>
                <TableHeaderColumn>id sali</TableHeaderColumn>
                <TableHeaderColumn>numer sali</TableHeaderColumn>
                <TableHeaderColumn>liczba miejsc</TableHeaderColumn>
                <TableHeaderColumn />
              </TableRow>
            </TableHeader>

            <TableBody displayRowCheckbox={false}>
            {
              this.state.halls
                .map(hall =>
                  <TableRow key={hall.id} hoverable={true}>
                    <TableRowColumn>{this.cinemaId}</TableRowColumn>u
                    <TableRowColumn>{hall.id}</TableRowColumn>
                    <TableRowColumn>{hall.hallNumber}</TableRowColumn>
                    <TableRowColumn></TableRowColumn>
                    <TableRowColumn className="is-pulled-right">
                      <button className="button edit-btn" onClick={() => this.changeToEdit(hall)}>Edytuj</button>
                      <button className="button edit-btn" onClick={() => this.onDelete(hall.id)}>Usuń</button>
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

export default Hall;