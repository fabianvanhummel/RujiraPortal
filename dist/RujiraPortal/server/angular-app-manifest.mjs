
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 868, hash: 'e61824f762100bb8d1aaaaf17311d3f1465f69ab6da157d8535b313927b6c486', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: '14f88de32a6b8dcc623441d15afc52931f5a36b2c6b7515130fe318246d793cf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4281, hash: 'a430bf442267217241fc6f6a1f1b263e5da294c351fbc5a311191714ee0a2988', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-W5NXG6HB.css': {size: 325, hash: 'vxVaTFc9ndk', text: () => import('./assets-chunks/styles-W5NXG6HB_css.mjs').then(m => m.default)}
  },
};
