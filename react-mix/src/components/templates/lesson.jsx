import React from 'react';
import { Routes, MenuItems } from '../../components/navigation';
import './lesson.css';

let baseMenu = [];

const Template = (props) => {
  const lesson = baseMenu.find( (o) => o.url === props.match.params.url);

  if (!lesson) {
    return <div>Sorry, but the lesson was not found</div>
  }

  const Component = lesson.component;
  return (
    <div className="inner-content">
      <h1>{lesson.name}</h1>
      <Component {...props}/>
      <div className="clear" />
      <a onClick={props.history.goBack}>Back</a>
    </div>
  )
}

const SideBar = (props) => (
  <aside>
    <nav>
      <h2>{props.title}</h2>
      <MenuItems menu={props.menu} parentPath={props.baseUrl} className='btn' />
    </nav>
  </aside>
  )

var Content = function Content(props) {
  let extendMenu = props.menu;
  extendMenu.unshift({ url: '', type: 'component' , value: () => (<h1>Select an option</h1>) });
  return <Routes menu={extendMenu} parentPath={props.baseUrl} />;
};

class Lesson extends React.Component {
  constructor(props) {
    super(props);
    baseMenu = props.baseMenu;
    this.menu = baseMenu.map( (o) => ({ url: o.url, name: o.name, type: 'component' , value: Template, param: ':url' }));
  }

  render() {
    let menu = this.menu.slice();
    return (
      <section>
        <SideBar baseUrl={this.props.match.path + '/'} menu={menu} title={this.props.title}/>
        <Content baseUrl={this.props.match.path + '/'} menu={menu} />
      </section>
    )
  }
}

export default Lesson;