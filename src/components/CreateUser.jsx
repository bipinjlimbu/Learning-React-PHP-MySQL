import { useState } from "react";
import axios from "axios";

export default function CreateUser() {
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3000/users", user)
    console.log("user created", user);
    
  }

  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
    address: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  return (
    <div>
      <h1 className="componentHead">Create User</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Name: </label>
        <input type="text" id="name" name="name" onChange={handleChange}required />
        <br />
        <label htmlFor="email"> Email: </label>
        <input type="text" id="email" name="email" onChange={handleChange} required />
        <br />
        <label htmlFor="number"> Number: </label>
        <input type="text" id="number" name="number" onChange={handleChange} required />
        <br />
        <label htmlFor="address"> Address: </label>
        <input type="text" id="address" name="address" onChange={handleChange} required />
        <br />
        <button type="submit">Create User</button>
      </form>
    </div>
  );
}