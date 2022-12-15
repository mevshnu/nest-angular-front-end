import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-sec-employee-log',
  templateUrl: './view-sec-employee-log.component.html',
  styleUrls: ['./view-sec-employee-log.component.css']
})
export class ViewSecEmployeeLogComponent {
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
