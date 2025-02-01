import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

export class AddCourseModal extends Component {
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
                            Add Course
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId = "CourseName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control className="mb-3" type="text" name="CourseName" required placeholder="Name"></Form.Control>
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
                                        <Button className="mt-4" variant = "primary" type="submit">
                                            Add Course
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