import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EducationModule } from './education/education.module';
import { ProfileModule } from './profile/profile.module';
import { ShowErrorComponent } from './show-error/show-error.component';
import { BottomNativationComponent } from './bottom-nativation/bottom-nativation.component';
import { CommonModule } from '@angular/common';
import { EducationFormComponent } from './education/education-form/education-form.component';
import { ProfileFormComponent } from './profile/profile-form/profile-form.component';
import { GenderEnum, ProfileForm } from './profile/profile-form.service';
import { EducationForm } from './education/education-form.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    EducationModule,
    ProfileModule,
    BottomNativationComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'homeWorkTask';
  isAnyFormDirty = false;

  @ViewChild(EducationFormComponent) educationComponent!: EducationFormComponent;
  @ViewChild(ProfileFormComponent) profileComponent!: ProfileFormComponent;
  
  handleAnyFormDirty(value: boolean) {
    this.isAnyFormDirty = value;
  }

  profileForm: ProfileForm = {
    name: 'sagar',
    email: 'sagarrajak858@gmail.com',
    phoneNumber: '7750811799',
    address: 'sdsdfsdf',
    gender: GenderEnum.male
  };

  educationform: EducationForm = {
    graduactionMarks: 12,
    postgraducationMarks: 14,
  };

  restoreForm() {
    this.educationComponent?.restoreForm();
    this.profileComponent?.restoreForm();
  }


}
