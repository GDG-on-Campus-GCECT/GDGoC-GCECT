// 1. Import the raw data directly from the JSON file you provided.
import rawData from "./data.json";

// 2. Process the raw data into the format our application needs.
const allParticipants = rawData.map((item, index) => {
  const skillBadges = Number(item["# of Skill Badges Completed"]) || 0;
  const arcadeGames = Number(item["# of Arcade Games Completed"]) || 0;

  return {
    id: index + 1,
    name: item["User Name"],
    email: item["User Email"],
    profileUrl: item["Google Cloud Skills Boost Profile URL"],
    profileUrlStatus: item["Profile URL Status"],
    accessCodeRedemptionStatus: item["Access Code Redemption Status"],
    allCompleted: item["All Skill Badges & Games Completed"],
    skillBadges: skillBadges,
    arcadeGames: arcadeGames,
    score: skillBadges + arcadeGames, // Calculate the total score
    completedSkillBadges: item["Names of Completed Skill Badges"],
    completedArcadeGames: item["Names of Completed Arcade Games"],
  };
});

/**
 * Gets a sorted list of all participants, with their correct rank assigned.
 * @returns {Array} A new, sorted array of participant objects with a 'rank' property.
 */
export const getSortedParticipants = () => {
  const sorted = [...allParticipants];
  // Sort by score in descending order
  sorted.sort((a, b) => b.score - a.score);

  // Add the correct rank to each participant object
  return sorted.map((participant, index) => ({
    ...participant,
    rank: index + 1,
  }));
};
