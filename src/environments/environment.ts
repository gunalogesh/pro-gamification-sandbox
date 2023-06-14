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
    userId: '5c7e0e6d-b379-4f5d-a0bd-6a9210b69078',
    gameId: '64894a340c6b3d6d0a4aca6c',
    applicationId: '64894a330c6b3d943b4aca64',
  },
};
