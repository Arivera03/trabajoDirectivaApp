import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Registro de Empleados';
  mensaje="";
  registrado=false;
  nombre:string="";
  apellido:string="";
  entradas: { titulo: string }[];

  constructor() {
    this.entradas = [
      { titulo: "titulo1" },
      { titulo: "titulo2" },
      { titulo: "titulo3" },
      { titulo: "titulo4" },
      { titulo: "titulo5" }
    ];
  }

  registrarUsuario(){
    this.registrado=true

    this.mensaje="usuario registrado con éxito"
  }
}
