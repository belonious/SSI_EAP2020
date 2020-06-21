import React from 'react';

class Header extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<nav className="light-blue lighten-1" role="navigation">
				<div className="nav-wrapper container"><a href="#" className="brand-logo">EAP</a>
					{/*<ul >*/}
						<p className="right hide-on-med-and-down"> DID: {this.props.DID}</p>
					{/*</ul>*/}
				</div>
			</nav>
		);
	}
}

export default Header;
