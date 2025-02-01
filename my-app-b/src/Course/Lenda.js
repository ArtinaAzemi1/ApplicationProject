import React, {Component} from 'react';
import { Table, ButtonToolbar, Button } from 'react-bootstrap';
import {AddCourseModal} from './AddCourseModal'
import {EditCourseModal} from './EditCourseModal'

export class Lenda extends Component {
    constructor (props) {
        super(props);
        this.state={deps:[], addModalShow:false}
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
                            <th>Semester</th>
                            <th>ECTS</th>
                            <th>IdProfessor</th>
                            <th>DepartmentID</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>4343</td>
                            <td>Programim</td>
                            <td>1</td>
                            <td>5</td>
                            <td>234</td>
                            <td>432</td>
                            <td>
                                <ButtonToolbar>
                                    <div  className="d-flex justify-content-right">
                                    <Button className="mr-2 ml-3" variant="info"
                                    onClick={()=>this.setState({editModalShow:true})}>
                                        Edit
                                    </Button>

                                    <Button className=" mr-2 ml-2" variant="danger"
                                    onClick={()=>this.deleteDep({editModalShow:true})}>
                                        Delete
                                    </Button>
                                    </div>

                                    <EditCourseModal show={this.state.editModalShow}
                                    onHide={editModalClose}
                                    >

                                    </EditCourseModal>
                                </ButtonToolbar>
                            </td>
                        </tr>
                    </tbody>
                </Table>

                
                <ButtonToolbar>
                    <Button variant = "primary"
                    onClick={()=>this.setState({addModalShow:true})}>Add Course</Button>

                    <AddCourseModal show={this.state.addModalShow}
                    onHide={addModalClose}></AddCourseModal>
                </ButtonToolbar>
                
            </div>
        )
    }
}