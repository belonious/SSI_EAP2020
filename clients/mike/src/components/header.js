import React from 'react';

class Header extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<nav className="light-green light-green-text lighten-1" role="navigation">
				<div className="nav-wrapper container"><a href="#" className="brand-logo">Mike</a>
					<ul className="right hide-on-med-and-down">
						<li><a href="#">DID: {this.props.DID}</a></li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Header;
