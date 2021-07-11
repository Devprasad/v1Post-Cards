import React, { useState } from "react";
import axios from "axios";

const CommentsCeate = ({ postId }) => {
  const [content, setContent] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });

    setContent("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Comment:</label>
          <input
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></input>
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CommentsCeate;
