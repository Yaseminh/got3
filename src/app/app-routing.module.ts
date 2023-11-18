import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HouseListComponent, PersonListComponent, HouseDetailComponent, ListQuotesComponent} from './books';
import {PersonDetailComponent} from "./books/person-detail/person-detail.component";

const routes: Routes = [

  { path: 'houselist', component: HouseListComponent },
  { path: 'personlist', component: PersonListComponent },
  { path: 'person/:slug', component: PersonDetailComponent },
  { path: 'quotelist', component: ListQuotesComponent },
  { path: '', redirectTo: '/houselist', pathMatch: 'full' },
  { path: 'hero/:slug', redirectTo: '/house/:slug' },
  { path: 'house/:slug', component: HouseDetailComponent },
  { path: 'superheroes',  component: HouseListComponent },
  { path: 'personheroes',  component: PersonListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
