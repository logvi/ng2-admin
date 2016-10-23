webpackJsonp([0],{

/***/ 0:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
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
	var datatable_1 = __webpack_require__(/*! ./webcomponents/datatable */ 24);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    AppModule = __decorate([
	        core_1.NgModule({
	            declarations: [
	                app_component_1.AppComponent
	            ],
	            imports: [
	                platform_browser_1.BrowserModule,
	                datatable_1.default
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
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
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
	        this.datatable = {
	            columns: [
	                {
	                    name: 'column 1'
	                },
	                {
	                    name: 'column 2'
	                },
	                {
	                    name: 'column 3'
	                }
	            ],
	            data: [
	                [1, 6, 'asd'],
	                [0, 1, 'dfg'],
	                [3, 4, 'sdgsg'],
	                [7, 6, 'weeg'],
	                [0, 9, 'dsgsdg'],
	                [1, 2, 'wetth'],
	                [6, 7, 'dsfg'],
	                [4, 3, 'sdgfv'],
	                [8, 4, 'oiifd']
	            ]
	        };
	    }
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'app',
	            template: "\n        <div>\n          <data-table\n            [columns]=\"datatable.columns\"\n            [data]=\"datatable.data\"\n            [rowsPerPage]=\"3\"\n          ></data-table>\n        </div>\n    "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;


/***/ },

/***/ 24:
/*!**************************************************!*\
  !*** ./src/app/webcomponents/datatable/index.ts ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var datatable_module_1 = __webpack_require__(/*! ./datatable.module */ 25);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = datatable_module_1.DataTableModule;


/***/ },

/***/ 25:
/*!*************************************************************!*\
  !*** ./src/app/webcomponents/datatable/datatable.module.ts ***!
  \*************************************************************/
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
	var datatable_component_1 = __webpack_require__(/*! ./datatable.component */ 26);
	var DataTableModule = (function () {
	    function DataTableModule() {
	    }
	    DataTableModule = __decorate([
	        core_1.NgModule({
	            declarations: [
	                datatable_component_1.DataTableComponent
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], DataTableModule);
	    return DataTableModule;
	}());
	exports.DataTableModule = DataTableModule;


/***/ },

/***/ 26:
/*!****************************************************************!*\
  !*** ./src/app/webcomponents/datatable/datatable.component.ts ***!
  \****************************************************************/
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
	var datasource_class_1 = __webpack_require__(/*! ./classes/datasource.class */ 27);
	var DataTableComponent = (function () {
	    function DataTableComponent() {
	        this.currentPage = 0;
	    }
	    DataTableComponent.prototype.ngOnInit = function () {
	        this.columns.map(function (col, index) {
	            col.data = index;
	            return col;
	        });
	        this.dataSource = new datasource_class_1.DataSource(this.data);
	        console.log(this.currentPage);
	    };
	    DataTableComponent.prototype.orderBy = function (column) {
	        this.dataSource.orderBy(column);
	    };
	    DataTableComponent.prototype.getData = function () {
	        var newData = this.dataSource.getData().slice(this.currentPage * 3, this.currentPage * 3 + 3);
	        return newData;
	    };
	    DataTableComponent.prototype.changeData = function () {
	        this.dataSource.changeData();
	    };
	    DataTableComponent.prototype.nextPage = function () {
	        this.currentPage++;
	    };
	    DataTableComponent.prototype.setFilter = function () {
	        this.dataSource.setFilter({ column: 0, search: 0 });
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], DataTableComponent.prototype, "rowsPerPage", void 0);
	    DataTableComponent = __decorate([
	        core_1.Component({
	            selector: 'data-table',
	            inputs: [
	                'columns',
	                'data'
	            ],
	            template: "\n    <div class=\"data-table-header\">\n      <button (click)=\"setFilter()\">Filter</button>\n      <button (click)=\"changeData()\">Change</button>\n    </div>\n    <div class=\"data-table\">\n      <table>\n        <thead>\n          <tr>\n            <td *ngFor=\"let column of columns\"\n                (click)=\"orderBy(column.data)\">\n                {{column.name}}\n            </td>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let values of getData()\">\n            <td *ngFor=\"let value of values\">{{value}}</td>\n          <tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"data-table-footer\">\n      <div class=\"data-table_paginator\">\n        <ul>\n          <li>\n            <button (click)=\"nextPage()\"> >> </button>\n          </li>\n        </ul>\n      </div>\n    </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], DataTableComponent);
	    return DataTableComponent;
	}());
	exports.DataTableComponent = DataTableComponent;


/***/ },

/***/ 27:
/*!*********************************************************************!*\
  !*** ./src/app/webcomponents/datatable/classes/datasource.class.ts ***!
  \*********************************************************************/
/***/ function(module, exports) {

	"use strict";
	var DataSource = (function () {
	    function DataSource(data, options) {
	        this.data = data;
	        this.options = {
	            rowsPerPage: 15,
	            currentPage: 1,
	            order: {
	                column: 0,
	                dir: DataSource.ORDER_ASC
	            }
	        };
	        this.resultData = this.data.slice();
	        if (options)
	            this.options = Object.assign({}, this.options, options);
	    }
	    DataSource.prototype.orderBy = function (column, dir) {
	        var currentOrder = this.getOption('order'), orderDirection = dir || DataSource.ORDER_ASC;
	        if (currentOrder) {
	            orderDirection = currentOrder.column !== column ? dir || DataSource.ORDER_ASC : dir || this._toggleSortDirection(currentOrder.dir);
	        }
	        this.setOptions({
	            order: {
	                column: column,
	                dir: orderDirection
	            }
	        });
	        this._sort(column, orderDirection);
	    };
	    DataSource.prototype.setFilter = function (args) {
	        this.resultData = this.data.filter(function (element, index, array) {
	            return element[args.column] === args.search;
	        });
	    };
	    DataSource.prototype.setOptions = function (options) {
	        this.options = Object.assign({}, this.options, options);
	    };
	    DataSource.prototype.getOption = function (option) {
	        return this.options[option];
	    };
	    DataSource.prototype.getData = function () {
	        console.log('getData');
	        return this.resultData;
	    };
	    DataSource.prototype.getDataTotalLength = function () {
	        return this.data.length;
	    };
	    DataSource.prototype.getPageNumber = function () {
	        var rowsPerPage = this.getOption('rowsPerPage'), dataLength = this.getDataTotalLength();
	        return Math.ceil(dataLength / rowsPerPage);
	    };
	    DataSource.prototype.changeData = function () {
	        this.resultData = [
	            [1, 6, 'asd'],
	            [0, 1, 'zzzzzz'],
	            [3, 4, 'sdgsg']
	        ];
	    };
	    DataSource.prototype._sort = function (column, dir) {
	        this.resultData.sort(function (a, b) {
	            switch (dir) {
	                case DataSource.ORDER_ASC:
	                    return a[column] - b[column];
	                case DataSource.ORDER_DESC:
	                    return b[column] - a[column];
	                default:
	                    return a[column] - b[column];
	            }
	        });
	    };
	    DataSource.prototype._toggleSortDirection = function (dir) {
	        if (dir === DataSource.ORDER_ASC)
	            return DataSource.ORDER_DESC;
	        return DataSource.ORDER_ASC;
	    };
	    DataSource.ORDER_ASC = 'asc';
	    DataSource.ORDER_DESC = 'desc';
	    return DataSource;
	}());
	exports.DataSource = DataSource;


/***/ }

});
//# sourceMappingURL=app.js.map