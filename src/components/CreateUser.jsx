import { useState } from "react";

export default function CreateUser() {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div>
      <h2 className="componentHead">Create User</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Name: </label>
        <input type="text" id="name" name="name" required />
        <br />
        <label htmlFor="email"> Email: </label>
        <input type="text" id="email" name="email" required />
        <br />
        <label htmlFor="number"> Number: </label>
        <input type="text" id="number" name="number" required />
        <br />
        <label htmlFor="address"> Address: </label>
        <input type="text" id="address" name="address" required />
        <br />
        <button type="submit">Create User</button>
      </form>
    </div>
  );
}