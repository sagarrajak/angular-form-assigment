import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
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
import { MainService } from './main.service';
import { Toast, ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    EducationModule,
    ProfileModule,
    BottomNativationComponent,
    ToastModule,
  ],
  providers: [MessageService, MainService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit{
  title = 'homeWorkTask';
  isAnyFormDirty = false;

  constructor(
    public readonly mainService: MainService,
    private messageService: MessageService,
    private cdf: ChangeDetectorRef
  ) {}
  
  @ViewChild(EducationFormComponent)
  educationComponent!: EducationFormComponent;
  @ViewChild(ProfileFormComponent) profileComponent!: ProfileFormComponent;

  handleAnyFormDirty(value: boolean) {
    this.isAnyFormDirty = value;
  }


  async ngOnInit(): Promise<void> {
    const promiseGrudation = this.mainService.getGrduationData(1)
    const promiseProfile = this.mainService.getProfile(1)
    try {
      const data = await Promise.all([promiseGrudation, promiseProfile]);
      this.profileForm = data[1] as any;
      this.educationform = data[0] as any;
      console.log(data);
    } catch (err) {
      console.error('unable to submit');
    }
  }


  profileForm: ProfileForm = {
    name: 'sagar',
    email: 'sagarrajak858@gmail.com',
    phoneNumber: '7750811799',
    address: 'sdsdfsdf',
    gender: GenderEnum.male,
  };

  educationform: EducationForm = {
    graduactionMarks: 12,
    postgraducationMarks: 14,
  };

  restoreForm() {
    this.educationComponent?.restoreForm();
    this.profileComponent?.restoreForm();
  }

  public async handleSubmit() {
    
    if (this.profileComponent.profileForm.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Invalid profile form!',
      });
      return;
    }
    if (this.educationComponent.educationForm.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Invalid education form!',
      });
      return;
    }

    this.cdf.detectChanges();

    const educationForm = this.educationComponent.getData();
    const profileForm = this.profileComponent.getData();
    const graduationPromise = this.mainService.postGrduationData(
      educationForm as any,
      1
    );
    const profilePromise = this.mainService.postProfile(profileForm as any, 1);

    try {
      const data = await Promise.all([graduationPromise, profilePromise]);
      this.profileForm = profileForm as any;
      this.educationform = educationForm as any;
      this.messageService.add({severity: 'success', summary: "Form updates successfully!"})
    } catch (err) {
      console.error('unable to submit');
      this.messageService.add({severity: 'error', summary: "Unable to submit!"})
    }
  }
}
