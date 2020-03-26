//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";
// import data 


// pass the data from App.js down as props then map through the data
const PostsPage = props => {
  const data = props.postData;
  console.log(props);

  let userFilter = data.filter(ele => {
    // console.log(ele)
    ele.username.includes(props.searchText);
  });

  if (userFilter.length > 0) {
    return (
      <div className="posts-container-wrapper">
        {userFilter.map((ele, index) => Post(ele, index))}
      </div>
    );
  } else {
    return (
      <div className="posts-container-wrapper">
        {data.map((ele, index) => Post(ele, index))}
      </div>
    );
  }
};

export default PostsPage;
