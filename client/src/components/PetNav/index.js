import React from "react";
import { Dropdown, Button } from "react-bootstrap";
import { FaPlusSquare, FaShareAlt } from "react-icons/fa";
import "./style.css";

const PetNav = function() {
  return (
    <nav className="navbar" id="pet-nav">
      <div className="container">
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Select Pet
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Pet 1</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Pet 2</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Pet 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Button variant="secondary">
          Add A Pet <FaPlusSquare />
        </Button>

        <Button variant="secondary">
          Export/Share <FaShareAlt />
        </Button>
      </div>
    </nav>
  );
};

export default PetNav;
