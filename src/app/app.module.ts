import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import{MatButtonModule} from '@angular/material/button';
import{ReactiveFormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import{MatTableModule} from '@angular/material/table';
import{MatPaginatorModule} from '@angular/material/paginator';
import{MatInputModule} from  '@angular/material/input';
import{MatSelectModule} from  '@angular/material/select';
import{MatDatepickerModule} from  '@angular/material/datepicker';
import{MatNativeDateModule} from  '@angular/material/core';
import{MatFormFieldModule} from  '@angular/material/form-field';
//modificacion de fechas
import{MomentDateModule} from  '@angular/material-moment-adapter';
//alertas e iconos
import{MatSnackBarModule} from  '@angular/material/snack-bar';
import{MatIconModule} from  '@angular/material/icon';
//modales
import{MatDialogModule} from  '@angular/material/dialog';
//diseño de tabla
import{MatGridListModule} from  '@angular/material/grid-list';
import { AgregarComponent } from './Modal/agregar/agregar.component';
import { EliminarComponent } from './Modal/eliminar/eliminar.component';



@NgModule({
  declarations: [
    AppComponent,
    AgregarComponent,
    EliminarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MomentDateModule,
    MatSnackBarModule,
    MatIconModule,
    MatDialogModule,
    MatGridListModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
