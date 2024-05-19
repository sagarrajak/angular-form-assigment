import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EducationModule } from './education/education.module';
import { ProfileModule } from './profile/profile.module';
import { ShowErrorComponent } from './show-error/show-error.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    EducationModule,
    ProfileModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'homeWorkTask';
}
