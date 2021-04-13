import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Sidebar, Header, Content } from "rsuite";

//components
import Navbar from "./Components/Misc/Navbar/Navbar";

//pages
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Light from "./Pages/Light/Light";

// import default style
import "rsuite/dist/styles/rsuite-dark.css";

const styles = {
  padding: "1rem",
};

function App() {
  return (
    <div className="App">
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
              </Switch>
            </Content>
          </Container>
        </div>
      </Router>
    </div>
  );
}

export default App;
