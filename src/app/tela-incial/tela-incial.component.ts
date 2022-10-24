import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-incial',
  templateUrl: './tela-incial.component.html',
  styleUrls: ['./tela-incial.component.css']
})
export class TelaIncialComponent implements OnInit {

  constructor() { }

  direcionar() {
    console.log("entrou no direcionar")
    this.scrollToBottom()
  }

  scrollToBottom(){
    const inputConverter = document.getElementById("inputConverter");
    inputConverter && inputConverter.scrollIntoView(false);
  }
  
  ngOnInit(): void {
  }

}
