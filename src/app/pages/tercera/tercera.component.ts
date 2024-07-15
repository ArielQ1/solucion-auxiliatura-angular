import { Component } from '@angular/core';
import { ModalComponent } from "../../components/modal/modal.component";
// @ts-ignore
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-tercera',
  standalone: true,
  imports: [ModalComponent],
  template: `
    <div>
      <h1>Tercera Página</h1>
      <p>Estudiante Aprobo o Reprobo?</p>
      <button (click)="abrirModal()" >Aprobaste?</button>
      <app-modal [estado]="estadoModal" [titulo]="tituloModal">
        <h2> Estudiante {{ nombre }}</h2>
        <h1 style="color: {{colorTitulo}};">{{ cuantificacion }} con {{nota}}</h1>
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
export class TerceraComponent {
  tituloModal: string = 'Calculando Edad';
  estadoModal: boolean = false;

  nombre: string = '';
  cuantificacion: string = '';
  nota: string = '';
  colorTitulo: string = 'blue';

  abrirModal() {
    confetti();
    let nota = localStorage.getItem('nota');
    if (nota) {
      this.nota = nota;
      let nota2 = parseInt (nota);
      if (nota2 >= 51){
        this.colorTitulo = 'green';
        this.cuantificacion = "Aprobado";
      }else{
        this.colorTitulo = 'red';
        this.cuantificacion = "Reprobado";
      }
    }
    let nombre = localStorage.getItem('nombre');
    if (nombre) {
      this.nombre = nombre;
    }
    this.estadoModal = true;
  }

}

