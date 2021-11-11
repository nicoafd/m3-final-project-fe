import React, { useEffect, useState } from "react";
import axios from "axios";

function Thread() {
  //Defining state = threads and setState = setThreads
  const [threads, setThreads] = useState([]);

  // function to handle threads
  const handleThreads = () => {
    axios
      .get(`${process.env.REACT_APP_API_HOST}/thread/my-threads`, {
        withCredentials: true,
      })
      .then((response) => {
        setThreads([...response.data.threads]);
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
      {threads.map((thread) => {
        return (
          <React.Fragment key={thread._id}>
            <h2>{thread.title}</h2>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Thread;
