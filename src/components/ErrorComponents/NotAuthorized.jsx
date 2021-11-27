import React from "react";
import Button from "react-bootstrap/Button";

function NotAuthorized({ history }) {
  return (
    <div style={{ paddingTop: "20vh", height: "80vh" }}>
      <h2>You are not authorized. Pleaso log in.</h2>
      <Button onClick={() => history.goBack()}>Go back</Button>
    </div>
  );
}

export default NotAuthorized;
