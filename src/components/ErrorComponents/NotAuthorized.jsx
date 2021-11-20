import React from "react";

function NotAuthorized({ history }) {
  return (
    <div>
      <h2>You are not authorized. Pleaso log in.</h2>
      <button onClick={() => history.goBack()}>Go back</button>
    </div>
  );
}

export default NotAuthorized;
