import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/">CreateUser</Link>
        <Link to="/list">UserList</Link>
    </nav>
)
};