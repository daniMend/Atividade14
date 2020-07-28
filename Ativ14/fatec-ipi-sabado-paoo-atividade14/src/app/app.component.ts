import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  cursos = [    
    { nome: "Análise e Desenvolvimento de Sistemas"},     
  ];

  onAdicionarCurso(curso) {    
    this.cursos = [curso, ...this.cursos];  
  }

}
