import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
   private dbUrl = 'https://efa-gardenapp-backend.herokuapp.com/api/auth/login';

  constructor(private _http: HttpClient) { }
}
