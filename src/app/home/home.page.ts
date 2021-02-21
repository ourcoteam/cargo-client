import { Component, OnInit } from '@angular/core';
import {
  BarcodeScannerOptions,
  BarcodeScanner
} from '@ionic-native/barcode-scanner/ngx';

import { AudioService } from '../services/audio.service';
import { AuthService } from '../services/auth.service';
import { ApiService } from '../services/api.service';
import { Platform } from '@ionic/angular';
import { ModalController, ToastController } from '@ionic/angular';
import { ShipmentDetailsComponent } from '../shared/shipment-details/shipment-details.component';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { LoadingService } from '../services/ui/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  encodeData: any;
  scannedData: {};
  barcodeScannerOptions: BarcodeScannerOptions;

  trackingID = '';

  trackScanned = false;

  currentTap = 'current';

  userShipments;

  archiveShipments;

  currPageNum = 1;

  pastPageNum = 1;

  totalCurrent;
  totalArchived;

  searched;

  constructor(
    private barcodeScanner: BarcodeScanner,
    private audio: AudioService,
    public authService: AuthService,
    public apiService: ApiService,
    private platform: Platform,
    public modalController: ModalController,
    private router: Router,
    public toastController: ToastController,
    public loadingUI: LoadingService,
    public _translate: TranslateService
  ) {
    this.encodeData = 'https://www.FreakyJolly.com';
    // Options
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };

    // this.router.events
    //   .pipe(filter(event => event instanceof NavigationStart))
    //   .subscribe((route: NavigationStart) => {
    //     // console.log('Route: ', route.url);
    //     if (route.url === '/tabs/home') {
    //       if (this.authService.isAuthenticated()) {
    //         this.currPageNum = 1;
    //         this.pastPageNum = 1;
    //         this.getUserShipments();
    //         this.trackingID = '';
    //         this.scannedData = {};
    //         this.trackScanned = false;
    //       }
    //     }
    //   });
  }

  async ngOnInit() {
    this.audio.preload('codeScanned', 'assets/audio/scan_beep.mp3');

    await this.authService.ifLoggedIn().then(() => {
      this.authService.getUserData();
      // console.log(this.authService.isAuthenticated());
      if (this.authService.isAuthenticated()) {
      }
      this.authService.authState.subscribe(state => {
        if (state) {
          this.getUserShipments();
          this.getArchiveShipments();
        }
      });
    });
  }

  async presentToast(msg, pos, col, dur) {
    const toast = await this.toastController.create({
      message: msg,
      position: pos,
      color: col,
      duration: dur
    });
    toast.present();
  }

  // async ionViewDidEnter() {
  //   console.log('ionViewDidEnter');
  //   if (this.authService.isAuthenticated()) {
  //     this.getUserShipments();
  //   }
  // }

  async scanCode() {
    await this.barcodeScanner
      .scan()
      .then((barcodeData: any) => {
        // console.log(barcodeData);
        if (!barcodeData.cancelled) {
          this.audio.play('codeScanned');
          this.trackingID = barcodeData.text;
          this.loadingUI.simpleLoading();
          this.apiService.getShipmentDetails(this.trackingID, this.authService.userToken).subscribe(
            (shipmentData: any) => {
              this.trackScanned = true;
              this.currentTap = 'search';
              console.log(this.currentTap);
              this.loadingUI.loadingDismiss();
              this.searched = [shipmentData];
              console.log(this.searched);
            },
            error => {
              this.loadingUI.loadingDismiss();
              // console.log(error);
              // console.log('nothing found');
              this.presentToast(
                this._translate.instant('general.No_shipments_found'),
                'bottom',
                'danger',
                3000
              );
            }
          );
        }
        this.scannedData = barcodeData;
      })
      .catch(err => {
        // console.log('Error', err);
        // console.log('nothing found');
      });
  }

  async trackOrder() {
    this.loadingUI.simpleLoading();
    await this.apiService.getShipmentDetails(this.trackingID, this.authService.userToken).subscribe(
      (shipmentData: any) => {
        console.log(shipmentData);
        this.trackScanned = true;
        this.currentTap = 'search';
        this.loadingUI.loadingDismiss();
        this.searched = [shipmentData];
      },
      error => {
        this.loadingUI.loadingDismiss();
        // console.log(error);
        // console.log('nothing found');
        this.presentToast(
          this._translate.instant('general.No_shipments_found'),
          'bottom',
          'danger',
          3000
        );
      }
    );
  }

  async trackingChange() {
    if (this.trackingID === '' && this.authService.isAuthenticated()) {
      this.trackScanned = false;
      this.currentTap = 'current';
      // this.getUserShipments();
    }
  }

  async clearTracking() {
    this.trackingID = '';
    this.searched = [];
    this.trackScanned = false;
    this.currentTap = 'current';
  }

  async getUserShipments() {
    await this.authService.getUserData();
    // console.log(this.authService.userToken);
    await this.apiService
      .getUserShipments(this.authService.userToken)
      .subscribe((shipments: any) => {
        console.log('getUserShipments', shipments);

        this.totalCurrent = shipments.count;
        this.userShipments = shipments;
        // this.userShipments = shipments.filter(
        //   x => x.requested !== 4 || x.requested !== 8 || x.requested !== 12
        // );
        // this.archiveShipments = shipments.filter(
        //   x => x.requested === 4 || x.requested === 8 || x.requested === 12
        // );
      });
  }

  async getArchiveShipments() {
    await this.authService.getUserData();
    // console.log(this.authService.userToken);
    await this.apiService
      .getPastShipments(this.authService.userToken)
      .subscribe((shipments: any) => {
        console.log('archiveShipments', shipments);
        this.totalArchived = shipments.count;
        this.archiveShipments = shipments;
        // this.userShipments = shipments.filter(
        //   x => x.requested !== 4 || x.requested !== 8 || x.requested !== 12
        // );
        // this.archiveShipments = shipments.filter(
        //   x => x.requested === 4 || x.requested === 8 || x.requested === 12
        // );
      });
  }

  async shipmentDetail(shipmentID) {
    // console.log(shipmentID);
    const detailModal = await this.modalController.create({
      component: ShipmentDetailsComponent,
      componentProps: {
        shipment_id: shipmentID,
        userToken: this.authService.userToken
      }
    });
    detailModal.onWillDismiss().then(async () => {
      // if (this.authService.isAuthenticated()) {
      //   this.getUserShipments();
      // }
      this.trackingID = '';
      this.scannedData = {};
      this.trackScanned = false;
      this.searched = [];
    });

    return await detailModal.present();
  }

  loadMore(event, type) {
    if (type === 'current') {
      if (this.totalCurrent > this.userShipments.length) {
        this.currPageNum++;
        this.apiService
          .getUserShipments(this.authService.userToken, this.currPageNum)
          .subscribe((data: any) => {
            console.log(data);
            event.target.complete();
            this.userShipments.push(...data);
          });
      } else {
        event.target.complete();
      }
    } else if (type === 'archived') {
      if (this.totalArchived > this.archiveShipments.length) {
        this.pastPageNum++;
        this.apiService
          .getPastShipments(this.authService.userToken, this.pastPageNum)
          .subscribe((data: any) => {
            console.log(data);
            event.target.complete();
            this.archiveShipments.push(...data);
          });
      } else {
        // event.target.disabled = true;
        event.target.complete();
      }
    }
  }

  async reload(event, type) {
    console.log('reload')
    if (type === 'current') {
      this.currPageNum = 1;
      this.getUserShipments().then(() => {
        event.target.complete();
      });
    } else if (type === 'archived') {
      this.pastPageNum = 1;
      this.getArchiveShipments().then(() => {
        event.target.complete();
      });
    }
  }
}
