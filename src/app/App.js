import React, { useState } from 'react';
import api from './api';
import Users from './components/users';
import SearchStatus from './components/searchStatus';


function App() {
  const [users, setUsers] = useState(api.users.fetchAll());


  function handleDelete(userId) {
    setUsers(users.filter(user => user._id !== userId));
  }

  function handleToggleBookmark(userId) {
    const newUsers = [...users];
    const user = newUsers.find(u => u._id === userId);
    user.bookmark = !user.bookmark;
    setUsers(newUsers);
  }


  return (
    <div className='p-3'>
      <SearchStatus length={users.length} />
      <Users onDelete={handleDelete} onToggleBookmark={handleToggleBookmark} users={users} />
    </div>
  )
}


export default App;