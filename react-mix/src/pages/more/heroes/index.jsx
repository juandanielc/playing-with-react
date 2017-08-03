import React from 'react';
import App from './app.component';
import './index.css'

class RestApi extends React.Component {
	render() {
		return <App {...this.props} />
	}
}

export default RestApi;