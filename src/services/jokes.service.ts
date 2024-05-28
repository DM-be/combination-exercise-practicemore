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

  private httpClient = inject(HttpClient);

  // add a subject containing jokes
  jokes = new BehaviorSubject<Joke []>([]);


  public async pushNewJoke(): Promise<void> {
    const jokes = this.jokes.value;
    jokes.push(await this.getNewJoke());
    this.jokes.next(jokes);
  }


  // get jokes with httpclient - use lastValueFrom() to convert an observable to a promise
  private async getNewJoke(): Promise<Joke> {
    return lastValueFrom(this.httpClient.get<Joke>(this.url))
  }





}
