import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EducationForm, EducationFormService } from '../education-form.service';

@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
  styleUrl: './education-form.component.scss',
})
export class EducationFormComponent {
  @Output() onFormDirty = new EventEmitter<boolean>();
  @Input() set initValues(educationForm: EducationForm) {
      console.log(educationForm);
      this.educationFormService.setInitialValue(educationForm);
  }

  constructor(
    private readonly educationFormService: EducationFormService,
  ) {
    this.educationFormService.addSubsciber((value) => {
      this.onFormDirty.emit(value);
    });
  }


  get educationForm() {
    return this.educationFormService.formGroup;
  }

  getData() {
    return this.educationFormService.getValues();
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
