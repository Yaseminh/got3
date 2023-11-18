import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { GameOfThronesService } from './services';
import {ListQuotesComponent, HouseListComponent, PersonListComponent, HouseDetailComponent, SearchNamePipe} from './books';
import {PersonDetailComponent} from "./books/person-detail/person-detail.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    ListQuotesComponent,
    HouseListComponent,
    PersonListComponent,
    HouseDetailComponent,
    SearchNamePipe,
    PersonDetailComponent
  ],
  exports:[],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [GameOfThronesService],
  bootstrap: [AppComponent],
})
export class AppModule { }
