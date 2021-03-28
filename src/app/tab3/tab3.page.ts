import { ɵDomAdapter } from '@angular/common';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  num: number
  week: number;
  days: number;
  left: number;
  percent: string;
  from: Date = null;
  edd: Date = null;
  selection: string;
  eq1: string = 'true';
  eq2: string;
  eq3: string;

  clear(){
    this.from = null;
    this.num = null;
    this.edd = null;
  }

  calculate(){
    if (this.from == null || this.num == null){
      this.presentAlert();
    }else{
      if (this.eq1 == "true"){
        var weeks = 5.2867 + (0.1584 * this.num) - (0.0007 * this.num * this.num);
      } else if (this.eq2 == "true"){
        var weeks = Math.floor((2 * this.num + 44.2))/7;
      } else if (this.eq3 == "true"){
        var a = (1.854 + (0.010451 * this.num) - (0.000029919 * this.num * this.num) + 0.000000043156 * this.num * this.num * this.num);
        var e = 2.718281828459045235360287471352;
        var weeks = Math.pow(e, a);
      }
      var total_days = Math.ceil(weeks * 7);
      var days_left = 280 - total_days;
      var newdate = new Date(this.from);
      newdate.setDate(newdate.getDate()+days_left);
      this.edd = newdate;

      //ukur usia kehamilan
        var difference_in_days = total_days;
        var difference_in_weeks1 = difference_in_days/7;
        if (difference_in_weeks1>0){
          difference_in_weeks1 = Math.floor(difference_in_weeks1);
        }else{
          difference_in_weeks1 = Math.ceil(difference_in_weeks1);
        }
        var difference_in_weeks2 = Math.floor(difference_in_days - (7*difference_in_weeks1));
        this.week = difference_in_weeks1;
        this.days = difference_in_weeks2;

        //ukur progress
        var difference_in_dayss = 280-total_days;
        this.left = difference_in_dayss;

        //ukur persentase
        var prog = (total_days / 280)*100;
        this.percent = (prog).toFixed(2);
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Missing Value',
      message: 'Please input all the required values!',
      buttons: ['Okay']
    });
    await alert.present();
  }

  check(event) {
    console.log('radioGroupChange',event.detail);
    this.selection = event.target.value;
    if (this.selection == 'eq1'){
      this.eq1 = "true";
      this.eq2 = null;
      this.eq3 = null;
    } else if (this.selection == 'eq2'){
      this.eq2 = "true";
      this.eq1 = null;
      this.eq3 = null;
    } else if (this.selection == 'eq3'){
      this.eq3 = "true";
      this.eq2 = null;
      this.eq1 = null;
    }
  }

  constructor(public alertController: AlertController) {
  }

}
