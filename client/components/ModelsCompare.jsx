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
import CompareIcon from 'react-material-icons/icons/image/compare';
import BackArrowIcon from 'react-material-icons/icons/navigation/arrow-back';

class Models extends Component{
    constructor(){
        super();
        this.state = {
                        value: 1,
                        tableData: [
                                    {col1: "Model details", col2: {val1: "ARIMA", val2: "Released on: 20 July 2017 10:36:55 PST", version: "1.0", env: "Pre-Prod"}, col3: {val1: "ARIMA", val2: "Released on: 20 July 2017 10:36:55 PST", version: "1.0", env: "Pre-Prod"}},
                                    {col1: "RMSE", col2: {val1: "56%"}, col3: {val1: "48%"}},
                                    {col1: "Accuracy", col2: {val1: "52%"}, col3: {val1: "18%"}}
                                    ],
                        selectedRows: [],
                        selectedRowCount: 0
                     };
    }

    handleChange(event, index, value){
        this.setState({value});
    }
    
    handleRowSelection(selectedRows){
        this.setState({selectedRows: selectedRows.slice(0)});
        if(selectedRows == "all"){
            this.setState({selectedRowCount: 5});  
        }
        else if(selectedRows == "none"){
            this.setState({selectedRowCount: 0});  
        }
        else{
            this.setState({selectedRowCount: selectedRows.length});
        }
        console.log(this.state.selectedRows);
    }

    render () {

    return (
            <Container fluid={true} className="detailsPageContainer">
                <IconButton className="backIcon marginTop7px" href="#home/models">
                    <BackArrowIcon/>
                </IconButton>
                <Row>
                    <Col xs="6">
                      <span className="bodyHeader">Compare models</span>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col xs="12">
                       <div className="tableContainer">
                       <Table className="euclidTable" selectable={false} multiSelectable={false} onRowSelection={this.handleRowSelection.bind(this)}>
                         <TableHeader className="" displaySelectAll={false} adjustForCheckbox={false}>
                          <TableRow className="">
                            <TableHeaderColumn className="" colSpan="3" style={{textAlign: 'left'}}>
                                <div className={((this.state.selectedRowCount > 0 ) ? "tableHeaderInitialActions hideContent" : "tableHeaderInitialActions")}>
                                  <span></span>
                                  <div>
                                      <TextField className="headerSearchInput" hintText="Search"/>
                                      <IconButton tooltip="" className="tableheaderSearchIcon">
                                          <SearchIcon/>
                                      </IconButton>
                                  </div>
                              </div>
                              <div className={((this.state.selectedRowCount > 0 ) ? "tableHeaderItemSelectedActions" : "tableHeaderItemSelectedActions hideContent")}>
                                  <span>{this.state.selectedRowCount} Models Selected</span>
                                  <div className="tableRightBtnCont">
                                      <RaisedButton primary={true} icon={<CompareIcon />} label="Compare" />
                                  </div>
                              </div>
                            </TableHeaderColumn>
                          </TableRow>
                            <TableRow className="euclidTableHeader">
                              <TableHeaderColumn></TableHeaderColumn>
                              <TableHeaderColumn>Model 1</TableHeaderColumn>
                              <TableHeaderColumn>Model 2</TableHeaderColumn>
                            </TableRow>
                          </TableHeader>
                          <TableBody displayRowCheckbox={false} deselectOnClickaway={false}>
                            {this.state.tableData.map((d, i) => {
                                  return <TableRow key={i} selectable={false} selected={this.state.selectedRows.indexOf(i) !== -1}>
                                      <TableRowColumn>{d.col1}</TableRowColumn>
                                      <TableRowColumn>
                                          <div className="compareTableFirst">
                                              <div>
                                                  <span>{d.col2.val1}</span>
                                                  <p>{d.col2.val2}</p>
                                                  <p>{d.col2.version}</p>
                                                  <p>{d.col2.env}</p>
                                              </div>
                                           </div>
                                      </TableRowColumn>
                                      <TableRowColumn>
                                              <div className="compareTableFirst">
                                                  <div>
                                                      <span>{d.col3.val1}</span>
                                                      <p>{d.col3.val2}</p>
                                                      <p>{d.col3.version}</p>
                                                      <p>{d.col3.env}</p>
                                                  </div>
                                               </div>
                                      </TableRowColumn>
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