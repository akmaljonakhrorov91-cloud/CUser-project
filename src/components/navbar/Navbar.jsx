import "./Navbar.css";

function Navbar({ usersLength }) {
  return (
    <div className="navbar">
      <div className="navbar-container container">
        <h2 className="navbar-logo">CUSer</h2>
        <h3 className="navbar-counter">
          {usersLength > 0 ? "you have: " + usersLength : "No users yet"}
        </h3>
      </div>
    </div>
  );
}

export default Navbar;
