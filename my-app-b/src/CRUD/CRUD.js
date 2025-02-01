import React, {useState, useEffect, Fragment} from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const CRUD =() => {

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
            id: 1,
            name : 'Mai',
            surname : 'Mala',
            birthDate : '19-2-2001',
            gender : 'Male',
            city : 'Prishtina',
            email : 'mai@gmail.com'
        },
        {
            id: 2,
            name : 'Ela',
            surname : 'Gashi',
            birthDate : '10-10-2000',
            gender : 'Female' ,
            city : 'Prishtina',
            email : 'ela@gmail.com'
        }
    ]

    const[data, setData] = useState([]);

    //useEffect(()=> {
    //    getData();
    //},[])

    const getData = () => {
        axios.get('http://localhost:5034/api/Student').then((result) =>{
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
        //alert(id);
        handleShow();
    }

    const handleDelete =(id) => {
        if(window.confirm("Are you sure you want to delete this student ?") == true) {
            alert(id);
        }
    }

    const handleUpdate =()=> {

    }

    const handleSave =() => {
        const url = 'http://localhost:5034/api/Student';
        const data = {
            "name": name,
            "surname": surname,
            "birthDate": birthDate,
            "gender": gender,
            "city": city,
            "email": email
        }

        axios.post(url, data).then((result) => {
            getData();
            clear();
            toast.success('Student has been added !');
        })
    }

    const clear = () => {
        setName('');
        setSurname('');
        setBirthDate('');
        setGender('');
        setCity('');
        setEmail('');
        setEditName('');
        setEditSurname('');
        setEditBirthDate('');
        setEditGender('');
        setEditCity('');
        setEditEmail('');
        setEditId('');
    }

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
        <Fragment>
            <ToastContainer/>
            <Container>
                <Row>
                  <Col>
                  <input type="text" className="form-control" placeholder="Enter Name"
                  value= {name} onChange={(e)=> setName(e.target.value)} />
                  </Col>
                  <Col>
                  <input type="text" className="form-control" placeholder="Enter Surname"
                  value= {surname} onChange={(e)=> setSurname(e.target.value)} />
                  </Col>
                  <Col>
                  <input type="text" className="form-control" placeholder="Enter BirthDate"
                  value= {birthDate} onChange={(e)=> setBirthDate(e.target.value)} />
                  </Col>
                  <Col>
                  <input type="text" className="form-control" placeholder="Enter Gender"
                  value= {gender} onChange={(e)=> setGender(e.target.value)} />
                  </Col>
                  <Col>
                  <input type="text" className="form-control" placeholder="Enter City"
                  value= {city} onChange={(e)=> setCity(e.target.value)} />
                  </Col>
                  <Col>
                  <input type="text" classNme="form-control" placeholder="Enter Email"
                  value= {email} onChange={(e)=> setEmail(e.target.value)} />
                  </Col>
                  <Col>
                  <button classNme="btn btn-primary" onClick={() => handleSave()}> Submit</button>
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
                        <th>Surname</th>
                        <th>BirthDate</th>
                        <th>Gender</th>
                        <th>City</th>
                        <th>Email</th>
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
                                        <td>{item.surname}</td>
                                        <td>{item.birthDate}</td>
                                        <td>{item.gender}</td>
                                        <td>{item.city}</td>
                                        <td>{item.email}</td>
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
                            <Modal.Title>Modify / Update Student</Modal.Title>
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
                            value= {editSurname} onChange={(e)=> setEditSurname(e.target.value)} />
                            </Col>
                            <br/>
                            <Col>
                            <input type="text" className="form-control" placeholder="Enter BirthDate"
                            value= {editBirthDate} onChange={(e)=> setEditBirthDate(e.target.value)} />
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
                            value= {editEmail} onChange={(e)=> setEditEmail(e.target.value)} />
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
    )
}

export default CRUD;