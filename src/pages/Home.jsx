import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import axios from 'axios';

export default function Home() {

    
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
                                    <button className='btn btn-outline-success mx-2'>View</button>
                                    <button className='btn btn-outline mx-2'>Edit</button>
                                    <button className='btn btn-outline-danger mx-2'>Delete</button>
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