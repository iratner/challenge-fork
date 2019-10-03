import React from 'react';
import './css/comic.css';

export const Comic = ({img}) => {
   // console.log(img);

   return (
      <div class="comic">
         <img src={img}></img>
      </div>
   );
}
