import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';

import NotificationsIcon from 'react-material-icons/icons/social/notifications';
import PersonIcon from 'react-material-icons/icons/social/person';
import TestingIcon from 'react-material-icons/icons/hardware/gamepad';
import ReleaseIcon from 'react-material-icons/icons/action/done-all';

import euclidSmall from '../img/euclidsmall.png';
import notiImage from '../img/noti.png';

import ModelIcon from 'react-material-icons/icons/maps/layers';
import DashboardIcon from 'react-material-icons/icons/hardware/developer-board';

class Home extends Component{
	constructor(){
		super();
		this.state = {open: false, obg: 10, currentRoute: "dashboard"};
	}

	handleToggle(){
		this.setState({open: !this.state.open});
	}

  	handleClose(path){
  		this.setState({open: false, currentRoute: path});
  	}

	render () {

    return (
    		<div>
		      <AppBar
                className="euclidHeader"
			    title="Page Header"
                children={<img className="headerLogo" src={euclidSmall}/>}
			    onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
	            iconElementRight={<div className="headerRightBtns">
			                        <img className="" src={notiImage}/>
                        			    <IconMenu
			                           className="logOutMenu"
                        			      iconButtonElement={<IconButton><PersonIcon /></IconButton>}
                        			      anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                        			      targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
                        			    >
			                          <MenuItem width={100} primaryText="Settings" />
                        			      <MenuItem width={100} primaryText="Logout"  href="#/login"/>
                        			   </IconMenu>
			                    </div>}
			  />
			  <Drawer
			      containerClassName="euclidLeftPane"
		          docked={false}
		          width={300}
		          open={this.state.open}
		          onRequestChange={(open) => this.setState({open})}
		        >
		        <MenuItem leftIcon={<DashboardIcon/>} href="#/home/dashboard" className={(this.state.currentRoute == "dashboard" ? "selectedListItem" : "")} onClick={this.handleClose.bind(this, "dashboard")}>Page 1</MenuItem>
          		<MenuItem leftIcon={<ModelIcon/>} href="#/home/models" className={(this.state.currentRoute == "models" ? "selectedListItem" : "")} onClick={this.handleClose.bind(this, "models")}>Page 2</MenuItem>
          		<MenuItem leftIcon={<TestingIcon/>} className={(this.state.currentRoute == "abtesting" ? "selectedListItem" : "")}>Page 3</MenuItem>
          	  </Drawer>
          	  <div className="rightBodyContainer">
          		{this.props.children}
		      </div>
		      <p className="euclidFooter">© Copyright 2017, Wal-Mart Stores, Inc. All Rights Reserved.</p>
		 </div>
    	)
	}
}
export default Home