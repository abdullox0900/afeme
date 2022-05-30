import React, { Component } from 'react';
import Map from './Map';

class Home extends Component {

	render() {
		return(
			<div>
				<Map
					google={this.props.google}
					center={{lat: 40.815356, lng: 72.28375}}
					height='300px'
					zoom={15}
				/>
			</div>
		);
	}
}

export default Home