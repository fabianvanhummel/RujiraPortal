import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Splashscreen } from './components/splashscreen/splashscreen';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Splashscreen],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'RujiraPortal';
}
