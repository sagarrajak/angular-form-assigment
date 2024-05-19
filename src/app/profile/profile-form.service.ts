import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { phoneNumberValidator } from '../validators/phoneNumberValidator';

enum GenderEnum {
  male = 'male',
  female = 'female',
  other = 'other',
}

export interface ProfileFormControl {
  name: FormControl<string | null> ;
  email: FormControl<string | null>;
  phoneNumber: FormControl<number | null>;
  address: FormControl<string | null>;
  gender?: FormControl<string | null>;
}

export type ProfileForm = {[K in keyof ProfileFormControl]: ProfileFormControl[K] extends FormControl<infer T> ? T : any}

@Injectable()
export class ProfileFormService {
  private isChange: boolean = false;

  constructor() {
    this.profileForm.valueChanges.subscribe((data) => {
      if (!this.isChange) {
        this.isChange = true;
        this.values = this.profileForm.value as ProfileForm;
      }
    });
  }

  private values: ProfileForm = {
    name: 'sagar',
    email: 'sagarrajak858@gmail.com',
    phoneNumber: 7750811799,
    address: 'sdsdfsdf',
    gender: GenderEnum.male
  };

  public profileForm = new FormGroup<ProfileFormControl>({
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

  public restoreValues() {
    if (this.isChange && this.values) {
      for (let key of Object.keys(this.values)) {
        this.profileForm.get(key)?.setValue((this.values as any)[key])
      }
    }
  }

  public getValues() {
    return this.profileForm.value;
  }

  get isFormDirty() {
    return this.profileForm.dirty;
  }

  public getFormControl(key: keyof ProfileForm) {
    return this.profileForm.controls[key];
  }
}
