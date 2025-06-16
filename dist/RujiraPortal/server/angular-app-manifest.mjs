
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/RujiraPortal/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/RujiraPortal"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 888, hash: '07f13407d04dcb6db3c54058b043c2f4f918172d55c14b8fe3d8efa0c58c0c77', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1040, hash: '5749784b6acf6490d843afdacc4b28233db5d51c610b387ad6a65a2a5d5eb78d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4336, hash: 'd445597541a8d751f78403ba2a1f5a41ee9536ef3be98d1b60bc63242752f640', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-EB72GPVZ.css': {size: 332, hash: 'CbVTQ63nU4A', text: () => import('./assets-chunks/styles-EB72GPVZ_css.mjs').then(m => m.default)}
  },
};
