 import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';	
import { MuiThemeProvider } from 'material-ui/styles';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import PropTypes from 'prop-types';

import Login from './Login.jsx';
import Home from './Home.jsx';
import Dashboard from './Dashboard.jsx';
import Models from './Models.jsx';
import ModelDetails from './ModelDetails.jsx';
import ReleaseManagement from './ReleaseManagement.jsx';
import ModelsCompare from './ModelsCompare.jsx';

import { connect } from 'react-redux';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: "#007dc6",
        primary2Color: "#9e9e9e",
        primary3Color: "#007dc6",
        accent1Color: "#78be23",
        accent2Color: "#78be23",
        accent3Color: "#78be23"
    },
    appBar: {
        height: 50,
        },
    });


class App extends Component {
  render () {
    return (
    	<MuiThemeProvider muiTheme={muiTheme}>
	      <Router history={hashHistory}>
	        <Route path='/' component={Container}>
	          <Route path='/login' component={Login} />
	          <Route path='/home' component={Home}>
                <Route path='/home/dashboard' component={Dashboard} />
	          	<Route path='/home/models' component={Models} />
	          </Route>
	          <Route path='/address' component={Models} />
	          <Route path='*' component={NotFound} />
	        </Route>
	      </Router>
	    </MuiThemeProvider>
    )
  }
}
const Container = (props) => <div>
  {props.children}
</div>

const NotFound = () => <h1>404.. This page is not found!</h1>

export default App