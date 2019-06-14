webpackJsonp([60],{

/***/ 1924:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonQRScannerInputInfoPagePageModule", function() { return AddonQRScannerInputInfoPagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__my_qrscanner__ = __webpack_require__(2071);
// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AddonQRScannerInputInfoPagePageModule = /** @class */ (function () {
    function AddonQRScannerInputInfoPagePageModule() {
    }
    AddonQRScannerInputInfoPagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__my_qrscanner__["a" /* AddonQRScannerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* CoreComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_5__pipes_pipes_module__["a" /* CorePipesModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__my_qrscanner__["a" /* AddonQRScannerPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonQRScannerInputInfoPagePageModule);
    return AddonQRScannerInputInfoPagePageModule;
}());

//# sourceMappingURL=my-qrscanner.module.js.map

/***/ }),

/***/ 2071:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonQRScannerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service__ = __webpack_require__(945);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_tabs_tabs__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_qr_scanner__ = __webpack_require__(980);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.





/**
 * Page that displays the list of calendar events.
 */
var AddonQRScannerPage = /** @class */ (function () {
    function AddonQRScannerPage(navCtrl, navParams, qrScanner, viewController, alertController, data) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qrScanner = qrScanner;
        this.viewController = viewController;
        this.alertController = alertController;
        this.data = data;
        this.light = false;
        this.frontCamera = false;
        this.pageLoaded = false;
        this.setupScanner();
    }
    /**
     * View loaded.
     */
    AddonQRScannerPage.prototype.ionViewDidLoad = function () {
        this.pageLoaded = true;
    };
    AddonQRScannerPage.prototype.closeCamera = function (data) {
        if (data === void 0) { data = null; }
        // Remove this.viewController.dismiss(data);
        this.navCtrl.setRoot("CoreLoginInitPage");
    };
    AddonQRScannerPage.prototype.toggleCamera = function () {
        this.frontCamera = !this.frontCamera;
        if (this.frontCamera) {
            this.qrScanner.useFrontCamera();
        }
        else {
            this.qrScanner.useBackCamera();
        }
    };
    AddonQRScannerPage.prototype.toggleLight = function () {
        this.light = !this.light;
        if (this.light) {
            this.qrScanner.enableLight();
        }
        else {
            this.qrScanner.disableLight();
        }
    };
    AddonQRScannerPage.prototype.setupScanner = function () {
        var _this = this;
        this.qrScanner.prepare()
            .then(function (status) {
            if (status.authorized) {
                var scanSub = _this.qrScanner.scan().subscribe(function (text) {
                    _this.dataHandle(text);
                    //this.qrScanner.hide(); // Hide camera preview
                    //scanSub.unsubscribe(); // Stop scanning
                });
            }
            else if (status.denied) {
                _this.qrScanner.openSettings();
            }
            else {
                // Permission was denied, but not permanently. You can ask for permission again at a later time.
            }
        })
            .catch(function (e) { return console.log('Error is', e); });
    };
    AddonQRScannerPage.prototype.dataHandle = function (data) {
        try {
            var obj = JSON.parse(data);
            if (this.checkDataHandle(obj)) {
                switch (obj.type) {
                    case 'EVALUATE':
                        this.data.setData(obj.value, 'scanner');
                        this.navCtrl.popToRoot();
                        this.navCtrl.parent.select(2);
                        break;
                    case 'COURSE':
                        this.navCtrl.push('CoreCourseSectionPage', { course: { id: obj.value } });
                        break;
                }
            }
        }
        catch (e) { }
    };
    AddonQRScannerPage.prototype.checkDataHandle = function (obj) {
        var result = false;
        var teamplateData = { type: '', value: '' };
        for (var el in obj) {
            result = teamplateData.hasOwnProperty(el);
        }
        return result;
    };
    AddonQRScannerPage.prototype.ionViewWillEnter = function () {
        this.setupScanner();
        this.qrScanner.show();
        window.document.querySelector('ion-app > .app-root').classList.add('transparentBody');
    };
    AddonQRScannerPage.prototype.ionViewWillLeave = function () {
        // Hide window.document.querySelector('ion-app > .app-root').classList.remove('hide');
        this.qrScanner.destroy();
    };
    AddonQRScannerPage.prototype.ionViewCanEnter = function () {
        if (this.qrScanner) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * Component being initialized.
     */
    AddonQRScannerPage.prototype.ngOnInit = function () { };
    /**
     * Page destroyed.
     */
    AddonQRScannerPage.prototype.ngOnDestroy = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__components_tabs_tabs__["a" /* CoreTabsComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__components_tabs_tabs__["a" /* CoreTabsComponent */])
    ], AddonQRScannerPage.prototype, "tabsComponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('searchbar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* Searchbar */])
    ], AddonQRScannerPage.prototype, "searchbar", void 0);
    AddonQRScannerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-my-qrscanner',template:/*ion-inline-start:"/Users/vndtadmin/Desktop/Moodlemobile_lang/src/addon/qrscanner/pages/my-qrscanner/my-qrscanner.html"*/'\n<ion-header>\n    <ion-navbar>\n        <ion-buttons left>\n            <button ion-button (click)="closeCamera()" class="bar-button-close"><ion-icon name="close"></ion-icon></button>\n        </ion-buttons>        \n        <ion-title>{{ \'addon.qrscanner.qrscanner\' | translate }}</ion-title>\n    </ion-navbar>\n</ion-header>\n<!--\n<ion-content class="qrscanner">\n    <div class="qrscanner-area">    \n    </div>       \n    <div class="button-bottom">\n        <button (click)="toggleLight()" ion-fab class="text-uppercase">\n            <ion-icon name="flash"></ion-icon>                  \n        </button>\n        <button (click)="toggleCamera()" ion-fab class="text-uppercase">\n            <ion-icon name="reverse-camera"></ion-icon>                  \n        </button>\n    </div>    \n</ion-content>\n-->\n<ion-content></ion-content>'/*ion-inline-end:"/Users/vndtadmin/Desktop/Moodlemobile_lang/src/addon/qrscanner/pages/my-qrscanner/my-qrscanner.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_qr_scanner__["a" /* QRScanner */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["F" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_service__["a" /* DataService */]])
    ], AddonQRScannerPage);
    return AddonQRScannerPage;
}());

//# sourceMappingURL=my-qrscanner.js.map

/***/ })

});
//# sourceMappingURL=60.js.map