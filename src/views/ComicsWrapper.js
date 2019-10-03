import React from 'react';
import { Comic } from '../components';
import './css/comics-wrapper.css';

const FALLBACK = {
   alt: "Don't we all.",
   day: "1",
   img: "/img/xkcs_1.jpg",
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
   constructor(props) {
      super(props);
   }

   render() {
      const { comics } = this.props;
      console.log(comics);
      return (
         <div class="comics-wrapper">
            {
               comics.length 
                  ? comics.map( comic => <Comic {...comic} />)
                  : <Comic data={FALLBACK}/>
            }
         </div>
      )
   }
}