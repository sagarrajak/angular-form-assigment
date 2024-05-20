import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { phoneNumberValidator } from '../validators/phoneNumberValidator';
import { AbstractBaseUserRestoreForm } from '../services/UserRestoreFormInterface';

export type EducationForm = {
  graduactionMarks: number;
  postgraducationMarks: number;
};

type EducationFormControl = {
  [T in keyof EducationForm]: FormControl<EducationForm[T] | null>;
};

@Injectable()
export class EducationFormService extends AbstractBaseUserRestoreForm<
  FormGroup<EducationFormControl>
> {

  constructor() {
    super()
  }

  restoreValues(): void {
    if (this.isChange && this.values) {
      for (let key of Object.keys(this.values)) {
        this.formGroup.get(key)?.setValue((this.values as any)[key])
      }
    }
  }

  setInitialValue(): void {}

  values: EducationForm = {
    graduactionMarks: 0,
    postgraducationMarks: 0,
  };

  public formGroup = new FormGroup<EducationFormControl>({
    graduactionMarks: new FormControl(this.values.graduactionMarks, [
      Validators.required,
      Validators.max(100),
      Validators.min(0),
    ]),
    postgraducationMarks: new FormControl(this.values.postgraducationMarks, [
      Validators.required,
      Validators.email,
    ]),
  });
}
