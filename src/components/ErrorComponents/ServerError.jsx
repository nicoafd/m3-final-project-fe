import React from "react";
import Button from "react-bootstrap/Button";

export default function ServerError({ history }) {
  return (
    <div style={{ marginTop: "10vh", height: "80vh" }}>
      <h2>Oops... Someting Went Wrong. Please go back</h2>
      <Button onClick={() => history.goBack()}>Go back</Button>
    </div>
  );
}
