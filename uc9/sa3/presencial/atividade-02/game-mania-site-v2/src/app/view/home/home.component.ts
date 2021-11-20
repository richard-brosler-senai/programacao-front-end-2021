import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  titulo! : string;

  constructor() { }

  ngOnInit(): void {
    this.titulo = "Página de Home";
  }

}
