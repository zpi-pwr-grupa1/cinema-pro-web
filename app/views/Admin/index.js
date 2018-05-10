import React from 'react';
import {Route, Switch} from 'react-router-dom';
// Views
import MainPage from 'views/Admin/MainPage/index';
import CinemaList from 'views/Admin/CinemaList/index';
import AddCinema from 'views/Admin/AddCinema/index';
import AddMovie from 'views/Admin/AddMovie/index';
import MovieList from 'views/Admin/MovieList/index';
import CinemaInfo from 'views/Admin/CinemaInfo/index';
import Tickets from "views/Shared/Tickets";
import EmployeeList from "views/Admin/EmployeeList/index";
import AddEmployee from "views/Admin/AddEmployee/index";
import MovieInfo from "views/Admin/MovieInfo/index";
import PageFade from "components/PageFade";
import {TransitionGroup} from "react-transition-group";

// /admin/*

const Views = (props) => {
	// const locationKey = props.location.pathname

	return (
        <Switch>
          <Route exact path='/admin/' component={MainPage} />
    
          <Route exact path='/admin/cinemas' component={CinemaList} />
          <Route path='/admin/cinemas/new' component={AddCinema} />
          <Route exact path='/admin/cinemas/:id' component={CinemaInfo} />
    
          <Route exact path='/admin/movies' component={MovieList} />
          <Route exact path='/admin/movies/new' component={AddMovie} />
          <Route exact path='/admin/movies/:id' component={AddMovie} />
          <Route path='/admin/movies/info/:id' component={MovieInfo} />
    
          <Route exact path='/admin/employees' component={EmployeeList} />
          <Route path='/admin/employees/new' component={AddEmployee} />
          <Route path='/admin/employees/:id' component={AddEmployee} />
    
          <Route path='/admin/tickets' component={Tickets} />
    
        </Switch>
  )
};

export default Views;
