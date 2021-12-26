import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { promises } from 'dns';
import { Observable } from 'rxjs';
import { Login } from 'src/assets/Login';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
baseURL:string='https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8';
baseURL1:string='http://localhost:3000';
  constructor(private http:HttpClient) { }

  getListService():Observable<any>{
return this.http.get(this.baseURL);
  }
  getLogin():Observable<Login>{
    return this.http.get<Login>(this.baseURL1+'/login')
  }
  postLogin(obj:Login):Observable<Login>{
    const headers={'content-type':'application/json'}
    const body=JSON.stringify(obj);
    console.log(body);
    
    return this.http.post<Login>(this.baseURL1+"/login",body,{'headers':headers});
  }
}
