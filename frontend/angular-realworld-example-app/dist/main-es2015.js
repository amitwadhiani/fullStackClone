(self["webpackChunkang2_conduit"] = self["webpackChunkang2_conduit"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-quicklink */ 5530);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);




const routes = [
    {
        path: 'settings',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_settings_settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./settings/settings.module */ 7075)).then(m => m.SettingsModule)
    },
    {
        path: 'profile',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./profile/profile.module */ 4523)).then(m => m.ProfileModule)
    },
    {
        path: 'editor',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_editor_editor_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./editor/editor.module */ 3164)).then(m => m.EditorModule)
    },
    {
        path: 'article',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_article_article_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./article/article.module */ 5745)).then(m => m.ArticleModule)
    }
];
class AppRoutingModule {
}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ imports: [[
            ngx_quicklink__WEBPACK_IMPORTED_MODULE_1__.QuicklinkModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
                // preload all modules; optionally we could
                // implement a custom preloading strategy for just some
                // of the modules (PRs welcome ????)
                preloadingStrategy: ngx_quicklink__WEBPACK_IMPORTED_MODULE_1__.QuicklinkStrategy,
                relativeLinkResolution: 'legacy'
            })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, { imports: [ngx_quicklink__WEBPACK_IMPORTED_MODULE_1__.QuicklinkModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ 3825);
/* harmony import */ var _shared_layout_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/layout/header.component */ 9596);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _shared_layout_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/layout/footer.component */ 8498);





class AppComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        this.userService.populate();
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.UserService)); };
AppComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "app-layout-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](2, "app-layout-footer");
    } }, directives: [_shared_layout_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _shared_layout_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.module */ 1674);
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.module */ 3467);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared */ 1679);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ 294);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/service-worker */ 2249);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);











class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
            _core_core_module__WEBPACK_IMPORTED_MODULE_5__.CoreModule,
            _shared__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            _home_home_module__WEBPACK_IMPORTED_MODULE_2__.HomeModule,
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_1__.AuthModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__.AppRoutingModule,
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__.ServiceWorkerModule.register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.production })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _shared__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _shared__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
        _core_core_module__WEBPACK_IMPORTED_MODULE_5__.CoreModule,
        _shared__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        _home_home_module__WEBPACK_IMPORTED_MODULE_2__.HomeModule,
        _auth_auth_module__WEBPACK_IMPORTED_MODULE_1__.AuthModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__.AppRoutingModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__.ServiceWorkerModule] }); })();


/***/ }),

/***/ 431:
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthRoutingModule": function() { return /* binding */ AuthRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.component */ 980);
/* harmony import */ var _no_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./no-auth-guard.service */ 6047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);





const routes = [
    {
        path: 'login',
        component: _auth_component__WEBPACK_IMPORTED_MODULE_0__.AuthComponent,
        canActivate: [_no_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__.NoAuthGuard]
    },
    {
        path: 'register',
        component: _auth_component__WEBPACK_IMPORTED_MODULE_0__.AuthComponent,
        canActivate: [_no_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__.NoAuthGuard]
    }
];
class AuthRoutingModule {
}
AuthRoutingModule.??fac = function AuthRoutingModule_Factory(t) { return new (t || AuthRoutingModule)(); };
AuthRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({ type: AuthRoutingModule });
AuthRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](AuthRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 980:
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthComponent": function() { return /* binding */ AuthComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ 3825);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _shared_list_errors_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/list-errors.component */ 6860);







const _c0 = function () { return ["/login"]; };
function AuthComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "Have an account?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction0"](1, _c0));
} }
const _c1 = function () { return ["/register"]; };
function AuthComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "Need an account?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction0"](1, _c1));
} }
function AuthComponent_input_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "input", 15);
} }
class AuthComponent {
    constructor(route, router, userService, fb, cd) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.fb = fb;
        this.cd = cd;
        this.authType = '';
        this.title = '';
        this.errors = { errors: {} };
        this.isSubmitting = false;
        // use FormBuilder to create a form group
        this.authForm = this.fb.group({
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
        });
    }
    ngOnInit() {
        this.route.url.subscribe(data => {
            // Get the last piece of the URL (it's either 'login' or 'register')
            this.authType = data[data.length - 1].path;
            // Set a title for the page accordingly
            this.title = (this.authType === 'login') ? 'Sign in' : 'Sign up';
            // add form control for username if this is the register page
            if (this.authType === 'register') {
                this.authForm.addControl('username', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl());
            }
            this.cd.markForCheck();
        });
    }
    submitForm() {
        this.isSubmitting = true;
        this.errors = { errors: {} };
        const credentials = this.authForm.value;
        this.userService
            .attemptAuth(this.authType, credentials)
            .subscribe(data => this.router.navigateByUrl('/'), err => {
            this.errors = err;
            this.isSubmitting = false;
            this.cd.markForCheck();
        });
    }
}
AuthComponent.??fac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef)); };
AuthComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: AuthComponent, selectors: [["app-auth-page"]], decls: 20, vars: 9, consts: [[1, "auth-page"], [1, "container", "page"], [1, "row"], [1, "col-md-6", "offset-md-3", "col-xs-12"], [1, "text-xs-center"], [3, "routerLink", 4, "ngIf"], [3, "errors"], [3, "formGroup", "ngSubmit"], [3, "disabled"], [1, "form-group"], ["formControlName", "username", "placeholder", "Username", "class", "form-control form-control-lg", "type", "text", 4, "ngIf"], ["formControlName", "email", "placeholder", "Email", "type", "text", 1, "form-control", "form-control-lg"], ["formControlName", "password", "placeholder", "Password", "type", "password", 1, "form-control", "form-control-lg"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "pull-xs-right", 3, "disabled"], [3, "routerLink"], ["formControlName", "username", "placeholder", "Username", "type", "text", 1, "form-control", "form-control-lg"]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](7, AuthComponent_a_7_Template, 2, 2, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](8, AuthComponent_a_8_Template, 2, 2, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](9, "app-list-errors", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngSubmit", function AuthComponent_Template_form_ngSubmit_10_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "fieldset", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "fieldset", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](13, AuthComponent_input_13_Template, 1, 0, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "fieldset", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "fieldset", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.authType == "register");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.authType == "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("errors", ctx.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("formGroup", ctx.authForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", ctx.isSubmitting);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.authType == "register");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", !ctx.authForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", ctx.title, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_list_errors_component__WEBPACK_IMPORTED_MODULE_1__.ListErrorsComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 1674:
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": function() { return /* binding */ AuthModule; }
/* harmony export */ });
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.component */ 980);
/* harmony import */ var _no_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./no-auth-guard.service */ 6047);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared */ 1679);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-routing.module */ 431);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);





class AuthModule {
}
AuthModule.??fac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
AuthModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({ type: AuthModule });
AuthModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({ providers: [
        _no_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__.NoAuthGuard
    ], imports: [[
            _shared__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__.AuthRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](AuthModule, { declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_0__.AuthComponent], imports: [_shared__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__.AuthRoutingModule] }); })();


/***/ }),

/***/ 6047:
/*!***********************************************!*\
  !*** ./src/app/auth/no-auth-guard.service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoAuthGuard": function() { return /* binding */ NoAuthGuard; }
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 4294);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ 3825);




class NoAuthGuard {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    canActivate(route, state) {
        return this.userService.isAuthenticated.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(isAuth => !isAuth));
    }
}
NoAuthGuard.??fac = function NoAuthGuard_Factory(t) { return new (t || NoAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_core__WEBPACK_IMPORTED_MODULE_0__.UserService)); };
NoAuthGuard.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjectable"]({ token: NoAuthGuard, factory: NoAuthGuard.??fac });


/***/ }),

/***/ 294:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": function() { return /* binding */ CoreModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _interceptors_http_token_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interceptors/http.token.interceptor */ 6643);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




class CoreModule {
}
CoreModule.??fac = function CoreModule_Factory(t) { return new (t || CoreModule)(); };
CoreModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: CoreModule });
CoreModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HTTP_INTERCEPTORS, useClass: _interceptors_http_token_interceptor__WEBPACK_IMPORTED_MODULE_0__.HttpTokenInterceptor, multi: true }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule] }); })();


/***/ }),

/***/ 3825:
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": function() { return /* reexport safe */ _core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule; },
/* harmony export */   "ApiService": function() { return /* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_1__.ApiService; },
/* harmony export */   "ArticlesService": function() { return /* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_1__.ArticlesService; },
/* harmony export */   "AuthGuard": function() { return /* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_1__.AuthGuard; },
/* harmony export */   "CommentsService": function() { return /* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_1__.CommentsService; },
/* harmony export */   "JwtService": function() { return /* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_1__.JwtService; },
/* harmony export */   "ProfilesService": function() { return /* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_1__.ProfilesService; },
/* harmony export */   "TagsService": function() { return /* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_1__.TagsService; },
/* harmony export */   "UserService": function() { return /* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_1__.UserService; },
/* harmony export */   "HttpTokenInterceptor": function() { return /* reexport safe */ _interceptors__WEBPACK_IMPORTED_MODULE_3__.HttpTokenInterceptor; }
/* harmony export */ });
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.module */ 294);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ 8138);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models */ 3902);
/* harmony import */ var _interceptors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interceptors */ 2756);






/***/ }),

/***/ 6643:
/*!*************************************************************!*\
  !*** ./src/app/core/interceptors/http.token.interceptor.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpTokenInterceptor": function() { return /* binding */ HttpTokenInterceptor; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ 8138);


class HttpTokenInterceptor {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    intercept(req, next) {
        const headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        const token = this.jwtService.getToken();
        if (token) {
            headersConfig['Authorization'] = `Token ${token}`;
        }
        const request = req.clone({ setHeaders: headersConfig });
        return next.handle(request);
    }
}
HttpTokenInterceptor.??fac = function HttpTokenInterceptor_Factory(t) { return new (t || HttpTokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_services__WEBPACK_IMPORTED_MODULE_0__.JwtService)); };
HttpTokenInterceptor.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: HttpTokenInterceptor, factory: HttpTokenInterceptor.??fac });


/***/ }),

/***/ 2756:
/*!********************************************!*\
  !*** ./src/app/core/interceptors/index.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpTokenInterceptor": function() { return /* reexport safe */ _http_token_interceptor__WEBPACK_IMPORTED_MODULE_0__.HttpTokenInterceptor; }
/* harmony export */ });
/* harmony import */ var _http_token_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http.token.interceptor */ 6643);



/***/ }),

/***/ 137:
/*!**********************************************************!*\
  !*** ./src/app/core/models/article-list-config.model.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 7247:
/*!**********************************************!*\
  !*** ./src/app/core/models/article.model.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 8230:
/*!**********************************************!*\
  !*** ./src/app/core/models/comment.model.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 1046:
/*!*********************************************!*\
  !*** ./src/app/core/models/errors.model.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 3902:
/*!**************************************!*\
  !*** ./src/app/core/models/index.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _article_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article.model */ 7247);
/* harmony import */ var _article_list_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article-list-config.model */ 137);
/* harmony import */ var _comment_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comment.model */ 8230);
/* harmony import */ var _errors_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errors.model */ 1046);
/* harmony import */ var _profile_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile.model */ 2191);
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.model */ 9249);








/***/ }),

/***/ 2191:
/*!**********************************************!*\
  !*** ./src/app/core/models/profile.model.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 9249:
/*!*******************************************!*\
  !*** ./src/app/core/models/user.model.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 5384:
/*!**********************************************!*\
  !*** ./src/app/core/services/api.service.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": function() { return /* binding */ ApiService; }
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 8567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);






class ApiService {
    constructor(http) {
        this.http = http;
    }
    formatErrors(error) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(error.error);
    }
    get(path, params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams()) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_url}${path}`, { params })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.formatErrors));
    }
    put(path, body = {}) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_url}${path}`, JSON.stringify(body)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.formatErrors));
    }
    post(path, body = {}) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_url}${path}`, JSON.stringify(body)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.formatErrors));
    }
    delete(path) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_url}${path}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.formatErrors));
    }
}
ApiService.??fac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ApiService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjectable"]({ token: ApiService, factory: ApiService.??fac, providedIn: 'root' });


/***/ }),

/***/ 9921:
/*!***************************************************!*\
  !*** ./src/app/core/services/articles.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticlesService": function() { return /* binding */ ArticlesService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 5384);




class ArticlesService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    query(config) {
        // Convert any filters over to Angular's URLSearchParams
        const params = {};
        Object.keys(config.filters)
            .forEach((key) => {
            params[key] = config.filters[key];
        });
        return this.apiService
            .get('/articles' + ((config.type === 'feed') ? '/feed' : ''), new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams({ fromObject: params }));
    }
    get(slug) {
        return this.apiService.get('/articles/' + slug)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(data => data.article));
    }
    destroy(slug) {
        return this.apiService.delete('/articles/' + slug);
    }
    save(article) {
        // If we're updating an existing article
        if (article.slug) {
            return this.apiService.put('/articles/' + article.slug, { article: article })
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(data => data.article));
            // Otherwise, create a new article
        }
        else {
            return this.apiService.post('/articles/', { article: article })
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(data => data.article));
        }
    }
    favorite(slug) {
        return this.apiService.post('/articles/' + slug + '/favorite');
    }
    unfavorite(slug) {
        return this.apiService.delete('/articles/' + slug + '/favorite');
    }
}
ArticlesService.??fac = function ArticlesService_Factory(t) { return new (t || ArticlesService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService)); };
ArticlesService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjectable"]({ token: ArticlesService, factory: ArticlesService.??fac, providedIn: 'root' });


/***/ }),

/***/ 970:
/*!*****************************************************!*\
  !*** ./src/app/core/services/auth-guard.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": function() { return /* binding */ AuthGuard; }
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 4294);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.service */ 8386);




class AuthGuard {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    canActivate(route, state) {
        return this.userService.isAuthenticated.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1));
    }
}
AuthGuard.??fac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService)); };
AuthGuard.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: AuthGuard, factory: AuthGuard.??fac, providedIn: 'root' });


/***/ }),

/***/ 378:
/*!***************************************************!*\
  !*** ./src/app/core/services/comments.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentsService": function() { return /* binding */ CommentsService; }
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 5384);



class CommentsService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    add(slug, payload) {
        return this.apiService
            .post(`/articles/${slug}/comments`, { comment: { body: payload } }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => data.comment));
    }
    getAll(slug) {
        return this.apiService.get(`/articles/${slug}/comments`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => data.comments));
    }
    destroy(commentId, articleSlug) {
        return this.apiService
            .delete(`/articles/${articleSlug}/comments/${commentId}`);
    }
}
CommentsService.??fac = function CommentsService_Factory(t) { return new (t || CommentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService)); };
CommentsService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: CommentsService, factory: CommentsService.??fac, providedIn: 'root' });


/***/ }),

/***/ 8138:
/*!****************************************!*\
  !*** ./src/app/core/services/index.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": function() { return /* reexport safe */ _api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService; },
/* harmony export */   "ArticlesService": function() { return /* reexport safe */ _articles_service__WEBPACK_IMPORTED_MODULE_1__.ArticlesService; },
/* harmony export */   "AuthGuard": function() { return /* reexport safe */ _auth_guard_service__WEBPACK_IMPORTED_MODULE_2__.AuthGuard; },
/* harmony export */   "CommentsService": function() { return /* reexport safe */ _comments_service__WEBPACK_IMPORTED_MODULE_3__.CommentsService; },
/* harmony export */   "JwtService": function() { return /* reexport safe */ _jwt_service__WEBPACK_IMPORTED_MODULE_4__.JwtService; },
/* harmony export */   "ProfilesService": function() { return /* reexport safe */ _profiles_service__WEBPACK_IMPORTED_MODULE_5__.ProfilesService; },
/* harmony export */   "TagsService": function() { return /* reexport safe */ _tags_service__WEBPACK_IMPORTED_MODULE_6__.TagsService; },
/* harmony export */   "UserService": function() { return /* reexport safe */ _user_service__WEBPACK_IMPORTED_MODULE_7__.UserService; }
/* harmony export */ });
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 5384);
/* harmony import */ var _articles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articles.service */ 9921);
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-guard.service */ 970);
/* harmony import */ var _comments_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comments.service */ 378);
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jwt.service */ 7493);
/* harmony import */ var _profiles_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profiles.service */ 7457);
/* harmony import */ var _tags_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tags.service */ 3171);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user.service */ 8386);










/***/ }),

/***/ 7493:
/*!**********************************************!*\
  !*** ./src/app/core/services/jwt.service.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtService": function() { return /* binding */ JwtService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class JwtService {
    getToken() {
        return window.localStorage['jwtToken'];
    }
    saveToken(token) {
        window.localStorage['jwtToken'] = token;
    }
    destroyToken() {
        window.localStorage.removeItem('jwtToken');
    }
}
JwtService.??fac = function JwtService_Factory(t) { return new (t || JwtService)(); };
JwtService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: JwtService, factory: JwtService.??fac, providedIn: 'root' });


/***/ }),

/***/ 7457:
/*!***************************************************!*\
  !*** ./src/app/core/services/profiles.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilesService": function() { return /* binding */ ProfilesService; }
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 5384);



class ProfilesService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    get(username) {
        return this.apiService.get('/profiles/' + username)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((data) => data.profile));
    }
    follow(username) {
        return this.apiService.post('/profiles/' + username + '/follow');
    }
    unfollow(username) {
        return this.apiService.delete('/profiles/' + username + '/follow');
    }
}
ProfilesService.??fac = function ProfilesService_Factory(t) { return new (t || ProfilesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService)); };
ProfilesService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: ProfilesService, factory: ProfilesService.??fac, providedIn: 'root' });


/***/ }),

/***/ 3171:
/*!***********************************************!*\
  !*** ./src/app/core/services/tags.service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagsService": function() { return /* binding */ TagsService; }
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 5384);



class TagsService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    getAll() {
        return this.apiService.get('/tags')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => data.tags));
    }
}
TagsService.??fac = function TagsService_Factory(t) { return new (t || TagsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService)); };
TagsService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: TagsService, factory: TagsService.??fac, providedIn: 'root' });


/***/ }),

/***/ 8386:
/*!***********************************************!*\
  !*** ./src/app/core/services/user.service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": function() { return /* binding */ UserService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5094);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9681);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 2687);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 5384);
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt.service */ 7493);





class UserService {
    constructor(apiService, jwtService) {
        this.apiService = apiService;
        this.jwtService = jwtService;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({});
        this.currentUser = this.currentUserSubject.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.distinctUntilChanged)());
        this.isAuthenticatedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.ReplaySubject(1);
        this.isAuthenticated = this.isAuthenticatedSubject.asObservable();
    }
    // Verify JWT in localstorage with server & load user's info.
    // This runs once on application startup.
    populate() {
        // If JWT detected, attempt to get & store user's info
        if (this.jwtService.getToken()) {
            this.apiService.get('/user')
                .subscribe(data => this.setAuth(data.user), err => this.purgeAuth());
        }
        else {
            // Remove any potential remnants of previous auth states
            this.purgeAuth();
        }
    }
    setAuth(user) {
        // Save JWT sent from server in localstorage
        this.jwtService.saveToken(user.token);
        // Set current user data into observable
        this.currentUserSubject.next(user);
        // Set isAuthenticated to true
        this.isAuthenticatedSubject.next(true);
    }
    purgeAuth() {
        // Remove JWT from localstorage
        this.jwtService.destroyToken();
        // Set current user to an empty object
        this.currentUserSubject.next({});
        // Set auth status to false
        this.isAuthenticatedSubject.next(false);
    }
    attemptAuth(type, credentials) {
        const route = (type === 'login') ? '/login' : '';
        return this.apiService.post(`/users${route}`, { user: credentials })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(data => {
            this.setAuth(data.user);
            return data;
        }));
    }
    getCurrentUser() {
        return this.currentUserSubject.value;
    }
    // Update the user on the server (email, pass, etc)
    update(user) {
        return this.apiService
            .put('/user', { user })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(data => {
            // Update the currentUser observable
            this.currentUserSubject.next(data.user);
            return data.user;
        }));
    }
}
UserService.??fac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["????inject"](_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????inject"](_jwt_service__WEBPACK_IMPORTED_MODULE_1__.JwtService)); };
UserService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineInjectable"]({ token: UserService, factory: UserService.??fac, providedIn: 'root' });


/***/ }),

/***/ 2160:
/*!****************************************************!*\
  !*** ./src/app/home/home-auth-resolver.service.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeAuthResolver": function() { return /* binding */ HomeAuthResolver; }
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 4294);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ 3825);




class HomeAuthResolver {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    resolve(route, state) {
        return this.userService.isAuthenticated.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1));
    }
}
HomeAuthResolver.??fac = function HomeAuthResolver_Factory(t) { return new (t || HomeAuthResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_core__WEBPACK_IMPORTED_MODULE_0__.UserService)); };
HomeAuthResolver.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: HomeAuthResolver, factory: HomeAuthResolver.??fac, providedIn: 'root' });


/***/ }),

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoutingModule": function() { return /* binding */ HomeRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 5067);
/* harmony import */ var _home_auth_resolver_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-auth-resolver.service */ 2160);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);





const routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
        resolve: {
            isAuthenticated: _home_auth_resolver_service__WEBPACK_IMPORTED_MODULE_1__.HomeAuthResolver
        }
    }
];
class HomeRoutingModule {
}
HomeRoutingModule.??fac = function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); };
HomeRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": function() { return /* binding */ HomeComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ 3825);
/* harmony import */ var _shared_show_authed_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/show-authed.directive */ 893);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _shared_article_helpers_article_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/article-helpers/article-list.component */ 870);






function HomeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "h1", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, "conduit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](5, "A place to share your ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](7, "Angular");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](8, " knowledge.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function HomeComponent_a_23_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function HomeComponent_a_23_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r4); const tag_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r3.setListTo("all", { tag: tag_r2 }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const tag_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", tag_r2, " ");
} }
const _c0 = function (a0) { return { "active": a0 }; };
class HomeComponent {
    constructor(router, tagsService, userService, cd) {
        this.router = router;
        this.tagsService = tagsService;
        this.userService = userService;
        this.cd = cd;
        this.listConfig = {
            type: 'all',
            filters: {}
        };
        this.tags = [];
        this.tagsLoaded = false;
    }
    ngOnInit() {
        this.userService.isAuthenticated.subscribe((authenticated) => {
            this.isAuthenticated = authenticated;
            // set the article list accordingly
            if (authenticated) {
                this.setListTo('feed');
            }
            else {
                this.setListTo('all');
            }
            this.cd.markForCheck();
        });
        this.tagsService.getAll()
            .subscribe(tags => {
            this.tags = tags;
            this.tagsLoaded = true;
            this.cd.markForCheck();
        });
    }
    trackByFn(index, item) {
        return index;
    }
    setListTo(type = '', filters = {}) {
        // If feed is requested but user is not authenticated, redirect to login
        if (type === 'feed' && !this.isAuthenticated) {
            this.router.navigateByUrl('/login');
            return;
        }
        // Otherwise, set the list object
        this.listConfig = { type: type, filters: filters };
    }
}
HomeComponent.??fac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.TagsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef)); };
HomeComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: HomeComponent, selectors: [["app-home-page"]], decls: 28, vars: 15, consts: [[1, "home-page"], ["class", "banner", 4, "appShowAuthed"], [1, "container", "page"], [1, "row"], [1, "col-md-9"], [1, "feed-toggle"], [1, "nav", "nav-pills", "outline-active"], [1, "nav-item"], [1, "nav-link", 3, "ngClass", "click"], [1, "nav-item", 3, "hidden"], [1, "nav-link", "active"], [1, "ion-pound"], [3, "limit", "config"], [1, "col-md-3"], [1, "sidebar"], [1, "tag-list"], ["class", "tag-default tag-pill", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "hidden"], [1, "banner"], [1, "container"], [1, "logo-font"], [1, "tag-default", "tag-pill", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, HomeComponent_div_1_Template, 9, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function HomeComponent_Template_a_click_8_listener() { return ctx.setListTo("feed"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](9, " Your Feed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function HomeComponent_Template_a_click_11_listener() { return ctx.setListTo("all"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](12, " Global Feed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](15, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](17, "app-article-list", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](21, "Popular Tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](23, HomeComponent_a_23_Template, 2, 1, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](25, " Loading tags... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](27, " No tags are here... yet. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("appShowAuthed", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](11, _c0, ctx.listConfig.type === "feed"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](13, _c0, ctx.listConfig.type === "all" && !ctx.listConfig.filters.tag));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("hidden", !ctx.listConfig.filters.tag);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", ctx.listConfig.filters.tag, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("limit", 10)("config", ctx.listConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx.tags)("ngForTrackBy", ctx.trackByFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("hidden", ctx.tagsLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("hidden", !ctx.tagsLoaded || ctx.tags.length > 0);
    } }, directives: [_shared_show_authed_directive__WEBPACK_IMPORTED_MODULE_1__.ShowAuthedDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _shared_article_helpers_article_list_component__WEBPACK_IMPORTED_MODULE_2__.ArticleListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf], styles: [".nav-link[_ngcontent-%COMP%] {\r\n  cursor:pointer;\r\n}\r\n\r\n.tag-pill[_ngcontent-%COMP%]{\r\n  cursor:pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtbGluayB7XHJcbiAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuXHJcbi50YWctcGlsbHtcclxuICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": function() { return /* binding */ HomeModule; }
/* harmony export */ });
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 5067);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared */ 1679);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




class HomeModule {
}
HomeModule.??fac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({ type: HomeModule });
HomeModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({ providers: [], imports: [[
            _shared__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_2__.HomeRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent], imports: [_shared__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _home_routing_module__WEBPACK_IMPORTED_MODULE_2__.HomeRoutingModule] }); })();


/***/ }),

/***/ 870:
/*!******************************************************************!*\
  !*** ./src/app/shared/article-helpers/article-list.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleListComponent": function() { return /* binding */ ArticleListComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core */ 3825);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _article_preview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article-preview.component */ 4028);




function ArticleListComponent_app_article_preview_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "app-article-preview", 5);
} if (rf & 2) {
    const article_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("article", article_r2);
} }
const _c0 = function (a0) { return { "active": a0 }; };
function ArticleListComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function ArticleListComponent_li_7_Template_li_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r5); const pageNumber_r3 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return ctx_r4.setPageTo(pageNumber_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const pageNumber_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](2, _c0, pageNumber_r3 === ctx_r1.currentPage));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](pageNumber_r3);
} }
class ArticleListComponent {
    constructor(articlesService, cd) {
        this.articlesService = articlesService;
        this.cd = cd;
        this.loading = false;
        this.currentPage = 1;
        this.totalPages = [1];
    }
    set config(config) {
        if (config) {
            this.query = config;
            this.currentPage = 1;
            this.runQuery();
        }
    }
    setPageTo(pageNumber) {
        this.currentPage = pageNumber;
        this.runQuery();
    }
    trackByFn(index, item) {
        return index;
    }
    runQuery() {
        this.loading = true;
        this.results = [];
        // Create limit and offset filter (if necessary)
        if (this.limit) {
            this.query.filters.limit = this.limit;
            this.query.filters.offset = (this.limit * (this.currentPage - 1));
        }
        this.articlesService.query(this.query)
            .subscribe(data => {
            this.loading = false;
            this.results = data.articles;
            // Used from http://www.jstips.co/en/create-range-0...n-easily-using-one-line/
            this.totalPages = Array.from(new Array(Math.ceil(data.articlesCount / this.limit)), (val, index) => index + 1);
            this.cd.markForCheck();
        });
    }
}
ArticleListComponent.??fac = function ArticleListComponent_Factory(t) { return new (t || ArticleListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.ArticlesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef)); };
ArticleListComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: ArticleListComponent, selectors: [["app-article-list"]], inputs: { limit: "limit", config: "config" }, decls: 8, vars: 7, consts: [[3, "article", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "app-article-preview", 3, "hidden"], [3, "hidden"], [1, "pagination"], ["class", "page-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "article"], [1, "page-item", 3, "ngClass", "click"], [1, "page-link"]], template: function ArticleListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](0, ArticleListComponent_app_article_preview_0_Template, 1, 1, "app-article-preview", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, " Loading articles...\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4, " No articles are here... yet.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](7, ArticleListComponent_li_7_Template, 3, 4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.results)("ngForTrackBy", ctx.trackByFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("hidden", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("hidden", ctx.loading || ctx.results.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("hidden", ctx.loading || ctx.totalPages.length <= 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.totalPages)("ngForTrackBy", ctx.trackByFn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _article_preview_component__WEBPACK_IMPORTED_MODULE_1__.ArticlePreviewComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass], styles: [".page-link[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGUtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJhcnRpY2xlLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWxpbmsge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 540:
/*!******************************************************************!*\
  !*** ./src/app/shared/article-helpers/article-meta.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleMetaComponent": function() { return /* binding */ ArticleMetaComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);



const _c0 = function (a1) { return ["/profile", a1]; };
const _c1 = ["*"];
class ArticleMetaComponent {
}
ArticleMetaComponent.??fac = function ArticleMetaComponent_Factory(t) { return new (t || ArticleMetaComponent)(); };
ArticleMetaComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ArticleMetaComponent, selectors: [["app-article-meta"]], inputs: { article: "article" }, ngContentSelectors: _c1, decls: 10, vars: 12, consts: [[1, "article-meta"], [3, "routerLink"], ["alt", "author image", 3, "src"], [1, "info"], [1, "author", 3, "routerLink"], [1, "date"]], template: function ArticleMetaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????projectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](8, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????projection"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](8, _c0, ctx.article.author.username));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx.article.author.image || "https://static.productionready.io/images/smiley-cyrus.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](10, _c0, ctx.article.author.username));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.article.author.username, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](8, 5, ctx.article.createdAt, "longDate"), " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 4028:
/*!*********************************************************************!*\
  !*** ./src/app/shared/article-helpers/article-preview.component.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticlePreviewComponent": function() { return /* binding */ ArticlePreviewComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _article_meta_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article-meta.component */ 540);
/* harmony import */ var _buttons_favorite_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../buttons/favorite-button.component */ 4929);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);





function ArticlePreviewComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const tag_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", tag_r1, " ");
} }
const _c0 = function (a1) { return ["/article", a1]; };
class ArticlePreviewComponent {
    trackByFn(index, item) {
        return index;
    }
    onToggleFavorite(favorited) {
        this.article['favorited'] = favorited;
        if (favorited) {
            this.article['favoritesCount']++;
        }
        else {
            this.article['favoritesCount']--;
        }
    }
}
ArticlePreviewComponent.??fac = function ArticlePreviewComponent_Factory(t) { return new (t || ArticlePreviewComponent)(); };
ArticlePreviewComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: ArticlePreviewComponent, selectors: [["app-article-preview"]], inputs: { article: "article" }, decls: 13, vars: 10, consts: [[1, "article-preview"], [3, "article"], [1, "pull-xs-right", 3, "article", "toggle"], [1, "preview-link", 3, "routerLink"], [1, "tag-list"], ["class", "tag-default tag-pill tag-outline", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "tag-default", "tag-pill", "tag-outline"]], template: function ArticlePreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "app-article-meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "app-favorite-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("toggle", function ArticlePreviewComponent_Template_app_favorite_button_toggle_2_listener($event) { return ctx.onToggleFavorite($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](10, "Read more...");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](12, ArticlePreviewComponent_li_12_Template, 2, 1, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("article", ctx.article);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("article", ctx.article);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", ctx.article.favoritesCount, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](8, _c0, ctx.article.slug));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx.article.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx.article.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.article.tagList)("ngForTrackBy", ctx.trackByFn);
    } }, directives: [_article_meta_component__WEBPACK_IMPORTED_MODULE_0__.ArticleMetaComponent, _buttons_favorite_button_component__WEBPACK_IMPORTED_MODULE_1__.FavoriteButtonComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 6579:
/*!*************************************************!*\
  !*** ./src/app/shared/article-helpers/index.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleListComponent": function() { return /* reexport safe */ _article_list_component__WEBPACK_IMPORTED_MODULE_0__.ArticleListComponent; },
/* harmony export */   "ArticleMetaComponent": function() { return /* reexport safe */ _article_meta_component__WEBPACK_IMPORTED_MODULE_1__.ArticleMetaComponent; },
/* harmony export */   "ArticlePreviewComponent": function() { return /* reexport safe */ _article_preview_component__WEBPACK_IMPORTED_MODULE_2__.ArticlePreviewComponent; }
/* harmony export */ });
/* harmony import */ var _article_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article-list.component */ 870);
/* harmony import */ var _article_meta_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article-meta.component */ 540);
/* harmony import */ var _article_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article-preview.component */ 4028);





/***/ }),

/***/ 4929:
/*!*************************************************************!*\
  !*** ./src/app/shared/buttons/favorite-button.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoriteButtonComponent": function() { return /* binding */ FavoriteButtonComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1964);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3766);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9922);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core */ 3825);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);







const _c0 = function (a0, a1, a2) { return { "disabled": a0, "btn-outline-primary": a1, "btn-primary": a2 }; };
const _c1 = ["*"];
class FavoriteButtonComponent {
    constructor(articlesService, router, userService, cd) {
        this.articlesService = articlesService;
        this.router = router;
        this.userService = userService;
        this.cd = cd;
        this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.isSubmitting = false;
    }
    toggleFavorite() {
        this.isSubmitting = true;
        this.userService.isAuthenticated.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.concatMap)((authenticated) => {
            // Not authenticated? Push to login screen
            if (!authenticated) {
                this.router.navigateByUrl('/login');
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(null);
            }
            // Favorite the article if it isn't favorited yet
            if (!this.article.favorited) {
                return this.articlesService.favorite(this.article.slug)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(data => {
                    this.isSubmitting = false;
                    this.toggle.emit(true);
                }, err => this.isSubmitting = false));
                // Otherwise, unfavorite the article
            }
            else {
                return this.articlesService.unfavorite(this.article.slug)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(data => {
                    this.isSubmitting = false;
                    this.toggle.emit(false);
                }, err => this.isSubmitting = false));
            }
        })).subscribe(() => {
            this.cd.markForCheck();
        });
    }
}
FavoriteButtonComponent.??fac = function FavoriteButtonComponent_Factory(t) { return new (t || FavoriteButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.ArticlesService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef)); };
FavoriteButtonComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: FavoriteButtonComponent, selectors: [["app-favorite-button"]], inputs: { article: "article" }, outputs: { toggle: "toggle" }, ngContentSelectors: _c1, decls: 3, vars: 5, consts: [[1, "btn", "btn-sm", 3, "ngClass", "click"], [1, "ion-heart"]], template: function FavoriteButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????projectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FavoriteButtonComponent_Template_button_click_0_listener() { return ctx.toggleFavorite(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????projection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction3"](1, _c0, ctx.isSubmitting, !ctx.article.favorited, ctx.article.favorited));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 1322:
/*!***********************************************************!*\
  !*** ./src/app/shared/buttons/follow-button.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FollowButtonComponent": function() { return /* binding */ FollowButtonComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3766);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9922);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1964);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core */ 3825);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);







const _c0 = function (a0, a1, a2) { return { "disabled": a0, "btn-outline-secondary": a1, "btn-secondary": a2 }; };
class FollowButtonComponent {
    constructor(profilesService, router, userService, cd) {
        this.profilesService = profilesService;
        this.router = router;
        this.userService = userService;
        this.cd = cd;
        this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.isSubmitting = false;
    }
    toggleFollowing() {
        this.isSubmitting = true;
        // TODO: remove nested subscribes, use mergeMap
        this.userService.isAuthenticated.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.concatMap)((authenticated) => {
            // Not authenticated? Push to login screen
            if (!authenticated) {
                this.router.navigateByUrl('/login');
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(null);
            }
            // Follow this profile if we aren't already
            if (!this.profile.following) {
                return this.profilesService.follow(this.profile.username)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(data => {
                    this.isSubmitting = false;
                    this.toggle.emit(true);
                }, err => this.isSubmitting = false));
                // Otherwise, unfollow this profile
            }
            else {
                return this.profilesService.unfollow(this.profile.username)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(data => {
                    this.isSubmitting = false;
                    this.toggle.emit(false);
                }, err => this.isSubmitting = false));
            }
        })).subscribe(() => {
            this.cd.markForCheck();
        });
    }
}
FollowButtonComponent.??fac = function FollowButtonComponent_Factory(t) { return new (t || FollowButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.ProfilesService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef)); };
FollowButtonComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: FollowButtonComponent, selectors: [["app-follow-button"]], inputs: { profile: "profile" }, outputs: { toggle: "toggle" }, decls: 3, vars: 7, consts: [[1, "btn", "btn-sm", "action-btn", 3, "ngClass", "click"], [1, "ion-plus-round"]], template: function FollowButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FollowButtonComponent_Template_button_click_0_listener() { return ctx.toggleFollowing(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction3"](3, _c0, ctx.isSubmitting, !ctx.profile.following, ctx.profile.following));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"](" \u00A0 ", ctx.profile.following ? "Unfollow" : "Follow", " ", ctx.profile.username, "\n");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 2341:
/*!*****************************************!*\
  !*** ./src/app/shared/buttons/index.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoriteButtonComponent": function() { return /* reexport safe */ _favorite_button_component__WEBPACK_IMPORTED_MODULE_0__.FavoriteButtonComponent; },
/* harmony export */   "FollowButtonComponent": function() { return /* reexport safe */ _follow_button_component__WEBPACK_IMPORTED_MODULE_1__.FollowButtonComponent; }
/* harmony export */ });
/* harmony import */ var _favorite_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorite-button.component */ 4929);
/* harmony import */ var _follow_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./follow-button.component */ 1322);




/***/ }),

/***/ 1679:
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleListComponent": function() { return /* reexport safe */ _article_helpers__WEBPACK_IMPORTED_MODULE_0__.ArticleListComponent; },
/* harmony export */   "ArticleMetaComponent": function() { return /* reexport safe */ _article_helpers__WEBPACK_IMPORTED_MODULE_0__.ArticleMetaComponent; },
/* harmony export */   "ArticlePreviewComponent": function() { return /* reexport safe */ _article_helpers__WEBPACK_IMPORTED_MODULE_0__.ArticlePreviewComponent; },
/* harmony export */   "FavoriteButtonComponent": function() { return /* reexport safe */ _buttons__WEBPACK_IMPORTED_MODULE_1__.FavoriteButtonComponent; },
/* harmony export */   "FollowButtonComponent": function() { return /* reexport safe */ _buttons__WEBPACK_IMPORTED_MODULE_1__.FollowButtonComponent; },
/* harmony export */   "FooterComponent": function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_2__.FooterComponent; },
/* harmony export */   "HeaderComponent": function() { return /* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent; },
/* harmony export */   "ListErrorsComponent": function() { return /* reexport safe */ _list_errors_component__WEBPACK_IMPORTED_MODULE_3__.ListErrorsComponent; },
/* harmony export */   "SharedModule": function() { return /* reexport safe */ _shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule; },
/* harmony export */   "ShowAuthedDirective": function() { return /* reexport safe */ _show_authed_directive__WEBPACK_IMPORTED_MODULE_5__.ShowAuthedDirective; }
/* harmony export */ });
/* harmony import */ var _article_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article-helpers */ 6579);
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons */ 2341);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout */ 7633);
/* harmony import */ var _list_errors_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-errors.component */ 6860);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared.module */ 4466);
/* harmony import */ var _show_authed_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./show-authed.directive */ 893);








/***/ }),

/***/ 8498:
/*!***************************************************!*\
  !*** ./src/app/shared/layout/footer.component.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": function() { return /* binding */ FooterComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);



class FooterComponent {
    constructor() {
        this.today = Date.now();
    }
}
FooterComponent.??fac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FooterComponent, selectors: [["app-layout-footer"]], decls: 10, vars: 4, consts: [[1, "container"], ["routerLink", "/", 1, "logo-font"], [1, "attribution"], ["href", "https://thinkster.io"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "conduit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](6, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Thinkster");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, ". Code licensed under MIT. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" \u00A9 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](6, 1, ctx.today, "yyyy"), ". An interactive learning project from ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 9596:
/*!***************************************************!*\
  !*** ./src/app/shared/layout/header.component.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": function() { return /* binding */ HeaderComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core */ 3825);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _show_authed_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../show-authed.directive */ 893);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);





function HeaderComponent_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, " Home ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, " Sign in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](9, " Sign up ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function HeaderComponent_ul_5_img_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "img", 16);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("src", ctx_r2.currentUser.image || "https://static.productionready.io/images/smiley-cyrus.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????sanitizeUrl"]);
} }
const _c0 = function () { return { exact: true }; };
const _c1 = function (a1) { return ["/profile", a1]; };
function HeaderComponent_ul_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, " Home ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](6, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, "\u00A0New Article ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](10, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](11, "\u00A0Settings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](14, HeaderComponent_ul_5_img_14_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](5, _c1, ctx_r1.currentUser.username));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r1.currentUser.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", ctx_r1.currentUser.username, " ");
} }
class HeaderComponent {
    constructor(userService, cd) {
        this.userService = userService;
        this.cd = cd;
    }
    ngOnInit() {
        this.userService.currentUser.subscribe((userData) => {
            this.currentUser = userData;
            this.cd.markForCheck();
        });
    }
}
HeaderComponent.??fac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef)); };
HeaderComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: HeaderComponent, selectors: [["app-layout-header"]], decls: 6, vars: 2, consts: [[1, "navbar", "navbar-light"], [1, "container"], ["routerLink", "/", 1, "navbar-brand"], ["class", "nav navbar-nav pull-xs-right", 4, "appShowAuthed"], [1, "nav", "navbar-nav", "pull-xs-right"], [1, "nav-item"], ["routerLink", "/", 1, "nav-link"], ["routerLink", "/login", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/register", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/editor", "routerLinkActive", "active", 1, "nav-link"], [1, "ion-compose"], ["routerLink", "/settings", "routerLinkActive", "active", 1, "nav-link"], [1, "ion-gear-a"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], ["class", "user-pic", "alt", "user image", 3, "src", 4, "ngIf"], ["alt", "user image", 1, "user-pic", 3, "src"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "conduit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](4, HeaderComponent_ul_4_Template, 10, 0, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](5, HeaderComponent_ul_5_Template, 16, 7, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("appShowAuthed", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("appShowAuthed", true);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _show_authed_directive__WEBPACK_IMPORTED_MODULE_1__.ShowAuthedDirective, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 7633:
/*!****************************************!*\
  !*** ./src/app/shared/layout/index.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": function() { return /* reexport safe */ _footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent; },
/* harmony export */   "HeaderComponent": function() { return /* reexport safe */ _header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent; }
/* harmony export */ });
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component */ 8498);
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component */ 9596);




/***/ }),

/***/ 6860:
/*!*************************************************!*\
  !*** ./src/app/shared/list-errors.component.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListErrorsComponent": function() { return /* binding */ ListErrorsComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);


function ListErrorsComponent_ul_0_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const error_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", error_r2, " ");
} }
function ListErrorsComponent_ul_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ListErrorsComponent_ul_0_li_1_Template, 2, 1, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r0.errorList)("ngForTrackBy", ctx_r0.trackByFn);
} }
class ListErrorsComponent {
    constructor() {
        this.formattedErrors = [];
    }
    set errors(errorList) {
        this.formattedErrors = Object.keys(errorList.errors || {})
            .map(key => `${key} ${errorList.errors[key]}`);
    }
    get errorList() { return this.formattedErrors; }
    trackByFn(index, item) {
        return index;
    }
}
ListErrorsComponent.??fac = function ListErrorsComponent_Factory(t) { return new (t || ListErrorsComponent)(); };
ListErrorsComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ListErrorsComponent, selectors: [["app-list-errors"]], inputs: { errors: "errors" }, decls: 1, vars: 1, consts: [["class", "error-messages", 4, "ngIf"], [1, "error-messages"], [4, "ngFor", "ngForOf", "ngForTrackBy"]], template: function ListErrorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, ListErrorsComponent_ul_0_Template, 2, 2, "ul", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.errorList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": function() { return /* binding */ SharedModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _article_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article-helpers */ 6579);
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons */ 2341);
/* harmony import */ var _list_errors_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-errors.component */ 6860);
/* harmony import */ var _show_authed_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-authed.directive */ 893);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);









class SharedModule {
}
SharedModule.??fac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({ type: SharedModule });
SharedModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule
        ], _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](SharedModule, { declarations: [_article_helpers__WEBPACK_IMPORTED_MODULE_0__.ArticleListComponent,
        _article_helpers__WEBPACK_IMPORTED_MODULE_0__.ArticleMetaComponent,
        _article_helpers__WEBPACK_IMPORTED_MODULE_0__.ArticlePreviewComponent,
        _buttons__WEBPACK_IMPORTED_MODULE_1__.FavoriteButtonComponent,
        _buttons__WEBPACK_IMPORTED_MODULE_1__.FollowButtonComponent,
        _list_errors_component__WEBPACK_IMPORTED_MODULE_2__.ListErrorsComponent,
        _show_authed_directive__WEBPACK_IMPORTED_MODULE_3__.ShowAuthedDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule], exports: [_article_helpers__WEBPACK_IMPORTED_MODULE_0__.ArticleListComponent,
        _article_helpers__WEBPACK_IMPORTED_MODULE_0__.ArticleMetaComponent,
        _article_helpers__WEBPACK_IMPORTED_MODULE_0__.ArticlePreviewComponent,
        _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _buttons__WEBPACK_IMPORTED_MODULE_1__.FavoriteButtonComponent,
        _buttons__WEBPACK_IMPORTED_MODULE_1__.FollowButtonComponent,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
        _list_errors_component__WEBPACK_IMPORTED_MODULE_2__.ListErrorsComponent,
        _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule,
        _show_authed_directive__WEBPACK_IMPORTED_MODULE_3__.ShowAuthedDirective] }); })();


/***/ }),

/***/ 893:
/*!*************************************************!*\
  !*** ./src/app/shared/show-authed.directive.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowAuthedDirective": function() { return /* binding */ ShowAuthedDirective; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ 3825);


class ShowAuthedDirective {
    constructor(templateRef, userService, viewContainer) {
        this.templateRef = templateRef;
        this.userService = userService;
        this.viewContainer = viewContainer;
    }
    ngOnInit() {
        this.userService.isAuthenticated.subscribe((isAuthenticated) => {
            if (isAuthenticated && this.condition || !isAuthenticated && !this.condition) {
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
            else {
                this.viewContainer.clear();
            }
        });
    }
    set appShowAuthed(condition) {
        this.condition = condition;
    }
}
ShowAuthedDirective.??fac = function ShowAuthedDirective_Factory(t) { return new (t || ShowAuthedDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef)); };
ShowAuthedDirective.??dir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineDirective"]({ type: ShowAuthedDirective, selectors: [["", "appShowAuthed", ""]], inputs: { appShowAuthed: "appShowAuthed" } });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
const environment = {
    production: false,
    api_url: 'localhost:3000/api'
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
const bootstrapPromise = _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);
// Logging bootstrap information
bootstrapPromise.then(success => console.log(`Bootstrap success`))
    .catch(err => console.error(err));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(4431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map