import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from 'ngx-webstorage';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.css']
})
export class AdminTableComponent implements OnInit {

  constructor(private localstorage : LocalStorageService,
    private router : Router) { }

  ngOnInit() {
  }
  clear(){
    this.localstorage.clear('key');
    this.router.navigate(['admin-login']);
  }
}
