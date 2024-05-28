import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { Joke } from '../models/joke';

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  // we are going to be using https://jokeapi.dev/ as an api
  // https://v2.jokeapi.dev/joke/Programming?type=single

  private url = 'https://v2.jokeapi.dev/joke/Programming?type=single';

  // inject httpclient

  // add a behaviorsubject containing jokes

  // implement pushing of new joke to jokes subject
  public pushNewJoke() {
  }


  // get jokes with httpclient - use lastValueFrom() to convert an observable to a promise
  private getNewJoke(){
  }

}
