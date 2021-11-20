import axios from "axios";
import { Link } from "react-router-dom";
import React, { Component } from "react";

export class AllThreads extends Component {
  state = {
    threadList: [],
  };

  handleThreads = () => {
    axios
      .get(`${process.env.REACT_APP_API_HOST}/thread/all`, {
        withCredentials: true,
      })
      .then((response) => {
        this.setState({
          threadList: [...response.data],
        });
      })
      .catch((err) => this.props.history.push("/500"));
  };
  componentDidMount() {
    this.handleThreads();
  }

  render() {
    const { isLoggedIn } = this.props;
    const { threadList } = this.state;
    return (
      <div class="all-threads">
        {isLoggedIn && (
          <Link to="/create">
            <button>Create Thread</button>
          </Link>
        )}

        <h3>Latest Threads</h3>
        {threadList.length && (
          <>
            {threadList.map((thread) => {
              return (
                <React.Fragment key={thread._id}>
                  <Link to={`/thread/${thread._id}`}>
                    <h4>{thread.title}</h4>
                    <p>{thread.category}</p>
                  </Link>
                </React.Fragment>
              );
            })}
          </>
        )}
      </div>
    );
  }
}

export default AllThreads;
