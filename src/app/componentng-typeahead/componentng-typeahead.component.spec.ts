import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentngTypeaheadComponent } from './componentng-typeahead.component';

describe('ComponentngTypeaheadComponent', () => {
  let component: ComponentngTypeaheadComponent;
  let fixture: ComponentFixture<ComponentngTypeaheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentngTypeaheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentngTypeaheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
