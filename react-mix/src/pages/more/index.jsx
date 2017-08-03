import React from 'react';
import Lesson from '../../components/templates/lesson';

/**
 * Routes
 */
import ManipulatingData from './manipulating-data';
import MyTTT            from './my-ttt';
import Heroes           from './heroes';
import Converter        from './converter';

const baseMenu = 
[
    { name: 'Manipulating Data', component: ManipulatingData, url:'manipulating-data' },
    { name: 'My Tic Tac Toe'   , component: MyTTT           , url:'my-tic-tac-toe'    },
    { name: 'Heroes (Rest)'    , component: Heroes          , url:'heroes'},
    { name: 'Converter'    	   , component: Converter       , url:'converter'},
];

const Lessons = (props) => (
    <Lesson baseMenu={baseMenu} match={props.match} title='More react' />
  )

export default Lessons;