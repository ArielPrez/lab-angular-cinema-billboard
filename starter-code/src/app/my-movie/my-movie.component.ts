import { MoviesService } from './../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {

  movie: Object;
  idVar: Number;

  constructor(private movieDetails: MoviesService, private routeAct: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.routeAct.params.subscribe((params) => this.idVar = Number( params['id']));
    this.movie = this.movieDetails.getMovie(this.idVar);
  }
  goHome(){
    this.router.navigate(['home']);
  }
}
