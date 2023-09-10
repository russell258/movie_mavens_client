import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WriteService {

  constructor(private http: HttpClient) { }

  postReviewToSpringBoot(formData: FormData){
    return this.http.post<string>('/api/receivereview',formData,{responseType: 'json'});
  }

}
