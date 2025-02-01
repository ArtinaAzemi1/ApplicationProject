import React, {useState, useEffect, Fragment} from 'react';
import {Table, Button, Modal, Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import {ButtonToolbar, Form} from 'react-bootstrap';
//import AddStudent from './AddStudent'

const Course =() => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const[name, setName] = useState('')
    const[surname, setSurname] = useState('')
    const[birthDate, setBirthDate] = useState('')
    const[gender, setGender] = useState('')
    const[city, setCity] = useState('')
    const[email, setEmail] = useState('')

    const[editId, setEditId] = useState('');
    const[editName, setEditName] = useState('')
    const[editSurname, setEditSurname] = useState('')
    const[editBirthDate, setEditBirthDate] = useState('')
    const[editGender, setEditGender] = useState('')
    const[editCity, setEditCity] = useState('')
    const[editEmail, setEditEmail] = useState('')

    const empdata = [
        {
            id: 2,
            name : 'Architecture',
            semester : 1,
            ects : 5
        },
        {
            id: 2,
            name : 'Computer Science 1',
            semester : 2,
            ects : 6
        }
    ]

    const[data, setData] = useState([]);

    //useEffect(()=> {
    //    getData();
    //},[])

    const getData = () => {
        axios.get('http://localhost:5034/api/SCourse').then((result) =>{
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
        axios.get('http://localhost:5034/api/Course/${id}').then((result)=>{
            setEditName(result.data.name);
            setEditSurname(result.data.surname);
            setEditBirthDate(result.data.birthDate);
            setEditGender(result.data.gender);
            setEditCity(result.data.city);
            setEditEmail(result.data.email);
            setEditId(id);
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    const handleDelete =(id) => {
        if(window.confirm("Are you sure you want to delete this course ?") == true) {
            axios.delete('http://localhost:5034/api/Course/${id}').then((result)=>{
                if(result.status === 200) {
                    toast.success('Course has been deleted');
                    getData();
                }
            })
            .catch((error)=>{
                toast.error(error);
            })
        }
    }

    const handleUpdate =()=> {
        const url = 'http://localhost:5034/api/Course/${editId}';
        const data = {
            "id": editId,
            "name": editName,
            "semester": editSemester,
            "ects": editEcts
        }

        axios.put(url, data).then((result) => {
            handleClose();
            getData();
            clear();
            toast.success('Course has been updated !');
        }).catch((error)=>{
            toast.error(error);
        })
    }

    const handleSave =() => {
        const url = 'http://localhost:5034/api/Course';
        const data = {
            "name": name,
            "semester": semester,
            "ects": ects
        }

        axios.post(url, data).then((result) => {
            getData();
            clear();
            toast.success('Course has been added !');
        }).catch((error)=>{
            toast.error(error);
        })
    }

    const clear = () => {
        setName('');
        setSemester('');
        setEcts('');
        setEditName('');
        setEditSemester('');
        setEditEcts('');
    }

    //const handleActiveChange =(e) => {
    //    if(e.target.value) {
    //        setEmail("");
    //    }
    //    else {
    //        setEmail("");
    //    }
    //}
//
    //const handleEditActiveChange =(e) => {
    //    if(e.target.value) {
    //        setEditEmail("");
    //    }
    //    else {
    //        setEditEmail("");
    //    }
    //}

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
                  <input type="text" className="form-control" placeholder="Enter Semster"
                  value= {semester} onChange={(e)=> setSemester(e.target.value)} />
                  </Col>
                  <Col>
                  <input type="text" className="form-control" placeholder="Enter BirthDate"
                  value= {ects} onChange={(e)=> setEcts(e.target.value)} />
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
                        <th>Semester</th>
                        <th>Ects</th>
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
                                        <td>{item.semester}</td>
                                        <td>{item.ects}</td>
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
                            <Modal.Title>Modify / Update Course</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Col>
                            <Col>
                            <input type="text" className="form-control" placeholder="Enter Name"
                            value= {editName} onChange={(e)=> setEditName(e.target.value)} />
                            </Col>
                            <br/>
                            <Col>
                            <input type="text" className="form-control" placeholder="Enter Semester"
                            value= {editSemester} onChange={(e)=> setEditSemester(e.target.value)} />
                            </Col>
                            <br/>
                            <Col>
                            <input type="text" className="form-control" placeholder="Enter ECTS"
                            value= {editEcts} onChange={(e)=> setEditEcts(e.target.value)} />
                            </Col>
                            <br/>
                            <Col>
                            <input type="text" className="form-control" placeholder="Enter Gender"
                            value= {editGender} onChange={(e)=> setEditGender(e.target.value)} />
                            </Col>
                            <br/>
                            <Col>
                            <input type="text" className="form-control" placeholder="Enter City"
                            value= {editCity} onChange={(e)=> setEditCity(e.target.value)} />
                            </Col>
                            <br/>
                            <Col>
                            <input type="text" classNme="form-control" placeholder="Enter Email"
                            value= {editEmail} onChange={(e)=> handleEditActiveChange(e.target.value)} />
                            </Col>
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

export default Course;