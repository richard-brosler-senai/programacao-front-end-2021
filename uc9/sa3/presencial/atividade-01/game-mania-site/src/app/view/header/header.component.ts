import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClickMenu(){
    let divmenumob = document.querySelector("#menu-slide");
    if (divmenumob?.classList.contains("show")){
      divmenumob?.classList.remove("show");
    } else {
      divmenumob?.classList.add("show");
    }
  }

}
