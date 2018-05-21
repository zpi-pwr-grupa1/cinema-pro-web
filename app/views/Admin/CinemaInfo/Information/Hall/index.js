import React, {Component} from 'react';
import './index.scss';
import {RaisedButton, Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from "material-ui";
import {hall} from 'services/api';
import HallForm from "views/Admin/CinemaInfo/Information/AddForm/HallForm";
import {Popconfirm} from "antd";


class Hall extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        columns: "",
        rows: "",
      },
      halls: [],
      isEdited: false,
      hallEdited: null,
      cinemaId: props.id,
    };
  }

  componentDidMount() {
    hall.allForCinema(this.cinemaId)
      .then(response => {
        console.log(response)
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
        <RaisedButton className="add-button" label="Powrót do listy" onClick={() => this.changeToEdit()} />
        <HallForm cinemaId={this.state.cinemaId} back={this.changeToEdit.bind(this)} form={this.state.hallEdited} />
      </div>
    }

    return (
      <div className="halls-list">
        <div className="container">
          <RaisedButton className="add-button is-pulled-right" label="Dodaj sale" onClick={() => this.changeToEdit()} />

          <div className="is-clearfix"></div>

          <Table className="my-table" displaySelectAll={false} selectable={false}>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn>nr sali</TableHeaderColumn>
                <TableHeaderColumn>liczba rzędów</TableHeaderColumn>
                <TableHeaderColumn>liczba kolumn</TableHeaderColumn>
                <TableHeaderColumn>liczba miejsc</TableHeaderColumn>
                <TableHeaderColumn />
              </TableRow>
            </TableHeader>

            <TableBody displayRowCheckbox={false}>
            {
              this.state.halls
                .sort((a,b) => a.hallNumber > b.hallNumber)
                .map(hall =>
                  <TableRow key={hall.id} hoverable={true}>
                    <TableRowColumn>{hall.hallNumber}</TableRowColumn>
                    <TableRowColumn>{hall.seats.reduce((p, c) => c.seatRow > p.seatRow ? c : p).seatRow+1}</TableRowColumn>
                    <TableRowColumn>{hall.seats.reduce((p, c) => c.seatColumn > p.seatColumn ? c : p).seatColumn+1}</TableRowColumn>
                    <TableRowColumn>{hall.seats.length}</TableRowColumn>
                    <TableRowColumn className="is-pulled-right">
                      <button className="btn button edit-btn" onClick={() => this.changeToEdit(hall)}>Edytuj</button>
                      <Popconfirm placement="bottom" title="Czy napewno chcesz usunąć tę salę?"
                                  onConfirm={() => this.onDelete(hall.id)} okText="Tak" cancelText="Nie">
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
    )
  }
}

export default Hall;
