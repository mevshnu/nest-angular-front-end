import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViwAdminEmployeelogComponent } from './viw-admin-employeelog.component';

describe('ViwAdminEmployeelogComponent', () => {
  let component: ViwAdminEmployeelogComponent;
  let fixture: ComponentFixture<ViwAdminEmployeelogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViwAdminEmployeelogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViwAdminEmployeelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
