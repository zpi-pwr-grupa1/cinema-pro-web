import React, {Component} from 'react';
import './index.scss';
import {List, ListItem} from 'material-ui/List';
import {MuiThemeProvider} from "material-ui";
import {cinema} from "services/api";

class Repertoire extends Component {

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
  
  goTo(cinema) {
    localStorage.setItem('cinema', JSON.stringify(cinema))
		this.props.history.push(`/repertoire`)
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="page-container repertoire">

          <div className="box">
            <h1>Wybierz kino</h1>

            <List className="cinema-list">
              {
                this.state.cinemas
                  .map(cinema=>
                    <ListItem onClick={() => this.goTo(cinema)} primaryText={cinema.name} key={cinema.id} />
                  )
              }

            </List>

          </div>

        </div>
      </MuiThemeProvider>
    )
  }
}

export default Repertoire;
