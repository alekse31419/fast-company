import React from "react";


function SearchStatus({ length }) {
  function renderPhrase(usersCount) {
    const bgClass = 'badge bg-' + (usersCount ? 'primary' : 'danger');
    const lastNumber = Number(usersCount.toString().slice(-1));
    const phrase = (lastNumber >= 2 && lastNumber <= 4) && ![12, 13, 14].includes(usersCount) ? 'человека тусанут' : 'человек тусанет';
    const text = usersCount ? `${usersCount} ${phrase} сегодня с тобой` : 'Никто не тусанет с тобой';

    return <span className={bgClass}>{text}</span>
  }

  return <h2>{renderPhrase(length)}</h2>
}


export default SearchStatus;