import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

export default function MainLayout() {
  return (
    <div>
    <h1> React CRUD using PHP and MySQL </h1>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}