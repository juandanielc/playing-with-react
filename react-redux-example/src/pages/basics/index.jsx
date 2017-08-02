import React from 'react';
import Lesson from '../../components/templates/lesson';

/**
 * Routes
 */
import CounterWithTest               from './counter-with-test';
import Todo               			 from './todo';
import TodoRefactor     			 from './todo-refactor';
import HelloWorld     			 	 from './hello-world';

const baseMenu = 
[
    { name: "Counter With Test",                 component: CounterWithTest,              url:"counter-with-test" },
    { name: "Todo list (mutation)",              component: Todo,              			  url:"todo" },
    { name: "Todo list (refactor)",              component: TodoRefactor,      			  url:"todo-refactor" },
    { name: "Hello World (test)",              	 component: HelloWorld,      			  url:"hello-world" },
];

const Lessons = (props) => (
    <Lesson baseMenu={baseMenu} match={props.match} title="Redux Basic Lessons" />
  )

export default Lessons;