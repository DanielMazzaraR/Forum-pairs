import React, { useState, useRef } from "react";
import axios from "axios";
import "./CreateNewPost.css";

function CreateNewPost() {
  const [postTitle, setPostTitle] = useState("");
  const inputTitle = useRef();
  const [postCategorie, setPostCategorie] = useState("");
  const inputCategorie = useRef();
  const [postDescription, setPostDescription] = useState("");
  const inputDescription = useRef();
  const [postID, setPostID] = useState();

  const POSTMO = (newPostaxios) =>
    (async () => {
      // POST request using axios with async/await
      const response = axios.post("http://localhost:9080/posts", newPostaxios);
      console.log((await response).data);
    })();

  const onChangeCategorie = (event) => {
    setPostCategorie(event.current.value);
    console.log(event.current.value);
  };

  const onChangeTitle = (event) => {
    setPostTitle(event.current.value);
    console.log(event.current.value);
  };

  const onChangeText = (event) => {
    setPostDescription(event.current.value);
    console.log(event.current.value);
  };

  const onSubmmitHandler = () => {
    
    

    const newPost = {
      postCategorie: postCategorie,
      Title: postTitle,
      text: postDescription,
      image: undefined,
      id: Math.random() * 1000,
    };

    POSTMO(newPost);
  };

  return (
    <div className="createnewpost-main">
      <form>
        <label>Title</label>
        <input type="text" onChange={onChangeTitle} ref={inputTitle}/>
        <label>Categorie</label>
        <select ref={inputCategorie} onChange={onChangeCategorie}>
          <option value={"software"}>SOFTWARE</option>
          <option value={"hardware"}>HARDWARE</option>
          <option value={"programming"}>PROGRAMMING</option>
          <option value={"videogame"}>VIDEOGAME</option>
          <option value={"sports"}>SPORTS</option>
          <option value={"music"}>MUSIC</option>
          <option value={"films"}>FILMS</option>
          <option value={"offtopic"}>OFFTOPIC</option>
        </select>
        <label>Description</label>
        <input
          ref={inputDescription}
          type="text"
          style={{ padding: "120px" }}
          onChange={onChangeText}
        />
        <button onClick={onSubmmitHandler}>Submmit</button>
      </form>
    </div>
  );
}

export default CreateNewPost;
