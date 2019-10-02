import React from 'react'
import ReactDOM from 'react-dom';
import ListGroup from './ListGroup';

import "./index.css";



const lists = [
  {
  id: 897,  
  title: 'To do List...', 
  cards: [
    {
      id:123,
      text: 'take out trash'
    },
    {
      id:345,
      text: 'make cookies'
    },
    {
      id:567,
      text: 'build a ui for new school'
    }, 
    {
      id: 321,
      text: 'Chapter 8: Frontend Datastore: Cookies, LocalStorage, and More  Project 2 cookies'
    },
    {
      id: 897,
      text: 'write a book'
    }
  ]
},
 {
   id: 123,
  title: 'To do List ...', 
  cards: [
    {
      id:123,
      text: 'take out trash'
    },
    {
      id:345,
      text: 'make cookies'
    },
    {
      id:567,
      text: 'build a ui for new school'
    }, 
    {
      id: 321,
      text: 'Chapter 8: Frontend Datastore: Cookies, LocalStorage, and More  Project 2 cookies'
    },
    {
      id: 897,
      text: 'write a book'
    }
  ]
},
 {
  id: 345,
  title: 'To do List ...', 
  cards: [
    {
      id:123,
      text: 'take out trash'
    },
    {
      id:345,
      text: 'make cookies'
    },
    {
      id:567,
      text: 'build a ui for new school'
    }, 
    {
      id: 321,
      text: 'Chapter 8: Frontend Datastore: Cookies, LocalStorage, and More  Project 2 cookies'
    },
    {
      id: 897,
      text: 'write a book'
    },
    {
      id: 497,
      text: 'take a bath'
    }
  ]
}
]; 







ReactDOM.render( <ListGroup lists={lists} /> , document.querySelector('#root'));