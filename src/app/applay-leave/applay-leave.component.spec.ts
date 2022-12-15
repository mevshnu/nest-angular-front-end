import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplayLeaveComponent } from './applay-leave.component';

describe('ApplayLeaveComponent', () => {
  let component: ApplayLeaveComponent;
  let fixture: ComponentFixture<ApplayLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplayLeaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplayLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
