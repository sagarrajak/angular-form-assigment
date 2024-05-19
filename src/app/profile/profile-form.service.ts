import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { phoneNumberValidator } from '../validators/phoneNumberValidator';

enum GenderEnum {
  male = 'male',
  female = 'female',
  other = 'other',
}

export interface ProfileFormInterface {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  gender?: GenderEnum;
}

@Injectable()
export class ProfileFormService {
  constructor() {
    this.profileForm.valueChanges.subscribe((data) => {
      console.log('Form changes: ', data);
    });
  }

  private values: ProfileFormInterface = {
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
  };

  public profileForm = new FormGroup({
    name: new FormControl(this.values.name, [
      Validators.required,
      Validators.min(2),
    ]),
    email: new FormControl(this.values.email, [
      Validators.required,
      Validators.email,
    ]),
    phoneNumber: new FormControl(this.values.phoneNumber, [
      Validators.required,
      phoneNumberValidator(),
    ]),
    address: new FormControl(this.values.address, [Validators.required]),
    gender: new FormControl(this.values.gender, [Validators.required]),
  });

  public setInitialValue() {}

  public resetValues() {}

  public getValues() {}

  public isFormDirty() {
    return this.profileForm.dirty;
  }

  private getFormKeys() {
    return this.profileForm.controls;
  }

  public getFormControl(key: keyof ReturnType<typeof this.getFormKeys>) {
    return this.profileForm.controls[key];
  }
}
