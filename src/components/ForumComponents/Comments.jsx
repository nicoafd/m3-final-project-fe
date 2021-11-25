import axios from "axios";
import React, { Component } from "react";
import { Card } from "react-bootstrap";
import AddCommentForm from "./AddCommentForm";
import Button from "react-bootstrap/Button";

export class Comments extends Component {
  state = {
    commentList: [],
    username: "",
  };

  handleComments = () => {
    axios
      .get(`${process.env.REACT_APP_API_HOST}/comment/all/${this.props.id}`, {
        withCredentials: true,
      })
      .then((response) => {
        this.setState({
          commentList: [...response.data],
        });
      })
      .catch((err) => this.props.history.push("/error"));
  };

  handleDelete = (commentId) => {
    axios
      .delete(`${process.env.REACT_APP_API_HOST}/comment/${commentId}`, {
        withCredentials: true,
      })
      .then(() => this.props.history.push("/forum"))
      .catch(() => this.props.history.push("/error"));
  };

  componentDidMount() {
    this.handleComments();
  }

  render() {
    const { commentList } = this.state;
    return (
      <div>
        <AddCommentForm
          id={this.props.id}
          history={this.props.history}
          handleComments={this.handleComments}
        />
        {commentList.length && (
          <>
            {commentList.map((comment) => {
              return (
                <Card>
                  <Card.Body>
                    <Card.Text style={{ fontSize: "18px" }}>
                      {comment.userId.username}
                    </Card.Text>
                    <Card.Text>{comment.description}</Card.Text>

                    <Button onClick={() => this.handleDelete(comment._id)}>
                      Delete
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}
          </>
        )}
      </div>
    );
  }
}

export default Comments;
