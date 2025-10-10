import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        number: "",
        address: ""
    });

    const {id} = useParams();

    useEffect(() => {
        getUser();
    }, []);

    function getUser() {
        axios.get(`http://localhost/api/user/${id}`).then(function(response) {
            console.log(response.data[0]);
            setInputs(response.data[0]);
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.put(`http://localhost/api/user/${id}/edit`, inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        });
        
    }
    return (
    <div>
      <h1 className="componentHead">Edit User</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Name: </label>
        <input type="text" id="name" name="name" value={inputs.name} onChange={handleChange} required />
        <br />
        <label htmlFor="email"> Email: </label>
        <input type="text" id="email" name="email" value={inputs.email} onChange={handleChange} required />
        <br />
        <label htmlFor="number"> Number: </label>
        <input type="text" id="number" name="number" value={inputs.number} onChange={handleChange} required />
        <br />
        <label htmlFor="address"> Address: </label>
        <input type="text" id="address" name="address" value={inputs.address} onChange={handleChange} required />
        <br />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}