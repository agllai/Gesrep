import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentautocompleteComponent } from './componentautocomplete.component';

describe('ComponentautocompleteComponent', () => {
  let component: ComponentautocompleteComponent;
  let fixture: ComponentFixture<ComponentautocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentautocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentautocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
