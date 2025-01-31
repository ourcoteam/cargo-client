function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"has-elements\">\n    <ion-toolbar>\n        <ion-img src=\"/assets/img/logo.svg\" slot=\"start\" class=\"header-icon\"></ion-img>\n        <ion-title>{{_translate.instant('register.create_account')}}</ion-title>\n        <ion-button color=\"primary\" size=\"small\" fill=\"clear\" slot=\"end\" routerLink=\"/login\" routerDirection=\"back\">\n            {{_translate.instant('register.log_in')}}\n        </ion-button>\n    </ion-toolbar>\n    <ion-progress-bar color=\"primary\" [value]=\"progress\"></ion-progress-bar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <ion-slides pager=\"false\" #stepSlider class=\"step-slider\" [options]=\"slideOpts\">\n        <ion-slide>\n            <div class=\"form-holder register-form\">\n                <form [formGroup]=\"userInfoForm\">\n                    <ion-item>\n                        <ion-label position=\"floating\" color=\"medium\">\n                            {{_translate.instant('general.name')}}\n                            <ion-text> * </ion-text>\n                        </ion-label>\n                        <ion-input formControlName=\"name\" type=\"text\"> </ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label position=\"floating\" color=\"medium\">\n                            {{_translate.instant('general.mobile')}}\n                            <ion-text> * </ion-text>\n                        </ion-label>\n                        <ion-input formControlName=\"mobile\" type=\"tel\"> </ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label position=\"floating\" color=\"medium\">\n                            {{_translate.instant('general.email')}}\n                            <ion-text> * </ion-text>\n                        </ion-label>\n                        <ion-input #inputEmail formControlName=\"email\" type=\"email\">\n                        </ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label position=\"floating\" color=\"medium\">\n                            {{_translate.instant('general.username')}}\n                            <ion-text> * </ion-text>\n                        </ion-label>\n                        <ion-input formControlName=\"username\" type=\"text\"> </ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label position=\"floating\" color=\"medium\">\n                            {{_translate.instant('general.password')}}\n                            <ion-text> * </ion-text>\n                        </ion-label>\n                        <ion-input formControlName=\"password\" type=\"password\"> </ion-input>\n                    </ion-item>\n                </form>\n            </div>\n        </ion-slide>\n        <ion-slide>\n            <div class=\"form-holder register-form\">\n                <form [formGroup]=\"addressInfoForm\">\n                    <ion-item>\n                        <ion-label position=\"floating\" color=\"medium\">\n                            {{_translate.instant('general.address_name')}}\n                            <ion-text> * </ion-text>\n                        </ion-label>\n                        <ion-input formControlName=\"address_name\" type=\"text\"> </ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label position=\"floating\" color=\"medium\">\n                            {{_translate.instant('general.country')}}\n                            <ion-text> * </ion-text>\n                        </ion-label>\n                        <ion-select formControlName=\"country_id\" placeholder=\"Select Country\" interface=\"action-sheet\" (ionChange)=\"getRegions()\" [disabled]=\"!countries\">\n                            <ion-select-option *ngFor=\"let country of countries\" [value]=\"country.id\">{{country.name}}</ion-select-option>\n                        </ion-select>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label position=\"floating\" color=\"medium\">\n                            {{_translate.instant('general.state_region')}}\n                            <ion-text> * </ion-text>\n                        </ion-label>\n                        <ion-select formControlName=\"state_id\" placeholder=\"Select State/Region\" interface=\"action-sheet\" (ionChange)=\"getCities()\" [disabled]=\"!regions\">\n                            <ion-select-option *ngFor=\"let region of regions\" [value]=\"region.id\">{{region.name}}</ion-select-option>\n                        </ion-select>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label position=\"floating\" color=\"medium\">\n                            {{_translate.instant('general.city')}}\n                            <ion-text> * </ion-text>\n                        </ion-label>\n                        <ion-select formControlName=\"city_id\" placeholder=\"Select City\" interface=\"action-sheet\" (ionChange)=\"getAreas()\" [disabled]=\"!cities\">\n                            <ion-select-option *ngFor=\"let city of cities\" [value]=\"city.id\">{{city.name}}</ion-select-option>\n                        </ion-select>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label position=\"floating\" color=\"medium\">\n                            {{_translate.instant('general.area')}}\n                        </ion-label>\n                        <ion-select formControlName=\"area_id\" placeholder=\"Select Area\" interface=\"action-sheet\" [disabled]=\"!areas\">\n                            <ion-select-option *ngFor=\"let area of areas\" [value]=\"area.id\">{{area.name}}</ion-select-option>\n                        </ion-select>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label position=\"floating\" color=\"medium\">\n                            {{_translate.instant('general.postal_code')}}\n                        </ion-label>\n                        <ion-input formControlName=\"postal_code\" type=\"num\"> </ion-input>\n                    </ion-item>\n                </form>\n            </div>\n        </ion-slide>\n        <ion-slide class=\"has-map\">\n            <ion-button color=\"dark\" (click)=\"getCurrentLocation()\" class=\"map-btn\">\n                <ion-icon name=\"locate\" slot=\"start\"></ion-icon>\n                {{_translate.instant('general.my_current_location')}}\n            </ion-button>\n            <div id=\"map_canvas\">\n                <!-- <ion-button ion-button (click)=\"onButtonClick()\">Demo</ion-button> -->\n                <ion-img src=\"/assets/img/marker.svg\" class=\"map-marker\" id=\"DummyMarker\" *ngIf=\"step == 3\"></ion-img>\n            </div>\n        </ion-slide>\n        <ion-slide class=\"success\">\n            <div class=\"success-content\">\n                <ion-img src=\"/assets/img/success_logo.svg\"></ion-img>\n                <p>\n                    {{_translate.instant('register.you_have_successfully_created_your')}}\n                    <b> {{_translate.instant('register.account')}}</b>\n                </p>\n                <!-- <p>You will be redirected</p> -->\n                <!-- <ion-button class=\"btn-full btn-gradient\" expand=\"block\" round strong>\n          Login Now\n        </ion-button> -->\n            </div>\n        </ion-slide>\n    </ion-slides>\n</ion-content>\n<ion-footer class=\"has-action\">\n    <ion-button class=\"btn-full btn-gradient\" expand=\"block\" round strong (click)=\"nextStep()\">\n        {{_translate.instant('general.next')}}\n    </ion-button>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/register/register.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/register/register.module.ts ***!
    \*********************************************/

  /*! exports provided: RegisterPageModule */

  /***/
  function srcAppRegisterRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
      return RegisterPageModule;
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


    var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/register/register.page.ts");

    var routes = [{
      path: '',
      component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }];

    var RegisterPageModule = function RegisterPageModule() {
      _classCallCheck(this, RegisterPageModule);
    };

    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })], RegisterPageModule);
    /***/
  },

  /***/
  "./src/app/register/register.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/register/register.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegisterRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#map_canvas {\n  width: 100%;\n  height: 76vh;\n  min-height: 500px;\n  border-radius: 15px;\n}\n#map_canvas ion-img.map-marker {\n  max-width: 80px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(1);\n  opacity: 1;\n  transition: all 0.2s;\n}\n#map_canvas ion-img.map-marker.dragging {\n  transform: translate(-50%, -50%) scale(1.1);\n  opacity: 0.5;\n}\nion-slide.success {\n  height: 78vh;\n}\nion-slide.success .success-content {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0 20px;\n  line-height: 1.8em;\n}\nion-slide.has-map {\n  height: 78vh !important;\n}\nion-slide.has-map ion-button.map-btn {\n  position: absolute;\n  width: 95%;\n  top: 15px;\n  z-index: 2;\n  border-radius: 15px;\n  --border-radius: 15px;\n  height: 45px;\n}\nion-content {\n  background-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcG90bGF5ZXIvRG93bmxvYWRzL2NhcmdvLWN1c3RvbWVyL3NyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREFJO0VBQ0ksZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EseUNBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7QUNFUjtBRERRO0VBQ0ksMkNBQUE7RUFDQSxZQUFBO0FDR1o7QURFQTtFQUNJLFlBQUE7QUNDSjtBREFJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0VSO0FERUE7RUFDSSx1QkFBQTtBQ0NKO0FEQUk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FDRVI7QURFQTtFQUNJLHNCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwX2NhbnZhcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA3NnZoO1xuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgaW9uLWltZy5tYXAtbWFya2VyIHtcbiAgICAgICAgbWF4LXdpZHRoOiA4MHB4O1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gICAgICAgICYuZHJhZ2dpbmcge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMS4xKTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW9uLXNsaWRlLnN1Y2Nlc3Mge1xuICAgIGhlaWdodDogNzh2aDtcbiAgICAuc3VjY2Vzcy1jb250ZW50IHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcbiAgICB9XG59XG5cbmlvbi1zbGlkZS5oYXMtbWFwIHtcbiAgICBoZWlnaHQ6IDc4dmggIWltcG9ydGFudDtcbiAgICBpb24tYnV0dG9uLm1hcC1idG4ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgIHRvcDogMTVweDtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgfVxufVxuXG5pb24tY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn0iLCIjbWFwX2NhbnZhcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDc2dmg7XG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuI21hcF9jYW52YXMgaW9uLWltZy5tYXAtbWFya2VyIHtcbiAgbWF4LXdpZHRoOiA4MHB4O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG4jbWFwX2NhbnZhcyBpb24taW1nLm1hcC1tYXJrZXIuZHJhZ2dpbmcge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxLjEpO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbmlvbi1zbGlkZS5zdWNjZXNzIHtcbiAgaGVpZ2h0OiA3OHZoO1xufVxuaW9uLXNsaWRlLnN1Y2Nlc3MgLnN1Y2Nlc3MtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBsaW5lLWhlaWdodDogMS44ZW07XG59XG5cbmlvbi1zbGlkZS5oYXMtbWFwIHtcbiAgaGVpZ2h0OiA3OHZoICFpbXBvcnRhbnQ7XG59XG5pb24tc2xpZGUuaGFzLW1hcCBpb24tYnV0dG9uLm1hcC1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA5NSU7XG4gIHRvcDogMTVweDtcbiAgei1pbmRleDogMjtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/register/register.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/register/register.page.ts ***!
    \*******************************************/

  /*! exports provided: RegisterPage */

  /***/
  function srcAppRegisterRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
      return RegisterPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/google-maps */
    "./node_modules/@ionic-native/google-maps/index.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var RegisterPage = /*#__PURE__*/function () {
      function RegisterPage(platform, loadingCtrl, toastCtrl, apiService, formBuilder, navCtrl, authService, _translate, router) {
        _classCallCheck(this, RegisterPage);

        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this._translate = _translate;
        this.router = router;
        this.step = 1;
        this.progress = 0.25;
        this.mapDragging = false;
        this.slideOpts = {
          setWrapperSize: true,
          slidesPerView: 1,
          preloadImages: true,
          spaceBetween: 20,
          autoHeight: true
        };
        this.userInfoForm = formBuilder.group({
          name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(5)]],
          mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(9)]],
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]],
          username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(5)]],
          password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6)]]
        });
        this.addressInfoForm = formBuilder.group({
          address_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          country_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          state_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          city_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
          area_id: [''],
          postal_code: ['']
        });
      }

      _createClass(RegisterPage, [{
        key: "createLoader",
        value: function createLoader() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var loader;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingCtrl.create({
                      message: this._translate.instant('general.please_wait')
                    });

                  case 2:
                    loader = _context.sent;
                    loader.present();
                    return _context.abrupt("return", loader);

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var nodeList = document.querySelectorAll('._gmaps_cdv_');
          console.log('oin on destroy');
          console.log('_gmaps_cdv_', nodeList);

          for (var k = 0; k < nodeList.length; ++k) {
            nodeList.item(k).classList.remove('_gmaps_cdv_');
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.platform.ready();

                  case 2:
                    this.slides.lockSwipes(true);
                    this.getCountries();
                    this.dummyMarker = document.getElementById('DummyMarker');

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          var nodeList = document.querySelectorAll('._gmaps_cdv_');

          for (var k = 0; k < nodeList.length; ++k) {
            nodeList.item(k).classList.remove('_gmaps_cdv_');
          }
        }
      }, {
        key: "getCountries",
        value: function getCountries() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this = this;

            var loader;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.createLoader();

                  case 2:
                    loader = _context3.sent;
                    this.apiService.getCountries().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
                      return loader.dismiss();
                    })).subscribe(function (countries) {
                      _this.countries = countries;
                    });

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "getRegions",
        value: function getRegions() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this2 = this;

            var loader;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.createLoader();

                  case 2:
                    loader = _context4.sent;
                    this.apiService.getRegions(this.addressInfoForm.get('country_id').value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
                      return loader.dismiss();
                    })).subscribe(function (regions) {
                      _this2.regions = regions;
                    });

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "getCities",
        value: function getCities() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this3 = this;

            var loader;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.createLoader();

                  case 2:
                    loader = _context5.sent;
                    this.apiService.getCities(this.addressInfoForm.get('state_id').value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
                      return loader.dismiss();
                    })).subscribe(function (cities) {
                      _this3.cities = cities;
                    });

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "getAreas",
        value: function getAreas() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this4 = this;

            var loader;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.createLoader();

                  case 2:
                    loader = _context6.sent;
                    this.apiService.getAreas(this.addressInfoForm.get('city_id').value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
                      return loader.dismiss();
                    })).subscribe(function (areas) {
                      _this4.areas = areas;
                    });

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "searchForName",
        value: function searchForName(itemID, arrayItems) {
          var res = arrayItems.filter(function (item) {
            return item.id === itemID;
          }); // console.log(res);

          return res[0].name;
        }
      }, {
        key: "nextStep",
        value: function nextStep() {
          var _this5 = this;

          switch (this.step) {
            case 1:
              if (this.userInfoForm.valid) {
                this.toNextStep();
              } else {
                this.showToast(this._translate.instant('general.fill_all_required_fields'), 3000, 'top', 'danger');
              }

              break;

            case 2:
              if (this.addressInfoForm.valid) {
                this.loadMap();
                this.getAddressCenter();
                this.toNextStep();
              } else {
                this.showToast(this._translate.instant('general.fill_all_required_fields'), 3000, 'top', 'danger');
              }

              break;

            case 3:
              // console.log(this.lat);
              // console.log(this.lng);
              if (this.lat && this.lng) {
                var registerData = {
                  name: this.userInfoForm.get('name').value,
                  mobile: this.userInfoForm.get('mobile').value,
                  email: this.userInfoForm.get('email').value,
                  username: this.userInfoForm.get('username').value,
                  password: this.userInfoForm.get('password').value,
                  password_confirmation: this.userInfoForm.get('password').value,
                  address_name: this.addressInfoForm.get('address_name').value,
                  country_id: this.addressInfoForm.get('country_id').value,
                  state_id: this.addressInfoForm.get('state_id').value,
                  city_id: this.addressInfoForm.get('city_id').value,
                  area_id: this.addressInfoForm.get('area_id').value,
                  postal_code: this.addressInfoForm.get('postal_code').value,
                  lat: this.lat,
                  lng: this.lng
                }; // console.log(registerData);

                this.apiService.registerClient(registerData).subscribe(function (userData) {
                  if (userData && userData.token && userData.user) {
                    _this5.authService.doLogin(userData);

                    _this5.toNextStep();

                    _this5.showToast(_this5._translate.instant('general.account_created_successfully'), 2000, 'bottom', 'success');

                    setTimeout(function () {
                      _this5.router.navigate(['/tabs/home'], {
                        replaceUrl: true
                      });
                    }, 5000);
                  }
                }, function (error) {
                  console.log(error);

                  if (error.statusText === 'Unauthorized') {
                    _this5.step = 1;
                    _this5.progress = _this5.step / 4;

                    _this5.slides.lockSwipes(false);

                    _this5.slides.slideTo(0);

                    _this5.slides.lockSwipes(true); // this.userInfoForm.controls.email.setErrors({ incorrect: true });
                    // this.inputEmail.setFocus();

                  }

                  _this5.showToast(error.error.error, 3000, 'bottom', 'danger');
                });
              }

              break;
          }
        }
      }, {
        key: "toNextStep",
        value: function toNextStep() {
          this.step = this.step + 1;
          this.progress = this.step / 4;
          this.slides.lockSwipes(false);
          this.slides.slideNext();
          this.slides.lockSwipes(true); // console.log(this.step);
        }
      }, {
        key: "loadMap",
        value: function loadMap() {
          var _this6 = this;

          _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["Environment"].setEnv({
            API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyDvYLf1yswB12mE2qGDxDmlBJOF_Su-CCs',
            API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyDvYLf1yswB12mE2qGDxDmlBJOF_Su-CCs'
          });

          this.map = _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["GoogleMaps"].create('map_canvas', {
            camera: {
              target: {
                lat: 43.0741704,
                lng: -89.3809802
              },
              zoom: 18,
              tilt: 30
            }
          });
          this.map.addEventListener(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["GoogleMapsEvent"].CAMERA_MOVE_START).subscribe(function (data) {
            _this6.mapDragging = true; // this.dummyMarker.classList.add('dragging');
            // console.log('Dragging');
          });
          this.map.addEventListener(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["GoogleMapsEvent"].CAMERA_MOVE_END).subscribe(function (data) {
            // console.log(data);
            _this6.mapDragging = false; // this.dummyMarker.classList.remove('dragging');
            // console.log(this.map.getCameraTarget());

            var location = _this6.map.getCameraTarget();

            _this6.lat = location.lat;
            _this6.lng = location.lng; // console.log(this.lat);
            // console.log(this.lng);
          });
        }
      }, {
        key: "getAddressCenter",
        value: function getAddressCenter() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this7 = this;

            var addressArray, addressText;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    addressArray = {
                      country: this.searchForName(this.addressInfoForm.get('country_id').value, this.countries),
                      region: this.searchForName(this.addressInfoForm.get('state_id').value, this.regions),
                      city: this.searchForName(this.addressInfoForm.get('city_id').value, this.cities) // area: this.searchForName(
                      //   this.addressInfoForm.get('area_id').value,
                      //   this.areas
                      // )

                    };
                    addressText = "".concat(addressArray.city, " ").concat(addressArray.region, " ").concat(addressArray.country);
                    _context7.next = 4;
                    return this.loadingCtrl.create({
                      message: this._translate.instant('general.please_wait')
                    });

                  case 4:
                    this.loading = _context7.sent;
                    _context7.next = 7;
                    return this.loading.present();

                  case 7:
                    if (this.map) this.map.clear(); // Address -> latitude,longitude
                    // const searchAddress = `${this.addressInfoForm.get('')}`

                    _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["Geocoder"].geocode({
                      address: addressText
                    }).then(function (results) {
                      // console.log(results);
                      _this7.loading.dismiss();

                      if (results.length > 0) {
                        _this7.map.animateCamera({
                          target: results[0].position,
                          zoom: 16
                        });

                        _this7.lat = results[0].position.lat;
                        _this7.lng = results[0].position.lng; // console.log(this.lat);
                        // console.log(this.lng);
                      } else {// alert('Not found');
                        }
                    });

                  case 9:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "getCurrentLocation",
        value: function getCurrentLocation() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _this8 = this;

            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    if (this.map) this.map.clear();
                    _context8.next = 3;
                    return this.loadingCtrl.create({
                      message: this._translate.instant('general.please_wait')
                    });

                  case 3:
                    this.loading = _context8.sent;
                    _context8.next = 6;
                    return this.loading.present();

                  case 6:
                    // Get the location of you
                    this.map.getMyLocation().then(function (location) {
                      _this8.loading.dismiss(); // console.log(JSON.stringify(location, null, 2));
                      // Move the map camera to the location with animation


                      _this8.map.animateCamera({
                        target: location.latLng,
                        zoom: 17,
                        tilt: 30
                      });
                    })["catch"](function (err) {
                      _this8.loading.dismiss(); // console.log(err.error_message);

                    });

                  case 7:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "showToast",
        value: function showToast(msg, time, place, theme) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var toast;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.toastCtrl.create({
                      message: msg,
                      duration: time,
                      position: place,
                      color: theme
                    });

                  case 2:
                    toast = _context9.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }]);

      return RegisterPage;
    }();

    RegisterPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('stepSlider', null), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])], RegisterPage.prototype, "slides", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputEmail', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInput"])], RegisterPage.prototype, "inputEmail", void 0);
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.page.scss */
      "./src/app/register/register.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])], RegisterPage);
    /***/
  }
}]);
//# sourceMappingURL=register-register-module-es5.js.map