import { Routes } from '@angular/router';
import { LayoutComponent } from '../components/layout/layout.component';

export const appRoutesTree: Routes = [
  { 
    path: '',
    component: LayoutComponent,
    pathMatch: 'full'
  }
];
