import { useState } from 'react';
import React from 'react';
import AddUser from './Users/AddUser';
import UserList from './Users/UserList';

function App() {

  const [userslist,sertUsersList] = useState([]);

  const addUserHandler = (uName,uAge) =>{
    sertUsersList((prevList)=>{
      return [...prevList,{name:uName,age:uAge,id:Math.random().toString()}]
    })
  }


  return (
    <div>
       <AddUser onAddUser={addUserHandler}/>
       <UserList users={userslist}/>
    </div>
  );
}

export default App;
