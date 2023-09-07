import { Component } from '@angular/core';
import { MovieService } from './movie.service';
import { MovieModel } from './movie-model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {

  latestMovie: any;
  popularMovies !: MovieModel;
  playingNow !: MovieModel;
  topRatedMovies !: MovieModel;
  upComingMovies !: MovieModel;
  trendingMovies !: MovieModel;

  constructor(private movieSvc: MovieService){}

  getLatestMovies(){
    this.movieSvc.getLatestMovies().subscribe({
      next: (v) => this.latestMovie = v,
      error: (e) => console.error(e),
      complete: ()=> console.info('Get Latest Movies complete.')
      });
      // resp => {
      //   this.latestMovie = resp;
      // },
      // err => {
      //   console.log('Not able to get latest movie. ', err);
      // },
      // () => {
      //   console.log('Complete');
      // }
    }

  getPopularMovies(){
    this.movieSvc.getPopularMovies().subscribe({
      next: (v) => this.popularMovies = v,
      error: (e) => console.error(e),
      complete:()=> console.info('Get Popular Movies complete.')
    });
  }



}
