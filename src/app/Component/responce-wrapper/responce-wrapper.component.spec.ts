import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponceWrapperComponent } from './responce-wrapper.component';

describe('ResponceWrapperComponent', () => {
  let component: ResponceWrapperComponent;
  let fixture: ComponentFixture<ResponceWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponceWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponceWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
