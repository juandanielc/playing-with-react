import React from 'react';

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers2 = [1, 2, 3, 4, 5];

const withId = [{id:'hola', text:'mundo'}, {id:'juan', text:'Daniel'}];
const noId   = ['mundo','daniel'];

const itemsWithId = withId.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);

const itemsNoId = noId.map((todo, index) =>
  // Only do this if items have no stable IDs
  <li key={index}>
    {todo}
  </li>
);

/**
 * Incorrect way to reference keys.
 */
function ListItem(props) {
  const value = props.value;
  return (
    // Wrong! There is no need to specify the key here:
    <li key={value.toString()}>
      {value}
    </li>
  );
}

function NumberListIncorrect(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number, i) =>
    // Wrong! The key should have been specified here:
    <ListItem value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}
/*--------------------------------------------*/

/**
 * Correct way to reference keys.
 */
function ListItemCorrect(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function NumberListCorrect(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Correct! Key should be specified inside the array.
    <ListItemCorrect key={number.toString()}
              value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}
/*--------------------------------------------*/


function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );

  const Post = (props) => (
    <div>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  ); 

  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );

  const contentPassingKey = posts.map((post) =>
    <Post
      key={post.id}
      id={post.id}  // when ket need to be pass because key never is passed
      title={post.title}
      content={post.content} />
  );
  return (
    <div>
      {sidebar}
      <hr />
      <strong>content</strong><br />
      {content}
      <hr />
      <strong>content "passing key"</strong><br />
      {contentPassingKey}
    </div>
  );
}

export function BlogContainer() { 
	return (
		<Blog posts={posts} />
	)
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

function NumberListEmb(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <ListItemCorrect key={number.toString()}
              value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

export class ListsContainer extends React.Component {
  constructor(props) {
    super(props);
	const numbers = [1, 2, 3, 4, 5];
	const doubled = numbers.map((number) => number * 2);
	console.log(doubled);
	this.listItems = numbers.map((number) =>
	  <li key={number.toString()}>{number}</li>
	);
  }

  render() {
    return (
      <div>
        Check the console.
        <br />expected [2, 4, 6, 8, 10]
        <hr />
        Class:
        <ul>{this.listItems}</ul>
        <hr />
        Function:
        <NumberList numbers={numbers2}/>
        <hr />
        With IDs
        <ul>{itemsWithId}</ul>
        <hr />
        No IDs <strong>Generate a warning into the console</strong>
        <ul>{itemsNoId}</ul>
        <hr />
        Incorrect way Ids
		<NumberListIncorrect numbers={numbers2}/>
		<hr />
        Correct way Ids
		<NumberListCorrect numbers={numbers2}/>
		<hr />
		expressions in curly braces
		<NumberListEmb numbers={numbers2}/>
      </div>
    )
  }
}