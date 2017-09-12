import React, { Component } from 'react'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
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

//Reudx 
import { connect } from 'react-redux';
import { setUserName } from '../actions/userActions.jsx';
import { fetchTweets } from '../actions/tweetsAction.jsx';

const data = [
              {name: '1', lyAuthSales: 1000, tyAuthSales: 2400, sysForecast: 2400, ovrForecast: 3400, todForecast: 2200, futForecast: null},
              {name: '2', lyAuthSales: 1200, tyAuthSales: 1398, sysForecast: 2210, ovrForecast: 2100, todForecast: 4100, futForecast: null},
              {name: '3', lyAuthSales: 1400, tyAuthSales: 5800, sysForecast: 2290, ovrForecast: 2400, todForecast: 2400, futForecast: null},
              {name: '4', lyAuthSales: 1380, tyAuthSales: 3908, sysForecast: 2000, ovrForecast: 3600, todForecast: 5600, futForecast: null},
              {name: '5', lyAuthSales: 1690, tyAuthSales: 4800, sysForecast: 2181, ovrForecast: 2700, todForecast: 3200, futForecast: null},
              {name: '6', lyAuthSales: 1390, tyAuthSales: 3800, sysForecast: 2500, ovrForecast: 2100, todForecast: 2800, futForecast: null},
              {name: '7', lyAuthSales: 1490, tyAuthSales: 4300, sysForecast: 2100, ovrForecast: 3400, todForecast: 2800, futForecast: null},
              {name: '8', lyAuthSales: 3000, tyAuthSales: 2400, sysForecast: 2400, ovrForecast: 5400, todForecast: 2400, futForecast: null},
              {name: '9', lyAuthSales: 1426, tyAuthSales: 3427, sysForecast: 2863, ovrForecast: 4324, todForecast: 3245, futForecast: null},
              {name: '10', lyAuthSales: 2000, tyAuthSales: 5000, sysForecast: 2290, ovrForecast: 2300, todForecast: 7300, futForecast: null},
              {name: '11', lyAuthSales: 1780, tyAuthSales: 3908, sysForecast: 2000, ovrForecast: 3100, todForecast: 4800, futForecast: null},
              {name: '12', lyAuthSales: 1890, tyAuthSales: 4800, sysForecast: 2181, ovrForecast: 6900, todForecast: null, futForecast: 3000},
              {name: '13', lyAuthSales: 1390, tyAuthSales: 3800, sysForecast: 2500, ovrForecast: 3300, todForecast: null, futForecast: 2500},
              {name: '14', lyAuthSales: 2490, tyAuthSales: 4300, sysForecast: 2100, ovrForecast: 2600, todForecast: null, futForecast: 3211},
              {name: '15', lyAuthSales: 1380, tyAuthSales: 3908, sysForecast: 2000, ovrForecast: 3600, todForecast: null, futForecast: 4123},
              {name: '16', lyAuthSales: 1490, tyAuthSales: 4300, sysForecast: 2100, ovrForecast: 3400, todForecast: null, futForecast: 4783},
              {name: '17', lyAuthSales: 1780, tyAuthSales: 3908, sysForecast: 2000, ovrForecast: 3100, todForecast: null, futForecast: 5321},
              {name: '18', lyAuthSales: 1890, tyAuthSales: 4800, sysForecast: 2181, ovrForecast: 6900, todForecast: null, futForecast: 1232},
              {name: '19', lyAuthSales: 1200, tyAuthSales: 1398, sysForecast: 2210, ovrForecast: 2100, todForecast: null, futForecast: 3124},
              {name: '20', lyAuthSales: 1400, tyAuthSales: 3800, sysForecast: 2290, ovrForecast: 2400, todForecast: null, futForecast: 7422},
              {name: '21', lyAuthSales: 1380, tyAuthSales: 3908, sysForecast: 2000, ovrForecast: 3600, todForecast: null, futForecast: 2134},
              {name: '22', lyAuthSales: 1690, tyAuthSales: 4800, sysForecast: 2181, ovrForecast: 2700, todForecast: null, futForecast: 5711},
              {name: '23', lyAuthSales: 1390, tyAuthSales: 3800, sysForecast: 2500, ovrForecast: 2100, todForecast: null, futForecast: 3145}

        ];

const StatelessComponent = () =>{
    return(
            <div>
                My Stateless Compoenet
            </div>
    );
}

@connect((store) =>{
    return {
        user: store.user,
        tweets: store.tweets
    }  
})

class Dashboard extends Component{
    constructor(){
        super();
        this.state = {
                            value: 1,
                            value2: 1,
                     };
    }
    
    componentWillMount(){
        console.log("Helli");
        //this.props.dispatch(setUserName());
    }

    handleChange(event, index, value){
        this.setState({value});
    }
    
    handleChange2(event, index, value){
        this.setState({value2 :  value});
    }
    testClick(){
        this.props.dispatch(setUserName());
    };
    fetchTweets(){
        this.props.dispatch(fetchTweets());
    };
    render () {

    return (
            <Container fluid={true}>
                   <Row>
                        <Col xs="6">
                          <span className="bodyHeader">{this.props.user.name}</span>
                          <FlatButton label="Add Name" onClick={this.testClick.bind(this)}/>
                          <FlatButton label="Fetch tweets" onClick={this.fetchTweets.bind(this)}/>
                        </Col>
                   </Row>
                   <Row className="removeMarginLeftRight marginTop38px">
                      <Col xs="12" className="modelDetailsHeader">
                        Hello 
                      </Col>
                  </Row>
                  <StatelessComponent/>
                  <br/>                
                  <div className="euclidChartContainer">
                      <Row>
                      <Col xs="12" className="chartHeaderContainer">
                           <div className="chartHeader">
                              <span className="chartHeaderFont">RE CHART</span>
                              {/*
                              <div className="rightItems">
                                  <span>View by</span>
                                  <SelectField
                                      className="chartSelect"
                                      fullWidth={true}
                                      value={this.state.value}
                                      onChange={this.handleChange.bind(this)}
                                      >
                                      <MenuItem value={1} primaryText="All Categories"/>
                                      <MenuItem value={2} primaryText="Category 1" />
                                   </SelectField>
                                  <SelectField
                                      className="chartSelect"
                                      fullWidth={true}
                                      value={this.state.value2}
                                      onChange={this.handleChange2.bind(this)}
                                      >
                                      <MenuItem value={1} primaryText="Day"/>
                                      <MenuItem value={2} primaryText="Week"/>
                                      <MenuItem value={3} primaryText="Month"/>
                                      <MenuItem value={4} primaryText="Quarter"/>
                                      <MenuItem value={5} primaryText="Custom"/>
                                   </SelectField>
                              </div>
                                */}  
                           </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="12" className="removePadding">
                          <ResponsiveContainer width='100%' height={350}>
                          <LineChart width={800} height={300} data={data} syncId="anyId"
                                  margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                             <XAxis dataKey="name"/>
                             <YAxis/>
                             <CartesianGrid strokeDasharray="3 3"/>
                             <Tooltip/>
                             <Legend />
                             <Line type="monotone" name="Point 1" dataKey="lyAuthSales" stroke="#BDBDBD" dot={{ stroke: '#BDBDBD', strokeWidth: 2, r: 4 }} activeDot={{stroke: '#BDBDBD', r: 5}} />
                          </LineChart>
                          </ResponsiveContainer>
                      </Col>
                    </Row>       
                  </div>               
            </Container>
        )
    }
}
export default Dashboard