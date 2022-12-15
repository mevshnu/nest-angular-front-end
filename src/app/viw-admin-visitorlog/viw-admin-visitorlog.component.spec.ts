import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViwAdminVisitorlogComponent } from './viw-admin-visitorlog.component';

describe('ViwAdminVisitorlogComponent', () => {
  let component: ViwAdminVisitorlogComponent;
  let fixture: ComponentFixture<ViwAdminVisitorlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViwAdminVisitorlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViwAdminVisitorlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
