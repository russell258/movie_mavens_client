import { MovieService } from './../../movies/movie/movie.service';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ResultsEntity } from 'src/app/movies/movie/movie-model';
import { WriteService } from './write.service';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit{

  @ViewChild('imageInput')
  imageInput!: ElementRef;

  movie: ResultsEntity;
  reviewForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private movieSvc: MovieService, private writeSvc: WriteService){
    this.movie = {};
  }

  ngOnInit():void{
    this.movieSvc.movieData.subscribe(
      data =>{
      console.log("behaviour subject working");
      this.movie = data;
      console.log(this.movie);
    })
    // this.reviewForm;
    this.reviewForm = this.fb.group({
      movieId: this.fb.control<number>(this.movie.id!),
      title: this.fb.control<string>(this.movie.title!),
      releaseDate: this.fb.control<Date>(new Date(this.movie.release_date!)),
      overview: this.fb.control<string>(this.movie.overview!),
      rating: this.fb.control<number>(0,[Validators.required,Validators.min(0),Validators.max(10)]),
      average_rating: this.fb.control<number>(this.movie.vote_average!),
      review: this.fb.control<string>('',[Validators.required,Validators.minLength(5),Validators.maxLength(33000)]),
      photo: this.fb.control(null)
    })
  }

  //display the movie info below form later
  // vote_average (rating), release_date, original_language

  reviewSubmit(){
    const formData = new FormData();
    formData.set('movieId', this.reviewForm.value.movieId);
    formData.set('title', this.reviewForm.value.title);
    formData.set('releaseDate', this.reviewForm.value.releaseDate);
    formData.set('overview', this.reviewForm.value.overview);
    formData.set('rating', this.reviewForm.value.rating);
    formData.set('average_rating', this.reviewForm.value.average_rating);
    formData.set('review', this.reviewForm.value.review);
    formData.set('photo', this.imageInput.nativeElement.files[0]);

    this.writeSvc.postReviewToSpringBoot(formData).subscribe(data =>{
      let jsonObj = JSON.stringify(data);
      //check on this movieId, might return the review ID instead depending on the SQL table
      if (JSON.parse(jsonObj)['movieId'].length<=0){
        alert(`Failed to post review. Error: ${JSON.parse(jsonObj)['error']}`)
      }else{
        alert(`Successfully posted review. Movie ID: ${JSON.parse(jsonObj)['movieId']}`);
        this.router.navigate(['/reviews']);
      }
    })
  }

}
