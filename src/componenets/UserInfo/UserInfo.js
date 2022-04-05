import React from 'react';
import './UserInfo.css';
import Button from '@material-tailwind/react/Button';
import "@material-tailwind/react/tailwind.css";
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
const UserInfo = (props) => {
    const {id,title}=props.user;
    const history=useHistory();
    const handleBtn=()=>{
        history.push(`/userdetails/${id}`);
    }
    return (
        <div className="box-content h-32 w-42 p-3 border-4">
            
            <h1>{id}</h1>
            <h2 className='text-red-600'>{title}</h2>
            <div className='content-center'>
            <Button
            color="lightBlue"
            buttonType="outline"
            size="regular"
            rounded={true}
            block={false}
            iconOnly={false}
            ripple="dark"
            onClick={handleBtn}
        >
            Details
        </Button>
            </div>
            <Link to={`/userdetails/${id}`}>See More</Link>
         </div>
    );
};

export default UserInfo;