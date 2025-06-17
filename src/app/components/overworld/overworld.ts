import { Component } from '@angular/core';
import { Highlight } from '../../shared/components/highlight/highlight';
import { delay } from '../../shared/delay';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overworld',
  imports: [Highlight],
  templateUrl: './overworld.html',
  styleUrl: './overworld.scss',
})
export class Overworld {
  constructor(private router: Router) {}

  enterPage(page: string) {
    var d = document.getElementById('overworld');
    if (d) {
      switch (page) {
        case 'nexus':
          d.classList.add('zoom');
          d.classList.add('zoom--nexus');
      }
    }
    this.goToPage(page);
  }

  async goToPage(page: string) {
    switch (page) {
      case 'nexus':
        await delay(2000);
        this.router.navigate(['nexus']);
    }
  }
}
