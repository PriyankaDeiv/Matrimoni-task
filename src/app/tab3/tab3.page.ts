import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { profile, ProfileService } from '../services/profile.service';
import { filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  profileDatas: profile[];
  constructor(public profileService: ProfileService, public activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.pipe(
      filter((data) => !!data),
      switchMap((data) => {
        return this.profileService.profileData(data.id)
      })).subscribe((data) => {
        this.profileDatas = data;
      });
  }

}
