import { Subscription, BehaviorSubject } from 'rxjs';
import { Component } from '@angular/core';
import { SearchService } from './search.service';
import { MovieModel } from 'src/app/movies/movie/movie-model';
import { MovieService } from 'src/app/movies/movie/movie.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchInput !: string;
  searchList !: MovieModel;

  subSearchList !: Subscription;

  currentPage$ = new BehaviorSubject<number>(1);

  constructor(private searchSvc: SearchService, private movieSvc:MovieService){}

  ngOnInit():void{
    this.searchSvc.searchString.subscribe(
      data=>{
        this.searchInput=data;
        console.log(this.searchInput);
      })
    this.getMoviesFromSearch(this.searchInput);
    // currentPageData$ = this.currentPage$.pipe()
  }

  getMoviesFromSearch(searchInput:string){
    this.subSearchList= this.searchSvc.searchMovies(searchInput).subscribe({
      next:(v)=> {
        this.modifyBackdrop(v);
        this.searchList = v;
      },
      error: (e)=>console.error(e),
      complete:()=>console.log(this.searchList)
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

  writeReview(movie: any){
    this.movieSvc.movieData.next(movie);
  }


}
