import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class HomeworldService {

  readonly ROOT_URL = 'https://swapi.dev/api/planets/';

  constructor(private http: HttpClient) {}

  planet: any;

  getPlanet(id: any): Observable<IMovie>{
    this.planet =  this.http.get<IMovie>(this.ROOT_URL + id);
    return this.planet;
  }
}
