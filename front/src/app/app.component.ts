import { Component, OnInit } from '@angular/core';
import { Event, Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'LaborApp';

  showSpiner = true;
  fade = '';

  constructor( private _router: Router ){

    this._router.events
      .subscribe( (routerEvent: Event) => {

        if(routerEvent instanceof NavigationStart){
          this.showSpiner = true;
        }
        if(routerEvent instanceof NavigationEnd){
        }

      })

  }

  ngOnInit(){


  }

  ngAfterViewChecked() {
    console.log('paso aqui')
    this.fade = 'fadeout 6s linear 1'
    setTimeout( ()=> {
      this.showSpiner = false;
    }, 7000)
  }
}
