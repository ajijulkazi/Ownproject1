import React, { useEffect, useState } from 'react';
import UserInfo from '../UserInfo/UserInfo';
import './User.css';

const User = () => {
    const [users, setUser] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res=>res.json())
        .then(data=>setUser(data));
    },[]);
    return (
        <div className='grid grid-cols-3 gap-4>
        '>
            {
                users.map(user=> <UserInfo 
                key={user.id}
                user={user}
                ></UserInfo>)
            }
        </div>
    );
};

export default User;