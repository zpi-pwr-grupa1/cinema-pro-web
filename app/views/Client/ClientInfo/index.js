
import React, {Component} from 'react';
import Page from 'components/Page';
import splitEvery from "ramda/es/splitEvery";
import './index.scss';
import {client, movieGroup} from "services/api";
import FontIcon from 'material-ui/FontIcon';
import {SelectField, DropDownMenu, RaisedButton, TextField} from 'material-ui';
import MenuItem from 'material-ui/MenuItem';

const iconStyles = {
  fontSize: 150,
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

const styles = {
  customWidth: {
    width: 300,
  }
}

class ClientInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        email: '',
        password: '',
        birthDate: '',
        groups: [],
      },
      groups: [],
      clientId: "4f358d56-9877-4a35-959b-1a68a405465f",
    };
  }

  componentDidMount() {    
    movieGroup.all()
      .then(response => {
        this.setState({
          groups: response.data
        })
      })

    client.get(this.clientId)
      .then(response => {
        this.setState({
          ...this.state,
          form: response.data
        })
      })
  }

  get clientId() {
    return this.state.clientId;
  }

  handleChange = (event, index, values) => {
    this.setState({ form: {
      ...this.state.form,
      groups: values
    }});
  }

  menuItems(values) {
    return this.state.groups.map((group) => (
      <MenuItem
        key={group.id}
        insetChildren={true}
        checked={values && values.indexOf(group) > -1}
        value={group}
        primaryText={group.label}
      />
    ));
  }

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ form: {
      ...this.state.form,
      [name]: value,
    }});
  }

  onHandleClick = () => {
    client.update(this.state.form)
      .then(() => {
        this.setState()
      })
  }

  render() {
    const {groups} = this.state.form;
    return (
      <Page>
        <div>
          <section className="hero is-light">
            <div className="hero-body">
              <div className="container">
                <h1>Użytkownik</h1>
              </div>
            </div>
          </section>
          <div className="client-info-wrapper">
            <div className="client-info-txt">
              <p className="types">Informacje o koncie:</p>
              <p></p>
              <p className="headingsp">Identyfikator:</p>
              <p>{this.state.clientId}</p>
              <p className="headingsp">Email:</p>
              <TextField
                name="email"
                fullWidth={true}
                floatingLabelFixed={true}
                onChange={this.onInputChange}
                value={this.state.form.email}
              />
              <p className="headingsp">Data urodzenia:</p>
              <p>{this.state.form.birthDate}</p>
              <p className="headingsp">Grupy:</p>
              {this.state.form.groups.map((group) =>
                <p key={group.id}>{this.state.form.group}</p>
              )}
            </div>
            <div className="client-info-img">
              <p className="types">Grupy:</p>

              <SelectField
                multiple={true}
                hintText="Select a name"
                value={groups}
                onChange={this.handleChange}
                style={styles.customWidth}
              >
                {this.menuItems(groups)}
              </SelectField>
              <RaisedButton className="add-btn" fullWidth={false} label='Edytuj' onClick={this.onHandleClick}/>
            </div>
          </div>
        </div>
      </Page>
    )
  }
}

export default ClientInfo;