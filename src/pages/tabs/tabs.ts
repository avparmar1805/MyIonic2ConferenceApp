import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { AboutPage } from "../about/about";
import { SchedulePage } from "../schedule/schedule";
import { SpeakerListPage } from "../speaker-list/speaker-list";

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = SchedulePage;
  tab2Root: any = SpeakerListPage;
  tab3Root: any = AboutPage;
  mySelectedIndex: number;

  constructor(public navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }
}
