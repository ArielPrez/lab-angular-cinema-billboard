import { Injectable } from '@angular/core';
import { Moviez } from '../../sample-movies.js';

interface moviesInterface{
  id: number;
  title: string;
  poster: string; /* A URL of a poster image for the movie.*/
  synopsis: string;
  genres: string [];
  year: number;
  director: string;
  actors: string [];
  hours: string [];
  room: number;
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  movies: moviesInterface[] = Moviez;

  constructor() { }

  getMovies(){
    return this.movies;
  }
  getMovie(id){
    // this.movies.map(idElement => {
      // if(idElement.id === id){
      //   console.log('idElement: '+idElement)
      //   return idElement;
      // }

      // const tempIndex = this.movies.indexOf(idElement);
      // console.log('tempIndex: '+tempIndex);
      // return this.movies[tempIndex];
    // });
    // this.movies.filter((idElem) => {
    //   if(idElem === id){
    //     console.log(idElem);
    //     return idElem;
    //   }
    // });
    // Another way: \/
    return this.movies.find(element => element.id === id);

  }
}
