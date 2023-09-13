import { Component } from '@angular/core';
import { ReviewService } from './review.service';
import { Subscription } from 'rxjs';
import { MovieModel } from 'src/app/movies/movie/movie-model';
import { reviewedMovie } from './review-model';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {

  constructor(private reviewSvc: ReviewService){}

  reviewsList: reviewedMovie[];

  subReviewsList !: Subscription;

  ngOnInit():void{
    this.getReviewsList();
  }

  getReviewsList(){
    this.subReviewsList = this.reviewSvc.getAllReviews().subscribe({
      next: (data)=>{
        this.reviewsList=data;
        console.log(this.reviewsList);
      }
    });
  }

}
