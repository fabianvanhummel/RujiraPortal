
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
    'index.csr.html': {size: 875, hash: '73363e9efb154a11617d6cf1ad577a81403a7682a8d6b1777eb8c9ef7ce25b1b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: '9a76cc3dda9b5cdb4b8d2db7cea51342fb4a09c5c1535fd42c1a13fd5d2d1df2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4323, hash: 'e29e3e1dd585443bfc701df0ad542496bb2b15680a56f6f89f6a606229665b7b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-EB72GPVZ.css': {size: 332, hash: 'CbVTQ63nU4A', text: () => import('./assets-chunks/styles-EB72GPVZ_css.mjs').then(m => m.default)}
  },
};
