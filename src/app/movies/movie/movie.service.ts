import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url : string = 'https://api.themoviedb.org/3';
  constructor(private http: HttpClient) { }

  getLatestMovies() : Observable<any> {
    return this.http.get<any>(this.url+ JSON.stringify('/movie/latest?api_key='+environment.api_key));
  }

  getPopularMovies() : Observable<any> {
    return this.http.get<any>(this.url + JSON.stringify('/movie/popular?api_key'+environment.api_key));
  }

  getNowPlayingMovie() : Observable<any> {
    return this.http.get<any>(this.url + JSON.stringify('/movie/now_playing?api_key'+environment.api_key));
  }

  getTopRatedMovies() : Observable<any> {
    return this.http.get<any>(this.url + JSON.stringify('/movie/top_rated?api_key'+environment.api_key));
  }

  getUpcomingMovies() : Observable<any> {
    return this.http.get<any>(this.url + JSON.stringify('/movie/upcoming?api_key'+environment.api_key));
  }

  getThisWeekTrendingMovies() : Observable<any> {
    return this.http.get<any>(this.url + JSON.stringify('/trending/movie/week?api_key'+environment.api_key));
  }

  getMoviesList(): Observable<any> {
    return this.http.get<any>(this.url + JSON.stringify('/genre/movie/list?api_key'+environment.api_key));
  }

}
