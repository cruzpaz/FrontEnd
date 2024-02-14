import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Departamento } from '../Interfaces/departamento';
@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  private endpoint:string=environment.endPoint;
  private apiUrl:string=this.endpoint+"departamentos";

  constructor(private http:HttpClient) { }

  getList():Observable<Departamento[]>{
    return this.http.get<Departamento[]>(`${this.apiUrl}`)
  }
  getDepartamentoById(id: number): Observable<Departamento> {
    return this.http.get<Departamento>(`${this.apiUrl}/${id}`);
  }


}
