
import React from 'react';

class Header extends React.Component {
	render() {

		const text = this.props.winner ? 
		             this.props.winner + " is the winner!!!!" :
		             "Next Player: " + this.props.player;
		const cn = "title " + (this.props.winner ? "title-winner" : "title-player");

		return (
			<div className={cn}>{text}</div>
			)
	}
}

export default Header;