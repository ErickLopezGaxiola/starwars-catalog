import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ICharacter } from '../character';
import { CharacterService } from '../character.service';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  constructor(
    private movieService: MovieService,
    private characterService: CharacterService,
    private route: ActivatedRoute) { }

  movie: any;
  characters: ICharacter[] = [];
  breadcrumRoute: any[] = [];

  ngOnInit(): void {
    this.getMovie();
  }
  
  getMovie() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovie(id)
    .subscribe(data => {
      this.movie = data;
      this.getCharacterName();
    })
  }

  getCharacterName() {
    this.movie.characters.map((url: string) => {
      this.characterService.getCharacterName(url)
      .subscribe(data => {
        this.characters.push(data);
      });
    })
  }
}
