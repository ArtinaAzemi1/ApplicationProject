import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

export class EditDepModal extends Component {
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
                                    <Form.Group controlId = "DepartmentId">
                                        <Form.Label>DepartmentId</Form.Label>
                                        <Form.Control type="text" name="DepartmentId" required 
                                        diabled defaultValue={this.props.depid} placeholder="DepartmentId"></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId = "DepartmentName">
                                        <Form.Label>DepartmentName</Form.Label>
                                        <Form.Control type="text" name="DepartmentName" required 
                                        defaultValue={this.props.depname}
                                        placeholder="DepartmentName"></Form.Control>
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Update Department
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