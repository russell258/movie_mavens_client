import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent {

  constructor(private fb: FormBuilder, private router: Router){}

  //display the movie info below form later
  // vote_average, release_date, original_language

  reviewForm: FormGroup = this.fb.group({
    title: this.fb.control<string>('',[Validators.required]),
    rating: this.fb.control<number>(0,[Validators.required,Validators.min(0),Validators.max(10)]),
    review: this.fb.control<string>('',[Validators.required,Validators.minLength(5),Validators.maxLength(33000)])
  })

  ngOninit():void{
    this.reviewForm;
  }

  reviewSubmit(){
    console.log("submit");
  }

}
