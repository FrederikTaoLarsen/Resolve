import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { GooglePlus } from '@ionic-native/google-plus';
import { Keyboard } from '@ionic-native/keyboard';
import { Toast } from '@ionic-native/toast';
 import { GoogleMaps } from '@ionic-native/google-maps';
import { CameraPreview } from '@ionic-native/camera-preview';
import { PhotoLibrary } from '@ionic-native/photo-library';
 import { MediaCapture } from '@ionic-native/media-capture';
// import { NativeGeocoder} from '@ionic-native/native-geocoder';
 import { AppCenterCrashes } from '@ionic-native/app-center-crashes';

import { Geolocation } from '@ionic-native/geolocation';
import { MyApp } from './app.component';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { VerificationPage } from '../pages/verification/verification';
import { TrialPage } from '../pages/trial/trial';
import { TabsPage } from '../pages/tabs/tabs';
import { MessagesPage } from '../pages/messages/messages';
import { GroupsPage } from '../pages/groups/groups';
import { FriendsPage } from '../pages/friends/friends';
import { SearchPeoplePage } from '../pages/search-people/search-people';
import { RequestsPage } from '../pages/requests/requests';
import { UserInfoPage } from '../pages/user-info/user-info';
import { NewMessagePage } from '../pages/new-message/new-message';
import { MessagePage } from '../pages/message/message';
import { NewGroupPage } from '../pages/new-group/new-group';
import { GroupPage } from '../pages/group/group';
import { AddPostPage } from '../pages/add-post/add-post';
import { TimelinePage } from '../pages/timeline/timeline';
import { GroupInfoPage } from '../pages/group-info/group-info';
import { SettingsPage } from '../pages/settings/settings';
import { AddMembersPage } from '../pages/add-members/add-members';
import { ImageModalPage } from '../pages/image-modal/image-modal';
import { LoginProvider } from '../providers/login';
import { LogoutProvider } from '../providers/logout';
import { LoadingProvider } from '../providers/loading';
import { AlertProvider } from '../providers/alert';
import { ImageProvider } from '../providers/image';
import { DataProvider } from '../providers/data';
import { FirebaseProvider } from '../providers/firebase';
import { CommentsPage} from '../pages/comments/comments';
import { FavoritesPage } from '../pages/favorites/favorites';
import { InterestTimelinePage } from '../pages/interest-timeline/interest-timeline';
import { ManagePhotoPage } from '../pages/manage-photo/manage-photo';
import { ImageService } from '../util/imageservice';
import { UnsplashItUtil } from '../util/unsplashItutil';
import { ShowPhoto } from '../pages/show-photo/show-photo'; 
import { FilterService } from '../util/filterservice';
import { TabsService } from '../util/tabservice';
import { PublishPage } from '../pages/publish/publish';
import { CDVPhotoLibraryPipe } from '../pipes/cdvphotolibrary.pipe';
import { StoryService } from '../providers/story.service';
import { AddStoryPage } from '../pages/add-story/add-story';
import { ViewPostPage } from '../pages/view-post/view-post';
import { CreateProgramPageModule } from '../pages/create-program/create-program.module';


// import { AngularFireModule, AngularFireAuthMethods, AngularFireAuthProviders } from 'angularfire2';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth, } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
// import { GooglePlus } from '@ionic-native/google-plus';

import { Login } from '../login';

import { FriendPipe } from '../pipes/friend';
import { SearchPipe } from '../pipes/search';
import { ConversationPipe } from '../pipes/conversation';
import { DateFormatPipe } from '../pipes/date';
import { GroupPipe } from '../pipes/group';
import { PostOptionsComponent } from '../components/post-options/post-options';
import { HashtagPipe } from '../pipes/hashtag/hashtag';
import { SafePipe } from '../pipes/safe/safe';
import { ProfilenamePipe } from '../pipes/profilename/profilename';
import { AddRoomPageModule } from '../pages/add-room/add-room.module';
import { RoomPageModule } from '../pages/room/room.module';
import { CreateProgramPage } from '../pages/create-program/create-program';
import { AddRoomPage } from '../pages/add-room/add-room';
import { RoomPage } from '../pages/room/room';
import { Home1Page } from '../pages/home1/home1';
import { ExplorePublicProgramsPage } from '../pages/explore-public-programs/explore-public-programs';
import { PnamePipe } from '../pipes/pname/pname';



firebase.initializeApp(Login.firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    VerificationPage,
    TrialPage,
    TabsPage,
    MessagesPage,
    GroupsPage,
    FriendsPage,
    SearchPeoplePage,
    RequestsPage,
    UserInfoPage,
    NewMessagePage,
    MessagePage,
    NewGroupPage,
    GroupPage,
    GroupInfoPage,
    AddMembersPage,
    ImageModalPage,
    FriendPipe,
    ConversationPipe,
    SearchPipe,
    DateFormatPipe,
    GroupPipe,
    TimelinePage,
    AddPostPage,
    CommentsPage,
    SettingsPage,
    FavoritesPage,
    PostOptionsComponent,
    InterestTimelinePage,
    ManagePhotoPage,
    ShowPhoto,
    PublishPage,
    CDVPhotoLibraryPipe,
    HashtagPipe,
    AddStoryPage,
    ViewPostPage,
    SafePipe,
    ProfilenamePipe,
    CreateProgramPage,
    AddRoomPage,
    RoomPage,
    Home1Page,
    ExplorePublicProgramsPage,
    PnamePipe
    
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      mode: 'ios',
      scrollAssist: false,
      autoFocusAssist: false
    }),
    AngularFireModule.initializeApp(Login.firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    VerificationPage,
    TrialPage,
    TabsPage,
    MessagesPage,
    GroupsPage,
    FriendsPage,
    SearchPeoplePage,
    RequestsPage,
    UserInfoPage,
    NewMessagePage,
    MessagePage,
    NewGroupPage,
    GroupPage,
    GroupInfoPage,
    AddMembersPage,
    ImageModalPage,
    TimelinePage,
    AddPostPage,
    CommentsPage,
    SettingsPage,
    FavoritesPage,    
    PostOptionsComponent,
    InterestTimelinePage,
    ManagePhotoPage,
    ShowPhoto,
    PublishPage,
    AddStoryPage,
    ViewPostPage,
    CreateProgramPage,
    AddRoomPage,
    RoomPage,
    Home1Page,
    ExplorePublicProgramsPage
  ],
  providers: [
    StatusBar, SplashScreen, Camera, GooglePlus, Keyboard,Toast, GoogleMaps,NativeGeocoder,Geolocation, MediaCapture, PhotoLibrary, CameraPreview , StoryService, TabsService, FilterService, UnsplashItUtil,ImageService,
    { provide: ErrorHandler, useClass: IonicErrorHandler}, 
    LoginProvider, LogoutProvider, LoadingProvider, AlertProvider, ImageProvider, DataProvider, FirebaseProvider, AngularFireAuthModule, AngularFireAuth,AngularFireDatabase,  AppCenterCrashes,
    ]
})
export class AppModule { }
