var deepFreeze = require('deep-freeze');

/* List get mutation */
const addCounter = (list) => {
	list.push(0);
	return list;
}

/* Add no mutation */
const addCounterES5 = (list) => {
	return list.concat(0);
}

/* Same addCounterES5 but ES6 notation */
const addCounterES6 = (list) => {
	return [...list, 0 ];
}

//////////////////////////////////////////////////////////////////////////////////////////////////

/* List get mutation */
const removeCounter = (list, index) => {
	list.splice(index, 1);
	return list;
}

/* remove no mutation */
const removeCounterES5 = (list, index) => {
	return list.slice(0, index)               //first part
	       .concat( list.slice(index + 1) );  //second part
}

/* Same removeCounterES5 but ES6 notation */
const removeCounterES6 = (list, index) => {
	return [...list.slice(0, index), ...list.slice(index + 1) ];
}

//////////////////////////////////////////////////////////////////////////////////////////////////

/* List get mutation */
const incrementCounter = (list, index) => {
	list[index]++;
	return list;
}

/* Added no mutation */
const incrementCounterES5 = (list, index) => {
	return list.slice(0,index)        		  //first part
	       .concat(list[index] + 1)   		  //new value
	       .concat( list.slice(index + 1) );  //second part
}

/* Same incrementCounterES5 but ES6 notation */
const incrementCounterES6 = (list, index) => {
	return [ ...list.slice(0, index), 
			 list[index] + 1,
	         ...list.slice(index + 1) ];
}

//////////////////////////////////////////////////////////////////////////////////////////////////

it('Test Mutation Add', () => {
	{
		const listBefore = [];
		const listAfter  = [0];

		// deepFreeze(listBefore); with this line this example fails because deepFreeze prevent mutations.

		expect(
			addCounter(listBefore)
		).toEqual(listAfter);
	}

	{
		const listBefore = [];
		const listAfter  = [0];

		deepFreeze(listBefore);

		expect(
			addCounterES5(listBefore)
		).toEqual(listAfter);
	}

	{
		const listBefore = [];
		const listAfter  = [0];

		deepFreeze(listBefore);

		expect(
			addCounterES6(listBefore)
		).toEqual(listAfter);
	}
});

it('Test Mutation Remove', () => {
	{
		const listBefore = [10, 20, 30];
		const listAfter  = [10, 30];

		// deepFreeze(listBefore); with this line this example fails because deepFreeze prevent mutations.

		expect(
			removeCounter(listBefore,1)
		).toEqual(listAfter);
	}

	{
		const listBefore = [10, 20, 30];
		const listAfter  = [10, 30];

		deepFreeze(listBefore);

		expect(
			removeCounterES5(listBefore,1)
		).toEqual(listAfter);
	}

	{
		const listBefore = [10, 20, 30];
		const listAfter  = [10, 30];

		deepFreeze(listBefore);

		expect(
			removeCounterES6(listBefore,1)
		).toEqual(listAfter);
	}
});

it('Test Mutation increment', () => {
	{
		const listBefore = [10, 20, 30];
		const listAfter  = [10, 21, 30];

		// deepFreeze(listBefore); with this line this example fails because deepFreeze prevent mutations.

		expect(
			incrementCounter(listBefore, 1)
		).toEqual(listAfter);
	}

	{
		const listBefore = [10, 20, 30];
		const listAfter  = [10, 21, 30];

		deepFreeze(listBefore);

		expect(
			incrementCounterES5(listBefore, 1)
		).toEqual(listAfter);
	}

	{
		const listBefore = [10, 20, 30];
		const listAfter  = [10, 21, 30];

		deepFreeze(listBefore);

		expect(
			incrementCounterES6(listBefore, 1)
		).toEqual(listAfter);
	}
});