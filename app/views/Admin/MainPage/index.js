import React, {Component} from 'react';
import Page from 'components/Page';
import splitEvery from "ramda/es/splitEvery";
import './index.scss';

class MainPage extends Component {

  componentDidMount() {}

  render() {
    return (
      <Page>
        <div>
          <h1>Administrator</h1>
        </div>
      </Page>
    )
  }
}

export default MainPage;
