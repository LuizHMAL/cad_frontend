import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

export default function DeleteUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/users/${id}`);
      setUser(res.data);
    } catch (error) {
      console.error("Error loading user", error);
      alert("Could not load user data.");
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/users/${id}`);
      alert("User deleted successfully.");
      navigate("/");
    } catch (error) {
      console.error("Error deleting user", error);
      alert("Failed to delete user.");
    }
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Delete User</h2>
          <p>Are you sure you want to delete the user <strong>{user.name}</strong>?</p>
          <button className="btn btn-danger" onClick={handleDelete}>Yes, Delete</button>
          <Link to="/" className="btn btn-secondary mx-2">Cancel</Link>
        </div>
      </div>
    </div>
  );
}