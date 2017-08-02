import counter from './counter.reducer';

it('Test counter reducer', () => {
  expect(
  	counter(0, { type: 'INCREMENT'} )
  ).toEqual(1);

  expect(
  	counter(1, { type: 'INCREMENT'} )
  ).toEqual(2);

  expect(
  	counter(2, { type: 'DECREMENT'} )
  ).toEqual(1);

  expect(
  	counter(1, { type: 'DECREMENT'} )
  ).toEqual(0);

  expect(
    counter(1, { type: 'SOMETHING_ELSE'} )
  ).toEqual(1);

  expect(
    counter(1, {} )
  ).toEqual(1);

  expect(
    counter(undefined, {} )
  ).toEqual(0);
});


import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Counter from './index';

/*describe(Counter, () => {
  const mockRemoveGreeting = jest.fn();
  const component = shallow(
    <Counter />
  );
});*/