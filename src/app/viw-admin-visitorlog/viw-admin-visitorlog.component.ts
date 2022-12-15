import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viw-admin-visitorlog',
  templateUrl: './viw-admin-visitorlog.component.html',
  styleUrls: ['./viw-admin-visitorlog.component.css']
})
export class ViwAdminVisitorlogComponent {
  date=""
  constructor(private api:ApiService){
    api.getSecVisLogs().subscribe(
      (response:any)=>{
        console.log(response)
        this.loading = false
        this.visitorLogs = response
      }
    )
  }

  searchLog = ()=>{
    this.api.searchVisLogs({"date":this.date}).subscribe(
      (response:any)=>{
        this.searchData = response
      }
    )
  }

  visitorLogs:any = []
  loading:boolean = true
  searchData:any = []

}
