import React, { Component } from 'react';
import './index.scss'
import { Link } from "react-router-dom";
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';

import { cinema } from 'services/api';
import Page from 'components/Page';
import Input from 'components/FormElements/Input';
import Form from 'components/FormElements/Form';
import Cinema from 'components/information/Cinema';
import Showtime from 'components/information/Showtime';
import Hall from 'components/information/Hall';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

class CinemaInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  get cinemaId() {
    return this.props.match.params.id;
  }

  render() {
    return (
      <Page>
      <div className="cinema-info-wrapper">
       <Tabs
          value={this.state.value}
          onChange={this.handleChange}
        >
          <Tab label="Informacje" value="a">
            <Cinema />
          </Tab>
          <Tab label="Lista seansów" value="b">
            <Showtime />
          </Tab>
          <Tab label="SALE" value="c">
            <Hall />
          </Tab>
        </Tabs>
      </div>
      </Page>
    )
  }
}

export default CinemaInfo;
