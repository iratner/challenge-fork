import React from 'react';
import './css/comic.css';

export const Comic = ({img, year, title, alt}) => {
   // console.log(img);

   return (
      <div className="comic">
         <div>{title}</div>
         <div>published {year}</div>
         <img src={img} alt={alt}></img>
      </div>
   );
}
