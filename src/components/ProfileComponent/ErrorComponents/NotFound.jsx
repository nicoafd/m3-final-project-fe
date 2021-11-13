import React from "react";

function NotFound({ history }) {
  return (
    <div>
      <h2>Not fouund. Please go back</h2>
      <button onClick={() => history.goBack()}>Go back</button>
    </div>
  );
}

export default NotFound;
