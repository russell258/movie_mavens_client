import { createReducer, on } from "@ngrx/store";

import { MovieModel } from "../movies/movie/movie-model";
import { MoviesApiActions } from "./write.actions";


export const initialState: ReadonlyArray<MovieModel> = [];

export const moviesReducer =createReducer(
  initialState,
  on(MoviesApiActions.retrievedMoviesList, (_state, {movies}) => movies)
)
