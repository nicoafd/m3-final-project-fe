import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Comments from "./Comments";

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
      .catch((err) => console.log(err));
  }

  handleDelete = () => {
    axios
      .delete(
        `${process.env.REACT_APP_API_HOST}/thread/${this.props.match.params.id}`
      )
      .then(() => this.props.history.push("/"))
      .catch(() => this.props.history.push("/500"));
  };

  render() {
    const { isLoading, oneThread, edit } = this.state;
    return (
      <div>
        <h2>One Thread</h2>
        {isLoading && <h1>...Loading</h1>}
        {!isLoading && (
          <div>
            <h2>{oneThread.title}</h2>
            <p>{oneThread.description}</p>
            <p>{oneThread.category}</p>
            <Link to={`/thread/${oneThread._id}/edit`}>
              <button>Edit</button>
            </Link>

            <button onClick={this.handleDelete}>Delete</button>

            {edit && <p>Edited</p>}
            <Comments
              id={this.props.match.params.id}
              history={this.props.history}
            />
          </div>
        )}
      </div>
    );
  }
}

export default OneThread;
