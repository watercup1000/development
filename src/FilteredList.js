import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState } from 'react';
import DisplayList from './DisplayList.js';


function FilteredList(props) {
    //implementign the filtering stuff
    const [type, setType] = useState("All");
    const [price, setPrice] = useState("Any");
    const [sortBy, setSortBy] = useState("PriceAscending");


    const onSelectFilterSize = (event) => {
       setType(event)
    };

    const onSelectFilterPrice = (event) => {
        setPrice(event)
     };

    const onSelectSortBy = event => {
        setSortBy(event)
    }

        
    const matchesFilterSize = (item) => {
       if (type === "All") {
            return true
       } else if (type === item.type) {
        return true
       } else {
        return false
       }
    };

    const matchesFilterPrice = (item) => {
        if (price === "Any") {
             return true
        } else if (price === item.price.toString()) {
         return true
        } else {
         return false
        }
     };

    return (
        <div className="FilteredList">
            <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" id="navName">Da Best Drinks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Type of Drink" id="basic-nav-dropdown" onSelect={onSelectFilterSize}>
            <NavDropdown.Item eventKey="All" id="nav-dropdown-item">
                All
                </NavDropdown.Item>
              <NavDropdown.Item eventKey="Soda" id="nav-dropdown-item">
                Soda
                </NavDropdown.Item>
              <NavDropdown.Item eventKey="Hot" id="nav-dropdown-item">
                Hot
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="Beer" id="nav-dropdown-item">
                Beer
                </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Price of Drink" id="basic-nav-dropdown" onSelect={onSelectFilterPrice}>
            <NavDropdown.Item eventKey="Any" id="nav-dropdown-item">
                Any
                </NavDropdown.Item>
              <NavDropdown.Item eventKey="1" id="nav-dropdown-item">
                1
                </NavDropdown.Item>
              <NavDropdown.Item eventKey="3" id="nav-dropdown-item">
                3
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4" id="nav-dropdown-item">
                4
                </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Sort By" id="basic-nav-dropdown" onSelect={onSelectSortBy}>
            <NavDropdown.Item eventKey="PriceAscending" id="nav-dropdown-item">
                Price Low to High
                </NavDropdown.Item>
              <NavDropdown.Item eventKey="PriceDescending" id="nav-dropdown-item">
                Price High to Low
                </NavDropdown.Item>

            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    <DisplayList list={props.list
        .filter(matchesFilterSize)
        .filter(matchesFilterPrice)} sortBy={sortBy}
        />
    </div>
    );
}

export default FilteredList;
