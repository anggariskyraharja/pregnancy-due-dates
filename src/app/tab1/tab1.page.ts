import { ɵDomAdapter } from '@angular/common';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  num1: number = 28;
  from: Date = null;
  to: Date = null;
  edd: Date = null;
  conceive: Date = null;
  pregnancytest: Date = null;
  babyheart: Date = null;
  morningsickness: Date = null;
  appointment: Date = null;
  second : Date = null;
  organ: Date = null;
  heart: Date = null;
  ultrasound: Date = null;
  third: Date = null;
  week: number;
  days: number;
  left: number;
  percent: string;


  clear(){
    this.from = null;
    this.to = null;
    this.num1 = 28;
    this.edd = null;
  }

  calculate(){
    if (this.from == null || this.to == null || this.num1 == null){
      this.presentAlert();
    }else{
      var todate = new Date(this.to);
      var fromdate = new Date(this.from);

      if (todate > fromdate){
        this.presentAlert2();
      } else if (this.num1 < 22 || this.num1 > 44) {
        this.presentAlert3();
      } else{
        var newdate = new Date(this.to);
        var modifierx = this.num1 - 28;
        var modifier = 280 + ((28 - this.num1)*-1);
        newdate.setDate(newdate.getDate()+modifier);
        this.edd = newdate;

        //Ukur usia kehamilan
        var todate = new Date(this.from);
        var fromdate = new Date(this.to);
        var timediff = todate.getTime()-fromdate.getTime();
        var difference_in_days = Math.floor(timediff/(1000*3600*24));
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
        var todate = new Date(this.edd);
        var fromdate = new Date(this.from);
        var timediff = todate.getTime()-fromdate.getTime();
        var difference_in_dayss = Math.floor(timediff/(1000*3600*24))+1;
        this.left = difference_in_dayss;

        //ukur persentase
        var todate = new Date(this.edd);
        var fromdate = new Date(this.to);
        var timediff = todate.getTime()-fromdate.getTime();
        var difference_in_daysss = Math.floor(timediff/(1000*3600*24));
        var prog = (difference_in_days / difference_in_daysss)*100;
        this.percent = (prog).toFixed(2);

        //Milestones
        var newdate = new Date(this.to);
        this.conceive = newdate;
        this.conceive.setDate(this.conceive.getDate()+14);

        var newdate = new Date(this.to);
        this.pregnancytest = newdate;
        this.pregnancytest.setDate(this.pregnancytest.getDate()+23);

        var newdate = new Date(this.to);
        this.babyheart = newdate;
        this.babyheart.setDate(this.babyheart.getDate()+35);

        var newdate = new Date(this.to);
        this.morningsickness = newdate;
        this.morningsickness.setDate(this.morningsickness.getDate()+63);

        var newdate = new Date(this.to);
        this.appointment = newdate;
        this.appointment.setDate(this.appointment.getDate()+70);

        var newdate = new Date(this.to);
        this.second = newdate;
        this.second.setDate(this.second.getDate()+98);

        var newdate = new Date(this.to);
        this.organ = newdate;
        this.organ.setDate(this.organ.getDate()+140);

        var newdate = new Date(this.to);
        this.heart = newdate;
        this.heart.setDate(this.heart.getDate()+142);

        var newdate = new Date(this.to);
        this.ultrasound = newdate;
        this.ultrasound.setDate(this.ultrasound.getDate()+147);

        var newdate = new Date(this.to);
        this.third = newdate;
        this.third.setDate(this.third.getDate()+196);
      }
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

  async presentAlert2() {
    const alert = await this.alertController.create({
      header: 'Wrong Value',
      message: 'First day of LMP must be before today date!',
      buttons: ['Okay']
    });
    await alert.present();
  }

  async presentAlert3() {
    const alert = await this.alertController.create({
      header: 'Wrong Value',
      message: 'Average cycles length must be between 22 to 44 days!',
      buttons: ['Okay']
    });
    await alert.present();
  }

  roundoff(value){
    var value4 = "" + Math.round(value);
    var bonus2 = value4.length + 1;
    var bonus = 0;
    if (value < 100){bonus=bonus+1};
    if (value < 10){bonus=bonus+1};
    if (value < 1){bonus=bonus+1};
    if (value < 0.1){bonus=bonus+1};
    if (value < 0.01){bonus=bonus+1};
    if (value < 0.001){bonus=bonus+1};
    if (value < 0.0001){bonus=bonus+1};
    bonus2 = bonus2+bonus;
    var whole = Math.round(value * Math.pow(10, bonus));
    var whole2 = "" + whole * Math.pow(10, -1*bonus);
    var whole3 = whole2.substr(0,bonus2);
    return whole3;
  }

  constructor(public alertController: AlertController) {
  }

}
