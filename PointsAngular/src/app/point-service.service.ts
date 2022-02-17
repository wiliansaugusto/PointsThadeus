import { SnackBarService } from './config/snackbar.sevice';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PointServiceService {
  

  constructor(private http: HttpClient, private snackbar: SnackBarService) { }


  public saveUsuario(usuario:any):Observable<string>{
    return this.http.post<string>(`${environment.apiBaseEndpointUrl}usuarionovo`, usuario);
  }
 
  public saveMission(missao:any):Observable<string>{
    return this.http.post<string>(`${environment.apiBaseEndpointUrl}newmission`, missao);
  }
  public savePremio(premio:any):Observable<string>{
    return this.http.post<string>(`${environment.apiBaseEndpointUrl}newpremio`, premio);
  }
  public getAllPremios(premio:any):Observable<any>{
    return this.http.get<string>(`${environment.apiBaseEndpointUrl}premioId/`+premio);
  }
  public getAllMissoes(missao:any):Observable<any>{
    return this.http.get<string>(`${environment.apiBaseEndpointUrl}missionId/`+missao);
  }
  public deleteMission(id:any): Observable<any>{
    return this.http.delete<string>(`${environment.apiBaseEndpointUrl}mission_delete/`+id);
  }
  public deletePremio(id:any): Observable<any>{
    return this.http.delete<string>(`${environment.apiBaseEndpointUrl}premio_delete/`+id);
  }
  public getCapitao(id:any):Observable<string>{
    return this.http.get<string>(`${environment.apiBaseEndpointUrl}usuario/`+id)
  }
  public addPontos(pontos:any):Observable<string>{
    return this.http.post<string>(`${environment.apiBaseEndpointUrl}addpontos`, pontos);
  }
  public decrementsPontos(pontos:any):Observable<string>{
    return this.http.post<string>(`${environment.apiBaseEndpointUrl}deletepontos`, pontos);
  }
  public saveBonus(bonus:any):Observable<string>{
    return this.http.post<string>(`${environment.apiBaseEndpointUrl}addbonuspontos`, bonus);
  }
  public savePenalidade(penalidade:any):Observable<string>{
    return this.http.post<string>(`${environment.apiBaseEndpointUrl}addpenalidadepontos`, penalidade);
  }
  public getPontosBonus(id:any):Observable<any>{
    return this.http.get<any>(`${environment.apiBaseEndpointUrl}getbonus/`+ id);
  }
  public getPontoPenalidade(id:any):Observable<any>{
    return this.http.get<any>(`${environment.apiBaseEndpointUrl}getpenalidades/`+ id);
  }

  public capMarujo(id:any):Observable<any>{
      return this.http.get<any>(`${environment.apiBaseEndpointUrl}cap-mar/`+id)
      }

   
}
