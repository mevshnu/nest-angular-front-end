import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSecVisitorLogComponent } from './view-sec-visitor-log.component';

describe('ViewSecVisitorLogComponent', () => {
  let component: ViewSecVisitorLogComponent;
  let fixture: ComponentFixture<ViewSecVisitorLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSecVisitorLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSecVisitorLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
