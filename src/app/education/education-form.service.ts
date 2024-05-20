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
    this.formGroup.valueChanges.subscribe((data) => {
      this.isChange++;
      if (this.isChange == 2) {
        this.subscriber.forEach(callBack => {
          callBack(true);
        })
      }
    });
  }

  restoreValues(): void {
    if (this.isChange) {
      this.formGroup.reset(this.values);
      this.isChange = 0;
      this.subscriber.forEach(callBack => {
        callBack(false);
      })
    }
  }

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

  setInitialValue(educationForm: EducationForm) {
    this.values = educationForm;
    this.isChange = 0;
    this.formGroup.reset(this.values);
    this.subscriber.forEach(callBack => {
      callBack(false);
    })
  }
}
