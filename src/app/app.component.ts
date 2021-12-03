import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { timer } from 'rxjs';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'onlinecv';
  showLoader = true;
  private timer: Observable<any> | undefined;

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit():void {
    this.setTimer();
    this.primengConfig.ripple = true;
  }

  public setTimer(){
    this.showLoader = true;
    this.timer = timer(3000);
    this.timer.subscribe(() => {
      this.showLoader = false;
  });
  }

}
