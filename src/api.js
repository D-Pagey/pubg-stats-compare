import pubg from 'pubg.js';

const API_TOKEN = process.env.REACT_APP_API_TOKEN;

export default class Api {
    constructor(platform = 'pc-eu') {
        this.client = new pubg.Client(API_TOKEN, platform);
    }

    async fetchLatestMatch(playerName) {
        const player = await this.client.getPlayer({ name: playerName });
        return await this.client.getMatch(player.relationships.matches[0].id);
    };
}
