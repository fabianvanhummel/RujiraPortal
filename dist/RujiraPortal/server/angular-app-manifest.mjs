
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/RujiraPortal/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/RujiraPortal"
  },
  {
    "renderMode": 2,
    "route": "/RujiraPortal/omniverse"
  },
  {
    "renderMode": 2,
    "route": "/RujiraPortal/nexus"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 698, hash: '64ba2c2d71da50374216a627f16dd0513dfac05829a387a7bbf330fc05dabe3a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1013, hash: '2e03be7a5459dc0577e95249cd9cc59817b77a0be5862e12fd1334692467f432', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4312, hash: 'e9eafdf89c329fe289ee1cbf05b61f8ffba2d0f7547cadec7adcca9bea54e6a9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'omniverse/index.html': {size: 2781, hash: 'b7f929d2a367bdc6674161aeb8aa14c1517ca2fa81a1f9f093fac8d7f4950be8', text: () => import('./assets-chunks/omniverse_index_html.mjs').then(m => m.default)},
    'nexus/index.html': {size: 4699, hash: 'fe99d11353a722e751b8a8d18dc6e89e46b08f730b54491bd13bc3350a0afdd4', text: () => import('./assets-chunks/nexus_index_html.mjs').then(m => m.default)},
    'styles-Y3DPKQ3E.css': {size: 152, hash: 'IycOuFiVbKg', text: () => import('./assets-chunks/styles-Y3DPKQ3E_css.mjs').then(m => m.default)}
  },
};
