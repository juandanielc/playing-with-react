import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App, { HelloWorld } from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


describe('Testing Hello World', () => {
	const name = 'Person';
	const mockRemoveGreeting = jest.fn();
	const component = shallow(
	  <HelloWorld name={name} removeGreeting={mockRemoveGreeting}/>
	);


	// 1. Writing A Generic Snapshot Test

	it('renders and matches our snapshot', () => {
	  const component = renderer.create(
	    <HelloWorld name="Person" />
	  );
	  const tree = component.toJSON();
	  expect(tree).toMatchSnapshot();  //this shows changes with out updating the test
	});

	// 2. Writing Content Tests

	/*
	A shallow (created in describe) render is a simulated render of a component tree. 
	It allows for deeper inspection then the snapshot level, 
	such as looking for specific DOM elements and their contents, 
	as well as simulating user interaction. Now, let’s look at the test itself:
	 */

	it('contains the supplied name', () => {
	  expect(component.text()).toContain(name);
	});

	// 3. Checking Interactions

	it('modifies the greeting when frenchify button is clicked', () => {
	  component.find('button.frenchify').simulate('click');
	  expect(component.text()).toContain('Bonjour');
	});

	// 4. Working With Interaction And Mocks
	it('calls the passed in removeGreeting function when remove button is clicked', () => {
	  component.find('button.remove').simulate('click');
	  expect(mockRemoveGreeting).toBeCalled();
	});


});

