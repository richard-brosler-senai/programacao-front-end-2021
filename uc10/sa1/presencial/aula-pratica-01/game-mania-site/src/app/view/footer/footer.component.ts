import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  desenvolvedor! : string;
  empresa! : string;

  constructor() { }

  ngOnInit(): void {
    this.desenvolvedor = "Richard Brosler";
    this.empresa = "Senai Bauru";
  }

}
