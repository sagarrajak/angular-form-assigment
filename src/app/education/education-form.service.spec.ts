import { TestBed } from '@angular/core/testing';

import { EducationFormService } from './education-form.service';

describe('EducationFormService', () => {
  let service: EducationFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducationFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
