import axios from "axios";
import React, { Component } from "react";
import { Card } from "react-bootstrap";
import AddCommentForm from "./AddCommentForm";
import Button from "react-bootstrap/Button";
import { BsFillTrashFill } from "react-icons/bs";
import "./Forum.css";

export class Comments extends Component {
  state = {
    commentList: [],
    username: "",
    userId: "",
    isLoggedIn: null,
  };

  handleComments = () => {
    axios
      .get(`${process.env.REACT_APP_API_HOST}/comment/all/${this.props.id}`, {
        withCredentials: true,
      })
      .then((response) => {
        this.setState({
          commentList: [...response.data],
          userId: this.props.isLoggedIn ? this.props.user._id : "",
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
    const { isLoggedIn, user, isActive } = this.props;
    return (
      <div className="comment-container ">
        {isActive && (
          <AddCommentForm
            id={this.props.id}
            history={this.props.history}
            handleComments={this.handleComments}
          />
        )}

        {commentList.length && (
          <div className="comment-category-scrollable">
            {commentList.map((comment) => {
              return (
                <Card className="comment-card ">
                  <Card.Body className="comment-card-body">
                    <div>
                      <Card.Text>{comment.userId.username}</Card.Text>
                      <Card.Text>{comment.description}</Card.Text>
                    </div>
                    {comment.userId._id === this.state.userId && (
                      <>
                        <BsFillTrashFill
                          className="delete-comment-button"
                          onClick={() => this.handleDelete(comment._id)}
                        />
                      </>
                    )}
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default Comments;
