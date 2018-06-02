import React, { Component } from 'react';

import Layout from 'components/Layout';
import Header from 'components/Header';
import SideBar from 'components/Sidebar';

import Views from "views/Guest/index";
import Footer from "components/Footer";

class DefaultLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    }
  }

  toggleSidebar = () => {
    this.setState({
      ...this.state,
      sidebarOpen: !this.state.sidebarOpen
    });
  }

  render() {
    return (
      <Layout
        sidebar={ <SideBar isOpen={this.state.sidebarOpen} /> }
        header={ <Header toggleSidebar={this.toggleSidebar} /> }
        views={ <Views /> }
				footer={ <Footer/> }
			/>
    )
  }
}

export default DefaultLayout;
