import React from 'react';
import { Comic } from '../components';

// Just a fallback comic stored locally if nothing comes back from the API call
const FALLBACK = {
   alt: "Don't we all.",
   day: "1",
   img: "/img/xkcd_1.jpg",
   milliseconds: 1,
   date: "No one really knows",
   link: "",
   month: "1",
   news: "",
   num: 1,
   safe_title: "Barrel - Part 1",
   title: "Barrel - Part 1",
   transcript: "[[A boy sits in a barrel which is floating in an ocean.]]↵Boy: I wonder where I'll float next?↵[[The barrel drifts into the distance. Nothing else can be seen.]]↵{{Alt: Don't we all.}}",
   year: 2006
}


export default class ComicsWrapper extends React.PureComponent {
   state = {
      sort: false
   }

   render() {
      const { comics } = this.props;
      const { sort } = this.state;

      const sortedComics = comics.sort( (a, b) => { 
         return sort ? a.milliseconds - b.milliseconds : b.milliseconds - a.milliseconds;
      });

      return (
         <div className="comics-wrapper">
            <div className="sort-comics">
               <label htmlFor="sort-comics-checkbox">sort in ascending order: 
                  <input 
                     onClick={() => this.setState({sort: !sort})} 
                     name="sort-comics-checkbox" type="checkbox">
                  </input>
               </label>
            </div>
            <div className="comics-grid">
            {
               sortedComics.length 
                  ? sortedComics.map( comic => <Comic key={comic.num} {...comic} />)
                  : <Comic {...FALLBACK}/>
            }
            </div>
         </div>
      )
   }
}