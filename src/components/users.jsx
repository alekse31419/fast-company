import React, { useState } from "react";
import api from '../api';


const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());


  const renderPhrase = (numberOfUsers) => {
    let bgClass = 'badge bg-';
    bgClass += numberOfUsers ? 'primary' : 'danger';

    const lastNumber = Number(numberOfUsers.toString().slice(-1));
    const phrase = (lastNumber >= 2 && lastNumber <= 4) && ![12, 13, 14].includes(numberOfUsers) ? 'человека тусанут' : 'человек тусанет';
    const text = numberOfUsers ? `${numberOfUsers} ${phrase} сегодня с тобой` : 'Никто не тусанет с тобой';

    return <span className={bgClass}>{text}</span>
  }

  const handleDelete = (userId) => {
    setUsers(users.filter(user => user._id !== userId));
  }


  return (
    <div className="p-3">
      <h2>{renderPhrase(users.length)}</h2>
      {users.length ? (
        <table className="table align-middle mt-4">
          <thead>
            <tr>
              <th>Имя</th>
              <th>Качества</th>
              <th>Профессия</th>
              <th>Встретился раз</th>
              <th>Оценка</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              users.map(user => {
                return (
                  <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>
                      <div className="d-flex gap-2">{user.qualities.map(q => <span key={q._id} className={`badge bg-${q.color}`}>{q.name}</span>)}</div>
                    </td>
                    <td>{user.profession.name}</td>
                    <td>{user.completedMeetings}</td>
                    <td>{user.rate}</td>
                    <td className="text-center">
                      <button className="btn btn-danger" onClick={() => handleDelete(user._id)}>Удалить</button>
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      ) : ''}
    </div>
  )
}


export default Users;