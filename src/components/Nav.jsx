import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <ul className="nav-links">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
        </ul>
        <img
          className="user-img"
          alt="User profile"
          src="https://i.pinimg.com/736x/09/7c/43/097c431f77e29d93cfebe019bb2a89a8.jpg"
        />
      </div>
    </nav>
  );
};

export default Nav;
