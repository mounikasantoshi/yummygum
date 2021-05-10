import "./App.css";
import Contact from "./components/Contact";
import Videocall from "./components/Videocall";
// import Contact2 from "./components/Contactwrapper";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Videocall from "./components/Videocall";

function App() {
  return (
    <div>
      <Contact />
      {/* <Videocall /> */}
      {/* <Router>
        <Switch>
          <Route exact path="/Contact" component={Contact} />

          <Route exact path="/Videocall" component={Videocall} />
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
