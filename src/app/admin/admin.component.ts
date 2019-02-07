import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
     email = '';
     password = '';
  constructor() { }

  ngOnInit() {
  }
  
  logIn(email: string, password: string) : void {
    event.preventDefault();
    let userInfo: User = {
      email: email,
      password: password
    }
     
  }
}
