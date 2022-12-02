import "./Post.css";

function Post(props) {
  // {
//   "postCategorie" : "Doubt",
//   "title": "Tal",
//   "text": "hola",
//   "id": 1
// }


  return (
    <div className="card">
      <div className="card-header">
        <img
          src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg"
          alt="rover"
        />
      </div>
      <div className="card-body">
        <span className="tag tag-teal">{props.postCategorie}</span> {/* question/suggestion/clarification */}
        <h4>{props.title}</h4>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default Post;
