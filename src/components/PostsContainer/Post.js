// You will add code in this file

import React from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

const Post = (props, id) => {
  // set up state for the likes

  return (
    <div className="post-border" key={id}>
      <PostHeader
        username={props.username}
        thumbnailUrl={
          props.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.imageUrl}
        />
      </div>
      <LikeSection />
      <CommentSection
        postId={props.imageUrl}
        comments={props.comments}
      />
    </div>
  );
};

export default Post;
