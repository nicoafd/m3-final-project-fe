import axios from "axios";
import { Component } from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import LoginForm from "./components/AuthComponents/LoginForm";
import SignupForm from "./components/AuthComponents/SignupForm";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";

class App extends Component {
  state = {
    user: null,
    isLoggedIn: null,
  };

  setUser = (user, loggedInStatus) => {
    this.setState({ user, isLoggedIn: loggedInStatus });
  };

  getUser = () => {
    if (this.state.user === null) {
      axios
        .get(`${process.env.REACT_APP_API_HOST}/auth/loggedin`, {
          withCredentials: true,
        })
        .then((response) => {
          this.setState({ user: response.data.user || null, isLoggedIn: true });
        })
        .catch((err) => {
          this.setState({
            isLoggedIn: false,
          });
        });
    }
  };

  componentDidMount() {
    this.getUser();
  }

  render() {
    const { user, isLoggedIn } = this.state;
    return (
      <div className="App">
        <NavBar isLoggedIn={isLoggedIn} user={user} setUser={this.setUser} />
        <Switch>
          <Route path="/" component={Home} exact />

          <Route
            path="/signup"
            render={(props) => <SignupForm {...props} setUser={this.setUser} />}
            exact
          />

          <Route
            path="/login"
            render={(props) => <LoginForm {...props} setUser={this.setUser} />}
            exact
          />
        </Switch>
      </div>
    );
  }
}

export default App;
