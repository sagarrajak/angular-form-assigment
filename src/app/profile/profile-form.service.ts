import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { phoneNumberValidator } from '../validators/phoneNumberValidator';
import { AbstractBaseUserRestoreForm } from '../services/UserRestoreFormInterface';

export enum GenderEnum {
  male = 'male',
  female = 'female',
  other = 'other',
}

export interface ProfileFormControl {
  name: FormControl<string | null> ;
  email: FormControl<string | null>;
  phoneNumber: FormControl<string | null>;
  address: FormControl<string | null>;
  gender?: FormControl<string | null>;
}

export type ProfileForm = {[K in keyof ProfileFormControl]: ProfileFormControl[K] extends FormControl<infer T> ? T : any}

@Injectable()
export class ProfileFormService extends AbstractBaseUserRestoreForm<FormGroup<ProfileFormControl>> {
 
  constructor() {
    super();
    this.formGroup.valueChanges.subscribe((data) => {
      this.isChange++;
      if (this.isChange == 2) {
        this.subscriber.forEach(callBack => {
          callBack(true);
        })
      }
    });
  }

  private values: ProfileForm = {
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    gender: '',
  };

  setInitialValue(profileForm: ProfileForm) {
    this.values = profileForm;
    this.isChange = 0;
    this.formGroup.reset(this.values);
    this.subscriber.forEach(callBack => {
      callBack(false);
    })
  }

  public formGroup = new FormGroup<ProfileFormControl>({
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
  

  public restoreValues() {
    if (this.isChange && this.values) {
      this.formGroup.reset(this.values);
      this.isChange = 0;
      this.subscriber.forEach(callBack => {
        callBack(false);
      })
    }
  }
}
