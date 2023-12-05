import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/usuarios.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http : HttpClient) { };

  registerUserFromApi( user : User ) : Observable<any>{
    return this.http.post(`http://localhost:8080/api/users`, user);
  }

  loginUserFromApi( user : User) : Observable<any> {
    return this.http.post('http://localhost:8080/api/users/login', user);
  }

  fetchUserInfoFromApi( searchTerm : string) : Observable<any>{
    return this.http.get(`http://localhost:8080/api/users`);
  }

  getInfoUser() : Observable<any> {
    const token = window.localStorage.getItem("token") ?? "";
    const headers = new HttpHeaders({
      "Authorization": token
    });
    return this.http.get(`http://localhost:8080/api/users/infoUser`, {headers});
  }
  
  public infoUser : User = {
    name: "string",
    email: "string",
    password: "string",
    role: 'student',
    profile: {
        photo: "string",
        bio: "string"
        // Otra información relevante del perfil
    }
  }
}
