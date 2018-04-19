import React, {Component} from 'react';
import Page from 'components/Page';
import './index.scss';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, DropDownMenu, MenuItem} from "material-ui";
import {Link} from "react-router-dom";
import {cinema} from 'services/api';


class Hall extends Component {
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

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <div className="container">
          <Link to='/admin/halls/new' >
            <button className="button add-button">Dodaj nową salę</button>
          </Link>
          <Table className="showtime-table" displaySelectAll={false} selectable={false}>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn>Kino</TableHeaderColumn>
                <TableHeaderColumn>ID sali</TableHeaderColumn>
                <TableHeaderColumn>Numer sali</TableHeaderColumn>
                <TableHeaderColumn>Liczba miejsc</TableHeaderColumn>
                <TableHeaderColumn />
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              <TableRow hoverable={true}>
                <TableRowColumn>Nazwa kina</TableRowColumn>
                <TableRowColumn>ID</TableRowColumn>
                <TableRowColumn>Numer</TableRowColumn>
                <TableRowColumn>Liczba</TableRowColumn>
                <TableRowColumn>
                {/*<Link to={'/admin/showtimes/'+showtime.id} key={showtime.id}>*/}
                  <button className="button">Edytuj</button>
                {/*</Link>*/}
                </TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    )
  }
}

export default Hall;
