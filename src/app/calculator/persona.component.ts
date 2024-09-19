import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export class CalculatorComponent {
  operadorA: number = 0;
  operadorB: number = 0;
  resultado: number = 0;
  mensaje = "No hay nada";
  titulo = ""
  mostrar = false

  sumar(): void {
    this.resultado = this.operadorA + this.operadorB
  }

  restar(): void {
    this.resultado = this.operadorA - this.operadorB
  }

  multiplicar(): void {
    this.resultado = this.operadorA * this.operadorB
  }
  dividir(): void {
    this.resultado = this.operadorA / this.operadorB
  }

  agregarPersona() {
    this.mostrar = true
    return this.mensaje = "Persona Agregada"
  }

  agregarTextoPersona(event: Event) {
    this.titulo = (<HTMLInputElement>event.target).value
  }
}
