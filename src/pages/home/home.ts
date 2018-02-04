import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //You need both to work
  audios: Observable<any>;
  audiosRef: AngularFireList<any>;

  constructor(public navCtrl: NavController, afDatabase: AngularFireDatabase) {
      //You need both to work
    this.audios = afDatabase.list('/username/Thinesh/Recordings').valueChanges();
    this.audiosRef = afDatabase.list('/username/Thinesh/Recordings');
  }

  

}
