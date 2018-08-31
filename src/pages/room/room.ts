import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddRoomPage } from '../add-room/add-room';
import { HomePage } from '../home/home';
import {AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase';
import { CreateProgramPage } from '../create-program/create-program';
import { Home1Page } from '../home1/home1';

@IonicPage()
@Component({
  selector: 'page-room',
  templateUrl: 'room.html',
})
export class RoomPage {

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

  addRoom() {
    this.navCtrl.push(AddRoomPage);
  }

  createRoom() {
    this.navCtrl.push(CreateProgramPage);

    
  }

  joinRoom(key) {
    this.navCtrl.setRoot(Home1Page, {
      key:key,
      // nickname:this.navParams.get("nickname")
    });
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
