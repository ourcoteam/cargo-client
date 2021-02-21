import { Component, OnInit } from '@angular/core';
// import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { AlertController, LoadingController, ModalController, NavParams } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';
import { finalize } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-payment-card',
  templateUrl: './payment-card.component.html',
  styleUrls: ['./payment-card.component.scss'],
})
export class PaymentCardComponent implements OnInit {
  view;
  shipment;
  totalAmount;

  public payPalConfig:IPayPalConfig;


  private doPay(): void {
    this.payPalConfig = {
      currency: 'USD',
      clientId:"sb",
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        application_context:{
          return_url:"http://localhost:8100/tabs/home",
          payment_method:{
            "payee_preferred": "UNRESTRICTED"
          },
        },
        purchase_units: [
          {
            amount: {
              currency_code: 'USD',
              value: ''+this.totalAmount,
              breakdown: {
                item_total: {
                  currency_code: 'USD',
                  value: ''+this.totalAmount
                }
              }
            },
          }
        ]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        this.errorPayment(this._translate.instant('general.paymentNoAuth'));
      },
      onClientAuthorization: (data) => {
        this.paymentSuccess()
      },
      onError: err => {
        console.log('OnError', err);
        this.errorPayment(this._translate.instant('general.errorPayment'));
      },
    };
  }

  
  constructor(
    // private payPal: PayPal,
    private navParams:NavParams,
    public _translate:TranslateService,
    private apiService:ApiService,
    private authService:AuthService,
    private modalCtrl:ModalController,
    private alertCtrl:AlertController,
    private loadingCtrl:LoadingController

  ) { }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: this._translate.instant('general.loading')
    });
    await loading.present();
  }

  async hideLoading() {
    this.loadingCtrl.dismiss();
  }
  
  ngOnInit() {
    this.view = this.navParams.get('view');
    this.shipment = this.navParams.get('shipment');
    this.totalAmount =  this.navParams.get('amount');
    this.doPay();
  }



  paymentSuccess() {
    this.showLoading();

    let params = {
      token:this.authService.userToken,
      id:this.shipment.id,
      paymant_method:'paypal',
      tax:(this.shipment.tax * +this.shipment.courier_fee_amount) / 100,
      insurance: (this.shipment.insurance * +this.shipment.courier_fee_amount) / 100,
      custom_value: +this.shipment.customs_value.substr(this.shipment.currency_id.currency_symbol.length),
      return_courier_fee: +this.shipment.return_courier_fee_amount,
      courier_fee:+this.shipment.courier_fee_amount,
      package_fee:+this.shipment.package_fee_amount
    }

    this.apiService.payShipmentOrder(params)
    .pipe(
      finalize(() => this.hideLoading())
    )
    .subscribe(r => {
      this.alertCtrl.create({
        message:this._translate.instant('general.requestIsSent'),
        buttons:[this._translate.instant('general.gotcha')]
      }).then(a => {
        a.present()
        a.onDidDismiss().then(() => {
          this.modalCtrl.dismiss('','','payShipment')
        })
      })
      console.log('payShipmentOrder', r)
    })

  }


  errorPayment(message) {
    this.alertCtrl.create({
      buttons:[this._translate.instant("general.gotcha")]
    })
  }

}


/*
token
id or number for shipment
custom_value
tax
insurance
return_courier_fee
courier_fee
package_fee
paymant_method  دي بحالتنا الحالية ثابتة القيمة لازم تحطها  paypal


*/

/*



this.payPal.init({
      PayPalEnvironmentProduction: '',
      PayPalEnvironmentSandbox: 'AWt7Zerxyd4Z2qvEprql2XgA5yl1oJv6TwucfZUdCogciyCzNJrfPwCp2-cbYEmkoZRoXTigFIbZ59l3'
    }).then(() => {
      // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
      this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
        // Only needed if you get an "Internal Service Error" after PayPal login!
        //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
      })).then(() => {
        
        // let payment = new PayPalPayment(''+amount, this.shData.currency_id.currency_symbol, 'Description', 'sale');
        let payment = new PayPalPayment(''+this.totalAmount, 'USD', 'Description', 'sale');
        this.payPal.renderSinglePaymentUI(payment).then(() => {
          // Successfully paid
          console.log('uccessfully paid')
          this.paymentSuccess()
          // Example sandbox response
          //
          // {
          //   "client": {
          //     "environment": "sandbox",
          //     "product_name": "PayPal iOS SDK",
          //     "paypal_sdk_version": "2.16.0",
          //     "platform": "iOS"
          //   },
          //   "response_type": "payment",
          //   "response": {
          //     "id": "PAY-1AB23456CD789012EF34GHIJ",
          //     "state": "approved",
          //     "create_time": "2016-10-03T13:33:33Z",
          //     "intent": "sale"
          //   }
          // }
        }, (e) => {
          alert(' Error or render' + e)
          // Error or render dialog closed without being successful
        }); 
      }, () => {
        // Error in configuration
        alert('Error in configuration')
      });
    }, () => {
      alert("Error in initialization, maybe PayPal isn't supported or something else")
      // Error in initialization, maybe PayPal isn't supported or something else
    });


*/