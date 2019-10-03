import React from 'react';

import { Loader } from '../components';
import { ComicsWrapper} from './';

import { REQUESTS, comicsFetch} from '../util/';

export default class Comics extends React.Component{
   constructor(props) {
      super(props);
      this.state = {
         requestFromId: 1,
         requestQuantity: 8,
         comics : [],
         requested: false
      }
   }

   componentDidMount() {
      const {requestFromId, requestQuantity} = this.state;

      comicsFetch(REQUESTS.GET_COMICS, {start: requestFromId, end: requestFromId + requestQuantity})
         .then( comics => {
            this.setState({ 
               comics: [...this.state.comics, ...comics],
               requested: true
            })
            console.log(this.state);
         }).catch( err => {
            this.setState({ 
               requested: true
            })
         });
      
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
   