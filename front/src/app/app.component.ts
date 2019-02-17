import { Component, OnInit } from '@angular/core';
import { Event, Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LaborApp';

  showSpiner = true;
  fade = '';


  constructor(private _router: Router) {

    this._router.events.subscribe((routerEvent: Event) => {

      if (routerEvent instanceof NavigationStart) {
        if(routerEvent['url'] === '/login' || routerEvent['url'] === '/usuario'){
          this.showSpiner = true;
        }
      }

      if (routerEvent instanceof NavigationEnd) {
        //this.fade = 'fadeout 6s linear'

        setTimeout(() => {
          this.showSpiner = false;
        }, 4000)

      }
    })

  }


}
