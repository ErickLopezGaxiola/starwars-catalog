import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from '../movie';
import { RelatedfilmService } from '../relatedfilm.service';

@Component({
  selector: 'app-relatedfilms',
  templateUrl: './relatedfilms.component.html',
  styleUrls: ['./relatedfilms.component.scss']
})
export class RelatedfilmsComponent implements OnInit {

  @Input() relatedfilms?: any;
  relatedfilmsId?: string;
  // movies?: any;

  movies: any[] = [];


  constructor(private relatedfilmService: RelatedfilmService) { }

  ngOnInit(): void {
    this.getRelatedFilms();
  }
  getRelatedFilms() {
    this.relatedfilms.map((url: string) => {
      this.relatedfilmsId = url.split('/')[5];
      this.relatedfilmService.getMovie(this.relatedfilmsId)
      .subscribe(data => {
        this.movies.push(data)
      })
    })
  }
}
