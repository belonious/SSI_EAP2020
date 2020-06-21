import React from "react";

class Credential extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			issueCredInput: '',
		}
	}
	//
	// createInvitation = async () => {
	// 	const res = await this.props.createInvitation()
	// 	console.log(res)
	// 	const s = this.state;
	// 	this.setState({
	// 		...s,
	// 		lastInvitation: res.invitation
	// 	})
	// }
	//

	//
	handleIssueCredInput = (e) => {
		const s = this.state;
		this.setState({
			...s,
			issueCredInput: e.target.value
		})
		console.log(e.target.value)
	}

	render() {
		return (
			<div>
				<div className="col s12 m4">
					<div className="row center">
						<a href="http://materializecss.com/getting-started.html" id="download-button"
							 className="btn-large waves-effect waves-light light-blue">Show Credentials Owned</a>
						<p>{JSON.stringify(this.props.credentials?.results.map(c => c.attrs)[0], null, 2)}</p>
					</div>
				</div>
			</div>
		)
	}
	// 		}
}
export default Credential


