import {Link} from 'react-router-dom';
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import InfoIcon from 'material-ui-icons/Info';
import {cinema} from 'services/api';

import avatarImg from "assets/images/avatar.png";
import Page from 'components/Page';
import './index.scss';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 1700,
  },
  tabtab: {
    backgroundColor: "#363636",
  },
};

class EmployeeList extends Component {
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

  render() {
    return (
      <Page>
      <div>
        <section className="hero is-light">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-pulled-left">Lista pracowników</h1>
              <div className="button round-btn is-pulled-right">
                <i className="material-icons" onClick={() => this.props.history.push(`/admin/employees/new`)}>add</i>
              </div>
            </div>
          </div>
        </section>
        <div>
        <Tabs inkBarStyle={{backgroundColor: '#ffffff'}}>
          <Tab label='Aktywni' style={styles.tabtab}>
          <div style={styles.root}>
            <GridList
              cellHeight={250}
              style={styles.gridList}
              cols={7}
            >
              <Subheader>Pracownicy aktywni</Subheader>
              {this.state.cinemas.map((employee) => (
                <Link to={"/admin/employees/"+employee.id} key={employee.id} >
                  <GridTile
                    title={<span>{employee.name}</span>}
                    actionIcon={<IconButton><InfoIcon /></IconButton>}
                  >
                    <img src={avatarImg} />
                  </GridTile>
                </Link>
              ))}
            </GridList>
          </div>
          </Tab>
          <Tab label='Nieaktywni' style={styles.tabtab} >
          <div style={styles.root}>
            <GridList
              cellHeight={250}
              style={styles.gridList}
              cols={7}
            >
              <Subheader>Pracownicy nieaktywni</Subheader>
              {this.state.cinemas.map((employee) => (
                <Link to={"/coach/clients/"+employee.id} key={employee.id} >
                  <GridTile
                    title={<span>{employee.name}</span>}
                    actionIcon={<IconButton><InfoIcon /></IconButton>}
                  >
                    <img src={avatarImg} />
                  </GridTile>
                </Link>
              ))}
            </GridList>
          </div>
          </Tab>
        </Tabs>
        </div>
        </div>
      </Page>
    )
  }
}

export default EmployeeList;