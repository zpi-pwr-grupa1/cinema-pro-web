import React, {Component} from 'react';
import './index.scss';
import {List, ListItem, ListItemText } from 'material-ui/List';

class Home extends Component {

  componentDidMount() {}

  render() {
    return (
      <div className="home-view">

        <div className="box">
          <h1>Wybierz swoje kino</h1>

          {/*<List component="nav">*/}
            {/*<ListItem button>*/}
              {/*<ListItemText primary="Trash" />*/}
            {/*</ListItem>*/}
            {/*<ListItem button component="a" href="#simple-list">*/}
              {/*<ListItemText primary="Spam" />*/}
            {/*</ListItem>*/}
          {/*</List>*/}

        </div>

      </div>
    )
  }
}

export default Home;
