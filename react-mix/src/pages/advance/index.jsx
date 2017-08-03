import React from 'react';
import Lesson from '../../components/templates/lesson';

/**
 * Routes
 */
import JSXInDepth               from './jsx-in-depth';
import Typechecking             from './typechecking';
import RefsandtheDOM            from './refs-and-the-dom';
import UncontrolledComponents   from './uncontrolled-components';
import OptimizingPerformance    from './optimizing-performance';
import ReactWithoutES6          from './react-without-es6';
import ReactWithoutJSX          from './react-without-jsx';
import Reconciliation           from './reconciliation';
import Context                  from './context';
import WebComponents            from './web-components';
import HigherOrderComponents    from './higher-order-components';
import IntegratingwithOtherLib  from './integrating-with-other-libraries';

import Accessibility            from './accessibility';



const baseMenu = 
[
    { name: "JSX In Depth",                 component: JSXInDepth,              url:"jsx-in-depth" },
    { name: "Typechecking With prop-types", component: Typechecking,            url:"typechecking" },
    { name: 'Refs and the DOM',             component: RefsandtheDOM,           url:'refs-and-the-dom' },
    { name: 'Uncontrolled Components',      component: UncontrolledComponents,  url:'uncontrolled-components' },
    { name: 'Optimizing Performance',       component: OptimizingPerformance,   url:'optimizing-performance' },
    { name: 'React Without ES6',            component: ReactWithoutES6,         url:'react-without-es6' },
    { name: 'React Without JSX',            component: ReactWithoutJSX,         url:'react-without-jsx' },
    { name: 'Reconciliation',               component: Reconciliation,          url:'reconciliation' },
    { name: 'Context',                      component: Context,                 url:'context' },
    { name: 'Web Components',               component: WebComponents,           url:'web-components' },
    { name: 'Higher-Order Components',      component: HigherOrderComponents,   url:'higher-order-components' },
    { name: 'Integrating with Other Lib',   component: IntegratingwithOtherLib, url:'integrating-with-other-libraries' },
    { name: 'Accessibility',                component: Accessibility,           url:'accessibility' },
];

const Lessons = (props) => (
    <Lesson baseMenu={baseMenu} match={props.match} title="Advance Lessons" />
  )

export default Lessons;