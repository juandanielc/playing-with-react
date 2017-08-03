import React from 'react';

class CounterButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 1};
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.color !== nextProps.color) {
      return true;
    }
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <button
        color={this.props.color}
        onClick={() => this.setState(state => ({count: state.count + 1}))}>
        Count: {this.state.count}
      </button>
    );
  }
}

const OptimizingPerformance = () => (
	<section>
		<p>
		For the most efficient Brunch production build<br />
		npm install --save-dev uglify-js-brunch
		</p>
		<hr />
		<p>
		For the most efficient Browserify production build<br />
		npm install --save-dev bundle-collapser envify uglify-js uglifyify
		</p>
		<CounterButton color="red"/>
	</section>
	)

export default OptimizingPerformance;