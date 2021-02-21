import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import {
  ModalController,
  Platform,
  LoadingController,
  ToastController,
  NavController,
  NavParams
} from '@ionic/angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  GoogleMapsAnimation,
  MyLocation,
  Environment,
  Geocoder,
  BaseArrayClass,
  GeocoderResult
} from '@ionic-native/google-maps';
import { ApiService } from '../../services/api.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { IonInput } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-new-address',
  templateUrl: './new-address.component.html',
  styleUrls: ['./new-address.component.scss']
})
export class NewAddressComponent implements OnInit, OnDestroy {
  @ViewChild('map_canvas', { static: false }) mapCanvas: ElementRef;
  map: GoogleMap;
  loading: any;

  dummyMarker: any;

  mapDragging = false;

  countries;
  cities;
  regions;
  areas;

  lat;
  lng;

  selectedAddress;

  type;

  receiverID;

  public addressInfoForm: FormGroup;
  constructor(
    public modalController: ModalController,
    private platform: Platform,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public apiService: ApiService,
    public formBuilder: FormBuilder,
    private navCtrl: NavController,
    private authService: AuthService,
    private navParams: NavParams,
    public _translate: TranslateService
  ) {
    this.addressInfoForm = formBuilder.group({
      address_name: ['', Validators.required],
      country_id: ['', Validators.required],
      state_id: ['', Validators.required],
      city_id: ['', Validators.required],
      area_id: [null],
      postal_code: [null]
    });
  }

  async ngOnInit() {
    await this.platform.ready();
    this.getCountries();
    this.type = this.navParams.get('type');
    this.receiverID = this.navParams.get('receiverID');
    // console.log(this.type);
    // console.log(this.receiverID);
    this.dummyMarker = document.getElementById('DummyMarker');
  }

  ngOnDestroy() {
    const nodeList = document.querySelectorAll('._gmaps_cdv_');
    for (let k = 0; k < nodeList.length; ++k) {
      nodeList.item(k).classList.remove('_gmaps_cdv_');
    }
  }


  async createLoader () {
    let loader = await this.loadingCtrl.create({
      message: this._translate.instant('general.please_wait')
    });
    loader.present();
    return loader;
  }

  async getCountries() {
    let loader = await this.createLoader()
    this.apiService.getCountries()
    .pipe(finalize(() => loader.dismiss()))
    .subscribe((countries: any) => {
      this.countries = countries;
    });
  }

  async getRegions() {
    let loader = await this.createLoader()
    this.apiService
      .getRegions(this.addressInfoForm.get('country_id').value)
      .pipe(finalize(() => loader.dismiss()))
      .subscribe((regions: any) => {
        this.regions = regions;
      });
  }

  async getCities() {
    let loader = await this.createLoader()
    this.apiService
      .getCities(this.addressInfoForm.get('state_id').value)
      .pipe(finalize(() => loader.dismiss()))
      .subscribe((cities: any) => {
        this.cities = cities;
      });
  }

  async getAreas() {
    let loader = await this.createLoader()
    this.getAddressCenter();
    this.apiService
      .getAreas(this.addressInfoForm.get('city_id').value)
      .pipe(finalize(() => loader.dismiss()))
      .subscribe((areas: any) => {
        this.areas = areas;
      });
  }

  searchForName(itemID, arrayItems) {
    const res = arrayItems.filter(item => item.id === itemID);
    // console.log(res);
    return res[0].name;
  }

  ionViewDidEnter() {
    this.loadMap();
  }

  async closeModal() {
    this.modalController.dismiss(null, 'cancel');
  }

  loadMap() {
    Environment.setEnv({
      API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyDvYLf1yswB12mE2qGDxDmlBJOF_Su-CCs',
      API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyDvYLf1yswB12mE2qGDxDmlBJOF_Su-CCs'
    });
    this.map = GoogleMaps.create(this.mapCanvas.nativeElement, {
      camera: {
        target: {
          lat: 31.032260599999997,
          lng: 31.36069329999998
        },
        zoom: 5
      }
    });
    this.map.getMyLocation().then((location: MyLocation) => {
      // console.log(JSON.stringify(location, null, 2));

      // Move the map camera to the location with animation
      this.map.animateCamera({
        target: location.latLng,
        zoom: 5
      });
    });
    this.map
      .addEventListener(GoogleMapsEvent.CAMERA_MOVE_START)
      .subscribe(data => {
        this.mapDragging = true;
        this.dummyMarker.classList.add('dragging');
        // console.log('Dragging');
      });
    this.map
      .addEventListener(GoogleMapsEvent.CAMERA_MOVE_END)
      .subscribe(data => {
        // console.log(data);
        this.mapDragging = false;
        this.dummyMarker.classList.remove('dragging');
        // console.log(this.map.getCameraTarget());
        const location = this.map.getCameraTarget();
        this.lat = location.lat;
        this.lng = location.lng;
        // console.log(this.lat);
        // console.log(this.lng);
      });
  }

  async getAddressCenter() {
    const addressArray = {
      country: this.searchForName(
        this.addressInfoForm.get('country_id').value,
        this.countries
      ),
      region: this.searchForName(
        this.addressInfoForm.get('state_id').value,
        this.regions
      ),
      city: this.searchForName(
        this.addressInfoForm.get('city_id').value,
        this.cities
      )
      // area: this.searchForName(
      //   this.addressInfoForm.get('area_id').value,
      //   this.areas
      // )
    };
    const addressText = `${addressArray.city} ${addressArray.region} ${addressArray.country}`;
    this.loading = await this.loadingCtrl.create({
      message: this._translate.instant('general.please_wait')
    });
    await this.loading.present();
    if(this.map) this.map.clear();

    // Address -> latitude,longitude
    // const searchAddress = `${this.addressInfoForm.get('')}`
    Geocoder.geocode({
      address: addressText
    }).then((results: GeocoderResult[]) => {
      // console.log(results);
      this.loading.dismiss();

      if (results.length > 0) {
        this.map.animateCamera({
          target: results[0].position,
          zoom: 15
        });
        this.lat = results[0].position.lat;
        this.lng = results[0].position.lng;
        // console.log(this.lat);
        // console.log(this.lng);
      } else {
        alert('Not found');
      }
    });
  }
  async getCurrentLocation() {
    if(this.map) this.map.clear();

    this.loading = await this.loadingCtrl.create({
      message: this._translate.instant('general.please_wait')
    });
    await this.loading.present();

    // Get the location of you
    this.map
      .getMyLocation()
      .then((location: MyLocation) => {
        this.loading.dismiss();
        // console.log(JSON.stringify(location, null, 2));

        // Move the map camera to the location with animation
        this.map.animateCamera({
          target: location.latLng,
          zoom: 17,
          tilt: 30
        });
      })
      .catch(err => {
        this.loading.dismiss();
        // console.log(err.error_message);
      });
  }

  async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      position: 'bottom'
    });

    toast.present();
  }

  async showCustomToast(message: string, msgColor: string) {
    const toast = await this.toastCtrl.create({
      message,
      color: msgColor,
      duration: 2000,
      position: 'bottom'
    });

    toast.present();
  }

  addNewAddress() {
    let desiredUser = this.authService.userData.id;
    if (this.type === 'receiver' && this.receiverID) {
      desiredUser = this.receiverID;
    }
    const addressData = {
      data: this.addressInfoForm.value,
      lat: this.lat,
      lng: this.lng
    };
    this.apiService
      .addSenderAddress(this.authService.userToken, desiredUser, addressData)
      .subscribe(
        (res: any) => {
          this.showCustomToast(
            `${this._translate.instant('new_address.new_address')} ( ${
              res.name
            } ) ${this._translate.instant('general.has_been_added')}`,
            'success'
          );
          let addressFor;
          if (this.type === 'receiver') {
            addressFor = 'receiver';
          } else {
            addressFor = 'sender';
          }
          res.for = addressFor;
          console.log(res);
          this.modalController.dismiss(res, 'done');
        },
        error => {
          this.showCustomToast(error, 'danger');
        }
      );
  }
}
