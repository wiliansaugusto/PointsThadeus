import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PointServiceService {

  constructor(private http: HttpClient) { }


  public saveUsuario(usuario:any):Observable<string>{
    return this.http.post<string>(`${environment.apiBaseEndpointUrl}usuarionovo`, usuario);
  }
  public login(usuario:any):Observable<string>{
    return this.http.post<string>(`${environment.apiBaseEndpointUrl}login`, usuario);
  }
}
