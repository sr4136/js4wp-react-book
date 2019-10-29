import React from "react";

const Message = ({ type }) => {
  const messages = {
    saved: { color: "green", message: "Post has been saved!" },
    updated: { color: "orange", message: "Post has been udpated!" },
    deleted: { color: "red", message: "Post has been deleted." }
  };
  return (
    <div className={`App-message ${type}`}>
      <p>
        <strong>{messages[type]["message"]}</strong>
      </p>
    </div>
  );
};
export default Message;
