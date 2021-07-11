import React, { useState } from "react";
import axios from "../../comments/node_modules/axios";

export default () => {
  const [title, setTitle] = useState("");

  const formSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/posts", {
      title,
    });

    setTitle("");
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
        <h1>Create Post</h1>
        <div className="form-group">
          <label>Title</label>
          <input
            className="form-control"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <button className="btn btn-primary">Create</button>
      </form>
    </div>
  );
};
