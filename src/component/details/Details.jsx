import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
export default function Details() {
    let [user,setUesr]=useState({
        
    });
    const {id}=useParams('id');
    const getUser=async ()=>{
    const {data}= await axios.get(`https://crud-users-gold.vercel.app/users/${id}`);
        setUesr(data.user);
    }
    useEffect(()=>{
        getUser();
    },[])
return (
    <div>Details {user.name} </div>
)
}
