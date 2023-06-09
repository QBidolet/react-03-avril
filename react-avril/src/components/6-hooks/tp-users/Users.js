import React, { useState, useEffect } from 'react';
import UserList from './UserList';
import UserDetails from './UserDetails';
import UserPosts from './UserPosts';
import NewPostForm from './NewPostForm';

function Users(){
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => setUsers(data));
    }, [])

    return (
        <div>
            <UserList users={users} 
            onSelectUser={setSelectedUser}></UserList>
            {selectedUser &&
            <>
                <UserDetails user={selectedUser}></UserDetails>
                <UserPosts userId={selectedUser.id}></UserPosts>
                <NewPostForm userId={selectedUser.id}></NewPostForm>
            </>
            }
        </div>
    )


}

export default Users;