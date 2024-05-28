import { Component } from '@angular/core';
import { JokeListComponent } from '../joke-list/joke-list.component';

@Component({
  selector: 'app-practisemore',
  standalone: true,
  imports: [JokeListComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {

}
