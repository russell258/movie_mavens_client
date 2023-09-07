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
    return this.http.get<any>(this.url+ '/movie/latest?api_key='+environment.api_key);
  }

  getPopularMovies() : Observable<any> {
    return this.http.get<any>(this.url + '/movie/popular?api_key='+environment.api_key);
  }

  getNowPlayingMovie() : Observable<any> {
    return this.http.get<any>(this.url + '/movie/now_playing?api_key='+environment.api_key);
  }

  getTopRatedMovies() : Observable<any> {
    return this.http.get<any>(this.url + '/movie/top_rated?api_key='+environment.api_key);
  }

  getUpcomingMovies() : Observable<any> {
    return this.http.get<any>(this.url + '/movie/upcoming?api_key='+environment.api_key);
  }

  getThisWeekTrendingMovies() : Observable<any> {
    return this.http.get<any>(this.url + '/trending/movie/week?api_key='+environment.api_key);
  }

  getMoviesList(): Observable<any> {
    return this.http.get<any>(this.url + '/genre/movie/list?api_key='+environment.api_key);
  }

}
