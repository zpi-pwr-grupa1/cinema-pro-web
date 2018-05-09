
import React, {Component} from 'react';
import Page from 'components/Page';
import splitEvery from "ramda/es/splitEvery";
import './index.scss';
import {client, movieGroup} from "services/api";
import FontIcon from 'material-ui/FontIcon';
import {SelectField, DropDownMenu} from 'material-ui';
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

class ClientInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        email: '',
        password: '',
        birthDate: '',
        values: [],
      },
      data: {
        groups: [],
      },
      clientId: "a2c14cbe-5e7b-4abf-a081-751cda31a9fa",
    };
  }

  componentDidMount() {    
    movieGroup.all()
      .then(response => {
        this.setState({
          data: {
            groups: response.data
          }
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

  handleChange = (event, index, values) => this.setState({form: {values:values}});

  menuItems(values) {
    return this.state.data.groups.map((group) => (
      <MenuItem
        key={group.id}
        insetChildren={true}
        checked={values && values.indexOf(group) > -1}
        value={group}
        primaryText={group.label}
      />
    ));
  }

  render() {
    const {values} = this.state.form;
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
              <p className="headingsp">Id:</p>
              <p>{this.state.clientId}</p>
              <p className="headingsp">Email:</p>
              <p>{this.state.form.email}</p>
              <p className="headingsp">Birth date:</p>
              <p>{this.state.form.birthDate}</p>
            </div>
            <div className="client-info-img">
              <p className="types">Grupy:</p>

              <SelectField
                multiple={true}
                hintText="Select a name"
                value={values}
                onChange={this.handleChange}
              >
                {this.menuItems(values)}
              </SelectField>
            </div>
          </div>
        </div>
      </Page>
    )
  }
}

export default ClientInfo;