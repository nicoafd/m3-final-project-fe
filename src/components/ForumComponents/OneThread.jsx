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
  };

  componentDidMount() {
    console.log(this.props);
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
        });
      })
      .catch((err) => this.props.history.push("/error"));
  }

  handleDelete = () => {
    axios
      .delete(
        `${process.env.REACT_APP_API_HOST}/thread/${this.props.match.params.id}`,
        {
          withCredentials: true,
        }
      )
      .then(() => this.props.history.push("/forum"))
      .catch(() => this.props.history.push("/error"));
  };

  render() {
    const { isLoading, oneThread, edit } = this.state;
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
              <Link to={`/thread/${oneThread._id}/edit`}>
                <Button>Edit</Button>
              </Link>

              <Button onClick={this.handleDelete}>Delete</Button>
            </Card.Body>
            {edit && <Card.Text>Edited</Card.Text>}

            <Comments
              id={this.props.match.params.id}
              history={this.props.history}
            />
          </Card>
        )}
      </div>
    );
  }
}

export default OneThread;
