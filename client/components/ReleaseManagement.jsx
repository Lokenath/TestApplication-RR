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

import SearchIcon from 'react-material-icons/icons/action/search';
import DeleteIcon from 'react-material-icons/icons/action/delete';
import StatusIcon from 'react-material-icons/icons/image/brightness-1';
import DeployedIcon from 'react-material-icons/icons/action/done';
import RollbackIcon from 'react-material-icons/icons/content/undo';
import DeployIcon from 'react-material-icons/icons/action/backup';

class Models extends Component{
    constructor(){
        super();
        this.state = {
                        value: 1,
                        tableData1: [
                                        {id: "9188731", name: "JKR", version: "5.0", desc:"Last release", date: "07/18/2017 10:15", status:"100"},
                                        {id: "9754731", name: "JKR", version: "4.0", desc:"Next release", date: "07/14/2017 10:15", status:"80"},
                                        {id: "8273721", name: "JKR", version: "3.0", desc:"Next release", date: "07/12/2017 10:15", status:"70"},
                                        {id: "4353525", name: "JKR", version: "2.0", desc:"Next release", date: "07/11/2017 10:15", status:"50"},
                                        {id: "7543248", name: "JKR", version: "1.0", desc:"Initial release", date: "07/10/2017 10:15", status:"60"},
                                    ],
                        selectedRows1: [],
                        selectedRowCount1: 0,
                        tableData2: [
                                        {id: "9188731", name: "JKR", version: "5.0", desc:"Last release", date: "07/18/2017 10:15", status:"100"},
                                        {id: "9754731", name: "JKR", version: "4.0", desc:"Next release", date: "07/14/2017 10:15", status:"80"},
                                        {id: "8273721", name: "JKR", version: "3.0", desc:"Next release", date: "07/12/2017 10:15", status:"90"},
                                        {id: "4353525", name: "JKR", version: "2.0", desc:"Next release", date: "07/11/2017 10:15", status:"50"},
                                        {id: "7543248", name: "JKR", version: "1.0", desc:"Initial release", date: "07/10/2017 10:15", status:"40"},
                                     ],
                         selectedRows2: [],
                         selectedRowCount2: 0,
                         tableData3: [
                                        {id: "9188731", name: "JKR", version: "5.0", desc:"Last release", date: "07/18/2017 10:15", status:"100"},
                                        {id: "9754731", name: "JKR", version: "4.0", desc:"Next release", date: "07/14/2017 10:15", status:"80"},
                                        {id: "8273721", name: "JKR", version: "3.0", desc:"Next release", date: "07/12/2017 10:15", status:"70"},
                                        {id: "4353525", name: "JKR", version: "2.0", desc:"Next release", date: "07/11/2017 10:15", status:"50"},
                                        {id: "7543248", name: "JKR", version: "1.0", desc:"Initial release", date: "07/10/2017 10:15", status:"40"},
                                      ],
                          selectedRows3: [],
                          selectedRowCount3: 0
                     };
    }

    handleChange(event, index, value){
        this.setState({value});
    }
    
    handleRowSelection1(selectedRows1){
        this.setState({selectedRows1: selectedRows1.slice(0)});
        if(selectedRows1 == "all"){
            this.setState({selectedRowCount1: 5});  
        }
        else if(selectedRows1 == "none"){
            this.setState({selectedRowCount1: 0});  
        }
        else{
            this.setState({selectedRowCount1: selectedRows1.length});
        }
        console.log(this.state.selectedRows1);
    }
    handleRowSelection2(selectedRows2){
        this.setState({selectedRows2: selectedRows2.slice(0)});
        if(selectedRows2 == "all"){
            this.setState({selectedRowCount2: 5});  
        }
        else if(selectedRows2 == "none"){
            this.setState({selectedRowCount2: 0});  
        }
        else{
            this.setState({selectedRowCount2: selectedRows2.length});
        }
        console.log(this.state.selectedRows2);
    }
    handleRowSelection3(selectedRows3){
        this.setState({selectedRows3: selectedRows3.slice(0)});
        if(selectedRows3 == "all"){
            this.setState({selectedRowCount3: 5});  
        }
        else if(selectedRows3 == "none"){
            this.setState({selectedRowCount3: 0});  
        }
        else{
            this.setState({selectedRowCount3: selectedRows3.length});
        }
        console.log(this.state.selectedRows3);
    }

    render () {

    return (
            <Container fluid={true}>
                <Row>
                    <Col xs="6">
                      <span className="bodyHeader">Release management</span>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col xs="12">
                       <div className="tableContainer">
                       <Table className="euclidTable" selectable={true} multiSelectable={false} onRowSelection={this.handleRowSelection1.bind(this)}>
                         <TableHeader className="" displaySelectAll={false} adjustForCheckbox={true}>
                          <TableRow className="removeFirstTh">
                            <TableHeaderColumn className="" colSpan="3" style={{textAlign: 'left'}}>
                                <div className={((this.state.selectedRowCount1 > 0 ) ? "tableHeaderInitialActions hideContent" : "tableHeaderInitialActions")}>
                                  <p className="tableHeaderText">Euclid - ETL</p>
                                  <div>
                                      <TextField className="headerSearchInput" hintText="Search"/>
                                      <IconButton tooltip="" className="tableheaderSearchIcon">
                                          <SearchIcon/>
                                      </IconButton>
                                  </div>
                              </div>
                              <div className={((this.state.selectedRowCount1 > 0 ) ? "tableHeaderItemSelectedActions" : "tableHeaderItemSelectedActions hideContent")}>
                                  <span>{this.state.selectedRowCount1} Model Selected</span>
                                  <div className="tableRightBtnCont">
                                      <RaisedButton primary={true} icon={<DeployedIcon />} label="Deploy" />
                                      {/*<RaisedButton primary={true} icon={<RollbackIcon />} label="Roll back" />
                                      <RaisedButton primary={true} icon={<DeployIcon />} label="Override & deploy" />
                                      */}
                                  </div>
                              </div>
                            </TableHeaderColumn>
                          </TableRow>
                            <TableRow className="euclidTableHeader">
                              <TableHeaderColumn>Version</TableHeaderColumn>
                              <TableHeaderColumn>Published Date/Time</TableHeaderColumn>
                              <TableHeaderColumn>Regression status</TableHeaderColumn>
                            </TableRow>
                          </TableHeader>
                          <TableBody displayRowCheckbox={true} deselectOnClickaway={false}>
                            {this.state.tableData1.map((d, i) => {
                                  return <TableRow key={i} selectable={true} selected={this.state.selectedRows1.indexOf(i) !== -1}>
                                      <TableRowColumn>{d.version}</TableRowColumn>
                                      <TableRowColumn>{d.date}</TableRowColumn>
                                      <TableRowColumn className="centerAlignContentTd"><StatusIcon className={(d.status > 80 ? "goodStat" : "") ||  ((d.status > 50 && d.status <= 80) ? "warningStat" : "") || ((d.status > 0 && d.status <= 50) ? "dangerStat" : "")}/><a className="euclidLinks">{d.status}%</a></TableRowColumn>
                                  </TableRow>
                             })}
                          </TableBody>
                        </Table>
                        </div>
                    </Col>
                 </Row>
                 <br/>
                 <Row>
                     <Col xs="12">
                        <div className="tableContainer">
                        <Table className="euclidTable" selectable={true} multiSelectable={false} onRowSelection={this.handleRowSelection2.bind(this)}>
                          <TableHeader className="" displaySelectAll={false} adjustForCheckbox={true}>
                           <TableRow className="removeFirstTh">
                             <TableHeaderColumn className="" colSpan="3" style={{textAlign: 'left'}}>
                                 <div className={((this.state.selectedRowCount2 > 0 ) ? "tableHeaderInitialActions hideContent" : "tableHeaderInitialActions")}>
                                   <p className="tableHeaderText">Euclid - Forecast</p>
                                   <div>
                                       <TextField className="headerSearchInput" hintText="Search"/>
                                       <IconButton tooltip="" className="tableheaderSearchIcon">
                                           <SearchIcon/>
                                       </IconButton>
                                   </div>
                               </div>
                               <div className={((this.state.selectedRowCount2 > 0 ) ? "tableHeaderItemSelectedActions" : "tableHeaderItemSelectedActions hideContent")}>
                                   <span>{this.state.selectedRowCount2} Model Selected</span>
                                   <div className="tableRightBtnCont">
                                       <RaisedButton primary={true} icon={<DeployedIcon />} label="Deploy" />
                                       {/*<RaisedButton primary={true} icon={<RollbackIcon />} label="Roll back" />
                                       <RaisedButton primary={true} icon={<DeployIcon />} label="Override & deploy" />
                                       */}
                                   </div>
                               </div>
                             </TableHeaderColumn>
                           </TableRow>
                             <TableRow className="euclidTableHeader">
                               <TableHeaderColumn>Version</TableHeaderColumn>
                               <TableHeaderColumn>Published Date/Time</TableHeaderColumn>
                               <TableHeaderColumn>Regression status</TableHeaderColumn>
                             </TableRow>
                           </TableHeader>
                           <TableBody displayRowCheckbox={true} deselectOnClickaway={false}>
                             {this.state.tableData2.map((d, i) => {
                                   return <TableRow key={i} selectable={true} selected={this.state.selectedRows2.indexOf(i) !== -1}>
                                       <TableRowColumn>{d.version}</TableRowColumn>
                                       <TableRowColumn>{d.date}</TableRowColumn>
                                       <TableRowColumn className="centerAlignContentTd"><StatusIcon className={(d.status > 80 ? "goodStat" : "") ||  ((d.status > 50 && d.status <= 80) ? "warningStat" : "") || ((d.status > 0 && d.status <= 50) ? "dangerStat" : "")}/><a className="euclidLinks">{d.status}%</a></TableRowColumn>
                                   </TableRow>
                              })}
                           </TableBody>
                         </Table>
                         </div>
                     </Col>
                  </Row>
              <br/>
              <Row>
                  <Col xs="12">
                     <div className="tableContainer">
                     <Table className="euclidTable" selectable={true} multiSelectable={false} onRowSelection={this.handleRowSelection3.bind(this)}>
                       <TableHeader className="" displaySelectAll={false} adjustForCheckbox={true}>
                        <TableRow className="removeFirstTh">
                          <TableHeaderColumn className="" colSpan="3" style={{textAlign: 'left'}}>
                              <div className={((this.state.selectedRowCount3 > 0 ) ? "tableHeaderInitialActions hideContent" : "tableHeaderInitialActions")}>
                                <p className="tableHeaderText">Euclid - UI</p>
                                <div>
                                    <TextField className="headerSearchInput" hintText="Search"/>
                                    <IconButton tooltip="" className="tableheaderSearchIcon">
                                        <SearchIcon/>
                                    </IconButton>
                                </div>
                            </div>
                            <div className={((this.state.selectedRowCount3 > 0 ) ? "tableHeaderItemSelectedActions" : "tableHeaderItemSelectedActions hideContent")}>
                                <span>{this.state.selectedRowCount3} Model Selected</span>
                                <div className="tableRightBtnCont">
                                    <RaisedButton primary={true} icon={<DeployedIcon />} label="Deploy" />
                                    {/*<RaisedButton primary={true} icon={<RollbackIcon />} label="Roll back" />
                                    <RaisedButton primary={true} icon={<DeployIcon />} label="Override & deploy" />
                                    */}
                                </div>
                            </div>
                          </TableHeaderColumn>
                        </TableRow>
                          <TableRow className="euclidTableHeader">
                            <TableHeaderColumn>Version</TableHeaderColumn>
                            <TableHeaderColumn>Published Date/Time</TableHeaderColumn>
                            <TableHeaderColumn>Regression status</TableHeaderColumn>
                          </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={true} deselectOnClickaway={false}>
                          {this.state.tableData3.map((d, i) => {
                                return <TableRow key={i} selectable={true} selected={this.state.selectedRows3.indexOf(i) !== -1}>
                                    <TableRowColumn>{d.version}</TableRowColumn>
                                    <TableRowColumn>{d.date}</TableRowColumn>
                                    <TableRowColumn className="centerAlignContentTd"><StatusIcon className={(d.status > 80 ? "goodStat" : "") ||  ((d.status > 50 && d.status <= 80) ? "warningStat" : "") || ((d.status > 0 && d.status <= 50) ? "dangerStat" : "")}/><a className="euclidLinks">{d.status}%</a></TableRowColumn>
                                </TableRow>
                           })}
                        </TableBody>
                      </Table>
                      </div>
                  </Col>
               </Row>
            </Container>
        )
    }
}
export default Models