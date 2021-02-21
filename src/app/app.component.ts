import { Component } from '@angular/core';

import {
  Platform,
  NavController,
  AlertController,
  ModalController
} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { TranslateService } from '@ngx-translate/core';

import { AuthService } from './services/auth.service';
import { Storage } from '@ionic/storage';
import { ApiService } from './services/api.service';

// import { FCM } from '@ionic-native/fcm/ngx';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';

import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private _translate: TranslateService,
    private authService: AuthService,
    private storage: Storage,
    private navCtrl: NavController,
    public apiService: ApiService,

    private fcm: FirebaseX,
    private router: Router,
    public alertCtrl: AlertController,
    public modalController: ModalController,
    private geolocation:Geolocation
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    await this.platform.ready().then(async () => {
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#2568ef');
      this.splashScreen.hide();
      this.isFirstTime();
      this._initTranslate();

      this.getMyLoaction();
      // FCM Push Notification
      await this.authService.authState.subscribe(state => {
        console.log(state);
        if (state) {
          this.authService.returnUserData().then(() => {
            this.fcm.getToken().then(token => {
              console.log(token);
              console.log(this.authService.userToken);
              if (this.authService.authState && this.authService.userToken) {
                this.apiService
                  .postDeviceToken(this.authService.userToken, token)
                  .subscribe(
                    (res: any) => {
                      console.log('Device Token Sent: ', res);
                    },
                    error => {
                      console.log(error);
                    }
                  );
              }
            });
            this.fcm.onTokenRefresh().subscribe(token => {
              console.log(token);
              console.log(this.authService.userToken);
              if (this.authService.authState && this.authService.userToken) {
                this.apiService
                  .postDeviceToken(this.authService.userToken, token)
                  .subscribe(
                    (res: any) => {
                      console.log('Device Token Sent: ', res);
                    },
                    error => {
                      console.log(error);
                    }
                  );
              }
            });
          });
        }
      });

      // this.fcm.onNotification().subscribe(data => {
      //   console.log(data);
      //   if (data.wasTapped) {
      //     console.log('Received in background');
      //     // this.router.navigate([data.landing_page, data.price]);
      //   } else {
      //     console.log('Received in foreground');
      //     // this.router.navigate([data.landing_page, data.price]);
      //   }
      // });

      // End FCM Push Notifications

      // this.authService.getNotifications(this.authService.userToken);
      // this.oneSignal.startInit(
      //   'cbbde828-1e60-4530-83e2-b68b0079c4e0',
      //   '472993346866'
      // );

      // this.oneSignal.inFocusDisplaying(
      //   this.oneSignal.OSInFocusDisplayOption.InAppAlert
      // );

      // this.oneSignal.handleNotificationReceived().subscribe(() => {
      //   // do something when notification is received
      // });

      // this.oneSignal.handleNotificationOpened().subscribe(() => {
      //   // do something when a notification is opened
      // });

      // this.oneSignal.endInit();

      this.platform.backButton.subscribe(async () => {
        console.log(this.router.url);
        console.log(this.router.isActive('/tabs/home', true));
        const isModalOpened = await this.modalController.getTop();
        console.log(isModalOpened);

        if (
          (this.router.isActive('/tabs/home', true) &&
            this.router.url === '/tabs/home' &&
            !this.router.isActive('/new-order', true) &&
            !isModalOpened) ||
          (this.router.isActive('/login', true) &&
            this.router.url === '/login' &&
            !isModalOpened)
        ) {
          console.log(this.router.url);
          const alert = await this.alertCtrl.create({
            header: this._translate.instant('general.exit_app'),
            buttons: [
              {
                text: this._translate.instant('general.no'),
                role: 'cancel'
              },
              {
                text: this._translate.instant('general.yes'),
                handler: () => {
                  (navigator as any).app.exitApp();
                }
              }
            ]
          });

          await alert.present();
        } else {
          console.log(this.router.url);
          const url = this.router.url;
          if (url.match('(^/[a-zA-Z0-9-.]*)$')) {
          } else {
            this.navCtrl.navigateBack(
              url.replace(new RegExp('(/([a-zA-Z0-9-.])*)$'), '')
            );
          }
        }
      });
    });
  }

  getMyLoaction() {
    this.geolocation.getCurrentPosition().then(l => console.log(l)).catch(e => {
      this.alertCtrl.create({
        message: this._translate.instant('general.giveLoactionPermission'),
        buttons:[
          {
            text: this._translate.instant('general.gotcha'),
            handler:() => {
              this.geolocation.getCurrentPosition()
            }
          }
        ]
      }).then(a => a.present())
    })
  }

  private async _initTranslate() {
    // Set the default language for translation strings, and the current language.
    await this.authService.ifLoggedIn().then(res => {
      if (this.authService.isAuthenticated()) {
        this.authService.returnUserData().then(userData => {
          // console.log(userData);
          this._translate.setDefaultLang(userData.user.language);
          // console.log(this._translate.langs);
          // console.log(userData.user.language);
          document.documentElement.lang = userData.user.language;
          this.apiService.defaultLang = userData.user.language;
          this.authService.authState.subscribe(async state => {
            if (state) {
              await this.authService.notificationCount(userData.token);
              await this.authService.getNotifications(userData.token);
              await this.authService.getWallet(userData.token);
            }
          });
        });
      } else {
        document.documentElement.lang = 'en';
        this._translate.setDefaultLang('en');
      }
    });

    // if (this._translate.getBrowserLang() !== undefined) {
    //   this._translate.use(this._translate.getBrowserLang());
    // } else {
    //   this._translate.use('en'); // Set your language here
    // }
  }

  async isFirstTime() {
    await this.storage.get('PANDA_FIRST_TIME').then(async response => {
      if (response === 'no') {
        // console.log(response);
        if (this.authService.isAuthenticated()) {
          this.navCtrl.navigateRoot('/tabs/home');
        } else {
          this.navCtrl.navigateRoot('/login');
        }
      } else {
        // console.log(response);
        this.storage.set('PANDA_FIRST_TIME', 'no');
        this.navCtrl.navigateRoot('/boarding');
      }
      // console.log(response);
    });
  }
}
