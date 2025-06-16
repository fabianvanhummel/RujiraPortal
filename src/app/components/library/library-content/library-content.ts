import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-library-content',
  imports: [],
  templateUrl: './library-content.html',
  styleUrl: './library-content.scss',
})
export class LibraryContent {
  constructor(public libraryDialogRef: DialogRef<string>) {}

  return() {
    this.libraryDialogRef.close();
  }
}
