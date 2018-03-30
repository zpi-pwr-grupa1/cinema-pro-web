import React, { Component } from 'react';

import Layout from 'components/Layout';
import Header from 'components/Header';
import SideBar from 'components/Sidebar';

import Views from 'views/Admin/Views';

class AdminLayout extends Component {
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
    console.log(this.props.match)
    return (
      <Layout
        sidebar={ <SideBar isOpen={this.state.sidebarOpen} /> }
        header={ <Header toggleSidebar={this.toggleSidebar} /> }
        views={ <Views /> }
      />
    )
  }
}

export default AdminLayout;
