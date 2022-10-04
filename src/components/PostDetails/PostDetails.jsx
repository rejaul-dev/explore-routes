import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const { id, title, body, userId } = post;

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/friend/${userId}`);
  };

  return (
    <div>
      <h1>Detail Post Id: {id}</h1>
      <h1>{title}</h1>
      <p>{body}</p>
      <button onClick={handleNavigate}>Get The Author</button>
    </div>
  );
};

export default PostDetails;
