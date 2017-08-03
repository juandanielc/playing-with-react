import React from 'react';

var DataSource = {
	comments: 
			[ 
			  {id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, eum! Exercitationem animi asperiores, facere velit necessitatibus voluptatum reprehenderit est! Repellat numquam, dolorum accusamus est doloremque! Inventore fugit corporis deserunt aliquam.'},
			  {id: 2, text: 'This is other case'},
			  {id: 3, text: 'More text is comming for the messages'} 
			],

	getComments: function() {
		return this.comments;
	},

	addChangeListener: function() {
		return true;
	},

	removeChangeListener: function() {
		return true;
	},

	getBlogPost: function(id) {
		return this.comments.find( (comment) => comment.id = id ).text;
	}

}

class Comment extends React.Component {
  render() {
    return (
      <div>
        {this.props.comment}
        <hr />
      </div>
    );
  }
}

class CommentList extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      // "DataSource" is some global data source
      comments: DataSource.getComments()
    };
  }

  componentDidMount() {
    // Subscribe to changes
    DataSource.addChangeListener(this.handleChange);
  }

  componentWillUnmount() {
    // Clean up listener
    DataSource.removeChangeListener(this.handleChange);
  }

  handleChange() {
    // Update component state whenever the data source changes
    this.setState({
      comments: DataSource.getComments()
    });
  }

  render() {
    return (
      <div>
        {this.state.comments.map((comment) => (
          <Comment comment={comment.text} key={comment.id} />
        ))}
      </div>
    );
  }
}


const TextBlock = (props) => <section>{props.text}</section>;

class BlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      blogPost: DataSource.getBlogPost(props.id)
    };
  }

  componentDidMount() {
    DataSource.addChangeListener(this.handleChange);
  }

  componentWillUnmount() {
    DataSource.removeChangeListener(this.handleChange);
  }

  handleChange() {
    this.setState({
      blogPost: DataSource.getBlogPost(this.props.id)
    });
  }

  render() {
    return <TextBlock text={this.state.blogPost} />;
  }
}

// This function takes a component...
function withSubscription(WrappedComponent, selectData) {
  // ...and returns another component...
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        data: selectData(DataSource, props)
      };
    }

    componentDidMount() {
      // ... that takes care of the subscription...
      DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
      DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
      this.setState({
        data: selectData(DataSource, this.props)
      });
    }

    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
}

function logProps(Comment) {
  Comment.prototype.componentWillReceiveProps = function(nextProps) {
    console.log('Current props======================: ', this.props);
    console.log('Next props====================: ', nextProps);
  };
  // The fact that we're returning the original input is a hint that it has
  // been mutated.
  return Comment;
}

// EnhancedComponent will log whenever props are received
const EnhancedComponent = logProps(Comment);

function logProps2(WrappedComponent) {
  return class extends React.Component {
    componentWillReceiveProps(nextProps) {
      console.log('Current props class*******************: ', this.props);
      console.log('Next props class*****************: ', nextProps);
    }
    render() {
      // Wraps the input component in a container, without mutating it. Good!
      return <WrappedComponent {...this.props} />;
    }
  }
}

// EnhancedComponent will log whenever props are received
const EnhancedComponent2 = logProps2(Comment);

const CommentListWithSubscription = withSubscription(
  CommentList,
  (DataSource) => DataSource.getComments()
);

const BlogPostWithSubscription = withSubscription(
  BlogPost,
  (DataSource, props) => DataSource.getBlogPost(props.id)
);

class HigherOrderComponents extends React.Component {
	constructor(props) {
		super(props);
		this.state = {text: 'press the button.', textButton: 'press me'}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
	    this.setState(prevState => ({
	      text: 'check console',
	      textButton: 'check console'
	    }));
	}

	render() {
		return (
			<section>
				<CommentList />
				<hr />
				<hr />
				<BlogPost id='1' />
				<hr />
				<hr />
				<CommentListWithSubscription />
				<hr />
				<hr />
				<BlogPostWithSubscription id='1' />
				<hr />
				<hr />
				<EnhancedComponent comment={this.state.text} />
				<hr />
				<hr />
				<EnhancedComponent2 comment={this.state.text} />
				<button onClick={this.handleClick}>{this.state.textButton}</button>
				<hr />
				<a href="https://facebook.github.io/react/docs/higher-order-components.html#convention-pass-unrelated-props-through-to-the-wrapped-component"
				   target="_bank">Need to continue from this point</a>
			</section>);
	}
}

export default HigherOrderComponents;