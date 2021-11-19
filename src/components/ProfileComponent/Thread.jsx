import React, { useEffect, useState } from "react";
import axios from "axios";
import { RingLoader } from "react-spinners";

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
            <React.Fragment key={thread._id}>
              <h2>{thread.title}</h2>
              <p>{thread.category}</p>
            </React.Fragment>
          );
        })
      )}
    </div>
  );
}

export default Thread;
