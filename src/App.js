import { Route, Switch } from "react-router";
import "./App.css";
import LoginForm from "./components/AuthComponents/LoginForm";
import SignupForm from "./components/AuthComponents/SignupForm";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" component={Home} exact />

        <Route path="/signup" component={SignupForm} exact />

        <Route path="/login" component={LoginForm} exact />
      </Switch>
    </div>
  );
}

export default App;
