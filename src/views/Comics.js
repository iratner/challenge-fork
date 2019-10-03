import React from 'react';
import './css/comics.css';

import { REQUESTS, comicsFetch} from '../util/';

export default class Comics extends React.Component{
   constructor(props) {
      super(props);
      this.state = {

      }
   }

   componentDidMount() {
      const comic = comicsFetch(REQUESTS.GET_COMICS, {id : 2});
      console.log(comic);
   }

   render() {
      return (
         <div>
            This is where the comics will go!
         </div>
      )
   }
}
   