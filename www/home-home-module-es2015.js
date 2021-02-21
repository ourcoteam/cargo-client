(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"bg-header\">\n    <ion-toolbar *ngIf=\"!authService.isAuthenticated()\">\n        <ion-button routerLink=\"/register\" routerDirection=\"forward\" color=\"light\" fill=\"clear\" slot=\"start\">\n            {{_translate.instant('general.register')}}\n        </ion-button>\n        <ion-button routerLink=\"/login\" routerDirection=\"forward\" color=\"light\" fill=\"clear\" slot=\"end\">\n            {{_translate.instant('general.login')}}\n        </ion-button>\n        <!-- <ion-title>home</ion-title> -->\n    </ion-toolbar>\n\n    <ion-img src=\"/assets/img/home_logo.svg\" class=\"home-logo\"></ion-img>\n    <ion-item class=\"home-tracking\">\n        <ion-icon name=\"search\" slot=\"start\" class=\"search\"></ion-icon>\n        <ion-input [placeholder]=\"_translate.instant('home.tracking_id')\" [(ngModel)]=\"trackingID\" (ionChange)=\"trackingChange()\" debounce=\"200\"></ion-input>\n        <ion-button slot=\"end\" fill=\"clear\" *ngIf=\"trackingID == ''\" (click)=\"scanCode()\">\n            <ion-icon color=\"primary\" src=\"/assets/icons/code-scanning.svg\" slot=\"icon-only\"></ion-icon>\n        </ion-button>\n        <ion-button slot=\"end\" fill=\"clear\" *ngIf=\"trackingID != '' && trackScanned\" (click)=\"clearTracking()\">\n            <ion-icon color=\"primary\" name=\"close-circle-outline\" slot=\"icon-only\"></ion-icon>\n        </ion-button>\n        <ion-button slot=\"end\" fill=\"clear\" *ngIf=\"trackingID != '' && trackScanned == false\" (click)=\"trackOrder()\">\n            {{_translate.instant('general.track_order')}}\n        </ion-button>\n    </ion-item>\n\n    <ion-segment class=\"home-segment\" color=\"light\" *ngIf=\"authService.isAuthenticated()\" [(ngModel)]=\"currentTap\" mode=\"md\">\n        <ion-segment-button value=\"current\" mode=\"md\">\n            <ion-label>{{_translate.instant('home.current')}}</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"archive\" mode=\"md\">\n            <ion-label>{{_translate.instant('home.archived')}}</ion-label>\n        </ion-segment-button>\n    </ion-segment>\n\n    <!-- fab placed to the top end -->\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"authService.isAuthenticated()\">\n        <ion-fab-button  routerLink=\"/new-order\" routerDirection=\"forward\">\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-header>\n\n<ion-content class=\"ion-padding gray-bg\">\n    <div *ngIf=\"authService.isAuthenticated()\" [ngSwitch]=\"currentTap\">\n        <div *ngSwitchCase=\"'current'\">\n            <ion-refresher slot=\"fixed\" (ionRefresh)=\"reload($event, 'current')\">\n                <ion-refresher-content></ion-refresher-content>\n            </ion-refresher>\n            <ion-card class=\"white-card\" *ngFor=\"let shipment of userShipments\" button=\"true\" (click)=\"shipmentDetail(shipment.number)\">\n                <ion-card-header>\n                    <ion-card-title color=\"primary\">\n                        {{shipment.number}}\n                    </ion-card-title>\n                    <ion-card-subtitle [class]=\"shipment.status\">\n                        {{shipment.status}}\n                    </ion-card-subtitle>\n                </ion-card-header>\n                <ion-card-content>\n                    <div class=\"time-line\">\n                        <p class=\"step\">\n                            {{_translate.instant('general.from')}}:\n                            <span>\n                {{shipment.sender_address.address | slice:0:50}}...\n              </span>\n                        </p>\n                        <p class=\"step\">\n                            {{_translate.instant('general.to')}}:\n                            <span>{{shipment.sender_address.address | slice:0:50}}...</span>\n                        </p>\n                    </div>\n                </ion-card-content>\n            </ion-card>\n            <ion-infinite-scroll threshold=\"2px\" (ionInfinite)=\"loadMore($event, 'current')\" *ngIf=\"archiveShipments?.length < totalCurrent\">\n                <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"\">\n                </ion-infinite-scroll-content>\n            </ion-infinite-scroll>\n        </div>\n        <div *ngSwitchCase=\"'archive'\">\n            <ion-refresher slot=\"fixed\" (ionRefresh)=\"reload($event, 'archived')\">\n                <ion-refresher-content></ion-refresher-content>\n            </ion-refresher>\n            <ion-card class=\"white-card\" *ngFor=\"let shipment of archiveShipments\" button=\"true\" (click)=\"shipmentDetail(shipment.number)\">\n                <ion-card-header>\n                    <ion-card-title color=\"primary\">\n                        {{shipment.number}}\n                    </ion-card-title>\n                    <ion-card-subtitle [class]=\"shipment.status\">\n                        {{shipment.status}}\n                    </ion-card-subtitle>\n                </ion-card-header>\n                <ion-card-content>\n                    <div class=\"time-line\">\n                        <p class=\"step\">\n                            {{_translate.instant('general.from')}}:\n                            <span>\n                {{shipment.sender_address.address | slice:0:50}}...\n              </span>\n                        </p>\n                        <p class=\"step\">\n                            {{_translate.instant('general.to')}}:\n                            <span>{{shipment.sender_address.address | slice:0:50}}...</span>\n                        </p>\n                    </div>\n                </ion-card-content>\n            </ion-card>\n            <ion-infinite-scroll threshold=\"10px\" (ionInfinite)=\"loadMore($event, 'archived')\" *ngIf=\"archiveShipments?.length < totalArchived\">\n                <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"\">\n                </ion-infinite-scroll-content>\n            </ion-infinite-scroll>\n        </div>\n        <div *ngSwitchCase=\"'search'\">\n            <ion-card class=\"white-card\" *ngFor=\"let shipment of searched\" button=\"true\" (click)=\"shipmentDetail(shipment.number)\">\n                <ion-card-header>\n                    <ion-card-title color=\"primary\">\n                        {{shipment.number}}\n                    </ion-card-title>\n                    <ion-card-subtitle [class]=\"shipment.status\">\n                        {{shipment.status}}\n                    </ion-card-subtitle>\n                </ion-card-header>\n                <ion-card-content>\n                    <div class=\"time-line\">\n                        <p class=\"step\">\n                            {{_translate.instant('general.from')}}:\n                            <span>\n                {{shipment.sender_address.address | slice:0:50}}...\n              </span>\n                        </p>\n                        <p class=\"step\">\n                            {{_translate.instant('general.to')}}:\n                            <span>{{shipment.sender_address.address | slice:0:50}}...</span>\n                        </p>\n                    </div>\n                </ion-card-content>\n            </ion-card>\n        </div>\n    </div>\n\n    <div *ngIf=\"!authService.isAuthenticated() && trackScanned\">\n        <div>\n            <ion-card class=\"white-card\" *ngFor=\"let shipment of searched\" button=\"true\" (click)=\"shipmentDetail(shipment.number)\">\n                <ion-card-header>\n                    <ion-card-title color=\"primary\">\n                        {{shipment.number}}\n                    </ion-card-title>\n                    <ion-card-subtitle [class]=\"shipment.status\">\n                        {{shipment.status}}\n                    </ion-card-subtitle>\n                </ion-card-header>\n                <ion-card-content>\n                    <div class=\"time-line\">\n                        <p class=\"step\">\n                            {{_translate.instant('general.from')}}:\n                            <span>\n                {{shipment.sender_address.address | slice:0:50}}...\n              </span>\n                        </p>\n                        <p class=\"step\">\n                            {{_translate.instant('general.to')}}:\n                            <span>{{shipment.sender_address.address | slice:0:50}}...</span>\n                        </p>\n                    </div>\n                </ion-card-content>\n            </ion-card>\n        </div>\n    </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
    }
];
let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-img.home-logo {\n  margin: 2vh auto;\n  height: 18vh;\n}\n\nion-item.home-tracking {\n  margin: 10px 20px;\n  --border-radius: 25px;\n  --box-shadow: 0 5px 10px rgba(37, 104, 239, 0.59);\n  border-radius: 25px;\n  box-shadow: 0 5px 10px rgba(37, 104, 239, 0.59);\n  --highlight-color-focused: transparent;\n  margin-bottom: 2vh;\n}\n\nion-item.home-tracking ion-input {\n  --placeholder-color: var(--ion-color-medium);\n  --placeholder-font-weight: 400;\n  font-size: 15px;\n  --placeholder-opacity: 0.8;\n}\n\nion-item.home-tracking ion-icon.search {\n  font-size: 14px;\n  color: #cecece;\n  margin: 0 15px;\n}\n\nion-segment.home-segment {\n  width: calc(100vw / 1.5);\n}\n\nion-segment.home-segment ion-segment-button {\n  color: var(--ion-color-light);\n  opacity: 0.75;\n  margin: 0 15px;\n}\n\nion-segment.home-segment ion-segment-button.segment-button-checked {\n  opacity: 1;\n}\n\nion-fab {\n  bottom: -30px;\n}\n\nion-fab ion-fab-button {\n  outline: none;\n  font-size: 18px;\n  border: 5px solid #f7f7fb;\n  border-radius: 100%;\n  --background: #2568ef;\n  --box-shadow: 0 3px 10px rgba(37, 104, 239, 0.6);\n}\n\nion-content {\n  --padding-top: 35px;\n}\n\nion-content ion-card.white-card {\n  margin-bottom: 20px;\n}\n\nion-content ion-card.white-card ion-card-title {\n  font-size: 16px;\n  font-weight: 400;\n}\n\nion-content ion-card.white-card ion-card-subtitle {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 10px 10px;\n  margin: 0;\n  color: var(--ion-color-dark);\n  border-radius: 0 0 0 10px;\n  font-size: 12px;\n  background: var(--ion-color-light);\n}\n\nion-content ion-card.white-card ion-card-subtitle.in-transit {\n  background: #2568ef;\n  color: #fff;\n}\n\nion-content ion-card.white-card ion-card-subtitle.Pending {\n  background: #2568ef;\n  color: #fff;\n}\n\nion-content ion-card.white-card ion-card-subtitle.proccessing {\n  background: #2189f1;\n  color: #fff;\n}\n\nion-content ion-card.white-card ion-card-subtitle.on-hold {\n  background: rgba(225, 42, 42, 0.75);\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcG90bGF5ZXIvRG93bmxvYWRzL2NhcmdvLWN1c3RvbWVyL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlEQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLHNDQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURBSTtFQUNJLDRDQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUNFUjs7QURBSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0VSOztBREVBO0VBQ0ksd0JBQUE7QUNDSjs7QURBSTtFQUNJLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNFUjs7QURBSTtFQUNJLFVBQUE7QUNFUjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURBSTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0RBQUE7QUNFUjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FEQUk7RUFDSSxtQkFBQTtBQ0VSOztBRERRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDR1o7O0FERFE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtBQ0daOztBREZZO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FDSWhCOztBREZZO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FDSWhCOztBREZZO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FDSWhCOztBREZZO0VBQ0ksbUNBQUE7RUFDQSxXQUFBO0FDSWhCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbWcuaG9tZS1sb2dvIHtcbiAgICBtYXJnaW46IDJ2aCBhdXRvO1xuICAgIGhlaWdodDogMTh2aDtcbn1cblxuaW9uLWl0ZW0uaG9tZS10cmFja2luZyB7XG4gICAgbWFyZ2luOiAxMHB4IDIwcHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIC0tYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDM3LCAxMDQsIDIzOSwgMC41OSk7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMzcsIDEwNCwgMjM5LCAwLjU5KTtcbiAgICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOiB0cmFuc3BhcmVudDtcbiAgICBtYXJnaW4tYm90dG9tOiAydmg7XG4gICAgaW9uLWlucHV0IHtcbiAgICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuODtcbiAgICB9XG4gICAgaW9uLWljb24uc2VhcmNoIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogI2NlY2VjZTtcbiAgICAgICAgbWFyZ2luOiAwIDE1cHg7XG4gICAgfVxufVxuXG5pb24tc2VnbWVudC5ob21lLXNlZ21lbnQge1xuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC8gMS41KTtcbiAgICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgICAgb3BhY2l0eTogMC43NTtcbiAgICAgICAgbWFyZ2luOiAwIDE1cHg7XG4gICAgfVxuICAgIGlvbi1zZWdtZW50LWJ1dHRvbi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cbmlvbi1mYWIge1xuICAgIGJvdHRvbTogLTMwcHg7XG4gICAgaW9uLWZhYi1idXR0b24ge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGJvcmRlcjogNXB4IHNvbGlkICNmN2Y3ZmI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIC0tYmFja2dyb3VuZDogIzI1NjhlZjtcbiAgICAgICAgLS1ib3gtc2hhZG93OiAwIDNweCAxMHB4IHJnYmEoMzcsIDEwNCwgMjM5LCAwLjYpO1xuICAgIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIC0tcGFkZGluZy10b3A6IDM1cHg7XG4gICAgaW9uLWNhcmQud2hpdGUtY2FyZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIGlvbi1jYXJkLXRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWNhcmQtc3VidGl0bGUge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDAgMTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgICAgICAmLmluLXRyYW5zaXQge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyNTY4ZWY7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLlBlbmRpbmcge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyNTY4ZWY7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLnByb2NjZXNzaW5nIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjE4OWYxO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5vbi1ob2xkIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIyNSwgNDIsIDQyLCAwLjc1KTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJpb24taW1nLmhvbWUtbG9nbyB7XG4gIG1hcmdpbjogMnZoIGF1dG87XG4gIGhlaWdodDogMTh2aDtcbn1cblxuaW9uLWl0ZW0uaG9tZS10cmFja2luZyB7XG4gIG1hcmdpbjogMTBweCAyMHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIC0tYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDM3LCAxMDQsIDIzOSwgMC41OSk7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgzNywgMTA0LCAyMzksIDAuNTkpO1xuICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLWJvdHRvbTogMnZoO1xufVxuaW9uLWl0ZW0uaG9tZS10cmFja2luZyBpb24taW5wdXQge1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMC44O1xufVxuaW9uLWl0ZW0uaG9tZS10cmFja2luZyBpb24taWNvbi5zZWFyY2gge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjY2VjZWNlO1xuICBtYXJnaW46IDAgMTVweDtcbn1cblxuaW9uLXNlZ21lbnQuaG9tZS1zZWdtZW50IHtcbiAgd2lkdGg6IGNhbGMoMTAwdncgLyAxLjUpO1xufVxuaW9uLXNlZ21lbnQuaG9tZS1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBvcGFjaXR5OiAwLjc1O1xuICBtYXJnaW46IDAgMTVweDtcbn1cbmlvbi1zZWdtZW50LmhvbWUtc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24uc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbmlvbi1mYWIge1xuICBib3R0b206IC0zMHB4O1xufVxuaW9uLWZhYiBpb24tZmFiLWJ1dHRvbiB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYm9yZGVyOiA1cHggc29saWQgI2Y3ZjdmYjtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgLS1iYWNrZ3JvdW5kOiAjMjU2OGVmO1xuICAtLWJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSgzNywgMTA0LCAyMzksIDAuNik7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXRvcDogMzVweDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkLndoaXRlLWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQud2hpdGUtY2FyZCBpb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkLndoaXRlLWNhcmQgaW9uLWNhcmQtc3VidGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICBib3JkZXItcmFkaXVzOiAwIDAgMCAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5pb24tY29udGVudCBpb24tY2FyZC53aGl0ZS1jYXJkIGlvbi1jYXJkLXN1YnRpdGxlLmluLXRyYW5zaXQge1xuICBiYWNrZ3JvdW5kOiAjMjU2OGVmO1xuICBjb2xvcjogI2ZmZjtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkLndoaXRlLWNhcmQgaW9uLWNhcmQtc3VidGl0bGUuUGVuZGluZyB7XG4gIGJhY2tncm91bmQ6ICMyNTY4ZWY7XG4gIGNvbG9yOiAjZmZmO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQud2hpdGUtY2FyZCBpb24tY2FyZC1zdWJ0aXRsZS5wcm9jY2Vzc2luZyB7XG4gIGJhY2tncm91bmQ6ICMyMTg5ZjE7XG4gIGNvbG9yOiAjZmZmO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQud2hpdGUtY2FyZCBpb24tY2FyZC1zdWJ0aXRsZS5vbi1ob2xkIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMjUsIDQyLCA0MiwgMC43NSk7XG4gIGNvbG9yOiAjZmZmO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _services_audio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/audio.service */ "./src/app/services/audio.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_shipment_details_shipment_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shipment-details/shipment-details.component */ "./src/app/shared/shipment-details/shipment-details.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_ui_loading_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/ui/loading.service */ "./src/app/services/ui/loading.service.ts");












let HomePage = class HomePage {
    constructor(barcodeScanner, audio, authService, apiService, platform, modalController, router, toastController, loadingUI, _translate) {
        this.barcodeScanner = barcodeScanner;
        this.audio = audio;
        this.authService = authService;
        this.apiService = apiService;
        this.platform = platform;
        this.modalController = modalController;
        this.router = router;
        this.toastController = toastController;
        this.loadingUI = loadingUI;
        this._translate = _translate;
        this.trackingID = '';
        this.trackScanned = false;
        this.currentTap = 'current';
        this.currPageNum = 1;
        this.pastPageNum = 1;
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
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.audio.preload('codeScanned', 'assets/audio/scan_beep.mp3');
            yield this.authService.ifLoggedIn().then(() => {
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
        });
    }
    presentToast(msg, pos, col, dur) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                position: pos,
                color: col,
                duration: dur
            });
            toast.present();
        });
    }
    // async ionViewDidEnter() {
    //   console.log('ionViewDidEnter');
    //   if (this.authService.isAuthenticated()) {
    //     this.getUserShipments();
    //   }
    // }
    scanCode() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.barcodeScanner
                .scan()
                .then((barcodeData) => {
                // console.log(barcodeData);
                if (!barcodeData.cancelled) {
                    this.audio.play('codeScanned');
                    this.trackingID = barcodeData.text;
                    this.loadingUI.simpleLoading();
                    this.apiService.getShipmentDetails(this.trackingID, this.authService.userToken).subscribe((shipmentData) => {
                        this.trackScanned = true;
                        this.currentTap = 'search';
                        console.log(this.currentTap);
                        this.loadingUI.loadingDismiss();
                        this.searched = [shipmentData];
                        console.log(this.searched);
                    }, error => {
                        this.loadingUI.loadingDismiss();
                        // console.log(error);
                        // console.log('nothing found');
                        this.presentToast(this._translate.instant('general.No_shipments_found'), 'bottom', 'danger', 3000);
                    });
                }
                this.scannedData = barcodeData;
            })
                .catch(err => {
                // console.log('Error', err);
                // console.log('nothing found');
            });
        });
    }
    trackOrder() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loadingUI.simpleLoading();
            yield this.apiService.getShipmentDetails(this.trackingID, this.authService.userToken).subscribe((shipmentData) => {
                console.log(shipmentData);
                this.trackScanned = true;
                this.currentTap = 'search';
                this.loadingUI.loadingDismiss();
                this.searched = [shipmentData];
            }, error => {
                this.loadingUI.loadingDismiss();
                // console.log(error);
                // console.log('nothing found');
                this.presentToast(this._translate.instant('general.No_shipments_found'), 'bottom', 'danger', 3000);
            });
        });
    }
    trackingChange() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.trackingID === '' && this.authService.isAuthenticated()) {
                this.trackScanned = false;
                this.currentTap = 'current';
                // this.getUserShipments();
            }
        });
    }
    clearTracking() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.trackingID = '';
            this.searched = [];
            this.trackScanned = false;
            this.currentTap = 'current';
        });
    }
    getUserShipments() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.authService.getUserData();
            // console.log(this.authService.userToken);
            yield this.apiService
                .getUserShipments(this.authService.userToken)
                .subscribe((shipments) => {
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
        });
    }
    getArchiveShipments() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.authService.getUserData();
            // console.log(this.authService.userToken);
            yield this.apiService
                .getPastShipments(this.authService.userToken)
                .subscribe((shipments) => {
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
        });
    }
    shipmentDetail(shipmentID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // console.log(shipmentID);
            const detailModal = yield this.modalController.create({
                component: _shared_shipment_details_shipment_details_component__WEBPACK_IMPORTED_MODULE_7__["ShipmentDetailsComponent"],
                componentProps: {
                    shipment_id: shipmentID,
                    userToken: this.authService.userToken
                }
            });
            detailModal.onWillDismiss().then(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                // if (this.authService.isAuthenticated()) {
                //   this.getUserShipments();
                // }
                this.trackingID = '';
                this.scannedData = {};
                this.trackScanned = false;
                this.searched = [];
            }));
            return yield detailModal.present();
        });
    }
    loadMore(event, type) {
        if (type === 'current') {
            if (this.totalCurrent > this.userShipments.length) {
                this.currPageNum++;
                this.apiService
                    .getUserShipments(this.authService.userToken, this.currPageNum)
                    .subscribe((data) => {
                    console.log(data);
                    event.target.complete();
                    this.userShipments.push(...data);
                });
            }
            else {
                event.target.complete();
            }
        }
        else if (type === 'archived') {
            if (this.totalArchived > this.archiveShipments.length) {
                this.pastPageNum++;
                this.apiService
                    .getPastShipments(this.authService.userToken, this.pastPageNum)
                    .subscribe((data) => {
                    console.log(data);
                    event.target.complete();
                    this.archiveShipments.push(...data);
                });
            }
            else {
                // event.target.disabled = true;
                event.target.complete();
            }
        }
    }
    reload(event, type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('reload');
            if (type === 'current') {
                this.currPageNum = 1;
                this.getUserShipments().then(() => {
                    event.target.complete();
                });
            }
            else if (type === 'archived') {
                this.pastPageNum = 1;
                this.getArchiveShipments().then(() => {
                    event.target.complete();
                });
            }
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["BarcodeScanner"] },
    { type: _services_audio_service__WEBPACK_IMPORTED_MODULE_3__["AudioService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _services_ui_loading_service__WEBPACK_IMPORTED_MODULE_10__["LoadingService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["BarcodeScanner"],
        _services_audio_service__WEBPACK_IMPORTED_MODULE_3__["AudioService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
        _services_ui_loading_service__WEBPACK_IMPORTED_MODULE_10__["LoadingService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]])
], HomePage);



/***/ }),

/***/ "./src/app/services/audio.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/audio.service.ts ***!
  \*******************************************/
/*! exports provided: AudioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioService", function() { return AudioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-audio/ngx */ "./node_modules/@ionic-native/native-audio/ngx/index.js");




let AudioService = class AudioService {
    constructor(platform, nativeAudio) {
        this.platform = platform;
        this.nativeAudio = nativeAudio;
        this.sounds = [];
        this.audioPlayer = new Audio();
        this.forceWebAudio = true;
    }
    preload(key, asset) {
        if (this.platform.is('cordova') && !this.forceWebAudio) {
            this.nativeAudio.preloadSimple(key, asset);
            this.sounds.push({
                key,
                asset,
                isNative: true
            });
        }
        else {
            const audio = new Audio();
            audio.src = asset;
            this.sounds.push({
                key,
                asset,
                isNative: false
            });
        }
    }
    play(key) {
        const soundToPlay = this.sounds.find(sound => {
            return sound.key === key;
        });
        if (soundToPlay.isNative) {
            this.nativeAudio.play(soundToPlay.asset).then(res => {
                // console.log(res);
            }, err => {
                // console.log(err);
            });
        }
        else {
            this.audioPlayer.src = soundToPlay.asset;
            this.audioPlayer.play();
        }
    }
};
AudioService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeAudio"] }
];
AudioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeAudio"]])
], AudioService);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map