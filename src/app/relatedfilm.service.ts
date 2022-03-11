import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class RelatedfilmService {

  readonly ROOT_URL = 'https://swapi.dev/api/films/';

  constructor(private http: HttpClient) {}

  getMovie(id: any): Observable<IMovie>{
    return  this.http.get<IMovie>(this.ROOT_URL + id);
    
  }
}
