import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMovie } from './movie';
import { Observable } from 'rxjs';
import { IResults } from './results';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  readonly ROOT_URL = 'https://swapi.dev/api/films/';

  constructor(private http: HttpClient) {}

  movies: any;



  getCatalog() {
    return this.http.get<IResults>(this.ROOT_URL);
  }

  getMovies(): Observable<IMovie>{
    return  this.http.get<IMovie>(this.ROOT_URL);
  }
}
