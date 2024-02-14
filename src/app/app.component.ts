import {AfterViewInit, Component, ViewChild,OnInit} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Empleado, Empleados } from './Interfaces/empleado';
import { EmpleadoService } from './Services/empleado.service';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { AgregarComponent } from './Modal/agregar/agregar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EliminarComponent } from './Modal/eliminar/eliminar.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements AfterViewInit ,OnInit{
  ngOnInit(): void {
this.mostrarEmpleados();
  }
  displayedColumns: string[] = ['Id','Nombre', 'Apellido', 'Telefono', 'Correo','Departamento','Acciones'];
  dataSource = new MatTableDataSource<Empleados>();
  constructor(private _empleadoService:EmpleadoService,public dialog: MatDialog,private _snackBar:MatSnackBar){

  }
  openDialog() {
    this.dialog.open(AgregarComponent,{disableClose:true,width:"300px"}).afterClosed().subscribe(resultado=>{
      if(resultado==="creado"){
        this.mostrarEmpleados();
      }
    });


  }
  openEditarDialog(data:Empleado) {

    this.dialog.open(AgregarComponent,{
      disableClose:true,
      width:"300px",
      data:data
    }).afterClosed().subscribe(resultado=>{
      if(resultado==="editado"){
        this.mostrarEmpleados();
      }
    });


  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  mostrarEmpleados(){
    this._empleadoService.getList().subscribe({
      next:(data: Empleados[])=>{
        console.log(data);
        this.dataSource.data=data;
      }
    });
  }
  mostrarAlerta(message: string, action: string) {
    this._snackBar.open(message, action,{
      horizontalPosition:"end",
      verticalPosition:"top",
      duration:3000
    });
  }
  openEliminarDialog(dataE:Empleados){
    this.dialog.open(EliminarComponent,{disableClose:true, data:dataE}).afterClosed().
    subscribe(resultado=>{
      if(resultado==="eliminar"){
        this._empleadoService.delete(dataE).subscribe({
          next:(data)=>{
            this.mostrarAlerta("Empleado fue eliminado","Listo");
            this.mostrarEmpleados();
          }
        });
      }
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }stitle = 'FrontEnd';
}
