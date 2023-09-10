import { MovieService } from './../../movies/movie/movie.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ResultsEntity } from 'src/app/movies/movie/movie-model';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit{



  receiveMovieDataSubscription: Subscription;
  movie: Array<ResultsEntity>;

  constructor(private fb: FormBuilder, private router: Router, private movieSvc: MovieService){
    this.receiveMovieDataSubscription = new Subscription();
    this.movie = new Array<ResultsEntity>();
  }

  ngOnInit():void{
    this.movieSvc.movieData.subscribe(
      data =>{
      console.log("behaviour subject working");
      console.log(data);
    })
    this.reviewForm;
  }

  //display the movie info below form later
  // vote_average, release_date, original_language

  reviewForm: FormGroup = this.fb.group({
    title: this.fb.control<string>('',[Validators.required]),
    rating: this.fb.control<number>(0,[Validators.required,Validators.min(0),Validators.max(10)]),
    review: this.fb.control<string>('',[Validators.required,Validators.minLength(5),Validators.maxLength(33000)])
  })


  reviewSubmit(){
    console.log("submit");
    console.log(this.movie);
  }

}
