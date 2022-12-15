import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSecEmployeeLogComponent } from './view-sec-employee-log.component';

describe('ViewSecEmployeeLogComponent', () => {
  let component: ViewSecEmployeeLogComponent;
  let fixture: ComponentFixture<ViewSecEmployeeLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSecEmployeeLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSecEmployeeLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
