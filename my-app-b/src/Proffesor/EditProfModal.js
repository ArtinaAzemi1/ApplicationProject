import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

export class EditProfModal extends Component {
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
                            Edit Proffesor
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId = "ProffesorId">
                                        <Form.Label>Id</Form.Label>
                                        <Form.Control type="text" name="ProffesorId" required 
                                        diabled defaultValue={this.props.depid} placeholder="ProffesorId"></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId = "ProffesorName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" name="ProffesorName" required 
                                        defaultValue={this.props.depname}
                                        placeholder="ProffesorName"></Form.Control>
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Update Proffesor
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