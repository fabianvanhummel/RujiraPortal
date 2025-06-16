
export default {
  basePath: 'https://fabianvanhummel93.github.io/RujiraPortal',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
