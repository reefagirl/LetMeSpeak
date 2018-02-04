import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ReportsPage } from '../pages/reports/reports';
import { SettingsPage } from '../pages/settings/settings';
import { IndReportPage } from '../pages/ind-report/ind-report';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
 
 
// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyAxJUxVzJIOT7muBYZR5Tt2E5rfsovhH-I",
  authDomain: "letmespeak-f0b81.firebaseapp.com",
  databaseURL: "https://letmespeak-f0b81.firebaseio.com",
  projectId: "letmespeak-f0b81",
  storageBucket: "letmespeak-f0b81.appspot.com",
  messagingSenderId: "342076382672"
};

@NgModule({
  declarations: [
    MyApp,
    ReportsPage,
    SettingsPage,
    HomePage,
    IndReportPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ReportsPage,
    SettingsPage,
    HomePage,
    IndReportPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
