import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import { Link, Outlet, useNavigate } from "react-router-dom";
import {Navbar,Nav, Container, Col} from 'react-bootstrap';
import Student from './CRUD/Student'
import 'bootstrap/dist/css/bootstrap.min.css';


export class Navigation extends Component {
    render() {
        return (
            <Navbar bg="primary" expand="lg">
                <Navbar.Toggle aria-contols="basic-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
                <NavLink className="p-2 text-white" to="/"  style={{ textDecoration: 'none' }}>Home</NavLink>
                <NavLink className="p-2 text-white" to="/student"  style={{ textDecoration: 'none' }}>Student</NavLink>
                <NavLink className="p-2 text-white" to="/professor"  style={{ textDecoration: 'none' }}>Professor</NavLink>
                <NavLink className="p-2 text-white" to="/department"  style={{ textDecoration: 'none' }}>Department</NavLink>
                <NavLink className="p-2 text-white" to="/lenda"  style={{ textDecoration: 'none' }}>Course</NavLink>
                <NavLink className="p-2 text-white" to="/tables"  style={{ textDecoration: 'none' }}>Tables</NavLink>
            </Navbar>
        )
    }
}