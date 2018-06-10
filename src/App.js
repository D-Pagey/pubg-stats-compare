import React, { Component } from 'react';
import API from './api';
import './App.css';

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
			</div>
		);
	}
}
