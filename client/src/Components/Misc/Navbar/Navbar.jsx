import React, { useState } from "react";
import { Nav, Icon } from "rsuite";
import { Link } from "react-router-dom";

const CustomNav = ({ active, onSelect, ...props }) => {
  return (
    <Nav {...props} activeKey={active} onSelect={onSelect}>
      <Nav.Item
        eventKey="home"
        icon={<Icon icon="home" />}
        componentClass={Link}
        to="/"
      >
        Home
      </Nav.Item>
      <Nav.Item eventKey="light" componentClass={Link} to="/light">
        Light
      </Nav.Item>
      <Nav.Item eventKey="matrix" componentClass={Link} to="/matrix">
        Matrix
      </Nav.Item>

      <Nav.Item eventKey="about">About</Nav.Item>
    </Nav>
  );
};

const Navbar = () => {
  const [active, setActive] = useState();
  const handleSelect = (activeKey) => {
    setActive(activeKey);
  };
  return (
    <CustomNav appearance="tabs" active={active} onSelect={handleSelect} />
  );
};

export default Navbar;
