import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteUser from '../users/DeleteUser';

export default function Home() {

    const deleteUser = async (id) => {
        try {
          await axios.delete(`http://localhost:8080/users/${id}`);
          loadUsers(); // recarrega os usuários após deletar
        } catch (error) {
          console.error("Erro ao deletar usuário:", error);
          alert("Falha ao deletar usuário.");
        }
      };
    
    useEffect(()=>{
        loadUsers();
    },[])

    
    const [users, setUsers] = useState([])

    const loadUsers = async() => {
        const result = await axios.get("http://localhost:8080/users");
        setUsers(result.data);
    }
    return (
        <div className='container'>
            <div className="py-4"> 
            <table className="table border shadow">
                <thead>
                    <tr>
                    <th scope="col">Code</th>
                    <th scope="col">Name</th>
                    <th scope="col">Last_name</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Action</th>   
                    </tr>
                </thead>
                <tbody>
                
               
                {
                        users.map((user,index)=>(
                            <tr>
                                <th scope="row" key={index}>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link 
                                    to={`/viewuser/${user.id}`}
                                    className='btn btn-outline btn-success mx-2'>
                                    View</Link>
                                    <Link 
                                        to={`/edituser/${user.id}`} 
                                        className="btn btn-outline-info mx-2">Edit
                                    </Link>
                                    <button
                                        onClick={() => deleteUser(user.id)}
                                        className='btn btn-outline btn-danger mx-2'>Delete</button>
                                </td>
                            </tr>
                        ))

                }
                 </tbody>

                </table>
            </div>
           
        </div>
    );
};