import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import {ButtonToolbar, Button } from 'react-bootstrap';
import {AddStudentModal} from './AddStudentModal'
import {EditStudentModal} from './EditStudentModal'

export class Student extends Component {
    constructor (props) {
        super(props);
        this.state={students:[], addModalShow:false}
    }

    render() {
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return (
            <div className="mt-5 d-grid justify-content-left">
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Email</th>
                            <th>Date of birth</th>
                            <th>Gender</th>
                            <th>Year</th>
                            <th>City</th>
                            <th>Photo</th>
                            <th>Department</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>4343</td>
                            <td>Filan</td>
                            <td>Fisteku</td>
                            <td>filan@gmail.com</td>
                            <td>02/09/1999</td>
                            <td>Male</td>
                            <td>2017/2018</td>
                            <td>Pishtina</td>
                            <td>photo</td>
                            <td>SHKI</td>
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

                                    <EditStudentModal show={this.state.editModalShow}
                                    onHide={editModalClose}
                                    >

                                    </EditStudentModal>
                                </ButtonToolbar>
                            </td>
                        </tr>
                    </tbody>
                </Table>

                
                <ButtonToolbar>
                    <Button variant = "primary"
                    onClick={()=>this.setState({addModalShow:true})}>Add Student</Button>

                    <AddStudentModal show={this.state.addModalShow}
                    onHide={addModalClose}></AddStudentModal>
                </ButtonToolbar>
                
            </div>
        )
    }
}