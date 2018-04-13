import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Button from "material-ui/es/Button/Button";

const adminNav = [{
    key: 0,
    name: 'Admin',
    url: "/admin/" 
  }, {
    key: 1,
    name: "Kina",
    url: "/admin/cinemas/"
  }, {
    key: 2,
    name: "Kino +",
    url: "/admin/cinemas/new/"
  }, {
    key: 3,
    name: "Filmy",
    url: "/admin/movies/"
  }, {
    key: 4,
    name: "Filmy +",
    url: "/admin/movies/new"
  }, {
    key: 5,
    name: "Wyloguj",
    url: "",
    method: () => false
}];

const navigations = {
  admin: adminNav
};

const styles = {
  button: {
    margin: 5,
    width: 230,
  }
};

const Navigation = (props) => {
  return (
  <div className="navigation-wrapper">
      {navigations[props.role].map((element) => (
        <div key={element.key} className="navigation-item">
            {element.url ?
              <NavLink to={element.url}>
                <Button
                  label={element.name}
                  labelPosition="after"
                  backgroundColor="#363636"
                  labelColor="#FFFFFF"
                  style={styles.button}
                />
              </NavLink> : 
              <Button
                label={element.name}
                labelPosition="after"
                backgroundColor="#363636"
                labelColor="#FFFFFF"
                onClick={element.method}
                style={styles.button}
              />
            }
        </div>
      ))}
    </div>
  );
}

Navigation.defaultProps = {
  role: 'admin'
};

export default Navigation;