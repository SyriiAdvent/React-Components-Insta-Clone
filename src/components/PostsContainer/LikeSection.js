// look at the likes on this component. Right now it is hard coded on line 20. 
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
import React, { useState } from 'react';


const LikeSection = props => {
  const [likes, setLikes] = useState(props.likes)
  const [color, setColor] = useState("Black")

  let liked = false;

  const likeHandler = () => {
    if(liked === false){
      setLikes(likes + 1)
      setColor('Red');
      liked = true;
    } else {
      setColor('Black')
      liked = false;
    }
  }

  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper">
        <i className="far fa-heart" onClick={likeHandler} style={{ color: color }} />
      </div>
      <div className="like-section-wrapper">
        <i className="far fa-comment" />
      </div>
    </div>
  <p className="like-number">{likes} likes</p>
</div>
  )
};

export default LikeSection;
