//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = (props) => {
  console.log("here", props);
  return (
    <div className="posts-container-wrapper">
      {/* map through data here */}
      {props.post.map((p) => (<Post key={p.username} Post data = {p}/>))}
    </div>
  );
};

export default PostsPage;

