import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { NavParams, ModalController, LoadingController, AlertController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { TranslateService } from '@ngx-translate/core';
import { GoogleMaps } from '@ionic-native/google-maps';
import { PusherService } from 'src/app/services/pusher.service';
import { finalize } from 'rxjs/operators';
import { PaymentCardComponent } from '../payment-card/payment-card.component';
// import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';

@Component({
  selector: 'app-shipment-details',
  templateUrl: './shipment-details.component.html',
  styleUrls: ['./shipment-details.component.scss']
})
export class ShipmentDetailsComponent implements OnInit {
  // @ViewChild('map_canvas', { static: false }) mapCanvas: ElementRef;

  shipmentID;
  userToken;

  shData;
  dummyMarker;

  locationStream
  constructor(
    public navParams: NavParams,
    public modalController: ModalController,
    public authService: AuthService,
    public apiService: ApiService,
    public _translate: TranslateService,
    public loadingCtrl: LoadingController,
    private alertCtrl:AlertController
    // private payPal:PayPal
    // private pusherService:PusherService
  ) {}

  messegeEvent = {
    message: function(msg) {
      console.log(msg.message);
    }
  }

  ionViewWillLeave() {
    // this.pusherService.pubnub.removeListener(this.messegeEvent);
  }

  amount = 100;
  view;

  openPaymentModal(amount, view) {
    console.log(view)
    console.log(amount)
    this.amount = amount;
    this.view = view;

    // this.alertCtrl.create({
    //   message:this._translate.instant('general.shipmentNeedPayment'),
    //   buttons:[
    //     {
    //       text:this._translate.instant('actions.pay'),
    //       handler:() => {
    //         this.modalController.create({
    //           component:PaymentCardComponent,
    //           backdropDismiss:true,
    //           id:'payShipment',
    //           componentProps:{
    //             amount:amount.toFixed(2),view,shipment:this.shData
    //           }
    //         }).then(m => m.present() )
    //       }
    //     },
    //     {
    //       text:this._translate.instant('actions.cancel'),
    //       role:'cancel'
    //     }
    //   ]
    // }).then(a => a.present())
   
  }

  payForShipment () {
    // this.alertCtrl.create({
    //   message:this._translate.instant('general.shipmentNeedPayment'),
    //   buttons:[
    //     {
    //       text:this._translate.instant('actions.pay'),
    //       handler:() => {
    //         this.modalController.create({
    //           component:PaymentCardComponent,
    //           backdropDismiss:true,
    //           id:'payShipment',
    //           componentProps:{
    //             amount:this.amount.toFixed(2),view:this.view,shipment:this.shData
    //           }
    //         }).then(m => m.present() )
    //       }
    //     },
    //     {
    //       text:this._translate.instant('actions.cancel'),
    //       role:'cancel'
    //     }
    //   ]
    // }).then(a => a.present())


    this.modalController.create({
      component:PaymentCardComponent,
      backdropDismiss:true,
      id:'payShipment',
      componentProps:{
        amount:this.amount.toFixed(2),view:this.view,shipment:this.shData
      }
    }).then(m => m.present() )
    
  }
  ngOnInit() {
    // show payment modal if requested ==  "Approved" && payment_type == 2



    console.log(this.authService.userData)
    this.showLoading();
    this.shipmentID = this.navParams.get('shipment_id');
    this.userToken = this.navParams.get('userToken');
    // console.log(this.shipmentID);
    this.apiService
      .getShipmentDetails(this.shipmentID, this.authService.userToken)
      .pipe(finalize(() => this.hideLoading()))
      .subscribe((shipment: any) => {
        this.shData = shipment;

        
        // this.openPaymentModal(100,[{ name:'general.customs_value', amount:100 }])


          console.log(shipment.paymentstatus ,this.shData);
        if(shipment.paymentstatus == false) {
          let tax = (shipment.tax * +shipment.courier_fee_amount) / 100,
          insurance =  (shipment.insurance * +shipment.courier_fee_amount) / 100,
          customs_value = +shipment.customs_value.substr(shipment.currency_id.currency_symbol.length),
          amount = tax + insurance + +shipment.courier_fee_amount + customs_value;
  
          let paymentView = [
            
          ]
  
          if(tax) paymentView.push({ name:'general.tax', amount:tax })
          if(insurance)  paymentView.push({ name:'general.insurance', amount:insurance })
          if(+shipment.courier_fee_amount)  paymentView.push({ name:'general.courier_fee_amount', amount:+shipment.courier_fee_amount })
          if(customs_value) paymentView.push({ name:'general.customs_value', amount:customs_value })
  
          
  
          var status = [1, 9 , 3, 4];
          if (status.includes(shipment.requested)  && shipment.payment_type == 2) {
            // prepaid
            console.log('prepaid')
            if (shipment.return_package_fee == 2 && shipment.sender.id == this.authService.userData.id) {
              paymentView.push({name:'general.return_courier_fee', amount: +shipment.return_courier_fee_amount})
              this.openPaymentModal(amount + +shipment.return_courier_fee_amount, paymentView)
            } else if(+shipment.return_package_fee == 1 && shipment.receiver.id == this.authService.userData.id) {
              paymentView = [
                { name:'general.package_fee', amount: +shipment.package_fee_amount },
                {name:'general.return_courier_fee', amount: +shipment.return_courier_fee_amount}
              ]
              this.openPaymentModal( +shipment.package_fee_amount + +shipment.return_courier_fee_amount, paymentView)
            } else {
              this.openPaymentModal(amount, paymentView)
            }
  
            // postpaid
          } else if (shipment.requested === 4 && shipment.payment_type == 1) {
            console.log('postpaid')
            if (shipment.return_defray == 1 && shipment.receiver.id === this.authService.userData.id ) {
              paymentView.push( { name:'general.package_fee', amount: +shipment.package_fee_amount })
              this.openPaymentModal(amount  + +shipment.package_fee_amount, paymentView)
            } else if (shipment.return_package_fee == 1 && shipment.receiver.id === this.authService.userData.id ) {
              paymentView.push({ name:'general.package_fee', amount: +shipment.package_fee_amount }, { name:'general.return_courier_fee', amount: shipment.return_courier_fee_amount })
              this.openPaymentModal(amount  + +shipment.package_fee_amount + +shipment.return_courier_fee_amount, paymentView)
            } else if (shipment.return_package_fee == 2 && shipment.sender.id == this.authService.userData.id) {
              paymentView = [
                {name:'general.return_courier_fee', amount: +shipment.return_courier_fee_amount}
              ]
              this.openPaymentModal(+shipment.return_courier_fee_amount, paymentView)
            } else {
              this.openPaymentModal(amount, paymentView)
            }
  
          }

        }
        

        // this.openPaymentModal()

        // if(this.shData.assigned && this.shData.assigned.id) {
        //   this.pusherService.pubnub.subscribe({
        //     channels: [this.shData.assigned.id]
        //   });
          
        //   this.pusherService.pubnub.addListener(this.messegeEvent)
        // }
        

        

/*
        setInterval(() => {
          this.pusherService.uploadPusher.trigger('location' + this.shData.assigned.id, 'client-updateLocation', {lat:'d', lngl:''})

          // let x = this.pusherService.pusher.send_event('client-updateLocation',  {lat:'d', lngl:''} , 'location'+this.shData.assigned.id )
          // console.log('send eeveen', x)
        }, 1000)


        console.log(this.shData.assigned.id, this.pusherService.pusher);

        this.locationStream = this.pusherService.pusher.subscribe( 'location' + this.shData.assigned.id);
        this.locationStream.trigger('client-updateLocation', {lat:'d', lngl:''})

        console.log(this.locationStream)
        this.locationStream.bind('client-updateLocation', (Data) =>{
          console.log('Data pusher', Data);
        });
        this.pusherService.pusher.bind('client-updateLocation', (Data) =>{
          console.log('Data pusher', Data);
        });
        
        this.pusherService.pusher.bind('error', (Data) =>{
          console.log('Data pusher', Data);
        });*/
        
      
      });


      this.dummyMarker = document.getElementById('DummyMarker');
  }
  async closeModal() {
    this.modalController.dismiss();
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: this._translate.instant('general.loading')
    });
    await loading.present();
  }

  async hideLoading() {
    this.loadingCtrl.dismiss();
  }
/*
  map
  loadMap() {
    
    this.map = GoogleMaps.create(this.mapCanvas.nativeElement, {
      camera: {
        target: {
          lat: 31.032260599999997,
          lng: 31.36069329999998
        },
        zoom: 5
      }
    });
  }

  fetchDate() {
    this.map.clear();
    this.map.animateCamera({
      target: {
        lat: 5,
        lng: 7,
      },
      zoom: 17,
      tilt: 30
    });
  }*/
}



/*

prepaid 


$amount = tax + insurance + custom value + curiour fee

if (return_package_fee == 2) //sender
$amount = $amount + return_courier_fee




when shipment was received the receiver should pay

$amount = package_fee

if (return_package_fee == 1)
$amount = $amount + return_courier_fee



*/



/*



postpaid 



// reciever
$amount = tax + insurance + custom value + curiour fee 

if(return_defray = 1)
  $amount = amount +  package_fee



if (return_package_fee == 1)
  $amount =amount + return_courier_fee   + package_fee




when returned value was received the sender should pay



&


// sender

if (return_package_fee == 2)


$amount = return_courier_fee

*/