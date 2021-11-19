import React, { useEffect, useState } from "react";
import axios from "axios";
import { RingLoader } from "react-spinners";
import { Badge, ListGroup } from "react-bootstrap";

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
    <div>
      {isLoading ? (
        <RingLoader loading={isLoading} size={50} />
      ) : (
        threads.map((thread) => {
          return (
            <div class="thread-card">
              <React.Fragment key={thread._id}>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{thread.title}</div>
                    {thread.description}
                  </div>
                  <Badge variant="primary" pill>
                    details
                  </Badge>
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
