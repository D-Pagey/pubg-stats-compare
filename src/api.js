import axios from 'axios';

const API_TOKEN = process.env.REACT_APP_API_TOKEN;
const API_URL = 'https://api.playbattlegrounds.com/shards/';

export default class API {
    constructor(apiPlatform = 'pc-eu') {
        this.request = axios.create({
            baseURL: `${API_URL}${apiPlatform}`,
            headers: {
                Accept: 'application/vnd.api+json',
                Authorization: `Bearer ${API_TOKEN}`
            }
        });
        
    }

    async makeRequest(uri) {
        return await this.request.get(uri)
            .then((reponse) => reponse.data.data)
            .catch((error) => console.log(error));
    }

    getPlayer(playerName) {
        return this.makeRequest(`players?filter[playerNames]=${playerName}`)
            .then((data) => data[0]);
    }

    getMatch(matchId) {
        return this.makeRequest(`matches/${matchId}`);
    }
}