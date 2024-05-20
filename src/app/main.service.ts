import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfileForm } from './profile/profile-form.service';
import { firstValueFrom } from 'rxjs';
import { EducationForm } from './education/education-form.service';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor(private http: HttpClient) {}

  public async postProfile(data: ProfileForm, id: number) {
    const url = `http://localhost:3000/userProfile/${id}`;

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return await firstValueFrom(
      this.http.put(url, { ...data, id }, { headers })
    );
  }

  public async postGrduationData(data: EducationForm, id: number) {
    const url = `http://localhost:3000/education/${id}`;

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return await firstValueFrom(
      this.http.put(url, { ...data, id }, { headers })
    );
  }
}
