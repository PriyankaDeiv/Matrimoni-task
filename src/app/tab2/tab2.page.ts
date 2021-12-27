import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { GestureController, GestureDetail, IonCard, Platform, ToastController } from '@ionic/angular';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements AfterViewInit {
  profileDatas;
  @ViewChildren(IonCard, { read: ElementRef }) cards: QueryList<ElementRef>;
  constructor(private gestureCtrl: GestureController, public profileService: ProfileService, private plt: Platform, private toast: ToastController) {
    this.profileService.profileData().subscribe((data) => {
      this.profileDatas = data;
    });
  }

  ngAfterViewInit() {
    const cardsArray = this.cards.toArray();
    this.cardSwiper(cardsArray);
  }

  async toastMessage(message, toastClass) {
    const toast = await this.toast.create({
      message: message,
      duration: 1000,
      cssClass: toastClass,
      buttons: [
        {
          side: 'end',
          icon: 'close'
        }]
    });
    toast.present();
  }


  interest(val, index) {
    const cardsArray = this.cards.toArray();
    this.cardSwiper(cardsArray, val, index);
  }

  notInterest(val, index) {
    const cardsArray = this.cards.toArray();
    this.cardSwiper(cardsArray, val, index);
  }

  shortlist(val, index) {
    const cardsArray = this.cards.toArray();
    this.cardSwiper(cardsArray, val, index);
  }

  cardSwiper(cardsArray, slideVal?, index?) {
    for (let i = 0; i < cardsArray.length; i++) {
      const card = cardsArray[i];
      const gesture = this.gestureCtrl.create({
        el: card.nativeElement,
        gestureName: 'swiper',
        onStart: ev => { },
        onMove: ev => {
          card.nativeElement.style.transform = `translateX(${ev.deltaX}px) rotate(${ev.deltaX / 10}deg)`;
        },
        onEnd: ev => {
          card.nativeElement.style.transition = '.5 ease-out';
          if (ev.deltaX > 150) {
            card.nativeElement.style.transform = `translateX(${+this.plt.width() * 2}px) rotate(${ev.deltaX / 2}deg)`;
            this.toastMessage('Intersted','interest-toast');
          }
          else if (ev.deltaX < -150) {
            card.nativeElement.style.transform = `translateX(-${+this.plt.width() * 2}px) rotate(${ev.deltaX / 2}deg)`;
            this.toastMessage('Not Intersted','not-interest-toast');
          }
          else {
            card.nativeElement.style.transform = '';
          }
        }
      });
      gesture.enable(true);
    }
    if (slideVal) {
      for (let i = 0; i < cardsArray.length; i++) {
        const card = cardsArray[index];
        card.nativeElement.style.transition = '.5 ease-out';
        if (slideVal > 150) {
          card.nativeElement.style.transform = `translateX(${+this.plt.width() * 2}px) rotate(${slideVal / 2}deg)`;
          this.toastMessage('INTERESTED','interest-toast');
        }
        else if (slideVal < -150) {
          card.nativeElement.style.transform = `translateX(-${+this.plt.width() * 2}px) rotate(${slideVal / 2}deg)`;
          this.toastMessage('NOT INTERESTED','not-interest-toast');
        }
        else {
          card.nativeElement.style.transform = '';
        }
        if (slideVal == 1) {
          card.nativeElement.style.transform = `translateX(-${+this.plt.width() * 2}px) rotate(${slideVal / 2}deg)`;
          this.toastMessage('SHORTLISTED','shortlist-toast');
        }
      }
    }
  }

  setCardColor(x, element) {
    let color = '';
    const abs = Math.abs(x);
    const min = Math.trunc(Math.min(16 * 16 - abs, 16 * 16));
    const hexCode = this.decimalToHex(min, 2);
    if (x < 0) {
      color = '#FF' + hexCode + hexCode;
    }
    else {
      color = '#' + hexCode + 'FF' + hexCode;
    }
    element.style.background = color;
  }

  decimalToHex(d, padding) {
    let hex = Number(d).toString(16);
    padding = typeof padding === 'undefined' || padding === null ? (padding = 2) : padding;
    while (hex.length < padding) {
      hex = '0' + hex;
    }
    return hex;
  }
}
