import React, { Component } from 'react';
import { fetchLatestMatch } from '../../api';
import { getTeamKdr } from '../../selectors';
import Chart from '../Chart';

export default class App extends Component {
	state = {
		playerName: 'r4g3d',
		chartData: null,
	}

	componentDidMount() {
		this.fetchChartData();
	}

	async fetchChartData() {
		const { playerName } = this.state;
		const latestMatch = await fetchLatestMatch(playerName);
		const teamKdr = getTeamKdr(latestMatch, playerName);

		this.setState({ chartData: teamKdr });
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
