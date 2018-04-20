
import React, {Component} from 'react';
import Page from 'components/Page';
import splitEvery from "ramda/es/splitEvery";
import './index.scss';
import FontIcon from 'material-ui/FontIcon';

const iconStyles = {
  fontSize: 150,
};

class MainPage extends Component {

  componentDidMount() {}

  render() {
    return (
      <Page>
      <div className="home-wrapper">
        <FontIcon className="material-icons" style={iconStyles}>home</FontIcon>
      </div>
      </Page>
    )
  }
}

export default MainPage;