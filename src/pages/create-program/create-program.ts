import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ActionSheetController } from 'ionic-angular';
import * as firebase from 'firebase/app';
import {  AngularFireDatabase } from 'angularfire2/database';
import {storage} from 'firebase';
import {Camera, CameraOptions} from '@ionic-native/camera';
// import { HomePage } from '../home/home';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';


/**
 * Generated class for the CreateProgramPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-program',
  templateUrl: 'create-program.html',
})
export class CreateProgramPage {



  public numOfExcersises: number = 2; 

  public numOfSets: number = 4; 

  // programClicked: boolean = false;

  public form: FormGroup;

  ref = firebase.database().ref('createProgram/');
  private s: any;
  private index: 0;
  

  data = { pname:'' };


  data1 = {excersise:'' };
  data2 = {excersise:''};
  data3 = {excersise:''};
  data4 = {excersise:''};
  data5 = {excersise:''};
  data6 = {excersise:''};
  data7 = {excersise:''}
  data8 = {excersise:''}
  data9 = {excersise:''}
  data10 = {excersise:''}
  data11 = {excersise:''}
  data12 = {excersise:''}
  data13 = {excersise:''}
  data14 = {excersise:''}
  data15 = {excersise:''}
  data16 = {excersise:''}
  data17 = {excersise:''}
  data18 = {excersise:''}
  data19 = {excersise:''}
  data20 = {excersise:''}
  data21 = {excersise:''}
  data22 = {excersise:''}
  data23 = {excersise:''}
  data24 = {excersise:''}



  data1001 = { reps:'' };
  data1002 = { reps:'' };
  data1003 = { reps:'' };
  data1004 = { reps:'' };
  data1005 = { reps:'' };
  data1006 = { reps:'' };
  data1007 = { reps:'' };
  data1008 = { reps:'' };
  data1009 = { reps:'' };
  data10010 = { reps:'' };
  data10011 = { reps:'' };
  data10012 = { reps:'' };
  data10013 = { reps:'' };
  data10014 = { reps:'' };
  data10015 = { reps:'' };
  data10016 = { reps:'' };
  data10017 = { reps:'' };
  data10018 = { reps:'' };
  data10019 = { reps:'' };
  data10020 = { reps:'' };


  data2001 = {weig:'' };
  data2002 = {weig:'' };
  data2003 = {weig:'' };
  data2004 = {weig:'' };
  data2005 = {weig:'' };
  data2006 = {weig:'' };
  data2007 = {weig:'' };
  data2008 = {weig:'' };
  data2009 = {weig:'' };
  data20010 = {weig:'' };
  data20011 = {weig:'' };
  data20012 = {weig:'' };
  data20013 = {weig:'' };
  data20014 = {weig:'' };
  data20015 = {weig:'' };
  data20016 = {weig:'' };
  data20017 = {weig:'' };
  data20018 = {weig:'' };
  data20019 = {weig:'' };
  data20020 = {weig:'' };


  data3001 = { sets:'' };
  
  //Program name
  pname = [];
  //Excersise
  excersise1= [];
  excersise2= [];
  excersise3= [];
  excersise4= [];
  excersise5= [];
  excersise6= [];
  excersise7= [];
  excersise8= [];
  excersise9= [];
  excersise10= [];
  excersise11= [];
  excersise12= [];
  excersise13= [];
  excersise14= [];
  excersise15= [];
  excersise16= [];
  excersise17= [];
  excersise18= [];
  excersise19= [];
  excersise20= [];

  //Reps
  reps1001= [];
  reps1002= [];
  reps1003= [];
  reps1004= [];
  reps1005= [];
  reps1006= [];
  reps1007= [];
  reps1008= [];
  reps1009= [];
  reps10010= [];
  reps10011= [];
  reps10012= [];
  reps10013= [];
  reps10014= [];
  reps10015= [];
  reps10016= [];
  reps10017= [];
  reps10018= [];
  reps10019= [];
  reps10020= [];


  weig2001= [];
  weig2002= [];
  weig2003= [];
  weig2004= [];
  weig2005= [];
  weig2006= [];
  weig2007= [];
  weig2008= [];
  weig2009= [];
  weig20010= [];
  weig20011= [];
  weig20012= [];
  weig20013= [];
  weig20014= [];
  weig20015= [];
  weig20016= [];
  weig20017= [];
  weig20018= [];
  weig20019= [];
  weig20020= [];
  

  //Sets
  sets= 0;
  excersises=0;

  
  
  gender: string;
  


  constructor(private _FB: FormBuilder,
    private camera: Camera,
    public afd: AngularFireDatabase,
     public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform,
     public actionsheetCtrl: ActionSheetController) {

    //   this.form = this._FB.group({
    //     name       	  : ['', Validators.required],
    //     technologies     : this._FB.array([
    //        this.initTechnologyFields()
    //     ])
    //  });

     
  }
 



  nextSets() {
    // this.navCtrl.push(NextSetsPage);
  }


  

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomPage');
  }

  // deleteRoom(id) {
  //   this.afd.list('chatrooms/').remove(id)
  //  }

  // updateRoom(id) {
  //   firebase.database().ref('chatrooms/' + id).set({
  //     roomname: "whatapp",
  //   }, function(error) {
  //     if (error) {
  //       // The write failed...
  //     } else {
  //       // Data saved successfully!
  //     }
  //   });
  // }

  addProgram() {
    let newData = this.ref.push();
    newData.set({
      pname:this.data.pname,

      excersise1:this.data1.excersise,
      excersise2:this.data2.excersise,
      excersise3:this.data3.excersise,
      excersise4:this.data4.excersise,
      excersise5:this.data5.excersise,
      excersise6:this.data6.excersise,
      excersise7:this.data7.excersise,
      excersise8:this.data8.excersise,
      excersise9:this.data9.excersise,
      excersise10:this.data10.excersise,
      excersise11:this.data11.excersise,
      excersise12:this.data12.excersise,
      excersise13:this.data13.excersise,
      excersise14:this.data14.excersise,
      excersise15:this.data15.excersise,
      excersise16:this.data16.excersise,
      excersise17:this.data17.excersise,
      excersise18:this.data18.excersise,
      excersise19:this.data19.excersise,
      excersise20:this.data20.excersise,
      
      reps1001:this.data1001.reps,
      reps1002:this.data1002.reps,
      reps1003:this.data1003.reps,
      reps1004:this.data1004.reps,
      reps1005:this.data1005.reps,
      reps1006:this.data1006.reps,
      reps1007:this.data1007.reps,
      reps1008:this.data1008.reps,
      reps1009:this.data1009.reps,
      reps10010:this.data10010.reps,
      reps10011:this.data10011.reps,
      reps1012:this.data10012.reps,
      reps1013:this.data10013.reps,
      reps1014:this.data10014.reps,
      reps1015:this.data10015.reps,
      reps1016:this.data10015.reps,
      reps1017:this.data10016.reps,
      reps1018:this.data10017.reps,
      reps1019:this.data10018.reps,
      reps1020:this.data10019.reps,
      reps1021:this.data10020.reps,


      

      weig2001:this.data2001.weig,
      weig2002:this.data2002.weig,
      weig2003:this.data2003.weig,
      weig2004:this.data2004.weig,
      weig2005:this.data2005.weig,
      weig2006:this.data2006.weig,
      weig2007:this.data2007.weig,
      weig2008:this.data2008.weig,
      weig2009:this.data2009.weig,
      weig20010:this.data20010.weig,
      weig20011:this.data20011.weig,
      weig20012:this.data20012.weig,
      weig20013:this.data20013.weig,
      weig20014:this.data20014.weig,
      weig20015:this.data20015.weig,
      weig20016:this.data20016.weig,
      weig20017:this.data20017.weig,
      weig20018:this.data20018.weig,
      weig20019:this.data20019.weig,
      weig20020:this.data20020.weig,

      sets:this.numOfSets,
      excersises:this.numOfExcersises



      // numOfExcersises:this.numOfExcersises,

      // numOfSets:this.nextSets
   


    });
    this.navCtrl.pop();
  }

  
//Alert

public addExcersise() {
  
  this.numOfExcersises++;

  return this.numOfExcersises;
 
}

public addSet() {
  
  this.numOfSets++;

  return this.numOfSets;
 
}

// public programClicked() {
  
//   this.programClicked = !this.programClicked;

  
// }

// public onButtonClick2() {

//   this.buttonClicked2 = !this.buttonClicked2;
// }

// public onButtonClick3() {

//   this.buttonClicked3 = !this.buttonClicked3;
// }

// public onButtonClick4() {

//   this.buttonClicked4 = !this.buttonClicked4;
// }


// public onButtonClick5() {

//   this.buttonClicked5 = !this.buttonClicked5;
// }

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Albums',
      cssClass: 'action-sheets',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Share',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Play',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'Favorite',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  
  async takePhoto(){
    try{
     //defining camera options
     const options: CameraOptions  = {
       quality:50,
       targetHeight: 600,
       targetWidth: 600,
       destinationType: this.camera.DestinationType.DATA_URL,
       encodingType: this.camera.EncodingType.JPEG,
       mediaType: this.camera.MediaType.PICTURE
     }
 const result = await this.camera.getPicture(options);
 const image = `data:image/jpeg;base64,${result}`
 const pictures = storage().ref('pictures');
 pictures.putString(result, 'data_url');
   }
   catch(e){
     console.error(e);
   }
 }
}




  
