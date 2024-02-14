import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Empleado, Empleados } from '../Interfaces/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private endpoint:string=environment.endPoint;
  private apiUrl:string=this.endpoint+"empleados";

  constructor(private http:HttpClient) { }

  getList():Observable<Empleados[]>{
    return this.http.get<Empleados[]>(`${this.apiUrl}`)
  }
  add(modelo:Empleados):Observable<Empleados>{
    return this.http.post<Empleados>(`${this.apiUrl}`,modelo);
  }
  update(idEmpleado:string,modelo:Empleados):Observable<Empleados>{
    return this.http.put<Empleados>(`${this.apiUrl}actualizar/${idEmpleado}`,modelo);
  }
  delete(dui: Empleados): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${dui.id}`);
  }

}
