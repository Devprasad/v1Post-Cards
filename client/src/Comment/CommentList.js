import React, { useEffect, useState } from "react";
import axios from "axios";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );
    const data = res.data;
    setComments(data);
  }, []);

  const displayComments = () =>
    Object.values(comments).map((comment) => {
      // console.log("comment: " + comment.id, comment.content);
      return <li key={comment.id}>{comment.content}</li>;
    });

  console.log("displayComments: " + displayComments());

  return <ul>{displayComments()}</ul>;
};

export default CommentList;
