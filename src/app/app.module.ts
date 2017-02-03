import { NgModule } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from "../pages/about/about";
import { PopoverPage } from '../pages/about-popover/about-popover';
import { SchedulePage } from "../pages/schedule/schedule";
import { SpeakersPage } from "../pages/speakers/speakers";
import { SupportPage } from '../pages/support/support';
import { ScheduleFilterPage } from '../pages/schedule-filter/schedule-filter';
import { SessionDetailPage } from '../pages/session-detail/session-detail';
import { SpeakerDetailPage } from '../pages/speaker-detail/speaker-detail';
import { SpeakerListPage } from '../pages/speaker-list/speaker-list';

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PopoverPage,
    AboutPage,
    SchedulePage,
    SpeakersPage,
    SupportPage,
    SessionDetailPage,
    ScheduleFilterPage,
    SpeakerDetailPage,
    SpeakerListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PopoverPage,
    AboutPage,
    SchedulePage,
    SpeakersPage,
    SupportPage,
    SessionDetailPage,
    ScheduleFilterPage,
    SpeakerDetailPage,
    SpeakerListPage
  ],
  providers: [ConferenceData, UserData, Storage]
})
export class AppModule {}
