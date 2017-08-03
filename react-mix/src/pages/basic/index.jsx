import React from 'react';
import Lesson from '../../components/templates/lesson';

/**
 * Routes
 */
import * as Conditional       from './conditional-rendering';
import * as ListsAndKeys      from './lists-and-keys';
import * as LearningReact     from './learningReact';
import      Forms             from './forms';
import      Termometer        from './termometer';
import      CompVSInher       from './composition-vs-inheritance';
import      SearchableProduct from './searchable-product';

const baseMenu = 
[
    { name: "Hello World", component: LearningReact.HelloWorld, url:"hello-world" },
    { name: "Clock", component: LearningReact.Clock, url:"clock" },
    { name: "User", component: LearningReact.User, url:"user" },
    { name: "Identical", component: LearningReact.Identical, url:"identical" },
    { name: "Welcome", component: LearningReact.Welcome, url:"welcome" },
    { name: "Comment", component: LearningReact.Comment, url:"comment" },
    { name: "Counter", component: LearningReact.CounterContainer, url:"counter" },
    { name: "Toggle", component: LearningReact.Toggle, url:"toggle" },
    { name: "Shopping List", component: LearningReact.ShoppingListContainer, url:"shopping-list" },
    { name: "Greeting Content", component: Conditional.GreetingContent, url:"greeting-content" },
    { name: "Boxes & Page warning", component: Conditional.Page, url:"page-warning" },
    { name: "Lists & Keys", component: ListsAndKeys.ListsContainer, url:"lists-and-keys" },
    { name: "Lists & Keys (Blog)", component: ListsAndKeys.BlogContainer, url:"blog" },
    { name: "Forms", component: Forms, url:"forms" },
    { name: "Termometer", component: Termometer, url:"termometer" },
    { name: "Composition vs Inheritance", component: CompVSInher, url:"composition-vs-Inheritance" },
    { name: "Searchable Product", component: SearchableProduct, url:"searchable-product"}
];

const Lessons = (props) => (
    <Lesson baseMenu={baseMenu} match={props.match} title="Basic Lessons" />
  )

export default Lessons;