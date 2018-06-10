import React, { Component } from 'react';
import { getLatestMatch } from './api';
import './App.css';
import Chart from './components/Chart';

export default class App extends Component {
	state = {
		playerName: 'r4g3d',
		chartData: null,
	}

	componentDidMount() {
		this.requestChartData();
	}

	async requestChartData() {
		const { playerName } = this.state;
		const chartData = await getLatestMatch(playerName);
		
		this.setState({ chartData });
	}

	render() {
		const { chartData } = this.state;

		return (
			<div>
				<h1>PUBG Stats Compare</h1>
				<pre>{JSON.stringify(chartData, null, 4)}</pre>

				<Chart 
					data={[0.90, 1.1, 1.5]} 
					size={[500, 500]}
					padding={30} 
				/>
			</div>
		);
	}
}
