import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the IndReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ind-report',
  templateUrl: 'ind-report.html',
})
export class IndReportPage {

  selectedReport: any;
  currentReport: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public afDatabase: AngularFireDatabase) {
   //navparams is the parameters you pass between pages
    this.selectedReport = navParams.get('report');
    console.log(this.selectedReport.title);

  }

}
