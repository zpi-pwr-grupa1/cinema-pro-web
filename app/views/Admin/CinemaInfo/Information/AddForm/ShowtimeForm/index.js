import React, {Component} from 'react';
import {DropDownMenu, MenuItem, RaisedButton, TextField} from 'material-ui';
import './index.scss'
import {hall, movie, showing} from 'services/api';
import Form from 'components/FormElements/Form';
import DatePicker from "react-datepicker";
import MyDatePicker from "components/MyDatePicker";
// import * as moment from "moment";
import moment from 'moment';

const hideAutoFillColorStyle = {
  WebkitBoxShadow: '0 0 0 1000px white inset'
};
const hintStyle = {
  zIndex: '1'
};

const initialState = {
	form: {
		// screeningStart: '',
		hall: {},
		movie: {},
	},
	data: {
		halls: [],
		movies: [],
	}
};

const styles = {
  floatingLabelFocusStyle: {
    color: "#FF4081",
  },
  underlineStyle: {
    borderColor: "#FF4081",
  },
};

class ShowtimeForm extends Component {
  constructor(props) {
    super(props);

		this.state = initialState
  }

  componentDidMount() {
  	Promise
			.all([
				movie.all(),
				hall.allForCinema(this.props.cinemaId),
			])
			.then(([resM, resH]) =>
				this.setState({
					form: this.props.form ? {
						screeningStart: moment(this.props.form.screeningStart),
						movie: resM.data.filter(m => m.id === this.props.form.movie.id)[0],
						hall: resH.data.filter(h => h.id === this.props.form.hall.id)[0],
					} : initialState.form,
					data: {
						movies: resM.data,
						halls: resH.data,
					}
				})
			)

	}

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ form: {
      ...this.state.form,
      [name]: value,
    }});
  }

	movieChange (event, index, value) {
  	return this.setState({ form: {
  			...this.state.form,
  			movie: value
  	}});
	}

	hallChange (event, index, value) {
  	return this.setState({ form: {
				...this.state.form,
  			hall: value
  	}});
	}

	dateChange (value) {
		return this.setState({ form: {
				...this.state.form,
				screeningStart: value
			}});
	}

	onHandleClick = () => {
		showing.update(this.state.form)
			.then(() => {
				this.setState()
				this.props.back()
			})
      .catch(error => {
        console.log(error.response)
        alert("Nie można dodać seansu.")
      });
	}

  render() {
    return (
			<Form>
				<div className="showtime-form">
					<DatePicker
						customInput={<MyDatePicker />}
						showTimeSelect
						timeFormat="hh:mm"
						timeIntervals={5}
						dateFormat="YYYY-MM-DD hh:mm"
						selected={this.state.form.screeningStart}
						onChange={this.dateChange.bind(this)} />
					
					<DropDownMenu style={{width: '100%', padding: 0}} onChange={this.movieChange.bind(this)} maxHeight={300} value={this.state.form.movie}>
						{this.state.data.movies.map(m =>
							<MenuItem style={{width: '300px'}} value={m} label={m.title} key={m.id} primaryText={m.title}  />
						)}
					</DropDownMenu>

					<DropDownMenu style={{width: '100%', padding: 0}} onChange={this.hallChange.bind(this)} maxHeight={300} value={this.state.form.hall}>
						{this.state.data.halls.map(h =>
							<MenuItem style={{width: '300px'}} value={h} label={h.hallNumber} key={h.id} primaryText={h.hallNumber}  />
						)}
					</DropDownMenu>

					<RaisedButton className="btn add_button" label={this.props.form ? 'Edytuj' : 'Dodaj'} onClick={this.onHandleClick}/>
				</div>
			</Form>
		)
  }
}

export default ShowtimeForm;
