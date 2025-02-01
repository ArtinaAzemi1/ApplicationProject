import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
//import './CRUD/style.css';
//import Header from './CRUD/Header';
//import Sidenav from './CRUD/Sidenav';
//import Home from './CRUD/Home';

import {Home} from './Home/Home';
//import {Student} from './Student/Student';
import Professor from './CRUD/Professor';
import Department from './CRUD/Department';
import Course from './CRUD/Course';
import Dashboard from './Department/Dashboard';
import {Navigation} from './Navigation';
//import {Sidenav} from './Sidenav';
import CRUD from './CRUD/CRUD';
import Student from './CRUD/Student'
import Tables from "./Tables";
//import {Nav} from './Nav';
//import {NavE} from './NavE';
//<Route path="/navE" element={<NavE/>} exact></Route>

import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
  <div>
    <BrowserRouter>
      <div className="container">
        <h1 className="m-4 d-flex justify-content-center" style={{ color: 'darkblue' }}>University Managment System</h1>
        <br/><br/>
        <h3 className="m-3 d-flex justify-content-right" style={{ color: 'darkblue' }}>
          Dashboard
        </h3>

        <Navigation/>
        <br></br>

        <Routes>
          <Route path="/" element={<Home/>} exact></Route>
          <Route path="/student" element={<Student/>} exact></Route>
          <Route path="/professor" element={<Professor/>} exact></Route>
          <Route path="/department" element={<Department/>} exact></Route>
          <Route path="/course" element={<Course/>} exact></Route>
          <Route path="/dashboard" element={<Dashboard/>} exact></Route>
          <Route path="/tables" element={<Tables/>} exact></Route>
          
          
        </Routes>

      </div>
    </BrowserRouter>
  </div>


  /*const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }



  return (
    <div className='grid-container'>
      
      <Header OpenSidebar={OpenSidebar}/>
      <Sidenav openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Student/>

      
    </div>*/


/*<BrowserRouter>
      <div className="container">
        <h1 className="m-4 d-flex justify-content-center" style={{ color: 'darkblue' }}>University Managment System</h1>
        <br/><br/>
        <h3 className="m-3 d-flex justify-content-right" style={{ color: 'darkblue' }}>
          Dashboard
        </h3>

        <Navigation/>
        <br></br>

        <Routes>
          <Route path="/" element={<Home/>} exact></Route>
          <Route path="/student" element={<Student/>} exact></Route>
          <Route path="/professor" element={<Professor/>} exact></Route>
          <Route path="/department" element={<Department/>} exact></Route>
          <Route path="/lenda" element={<Lenda/>} exact></Route>
          <Route path="/dashboard" element={<Dashboard/>} exact></Route>
          <Route path="/sidenav" element={<Sidenav/>} exact></Route>
          
        </Routes>

      </div>
    </BrowserRouter>*/



    /*<BrowserRouter>
      <div className="container">
        <h1 className="m-4 d-flex justify-content-center">University Managment System</h1>
        <br/><br/>
        <h3 className="m-3 d-flex justify-content-right">
          Dashboard
        </h3>

        <Navigation/>

        <Routes>
          <Route path="/" element={<Home/>} exact></Route>
          <Route path="/student" element={<Student/>} exact></Route>
          <Route path="/professor" element={<Professor/>} exact></Route>
          <Route path="/department" element={<Department/>} exact></Route>
          <Route path="/lenda" element={<Lenda/>} exact></Route>
          <Route path="/dashboard" element={<Dashboard/>} exact></Route>
          
        </Routes>

      </div>
    </BrowserRouter>*/
  );
}

export default App;
