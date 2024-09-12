import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  hideFooter: boolean = false;
  lastScrollTop: number = 0;
  
  onScroll(event:any){
    const scrollTop = event.detail.scrollTop;

    if(scrollTop > this.lastScrollTop){
      //Desliza hacia abajo
      this.hideFooter = true;
    } else{
      //Desliza hacia arriba
      this.hideFooter = false;
    }
    this.lastScrollTop = scrollTop;


  }

}
