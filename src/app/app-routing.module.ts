import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LaunchProgramComponent } from './launch-program/launch-program.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  
  { path: 'home', component: LaunchProgramComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}