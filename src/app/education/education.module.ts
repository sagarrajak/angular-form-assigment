import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationFormService } from './education-form.service';
import { EducationFormComponent } from './education-form/education-form.component';
import { PrimengModule } from '../primeng/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowErrorComponent } from '../show-error/show-error.component';

@NgModule({
  declarations: [EducationFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrimengModule,
    ShowErrorComponent,
  ],
  providers: [EducationFormService],
  exports: [EducationFormComponent],
})
export class EducationModule {}
