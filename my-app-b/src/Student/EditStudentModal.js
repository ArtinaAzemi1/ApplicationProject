import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

export class EditStudentModal extends Component {
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
                            Edit Department
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId = "StudentId">
                                        <Form.Label>Id</Form.Label>
                                        <Form.Control type="text" name="StudentId" required 
                                        diabled defaultValue={this.props.depid} placeholder="StudentId"></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId = "StudentName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" name="StudentName" required 
                                        defaultValue={this.props.depname}
                                        placeholder="StudentName"></Form.Control>
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Update Student
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