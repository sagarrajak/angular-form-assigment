import { Component } from '@angular/core';
import { ProfileForm, ProfileFormService } from '../profile-form.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrl: './profile-form.component.scss',
})
export class ProfileFormComponent {
  constructor(private readonly profileFormService: ProfileFormService) {}

  get profileForm() {
    return this.profileFormService.profileForm;
  }

  submitForm() {
    console.log(this.profileForm.value);
  }

  getControl(key: keyof ProfileForm) {
    return this.profileFormService.getFormControl(key);
  }

  get showCancelButton() {
    return this.profileFormService.isFormDirty;
  }

  public restoreForm() {
    this.profileFormService.restoreValues();
  }
}
