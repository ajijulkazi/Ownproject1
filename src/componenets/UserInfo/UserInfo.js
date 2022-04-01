import React from 'react';
import './UserInfo.css';

const UserInfo = (props) => {
    const {user}=props;
    return (
        <div className="box-content h-32 w-42 p-3 border-4">
            <h1>{user.id}</h1>
            <h2 className='text-red-600'>{user.title}</h2>
            <h2>{user.completed}</h2>
         </div>
    );
};

export default UserInfo;