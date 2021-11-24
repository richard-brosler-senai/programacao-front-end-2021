import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './view/contato/contato.component';
import { HomeComponent } from './view/home/home.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "contato", component:ContatoComponent},
  { path: "", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
