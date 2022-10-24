import React from "react";


function Qualities(props) {
  return props.qualities.map(q => <span key={q._id} className={`badge bg-${q.color}`}>{q.name}</span>)
}


export default Qualities;