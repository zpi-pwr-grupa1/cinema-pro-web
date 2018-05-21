import React, {Component} from 'react';
import {DropDownMenu, MenuItem, RaisedButton, TextField} from 'material-ui';
import './index.scss'
import {hall, cinema} from 'services/api';
import Form from 'components/FormElements/Form';

const hideAutoFillColorStyle = {

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
        columns: "",
        rows: "",
        cinema: {},
      },
      cinemaId: this.props.cinemaId,
      hallNumber: "",
      error: '',
    };
  }

  componentDidMount() {
    cinema.get(this.state.cinemaId)
      .then(response => {
        this.setState({
          ...this.state,
          form: {
            cinema: response.data
          }
        })
      })

    if(!this.hallId) {
      return;
    } 
    else {
      hall.getColumnsAndRows(this.hallId)
        .then((response) => {
          console.log(response)
          this.setState({
            ...this.state,
            form: response.data,
          })
        })

      return this.setState({ form: {
        ...this.state.form,
          hallNumber: this.state.form.hallNumber,
      }});
    }
  }

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ form: {
      ...this.state.form,
      [name]: value,
    }});
  }

  onHandleClick = () => {
    cinema.addHallToCinema(this.state.cinemaId, this.state.form.columns, this.state.form.rows, this.state.form.hallNumber)
      .then(() => {
        this.setState()
    })
  }

  get hallId() {
    if(!this.props.form) {
      return;
    }
    return this.props.form.id;
  }

  render() {
    console.log(this.state)
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
            name="columns"
            floatingLabelText="Liczba kolumn:"
            fullWidth={true}
            floatingLabelFixed={true}
            onChange={this.onInputChange}
            value={this.state.form.columns}
            inputStyle={hideAutoFillColorStyle}
            hintStyle={hintStyle}
            underlineFocusStyle={styles.underlineStyle}
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          />
          <TextField
            name="rows"
            floatingLabelText="Liczba rzędów:"
            fullWidth={true}
            floatingLabelFixed={true}
            onChange={this.onInputChange}
            value={this.state.form.rows}
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
