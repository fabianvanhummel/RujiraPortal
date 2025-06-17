import { Component, inject, OnInit } from '@angular/core';
import { Library } from './library/library';
import { University } from './university/university';
import { Office } from './office/office';
import { Museum } from './museum/museum';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { LibraryContent } from './library/library-content/library-content';
import { delay } from '../../shared/delay';

@Component({
  selector: 'app-nexus',
  imports: [Library, University, Office, Museum],
  templateUrl: './nexus.html',
  styleUrl: './nexus.scss',
})
export class Nexus {
  private dialog = inject(Dialog);
  libraryDialogRef: DialogRef | any;

  enterPage(page: string) {
    var d = document.getElementById('city');
    if (d) {
      d.classList.add('zoom');
      d.classList.add('zoom--library');
    }
    this.createPage(page);
  }

  unzoomComponent() {
    var d = document.getElementById('city');
    if (d) {
      d.classList.remove('zoom');
      d.classList.remove('zoom--library');
    }
  }

  openLibraryDialog() {
    this.libraryDialogRef = this.dialog.open(LibraryContent, {
      disableClose: true,
      height: '100vh',
      width: '100vw',
      hasBackdrop: true,
    });
    this.libraryDialogRef.componentInstance.closed.subscribe(() => {
      this.unzoomComponent();
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
