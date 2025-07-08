export const API_URL =
  "https://api.sportsdata.io/v4/soccer/scores/json/Standings/15/";

export function TABELA(ano: string) {
  return {
    url: API_URL + ano + process.env.JWT_SOCCER,
  };
}
