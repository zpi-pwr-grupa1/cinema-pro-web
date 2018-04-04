import React, {Component} from 'react';
import Page from 'components/Page';
import splitEvery from "ramda/es/splitEvery";
import './index.scss';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cinemas: [
      ],
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <Page>
        <div>
          <h1>Lista filmów</h1>
        </div>
      </Page>
    )
  }
}

export default MovieList;
