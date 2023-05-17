import packageJson from '../../package.json';

export const environment = {
  appVersion: packageJson.version + '-dev',

  production: false,
  baseUrl: 'https://gamifyapi.theproindia.com',
  blobEndpoint: 'https://prodgamificationui.blob.core.windows.net',
  containerName: 'sandbox-assets',
  clientId: 'e7742fd0-da06-47ba-a6e8-96936cc7cbf9',
  clientSecret: 'MGYzNTkyYzktMDU1MS00N2IzLWE4ZjEtMDQ3Mjg4ZTNmMjE5',
  gamification: {
    userId: 'a0012e4d-83ef-4c05-9464-dd5e8f3cc649',
    gameId: '6462467bd524285dc1ff1291',
    applicationId: '6462449bd524281bcbff1272',
  },
};
