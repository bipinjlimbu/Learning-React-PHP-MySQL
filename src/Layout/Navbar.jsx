import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/">UserList</Link>
        <Link to="/create">CreateUser</Link>
    </nav>
)
};