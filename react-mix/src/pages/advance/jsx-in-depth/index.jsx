import React from 'react';

const MyButton = (props) => {
  const bs = Array(4).join(props.shadowSize + 'px ');
  return (
    <button style={{color: props.color, boxShadow: bs }}>{props.children}</button>
  )
}

const JSXCode = () => (
  <MyButton color="blue" shadowSize={3}>
    Click Me (with JSXCode)
  </MyButton>
)

const AsCompile = () => React.createElement(
  MyButton,
  {color: 'blue', shadowSize: 2},
  'Click Me (As Compile)'
)

const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>
    			<strong>React component using dot-notation</strong><br />
    			Imagine a {props.color} datepicker here.
    		</div>;
  }
}

function BlueDatePicker() {
  return <MyComponents.DatePicker color="blue" />;
}

// Wrong! This is a component and should have been capitalized:
function hello(props) {
  // Correct! This use of <div> is legitimate because div is a valid HTML tag:
  return <div>Hello {props.toWhat}</div>;
}

// Correct! This is a component and should be capitalized:
function Hello(props) {
  // Correct! This use of <div> is legitimate because div is a valid HTML tag:
  return <div>Hello {props.toWhat}</div>;
}

function HelloWorld() {
  // Wrong! React thinks <hello /> is an HTML tag because it's not capitalized:
  return <div>
  			<strong>Wrong! React thinks &lt; hello /&gt; is an HTML tag because it's not capitalized (check the console)</strong><br />
  			<hello toWhat="World" /><br /><br />
  			
  			<strong>Correct! React know &lt; Hello /&gt; is a component because is capitalized</strong><br />
  			<Hello toWhat="World" />
  		</div>;
}

const PhotoStory = (props) => (<div>This is PhotoStory with this story: {props.story}</div>);
const VideoStory = (props) => (<div>This is VideoStory with this story: {props.story}</div>);

const components = {
  photo: PhotoStory,
  video: VideoStory
};

/*
function Story(props) {
  // Wrong! JSX type can't be an expression.
  return <components[props.storyType] story={props.story} />;
}
*/
// Correct way
function Story(props) {
  // Correct! JSX type can be a capitalized variable.
  const SpecificStory = components[props.storyType];
  return <SpecificStory story={props.story} />;
}

const StoryContainer = (props) => (
	<div>
		<Story storyType='photo' story={props.story} />
		<Story storyType='video' story={props.story} />
	</div>
)

function NumberDescriber(props) {
  let description;
  if (props.number % 2 === 0) {
    description = <strong>even</strong>;
  } else {
    description = <i>odd</i>;
  }
  return <div><strong>JavaScript Expressions as Props</strong><br />{props.number} is an {description} number</div>;
}

const Greeting = (props) => (<span>Welcome {props.firstName} {props.lastName} !!!</span>);

function App1() {
  return <Greeting firstName="Ben" lastName="Hector" />;
}

function App2() {
  const props = {firstName: 'Ben', lastName: 'Hector'};
  return <Greeting {...props} />;
}

// Calls the children callback numTimes to produce a repeated component
function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}

function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {(index) => <div key={index}>This is item {index} in the list</div>}
    </Repeat>
  );
}

const JSXInDepth = (props) => (
  <div>
  	<JSXCode /><br /><br />
  	<AsCompile />
  	<hr />
  	<a href="https://babeljs.io/repl/" target="_blank" rel="noopener noreferrer">To check conversions from jsx to js</a>
  	<hr />
  	<BlueDatePicker />
  	<hr />
  	<HelloWorld />
  	<hr />
  	<StoryContainer story='my story' />
  	<hr />
  	<NumberDescriber number={1 + 2 + 3 + 4} />
  	<hr />
  	<ul>
	  	<li>
	  	    <strong>String Literals</strong><br />
		  	<p>&lt;3  (HTML-unescaped <code>'&amp;lt;3'</code>)</p>
			<p>{'<3'} (string literal <code>{"{'<3'}"}</code>)</p>
		</li>
		<li>
			<strong>Props Default to "True"</strong><br />
			<p>{"<MyTextBox autocomplete />"} is the same than</p>
			<p>{"<MyTextBox autocomplete={true} />"}</p>
		</li>
		<li>
			<strong>Spread Attributes</strong><br />
			<p>
			<App1 /> using {'<Greeting firstName="Ben" lastName="Hector" />'}
			</p>
			<p>
			<App2 /> using {"const props = {firstName: 'Ben', lastName: 'Hector'}; <Greeting {...props} />"}
			</p>
		</li>
	</ul>
	<hr />
	<strong>Calls the children callback</strong>
	<ListOfTenThings />
  </div>
)

export default JSXInDepth;