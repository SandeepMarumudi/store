

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from "react-router-dom"
import "./navbar.css"
import { createContext, useState } from 'react';

export const Searchinput=createContext()
const Navbar1=()=> {
  

  return (
 
      <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container >
          <NavLink to={"/"} ><Navbar.Brand >Home</Navbar.Brand></NavLink>
          <Nav className="me-auto" style={{display:"flex",gap:"35px"}}>
            <NavLink to={"all"}>All</NavLink>
            <NavLink to={"electronics"} >Electronics</NavLink>
            <NavLink to={"men's"} >Men's clothing</NavLink>
            <NavLink to={"women's"}>women's clothing</NavLink>
            <NavLink to={"jewelery"}>Jewelery</NavLink>
            <NavLink to={"categories"}>Categories</NavLink>
           
          </Nav>
        </Container>
      </Navbar>
    </>

   
    
  );
}

export default Navbar1;