import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPassenger } from './components/passenger-add/passenger-add.component';
import { PassengerDashboardComponent } from './containers/passenger-dashboard.component';


const routes: Routes = [
  {path: '', redirectTo: '/passengers', pathMatch: 'full'},
  {path: 'passengers', component: PassengerDashboardComponent},
  {path: 'add-passenger', component: AddPassenger},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
