import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui';
import RaisedButton from 'material-ui/RaisedButton';
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

const styles = {
  button: {
    marginTop: 5,
    marginLeft: 5,
    width: 190,
  }
};

const Navigation = (props, context) => {
  return (
  <div className="navigation-wrapper">
      {navigations[props.role].map((element) => (
        auth.user && <div key={element.key} className="navigation-item">
          <MuiThemeProvider>
            {element.url ? 
              <NavLink to={element.url}>
                <RaisedButton
                  label={element.name}
                  labelPosition="after"
                  backgroundColor="#363636"
                  labelColor="#FFFFFF"
                  style={styles.button}
                />
              </NavLink> : 
              <RaisedButton
                label={element.name}
                labelPosition="after"
                backgroundColor="#363636"
                labelColor="#FFFFFF"
                onClick={() => element.method(context)}
                style={styles.button}
              />
            }
        </MuiThemeProvider>
        </div>
      ))}
    </div>
  );
}

Navigation.defaultProps = {
  role: 'admin'
};

export default Navigation; 