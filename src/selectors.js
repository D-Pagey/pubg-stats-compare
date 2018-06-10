const getTeamByPlayerName = (match, playerName) =>
    match.relationships.rosters.find((roster) =>
        roster.relationships.participants.find((participant) =>
            participant.attributes.stats.name === playerName));

export const getTeamStats = (match, playerName) =>
    getTeamByPlayerName(match, playerName).relationships.participants.map((participant) =>
        participant.attributes.stats);

export const getTeamKdr = (match, playerName) =>
    getTeamStats(match, playerName).map(({ name, kills, deathType }) => ({
        name,
        kdr: deathType !== 'alive' ? kills / 1 : kills
    }));