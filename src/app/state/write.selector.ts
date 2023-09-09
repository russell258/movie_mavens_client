import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MovieModel } from "../movies/movie/movie-model";

export const selectMovies=createFeatureSelector<ReadonlyArray<MovieModel>>('movies');

export const selectMoviesSelector = createSelector(
  selectMovies,
  (movies) =>{
    return movies;
  }
)
