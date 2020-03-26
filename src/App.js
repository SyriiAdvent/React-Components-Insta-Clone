/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
// import the PostsPage and SearchBar and add them to the App
import React, { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBarContainer";
import dummyData from "./dummy-data";
import PostsPage from "./components/PostsContainer/PostsPage";
import "./App.css";

const App = props => {
  // set up state for the dummy data and pass to your PostsPage
  const [postData, setPostData] = useState(dummyData);
  const [searchText, setSearchText] = useState();

  const handleSearch = event => {
    console.log(event.target.value);
    setSearchText(event.target.value);
  };

  return (
    <div className="App">
      {/* Add components here and pass props where appropriate */}
      <SearchBar userSearch={handleSearch} />
      <PostsPage postData={postData} searchText={searchText}/>
    </div>
  );
};

export default App;
