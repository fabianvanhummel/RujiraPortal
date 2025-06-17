import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from '../../shared/delay';

@Component({
  selector: 'app-portal',
  imports: [],
  templateUrl: './portal.html',
  styleUrl: './portal.scss',
})
export class Portal {
  constructor(private router: Router) {}

  async enter() {
    var d = document.getElementById('portal');
    if (d) {
      d.classList.add('zoom');
    }
    await delay(2000);
    this.router.navigate(['omniverse']);
  }
}
