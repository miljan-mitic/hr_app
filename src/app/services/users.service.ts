import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { User } from '../models/user.model';

//Iz environment-a
const ENDPOINT = "http://localhost:3000/users";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(ENDPOINT);
  }

  getById(id: number) {
    
  }
}
