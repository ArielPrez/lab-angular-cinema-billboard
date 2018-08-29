import { MoviesService } from './../services/movies.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {

  constructor(private moviesList: MoviesService) { }

  movies: Object[] = this.moviesList.getMovies();


  ngOnInit() {
  }

}
