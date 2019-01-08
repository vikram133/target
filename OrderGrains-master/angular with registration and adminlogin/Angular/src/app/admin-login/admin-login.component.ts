import { Component, OnInit } from '@angular/core';
import {HttpSampleService} from '../http-sample.service';
import {LocalStorage,LocalStorageService} from 'ngx-webstorage';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private sample : HttpSampleService,
    private localservice :LocalStorageService,
    private router : Router,
    private route : ActivatedRoute) { }

  ngOnInit() {
  }
  validate(value){
    console.log(value);
    console.log("name:--->"+value.username)
    this.sample.login(value).subscribe((result)=>{
      console.log(result);
      var convert = result.toString();
      // console.log(convert.length);
      if(convert.length !=0){
      this.localservice.store('key',convert);
       let d = new Date();
       let dd = d.getMinutes();
       dd=dd  + 30;
       console.log((dd % 60)); 
       this.router.navigate(['admin-table']);
      }
    })
  }
}
