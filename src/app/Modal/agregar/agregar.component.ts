import { Component, Inject, OnInit,inject } from '@angular/core';
import { FormBuilder,FormGroup,Validator, Validators } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { relativeTimeThreshold } from 'moment';
import { Departamento } from 'src/app/Interfaces/departamento';
import { Empleado, Empleados } from 'src/app/Interfaces/empleado';
import { DepartamentoService } from 'src/app/Services/departamento.service';
import { EmpleadoService } from 'src/app/Services/empleado.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  formEmpleado:FormGroup;
  tituloAccion:string="Nuevo";
  botonAccion:string="Guardar";
  listaDepartamentos:Departamento[]=[];

  constructor(
    private diaogo:MatDialogRef<AgregarComponent>,
    private fb:FormBuilder,
    private _snackBar:MatSnackBar,
    private _despartamentoServicio:DepartamentoService,
    private _empleadoService:EmpleadoService,
    @Inject (MAT_DIALOG_DATA) public dataEmpleado:Empleados,
    ) {
      this.formEmpleado=this.fb.group({
        nombre:['',Validators.required],
        apellido:['',Validators.required],
        telefono:['',Validators.required],
        correo:['',Validators.required],
        area:['',Validators.required],
      });
      this._despartamentoServicio.getList().subscribe({
        next:(data)=>{
          console.log(data);
          this.listaDepartamentos=data;
        },error:(e)=>{}
      });
    }

  ngOnInit(): void {
    if(this.dataEmpleado){
      this.formEmpleado.patchValue({
        nombre:this.dataEmpleado.nombre,
        apellido:this.dataEmpleado.apellido,
        correo:this.dataEmpleado.correo,
        telefono:this.dataEmpleado.telefono,
        area:this.dataEmpleado.area
      })
      this.tituloAccion="Editar";
      this.botonAccion="Actualizar";
    }else{

    }

  }
  mostrarAlerta(message: string, action: string) {
    this._snackBar.open(message, action,{
      horizontalPosition:"end",
      verticalPosition:"top",
      duration:3000
    });
  }
  addEditEmpelado(){


    const modelo:Empleados={
      id:"",
      nombre:this.formEmpleado.value.nombre,
      apellido:this.formEmpleado.value.apellido,
      telefono:this.formEmpleado.value.telefono,
      correo:this.formEmpleado.value.correo,
      area:this.formEmpleado.value.area,
      fechaContratacion:null,
      fechaCreacion:null,
      fechaModificacion:null,
      areaNavigation:null,
      ususarios:[]
    }
    console.log(modelo);
    if(this.dataEmpleado==null){
      this._empleadoService.add(modelo).subscribe({
        next:(data)=>{
          this.mostrarAlerta("Empleado fue registrado","Listo");
          this.diaogo.close("creado");
        },error:(e)=>{
          this.mostrarAlerta("No se pudo crear","Error")
        }
      });
    }else{
      this._empleadoService.update(this.dataEmpleado.id,modelo).subscribe({
        next:(data)=>{
          this.mostrarAlerta("Empleado fue editado","Listo");
          this.diaogo.close("Editado");
        },error:(e)=>{
          this.mostrarAlerta("No se pudo editar","Error")
        }
      });
    }
  }

}
