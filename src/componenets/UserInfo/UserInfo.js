import React from 'react';

const UserInfo = (props) => {
    const {user}=props;
    return (
        <div>
            <h2>Title:{user.title}</h2>
        </div>
    );
};

export default UserInfo;