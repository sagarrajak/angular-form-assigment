import { Component } from '@angular/core';
import { EducationForm, EducationFormService } from '../education-form.service';

@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
  styleUrl: './education-form.component.scss',
})
export class EducationFormComponent {
  constructor(private readonly educationFormService: EducationFormService) {}

  get educationForm() {
    return this.educationFormService.formGroup;
  }

  submitForm() {
    console.log(this.educationFormService.values);
  }

  getControl(key: keyof EducationForm) {
    return this.educationFormService.getFormControl(key);
  }

  get showCancelButton() {
    return this.educationFormService.isFormDirty;
  }

  public restoreForm() {
    this.educationFormService.restoreValues();
  }
}
