import React, { useEffect, useState } from "react";
import axios from "../../comments/node_modules/axios";
import CommentsCeate from "./Comment/CommentsCreate";
import CommentList from "./Comment/CommentList";

export default () => {
  const [posts, setPosts] = useState({});

  useEffect(async () => {
    const res = await axios.get("http://localhost:4000/posts");
    setPosts(res.data);
  }, []);

  const dislay = Object.values(posts).map((post) => {
    return (
      <div
        key={post.id}
        className="card"
        style={{ width: "34%", margin: "20px" }}
      >
        <div className="card-body">
          <h2> {post.title}</h2>
          <CommentList postId={post.id} />
          <CommentsCeate postId={post.id} />
        </div>
      </div>
    );
  });

  console.log(posts);

  return <div className="d-flex flex-row flex-wrap">{dislay}</div>;
};
