import packageJson from '../../package.json';

export const environment = {
  appVersion: packageJson.version,

  production: false,
  baseUrl: 'https://gamifyapi.theproindia.com',
  blobEndpoint: 'https://prodgamificationui.blob.core.windows.net',
  containerName: 'sandbox-assets',
  clientId: 'e7742fd0-da06-47ba-a6e8-96936cc7cbf9',
  clientSecret: 'MGYzNTkyYzktMDU1MS00N2IzLWE4ZjEtMDQ3Mjg4ZTNmMjE5',
  //Paste Your Application Code 
  gamification: {
    userId: 'c7a09cc4-76e0-492c-b969-cd5c7a069ed0',
    gameId: '648967f30c6b3d35b04b1c73',
    applicationId: '648967f30c6b3d1d0b4b1c67',
  },
};
