import { Component, inject, OnInit } from '@angular/core';
import { Library } from '../library/library';
import { University } from '../university/university';
import { Office } from '../office/office';
import { Museum } from '../museum/museum';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { LibraryContent } from '../library/library-content/library-content';
import { delay } from '../../shared/delay';

@Component({
  selector: 'app-splashscreen',
  imports: [Library, University, Office, Museum],
  templateUrl: './splashscreen.html',
  styleUrl: './splashscreen.scss',
})
export class Splashscreen {
  private dialog = inject(Dialog);
  libraryDialogRef: DialogRef | any;

  enterPage(page: string) {
    var d = document.getElementById(page);
    if (d) {
      d.classList.add('zoom');
    }
    this.createPage(page);
  }

  unzoomComponent(page: string) {
    var d = document.getElementById(page);
    if (d) {
      d.classList.remove('zoom');
    }
  }

  openLibraryDialog() {
    this.libraryDialogRef = this.dialog.open(LibraryContent, {
      disableClose: true,
      height: '100vh',
      width: '100vw',
      hasBackdrop: true,
    });
    this.libraryDialogRef.closed.subscribe(() => {
      this.unzoomComponent('library');
    });
  }

  async createPage(page: string) {
    switch (page) {
      case 'library':
        await delay(500);
        this.openLibraryDialog();
    }
  }
}
