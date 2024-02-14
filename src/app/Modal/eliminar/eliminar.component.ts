import { Component, OnInit , Inject} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Empleado } from 'src/app/Interfaces/empleado';
import { DepartamentoService } from 'src/app/Services/departamento.service';
import { EmpleadoService } from 'src/app/Services/empleado.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {

  constructor( private dialogo:MatDialogRef<EliminarComponent>,
    private fb:FormBuilder,
    private _snackBar:MatSnackBar,
    private _despartamentoServicio:DepartamentoService,
    private _empleadoService:EmpleadoService,
    @Inject (MAT_DIALOG_DATA) public dataEmpleado:Empleado) { }

  ngOnInit(): void {
  }
  confirmarEliminar(){
    if(this.dataEmpleado){
      this.dialogo.close("eliminar");
    }
  }

}
