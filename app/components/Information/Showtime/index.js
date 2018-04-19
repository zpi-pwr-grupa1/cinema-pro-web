import React, {Component} from 'react';
import Page from 'components/Page';
import './index.scss';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, DropDownMenu, MenuItem} from "material-ui";
import {Link} from "react-router-dom";
import {cinema} from 'services/api';


class Showtime extends Component {
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
          <Link to='/admin/showtimes/new' >
            <button className="button add-button">Dodaj nowy seans</button>
          </Link>
          <Table className="showtime-table" displaySelectAll={false} selectable={false}>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn>ID</TableHeaderColumn>
                <TableHeaderColumn>Kino</TableHeaderColumn>
                <TableHeaderColumn>Sala</TableHeaderColumn>
                <TableHeaderColumn>Tytuł</TableHeaderColumn>
                <TableHeaderColumn>Data</TableHeaderColumn>
                <TableHeaderColumn>Godz. rozpoczęcia</TableHeaderColumn>
                <TableHeaderColumn>Czas trwania (h)</TableHeaderColumn>
                <TableHeaderColumn />
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              <TableRow hoverable={true}>
                <TableRowColumn>id seansu</TableRowColumn>
                <TableRowColumn>kino</TableRowColumn>
                <TableRowColumn>sala</TableRowColumn>
                <TableRowColumn>tytuł filmu</TableRowColumn>
                <TableRowColumn>data seansu</TableRowColumn>
                <TableRowColumn>godz. rozpoczęcia</TableRowColumn>
                <TableRowColumn>czas trwania</TableRowColumn>
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

export default Showtime;
