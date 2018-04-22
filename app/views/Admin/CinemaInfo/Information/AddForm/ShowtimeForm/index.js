import React, {Component} from 'react';
import {DropDownMenu, MenuItem, RaisedButton, TextField} from 'material-ui';
import './index.scss'
import {hall, movie, showing} from 'services/api';
import Form from 'components/FormElements/Form';

const hideAutoFillColorStyle = {
  WebkitBoxShadow: '0 0 0 1000px white inset'
};
const hintStyle = {
  zIndex: '1'
};

const initialState = {
	form: {
		screeningStart: '',
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

    if(props.form) {
			this.state = {
				...initialState,
				form: props.form,
			}
		} else {
			this.state = initialState
		}
  }

  componentDidMount() {
  	Promise
			.all([
				movie.all(),
				hall.all(),
			])
			.then(([resM, resH]) => this.setState({
				data: {
					movies: resM.data,
					halls: resH.data,
				}
			}))

	}

	onHandleClick = () => {
		showing.update(this.state.form)
      .then((response) => this.setState({
        ...this.state,
        snackbar: true
      }))
  }

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ form: {
      ...this.state.form,
      [name]: value,
    }});
  }

  render() {
    return (
			<Form>
				<div className="showtime-form">
					<TextField
						name="screeningStart"
						floatingLabelText="Data wyświetlenia:"
						fullWidth={true}
						floatingLabelFixed={true}
						onChange={this.onInputChange}
						value={this.state.form.screeningStart}
						inputStyle={hideAutoFillColorStyle}
						hintStyle={hintStyle}
            underlineFocusStyle={styles.underlineStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
					/>
					<DropDownMenu style={{width: '100%', padding: 0}} maxHeight={300} value={this.state.form.movie.title}>
						{this.state.data.movies.map(m =>
							<MenuItem style={{width: '300px'}} value={m.title} key={m.id} primaryText={m.title}  />
						)}
					</DropDownMenu>

					<DropDownMenu style={{width: '100%', padding: 0}} maxHeight={300} value={this.state.form.hall.hallNumber}>
						{this.state.data.halls.map(h =>
							<MenuItem style={{width: '300px'}} value={h.hallNumber} key={h.id} primaryText={h.hallNumber}  />
						)}
					</DropDownMenu>

					<RaisedButton className="btn add_button" label='Edytuj' onClick={this.onHandleClick}/>
				</div>
			</Form>
		)
  }
}

export default ShowtimeForm;
