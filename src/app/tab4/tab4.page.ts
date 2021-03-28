import { ɵDomAdapter } from '@angular/common';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  calculate1(){this.presentAlert1();}
  calculate2(){this.presentAlert2();}
  calculate3(){this.presentAlert3();}
  calculate4(){this.presentAlert4();}
  calculate5(){this.presentAlert5();}
  calculate6(){this.presentAlert6();}
  calculate7(){this.presentAlert7();}
  calculate8(){this.presentAlert8();}
  calculate9(){this.presentAlert9();}
  calculate10(){this.presentAlert10();}
  calculate11(){this.presentAlert11();}
  calculate12(){this.presentAlert12();}
  calculate13(){this.presentAlert13();}
  calculate14(){this.presentAlert14();}
  calculate15(){this.presentAlert15();}
  calculate16(){this.presentAlert16();}
  calculate17(){this.presentAlert17();}

  async presentAlert1() {
    const alert = await this.alertController.create({
      header: 'Info',
      message: 'Folic acid reduces your baby’s risk of neural tube defects to almost nil. Vitamin D helps your baby develop healthy bones, teeth and muscles.',
      buttons: ['Okay']
    });
    await alert.present();
  }
  async presentAlert2() {
    const alert = await this.alertController.create({
      header: 'Info',
      message: 'Being sedentary (sitting down a lot) is not healthy for you or your baby. The recommended amount of activity for pregnant women is 30 minutes a day four times a week.',
      buttons: ['Okay']
    });
    await alert.present();
  }
  async presentAlert3() {
    const alert = await this.alertController.create({
      header: 'Info',
      message: 'Some foods carry a small risk of infections, such as toxoplasmosis or listeriosis. Others can give you food poisoning, such as salmonella. Others have too much vitamin A or mercury, which can harm your developing.',
      buttons: ['Okay']
    });
    await alert.present();
  }
  async presentAlert4() {
    const alert = await this.alertController.create({
      header: 'Info',
      message: 'Your baby’s movements are a sign that they are well. Start monitoring movements at around week 24 and if you notice a reduction in movement seek help immediately.',
      buttons: ['Okay']
    });
    await alert.present();
  }
  async presentAlert5() {
    const alert = await this.alertController.create({
      header: 'Info',
      message: 'Going to sleep on your back in the third trimester doubles your risk of stillbirth. You may wake up in all sorts of positions during the night, and that’s OK, but if you go to sleep on your side you will be sleeping safely for your baby.',
      buttons: ['Okay']
    });
    await alert.present();
  }
  async presentAlert6() {
    const alert = await this.alertController.create({
      header: 'Info',
      message: '1 in 10 women suffer mental ill-health when they are pregnant. Don’t write off negative, unusual or unexpected bad feelings as part of your pregnancy.',
      buttons: ['Okay']
    });
    await alert.present();
  }
  async presentAlert7() {
    const alert = await this.alertController.create({
      header: 'Info',
      message: 'In pregnancy you will be offered some vaccinations, such as whooping cough vaccine or flu vaccine.',
      buttons: ['Okay']
    });
    await alert.present();
  }
  async presentAlert8() {
    const alert = await this.alertController.create({
      header: 'Info',
      message: 'It is recommended to carry your antenatal notes everywhere you go as they contain all your medical and pregnancy history.',
      buttons: ['Okay']
    });
    await alert.present();
  }
  async presentAlert9() {
    const alert = await this.alertController.create({
      header: 'Info',
      message: 'Women have said that the best time in pregnancy for overseas holidays is the middle of pregnancy. Nausea and tiredness are common in the first 12 weeks of pregnancy, and the risk of miscarriage is also higher in the first three months (this is not linked to travelling). Travelling in the final months of pregnancy can be tiring and uncomfortable.',
      buttons: ['Okay']
    });
    await alert.present();
  }
  async presentAlert10() {
    const alert = await this.alertController.create({
      header: 'Info',
      message: 'There are some symptoms that should always be checked with a midwife or doctor as they could be a sign that the baby is unwell: bleeding from the vagina, painful urination, sharp or continuing abdominal pain or cramps, persistent or severe headache, swelling in face, hands, or legs, blurred vision, itching, baby movement slowing down, excessive or smelly vaginal discharge',
      buttons: ['Okay']
    });
    await alert.present();
  }
  async presentAlert11() {
    const alert = await this.alertController.create({
      header: 'Info',
      message: 'There’s no need for extra calories in the first or second trimesters. In the third trimester, you should have an extra 200 calories if you are active.',
      buttons: ['Okay']
    });
    await alert.present();
  }
  async presentAlert12() {
    const alert = await this.alertController.create({
      header: 'Info',
      message: 'Smoking is a major modifiable risk factor (something you can change) for all sorts of health problems for your baby. It’s never too late to stop.',
      buttons: ['Okay']
    });
    await alert.present();
  }
  async presentAlert13() {
    const alert = await this.alertController.create({
      header: 'Info',
      message: 'Don’t drink alcohol, especially in the first trimester when the baby’s brain is going through a period of intense development.',
      buttons: ['Okay']
    });
    await alert.present();
  }
  async presentAlert14() {
    const alert = await this.alertController.create({
      header: 'Info',
      message: 'Cocaine, meta-amphetamines, cannabis, psychoactive substances (so called ‘legal highs’) are all likely to increase risks of health problems.',
      buttons: ['Okay']
    });
    await alert.present();
  }
  async presentAlert15() {
    const alert = await this.alertController.create({
      header: 'Info',
      message: 'Most exercise is safe and healthy, but a handful of activities could cause injury to the baby.',
      buttons: ['Okay']
    });
    await alert.present();
  }
  async presentAlert16() {
    const alert = await this.alertController.create({
      header: 'Info',
      message: 'More than 60% of women who checked their caffeine intake on our caffeine calculator were surprised to find that they were over the limit. High levels of caffeine during pregnancy can result in low birth weight babies, which can increase the risk of health problems in later life.',
      buttons: ['Okay']
    });
    await alert.present();
  }
  async presentAlert17() {
    const alert = await this.alertController.create({
      header: 'Info',
      message: 'Cutting out food groups may deprive your baby against nutrients they need for growth. Instead of dieting, it is best to have a healthy balanced diet.',
      buttons: ['Okay']
    });
    await alert.present();
  }

  constructor(public alertController: AlertController) {
  }

}
