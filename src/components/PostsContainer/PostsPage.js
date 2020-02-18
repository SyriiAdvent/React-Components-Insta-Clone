//Complete the necessary code in this file
import React from "react";
import App from '../../App'
import Post from "./Post";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = props => {
  const data = props.postData;
  return (
    <div className="posts-container-wrapper">
      {/* map through data here */}
      {console.log(props.postData)}
      {data.map( (ele, index) => Post(ele, index) )}
    </div>
  );
};

export default PostsPage;

