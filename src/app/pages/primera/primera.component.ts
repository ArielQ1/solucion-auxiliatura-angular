import { CommonModule, JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from "../../components/modal/modal.component";

@Component({
  selector: 'app-primera',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, JsonPipe, ModalComponent],
  templateUrl: './primera.component.html',
  styleUrl: './primera.component.css'
})
export class PrimeraComponent {
  tituloModal: string = 'Datos del Estudiante';
  estadoModal: boolean = false;

  abrirModal() {
    this.estadoModal = true;
  }
  cerrarModal() {
    this.estadoModal = false;
  }

  guardarDatos(){
    localStorage.setItem('nombre', this.form().value.nombre);
    localStorage.setItem('fechaNacimiento', this.form().value.fechaNacimiento);
    localStorage.setItem('nota', this.form().value.nota);
    this.cerrarModal();
  }
  form = signal<FormGroup>(
    new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      fechaNacimiento: new FormControl('', Validators.required),
      nota: new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)]),
    })
  )

}
