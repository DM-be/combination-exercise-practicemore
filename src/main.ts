import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [AppComponent],
  standalone: true,
  template: `
    <app-practisemore>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [provideHttpClient()]
});
