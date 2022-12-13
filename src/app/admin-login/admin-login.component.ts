import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  username=""
  password=""
  constructor(private routed:Router){}
  readlogin=()=>
  {
    let data:any={"username":this.username,"password":this.password}
  console.log(data)
  if( this.username == "admin" && this.password=="nestdigital")
  {
  this.routed.navigate(["/addEmployee"])
  }
  else
  {
    alert("invalid login ")
  }
}
}  