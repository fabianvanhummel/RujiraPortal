import { Component } from '@angular/core';

@Component({
  selector: 'app-library-content',
  imports: [],
  templateUrl: './library-content.html',
  styleUrl: './library-content.scss',
})
export class LibraryContent {
  return() {
    console.log('closing modal');
  }
}
