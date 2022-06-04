import React from 'react';
import Map from './Map';

class Locat extends React.Component {

	render() {
		return(
			<div style={{ margin: '100px' }}>
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

export default Locat;