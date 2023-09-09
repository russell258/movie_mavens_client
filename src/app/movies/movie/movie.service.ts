import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieService {


  // url : string = 'https://api.themoviedb.org/3';
  constructor(private http: HttpClient) { }

  //Observable sources
  private passMovieDataSource = new Subject<any>();

  //Observable stream
  passMovieData$ =this.passMovieDataSource.asObservable();

  getMoviesThreePaths(firstPath: string, secondPath: string, thirdPath: string): Observable<any>{
    return this.http.get<any>(`/api/home/${firstPath}/${secondPath}/${thirdPath}`);
  }

  getMoviesTwoPaths(firstPath:string, secondPath: string):Observable<any>{
    return this.http.get<any>(`/api/home/${firstPath}/${secondPath}`);
  }

}
