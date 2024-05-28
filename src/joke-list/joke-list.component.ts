import { Component, Inject, OnInit, inject } from '@angular/core';
import { JokesService } from '../services/jokes.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-joke-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './joke-list.component.html',
  styleUrl: './joke-list.component.css'
})
export class JokeListComponent {


  private jokeService = inject(JokesService)

  jokes = this.jokeService.jokes;


  addNewJoke() {
    this.jokeService.pushNewJoke();
  }
  
}
