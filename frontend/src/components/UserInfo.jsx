import UserForm from "./UserForm.jsx";
import UserList from "./UserList.jsx";
import {useEffect, useState } from "react";


function UserInfo(){
    let [users,setUsers]=useState([]);
    let [error,setError]=useState('');

    const handleCreateUser=async(newUser)=>{
        try{
            let res = await fetch('http://localhost:3000/users',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(newUser)
            })
            if(res.status === 201){
                setUsers([...users, newUser]);
                setError('');
            }
            if(res.status === 404){
                setError('Error creating user');
            }
        }catch(err){
            setError('Network error');
        }
    };
    const handleReadUsers = async()=>{
        let res = await fetch('http://localhost:3000/users');
        let usersData = await res.json();
        setUsers(usersData);
    }

    useEffect(()=>{
        handleReadUsers();
    });

    const handleDeleteUser= async(id)=>{
        let res = await fetch(`http://localhost:3000/users/${id}`,{method:'DELETE'});
        let removedUser =  await res.json();
        if(res.status === 200){
            handleReadUsers();
        } 
    };
    const handleUpdateUser=()=>{};

    return (<div className="row">
        <div className="col-md-6">
            {error.length !== 0 && <div className="alert alert-danger">{error}</div>}
            <UserForm handleCreateUser={handleCreateUser} />
        </div>
        <div className="col-md-6">
            <UserList handleReadUsers={handleReadUsers} handleDeleteUser={handleDeleteUser} handleUpdateUser={handleUpdateUser} users={users} />
        </div>
    </div>
    );
}
export default UserInfo;