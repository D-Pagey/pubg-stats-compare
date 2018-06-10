import React, { Component } from 'react';
import API from './api';
import './App.css';

export default class App extends Component {
	state = {}
	api = new API(process.env.API_TOKEN)

	componentDidMount() {
		this.api.getPlayer('r4g3d').then((data) => {
			console.log(data);
		});
	}

	render() {
		return (
			<div>
				PUBG Stats Compare
			</div>
		);
	}
}
