import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-highlight',
  imports: [CommonModule],
  templateUrl: './highlight.html',
  styleUrl: './highlight.scss',
})
export class Highlight {
  @Input() width: number = 0;
  @Input() height: number = 0;
  @Input() margin_top: number = 0;
  @Input() margin_left: number = 0;
  @Input() shadow_color: string = '#ffe8ae';
  @Input() inner_shadow_radius: number = 2;
  @Input() outer_shadow_radius: number = 5;

  hovering: boolean = false;

  createBoxShadow() {
    return `0 0 ${this.outer_shadow_radius}em ${this.shadow_color}, 0 0  ${this.inner_shadow_radius}em ${this.shadow_color} inset`;
  }
}
