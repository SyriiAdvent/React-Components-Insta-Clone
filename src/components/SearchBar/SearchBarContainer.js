// You do not need to change any code in this file
import React from "react";
import "./SearchBar.css";

const SearchBar = () => {

  return (
    <div className="search-bar-wrapper">
      <div className="image-wrapper">
        <i className="fab fa-instagram fa-2x" />
        <span className="logo-breaker"></span>
      {/* <div className="logo-title">Instagram</div> */}
      <img className="instagram-logo" src="https://techmarketingbuffalo.com/wp-content/uploads/2013/11/instagram-name-logo-11-22.jpg"/>
      </div>
      <form className="search-form">
        <input
          type="text"
          
          placeholder="Search"
        />
      </form>
      <div className="social-wrapper">
        <div className="social">
          <i className="far fa-compass" />
        </div>
        <div className="social">
          <i className="far fa-heart" />
        </div>
        <div className="social">
          <i className="far fa-user-circle" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
