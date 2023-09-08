import { Component } from '@angular/core';
import { MovieService } from './movie.service';
import { MovieModel } from './movie-model';
import { environment } from 'src/environments/environment.development';
import { Subscription } from 'rxjs';

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

  subLatestMovie! : Subscription;
  subPopularMovies! : Subscription;
  subPlayingNow !: Subscription;
  subTopRatedMovies !: Subscription;
  subUpcomingMovies!: Subscription;
  subTrendingMovies!: Subscription;
  subMoviesList!:Subscription;

  constructor(private movieSvc: MovieService){}

  ngOnInit():void{
    // this.getLatestMovies();
    this.getPopularMovies();
    this.getNowPlayingMovie();
    this.getTopRatedMovies();
    this.getUpcomingMovies();
    this.getThisWeekTrendingMovies();
    this.getMoviesList();
  }

  //comment this out first too problematic
  // getLatestMovies(){
  //   this.subLatestMovie=
  //   this.movieSvc.getLatestMovies().subscribe({
  //     next: (v) => {
  //       this.changeBackdrop(v);
  //       this.latestMovie = v;
  //     },
  //     error: (e) => console.error(e),
  //     complete: ()=> {
  //       console.log(this.latestMovie);
  //     }
  //     });
  //   }

  getPopularMovies(){
    this.subLatestMovie=
    this.movieSvc.getPopularMovies().subscribe({
      next: (v) => {
        this.modifyBackdrop(v)
        this.popularMovies = v
      },
      error: (e) => console.error(e),
      complete:()=> {
        console.log(this.popularMovies);
      }
    });
  }

  getNowPlayingMovie(){
    this.subPlayingNow=
    this.movieSvc.getNowPlayingMovie().subscribe({
      next: (v) => {
        this.modifyBackdrop(v);
        this.playingNow = v
      },
      error: (e) => console.error(e),
      complete:() => console.log(this.playingNow)
    });
  }

  getTopRatedMovies(){
    this.subTopRatedMovies=
    this.movieSvc.getTopRatedMovies().subscribe({
      next: (v) => {
        this.modifyBackdrop(v);
        this.topRatedMovies = v
      },
      error: (e) => console.error(e),
      complete:() => console.log(this.topRatedMovies)
    });
  }

  getUpcomingMovies(){
    this.subUpcomingMovies=
    this.movieSvc.getUpcomingMovies().subscribe({
      next: (v) => {
        this.modifyBackdrop(v);
        this.upcomingMovies = v
      },
      error: (e) => console.error(e),
      complete:() => console.log(this.upcomingMovies)
    });
  }

  getThisWeekTrendingMovies(){
    this.subTrendingMovies=
    this.movieSvc.getThisWeekTrendingMovies().subscribe({
      next: (v) => {
        this.modifyBackdrop(v);
        this.trendingMovies = v
      },
      error: (e) => console.error(e),
      complete:() => console.log(this.trendingMovies)
    });
  }

  getMoviesList(){
    this.subMoviesList=
    this.movieSvc.getMoviesList().subscribe({
      next: (v) => this.moviesList = v,
      error: (e) => console.error(e),
      complete:() => console.log(this.moviesList)
    });
  }

  modifyBackdrop(movie : MovieModel): MovieModel{
    if (movie.results){
      movie.results.forEach( m => {
        m.backdrop_path = 'https://image.tmdb.org/t/p/original' + m.backdrop_path + '?api_key=' + environment.api_key;
        if (!m.title && m.name){
          m.title = m.name;
        }
      });

    }
    return movie;
  }

  changeBackdrop(v: any) {
    if (v.backdrop_path==null){
      v.backdrop_path = 'https://image.tmdb.org/t/p/original' + v.poster_path + '?api_key=' + environment.api_key;
    }else{
      v.backdrop_path = 'https://image.tmdb.org/t/p/original' + v.backdrop_path + '?api_key=' + environment.api_key;
    }
  }

}


