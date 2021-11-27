import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { RingLoader } from "react-spinners";
import { Badge, ListGroup } from "react-bootstrap";
import "./Profile2.css";

function Thread() {
  //Defining state = threads and setState = setThreads
  const [threads, setThreads] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // function to handle threads
  const handleThreads = () => {
    axios
      .get(`${process.env.REACT_APP_API_HOST}/thread/my-threads`, {
        withCredentials: true,
      })
      .then((response) => {
        setThreads([...response.data.threads]);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Like component did mount ?
  useEffect(() => {
    handleThreads();
  }, []);

  return (
    <div className="scrollable">
      {isLoading ? (
        <RingLoader loading={isLoading} size={50} />
      ) : (
        threads.map((thread) => {
          return (
            <div className="thread-card">
              <React.Fragment key={thread._id}>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{thread.title}</div>
                    {thread.description}
                  </div>
                  <Link to={`/thread/${thread._id}`}>
                    <Badge
                      id="thread-details-badge"
                      style={{ backgroundColor: "#000000" }}
                      pill
                    >
                      details
                    </Badge>
                  </Link>
                </ListGroup.Item>
              </React.Fragment>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Thread;
