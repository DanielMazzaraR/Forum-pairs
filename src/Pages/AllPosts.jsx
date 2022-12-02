import axios from "axios";
import Post from "../Components/Post";
import './AllPosts.css'
import React, { useState } from "react";


function AllPosts() {
  const url = "http://localhost:9080/posts";
  const [currentPosts, setCurrentPosts] = useState([]);

  const RequestPosts = () => {
    try {
      axios.get(url).then(function (returned) {
        setCurrentPosts(returned.data);
      });
    } catch (err) {
      console.log(err);
    }
  };
  RequestPosts();

  // {
  //   "postCategorie" : "Doubt",
  //   "title": "Tal",
  //   "text": "hola",
  //   "id": 1
  // }

  const currentPostList = currentPosts.map((post) => {
   return( <Post
        key={post.title}
      postCategorie={post.postCategorie}
      title={post.title}
      text={post.text}
    />)
  });

  return (<div className="scroll">{currentPostList}</div>);
}

export default AllPosts;
