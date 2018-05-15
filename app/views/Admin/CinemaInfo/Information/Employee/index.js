import {Link} from 'react-router-dom';
import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {GridList, GridTile} from 'material-ui/GridList';
import {RaisedButton} from 'material-ui';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import InfoIcon from 'material-ui-icons/Info';
import {employee} from 'services/api';

import avatarImg from "assets/images/avatar.png";
import EmployeeForm from "views/Admin/CinemaInfo/Information/AddForm/EmployeeForm";
import './index.scss';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 1300,
    marginBottom: 20,
  },
  tabtab: {
    backgroundColor: "#ffffff",
    cursor: "default",
    height: 0,
  },
};

class Employee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
      cinemaId: props.id,
      isEdited: false,
      employeeEdited: null,
    };
  }

  componentDidMount() {
    employee.allForCinema(this.state.cinemaId)
      .then(response => {
        this.setState({
          ...this.state,
          employees: response.data
        })
      })
  }

  changeToEdit(employee) {
    this.setState({
      isEdited: !this.state.isEdited,
      employeeEdited: employee
    })
  }

  render() {
    if (this.state.isEdited) {
      return <div className="container">
        <RaisedButton className="add-button" label="Powrót do listy" onClick={() => this.changeToEdit()} />
        <EmployeeForm cinemaId={this.state.cinemaId} back={this.changeToEdit.bind(this)} form={this.state.employeeEdited} />
      </div>
    }
    return (
      <div className="halls-list">
        <div className="container">
        <div>
          <RaisedButton className="add-button-emp is-pulled-right" label="Dodaj pracownika" onClick={() => this.changeToEdit()} />
        </div>
          <div className="is-clearfix"></div>
      <div className="employee-info-wrapper">
        <Tabs inkBarStyle={{backgroundColor: '#ffffff'}}>
          <Tab label='' style={styles.tabtab}>
          <div style={styles.root}>
            <GridList
              cellHeight={230}
              style={styles.gridList}
              cols={6}
            >
              <Subheader>Pracownicy aktywni</Subheader>
              {this.state.employees.map((employee) => (
                <GridTile
                  key={employee.id}
                  title={<span>{employee.name} {employee.surname}</span>}
                  subtitle={<span>Zatrudnienie: {employee.startingDateOfEmployment}</span>}
                  actionIcon={<IconButton><InfoIcon /></IconButton>}
                  onClick={() => this.changeToEdit(employee)}
                >
                  <img src={avatarImg} />
                </GridTile>
              ))}
            </GridList>
          </div>
          </Tab>
        </Tabs>
      </div>
        </div>
      </div>
    )
  }
}

export default Employee;
