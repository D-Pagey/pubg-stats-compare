export default class Stats {
    constructor(match) {
        if (!match) throw Error('Missing match data.');

        this.match = match;
    }

    getTeamByPlayerName = (playerName) =>
        this.match.relationships.rosters.find((roster) =>
            roster.relationships.participants.find((participant) =>
                participant.attributes.stats.name === playerName));

    getTeamStats = (playerName) =>
        this.getTeamByPlayerName(playerName).relationships.participants.map((participant) =>
            participant.attributes.stats);

    getTeamKdr = (playerName) =>
        this.getTeamStats(playerName).map(({ name, kills, deathType }) => ({
            name,
            kdr: deathType !== 'alive' ? kills / 1 : kills
        }));
}
