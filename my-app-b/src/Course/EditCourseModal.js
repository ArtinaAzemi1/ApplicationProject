import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

export class EditCourseModal extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
        
            <div className = "container">

                <Modal

                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered

                >

                    <Modal.Header clooseButton>
                        <Modal.Title id ="contained-modal-title-vcenter">
                            Edit Course
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId = "CourseId">
                                        <Form.Label>Course Id</Form.Label>
                                        <Form.Control className="mb-3" type="text" name="CourseId" required 
                                        diabled defaultValue={this.props.depid} placeholder="ID"></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId = "CourseName">
                                        <Form.Label>Course Name</Form.Label>
                                        <Form.Control className="mb-3" type="text" name="CourseName" required 
                                        defaultValue={this.props.depname}
                                        placeholder="Name"></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId = "CourseSemester">
                                        <Form.Label>Semester</Form.Label>
                                        <Form.Control className="mb-3" type="text" name="CourseSemester" required 
                                        defaultValue={this.props.depname}
                                        placeholder="Semester"></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId = "CourseECTS">
                                        <Form.Label>ECTS</Form.Label>
                                        <Form.Control type="text" name="CourseECTS" required 
                                        defaultValue={this.props.depname}
                                        placeholder="ECTS"></Form.Control>
                                    </Form.Group>

                                    <Form.Group>
                                        <Button className="mt-4" variant="primary" type="submit">
                                            Update Course
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant = "danger" onclick={this.props.onHide}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        )
    }
}