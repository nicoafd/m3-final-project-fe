import React from "react";
import Button from "react-bootstrap/Button";

function NotFound({ history }) {
  return (
    <div style={{ paddingTop: "20vh", height: "80vh" }}>
      <h2>Not fouund. Please go back</h2>
      <Button onClick={() => history.goBack()}>Go back</Button>
    </div>
  );
}

export default NotFound;
