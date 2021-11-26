import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Comments from "./Comments";
import "./Forum.css";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export class OneThread extends Component {
  state = {
    oneThread: null,
    isLoading: true,
    edit: false,
    userId: "",
    isLoggedIn: null,
    isActive: null,
  };

  componentDidMount() {
    const { user, isLoggedIn } = this.props;
    axios
      .get(
        `${process.env.REACT_APP_API_HOST}/thread/${this.props.match.params.id}`,
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        this.setState({
          oneThread: response.data,
          isLoading: false,
          edit: response.data.edit,
          userId: isLoggedIn ? user._id : "",
          isActive: response.data.isActive,
        });
      })
      .catch((err) => {
        console.log(err);
        this.props.history.push("/error");
      });
  }

  handleDelete = () => {
    const { isActive } = this.state;
    axios
      .patch(
        `${process.env.REACT_APP_API_HOST}/thread/${this.props.match.params.id}`,
        { isActive: !isActive },
        {
          withCredentials: true,
        }
      )
      .then(() => this.props.history.push("/forum"))
      .catch(() => this.props.history.push("/error"));
  };

  render() {
    const { isLoading, oneThread, edit, userId } = this.state;
    const { isLoggedIn, user } = this.props;
    return (
      <div className="one-thread-div">
        <h2>One Thread</h2>
        {isLoading && <h1>...Loading</h1>}
        {!isLoading && (
          <Card className="one-thread-card" border="light">
            <Card.Body className="one-thread-card-body">
              <Card.Title>Title:{oneThread.title}</Card.Title>
              <Card.Text>{oneThread.description}</Card.Text>
              <Card.Text>{oneThread.category}</Card.Text>
              {oneThread.createdBy === userId && (
                <>
                  <Link to={`/thread/${oneThread._id}/edit`}>
                    <Button>Edit</Button>
                  </Link>

                  <Button onClick={this.handleDelete}>Delete</Button>
                </>
              )}
            </Card.Body>
            {edit && <Card.Text>Edited</Card.Text>}

            <Comments
              id={this.props.match.params.id}
              history={this.props.history}
              isLoggedIn={isLoggedIn}
              user={user}
              isActive={this.state.isActive}
            />
          </Card>
        )}
      </div>
    );
  }
}

export default OneThread;
