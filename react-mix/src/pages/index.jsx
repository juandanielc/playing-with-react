import React from 'react';
import { Routes, MenuItems } from '../components/navigation';

/**
 * Components routes.
 */
import Home             from './home';
import TicTacToe        from './TicTacToe';
import Basic            from './basic';
import Advance          from './advance';
import More             from './more';


const menu = 
[
	{ url: 'home'              , name: 'Home'               , type: 'component' , value: Home      	  , home: true },
	{ url: 'tic-tac-toe'       , name: 'Tic Tac Toe'        , type: 'component' , value: TicTacToe 	  },
	{ url: 'basics'            , name: 'Basics'             , type: 'component' , value: Basic        },
  { url: 'advance'           , name: 'Advance'            , type: 'component' , value: Advance      },
  { url: 'more'              , name: 'More'               , type: 'component' , value: More         },
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