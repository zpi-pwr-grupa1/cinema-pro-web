import React, {Component} from 'react';
import './index.scss'
import RaisedButton from 'material-ui/RaisedButton';
import {Tab, Tabs} from 'material-ui/Tabs';

import {cinema} from 'services/api';
import Page from 'components/Page';
import Cinema from 'components/Information/Cinema';
import CinemaForm from 'components/Information/AddForm/CinemaForm';
import Showtime from 'components/Information/Showtime';
import ShowtimeForm from 'components/Information/AddForm/ShowtimeForm';
import Hall from 'components/Information/Hall';
import HallForm from 'components/Information/AddForm/HallForm';

const styles = {
  button: {
    marginTop: 5,
    marginBottom: 10,
    minWidth: 170,
  },
  tabtab: {
    backgroundColor: "#363636",
  },
};

class CinemaInfo extends Component {
  constructor(props) {
    super(props);
    this.handleClickT = this.handleClickT.bind(this);
    this.handleClickF = this.handleClickF.bind(this);
    this.state = {
      form: {
        name: '',
        street: '',
        streetNumber: '',
        postCode: '',
        city: '',
        telephone: '',
        email: '',
        description: ''
      },
      snackbar: false,
      error: '',
    };
  }

  handleClickT() {
    this.setState({isClicked: true});
  }

  handleClickF() {
    this.setState({isClicked: false});
  }

  handleChange = (value) => {
    this.setState({
      value: value,
      isClicked: false,
    });
  };

  componentDidMount() {
    if(this.cinemaId) {
      cinema.get(this.props.match.params.id)
        .then(response => {
          this.setState({
            ...this.state,
            form: response.data
          })
        })
    }
  }

  get cinemaId() {
    return this.props.match.params.id;
  }


  render() {

    const isClicked = this.state.isClicked;

    let button = null;
    let button2 = null;
    let button3 = null;
    if (isClicked) {
      button = <ClickedButton onClick={this.handleClickF} />;
      button2 = <ClickedButton2 onClick={this.handleClickF} />;
      button3 = <ClickedButton3 onClick={this.handleClickF} />;
    } else {
      button = <ClickButton onClick={this.handleClickT} />;
      button2 = <ClickButton2 onClick={this.handleClickT} />;
      button3 = <ClickButton3 onClick={this.handleClickT} />;
    }

    return (
      <Page>
      <div className="cinema-info-wrapper">
       <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          className="tabstabs"
        >
          <Tab label="Informacje" value="a" style={styles.tabtab}>
            {button3}
            <Greeting3 isClicked={isClicked} />
          </Tab>
          <Tab label="Lista seansów" value="b" style={styles.tabtab} >
            {button2}
            <Greeting2 isClicked={isClicked} />
          </Tab>
          <Tab label="SALE" value="c" style={styles.tabtab} >
            {button}
            <Greeting isClicked={isClicked} />
          </Tab>
        </Tabs>
      </div>
      </Page>
    )
  }
}

export default CinemaInfo;

function Greeting(props) {
  const isClicked = props.isClicked;
  if (isClicked) {
    return <HallForm />;
  }
  return <Hall />;
}

function Greeting2(props) {
  const isClicked = props.isClicked;
  if (isClicked) {
    return <ShowtimeForm />;
  }
  return <Showtime />;
}

function Greeting3(props) {
  const isClicked = props.isClicked;
  if (isClicked) {
    return <CinemaForm />;
  }
  return <Cinema />;
}

function ClickButton(props) {
  return (
    <RaisedButton
      onClick={props.onClick}
      style={styles.button}
      label="Dodaj sale"
    >
    </RaisedButton>
  );
}

function ClickedButton(props) {
  return (
    <RaisedButton
      onClick={props.onClick}
      style={styles.button}
      label="Lista sal"
    >
    </RaisedButton>
  );
}

function ClickButton2(props) {
  return (
    <RaisedButton
      onClick={props.onClick}
      style={styles.button}
      label="Dodaj seans"
    >
    </RaisedButton>
  );
}

function ClickedButton2(props) {
  return (
    <RaisedButton
      onClick={props.onClick}
      style={styles.button}
      label="Lista seansów"
    >
    </RaisedButton>
  );
}

function ClickButton3(props) {
  return (
    <RaisedButton
      onClick={props.onClick}
      style={styles.button}
      label="Edytuj kino"
    >
    </RaisedButton>
  );
}

function ClickedButton3(props) {
  return (
    <RaisedButton
      onClick={props.onClick}
      style={styles.button}
      label="Informacje o kinie"
    >
    </RaisedButton>
  );
}
