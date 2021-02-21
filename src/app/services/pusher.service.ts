import { Injectable } from '@angular/core';

import Pusher from 'pusher-js';
declare var PubNub;


@Injectable({
  providedIn: 'root'
})
export class PusherService {
  pusher;

  uploadPusher

  pubnub

  constructor(
    ) {
    this.initializeChatPusher();
  }

  initializeChatPusher(){
    // this.pusher = new Pusher('0d6fc0465e28844f2cd9',{
    //   cluster: 'eu',
    //   authEndpoint: "/pusher/auth",
    //   auth: {
    //     headers: {
    //       'Accept':  'application/json',
    //     }
    //   }
    // });

    this.pubnub = new PubNub({
      publishKey : "pub-c-a9cdcfa1-332b-47ff-a245-83b8095af5c3",
      subscribeKey : "sub-c-82204506-fdaf-11ea-ae2d-56dc81df9fb5",
      uuid: "sec-c-MjAwMDBhYjQtYTNlZC00MWU3LTg0MDAtYmViNGU3ODgwYTFk"
    })

   


  


    // new Pusher('0d6fc0465e28844f2cd9',{
    //   cluster: 'eu',
    //   authEndpoint: "/pusher/auth",
    //   auth: {
    //     headers: {
    //       'Accept':  'application/json',
    //     }
    //   }
    // }).trigger()
    // console.log(this.pusher)
  }

}
