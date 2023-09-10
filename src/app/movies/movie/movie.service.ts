import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ResultsEntity } from './movie-model';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movieData = new BehaviorSubject<any>({});

  passMovie$ = new Subject<any>();

  passMovieData: Subject<ResultsEntity>;
  receiveMovieData: Array<ResultsEntity>;

  // url : string = 'https://api.themoviedb.org/3';
  constructor(private http: HttpClient) {
    this.passMovieData = new Subject<ResultsEntity>(),
    this.receiveMovieData = new Array<ResultsEntity>();
  }

  //Observable sources
  // private passMovieDataSource = new Subject<any>();

  //Observable stream
  // passMovieData$ =this.passMovieDataSource.asObservable();

  getMoviesThreePaths(firstPath: string, secondPath: string, thirdPath: string): Observable<any>{
    return this.http.get<any>(`/api/home/${firstPath}/${secondPath}/${thirdPath}`);
  }

  getMoviesTwoPaths(firstPath:string, secondPath: string):Observable<any>{
    return this.http.get<any>(`/api/home/${firstPath}/${secondPath}`);
  }

}
