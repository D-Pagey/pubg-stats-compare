import React, { Component } from 'react';
import API from './api';
import './App.css';
import Chart from './components/Chart';

export default class App extends Component {
	state = {}
	api = new API()
	
	async componentDidMount() {
		this.setState({ data: await this.api.getMatchLatestMatch('r4g3d') });
	}

	render() {
		const { data } = this.state;

		return (
			<div>
				<h1>PUBG Stats Compare</h1>
				<pre>{JSON.stringify(data, null, 4)}</pre>
				<Chart 
				data={[0.90, 1.1, 1.5]} 
				size={[500, 500]}
				padding={30} />
			</div>
		);
	}
}
