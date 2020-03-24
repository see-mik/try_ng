import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';


const routes: Routes = [
  // {path: '', redirectTo: 'customers', pathMatch: 'full'},
  {path: '', component: HomeComponent},
  {path: 'admin', component: ControlPanelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
