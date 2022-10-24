import React from "react";
import User from './user';


const Users = ({ users, ...rest }) => {
  return (
    <>{users.length > 0 && (
      <table className="table align-middle mt-4">
        <thead>
          <tr>
            <th>Имя</th>
            <th>Качества</th>
            <th>Профессия</th>
            <th>Встретился раз</th>
            <th>Оценка</th>
            <th>Избранные</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{
          users.map(user => {
            return <User key={user._id} {...user} {...rest} />
          })
        }</tbody>
      </table>
    )}</>
  )
}


export default Users;