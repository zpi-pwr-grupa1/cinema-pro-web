import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './index.scss'
import {cinema} from 'services/api';
import Editable from 'react-x-editable';

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
    cinema.new(this.state.form)
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

  get cinemaId() {
    return this.props.id;
  }

  render() {
    return (
        <div className="cinema-info-wrapper">
          <div className="cinema-info-txt">
            <span className="label">Opis:</span>
            <Editable dataType="text" showButtons={false} mode="inline" value={this.state.form.description}/>
            <span className="label">Telefon:</span>
            <Editable name="username" dataType="text" showButtons={false} mode="inline" value={this.state.form.telephone}/>
            <span className="label">Email:</span>
            <Editable dataType="text" showButtons={false} mode="inline" value={this.state.form.email}/>
            <span className="label">Ulica:</span>
            <Editable  dataType="text" showButtons={false} mode="inline" value={this.state.form.street}/>
            <Editable  dataType="text" showButtons={false} mode="inline" value={this.state.form.streetNumber}/>
            <Editable dataType="text" showButtons={false} mode="inline" value={this.state.form.city}/>
            <Editable  dataType="text" showButtons={false} mode="inline" value={this.state.form.postCode}/>
            <RaisedButton className="edit" label="Edytuj" onClick={() => this.submit()} />
          </div>
          <div className="cinema-info-img">
            <img src={this.state.form.imgUrl} />
          </div>
        </div>
    )
  }
}

export default Cinema;
