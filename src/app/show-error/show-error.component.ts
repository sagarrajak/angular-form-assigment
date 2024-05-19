import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-show-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-error.component.html',
  styleUrl: './show-error.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ShowErrorComponent {
    @Input("control")
    control!: any;
}
