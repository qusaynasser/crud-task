import React, { useEffect, useState} from 'react'
import { Fragment } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

export default function Index() {
    const [users,setUsers] =useState([]);
    let [loader,setLoader]=useState(false);
    const getUsers = async ()=>{
        const {data}=await axios.get('https://crud-users-gold.vercel.app/users/');
        setUsers(data.users);
        setLoader(false);
    }
    const DeleteUser= async (id)=>{
        setLoader(true);
        const {data}=await axios.delete(`https://crud-users-gold.vercel.app/users/${id}`);
        if(data.message=='success')
        {
            toast.success('User deleted successfully');
            setLoader(false);
            getUsers();
        }
        
    }
    useEffect(()=>{
        setLoader(true);
        getUsers();
    },[])

    // useEffect(()=>{
    //     getUsers();
    // },[users])
    if(loader)
    {
    return (
    <div>
        Loading...
    </div>
    )
    }
else
{
    return (
        <table className="table">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Password</th>
        <th scope="col">Action</th>
        </tr>
    </thead>
    <tbody>
        {users.length>0? users.map((user,index)=>{
            return (
                <React.Fragment key={user._id}>
                    <tr>
                        <td>{index}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td onClick={()=>DeleteUser(user._id)}>Delete</td>
                        <td><Link to={`/user/${user._id}`}>Details</Link></td>

                        <td >
                            <Link to={`/user/update/${user._id}`}>Update</Link></td>
                    </tr>
                </React.Fragment>
            )
        }):<h2>no user data</h2>}
    </tbody>
    </table>
    )
}

}
