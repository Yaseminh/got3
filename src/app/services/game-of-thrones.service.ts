import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import House from "../House";
import Person from "../Person";
import RandomQuote from "../RandomQuote";

@Injectable({
  providedIn: 'root'
})
export class GameOfThronesService {

  endpoint = environment.endpointApi;

  constructor(private http: HttpClient) { }

  listHouses(): Observable<House[]> {
    return this.http.get<House[]>(`${this.endpoint}/houses`);
  }

  getHouse(name: String): Observable<House> {
    return this.http.get<House>(`${this.endpoint}/house/${name}`);
  }

  listPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.endpoint}/characters`);
  }

  getPerson(name: String): Observable<Person> {
    return this.http.get<Person>(`${this.endpoint}/character/${name}`);
  }

  getRandomQuotes(): Observable<RandomQuote[]> {
    return this.http.get<RandomQuote[]>(`${this.endpoint}/random/5`);
  }
  getQuoteOfCharacter(name: String): Observable<RandomQuote[]> {
    return this.http.get<RandomQuote[]>(`${this.endpoint}/author/${name}/2`);
  }
}
