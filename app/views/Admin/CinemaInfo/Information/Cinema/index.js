import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './index.scss'
import {cinema} from 'services/api';
import Editable from 'react-x-editable';
import {Snackbar} from "material-ui";

class Cinema extends Component {

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

  submit = () => {
    cinema.modify(this.state.form)
      .then((response) => this.setState({
        ...this.state,
        snackbar: true
      }))
  }

  onInputChange = (name, event) => {
    const { value } = event.target;
    this.setState({ form: {
        ...this.state.form,
        [name]: value,
      }});
  }

  get cinemaId() {
    return this.props.id;
  }

  render() {
    return (
        <div className="cinema-info-wrapper">
          <div className="cinema-info-txt">
            <span className="label">Opis:</span>
            <Editable onInputChange={this.onInputChange.bind(this, 'description')} dataType="text" showButtons={false} mode="inline" value={this.state.form.description}/>
            <span className="label">Telefon:</span>
            <Editable onInputChange={this.onInputChange.bind(this, 'telephone')} name="username" dataType="text" showButtons={false} mode="inline" value={this.state.form.telephone}/>
            <span className="label">Email:</span>
            <Editable onInputChange={this.onInputChange.bind(this, 'email')} dataType="text" showButtons={false} mode="inline" value={this.state.form.email}/>
            <span className="label">Ulica:</span>
            <Editable onInputChange={this.onInputChange.bind(this, 'streeet')} dataType="text" showButtons={false} mode="inline" value={this.state.form.street}/>
            <Editable onInputChange={this.onInputChange.bind(this, 'streetNumber')} dataType="text" showButtons={false} mode="inline" value={this.state.form.streetNumber}/>
            <Editable onInputChange={this.onInputChange.bind(this, 'city')} dataType="text" showButtons={false} mode="inline" value={this.state.form.city}/>
            <Editable onInputChange={this.onInputChange.bind(this, 'postCode')} dataType="text" showButtons={false} mode="inline" value={this.state.form.postCode}/>
            <RaisedButton className="edit" label="Edytuj" onClick={() => this.submit()} />
          </div>
          <div className="cinema-info-img">
            <img src={this.state.form.imgUrl} />
          </div>

          <Snackbar
            open={this.state.snackbar}
            message={'Pomyślnie edytowano kino'}
            autoHideDuration={2000}
            onRequestClose={ () => { this.setState({snackbar: false})} }
          />
        </div>
    )
  }
}

export default Cinema;
