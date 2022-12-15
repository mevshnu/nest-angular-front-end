import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viw-admin-employeelog',
  templateUrl: './viw-admin-employeelog.component.html',
  styleUrls: ['./viw-admin-employeelog.component.css']
})
export class ViwAdminEmployeelogComponent {
  date=""
  constructor(private api:ApiService){
    api.getSecEmpLogs().subscribe(
      (response:any)=>{
        console.log(response)
        this.loading = false
        this.secemplogs = response
      }
    )
  }

  searchLog = ()=>{
    this.api.searchLogs({"date":this.date}).subscribe(
      (response:any)=>{
        this.searchData = response
      }
    )
  }

  secemplogs:any = []
  loading:boolean = true
  searchData:any = []

}
