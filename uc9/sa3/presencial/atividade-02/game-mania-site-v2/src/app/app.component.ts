import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SideNavService } from './_services/side-nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  
  @ViewChild('snav') public snav!: MatSidenav;

  title = 'game-mania-site-v2';
  constructor( private sidenavService: SideNavService ) { }

  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.snav)
  }
}
