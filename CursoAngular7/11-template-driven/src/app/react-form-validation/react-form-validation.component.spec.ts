import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactFormValidationComponent } from './react-form-validation.component';

describe('ReactFormValidationComponent', () => {
  let component: ReactFormValidationComponent;
  let fixture: ComponentFixture<ReactFormValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactFormValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactFormValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
