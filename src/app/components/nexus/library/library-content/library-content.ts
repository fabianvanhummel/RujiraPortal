import { DialogRef } from '@angular/cdk/dialog';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { delay } from '../../../../shared/delay';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-library-content',
  imports: [CommonModule],
  templateUrl: './library-content.html',
  styleUrl: './library-content.scss',
})
export class LibraryContent implements OnInit {
  constructor(public libraryDialogRef: DialogRef<string>) {}

  @Output() closed = new EventEmitter<void>();

  closing = true;

  ngOnInit(): void {
    this.closing = false;
  }

  async return() {
    this.closed.emit();
    this.closing = true;
    await delay(1000);
    this.libraryDialogRef.close();
  }
}
