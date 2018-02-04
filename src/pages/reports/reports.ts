import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IndReportPage } from '../ind-report/ind-report'

/**
 * Generated class for the ReportsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reports',
  templateUrl: 'reports.html',
})
export class ReportsPage {

  reports: Observable<any>;
  reportsRef: AngularFireList<any>;
  individualReportPage: IndReportPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public afDatabase: AngularFireDatabase) {
    this.reports = afDatabase.list('/username/Thinesh/Reports').valueChanges();
    this.reportsRef = afDatabase.list('/username/Thinesh/Reports');
  }

  itemTapped(event, report) {
    // when doing this you move to another page. idk what navCtrl is. You push the name, then the parameters, each having their own identifier.
    this.navCtrl.push(IndReportPage, {
      report: report
    });
  }


}
