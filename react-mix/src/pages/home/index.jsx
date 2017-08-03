import $ from 'jquery';
import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {html: "loading..."};

    var self = this;
    $.get('/home.html', function(res){
     self.setState( {html: res} );
    });
  }

  render() {
    return (
      <div className="home-content" dangerouslySetInnerHTML={{__html: this.state.html}}></div>
    )
  }
}

export default Home;