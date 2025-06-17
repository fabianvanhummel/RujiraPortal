import { Routes } from '@angular/router';
import { Portal } from './components/portal/portal';
import { Nexus } from './components/nexus/nexus';
import { Overworld } from './components/overworld/overworld';

export const routes: Routes = [
  { path: '', component: Portal },
  { path: 'omniverse', component: Overworld },
  { path: 'nexus', component: Nexus },
];
