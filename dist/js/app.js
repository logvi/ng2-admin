webpackJsonp([0],[
/* 0 */
/*!********************!*\
  !*** ./app/app.ts ***!
  \********************/
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
	var App = (function () {
	    function App() {
	    }
	    App = __decorate([
	        core_1.Component({
	            selector: 'app',
	            template: "\n        <div>\n          Hello World\n        </div>\n    "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], App);
	    return App;
	}());
	var AppModule = (function () {
	    function AppModule() {
	    }
	    AppModule = __decorate([
	        core_1.NgModule({
	            declarations: [
	                App
	            ],
	            imports: [
	                platform_browser_1.BrowserModule
	            ],
	            bootstrap: [App]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppModule);
	    return AppModule;
	}());
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule)
	    .catch(function (err) { return console.error(err); });


/***/ }
]);
//# sourceMappingURL=app.js.map