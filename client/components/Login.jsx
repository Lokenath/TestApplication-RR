import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

import loginbackground from '../img/loginbackground.png';
import euclidlogo from '../img/euclidlogo.png';
import wmtspark from '../img/wmtspark.png';

class Login extends Component{
	constructor(){
		super();
		this.state = {};
	}

	handleToggle(){
		this.setState({open: !this.state.open});
	}

	render () {

        return (
        		<div className="loginPageContainer">
              	  <img className="loginBackground" src={loginbackground}/>
                    <div className="loginContainer">
                        <div className="loginLeftSide">
                            <div>
                                <img className="loginLogo" src={euclidlogo}/>
                                <h2>Login</h2>
                                <h3>Lorem ipsum <i>- Lorem ipsum</i></h3>
                                <p>Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.</p>
                                <FlatButton label="Learn more" />
                             </div>
                        </div>
                        <div className="loginRightSide">
                            <div>
                                <Container fluid={true}>
                                    <div className="walmartLogoContainer">
                                        <span>ABC Inc.</span>
                                        <img className="" src={wmtspark}/>
                                    </div>
                                    <br/><br/><br/>
                                    
                                    <Row>
                                        <Col xs="12">
                                            <TextField
                                            fullWidth={true}
                                            defaultValue=""
                                            floatingLabelText="Username"
                                          />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs="12">
                                            <TextField
                                            type="password"
                                            fullWidth={true}
                                            defaultValue=""
                                            floatingLabelText="Password"
                                          />
                                        </Col>
                                    </Row>
                                    <br/><br/><br/>
                                    <Row>
                                        <Col xs="7">
                                            <span className="forgotPassword">Forgot password?</span>
                                        </Col>
                                        <Col xs="5" className="textAlignRight">
                                            <RaisedButton href="#/home/dashboard" label="Sign In" primary={true} />
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                            <span className="loginFooterText">© 2017 Lorem ipsum Lorem ipsum Lorem ipsum</span>
                        </div>
                    </div>
    		    </div>
        	)
	}
}
export default Login