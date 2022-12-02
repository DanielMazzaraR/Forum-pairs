import "./App.css";
import axios from "axios";
import { Route, Router, Routes, Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

//Pages
import Home from "./Pages/Home";
import CreateNewPost from "./Pages/CreateNewPost";
//Components
import ButtonNewPost from "./Components/ButtonNewPost";

// {
//   "postCategorie" : "Doubt",
//   "title": "Tal",
//   "text": "hola",
//   "id": 1
// }

function App() {
  const url = "http://localhost:9080/posts";

  const fetchQuotes = () => {
    try {
      axios.get(url).then(function (returned) {});
    } catch (err) {
      console.log(err);
    }
  };

  fetchQuotes();

  return (
    <div className="App">
      <div className="App-header">
        <h1 style={{ paddingLeft: "27vw" }}>Best Forum Brou</h1>
        <ButtonNewPost />
      </div>
      <div className="App-body">
        <Sidebar>
          <Menu>
            <MenuItem routerLink={<Link to="/" />}>Home</MenuItem>
            <SubMenu label="Topics">
              <MenuItem> Hardware </MenuItem>
              <MenuItem> Software </MenuItem>
            </SubMenu>
          </Menu>
        </Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newpost" element={<CreateNewPost />} />
        </Routes>
      </div>
      <footer className="App-footer">
        <p>Design by Daniel Mazzara & Alejandro Fernandez</p>
      </footer>
    </div>
  );
}

export default App;
