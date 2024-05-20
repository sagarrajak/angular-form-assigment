import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomNativationComponent } from './bottom-nativation.component';

describe('BottomNativationComponent', () => {
  let component: BottomNativationComponent;
  let fixture: ComponentFixture<BottomNativationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomNativationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BottomNativationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
