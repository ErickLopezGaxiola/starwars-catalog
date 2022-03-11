import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from './movie';
import { IResults } from './results';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  readonly ROOT_URL = 'https://swapi.dev/api/films/';

  constructor(private http: HttpClient) {}

  movie: any;

  getMovie(id: any): Observable<IMovie>{
    this.movie =  this.http.get<IMovie>(this.ROOT_URL + id);
    return this.movie;
  }
}