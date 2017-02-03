import { Component, ViewChild } from '@angular/core';
import { Nav, MenuController ,Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';

export interface PageInterface {
  title: string;
  component: any;
  icon: string;
  index?: number;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabsPage;

  pages: PageInterface[];

  constructor(
    public userData: UserData,
    public platform: Platform,
    public menu: MenuController,
    public confData: ConferenceData
    ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Schedule', component: TabsPage, index: 0, icon: 'calendar' },
      { title: 'Speakers', component: TabsPage, index: 1, icon: 'contacts' },
      { title: 'About', component: TabsPage, index: 2, icon: 'information-circle' }
    ];

    confData.load(); 
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component, { tabIndex: page.index });
  }
}
