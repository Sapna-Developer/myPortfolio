import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReachComponent } from './reach/reach.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'reach', component: ReachComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
