import axios from "axios";
import React, { Component } from "react";
import AddCommentForm from "./AddCommentForm";

export class Comments extends Component {
  state = {
    commentList: [],
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
      .catch((err) => console.log(err));
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
              return <p>{comment.description}</p>;
            })}
          </>
        )}
      </div>
    );
  }
}

export default Comments;
