import React, {Component} from 'react';
import {RaisedButton, TextField} from 'material-ui';
import './index.scss'
import {showing} from 'services/api';
import Form from 'components/FormElements/Form';

const hideAutoFillColorStyle = {
  WebkitBoxShadow: '0 0 0 1000px white inset'
};
const hintStyle = {
  zIndex: '1'
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
				form: props.form,
			};
		} else {
			this.state = {
				form: {
					screeningStart: '',
					hall: '',
					movie: '',
        },
			};
    }
  }

	onHandleClick = () => {
		showing.update(this.state.form)
      .then((response) => this.setState({
        ...this.state,
        snackbar: true
      }))
    // this.cleanForm();
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
				<div>
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
					<TextField
						name="hall"
						floatingLabelText="Id filmu"
						fullWidth={true}
						floatingLabelFixed={true}
						onChange={this.onInputChange}
						value={this.state.form.hall}
						inputStyle={hideAutoFillColorStyle}
						hintStyle={hintStyle}
						hintText="yyyy-mm-dd"
            underlineFocusStyle={styles.underlineStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
					/>
					<TextField
						name="movie"
						floatingLabelText="Id sali"
						fullWidth={true}
						floatingLabelFixed={true}
						onChange={this.onInputChange}
						value={this.state.form.movie}
						inputStyle={hideAutoFillColorStyle}
						hintStyle={hintStyle}
            underlineFocusStyle={styles.underlineStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}

					/>
					<RaisedButton className="add_button" label='Edytuj' onClick={this.onHandleClick}/>
				</div>
			</Form>
		)
  }
}

export default ShowtimeForm;
