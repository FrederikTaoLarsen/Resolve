
import { RoomPage } from '../room/room';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase';
import { DataProvider } from '../../providers/data';
import * as firebase from 'firebase';
import { AddRoomPage } from '../add-room/add-room';

@Component({
  selector: 'page-home1',
  templateUrl: 'home1.html'
})
export class Home1Page {

  postKey;
  commentText;
  comments:any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public firebaseProvider:FirebaseProvider,
    public dataProvider : DataProvider) {
      this.postKey = this.navParams.get('postKey')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentsPage');
    this.dataProvider.getComments(this.postKey).subscribe((comments)=>{
      console.log("commnets================",comments)
      if(this.comments){
        let tempComments = comments[comments.length - 1];
        let tempData = <any>{};
        tempData = tempComments;
        this.dataProvider.getUser(tempComments.commentBy).subscribe((user) => {
          tempData.avatar = user.img;
          tempData.name = user.name
        });
        // this.addOrUpdateTimeline(tempData)
        this.comments.push(tempData);
      }else{
        this.comments = []
        comments.forEach((comment)=>{
          if(comment.$exists()){
            let tempComment = comment;
            let tempData = <any>{};
            tempData = tempComment;
            this.dataProvider.getUser(tempComment.commentBy).subscribe((user) => {
              tempData.avatar = user.img;
              tempData.name = user.name
            });
            // this.addOrUpdateTimeline(tempData)
            this.comments.push(tempData);
          }
        })
      }
    })
  }
  dismiss() {
    this.navCtrl.push(AddRoomPage);
  }

  postComment(){
    let comment = {
      dateCreated: new Date().toString(),
      commentBy:firebase.auth().currentUser.uid,
      commentText:this.commentText,
    }
    this.firebaseProvider.commentPost(this.postKey,comment).then((res)=>{
        this.commentText  = ''
    })
  }
}
