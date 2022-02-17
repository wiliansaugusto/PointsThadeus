import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

userAuth:boolean = false;
idCapitao!: any;
model!: Observable<string> | undefined;
  constructor(private http: HttpClient) { }

  public login(usuario:any):Observable<string>{
    this.userAuth = true;
    this.model = this.http.post<string>(`${environment.apiBaseEndpointUrl}login`, usuario);
    this.model.subscribe(
      (resp:any)=>{
        this.idCapitao = resp.idCapitao;
      }
    );
    return this.model
  }

  returAuth(){
    return this.userAuth;
  }
  
  getIdCapitao(){
    return this.idCapitao;
  }
}
