import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public todos: any[] = [];

  constructor() {
    // chamado toda vez que a classe inicia
    this.todos.push('passear com o cachorro');
    this.todos.push('ir ao mercado');
    this.todos.push('cortar o cabelo');
  }
}
