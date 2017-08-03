import React from 'react';
import axios from 'axios';
import './index.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {jobs: []};
  }

  componentDidMount() {
    // Is there a React-y way to avoid rebinding `this`? fat arrow?
    var th = this;
    this.serverRequest = 
      axios.get(this.props.source)
        .then(function(result) {    
          th.setState({
            jobs: result.data.jobs
          });
        })
  }

  componentWillUnmount() {
    //this.serverRequest.abort();
  }

  render() {
    return (
      <div>
        http://mediatemple.net/blog/tips/loading-and-using-external-data-in-react/
        <h1>Jobs!</h1>
        {/* Don't have an ID to use for the key, URL work ok? */}
        {this.state.jobs.map(function(job) {
          return (
            <fieldset key={job.url}>
              <legend>{job.title}</legend>
              <label>Company: </label>
              <strong>{job.company_name}</strong><br />
              <label>Term: </label>
              <strong>{job.term}</strong><br />
              <a href={job.url} target="_blank" rel="noopener noreferrer">more...</a>
            </fieldset>
          );
        })}
      </div>
    )
  }
}

const ManipulatingData = () => (
	<App source="https://codepen.io/jobs.json" />
)

export default ManipulatingData;