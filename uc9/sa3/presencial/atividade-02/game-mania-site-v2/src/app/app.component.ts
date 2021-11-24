import { AfterContentInit, AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from './_services/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent 
  implements AfterViewInit {
  title = 'game-mania-site-v2';
  @ViewChild('sidenav') public sidenav!: MatSidenav;

  constructor(
    private sidenavService: SidenavService){
  }

  ngAfterViewInit(){
    this.sidenavService.setSidenav(this.sidenav);
  }
}
