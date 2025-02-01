import React, {useState, useEffect, Fragment} from 'react';
import {Table, Button, Modal, Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import {ButtonToolbar, Form} from 'react-bootstrap';
//import AddStudent from './AddStudent'

const Department =() => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const[name, setName] = useState('')
    const[surname, setDeanName] = useState('')
    const[birthDate, setStafCount] = useState('')

    const[editId, setEditId] = useState('');
    const[editName, setEditName] = useState('')
    const[editSurname, setEditDeanName] = useState('')
    const[editBirthDate, setEditStafCount] = useState('')

    const empdata = [
        {
            id: 1,
            name : 'Computer Science and Engineering',
            deanName : 'Filan Fisteku',
            stafCount : 40,
        },
        {
            id: 1,
            name : 'Mecatronics',
            deanName : 'Fitim Mustafa',
            stafCount : 30,
        }
    ]

    const[data, setData] = useState([]);

    //useEffect(()=> {
    //    getData();
    //},[])

    const getData = () => {
        axios.get('http://localhost:5034/api/Department').then((result) =>{
            setData(result.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    useEffect(()=> {
        getData();
    },[])

    const handleEdit =(id) => {
        handleShow();
        axios.get('http://localhost:5034/api/Department/${id}').then((result)=>{
            setEditName(result.data.name);
            setEditDeanName(result.data.deanName);
            setEditStafCount(result.data.stafCount);
            setEditId(id);
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    const handleDelete =(id) => {
        if(window.confirm("Are you sure you want to delete this student ?") == true) {
            axios.delete('http://localhost:5034/api/Department/${id}').then((result)=>{
                if(result.status === 200) {
                    toast.success('Department has been deleted');
                    getData();
                }
            })
            .catch((error)=>{
                toast.error(error);
            })
        }
    }

    const handleUpdate =()=> {
        const url = 'http://localhost:5034/api/Department/${editId}';
        const data = {
            "id": editId,
            "name": editName,
            "deanName": editDeanName,
            "stafCount": editStafCount
        }

        axios.put(url, data).then((result) => {
            handleClose();
            getData();
            clear();
            toast.success('Department has been updated !');
        }).catch((error)=>{
            toast.error(error);
        })
    }

    const handleSave =() => {
        const url = 'http://localhost:5034/api/Department';
        const data = {
            "name": name,
            "surdeanNamename": deanName,
            "stafCount": stafCount
        }

        axios.post(url, data).then((result) => {
            getData();
            clear();
            toast.success('Department has been added !');
        }).catch((error)=>{
            toast.error(error);
        })
    }

    const clear = () => {
        setName('');
        setDeanName('');
        setStafCount('');
        setEditName('');
        setEditDeanName('');
        setEditStafCount('');
        setEditId('');
    }

    /*const handleActiveChange =(e) => {
        if(e.target.value) {
            setEmail("");
        }
        else {
            setEmail("");
        }
    }

    const handleEditActiveChange =(e) => {
        if(e.target.value) {
            setEditEmail("");
        }
        else {
            setEditEmail("");
        }
    }*/

    //const express = require('express');
    //const cors = require('cors');
    //
    //const app = express();
    //
    //// Allow requests from all origins
    //app.use(cors());
    //
    //// Or, specify specific origins
    //app.use(cors({
    //  origin: 'http://localhost:3000' // Replace with your client's domain
    //}));
    //
    //// Your other route handlers and middleware
    //
    //app.listen(5034, () => {
    //  console.log('Server is running on port 5034');
    //});

    return (
        <div className="mt-5 d-grid justify-content-left">
        <Fragment>
            <ToastContainer/>
            <Container>
                <Row>
                  <Col>
                  <input type="text" className="form-control" placeholder="Enter Name"
                  value= {name} onChange={(e)=> setName(e.target.value)} />
                  </Col>
                  <Col>
                  <input type="text" className="form-control" placeholder="Enter Dean Name"
                  value= {surname} onChange={(e)=> setDeanName(e.target.value)} />
                  </Col>
                  <Col>
                  <input type="text" className="form-control" placeholder="Enter Staf Count"
                  value= {birthDate} onChange={(e)=> setStafCount(e.target.value)} />
                  </Col>
                  <Col>
                  <Button classNme="btn btn-primary" onClick={() => handleSave()}> Submit</Button>
                  </Col>
                </Row>
            </Container>
    <br/>
             <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Dean Name</th>
                        <th>Staf Count</th>
                      </tr>
                    </thead>
                    <tbody>
                        {
                           data && data.length > 0 ?
                            data.map((item, index)=>{
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.deanName}</td>
                                        <td>{item.stafCount}</td>
                                        <td>
                                            <button className="btn btn-primary" onClick={()=> handleEdit(item.id)}>Edit</button> &nbsp;
                                            <button className="btn btn-danger" onClick={()=> handleDelete(item.id)}>Delete</button>
                                        </td>
                                  </tr>
                                )
                            })
                            :
                            'Loading...'
                        }
                    </tbody>
                  </Table>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                            <Modal.Title>Modify / Update Department</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Col>
                            <Col>
                            <input type="text" className="form-control" placeholder="Enter Name"
                            value= {editName} onChange={(e)=> setEditName(e.target.value)} />
                            </Col>
                            <br/>
                            <Col>
                            <input type="text" className="form-control" placeholder="Enter Surname"
                            value= {editSurname} onChange={(e)=> setEditDeanName(e.target.value)} />
                            </Col>
                            <br/>
                            <Col>
                            <input type="text" className="form-control" placeholder="Enter BirthDate"
                            value= {editBirthDate} onChange={(e)=> setEditStafCount(e.target.value)} />
                            </Col>
                            <br/>
                            
                        </Col>
                      </Modal.Body>
                      <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                              Close
                        </Button>
                        <Button variant="primary" onClick={handleUpdate}>
                              Save Changes
                        </Button>
                      </Modal.Footer>
                    </Modal>
        </Fragment>

        
        </div>
    )
}

export default Department;