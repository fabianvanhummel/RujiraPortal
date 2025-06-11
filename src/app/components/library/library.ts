import { Component, output } from '@angular/core';

@Component({
  selector: 'app-library',
  imports: [],
  templateUrl: './library.html',
  styleUrl: './library.scss',
})
export class Library {
  libraryEntered = output<string>();

  enterLibrary() {
    console.log('entering library and emitting event');
    this.libraryEntered.emit('library');
  }
}
