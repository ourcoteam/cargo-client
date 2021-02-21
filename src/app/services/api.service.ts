import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { catchError, tap, map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HTTP } from '@ionic-native/http/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL = 'https://cargo.spotlayer.com/api/webservices/';
  // apiURL = 'https://ship.dakakeen.me/new/api/webservices/';

  // apiURL = 'https://shipmentco.com/api/webservices/' 
  defaultLang = 'en';

  constructor(
    private http: HttpClient,
    private nativeHttp: HTTP,
    private plt: Platform
  ) {}

  public getCountries() {
    const addHeaders = new HttpHeaders();
    addHeaders.append('Content-Type', 'application/json');
    return this.http.get(`${this.apiURL}countries`, {
      params: {
        lang: this.defaultLang
      },
      headers: addHeaders
    });
  }

  public getRegions(countryID?) {
    const addHeaders = new HttpHeaders();
    addHeaders.append('Content-Type', 'application/json');
    return this.http.get(`${this.apiURL}regions`, {
      params: {
        lang: this.defaultLang,
        country_id: countryID
      },
      headers: addHeaders
    });
  }

  public getCities(stateID?) {
    const addHeaders = new HttpHeaders();
    addHeaders.append('Content-Type', 'application/json');
    return this.http.get(`${this.apiURL}cities`, {
      params: {
        lang: this.defaultLang,
        state_id: stateID
      },
      headers: addHeaders
    });
  }

  public getAreas(cityID?) {
    const addHeaders = new HttpHeaders();
    addHeaders.append('Content-Type', 'application/json');
    return this.http.get(`${this.apiURL}areas`, {
      params: {
        lang: this.defaultLang,
        city_id: cityID
      },
      headers: addHeaders
    });
  }

  public getShipmentDetails(shipmentNumber = '', userToken) {
    const addHeaders = new HttpHeaders();
    addHeaders.append('Content-Type', 'application/json');
    return this.http.get(`${this.apiURL}shipment`, {
      params: {
        number: shipmentNumber,
        token: userToken
      },
      headers: addHeaders
    });
  }



  
  public getCurrencies() {
    const addHeaders = new HttpHeaders();
    addHeaders.append('Content-Type', 'application/json');
    return this.http.get(`https://cargo.spotlayer.com/api/currencies`, {
      headers: addHeaders
    });
  }

  

  public registerClient(clientData?) {
    const addHeaders = new HttpHeaders();

    addHeaders.append('Content-Type', 'application/json');
    const formData = new FormData();
    if (clientData) {
      // tslint:disable-next-line: forin
      for (const key in clientData) {
        formData.append(key, clientData[key]);
      }
    }
    return this.http.post(`${this.apiURL}clientregister`, formData, {
      headers: addHeaders
    });
  }

  public loginClient(loginData?) {
    const addHeaders = new HttpHeaders();
    addHeaders.append('Content-Type', 'application/json');
    const formData = new FormData();
    if (loginData) {
      // tslint:disable-next-line: forin
      for (const key in loginData) {
        formData.append(key, loginData[key]);
      }
    }
    return this.http.post(`${this.apiURL}clientlogin`, formData, {
      headers: addHeaders
    });
  }

  public changeLang(userToken, lang) {
    const addHeaders = new HttpHeaders();
    addHeaders.append('Content-Type', 'application/json');
    const formData = new FormData();
    formData.append('token', userToken);
    formData.append('language', lang);
    return this.http.post(`${this.apiURL}language`, formData, {
      headers: addHeaders
    });
  }

  public postDeviceToken(userToken, deviceToken) {
    const addHeaders = new HttpHeaders();
    addHeaders.append('Content-Type', 'application/json');
    const formData = new FormData();
    formData.append('token', userToken);
    formData.append('devicetoken', deviceToken);
    return this.http.post(`${this.apiURL}devicetoken`, formData, {
      headers: addHeaders
    });
  }

  public getUserShipments(userToken?, pageNum?) {
    const addHeaders = new HttpHeaders();
    addHeaders.append('Content-Type', 'application/json');
    return this.http.get(`${this.apiURL}shipments/current`, {
      params: {
        token: userToken,
        page: pageNum ? pageNum : 1
      },
      headers: addHeaders
    });
  }

  public getPastShipments(userToken?, pageNum?) {
    const addHeaders = new HttpHeaders();
    addHeaders.append('Content-Type', 'application/json');
    return this.http.get(`${this.apiURL}shipments/archive`, {
      params: {
        token: userToken,
        page: pageNum ? pageNum : 1
      },
      headers: addHeaders
    });
  }

  public getUserNotifications(userToken, pagenum?) {
    const addHeaders = new HttpHeaders();
    addHeaders.append('Content-Type', 'application/json');
    return this.http.get(`${this.apiURL}notifications`, {
      params: {
        token: userToken,
        page: pagenum
      },
      headers: addHeaders
    });
  }

  public getNotificationsCount(userToken) {
    const addHeaders = new HttpHeaders();
    addHeaders.append('Content-Type', 'application/json');
    return this.http.get(`${this.apiURL}notificationscount`, {
      params: {
        token: userToken
      },
      headers: addHeaders
    });
  }

  public getUserWallet(userToken) {
    const addHeaders = new HttpHeaders();
    addHeaders.append('Content-Type', 'application/json');
    return this.http.get(`${this.apiURL}wallet`, {
      params: {
        token: userToken
      },
      headers: addHeaders
    });
  }

  public postNewOrder(userToken?, orderData?) {
    const addHeaders = new HttpHeaders();
    addHeaders.append('Content-Type', 'application/json');
    return this.http.post(
      `${this.apiURL}clientcreateorder`,
      {
        params: { token: userToken, orderData }
      },
      { headers: addHeaders }
    );
  }

  public getUserAddresses(usedID?, userToken?) {
    const addHeaders = new HttpHeaders();
    addHeaders.append('Content-Type', 'application/json');
    const formData = new FormData();
    formData.append('token', userToken);
    formData.append('user_id', userToken);
    return this.http.get(`${this.apiURL}addresses`, {
      params: {
        token: userToken,
        user_id: usedID
      },
      headers: addHeaders
    });
  }

  public addSenderAddress(userToken?, userID?, addressData?) {
    const addHeaders = new HttpHeaders();
    addHeaders.append('Content-Type', 'application/json');

    const formData = new FormData();
    formData.append('token', userToken);
    formData.append('user_id', userID);
    formData.append('address_name', addressData.data.address_name);
    formData.append('area_id', addressData.data.area_id);
    formData.append('city_id', addressData.data.city_id);
    formData.append('country_id', addressData.data.country_id);
    formData.append('postal_code', addressData.data.postal_code);
    formData.append('state_id', addressData.data.state_id);
    formData.append('lat', addressData.lat);
    formData.append('lng', addressData.lng);
    return this.http.post(`${this.apiURL}createaddress`, formData, {
      headers: addHeaders
    });
  }

  public searchForUser(searchTerm) {
    const addHeaders = new HttpHeaders();
    addHeaders.append('Content-Type', 'application/json');
    return this.http.get(`${this.apiURL}searchuser`, {
      params: {
        term: searchTerm
      },
      headers: addHeaders
    });
  }

  public addNewReceiver(userToken?, receiverData?) {
    const addHeaders = new HttpHeaders();
    addHeaders.append('Content-Type', 'application/json');

    // console.log(receiverData);

    const formData = new FormData();
    formData.append('token', userToken);
    formData.append('name', receiverData.name);
    formData.append('mobile', receiverData.mobile);
    return this.http.post(`${this.apiURL}newuser`, formData, {
      headers: addHeaders
    });
  }

  public addReceiverAddress(userToken?, userID?, addressData?) {
    const addHeaders = new HttpHeaders();
    addHeaders.append('Content-Type', 'application/json');
    return this.http.post(`${this.apiURL}createaddress`, {
      params: {
        token: userToken,
        user_id: userID,
        addressData
      },
      headers: addHeaders
    });
  }

  public getPackages() {
    const addHeaders = new HttpHeaders();
    addHeaders.append('Content-Type', 'application/json');
    return this.http.get(`${this.apiURL}packages`, {
      params: {
        lang: this.defaultLang
      },
      headers: addHeaders
    });
  }

  public getOffices() {
    const addHeaders = new HttpHeaders();
    addHeaders.append('Content-Type', 'application/json');
    return this.http.get(`${this.apiURL}offices`, {
      params: {
        lang: this.defaultLang
      },
      headers: addHeaders
    });
  }

  public getCategories() {
    const addHeaders = new HttpHeaders();
    addHeaders.append('Content-Type', 'application/json');
    return this.http.get(`${this.apiURL}categories`, {
      params: {
        lang: this.defaultLang
      },
      headers: addHeaders
    });
  }

  public addOrder(userToken?, orderData?) {
    // const addHeaders = new HttpHeaders();

    // addHeaders.append('Content-Type', 'application/json');
    // const formData = new FormData();
    // if (orderData) {
    //   // tslint:disable-next-line: forin
    //   for (const key in orderData) {
    //     formData.append(key, orderData[key]);
    //   }
    // }
    // formData.append('token', userToken);
    // return this.http.post(`${this.apiURL}clientcreateorder`, formData, {
    //   headers: addHeaders
    // });


    const addHeaders = new HttpHeaders();
    addHeaders.append('Content-Type', 'application/json');
    const formData = new FormData();
    if (orderData) {
      for (const key in orderData) {
        formData.append(key, orderData[key]);
      }
    }
    formData.append('token', userToken);
    let d = orderData;
    d['token'] = userToken
    let data = orderData;
    data['token'] = userToken
    return this.http.post(`${this.apiURL}clientcreateorder`, formData, {
      headers: addHeaders
    });

  }

  public readNotification(userToken, notificationID) {
    const addHeaders = new HttpHeaders();
    addHeaders.append('Content-Type', 'application/json');
    console.log(notificationID);
    console.log(userToken);
    const formData = new FormData();
    formData.append('id', notificationID);
    formData.append('token', userToken);
    return this.http.post(`${this.apiURL}readnotification`, formData, {
      headers: addHeaders
    });
  }


  public payShipmentOrder(params) {
    const addHeaders = new HttpHeaders();
    addHeaders.append('Content-Type', 'application/json');
    const formData = new FormData();
    for(let key in params) formData.append(key, params[key])
    return this.http.post(`${this.apiURL}payorder`, formData, {
      headers: addHeaders
    });

    // const addHeaders = new HttpHeaders();
    // addHeaders.append('Content-Type', 'application/json');
    // return this.http.post(`${this.apiURL}payorder`, {
    //   params,
    //   headers: addHeaders
    // });
  }

  
}
