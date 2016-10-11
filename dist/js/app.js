webpackJsonp([0],{

/***/ 0:
/*!***************************!*\
  !*** ./app/app.module.ts ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 1);
	var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ 19);
	var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ 21);
	var app_component_1 = __webpack_require__(/*! ./app.component */ 23);
	var datatable_component_1 = __webpack_require__(/*! ./datatable/datatable.component */ 24);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    AppModule = __decorate([
	        core_1.NgModule({
	            declarations: [
	                app_component_1.AppComponent,
	                datatable_component_1.DataTableComponent
	            ],
	            imports: [
	                platform_browser_1.BrowserModule
	            ],
	            bootstrap: [app_component_1.AppComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppModule);
	    return AppModule;
	}());
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule)
	    .catch(function (err) { return console.error(err); });


/***/ },

/***/ 23:
/*!******************************!*\
  !*** ./app/app.component.ts ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 1);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'app',
	            template: "\n        <div>\n          Hello World! s\n          <data-table></data-table>\n        </div>\n    "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;


/***/ },

/***/ 24:
/*!**********************************************!*\
  !*** ./app/datatable/datatable.component.ts ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 1);
	var DataTableComponent = (function () {
	    function DataTableComponent() {
	    }
	    DataTableComponent = __decorate([
	        core_1.Component({
	            selector: 'data-table',
	            template: "\n    <div>\n      Data Table is here123\n    </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], DataTableComponent);
	    return DataTableComponent;
	}());
	exports.DataTableComponent = DataTableComponent;


/***/ }

});
//# sourceMappingURL=app.js.map