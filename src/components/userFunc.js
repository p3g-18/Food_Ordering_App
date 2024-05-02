import { Link } from "react-router-dom";

const User = ({ name, Description }) => {
  return (
    <div className="user-container">
      <img></img>
      <h1>{name}</h1>
      <p>{Description}</p>
      <Link to="/contact">
        {" "}
        <button>Contact Me </button>{" "}
      </Link>
      <p>social media links</p>
    </div>
  );
};
export default User;
