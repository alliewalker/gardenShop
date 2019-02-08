import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { User } from '../models/user';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
     users: User[];
     email = '';
     password = '';
  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
  }
  
  logIn(email: string, password: string) : void {
    event.preventDefault();
    let userInfo: User = {
      email: email,
      password: password
    }
    this.databaseService.login(userInfo)
    .subscribe(user => {
      this.users.push(user);
    })
     
  }
}
