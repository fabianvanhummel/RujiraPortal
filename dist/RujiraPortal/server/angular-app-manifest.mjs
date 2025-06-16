
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://fabianvanhummel93.github.io/RujiraPortal/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/RujiraPortal"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 916, hash: 'aaa3562dc880ab76b98852737caea30715edfc200bdef70c87697d3cdeba632e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1075, hash: '7d31933b91273433ac4fb19597f6899781af9c887b917ced73f4e20b0ab8ad5e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4329, hash: '95ddf34fc28950938c09999bcb3e35e72ceb0c07b357e64ebb585a4ef877de52', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-W5NXG6HB.css': {size: 325, hash: 'vxVaTFc9ndk', text: () => import('./assets-chunks/styles-W5NXG6HB_css.mjs').then(m => m.default)}
  },
};
