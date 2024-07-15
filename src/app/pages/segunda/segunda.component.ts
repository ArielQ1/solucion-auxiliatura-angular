import { Component } from '@angular/core';
import { ModalComponent } from "../../components/modal/modal.component";
// @ts-ignore
import confetti from 'canvas-confetti';


@Component({
  selector: 'app-segunda',
  standalone: true,
  imports: [ModalComponent],
  template: `
    <div>
      <h1>Segunda Página</h1>
      <p>Calcule y muestre la Edad del Estudiante</p>
      <button (click)="abrirModal()">Calcular Edad</button>
      <app-modal [estado]="estadoModal" [titulo]="tituloModal">
        <h2>La Edad del Estudiante {{ nombre }}</h2>
        <h1>{{ edad }} Años</h1>
      </app-modal>
    </div>
  `,
  styles: `
    div {
      display: grid;
      place-content : center;
    }
  `
})
export class SegundaComponent {
  tituloModal: string = 'Calculando Nota';
  estadoModal: boolean = false;

  nombre: string = '';
  edad: string = '';

  

  abrirModal() {
    confetti();
    let fechaNacimiento = localStorage.getItem('fechaNacimiento');
    if (fechaNacimiento) {
      let fecha = new Date(fechaNacimiento);
      let hoy = new Date();
      let edad = hoy.getFullYear() - fecha.getFullYear();
      this.edad = edad.toString();
    }
    let nombre = localStorage.getItem('nombre');
    if (nombre) {
      this.nombre = nombre;
    }
    this.estadoModal = true;

  }
  cerrarModal() {
    this.estadoModal = false;
  }
}
