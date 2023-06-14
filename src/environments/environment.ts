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
    userId: '964b4a74-bef5-4fd8-abe3-c5a34468f8db',
    gameId: '648962ddad55c3f2c1b8678c',
    applicationId: '648962dcad55c30bb4b8677c',
  },
};
