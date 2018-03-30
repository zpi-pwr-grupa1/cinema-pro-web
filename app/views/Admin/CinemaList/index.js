import React, { Component } from 'react';
import { MuiThemeProvider, TextField } from "material-ui";

import Page from 'components/Page';
import Input from 'components/FormElements/Input';
import Form from 'components/FormElements/Form';


class CinemaList extends Component {
  constructor(props) {
    super(props);

    this.state = {
<<<<<<< Updated upstream
      cinemas: [{
        id: 1,
        name: 'kino pierwsze',
      }, {
        id: 2,
        name: 'kino drugie'
      }],
=======
      cinemas: [
      	{
					id: 1,
					name: 'kino pierwsze',
					description: 'opis kina 1',
      	},
				{
					id: 2,
					name: 'kino drugie',
					description: 'opis kina 2',
				},
				{
					id: 3,
					name: 'kino trzecie',
					description: 'opis kina 3',
				},
				{
					id: 4,
					name: 'kino czwarte',
					description: 'opis kina 4',
				},
				{
					id: 5,
					name: 'kino piate',
					description: 'opis kina 5',
				},

			],
>>>>>>> Stashed changes
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
