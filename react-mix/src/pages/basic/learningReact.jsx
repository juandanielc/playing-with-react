import React from 'react';

class Clock1 extends React.Component {
  constructor() {
    super();
    const time = new Date().toLocaleTimeString();
    this.state = {
      time: time
    }
    //This no works with routes
    //setInterval(() => this.tick(), 1000);
  }

  tick() {
    const time = new Date().toLocaleTimeString();
    this.setState({time: time})
  }

  render() {
    const element = (
      <div>
        <h2>It is {this.state.time}.</h2>
      </div>
    );
  
    return element;
  }
}

class Clock2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

class HelloWorldC extends React.Component {
  render() {
    return (
      <h1>Hello World Class</h1>
    );
  }
}

function HelloWorldF(props) {
  const imageUrl = "https://facebook.github.io/react/img/logo.svg";
  const tab = <div tabIndex="0">tab</div>;
  const img = <img className="react-logo" alt="react logo" src={imageUrl}></img>;
  return(
    <div>
      <h1>Hello World Function</h1>
      {tab}
      {img}
    </div>
  );
}

export class User extends React.Component {

  constructor() {
    super();
    this.state = {
      user: {
        firstName: 'Harper',
        lastName: 'Perez',
      },
      status: false
    };
    this.status = false;
  }

  formatName() {
    return this.state.user.firstName + ' ' + this.state.user.lastName;
  }

  getGreeting() {
    if (this.state.status) {
      return <h1>Hello, {this.formatName()}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }

  changeStatus() {
    this.setState({status: !this.state.status}); 
  }

  render() {
    const element = this.getGreeting();
    const desc = this.state.status ? 'logout' : 'login';
    return (
      <div>
        { element }
        <button onClick={() => this.changeStatus()}>{desc}</button><br />
      </div>
    );
  }
}

export class Identical extends React.Component {
  render() {
    const identical1 = (
      <h3 className="greeting">
        Hello, world!
      </h3>
    );

    const identical2 = React.createElement(
      'h3',
      {className: 'greeting'},
      'Hello, world!'
    );

    return (
      <div>
        <ul>
          <li>xhtml mode: {identical1}</li>
          <li>js mode: {identical2}</li>
        </ul>
      </div>
    )
  }
}

class ShoppingList extends React.Component {
  render() {
    let products = this.props.products.map(p => (
            <li key={p.id}>
              {p.name}
            </li>
          ));
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          {products}
        </ul>
      </div>
    );
  }
}

class WelcomeC extends React.Component {
  render() {
    return <h1>Hello, {this.props.name} from class</h1>;
  }
}

function WelcomeF(props) {
  return <h1>Hello, {props.name} from function</h1>;
}

function formatDate(date) {
  return date.toLocaleDateString();
}

function NoSplitComment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

function SplitComment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
      <img className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
      />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}


class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
  }

  changeCounterW() {
    // Wrong
    this.setState({
      counter: this.state.counter + this.props.increment,
    });
  }

  changeCounterC() {
    // Correct
    this.setState((prevState, props) => ({
      counter: prevState.counter + props.increment
    }));
  }

  render() {
    return (
      <div>
        { this.state.counter }
        <button onClick={() => this.changeCounterW()}>Wrong + {this.props.increment}</button>
        <button onClick={() => this.changeCounterC()}>Correct + {this.props.increment}</button>
      </div>
    );
  }
}


class ToggleBetterPerformance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

class ToggleBadPerformance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={ () => this.handleClick() }>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

/*class Learning extends React.Component {

  render() {
    const comment = {
      date: new Date(),
      text: 'I hope you enjoy learning React!',
      author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
      }
    };


    return (
      <div className="testing">
        <div className="shopping-list">

          <ShoppingList name="hola" />

          <HelloWorldC />

          <HelloWorldF />

          <User />

          <Identical />

          <Clock />

          <WelcomeC name="Juan" />
          <WelcomeC name="Daniel" />
          <WelcomeC name="Clavijo" />

          <WelcomeF name="Paola" />
          <WelcomeF name="Andrea" />

          <NoSplitComment
            date={comment.date}
            text={comment.text}
            author={comment.author} />

          <SplitComment
            date={comment.date}
            text={comment.text}
            author={comment.author} />

          <Clock2 />

          <hr />
          <h1>Components are Isolated</h1>
          <Counter increment={1} />
          <Counter increment={2} />
          <hr />

          <ToggleBetterPerformance />
          <ToggleBadPerformance />
        </div>
      </div>
    );
  }
}*/


export const HelloWorld = () => (
    <div>
      <HelloWorldC />
      <HelloWorldF />
    </div>
  )

export const Clock = () => (
    <div>
      <Clock1 />
      <Clock2 />
    </div>
  )

export const Welcome = () => (
    <div>
      <WelcomeC name="Juan" />
      <WelcomeC name="Daniel" />
      <WelcomeC name="Clavijo" />

      <WelcomeF name="Paola" />
      <WelcomeF name="Andrea" />
    </div>
  )

export class Comment extends React.Component {
  render() {
    const comment = {
      date: new Date(),
      text: 'I hope you enjoy learning React!',
      author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
      }
    };

    return (
    <div>
      <strong>No Split Comment</strong>
      <NoSplitComment
        date={comment.date}
        text={comment.text}
        author={comment.author} />
      <strong>Split Comment</strong>
      <SplitComment
        date={comment.date}
        text={comment.text}
        author={comment.author} />
    </div>)
    }
}

export const CounterContainer = () => (
  <div>
    <div>Components are Isolated</div>
    <Counter increment={1} />
    <Counter increment={2} />
  </div>
  )


export const Toggle = () => (
    <div>
      <div>Toggle Better Performance</div>
      <ToggleBetterPerformance />
      <div>Toggle Bad Performance</div>
      <ToggleBadPerformance />
    </div>
  )

export const ShoppingListContainer = () => (
  <ShoppingList name="My List" products={[{id: 1, name: 'Apple'},
                                          {id: 2, name: 'Blackberry'},
                                          {id: 3, name: 'Android'},
                                          {id: 4, name: 'Bananas'}]} />
)


