import { Component, EventEmitter, Output } from '@angular/core';
import { PrimengModule } from '../primeng/primeng.module';

@Component({
  selector: 'app-bottom-nativation',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './bottom-nativation.component.html',
  styleUrl: './bottom-nativation.component.scss'
})
export class BottomNativationComponent {
  @Output() onClickApply = new EventEmitter<any>();
  @Output() onClickCancel = new EventEmitter<any>();

  
}
