import { config } from "~config/index";

export async function getGames() {
  const res = await fetch(config.cmsApi.baseUrl + '/games', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
}

