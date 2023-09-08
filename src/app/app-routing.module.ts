import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './security/login/login.component';
import { RegistrationComponent } from './security/registration/registration.component';
import { ReviewComponent } from './reviews/review/review.component';
import { MovieComponent } from './movies/movie/movie.component';
import { WriteComponent } from './reviews/write/write.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegistrationComponent},
  { path: 'reviews', component: ReviewComponent},
  { path: 'home', component: MovieComponent},
  { path: 'write/:id', component: WriteComponent},
  // { path: '**', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
