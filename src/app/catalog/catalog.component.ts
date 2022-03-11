import { Component, OnInit } from '@angular/core';
import { IMovie } from '../movie';
import { MoviesService } from '../movies.service';
import { IResults } from '../results';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  movies?: any;
  episodeOrder: boolean = false;
  releaseOrder: boolean = false;
  episodeArrow = '▼';
  releaseArrow = '▼';

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.getCatalog();
  }

  getCatalog(){
    this.moviesService.getCatalog()
    .subscribe((data) => {
      this.movies = data.results;
    });
  }

  sortByEpisode(){
    if (this.episodeOrder){
      this.movies = this.movies.sort((a: IMovie, b: IMovie) => {
        this.episodeArrow = '▼'
        return b.episode_id - a.episode_id});
    } else {
      this.movies = this.movies.sort((a: IMovie, b: IMovie) => {
        this.episodeArrow = '▲'
        return a.episode_id - b.episode_id});
    }
    this.episodeOrder = !this.episodeOrder;
  }

  sortByReleaseDate(){
    if (this.releaseOrder){
      this.movies = this.movies.sort((a: IMovie, b: IMovie) => {
        this.releaseArrow = '▼'
        return b.release_date.split('-')[0] - a.release_date.split('-')[0]
      });
    } else {
      this.movies = this.movies.sort((a: IMovie, b: IMovie) => {
        this.releaseArrow = '▲'
        return a.release_date.split('-')[0] - b.release_date.split('-')[0]
      });
    }
    this.releaseOrder = !this.releaseOrder;
  }

}
