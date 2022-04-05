import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
    const {userId}=useParams();
    const [user, setUser]= useState({});
    
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/todos/${userId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setUser(data));
    },[]);
    const [familiar, setFamiliar]=useState(user.completed);
    // console.log(familiar);
    const result = familiar ?.toString() || '';
    return (
        <div>
            <h3>User Details Here:{userId}</h3>
            <h2>{user.title}</h2>
             <h2>Is User:{result.toString()}</h2>
            <button onClick={()=>setFamiliar(!familiar)}>Toggle User</button>
        </div>
    );
};

export default UserDetail;