import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemohelloComponent } from './demohello.component';

describe('DemohelloComponent', () => {
  let component: DemohelloComponent;
  let fixture: ComponentFixture<DemohelloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemohelloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemohelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
