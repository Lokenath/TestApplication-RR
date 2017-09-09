import React, { Component } from 'react'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

import { ResponsiveContainer, Brush, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import SearchIcon from 'react-material-icons/icons/action/search';
import DeleteIcon from 'react-material-icons/icons/action/delete';
import dataIcon from '../img/dataicon.png';

import VerticalMoreIcon from 'react-material-icons/icons/navigation/more-vert';

import axios from 'axios';

//Reudx 
import { connect } from 'react-redux';
import { setUserName } from '../actions/userActions.jsx';
import { fetchTweets } from '../actions/tweetsAction.jsx';

const data = [
              {name: '1', lyAuthSales: 1000, tyAuthSales: 2400, sysForecast: 2400, ovrForecast: 3400, todForecast: 2200, futForecast: null},
              {name: '2', lyAuthSales: 1200, tyAuthSales: 1398, sysForecast: 2210, ovrForecast: 2100, todForecast: 4100, futForecast: null},
              {name: '3', lyAuthSales: 1400, tyAuthSales: 5800, sysForecast: 2290, ovrForecast: 2400, todForecast: 2400, futForecast: null}
        ];

@connect((store) =>{
    return {
        user: store.user,
        tweets: store.tweets
    }  
})

class EmptyPage extends Component{
    constructor(){
        super();
        this.state = {
                            value: 1,
                            value2: 1,
                            resultData: []
                     };
    }
    
    componentWillMount(){
        console.log("Helli");
        //this.props.dispatch(setUserName());
    }

    handleChange(event, index, value){
        this.setState({value : value});
    }
    testClick(){
        this.props.dispatch(setUserName());
    };
    fetchTweets(){
        this.props.dispatch(fetchTweets());
    };
    
    makeGetCall(){
        axios.get("http://rest.learncode.academy/api/johnbob/friends")
        .then((response) => {
            this.setState(
                    {resultData: response.data.filter(function(eachItem){
                        return eachItem.name 
                    }) }
                    );
        })
        .catch((err) => {
            dispatch({resultData: err});
        })
    }
    makePostCall(){
        axios.post("http://rest.learncode.academy/api/johnbob/friends",
                {name:"Lokenath", age: "27"})
        .then((response) => {
            console.log("New Added" + response);
        })
        .catch((err) => {
            dispatch({resultData: err});
        })
    }
    makePutCall(){
        axios.put("http://rest.learncode.academy/api/johnbob/friends/59b3e0fafae4280100fce5f6",
                {name:"Jimmy", age: "28"})
        .then((response) => {
            console.log("Edited" + response);
        })
        .catch((err) => {
            dispatch({resultData: err});
        })
    }
    makeDeleteCall(){
        axios.delete("http://rest.learncode.academy/api/johnbob/friends/59b3e0d7fae4280100fce5f5")
        .then((response) => {
            console.log("Deleted" + response);
        })
        .catch((err) => {
            dispatch({resultData: err});
        })
    }
    render () {

    return (
            <Container fluid={true}>
                <h3>Hello Empty Page</h3>    
                <RaisedButton label="GET Data" onClick={this.makeGetCall.bind(this)}/> 
                <RaisedButton primary={true} label="POST Data" onClick={this.makePostCall.bind(this)}/>
                <RaisedButton primary={true} label="PUT Data" onClick={this.makePutCall.bind(this)}/>
                <RaisedButton secondary={true} label="Delete" onClick={this.makeDeleteCall.bind(this)}/>
                <ol>
                {   this.state.resultData.map((eachItem, index) => {
                        return <li key={index}>Name : <strong>{eachItem.name}</strong> &nbsp;&nbsp;&nbsp; Age: <strong>{eachItem.age}</strong></li>
                })}
                </ol>
            </Container>
        )
    }
}
export default EmptyPage