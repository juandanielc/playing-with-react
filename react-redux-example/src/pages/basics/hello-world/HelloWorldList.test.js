import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import HelloWorldList, { HelloWorld } from './index';
import AddGreeter from './AddGreeter';

describe(HelloWorldList, () => {
  const component = shallow(
    <HelloWorldList />
  );


  	// 1. Writing A Generic Snapshot Test
  	
	it('renders and matches our snapshot', () => {
	  const component = renderer.create(
	    <HelloWorldList />
	  );
	  const tree = component.toJSON();
	  expect(tree).toMatchSnapshot();
	});

	// 2. Writing Content Tests

	it('contains an AddGreeter subcomponent', () => {
	  expect(component.find(AddGreeter)).toHaveLength(1);
	});

	it('contains the same number of HelloWorld components as greetings', () => {
	  const helloWorlds = component.find(HelloWorld).length;
	  const greetings   = component.state('greetings').length;
	  // console.log('helloWorlds', helloWorlds); It is 3 for the initial names 
	  expect(helloWorlds).toEqual(greetings);
	});

	// 3. Checking Interactions
	
	it('adds another greeting when the add greeting function is called', () => {
	  const before = component.find(HelloWorld).length;
	  component.instance().addGreeting('Sample');
	  const after = component.find(HelloWorld).length;
	  expect(after).toBeGreaterThan(before);
	});

	it('removes a greeting from the list when the remove greeting function is called', () => {
	  const before   = component.find(HelloWorld).length;
	  const removeMe = component.state('greetings')[0];
	  component.instance().removeGreeting(removeMe);
	  const after = component.find(HelloWorld).length;
	  expect(after).toBeLessThan(before);
	});
});