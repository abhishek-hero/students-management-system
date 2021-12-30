import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/index";
import Contest from "./components/Contest/index";
import { Navigation } from "./components/Navbar/Navigation";
import { Admin } from "./components/Admin/Admin";
import { Student } from "./pages/Student";

function App() {
  return (
    <div className="App">
      <div className="navbar-div">
        <Navigation />
      </div>
      <Switch>
        <Route path="/students">
          <Student />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/contest">
          <Contest />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
