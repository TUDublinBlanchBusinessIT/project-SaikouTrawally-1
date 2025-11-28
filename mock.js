export const fetchLiveMatches = async () => {
  try {
    // Simulated mock response
    return [
      {
        id: "m1",
        sport: "football",
        home: "Man Utd",
        away: "Real Madrid",
        homeScore: 2,
        awayScore: 2,
        minute: 72,
      },
      {
        id: "m2",
        sport: "basketball",
        home: "Lakers",
        away: "Heat",
        homeScore: 88,
        awayScore: 92,
        minute: 34,
      },
    ];
  } catch (error) {
    console.error("❌ Failed to fetch live matches:", error);
    return []; // Return empty array so HomeScreen doesn't crash
  }
};

export const fetchMatchById = async (id) => {
  try {
    return {
      id,
      home: "Man Utd",
      away: "Real Madrid",
      homeScore: 2,
      awayScore: 2,
      minute: 72,
      events: [
        { minute: 12, type: "goal", player: "Ronaldo" },
        { minute: 55, type: "yellow", player: "Casemiro" },
      ],
    };
  } catch (error) {
    console.error("❌ Failed to fetch match details:", error);
    return null;
  }
};

export const fetchTrendingClips = async () => {
  try {
    return [
      {
        id: "c1",
        matchId: "m1",
        title: "Insane Free Kick!",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        duration: 12,
      },
      {
        id: "c2",
        matchId: "m1",
        title: "Last-Minute Equalizer!",
        url: "https://www.youtube.com/watch?v=ub82Xb1C8os",
        duration: 10,
      },
    ];
  } catch (error) {
    console.error("❌ Failed to fetch trending clips:", error);
    return [];
  }
};