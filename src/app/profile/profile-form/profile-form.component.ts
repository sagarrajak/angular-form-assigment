import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProfileForm, ProfileFormService } from '../profile-form.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrl: './profile-form.component.scss',
})
export class ProfileFormComponent {

  @Output() onFormDirty = new EventEmitter<boolean>();
  @Input() set initValues(profileForm: ProfileForm) {
    this.profileFormService.setInitialValue(profileForm);
  }

  constructor(
    private readonly profileFormService: ProfileFormService,
  ) {
    this.profileFormService.addSubsciber((value) => {
        this.onFormDirty.emit(value);
    });
  }

  get profileForm() {
    return this.profileFormService.formGroup;
  }

  getData() {
    return this.profileFormService.getValues();
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
