import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICharacter } from './character';
import { IMovie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) {}

  readonly ROOT_URL = 'https://swapi.dev/api/people/';

  getCharacterName(url: string){
    return this.http.get<ICharacter>(url);
  }

  getCharacter(id: string){
    return this.http.get<ICharacter>(this.ROOT_URL + id);
  }

}
