import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ResultsEntity } from './movie-model';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movieData = new BehaviorSubject<any>({});

  // url : string = 'https://api.themoviedb.org/3';
  constructor(private http: HttpClient) {
  }

  getMoviesThreePaths(firstPath: string, secondPath: string, thirdPath: string): Observable<any>{
    return this.http.get<any>(`/api/movies/${firstPath}/${secondPath}/${thirdPath}`);
  }

  getMoviesTwoPaths(firstPath:string, secondPath: string):Observable<any>{
    return this.http.get<any>(`/api/movies/${firstPath}/${secondPath}`);
  }

}
