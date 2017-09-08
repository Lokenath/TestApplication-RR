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

class Models extends Component{
    constructor(){
        super();
        this.state = {
                        value: 1,
                        tableData: [
                                    {id: "1", type: "sasd", user: "rtwwe", name: "dfsdsa", version: "sdfsf", desc:"", date: "dfgfg", status:"jshus"},
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
            <Container fluid={true}>
                <Row>
                    <Col xs="12">
                      <span className="bodyHeader">Header</span>
                    </Col>
                     {/* 
                    <Col xs="6">
                      <div className="horizontalSelectContainer">
                          <span>Duration</span>
                          <SelectField
                              className="blueSelect"
                              autoWidth={false}
                              value={this.state.value}
                              onChange={this.handleChange.bind(this)}
                              >
                              <MenuItem value={1} primaryText="1 M (1 Jun - 30 Jun ’17)" />
                              <MenuItem value={2} primaryText="2 M (3 Jun - 30 Jun ’17)" />
                           </SelectField>
                       </div>
                    </Col>
                    */}
                </Row>
                <br/>
                <Row>
                    <Col xs="12">
                       <div className="tableContainer">
                       <Table className="euclidTable" selectable={true} multiSelectable={true} onRowSelection={this.handleRowSelection.bind(this)}>
                         <TableHeader className="" displaySelectAll={true} adjustForCheckbox={true}>
                          <TableRow className="removeFirstTh">
                            <TableHeaderColumn className="" colSpan="6" style={{textAlign: 'left'}}>
                                <div className={((this.state.selectedRowCount > 0 ) ? "tableHeaderInitialActions hideContent" : "tableHeaderInitialActions")}>
                                  <p className="tableHeaderText">5 Items</p>
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
                                      <RaisedButton primary={true} icon={<CompareIcon />} label="Check"  disabled={!(this.state.selectedRowCount > 1)} href="#/home/modelscompare" />
                                  </div>
                              </div>
                            </TableHeaderColumn>
                          </TableRow>
                            <TableRow className="euclidTableHeader">
                              <TableHeaderColumn>Header 1</TableHeaderColumn>
                              <TableHeaderColumn>Header 1</TableHeaderColumn>
                              <TableHeaderColumn>Header 1</TableHeaderColumn>
                              <TableHeaderColumn>Header 1</TableHeaderColumn>
                              <TableHeaderColumn>Header 1</TableHeaderColumn>
                              <TableHeaderColumn>Header 1</TableHeaderColumn>
                            </TableRow>
                          </TableHeader>
                              
                          <TableBody displayRowCheckbox={true} deselectOnClickaway={false}>
                            {this.state.tableData.map((d, i) => {
                                  return <TableRow key={i} selectable={true} selected={this.state.selectedRows.indexOf(i) !== -1}>
                                      <TableRowColumn>{d.name}</TableRowColumn>
                                      <TableRowColumn>{d.type}</TableRowColumn>
                                      <TableRowColumn>{d.user}</TableRowColumn>
                                      <TableRowColumn><a className="euclidLinks">{d.version}</a></TableRowColumn>
                                      <TableRowColumn>{d.date}</TableRowColumn>
                                      <TableRowColumn><span className={(d.status == 'Active' ? "activeLabel" : "inactiveLabel" )}>{d.status}</span> {d.status == "Inactive" ? <p className="tableStausExtratext">Since 10-Jul-2017,02:03:04</p> : ""}</TableRowColumn>
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