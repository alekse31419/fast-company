import React from "react";


export default function Bookmark({ status, ...rest }) {
  const className = `bi bi-bookmark${status ? '-fill' : ''}`;

  return (
    <button className="btn border" {...rest}>
      <i className={className}></i>
    </button>
  )
}