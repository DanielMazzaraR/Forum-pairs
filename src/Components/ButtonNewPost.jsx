import "./ButtonNewPost.css";
import { useNavigate } from "react-router-dom";

function ButtonNewPost() {
  const navigate = useNavigate();

  const onButtonClickhandler = () => {
    navigate("/newpost");
  };

  return (
    <span onClick={onButtonClickhandler}>
      <a href="#"></a>
    </span>
  );
}
export default ButtonNewPost;
