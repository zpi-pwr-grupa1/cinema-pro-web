import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './index.scss'
import {cinema} from 'services/api';
import Editable from 'react-x-editable';
import {Snackbar} from "material-ui";
import ReactTooltip from 'react-tooltip'

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
        description: '',
        imgUrl: '',
      },
      snackbar: false,
      error: '',
    };
  }

  componentDidMount() {
    if(this.cinemaId) {
      cinema.get(this.cinemaId)
        .then(response => {
          console.log(response)
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
            <span data-tip data-for='street'><Editable onInputChange={this.onInputChange.bind(this, 'street')} dataType="text" showButtons={false} mode="inline" value={this.state.form.street}/></span>
            <ReactTooltip id='street' type='error'>
              <span>nazwa ulicy</span>
            </ReactTooltip>
            <span data-tip data-for='streetNumber'><Editable onInputChange={this.onInputChange.bind(this, 'streetNumber')} dataType="text" showButtons={false} mode="inline" value={this.state.form.streetNumber}/></span>
            <ReactTooltip id='streetNumber' type='error'>
              <span>nr lokalu</span>
            </ReactTooltip>
            <span data-tip data-for='city'><Editable onInputChange={this.onInputChange.bind(this, 'city')} dataType="text" showButtons={false} mode="inline" value={this.state.form.city}/></span>
             <ReactTooltip id='city' type='error'>
              <span>miasto</span>
            </ReactTooltip>
            <span data-tip data-for='postCode'><Editable onInputChange={this.onInputChange.bind(this, 'postCode')} dataType="text" showButtons={false} mode="inline" value={this.state.form.postCode || 'xx-xxx'}/></span>
            <ReactTooltip id='postCode' type='error'>
              <span>kod pocztowy</span>
            </ReactTooltip>
            <span className="label">Zdjęcie:</span>
            <Editable onInputChange={this.onInputChange.bind(this, 'imgUrl')} dataType="text" showButtons={false} mode="inline" value={this.state.form.imgUrl}/>
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
