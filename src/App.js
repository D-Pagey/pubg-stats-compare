import React, { Component } from 'react';
import API from './api';
import './App.css';

export default class App extends Component {
	state = {}
	api = new API()
	
	componentDidMount() {
		this.api.getPlayer('r4g3d').then((data) => {
			this.api.getMatch(data.relationships.matches.data[0].id)
				.then((data) => console.log(data));
				
			this.setState({ apiData: data });
		});
	}

	render() {
		const { apiData } = this.state;

		return (
			<div>
				<h1>PUBG Stats Compare</h1>
				<pre>{JSON.stringify(apiData, null, 4)}</pre>
			</div>
		);
	}
}
