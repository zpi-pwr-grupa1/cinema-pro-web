import React, { Component } from 'react';
import { MuiThemeProvider, TextField } from "material-ui";

import Page from 'components/Page';
import Input from 'components/FormElements/Input';
import Form from 'components/FormElements/Form';


class CinemaList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cinemas: [{
        id: 1,
        name: 'kino pierwsze',
      }, {
        id: 2,
        name: 'kino drugie'
      }],
    };
  }

  componentDidMount() {

  }

  render() {
    console.log(this.state)
    return (
      <Page>
        CinemaList
      </Page>
    )
  }
}

export default CinemaList;
