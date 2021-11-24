import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/_services/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private sidenavService: SidenavService) { }

  ngOnInit(): void {
  }

  abreMenu(){
    this.sidenavService.toggle();
  }
}
