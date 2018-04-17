import React, {Component} from 'react';
import './index.scss';
import {List, ListItem} from 'material-ui/List';
import {MuiThemeProvider} from "material-ui";
import {cinema} from "services/api";

class Home extends Component {

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
          cinemas: response.data.map(cinema => cinema.name)
        })
      })
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="page-container home-view">

          <div className="box">
            <h1>Wybierz kino</h1>

            <List className="cinema-list">
              {
                this.state.cinemas
                  .map(cinema=>
                    <ListItem primaryText={cinema} key={cinema} />
                  )
              }

            </List>

          </div>

        </div>
      </MuiThemeProvider>
    )
  }
}

export default Home;
