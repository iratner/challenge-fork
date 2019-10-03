import React from 'react';
import './css/comic.css';

export const Comic = ({img, year, title, alt, date}) => {
   return (
      <div className="comic">
         <div>{title}</div>
         <div>published: {date}</div>
         <img src={img} alt={alt}></img>
      </div>
   );
}
