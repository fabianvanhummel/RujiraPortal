import { Component } from '@angular/core';

@Component({
  selector: 'app-museum',
  imports: [],
  templateUrl: './museum.html',
  styleUrl: './museum.scss',
})
export class Museum {
  enterMuseum() {
    console.log('entering museum');
  }
}
