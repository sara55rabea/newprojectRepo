import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  arr:any[]=[]
  private apiUrl = 'http://localhost:5241/api/users';
  constructor(private _httpclient:HttpClient) { }
  getuser():Observable<any>{
    return this._httpclient.get(this.apiUrl);
  }
  Adduser(user: User):Observable<User>{
    return this._httpclient.post<User>(this.apiUrl, user);
  }
  updateUser(user:User):Observable<void>{
    return this._httpclient.put<void>(`${this.apiUrl}/${user.id}`, user);
  }
  deletuser(id:number):Observable<void>{
    return this._httpclient.delete<void>(`${this.apiUrl}/${id}`);
  }
}