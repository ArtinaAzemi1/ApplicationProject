import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import {ButtonToolbar, Button } from 'react-bootstrap';
import {AddProfModal} from './AddProfModal'
import {EditProfModal} from './EditProfModal'

export class Professor extends Component {
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
                            <th>Course</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
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

                                    <EditProfModal show={this.state.editModalShow}
                                    onHide={editModalClose}
                                    >

                                    </EditProfModal>
                                </ButtonToolbar>
                            </td>
                        </tr>
                    </tbody>
                </Table>

                
                <ButtonToolbar>
                    <Button variant = "primary"
                    onClick={()=>this.setState({addModalShow:true})}>Add Professor</Button>

                    <AddProfModal show={this.state.addModalShow}
                    onHide={addModalClose}></AddProfModal>
                </ButtonToolbar>
                
            </div>
        )
    }
}
