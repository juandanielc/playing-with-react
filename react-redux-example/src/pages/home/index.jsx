import React from 'react'
import { A } from '../../components/navigation';



export default () => (
  <div id="main home">
    <ul>
      <li>
        <strong>Getting started with create-react-app, Redux, React Router & Redux Thunk</strong>
        <ul>
          <li><label>Tutorial:</label> 
            <A href="https://medium.com/@notrab/getting-started-with-create-react-app-redux-react-router-redux-thunk-d6a19259f71f">
              click here.
            </A>
          </li>
          <li>
            <label>Local Demo:</label><a href="/redux-route-example">click here.</a>
          </li>
        </ul>
      </li>

      <li>
        <strong>Counter (basic redux and test)</strong>
        <ul>
          <li><label>Tutorial Counter:</label> 
            <A href="https://egghead.io/courses/getting-started-with-redux">
              click here.
            </A>
          </li>
          <li><label>Tutorial Test:</label> 
            <A href="https://medium.com/@diamondgfx/learning-react-with-create-react-app-part-4-9f843c8c1ccc">
              click here.
            </A>
          </li>
          <li>
            <label>Local Demo:</label><a href="/basics/counter-with-test">click here.</a>
          </li>
        </ul>
      </li>

      <li>
        <strong>Todo List(Mutation)</strong>
        <ul>
          <li><label>Tutorial todo:</label> 
            <A href="https://egghead.io/courses/getting-started-with-redux">
              click here.
            </A>
          </li>
          <li>
            <label>Local Demo:</label><a href="/basics/todo">click here.</a>
          </li>
        </ul>
      </li>
    </ul>
    <A href="https://github.com/facebookincubator/create-react-app">create-react-app</A>
  </div>
)