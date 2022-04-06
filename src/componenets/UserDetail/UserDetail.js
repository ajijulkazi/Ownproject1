import { Heading2, Label } from '@material-tailwind/react';
import { type } from '@testing-library/user-event/dist/type';
import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import MyPieChart from '../MyPieChart/MyPieChart';


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
    // if(familiar){
    //     const result = familiar.toString();
    //     return result;
    // }
    const result = familiar ?.toString() || '';
    return (
        <div>
            <h3>User Details Here:{userId}</h3>
            <h2>{user.title}</h2>
             <h2>Is User:{result}</h2>
             {familiar?<h2>Completed</h2>:<h2>Incompleted</h2>}
            <button onClick={()=>setFamiliar(!familiar)}>Toggle User</button> <br />
            

            <Link to='/user'>Back Users</Link>
            <MyPieChart></MyPieChart>

            
        </div>
    );
};

export default UserDetail;