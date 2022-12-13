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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';

const myroute:Routes=[
  {
    path:"addemployee",
    component:AddEmployeeComponent
  },
  {
  path:"addsecurity",
  component:AddSecurityComponent
  },
  {
  path:"adminlogin",
  component:AddSecurityComponent
  },
  {
    path:"viewemployee",
    component:ViewEmployeeComponent
  },
  

]

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    AddSecurityComponent,
    AdminLoginComponent,
    AdminNavComponent,
    ViewEmployeeComponent,
    MatInputModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(myroute),
    BrowserAnimationsModule,
    MatCardModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
