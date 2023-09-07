import { Component } from '@angular/core';
import { MovieService } from './movie.service';
import { MovieModel } from './movie-model';
import { environment } from 'src/environments/environment.development';

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
  upcomingMovies !: MovieModel;
  trendingMovies !: MovieModel;
  moviesList: any;

  constructor(private movieSvc: MovieService){}

  ngOnInit():void{
    this.getLatestMovies();
    this.getPopularMovies();
    this.getNowPlayingMovie();
    this.getTopRatedMovies();
    this.getUpcomingMovies();
    this.getThisWeekTrendingMovies();
    this.getMoviesList();
  }

  getLatestMovies(){
    this.movieSvc.getLatestMovies().subscribe({
      next: (v) => this.latestMovie = v,
      error: (e) => console.error(e),
      complete: ()=> console.info('Get Latest Movies complete.')
      });
    }

  getPopularMovies(){
    this.movieSvc.getPopularMovies().subscribe({
      next: (v) => this.popularMovies = v,
      error: (e) => console.error(e),
      complete:()=> console.info('Get Popular Movies complete.')
    });
  }

  getNowPlayingMovie(){
    this.movieSvc.getNowPlayingMovie().subscribe({
      next: (v) => this.playingNow = v,
      error: (e) => console.error(e),
      complete:() => console.info('Get Movie Playing Now complete.')
    });
  }

  getTopRatedMovies(){
    this.movieSvc.getTopRatedMovies().subscribe({
      next: (v) => this.topRatedMovies = v,
      error: (e) => console.error(e),
      complete:() => console.info('Get Top Rated Movies complete.')
    });
  }

  getUpcomingMovies(){
    this.movieSvc.getUpcomingMovies().subscribe({
      next: (v) => this.upcomingMovies = v,
      error: (e) => console.error(e),
      complete:() => console.info('Get Upcoming Movies complete.')
    });
  }

  getThisWeekTrendingMovies(){
    this.movieSvc.getThisWeekTrendingMovies().subscribe({
      next: (v) => this.trendingMovies = v,
      error: (e) => console.error(e),
      complete:() => console.info('Get Trending Movies complete.')
    });
  }

  getMoviesList(){
    this.movieSvc.getMoviesList().subscribe({
      next: (v) => this.moviesList = v,
      error: (e) => console.error(e),
      complete:() => console.info('Get Movies List complete.')
    });
  }

  modifyBackdrop(movie : MovieModel): MovieModel{
    if (movie.results){
      movie.results.forEach( m => {
        m.backdrop_path = 'https://image.tmdb.org/t/p/original' + m.backdrop_path + 'api_key?' + environment.api_key;
        if (!m.title && m.name){
          m.title = m.name;
        }
      });

    }
    return movie;
  }

}
