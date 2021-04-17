import React, { useState, useEffect } from "react";
import axios from "axios";
import { prefix } from "./Components/Misc/api";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Header, Content } from "rsuite";

//components
import Navbar from "./Components/Misc/Navbar/Navbar";

//pages
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Light from "./Pages/Light/Light";
import Matrix from "./Pages/Matrix/Matrix";

//context
import { clusterContext } from "./clusterContext.jsx";

// import default style
import "rsuite/dist/styles/rsuite-dark.css";

const styles = {
  padding: "1rem",
};

function App() {
  const [clusterList, setclusterList] = useState();
  useEffect(() => {
    const fetchClusterList = async () => {
      const data = await axios.get(`${prefix}/clusterswl`);
      const clusterNames = [];
      data.data.map((obj) => clusterNames.push(obj.name));
      setclusterList(clusterNames);
    };
    fetchClusterList();
  }, []);
  return (
    <div className="App">
      <clusterContext.Provider value={{ clusterList, setclusterList }}>
        <Router>
          <div className="show-container">
            <Container style={{ height: "100vh" }}>
              <Header style={styles}>
                <Navbar />
              </Header>
              <Content style={styles}>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/light" component={Light} />
                  <Route exact path="/matrix" component={Matrix} />
                </Switch>
              </Content>
            </Container>
          </div>
        </Router>
      </clusterContext.Provider>
    </div>
  );
}

export default App;
