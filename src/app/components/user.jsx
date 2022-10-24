import React from "react";
import Qualities from './qualities';
import Bookmark from "./bookmark";


function User({
  _id,
  name,
  qualities,
  profession,
  completedMeetings,
  rate,
  onDelete,
  bookmark,
  onToggleBookmark,
}) {
  return (
    <tr key={_id}>
      <td>{name}</td>
      <td>
        <div className="d-flex gap-2">
          <Qualities qualities={qualities} />
        </div>
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate}</td>
      <td>
        <Bookmark status={bookmark} onClick={() => onToggleBookmark(_id)} />
      </td>
      <td className="text-center">
        <button className="btn btn-danger" onClick={() => onDelete(_id)}>Удалить</button>
      </td>
    </tr>
  );
}


export default User;