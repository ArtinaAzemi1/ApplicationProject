import React, {Component} from 'react';
import { Table, ButtonToolbar, Button } from 'react-bootstrap';
import {AddDepModal} from './AddDepModal'
import {EditDepModal} from './EditDepModal'
import './dep.css';
//import axios from 'axios';

export class Department extends Component {

    constructor (props) {
        super(props);
        this.state={departments:[], addModalShow:false}
    }

    /*refreshList() {
        fetch(process.env.REACT_APP_API+'department')
        .then(response=>response.json())
        .then(data=>{
            this.setState({departments:data})
        });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    /*componentDidMount() {
        // Fetching data from the server when the component mounts
        axios.get('https://localhost:5170/api/Department')
            .then(response => {
                this.setState({ departments: response.data });
            })
            .catch(error => {
                console.error('Error fetching departments:', error);
            });
    }*/

    render() {
        const {departments} = this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return (
            <div className="mt-5 ml-4 d-grid justify-content-left">
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Dean Name</th>
                            <th>Staf</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {departments.map(department => (
                            <tr key={department.DepartmentId}>
                                <td>{department.DepartmentId}</td>
                                <td>{department.DepartmentName}</td>
                                <td>{department.DeanName}</td>
                                <td>{department.stafCount}</td>
                            <td>
                                <ButtonToolbar>
                                    <Button className="mr-2" variant="info"
                                    onClick={()=>this.setState({editModalShow:true})}>
                                        Edit
                                    </Button>

                                    <Button className="mr-2" variant="danger"
                                    onClick={()=>this.deleteDep({editModalShow:true})}>
                                        Delete
                                    </Button>

                                    <EditDepModal show={this.state.editModalShow}
                                    onHide={editModalClose}
                                    >

                                    </EditDepModal>
                                </ButtonToolbar>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </Table>
                

                
                <ButtonToolbar>
                    <Button variant = "primary" className="ml-4" style={{ marginTop: '60px' }} 
                    onClick={()=>this.setState({addModalShow:true})}>Add Department</Button>

                    <AddDepModal show={this.state.addModalShow}
                    onHide={addModalClose}></AddDepModal>
                </ButtonToolbar>
                
                
            </div>
        )
    }
}