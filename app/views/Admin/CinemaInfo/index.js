import React, {Component} from 'react';
import './index.scss'
import {Tab, Tabs} from 'material-ui/Tabs';

import {cinema} from 'services/api';
import Page from 'components/Page';
import Cinema from './Information/Cinema';
import Showtime from './Information/Showtime';
import Hall from './Information/Hall';

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

  handleChange = (value) => {
    this.setState({
      value: value,
      isClicked: false,
    });
  };

  componentDidMount() {
    if(this.cinemaId) {
      cinema.get(this.cinemaId)
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
    return (
      <Page>
				<div>
					<section className="hero is-light">
						<div className="hero-body">
							<div className="container">
								<h1 className="title is-pulled-left">{this.state.form.name}</h1>
								<div className="button round-btn is-pulled-right">
									<i className="material-icons">delete</i>
								</div>
							</div>
						</div>
					</section>
				<div className="container cinema-info-wrapper">
				 <Tabs
						value={this.state.value}
						onChange={this.handleChange}
						className="tabstabs"
					>
						<Tab label="Szczegóły" value="a" style={styles.tabtab}><Cinema id={this.cinemaId} /></Tab>
						<Tab label="Seanse" value="b" style={styles.tabtab} ><Showtime id={this.cinemaId} /></Tab>
						<Tab label="Sale" value="c" style={styles.tabtab} ><Hall id={this.cinemaId} /></Tab>
					</Tabs>
				</div>
				</div>
			</Page>
    )
  }
}

export default CinemaInfo;
