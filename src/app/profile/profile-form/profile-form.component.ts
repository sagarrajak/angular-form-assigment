import { Component } from '@angular/core';
import { ProfileFormService } from '../profile-form.service';

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

  getControl(key: 'name' | 'email' | 'phoneNumber' | 'address' | 'gender') {
    return this.profileFormService.getFormControl(key);
  }
}
