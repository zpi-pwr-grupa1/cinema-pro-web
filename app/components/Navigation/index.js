import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import "./styles.scss"
import {auth} from "services/auth";

const nav = [{
  key: 0,
  name: "Lista kin",
  url: "/admin/cinemas/"
}, {
  key: 1,
  name: "Lista filmów",
  url: "/admin/movies/"
},{
	key: 2,
	name: "Cennik biletów",
	url: "/admin/tickets/"
}, {
  key: 3,
  name: "Wyloguj",
  url: "",
  method: (context) => auth.logout()
}];

const Navigation = (props, context) => {
  return (
    <div className="navigation-wrapper">
      {nav.map((element) => ( 
        <div key={element.key} className="navigation-item">
          <MuiThemeProvider>
            {
              element.url ?
              <NavLink exact={element.key === 0} to={element.url}>
                <div className="navigation-link">{element.name}</div>
              </NavLink> :
              <RaisedButton
                className="logout-btn"
                label={element.name}
                labelPosition="after"
                backgroundColor="#363636"
                labelColor="#FFFFFF"
                onClick={() => element.method(context)}
              />
            }
          </MuiThemeProvider>
        </div>
      ))}
    </div>
  );
}

Navigation.defaultProps = {
  role: 'admin',
};

export default Navigation;
