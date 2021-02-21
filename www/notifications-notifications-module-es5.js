function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-notifications-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNotificationsNotificationsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"bg-header\">\n    <ion-toolbar>\n        <ion-title>{{_translate.instant('general.notifications')}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"reload($event)\">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n\n    <ion-list lines=\"none\">\n        <ion-item class=\"white-card\" *ngFor=\"let item of authService?.userNotifications\" button=\"true\" (click)=\"shipmentDetail(item.number, item.id)\">\n            <ion-text slot=\"start\">\n                {{item.number}}\n            </ion-text>\n            <ion-label>\n                <p [class]=\"item.read != 1 ? 'unread' : ''\">{{item.content}}</p>\n            </ion-label>\n            <ion-text slot=\"end\" class=\"ion-no-padding ion-text-end\">\n                <span [class]=\"item.read != 1 ? 'unreaded' : ''\"></span>\n            </ion-text>\n        </ion-item>\n    </ion-list>\n\n    <!-- <ion-card class=\"white-card\" *ngFor=\"let item of authService?.userNotifications\" button=\"true\" (click)=\"shipmentDetail(item.number, item.id)\">\n        <ion-card-content>\n            <ion-grid class=\"ion-no-padding\">\n                <ion-row>\n                    <ion-col class=\"ion-no-padding\" size=\"10\">\n                        <p [class]=\"item.read != 1 ? 'unread' : ''\">{{item.content}}</p>\n                    </ion-col>\n                    <ion-col size=\"2\" class=\"ion-no-padding ion-text-end\">\n                        <span [class]=\"item.read != 1 ? 'unreaded' : ''\"></span>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-card-content>\n    </ion-card>  -->\n\n    <p *ngIf=\"!authService.userNotifications  || ( authService.userNotifications && authService.userNotifications.length ==0 )\" class=\"ion-text-center\">\n        <ion-text color=\"medium\">\n            {{_translate.instant('general.no_notifications')}}\n        </ion-text>\n    </p>\n\n\n    <!-- <p *ngIf=\"authService?.userNotifications.length ==0 || !authService?.userNotifications\" class=\"ion-text-center\">\n        <ion-text color=\"medium\">\n            {{_translate.instant('general.no_notifications')}}\n        </ion-text>\n    </p> -->\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadMore($event)\" *ngIf=\"authService.userNotifications && authService.userNotifications.length > 0 && authService?.userNotifications.length < authService.notificationsCount.all\">\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"\">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/notifications/notifications.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/notifications/notifications.module.ts ***!
    \*******************************************************/

  /*! exports provided: NotificationsPageModule */

  /***/
  function srcAppNotificationsNotificationsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function () {
      return NotificationsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _notifications_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./notifications.page */
    "./src/app/notifications/notifications.page.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var routes = [{
      path: '',
      component: _notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]
    }];

    var NotificationsPageModule = function NotificationsPageModule() {
      _classCallCheck(this, NotificationsPageModule);
    };

    NotificationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
      declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]]
    })], NotificationsPageModule);
    /***/
  },

  /***/
  "./src/app/notifications/notifications.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/notifications/notifications.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNotificationsNotificationsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card.white-card {\n  margin-bottom: 20px;\n}\nion-card.white-card ion-card-header {\n  padding-bottom: 5px;\n}\nion-card.white-card ion-card-header ion-card-title {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--ion-color-dark);\n}\nion-card.white-card ion-card-content p.unread {\n  font-weight: 700;\n}\nion-card.white-card ion-card-content span {\n  width: 10px;\n  height: 10px;\n  background: var(--ion-color-light);\n  display: inline-block;\n  border-radius: 10px;\n  margin: 0;\n}\nion-card.white-card ion-card-content span.unreaded {\n  background: var(--ion-color-primary);\n}\nion-list {\n  padding: 10px;\n}\nion-list ion-item {\n  --background: #ffffff;\n  background: #ffffff;\n  box-shadow: 0 0 15px rgba(141, 151, 158, 0.2);\n  --box-shadow: 0 0 15px rgba(141, 151, 158, 0.2);\n  border-radius: 10px;\n  --border-radius: 10px;\n  margin-bottom: 1rem;\n}\nion-list ion-item ion-label {\n  white-space: normal;\n}\nion-list ion-item p.unread {\n  font-weight: 700;\n}\nion-list ion-item span {\n  width: 10px;\n  height: 10px;\n  background: #e6e6e6;\n  display: inline-block;\n  border-radius: 10px;\n  margin: 0;\n}\nion-list ion-item span.unreaded {\n  background: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcG90bGF5ZXIvRG93bmxvYWRzL2NhcmdvLWN1c3RvbWVyL3NyYy9hcHAvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0o7QURBSTtFQUNJLG1CQUFBO0FDRVI7QURBUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FDRVo7QURHWTtFQUNJLGdCQUFBO0FDRGhCO0FESVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUNGWjtBREdZO0VBQ0ksb0NBQUE7QUNEaEI7QURPQTtFQUNHLGFBQUE7QUNKSDtBREtJO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZDQUFBO0VBQ0EsK0NBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNIUjtBRElRO0VBQ0ksbUJBQUE7QUNGWjtBREtZO0VBQ0ksZ0JBQUE7QUNIaEI7QURNUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBRUEsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQ0xaO0FETVk7RUFDSSxvQ0FBQTtBQ0poQiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZC53aGl0ZS1jYXJkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGlvbi1jYXJkLWhlYWRlciB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgIGlvbi1jYXJkLXN1YnRpdGxlIHt9XG4gICAgICAgIGlvbi1jYXJkLXRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgICAgICBwIHtcbiAgICAgICAgICAgICYudW5yZWFkIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICYudW5yZWFkZWQge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW9uLWxpc3Qge1xuICAgcGFkZGluZzogMTBweDtcbiAgICBpb24taXRlbSB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSgxNDEsIDE1MSwgMTU4LCAwLjIpO1xuICAgICAgICAtLWJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMTQxLCAxNTEsIDE1OCwgMC4yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICAgICYudW5yZWFkIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2U2ZTZlNjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAmLnVucmVhZGVkIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW9uLWNhcmQud2hpdGUtY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5pb24tY2FyZC53aGl0ZS1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5pb24tY2FyZC53aGl0ZS1jYXJkIGlvbi1jYXJkLWhlYWRlciBpb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cbmlvbi1jYXJkLndoaXRlLWNhcmQgaW9uLWNhcmQtY29udGVudCBwLnVucmVhZCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5pb24tY2FyZC53aGl0ZS1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgc3BhbiB7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiAwO1xufVxuaW9uLWNhcmQud2hpdGUtY2FyZCBpb24tY2FyZC1jb250ZW50IHNwYW4udW5yZWFkZWQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1saXN0IHtcbiAgcGFkZGluZzogMTBweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwIDAgMTVweCByZ2JhKDE0MSwgMTUxLCAxNTgsIDAuMik7XG4gIC0tYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSgxNDEsIDE1MSwgMTU4LCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5pb24tbGlzdCBpb24taXRlbSBpb24tbGFiZWwge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gcC51bnJlYWQge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gc3BhbiB7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNlNmU2ZTY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiAwO1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gc3Bhbi51bnJlYWRlZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/notifications/notifications.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/notifications/notifications.page.ts ***!
    \*****************************************************/

  /*! exports provided: NotificationsPage */

  /***/
  function srcAppNotificationsNotificationsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsPage", function () {
      return NotificationsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _shared_shipment_details_shipment_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/shipment-details/shipment-details.component */
    "./src/app/shared/shipment-details/shipment-details.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var NotificationsPage = /*#__PURE__*/function () {
      function NotificationsPage(authService, apiService, router, modalController, _translate) {
        _classCallCheck(this, NotificationsPage);

        this.authService = authService;
        this.apiService = apiService;
        this.router = router;
        this.modalController = modalController;
        this._translate = _translate;
        this.currPage = 1; // this.router.events
        //   .pipe(filter(event => event instanceof NavigationStart))
        //   .subscribe((route: NavigationStart) => {
        //     // console.log('Route: ', route.url);
        //     if (route.url === '/tabs/notifications') {
        //       if (this.authService.isAuthenticated()) {
        //         this.authService.getNotifications(this.authService.userToken);
        //       }
        //     }
        //   });
      }

      _createClass(NotificationsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "loadMore",
        value: function loadMore(event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (this.authService.notificationsCount.all > this.authService.userNotifications.length) {
                      this.currPage++;
                      this.authService.getNotifications(this.authService.userToken, this.currPage).then(function () {
                        event.target.complete();
                      });
                    } else {
                      event.target.complete();
                    }

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "reload",
        value: function reload(event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.currPage = 1;
                    this.authService.notificationCount(this.authService.userToken);
                    this.authService.getNotifications(this.authService.userToken, this.currPage).then(function () {
                      event.target.complete();
                    });

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "shipmentDetail",
        value: function shipmentDetail(shipmentID, notificationID) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.apiService.readNotification(this.authService.userToken, notificationID).subscribe(function (res) {
                      console.log(res);

                      _this.authService.notificationCount(_this.authService.userToken);

                      _this.authService.getNotifications(_this.authService.userToken);
                    }, function (error) {
                      console.log(error);
                    });

                  case 2:
                    _context3.next = 4;
                    return this.modalController.create({
                      component: _shared_shipment_details_shipment_details_component__WEBPACK_IMPORTED_MODULE_6__["ShipmentDetailsComponent"],
                      componentProps: {
                        shipment_id: shipmentID,
                        userToken: this.authService.userToken
                      }
                    });

                  case 4:
                    modal = _context3.sent;
                    _context3.next = 7;
                    return modal.present();

                  case 7:
                    return _context3.abrupt("return", _context3.sent);

                  case 8:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return NotificationsPage;
    }();

    NotificationsPage.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"], {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInfiniteScroll"])], NotificationsPage.prototype, "infiniteScroll", void 0);
    NotificationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notifications',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./notifications.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./notifications.page.scss */
      "./src/app/notifications/notifications.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])], NotificationsPage);
    /***/
  }
}]);
//# sourceMappingURL=notifications-notifications-module-es5.js.map