import React, { Component } from 'react'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import {Tabs, Tab} from 'material-ui/Tabs';

import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import dataIcon from '../img/dataicon.png';

import BackArrowIcon from 'react-material-icons/icons/navigation/arrow-back';
import VerticalMoreIcon from 'react-material-icons/icons/navigation/more-vert';

const data = [
      {name: '1 week', Forecast: 4000, GRS: 2400, Actuals: 2400},
              {name: '2', Forecast: 3000, GRS: 1398, Actuals: 2210},
              {name: '3', Forecast: 2000, GRS: 9800, Actuals: 2290},
              {name: '4', Forecast: 2780, GRS: 3908, Actuals: 2000},
              {name: '5', Forecast: 1890, GRS: 4800, Actuals: 2181},
              {name: '6', Forecast: 2390, GRS: 3800, Actuals: 2500},
              {name: '7', Forecast: 3490, GRS: 4300, Actuals: 2100},
              {name: '8', Forecast: 2000, GRS: 2400, Actuals: 2400},
              {name: '9', Forecast: 3000, GRS: 1398, Actuals: 2210},
              {name: '10', Forecast: 2000, GRS: 5000, Actuals: 2290},
              {name: '11', Forecast: 2780, GRS: 3908, Actuals: 2000},
              {name: '12', Forecast: 1890, GRS: 4800, Actuals: 2181},
              {name: '13', Forecast: 2390, GRS: 3800, Actuals: 2500},
              {name: '14', Forecast: 3490, GRS: 4300, Actuals: 2100}
];

class ModelDetails extends Component{
    constructor(){
        super();
        this.state = {
                        value: 1,
                        value2: 1,
                        tableData: [
                                    {id: "9188731", name: "JBB", version: "1.9", desc:"", date: "07/10/2017 10:15"},
                                    {id: "3918871", name: "JBB", version: "1.8", desc:"", date: "07/10/2017 10:15"},
                                    {id: "7391881", name: "JBB", version: "1.7", desc:"", date: "07/10/2017 10:15"},
                                    {id: "1889731", name: "JBB", version: "1.6", desc:"", date: "07/10/2017 10:15"},
                                    {id: "8791831", name: "JBB", version: "1.5", desc:"", date: "07/10/2017 10:15"}
                                    ]
                     };
    }

    handleChange(event, index, value){
        this.setState({value});
    }
    
    handleChange2(event, index, value){
        this.setState({value2 : value});
    }
    
    render () {

    return (
            <Container fluid={true} className="detailsPageContainer">
                <IconButton className="backIcon" href="#home/models">
                    <BackArrowIcon/>
                </IconButton>
                <Row>
                    <Col xs="12" className="modelDetailsHeader">
                      <div className="firstBlock">
                            <img src={dataIcon}/>
                            <div>
                                <span>ARIMA</span>
                                <p>Released on : <strong>20 July 2017 10:36:55 PST</strong></p>
                                <br/>
                                <p>Version : <strong>1.9</strong></p>
                                <p>Environment : <strong>Pre-Prod</strong></p>
                            </div>
                      </div>
                      <div className="remainingBlock">
                            <div>
                                <label>RMSE (Root Mean Square Error)</label>
                                <h3 className="rmseColour">56<span>%</span></h3>
                                <p>Categories : <strong>235</strong></p>
                            </div>
                            <div>
                                <label>Accuracy</label>
                                <h3 className="accColour">97.4<span>%</span></h3>
                                <p>GRS : <strong>83%</strong></p>
                            </div>
                      </div>
                      <IconButton className="vertMore" >
                            <VerticalMoreIcon/>
                       </IconButton>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" className="removePadding">
                            <Tabs className="euclidTabs" contentContainerClassName="euclidTabContent" inkBarStyle={{background : "#FFC220", height: "3px"}} tabItemContainerStyle={{background : "transparent", color: "#858686 !important"}} contentContainerStyle={{background: "#fff", margin: "0", padding:"15px"}}>
                            <Tab label="Performance" buttonStyle={{ color: "#858686"}}>
                              <Row>
                                <Col xs="12" className="chartHeaderContainer">
                                     <div className="chartHeader">
                                        <span className="chartHeaderFont">Forecast vs. GRS vs. Actuals</span>
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
                                     </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col xs="12" className="removePadding">
                                    <ResponsiveContainer width='100%' height={350}>
                                    <LineChart width={800} height={300} data={data}
                                            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                                       <XAxis dataKey="name"/>
                                       <YAxis/>
                                       <CartesianGrid strokeDasharray="3 3"/>
                                       <Tooltip/>
                                       <Legend />
                                        <Line type="monotone" dataKey="Forecast" stroke="#80CBC4" dot={{ stroke: '#80CBC4', strokeWidth: 2, r: 4 }} activeDot={{stroke: '#80CBC4', r: 5}} />
                                        <Line type="monotone" dataKey="GRS" stroke="#2196F3" dot={{ stroke: '#2196F3', strokeWidth: 2, r: 4 }} activeDot={{stroke: '#2196F3', r: 5}} />
                                        <Line type="monotone" dataKey="Actuals" stroke="#FFA726" dot={{ stroke: '#FFA726', strokeWidth: 2, r: 4 }} activeDot={{stroke: '#FFA726', r: 5}} />
                                     </LineChart>
                                    </ResponsiveContainer>
                                </Col>
                              </Row>
                            </Tab>
                            <Tab label="Statistical summary" buttonStyle={{ color: "#858686"}}>
                              <div>
                                <p>
                                  Statistical summary comes here
                                </p>
                              </div>
                            </Tab>
                          </Tabs>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default ModelDetails