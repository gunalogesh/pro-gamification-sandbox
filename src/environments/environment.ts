import packageJson from '../../package.json';

export const environment = {
  appVersion: packageJson.version,

  production: false,
  baseUrl: 'https://stage-gamificationapi.theproindia.com',
  blobEndpoint: 'https://stagegamificationui.blob.core.windows.net',
  containerName: 'sandbox-assets',
  clientId: '6d3834d1-93e8-4533-91fd-f9cb50a88d2e',
  clientSecret: 'i8v8Q~l9l0B8WLYcbE4Ye_Xhn4CGs0.qYaGEkaGG',
  //Paste your code in gamification object
  gamification: {
    userId: '6b40a8ec-6046-4fdf-8a07-9c5f8aba4e8a',
    gameId: '64c6645e7cb0ce6020901a71',
    applicationId: '64c6645b7cb0ce6020901a4e',
  },
};
