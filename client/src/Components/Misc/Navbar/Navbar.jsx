import React, { useContext } from "react";
import { Nav, Icon } from "rsuite";
import { Link } from "react-router-dom";
import { navKeyContext } from "../../../context";

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
      {/* <Nav.Item eventKey="light" componentClass={Link} to="/light">
        Light
      </Nav.Item> */}
      <Nav.Item eventKey="matrix" componentClass={Link} to="/matrix">
        Matrix
      </Nav.Item>
    </Nav>
  );
};

const Navbar = () => {
  const { navbarKey } = useContext(navKeyContext);

  return <CustomNav appearance="tabs" active={navbarKey} />;
};

export default Navbar;
