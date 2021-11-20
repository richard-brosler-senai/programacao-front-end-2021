import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})

export class SideNavService {
  private snav! : MatSidenav;

  constructor() { }

  public setSidenav(snav: MatSidenav){
    this.snav = snav;
  }

  public open(){
    return this.snav.open();
  }

  public close(){
    return this.snav.close();
  }

  public toggle(): void {
    this.snav.toggle();
  }  
}
