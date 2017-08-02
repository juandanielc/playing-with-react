import React from 'react';
import { Routes, MenuItems } from '../components/navigation';

/**
 * Components routes.
 */
import Home             from './home';
import ReduxRoute       from './redux-route-example';
import Basics           from './basics';

const menu = 
[
	{ url: 'home'                , name: 'Home'                , type: 'component' , value: Home      	  , home: true },
	{ url: 'redux-route-example' , name: 'Redux Route Example' , type: 'component' , value: ReduxRoute 	  },
  { url: 'basics'              , name: 'Basics'              , type: 'component' , value: Basics        },
];

const Main = () => (
	<main>
   	<Routes menu={menu} parentPath='/' />
  </main>
)

const Header = () => (
  <header>
    <nav>
      <MenuItems menu={menu} parentPath='/' />
    </nav>
  </header>
)

const Pages = () => (
  <div>
    <Header />
    <Main />
  </div>
)

export default Pages;