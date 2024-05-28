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


  // inject jokeservice

  // add a public property 'jokes' - referencing the jokeservice jokes behaviorsubject
 
  // add a new joke on button click - use the jokeservice
  addNewJoke() {
  }
  
}
