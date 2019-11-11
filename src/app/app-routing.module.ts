import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCardComponent } from './pages/create-card/create-card.component';


const routes: Routes = [
  {
  path: '',
  pathMatch: 'full',
  component: CreateCardComponent
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
