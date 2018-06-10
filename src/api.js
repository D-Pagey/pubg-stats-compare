const API_TOKEN = process.env.API_TOKEN;
const API_URL = 'https://api.playbattlegrounds.com/shards/';

export default class API {
    constructor(apiPlatform = 'pc-eu') {
        this.apiPlatform = apiPlatform;
    }

    async makeRequest(uri) {
        const requestUrl = `${API_URL}${this.apiPlatform}/${uri}`;

        await fetch(requestUrl, {
            headers: {
                accept: 'application/vnd.api+json',
                authorization: `Bearer ${API_TOKEN}`
            }
        }).then((response) => response.json());
    }

    getPlayer(playerName) {
        return this.makeRequest(`players?filter[playerNames]=${playerName}`);
    }

    getMatch(matchId) {
        return this.makeRequest(`matches/${matchId}`);
    }
}