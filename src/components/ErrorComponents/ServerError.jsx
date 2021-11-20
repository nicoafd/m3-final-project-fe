import React from "react";

export default function ServerError({ history }) {
  return (
    <div style={{ marginTop: "10vh" }}>
      <h2>Oops... Someting Went Wrong. Please go back</h2>
      <button onClick={() => history.goBack()}>Go back</button>
    </div>
  );
}
