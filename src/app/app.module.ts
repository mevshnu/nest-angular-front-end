import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddSecurityComponent } from './add-security/add-security.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';

import {MatInputModule} from '@angular/material/input';
import { LeaveComponent } from './leave/leave.component';
import { SecurityLoginComponent } from './security-login/security-login.component';
import { SecurityNavComponent } from './security-nav/security-nav.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ApplayLeaveComponent } from './applay-leave/applay-leave.component';
import { EmployeeNavComponent } from './employee-nav/employee-nav.component';
import { CreateLogComponent } from './create-log/create-log.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { ViwAdminEmployeelogComponent } from './viw-admin-employeelog/viw-admin-employeelog.component';
import { ViwAdminVisitorlogComponent } from './viw-admin-visitorlog/viw-admin-visitorlog.component';
import { ViewEmployeeLogComponent } from './view-employee-log/view-employee-log.component';
import { ViewSecEmployeeLogComponent } from './view-sec-employee-log/view-sec-employee-log.component';
import { ViewSecVisitorLogComponent } from './view-sec-visitor-log/view-sec-visitor-log.component';
import { VisitorLogComponent } from './visitor-log/visitor-log.component';
import { ViewEmployeeLeaveComponent } from './view-employee-leave/view-employee-leave.component';

const myroute:Routes=[
  {
    path: "",
    component: AdminLoginComponent
  },
  {
    path:"addEmployee",
    component: AddEmployeeComponent
  },
  {
    path:"viewEmployee",
    component:ViewEmployeeComponent
  },
  {
    path: "editEmployee",
    component: EditEmployeeComponent
  },
  {
    path: "addSecurity",
    component: AddSecurityComponent
  },
  {
    path:"viewLeaves",
    component:LeaveComponent
  },
  {
    path:"securityLogin",
    component:SecurityLoginComponent
  },
  {
    path:"viewSecurityProfile",
    component: ViewProfileComponent
  },
  {
    path:"employeeLog",
    component: CreateLogComponent
  },
  {
    path:"visitorLog",
    component: VisitorLogComponent
  },
  {
    path:"employeeLogin",
    component: EmployeeLoginComponent
  },
  {
    path:"employeeProfile",
    component: EmployeeProfileComponent
  },
  {
    path:"applyLeave",
    component: ApplayLeaveComponent
  },  
  {
    path:"viewEmployeeLeave",
    component: ViewEmployeeLeaveComponent
  },
  {
    path:"viewEmployeeLog",
    component: ViewEmployeeLogComponent
  },
  {
    path:"viewSecEmpLog",
    component: ViewSecEmployeeLogComponent
  },
  {
    path:"viewSecVisLog",
    component: ViwAdminVisitorlogComponent
  },
  {
    path:"viewAdminEmpLog",
    component: ViwAdminEmployeelogComponent
  },
  {
    path:"viewAdminVisLog",
    component: ViwAdminVisitorlogComponent
  }
  

]

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    AddSecurityComponent,
    AdminLoginComponent,
    AdminNavComponent,
    ViewEmployeeComponent,
    LeaveComponent,
    SecurityLoginComponent,
    SecurityNavComponent,
    ViewProfileComponent,
    ApplayLeaveComponent,
    EmployeeNavComponent,
    CreateLogComponent,
    EditEmployeeComponent,
    EmployeeLoginComponent,
    EmployeeProfileComponent,
    ViwAdminEmployeelogComponent,
    ViwAdminVisitorlogComponent,
    ViewEmployeeLogComponent,
    ViewSecEmployeeLogComponent,
    ViewSecVisitorLogComponent,
    VisitorLogComponent,
    ViewEmployeeLeaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(myroute),
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
