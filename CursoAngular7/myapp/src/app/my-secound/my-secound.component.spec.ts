import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySecoundComponent } from './my-secound.component';

describe('MySecoundComponent', () => {
  let component: MySecoundComponent;
  let fixture: ComponentFixture<MySecoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySecoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySecoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
