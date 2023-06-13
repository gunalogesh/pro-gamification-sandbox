import packageJson from '../../package.json';

export const environment = {
  appVersion: packageJson.version,

  production: false,
  baseUrl: 'https://stage-gamificationapi.theproindia.com',
  blobEndpoint: 'https://stagegamificationui.blob.core.windows.net',
  containerName: 'sandbox-assets',
  clientId: '887ddc99-b193-43ad-aa42-31510be0f9de',
  clientSecret: 'MWUyNWY4MDMtOWE1Zi00Y2E2LTlhYjAtYThkYTA3YjNhOWZi',
  //Paste your code in gamification object
  gamification: {
    userId: '06ba5757-d655-4716-b719-ecc069a6ccce',
    gameId: '64294f559d6bdc2368a24a29',
    applicationId: '64294f559d6bdcf518a24a22',
  },
};
