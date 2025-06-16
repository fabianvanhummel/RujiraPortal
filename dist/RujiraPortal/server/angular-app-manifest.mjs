
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
    'index.csr.html': {size: 875, hash: 'c71c51bbc913c5b351f8bcf436c13599cf6d3f18c886b6db455ddd5ec65fdaa6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: '4f1e2a8b041e65d54797147ee7875a4fbc5ecc1e752fb13b6c8d0697c9bf2602', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4316, hash: '3592eac05881afe124e9111af32bd7afacc15fa361cf693ac2097b1fb0a62bc3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-EB72GPVZ.css': {size: 332, hash: 'CbVTQ63nU4A', text: () => import('./assets-chunks/styles-EB72GPVZ_css.mjs').then(m => m.default)}
  },
};
