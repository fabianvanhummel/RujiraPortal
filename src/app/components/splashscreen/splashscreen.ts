import { Component, inject } from '@angular/core';
import { Library } from '../library/library';
import { University } from '../university/university';
import { Office } from '../office/office';
import { Museum } from '../museum/museum';
import { Dialog, DialogConfig } from '@angular/cdk/dialog';
import { LibraryContent } from '../library/library-content/library-content';

@Component({
  selector: 'app-splashscreen',
  imports: [Library, University, Office, Museum],
  templateUrl: './splashscreen.html',
  styleUrl: './splashscreen.scss',
})
export class Splashscreen {
  private dialog = inject(Dialog);

  enterPage(page: string) {
    var d = document.getElementById(page);
    if (d) {
      d.classList.add('zoom');
    }
    this.createPage(page);
  }

  createPage(page: string) {
    switch (page) {
      case 'library':
        this.dialog.open(LibraryContent, {
          disableClose: true,
          height: '100vh',
          width: '100vw',
          hasBackdrop: true,
        });
    }
  }
}
