function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shipment-details-shipment-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shipment-details/shipment-details.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shipment-details/shipment-details.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShipmentDetailsShipmentDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>shipmentDetails</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/shipment-details/shipment-details.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/shipment-details/shipment-details.module.ts ***!
    \*************************************************************/

  /*! exports provided: ShipmentDetailsPageModule */

  /***/
  function srcAppShipmentDetailsShipmentDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShipmentDetailsPageModule", function () {
      return ShipmentDetailsPageModule;
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


    var _shipment_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./shipment-details.page */
    "./src/app/shipment-details/shipment-details.page.ts");

    var routes = [{
      path: '',
      component: _shipment_details_page__WEBPACK_IMPORTED_MODULE_6__["ShipmentDetailsPage"]
    }];

    var ShipmentDetailsPageModule = function ShipmentDetailsPageModule() {
      _classCallCheck(this, ShipmentDetailsPageModule);
    };

    ShipmentDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_shipment_details_page__WEBPACK_IMPORTED_MODULE_6__["ShipmentDetailsPage"]]
    })], ShipmentDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/shipment-details/shipment-details.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/shipment-details/shipment-details.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppShipmentDetailsShipmentDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoaXBtZW50LWRldGFpbHMvc2hpcG1lbnQtZGV0YWlscy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/shipment-details/shipment-details.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shipment-details/shipment-details.page.ts ***!
    \***********************************************************/

  /*! exports provided: ShipmentDetailsPage */

  /***/
  function srcAppShipmentDetailsShipmentDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShipmentDetailsPage", function () {
      return ShipmentDetailsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ShipmentDetailsPage = /*#__PURE__*/function () {
      function ShipmentDetailsPage() {
        _classCallCheck(this, ShipmentDetailsPage);
      }

      _createClass(ShipmentDetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ShipmentDetailsPage;
    }();

    ShipmentDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-shipment-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./shipment-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shipment-details/shipment-details.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./shipment-details.page.scss */
      "./src/app/shipment-details/shipment-details.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ShipmentDetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=shipment-details-shipment-details-module-es5.js.map