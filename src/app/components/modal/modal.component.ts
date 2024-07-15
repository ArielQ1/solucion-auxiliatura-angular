import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() estado: boolean = false;
  @Input() titulo: string = '';

  cerrarModal() {
      this.estado = false;
  }

}

