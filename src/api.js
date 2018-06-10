import pubg from 'pubg.js';

const API_TOKEN = process.env.REACT_APP_API_TOKEN;
const API_PLATFORM = 'pc-eu';

const client = new pubg.Client(API_TOKEN, API_PLATFORM);

export const fetchLatestMatch = async (playerName) => {
    const player = await client.getPlayer({ name: playerName });
    return await client.getMatch(player.relationships.matches[0].id);
};
