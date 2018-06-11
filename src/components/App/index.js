import React, { Component } from 'react';
import Api from '../../api';
import Stats from '../../stats';
import Chart from '../Chart';

export default class App extends Component {
	state = {
		playerName: 'r4g3d',
		chartData: null,
	}

	api = new Api()

	componentDidMount() {
		this.fetchChartData();
	}

	async fetchChartData() {
		const { playerName } = this.state;
		const match = await this.api.fetchLatestMatch(playerName);
		const teamDamagePercent = new Stats(match).getTeamDamagePercent(playerName);

		this.setState({ chartData: teamDamagePercent });
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
