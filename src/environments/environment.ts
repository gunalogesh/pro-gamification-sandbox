import packageJson from '../../package.json';

export const environment = {
  appVersion: packageJson.version,

  production: false,
  baseUrl: 'https://stage-gamificationapi.theproindia.com',
  blobEndpoint: 'https://stagegamificationui.blob.core.windows.net',
  containerName: 'sandbox-assets',
  clientId: '78509e9e-f180-4987-87bc-fa87338edd93',
  clientSecret: 'MDNjNmMxMTgtMzNiNC00NzA0LTllNzgtNTNlZDgwMTcyYjVl',
  //Paste your code in gamification object
  gamification: {
    userId: '6b40a8ec-6046-4fdf-8a07-9c5f8aba4e8a',
    gameId: '64c6645e7cb0ce6020901a71',
    applicationId: '64c6645b7cb0ce6020901a4e',
  },
};
