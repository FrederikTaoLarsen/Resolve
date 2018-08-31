import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase/app';
import {  AngularFireDatabase } from 'angularfire2/database';
import { HomePage } from '../home/home';
import { Home1Page } from '../home1/home1';

/**
 * Generated class for the ExplorePublicProgramsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-explore-public-programs',
  templateUrl: 'explore-public-programs.html',
})
export class ExplorePublicProgramsPage {
 
  programs = [];
  ref = firebase.database().ref('createProgram/');
  
  constructor(public afd: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    this.ref.on('value', resp => {

      this.programs = snapshotToArray(resp);
    
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomPage');
  }

  deleteProgram(id) {
    this.afd.list('createProgram/').remove(id)
   }

  updateProgram(id) {
    firebase.database().ref('createProgram/' + id).set({
      pname: "whatapp",
    }, function(error) {
      if (error) {
        // The write failed...
      } else {
        // Data saved successfully!
      }
    });
  }

  joinRoom(key) {
    this.navCtrl.setRoot(Home1Page, {
      key:key,
      // nickname:this.navParams.get("nickname")
    });
  }

  publicProgram() {
    this.navCtrl.push(ExplorePublicProgramsPage);
  }

}

export const snapshotToArray = snapshot => {
    let returnArr = [];

    snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });

    return returnArr;
};


  
