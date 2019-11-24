import {  Component, ViewChild, AfterViewInit } from '@angular/core';
import * as CountUpModule from 'countup.js-angular2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements AfterViewInit {
  title = 'SlideSeminaire';
  //methode permettant de gérer un traitement toutes les secondes
  intervalStartTimer;
  //pourcentage du timer
  percent = 0;

  //nombredeLog
  numberOfLog = 0;

  ngAfterViewInit(){
    this.startCountingNumberOfLog(100000, 60);
  }

  startCountingNumberOfLog(numberofLogMax: number,duration: number) {
    //on divise le nombre de ligne par le temps
    const increment = numberofLogMax / duration ;
    setInterval(() => {
      //si on est pas a 100%
      if (this.numberOfLog < numberofLogMax) {
        //alors on incrémente
        this.numberOfLog = Math.round(this.numberOfLog + increment);
      }
      //sinon on met a 100%
      else {
        this.numberOfLog = numberofLogMax;
      }
    }, 1000);
  }


  /**
   * Méthode permettant de gérer le temps
   * @param nbSecond , le temps en seconde avant d'arriver a 100%
   */
  startTimer(nbSecond: number) {
    //init du pourcentage
    this.percent = 0;
    //on divise les 100% de progression via le temps
    const increment = 100 / nbSecond ;
    //on clear l'interval actuel si il existe
    clearInterval(this.intervalStartTimer);
    //toutes les 1 secondes
    this.intervalStartTimer = setInterval(() => {
      //si on est pas a 100%
      if (this.percent < 100) {
        //alors on incrémente
        this.percent += increment;
      }
      //sinon on met a 100%
      else {
        this.percent = 100;
      }
    }, 1000);
  }
}
