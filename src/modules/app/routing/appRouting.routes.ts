import { Routes } from '@angular/router';
import { LayoutContainer } from '../containers/layout/layout.container';

export const appRoutesTree: Routes = [
  { 
    path: '',
    component: LayoutContainer,
    pathMatch: 'full'
  }
];
