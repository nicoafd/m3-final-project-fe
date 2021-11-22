import axios from "axios";
import { Component } from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import LoginForm from "./components/AuthComponents/LoginForm";
import SignupForm from "./components/AuthComponents/SignupForm";
import AddThreadForm from "./components/ForumComponents/AddThreadForm";
import AllThreads from "./components/ForumComponents/AllThreads";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import AddProductForm from "./components/ProductComponents/AddProductForm";
import AllProducts from "./components/ProductComponents/AllProducts";
import Profile from "./components/ProfileComponent/Profile";
import OneThread from "./components/ForumComponents/OneThread";
import ServerError from "./components/ErrorComponents/ServerError";
import NotFound from "./components/ErrorComponents/NotFound";
import NotAuthorized from "./components/ErrorComponents/NotAuthorized";
import OneProduct from "./components/ProductComponents/OneProduct";
import ProductEdit from "./components/ProductComponents/ProductEdit";
import ThreadEdit from "./components/ForumComponents/ThreadEdit";
import "bootstrap/dist/css/bootstrap.min.css";

//:/

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
            path="/marketplace"
            render={(props) => (
              <AllProducts {...props} isLoggedIn={isLoggedIn} exact />
            )}
          />

          <Route
            path="/login"
            render={(props) => <LoginForm {...props} setUser={this.setUser} />}
            exact
          />

          <Route
            path="/forum"
            render={(props) => (
              <AllThreads {...props} isLoggedIn={isLoggedIn} />
            )}
            exact
          />

          <Route path="/thread/:id" component={OneThread} exact />
          {/* <Route path=“/product/:id/edit” component={} exact /> */}
          {/* <Route path="/thread/:id/edit" component={} exact /> */}

          <Route path="/product/:id" component={OneProduct} exact />
          <Route path="/product/:id/edit" component={ProductEdit} exact />

          {isLoggedIn && (
            <Route path="/sell" component={AddProductForm} exact />
          )}

          {isLoggedIn && <Route path="/profile" component={Profile} exact />}

          {isLoggedIn && (
            <Route path="/create" component={AddThreadForm} exact />
          )}

          <Route path="/not-found" component={NotFound} />

          <Route path="/not-authorized" component={NotAuthorized} />
          <Route path="/error" component={ServerError} />
        </Switch>
      </div>
    );
  }
}

export default App;
