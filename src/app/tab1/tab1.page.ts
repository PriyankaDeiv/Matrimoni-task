import { Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import SwiperCore, { EffectCoverflow, Navigation } from "swiper";
import { profile, ProfileService } from '../services/profile.service';
import { Router } from '@angular/router';

SwiperCore.use([EffectCoverflow, Navigation]);
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class Tab1Page {
  profileDatas: Observable<profile[]>;
  constructor(public profileService: ProfileService, public router: Router) {
    this.profileDatas = this.profileService.profileData();
  }

  profileDetail(profileId: number) {
    this.router.navigate([`profile/profile-detail/${profileId}`]);
  }
}
