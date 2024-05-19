import { NgModule, input } from '@angular/core';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { CommonModule } from '@angular/common';
import { ProfileFormService } from './profile-form.service';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from '../primeng/primeng.module';
import { ShowErrorComponent } from '../show-error/show-error.component';

@NgModule({
  declarations: [ProfileFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrimengModule,
    ShowErrorComponent,
  ],
  providers: [ProfileFormService],
  exports: [ProfileFormComponent],
})
export class ProfileModule {}
