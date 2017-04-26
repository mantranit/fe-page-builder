import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }     from './components/dashboard.component';
import { RowsComponent }           from './components/rows.component';
import { WidgetsComponent }       from './components/widgets.component';
import { WidgetDetailComponent }  from './components/widget-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/rows', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'rows',  component: RowsComponent},
  { path: 'widget/:id', component: WidgetDetailComponent },
  { path: 'widgets',     component: WidgetsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
