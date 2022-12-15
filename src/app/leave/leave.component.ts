import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent {

  constructor(private api: ApiService, private route:Router) {
    api.getAllLeaves().subscribe(
      (response: any) => {
        
        this.leaves = response
      }
    )
  }
  updateStatus = (id:any,empId:any, status:any, type:any,from:any,to:any,) => {
    let data: any = { 
      "id": id, 
      "empId": empId, 
      "leaveStatus": status, 
      "leaveType": type, 
      "fromDate": from, 
      "toDate": to 
    }
    this.api.handleLeave(data).subscribe(
      (response:any)=>{
        if(response.status=="success"){
          if(status == 1){
            alert("Leave Approved")
          }else{
            alert("Leave Rejected")
          }
          window.location.reload()
        }else{
          alert("failed")
          window.location.reload() 
        }
        
      }
    )
  }
  leaves: any = []
  
}


