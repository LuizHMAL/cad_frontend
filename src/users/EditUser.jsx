import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {

  const navigate = useNavigate();
  const {id}=useParams();
  const [users, setUsers] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = users;

  const onInputChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  useEffect(()=>{
    loadUser();
  },[]);
  
  const onSubmit = async (e) => {
    e.preventDefault();
  await axios.put(`http://localhost:8080/users/${id}`, users);
    navigate("/"); // 
  };

  const loadUser = async (e) => {
    const result = await axios.get(`http://localhost:8080/users/${id}`);
    setUsers(result.data);
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>
          <form onSubmit={onSubmit}>
            <div className='mb-3'>
              <label htmlFor='name' className='form-label'>Name:</label>
              <input
                type='text'
                className='form-control'
                placeholder="Type your name"
                name='name'
                value={name}
                onChange={onInputChange}
              />

              <label htmlFor='username' className='form-label mt-3'>Username:</label>
              <input
                type='text'
                className='form-control'
                placeholder="Type your username"
                name='username'
                value={username}
                onChange={onInputChange}
              />

              <label htmlFor='email' className='form-label mt-3'>E-mail:</label>
              <input
                type='email'
                className='form-control'
                placeholder="Type your email"
                name='email'
                value={email}
                onChange={onInputChange}
              />
            </div>
            <button type='submit' className='btn btn-outline-success'>Submit</button>
            <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

