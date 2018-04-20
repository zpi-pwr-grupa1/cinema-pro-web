import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import "./styles.scss"
import {auth} from "services/auth";

const adminNav = [{
  key: 0,
  name: 'Strona główna',
  url: "/admin/"
}, {
  key: 1,
  name: "Lista kin",
  url: "/admin/cinemas/"
}, {
  key: 2,
  name: "Lista filmów",
  url: "/admin/movies/"
}, {
  key: 3,
  name: "Wyloguj",
  url: "",
  method: (context) => auth.logout()
}];

const navigations = {
  admin: adminNav
};

const Navigation = (props, context) => {
  return (
    <div className="navigation-wrapper">
      {navigations[props.role].map((element) => (
        auth.user && <div key={element.key} className="navigation-item">
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
