import React from 'react';

import { Loader } from '../components';
import { ComicsWrapper} from './';
import { REQUESTS, comicsFetch} from '../util/';
import './css/comics.css';

export default class Comics extends React.Component{
   constructor(props) {
      super(props);
      this.state = {
         requestFromId: 1000,
         requestQuantity: 20,
         comics : [],
         requested: false
      }
   }

   componentDidMount() {
      const {requestFromId, requestQuantity} = this.state;

      comicsFetch(REQUESTS.GET_COMICS, {start: requestFromId, end: requestFromId + requestQuantity})
         .then( comics => {
            this.setState({ 
               comics: [...this.state.comics, ...this.processDate(comics)],
               requested: true
            })
            console.log(this.state);
         }).catch( err => {
            this.setState({ 
               requested: true
            })
         });
      
   }

   formatDate = (date) => {
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;;
   }

   processDate = (comics) => {
      comics.forEach( comic => {
         const date = new Date(comic.year, comic.month -1, comic.day);
         comic.milliseconds = date.getTime();
         comic.date = this.formatDate(date);


      });      

      return comics;
   }

   renderComics = () => {
      return <ComicsWrapper comics={this.state.comics} />
   }

   render() {
      const {requested } = this.state;

      if (requested) {
         return this.renderComics();
      } else {
         return <Loader/>;
      }
      
   }
}
   