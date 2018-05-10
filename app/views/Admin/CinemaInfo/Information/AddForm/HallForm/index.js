import React, {Component} from 'react';
import {DropDownMenu, MenuItem, RaisedButton, TextField} from 'material-ui';
import './index.scss'
import {hall, cinema} from 'services/api';
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

class HallForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        hallNumber: "",
        cinema: {},
      },
      error: '',
    };
  }

  componentDidMount() {
    cinema.get(this.props.cinemaId)
      .then(response => {
        this.setState({
          ...this.state,
          form: {
            cinema: response.data
          }
        })
      })

    if(!this.props.form) {
      return;
    }
    return this.setState({ form: {
        ...this.state.form,
        hallNumber: this.props.form.hallNumber
      }});
  }

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ form: {
      ...this.state.form,
      [name]: value,
    }});
  }

  onHandleClick = () => {
    cinema.addHallToCinema(this.props.cinemaId, {
      hallNumber: this.state.form.hallNumber
    }).then((response) => {
      console.log(response)
      this.setState({
        ...this.state
      })
    })
  }

  render() {
    return (
      <Form>
        <div className="hall-form">
          <TextField
            name="hallNumber"
            floatingLabelText="Numer sali:"
            fullWidth={true}
            floatingLabelFixed={true}
            onChange={this.onInputChange}
            value={this.state.form.hallNumber}
            inputStyle={hideAutoFillColorStyle}
            hintStyle={hintStyle}
            underlineFocusStyle={styles.underlineStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          />
          <TextField
            name="seatRow"
            floatingLabelText="Liczba rzędów:"
            fullWidth={true}
            floatingLabelFixed={true}
            onChange={this.onInputChange}
            inputStyle={hideAutoFillColorStyle}
            hintStyle={hintStyle}
            underlineFocusStyle={styles.underlineStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          />
          <TextField
            name="seatColumn"
            floatingLabelText="Liczba kolumn:"
            fullWidth={true}
            floatingLabelFixed={true}
            onChange={this.onInputChange}
            inputStyle={hideAutoFillColorStyle}
            hintStyle={hintStyle}
            underlineFocusStyle={styles.underlineStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          />

          <RaisedButton className="btn add_button" label={this.props.form ? 'Edytuj' : 'Dodaj'} onClick={this.onHandleClick}/>
        </div>
      </Form>
    )
  }
}

export default HallForm;
