import React from "react";
import PostFrom from "./componets/PostFrom";
import Posts from "./componets/Posts";
import FetchedPosts from "./componets/FetchedPosts";

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <PostFrom />
      </div>
      <div className="row">
        <div className="col">
          <h2>Сихронные Посты</h2>
          <Posts />
        </div>
        <div className="col">
          <h2>Асихронные Посты</h2>
          <FetchedPosts />
        </div>
      </div>
    </div>
  );
}

export default App;
