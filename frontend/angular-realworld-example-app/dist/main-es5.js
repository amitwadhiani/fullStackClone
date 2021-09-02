(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkang2_conduit"] = self["webpackChunkang2_conduit"] || []).push([["main"], {
    /***/
    8255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 8255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var ngx_quicklink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-quicklink */
      5530);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var routes = [{
        path: 'settings',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_settings_settings_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./settings/settings.module */
          7075)).then(function (m) {
            return m.SettingsModule;
          });
        }
      }, {
        path: 'profile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./profile/profile.module */
          4523)).then(function (m) {
            return m.ProfileModule;
          });
        }
      }, {
        path: 'editor',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_editor_editor_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./editor/editor.module */
          3164)).then(function (m) {
            return m.EditorModule;
          });
        }
      }, {
        path: 'article',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_article_article_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./article/article.module */
          5745)).then(function (m) {
            return m.ArticleModule;
          });
        }
      }];

      var _AppRoutingModule = function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      };

      _AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[ngx_quicklink__WEBPACK_IMPORTED_MODULE_1__.QuicklinkModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
          // preload all modules; optionally we could
          // implement a custom preloading strategy for just some
          // of the modules (PRs welcome 😉)
          preloadingStrategy: ngx_quicklink__WEBPACK_IMPORTED_MODULE_1__.QuicklinkStrategy,
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [ngx_quicklink__WEBPACK_IMPORTED_MODULE_1__.QuicklinkModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    5041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./core */
      3825);
      /* harmony import */


      var _shared_layout_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./shared/layout/header.component */
      9596);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _shared_layout_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./shared/layout/footer.component */
      8498);

      var _AppComponent = /*#__PURE__*/function () {
        function _AppComponent(userService) {
          _classCallCheck(this, _AppComponent);

          this.userService = userService;
        }

        _createClass(_AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.userService.populate();
          }
        }]);

        return _AppComponent;
      }();

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.UserService));
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 3,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-layout-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-layout-footer");
          }
        },
        directives: [_shared_layout_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _shared_layout_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent],
        encapsulation: 2,
        changeDetection: 0
      });
      /***/
    },

    /***/
    6747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app.component */
      5041);
      /* harmony import */


      var _auth_auth_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auth/auth.module */
      1674);
      /* harmony import */


      var _home_home_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home/home.module */
      3467);
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./shared */
      1679);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-routing.module */
      158);
      /* harmony import */


      var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./core/core.module */
      294);
      /* harmony import */


      var _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/service-worker */
      2249);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../environments/environment */
      2340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _core_core_module__WEBPACK_IMPORTED_MODULE_5__.CoreModule, _shared__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _home_home_module__WEBPACK_IMPORTED_MODULE_2__.HomeModule, _auth_auth_module__WEBPACK_IMPORTED_MODULE_1__.AuthModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_4__.AppRoutingModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__.ServiceWorkerModule.register('ngsw-worker.js', {
          enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.production
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _shared__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _shared__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _core_core_module__WEBPACK_IMPORTED_MODULE_5__.CoreModule, _shared__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _home_home_module__WEBPACK_IMPORTED_MODULE_2__.HomeModule, _auth_auth_module__WEBPACK_IMPORTED_MODULE_1__.AuthModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_4__.AppRoutingModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__.ServiceWorkerModule]
        });
      })();
      /***/

    },

    /***/
    431:
    /*!*********************************************!*\
      !*** ./src/app/auth/auth-routing.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthRoutingModule": function AuthRoutingModule() {
          return (
            /* binding */
            _AuthRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _auth_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth.component */
      980);
      /* harmony import */


      var _no_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./no-auth-guard.service */
      6047);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var routes = [{
        path: 'login',
        component: _auth_component__WEBPACK_IMPORTED_MODULE_0__.AuthComponent,
        canActivate: [_no_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__.NoAuthGuard]
      }, {
        path: 'register',
        component: _auth_component__WEBPACK_IMPORTED_MODULE_0__.AuthComponent,
        canActivate: [_no_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__.NoAuthGuard]
      }];

      var _AuthRoutingModule = function _AuthRoutingModule() {
        _classCallCheck(this, _AuthRoutingModule);
      };

      _AuthRoutingModule.ɵfac = function AuthRoutingModule_Factory(t) {
        return new (t || _AuthRoutingModule)();
      };

      _AuthRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _AuthRoutingModule
      });
      _AuthRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_AuthRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    980:
    /*!****************************************!*\
      !*** ./src/app/auth/auth.component.ts ***!
      \****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthComponent": function AuthComponent() {
          return (
            /* binding */
            _AuthComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../core */
      3825);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _shared_list_errors_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../shared/list-errors.component */
      6860);

      var _c0 = function _c0() {
        return ["/login"];
      };

      function AuthComponent_a_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Have an account?");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
        }
      }

      var _c1 = function _c1() {
        return ["/register"];
      };

      function AuthComponent_a_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Need an account?");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c1));
        }
      }

      function AuthComponent_input_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "input", 15);
        }
      }

      var _AuthComponent = /*#__PURE__*/function () {
        function _AuthComponent(route, router, userService, fb, cd) {
          _classCallCheck(this, _AuthComponent);

          this.route = route;
          this.router = router;
          this.userService = userService;
          this.fb = fb;
          this.cd = cd;
          this.authType = '';
          this.title = '';
          this.errors = {
            errors: {}
          };
          this.isSubmitting = false; // use FormBuilder to create a form group

          this.authForm = this.fb.group({
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
          });
        }

        _createClass(_AuthComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.url.subscribe(function (data) {
              // Get the last piece of the URL (it's either 'login' or 'register')
              _this.authType = data[data.length - 1].path; // Set a title for the page accordingly

              _this.title = _this.authType === 'login' ? 'Sign in' : 'Sign up'; // add form control for username if this is the register page

              if (_this.authType === 'register') {
                _this.authForm.addControl('username', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl());
              }

              _this.cd.markForCheck();
            });
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            var _this2 = this;

            this.isSubmitting = true;
            this.errors = {
              errors: {}
            };
            var credentials = this.authForm.value;
            this.userService.attemptAuth(this.authType, credentials).subscribe(function (data) {
              return _this2.router.navigateByUrl('/');
            }, function (err) {
              _this2.errors = err;
              _this2.isSubmitting = false;

              _this2.cd.markForCheck();
            });
          }
        }]);

        return _AuthComponent;
      }();

      _AuthComponent.ɵfac = function AuthComponent_Factory(t) {
        return new (t || _AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
      };

      _AuthComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _AuthComponent,
        selectors: [["app-auth-page"]],
        decls: 20,
        vars: 9,
        consts: [[1, "auth-page"], [1, "container", "page"], [1, "row"], [1, "col-md-6", "offset-md-3", "col-xs-12"], [1, "text-xs-center"], [3, "routerLink", 4, "ngIf"], [3, "errors"], [3, "formGroup", "ngSubmit"], [3, "disabled"], [1, "form-group"], ["formControlName", "username", "placeholder", "Username", "class", "form-control form-control-lg", "type", "text", 4, "ngIf"], ["formControlName", "email", "placeholder", "Email", "type", "text", 1, "form-control", "form-control-lg"], ["formControlName", "password", "placeholder", "Password", "type", "password", 1, "form-control", "form-control-lg"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "pull-xs-right", 3, "disabled"], [3, "routerLink"], ["formControlName", "username", "placeholder", "Username", "type", "text", 1, "form-control", "form-control-lg"]],
        template: function AuthComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h1", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AuthComponent_a_7_Template, 2, 2, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AuthComponent_a_8_Template, 2, 2, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "app-list-errors", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AuthComponent_Template_form_ngSubmit_10_listener() {
              return ctx.submitForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "fieldset", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "fieldset", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, AuthComponent_input_13_Template, 1, 0, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "fieldset", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "fieldset", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.authType == "register");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.authType == "login");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("errors", ctx.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.authForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.isSubmitting);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.authType == "register");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.authForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_list_errors_component__WEBPACK_IMPORTED_MODULE_1__.ListErrorsComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref],
        encapsulation: 2,
        changeDetection: 0
      });
      /***/
    },

    /***/
    1674:
    /*!*************************************!*\
      !*** ./src/app/auth/auth.module.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthModule": function AuthModule() {
          return (
            /* binding */
            _AuthModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _auth_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth.component */
      980);
      /* harmony import */


      var _no_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./no-auth-guard.service */
      6047);
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared */
      1679);
      /* harmony import */


      var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./auth-routing.module */
      431);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _AuthModule = function _AuthModule() {
        _classCallCheck(this, _AuthModule);
      };

      _AuthModule.ɵfac = function AuthModule_Factory(t) {
        return new (t || _AuthModule)();
      };

      _AuthModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _AuthModule
      });
      _AuthModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        providers: [_no_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__.NoAuthGuard],
        imports: [[_shared__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__.AuthRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_AuthModule, {
          declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_0__.AuthComponent],
          imports: [_shared__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__.AuthRoutingModule]
        });
      })();
      /***/

    },

    /***/
    6047:
    /*!***********************************************!*\
      !*** ./src/app/auth/no-auth-guard.service.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NoAuthGuard": function NoAuthGuard() {
          return (
            /* binding */
            _NoAuthGuard
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      4294);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      5207);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../core */
      3825);

      var _NoAuthGuard = /*#__PURE__*/function () {
        function _NoAuthGuard(router, userService) {
          _classCallCheck(this, _NoAuthGuard);

          this.router = router;
          this.userService = userService;
        }

        _createClass(_NoAuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            return this.userService.isAuthenticated.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (isAuth) {
              return !isAuth;
            }));
          }
        }]);

        return _NoAuthGuard;
      }();

      _NoAuthGuard.ɵfac = function NoAuthGuard_Factory(t) {
        return new (t || _NoAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core__WEBPACK_IMPORTED_MODULE_0__.UserService));
      };

      _NoAuthGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: _NoAuthGuard,
        factory: _NoAuthGuard.ɵfac
      });
      /***/
    },

    /***/
    294:
    /*!*************************************!*\
      !*** ./src/app/core/core.module.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CoreModule": function CoreModule() {
          return (
            /* binding */
            _CoreModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      1841);
      /* harmony import */


      var _interceptors_http_token_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./interceptors/http.token.interceptor */
      6643);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _CoreModule = function _CoreModule() {
        _classCallCheck(this, _CoreModule);
      };

      _CoreModule.ɵfac = function CoreModule_Factory(t) {
        return new (t || _CoreModule)();
      };

      _CoreModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _CoreModule
      });
      _CoreModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HTTP_INTERCEPTORS,
          useClass: _interceptors_http_token_interceptor__WEBPACK_IMPORTED_MODULE_0__.HttpTokenInterceptor,
          multi: true
        }],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_CoreModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]
        });
      })();
      /***/

    },

    /***/
    3825:
    /*!*******************************!*\
      !*** ./src/app/core/index.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CoreModule": function CoreModule() {
          return (
            /* reexport safe */
            _core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule
          );
        },

        /* harmony export */
        "ApiService": function ApiService() {
          return (
            /* reexport safe */
            _services__WEBPACK_IMPORTED_MODULE_1__.ApiService
          );
        },

        /* harmony export */
        "ArticlesService": function ArticlesService() {
          return (
            /* reexport safe */
            _services__WEBPACK_IMPORTED_MODULE_1__.ArticlesService
          );
        },

        /* harmony export */
        "AuthGuard": function AuthGuard() {
          return (
            /* reexport safe */
            _services__WEBPACK_IMPORTED_MODULE_1__.AuthGuard
          );
        },

        /* harmony export */
        "CommentsService": function CommentsService() {
          return (
            /* reexport safe */
            _services__WEBPACK_IMPORTED_MODULE_1__.CommentsService
          );
        },

        /* harmony export */
        "JwtService": function JwtService() {
          return (
            /* reexport safe */
            _services__WEBPACK_IMPORTED_MODULE_1__.JwtService
          );
        },

        /* harmony export */
        "ProfilesService": function ProfilesService() {
          return (
            /* reexport safe */
            _services__WEBPACK_IMPORTED_MODULE_1__.ProfilesService
          );
        },

        /* harmony export */
        "TagsService": function TagsService() {
          return (
            /* reexport safe */
            _services__WEBPACK_IMPORTED_MODULE_1__.TagsService
          );
        },

        /* harmony export */
        "UserService": function UserService() {
          return (
            /* reexport safe */
            _services__WEBPACK_IMPORTED_MODULE_1__.UserService
          );
        },

        /* harmony export */
        "HttpTokenInterceptor": function HttpTokenInterceptor() {
          return (
            /* reexport safe */
            _interceptors__WEBPACK_IMPORTED_MODULE_3__.HttpTokenInterceptor
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./core.module */
      294);
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./services */
      8138);
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./models */
      3902);
      /* harmony import */


      var _interceptors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./interceptors */
      2756);
      /***/

    },

    /***/
    6643:
    /*!*************************************************************!*\
      !*** ./src/app/core/interceptors/http.token.interceptor.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HttpTokenInterceptor": function HttpTokenInterceptor() {
          return (
            /* binding */
            _HttpTokenInterceptor
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../services */
      8138);

      var _HttpTokenInterceptor = /*#__PURE__*/function () {
        function _HttpTokenInterceptor(jwtService) {
          _classCallCheck(this, _HttpTokenInterceptor);

          this.jwtService = jwtService;
        }

        _createClass(_HttpTokenInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var headersConfig = {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            };
            var token = this.jwtService.getToken();

            if (token) {
              headersConfig['Authorization'] = "Token ".concat(token);
            }

            var request = req.clone({
              setHeaders: headersConfig
            });
            return next.handle(request);
          }
        }]);

        return _HttpTokenInterceptor;
      }();

      _HttpTokenInterceptor.ɵfac = function HttpTokenInterceptor_Factory(t) {
        return new (t || _HttpTokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_0__.JwtService));
      };

      _HttpTokenInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _HttpTokenInterceptor,
        factory: _HttpTokenInterceptor.ɵfac
      });
      /***/
    },

    /***/
    2756:
    /*!********************************************!*\
      !*** ./src/app/core/interceptors/index.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HttpTokenInterceptor": function HttpTokenInterceptor() {
          return (
            /* reexport safe */
            _http_token_interceptor__WEBPACK_IMPORTED_MODULE_0__.HttpTokenInterceptor
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _http_token_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./http.token.interceptor */
      6643);
      /***/

    },

    /***/
    137:
    /*!**********************************************************!*\
      !*** ./src/app/core/models/article-list-config.model.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    7247:
    /*!**********************************************!*\
      !*** ./src/app/core/models/article.model.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    8230:
    /*!**********************************************!*\
      !*** ./src/app/core/models/comment.model.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    1046:
    /*!*********************************************!*\
      !*** ./src/app/core/models/errors.model.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    3902:
    /*!**************************************!*\
      !*** ./src/app/core/models/index.ts ***!
      \**************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _article_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./article.model */
      7247);
      /* harmony import */


      var _article_list_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./article-list-config.model */
      137);
      /* harmony import */


      var _comment_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./comment.model */
      8230);
      /* harmony import */


      var _errors_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./errors.model */
      1046);
      /* harmony import */


      var _profile_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./profile.model */
      2191);
      /* harmony import */


      var _user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user.model */
      9249);
      /***/

    },

    /***/
    2191:
    /*!**********************************************!*\
      !*** ./src/app/core/models/profile.model.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    9249:
    /*!*******************************************!*\
      !*** ./src/app/core/models/user.model.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    5384:
    /*!**********************************************!*\
      !*** ./src/app/core/services/api.service.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ApiService": function ApiService() {
          return (
            /* binding */
            _ApiService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../environments/environment */
      2340);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      1841);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      8567);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      5894);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _ApiService = /*#__PURE__*/function () {
        function _ApiService(http) {
          _classCallCheck(this, _ApiService);

          this.http = http;
        }

        _createClass(_ApiService, [{
          key: "formatErrors",
          value: function formatErrors(error) {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(error.error);
          }
        }, {
          key: "get",
          value: function get(path) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_url).concat(path), {
              params: params
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.formatErrors));
          }
        }, {
          key: "put",
          value: function put(path) {
            var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_url).concat(path), JSON.stringify(body)).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.formatErrors));
          }
        }, {
          key: "post",
          value: function post(path) {
            var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_url).concat(path), JSON.stringify(body)).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.formatErrors));
          }
        }, {
          key: "delete",
          value: function _delete(path) {
            return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api_url).concat(path)).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.formatErrors));
          }
        }]);

        return _ApiService;
      }();

      _ApiService.ɵfac = function ApiService_Factory(t) {
        return new (t || _ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _ApiService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _ApiService,
        factory: _ApiService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    9921:
    /*!***************************************************!*\
      !*** ./src/app/core/services/articles.service.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ArticlesService": function ArticlesService() {
          return (
            /* binding */
            _ArticlesService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      1841);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      5207);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./api.service */
      5384);

      var _ArticlesService = /*#__PURE__*/function () {
        function _ArticlesService(apiService) {
          _classCallCheck(this, _ArticlesService);

          this.apiService = apiService;
        }

        _createClass(_ArticlesService, [{
          key: "query",
          value: function query(config) {
            // Convert any filters over to Angular's URLSearchParams
            var params = {};
            Object.keys(config.filters).forEach(function (key) {
              params[key] = config.filters[key];
            });
            return this.apiService.get('/articles' + (config.type === 'feed' ? '/feed' : ''), new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams({
              fromObject: params
            }));
          }
        }, {
          key: "get",
          value: function get(slug) {
            return this.apiService.get('/articles/' + slug).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (data) {
              return data.article;
            }));
          }
        }, {
          key: "destroy",
          value: function destroy(slug) {
            return this.apiService["delete"]('/articles/' + slug);
          }
        }, {
          key: "save",
          value: function save(article) {
            // If we're updating an existing article
            if (article.slug) {
              return this.apiService.put('/articles/' + article.slug, {
                article: article
              }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (data) {
                return data.article;
              })); // Otherwise, create a new article
            } else {
              return this.apiService.post('/articles/', {
                article: article
              }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (data) {
                return data.article;
              }));
            }
          }
        }, {
          key: "favorite",
          value: function favorite(slug) {
            return this.apiService.post('/articles/' + slug + '/favorite');
          }
        }, {
          key: "unfavorite",
          value: function unfavorite(slug) {
            return this.apiService["delete"]('/articles/' + slug + '/favorite');
          }
        }]);

        return _ArticlesService;
      }();

      _ArticlesService.ɵfac = function ArticlesService_Factory(t) {
        return new (t || _ArticlesService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService));
      };

      _ArticlesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: _ArticlesService,
        factory: _ArticlesService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    970:
    /*!*****************************************************!*\
      !*** ./src/app/core/services/auth-guard.service.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthGuard": function AuthGuard() {
          return (
            /* binding */
            _AuthGuard
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      4294);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./user.service */
      8386);

      var _AuthGuard = /*#__PURE__*/function () {
        function _AuthGuard(router, userService) {
          _classCallCheck(this, _AuthGuard);

          this.router = router;
          this.userService = userService;
        }

        _createClass(_AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            return this.userService.isAuthenticated.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1));
          }
        }]);

        return _AuthGuard;
      }();

      _AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || _AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService));
      };

      _AuthGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _AuthGuard,
        factory: _AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    378:
    /*!***************************************************!*\
      !*** ./src/app/core/services/comments.service.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CommentsService": function CommentsService() {
          return (
            /* binding */
            _CommentsService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      5207);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./api.service */
      5384);

      var _CommentsService = /*#__PURE__*/function () {
        function _CommentsService(apiService) {
          _classCallCheck(this, _CommentsService);

          this.apiService = apiService;
        }

        _createClass(_CommentsService, [{
          key: "add",
          value: function add(slug, payload) {
            return this.apiService.post("/articles/".concat(slug, "/comments"), {
              comment: {
                body: payload
              }
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(function (data) {
              return data.comment;
            }));
          }
        }, {
          key: "getAll",
          value: function getAll(slug) {
            return this.apiService.get("/articles/".concat(slug, "/comments")).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(function (data) {
              return data.comments;
            }));
          }
        }, {
          key: "destroy",
          value: function destroy(commentId, articleSlug) {
            return this.apiService["delete"]("/articles/".concat(articleSlug, "/comments/").concat(commentId));
          }
        }]);

        return _CommentsService;
      }();

      _CommentsService.ɵfac = function CommentsService_Factory(t) {
        return new (t || _CommentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService));
      };

      _CommentsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _CommentsService,
        factory: _CommentsService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    8138:
    /*!****************************************!*\
      !*** ./src/app/core/services/index.ts ***!
      \****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ApiService": function ApiService() {
          return (
            /* reexport safe */
            _api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService
          );
        },

        /* harmony export */
        "ArticlesService": function ArticlesService() {
          return (
            /* reexport safe */
            _articles_service__WEBPACK_IMPORTED_MODULE_1__.ArticlesService
          );
        },

        /* harmony export */
        "AuthGuard": function AuthGuard() {
          return (
            /* reexport safe */
            _auth_guard_service__WEBPACK_IMPORTED_MODULE_2__.AuthGuard
          );
        },

        /* harmony export */
        "CommentsService": function CommentsService() {
          return (
            /* reexport safe */
            _comments_service__WEBPACK_IMPORTED_MODULE_3__.CommentsService
          );
        },

        /* harmony export */
        "JwtService": function JwtService() {
          return (
            /* reexport safe */
            _jwt_service__WEBPACK_IMPORTED_MODULE_4__.JwtService
          );
        },

        /* harmony export */
        "ProfilesService": function ProfilesService() {
          return (
            /* reexport safe */
            _profiles_service__WEBPACK_IMPORTED_MODULE_5__.ProfilesService
          );
        },

        /* harmony export */
        "TagsService": function TagsService() {
          return (
            /* reexport safe */
            _tags_service__WEBPACK_IMPORTED_MODULE_6__.TagsService
          );
        },

        /* harmony export */
        "UserService": function UserService() {
          return (
            /* reexport safe */
            _user_service__WEBPACK_IMPORTED_MODULE_7__.UserService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./api.service */
      5384);
      /* harmony import */


      var _articles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./articles.service */
      9921);
      /* harmony import */


      var _auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth-guard.service */
      970);
      /* harmony import */


      var _comments_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./comments.service */
      378);
      /* harmony import */


      var _jwt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./jwt.service */
      7493);
      /* harmony import */


      var _profiles_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profiles.service */
      7457);
      /* harmony import */


      var _tags_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tags.service */
      3171);
      /* harmony import */


      var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./user.service */
      8386);
      /***/

    },

    /***/
    7493:
    /*!**********************************************!*\
      !*** ./src/app/core/services/jwt.service.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "JwtService": function JwtService() {
          return (
            /* binding */
            _JwtService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _JwtService = /*#__PURE__*/function () {
        function _JwtService() {
          _classCallCheck(this, _JwtService);
        }

        _createClass(_JwtService, [{
          key: "getToken",
          value: function getToken() {
            return window.localStorage['jwtToken'];
          }
        }, {
          key: "saveToken",
          value: function saveToken(token) {
            window.localStorage['jwtToken'] = token;
          }
        }, {
          key: "destroyToken",
          value: function destroyToken() {
            window.localStorage.removeItem('jwtToken');
          }
        }]);

        return _JwtService;
      }();

      _JwtService.ɵfac = function JwtService_Factory(t) {
        return new (t || _JwtService)();
      };

      _JwtService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _JwtService,
        factory: _JwtService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    7457:
    /*!***************************************************!*\
      !*** ./src/app/core/services/profiles.service.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfilesService": function ProfilesService() {
          return (
            /* binding */
            _ProfilesService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      5207);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./api.service */
      5384);

      var _ProfilesService = /*#__PURE__*/function () {
        function _ProfilesService(apiService) {
          _classCallCheck(this, _ProfilesService);

          this.apiService = apiService;
        }

        _createClass(_ProfilesService, [{
          key: "get",
          value: function get(username) {
            return this.apiService.get('/profiles/' + username).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(function (data) {
              return data.profile;
            }));
          }
        }, {
          key: "follow",
          value: function follow(username) {
            return this.apiService.post('/profiles/' + username + '/follow');
          }
        }, {
          key: "unfollow",
          value: function unfollow(username) {
            return this.apiService["delete"]('/profiles/' + username + '/follow');
          }
        }]);

        return _ProfilesService;
      }();

      _ProfilesService.ɵfac = function ProfilesService_Factory(t) {
        return new (t || _ProfilesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService));
      };

      _ProfilesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _ProfilesService,
        factory: _ProfilesService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    3171:
    /*!***********************************************!*\
      !*** ./src/app/core/services/tags.service.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TagsService": function TagsService() {
          return (
            /* binding */
            _TagsService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      5207);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./api.service */
      5384);

      var _TagsService = /*#__PURE__*/function () {
        function _TagsService(apiService) {
          _classCallCheck(this, _TagsService);

          this.apiService = apiService;
        }

        _createClass(_TagsService, [{
          key: "getAll",
          value: function getAll() {
            return this.apiService.get('/tags').pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(function (data) {
              return data.tags;
            }));
          }
        }]);

        return _TagsService;
      }();

      _TagsService.ɵfac = function TagsService_Factory(t) {
        return new (t || _TagsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService));
      };

      _TagsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _TagsService,
        factory: _TagsService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    8386:
    /*!***********************************************!*\
      !*** ./src/app/core/services/user.service.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserService": function UserService() {
          return (
            /* binding */
            _UserService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      5094);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      9681);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      2687);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      5207);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./api.service */
      5384);
      /* harmony import */


      var _jwt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./jwt.service */
      7493);

      var _UserService = /*#__PURE__*/function () {
        function _UserService(apiService, jwtService) {
          _classCallCheck(this, _UserService);

          this.apiService = apiService;
          this.jwtService = jwtService;
          this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({});
          this.currentUser = this.currentUserSubject.asObservable().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.distinctUntilChanged)());
          this.isAuthenticatedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.ReplaySubject(1);
          this.isAuthenticated = this.isAuthenticatedSubject.asObservable();
        } // Verify JWT in localstorage with server & load user's info.
        // This runs once on application startup.


        _createClass(_UserService, [{
          key: "populate",
          value: function populate() {
            var _this3 = this;

            // If JWT detected, attempt to get & store user's info
            if (this.jwtService.getToken()) {
              this.apiService.get('/user').subscribe(function (data) {
                return _this3.setAuth(data.user);
              }, function (err) {
                return _this3.purgeAuth();
              });
            } else {
              // Remove any potential remnants of previous auth states
              this.purgeAuth();
            }
          }
        }, {
          key: "setAuth",
          value: function setAuth(user) {
            // Save JWT sent from server in localstorage
            this.jwtService.saveToken(user.token); // Set current user data into observable

            this.currentUserSubject.next(user); // Set isAuthenticated to true

            this.isAuthenticatedSubject.next(true);
          }
        }, {
          key: "purgeAuth",
          value: function purgeAuth() {
            // Remove JWT from localstorage
            this.jwtService.destroyToken(); // Set current user to an empty object

            this.currentUserSubject.next({}); // Set auth status to false

            this.isAuthenticatedSubject.next(false);
          }
        }, {
          key: "attemptAuth",
          value: function attemptAuth(type, credentials) {
            var _this4 = this;

            var route = type === 'login' ? '/login' : '';
            return this.apiService.post("/users".concat(route), {
              user: credentials
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(function (data) {
              _this4.setAuth(data.user);

              return data;
            }));
          }
        }, {
          key: "getCurrentUser",
          value: function getCurrentUser() {
            return this.currentUserSubject.value;
          } // Update the user on the server (email, pass, etc)

        }, {
          key: "update",
          value: function update(user) {
            var _this5 = this;

            return this.apiService.put('/user', {
              user: user
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(function (data) {
              // Update the currentUser observable
              _this5.currentUserSubject.next(data.user);

              return data.user;
            }));
          }
        }]);

        return _UserService;
      }();

      _UserService.ɵfac = function UserService_Factory(t) {
        return new (t || _UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_jwt_service__WEBPACK_IMPORTED_MODULE_1__.JwtService));
      };

      _UserService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
        token: _UserService,
        factory: _UserService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    2160:
    /*!****************************************************!*\
      !*** ./src/app/home/home-auth-resolver.service.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeAuthResolver": function HomeAuthResolver() {
          return (
            /* binding */
            _HomeAuthResolver
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      4294);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../core */
      3825);

      var _HomeAuthResolver = /*#__PURE__*/function () {
        function _HomeAuthResolver(router, userService) {
          _classCallCheck(this, _HomeAuthResolver);

          this.router = router;
          this.userService = userService;
        }

        _createClass(_HomeAuthResolver, [{
          key: "resolve",
          value: function resolve(route, state) {
            return this.userService.isAuthenticated.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1));
          }
        }]);

        return _HomeAuthResolver;
      }();

      _HomeAuthResolver.ɵfac = function HomeAuthResolver_Factory(t) {
        return new (t || _HomeAuthResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core__WEBPACK_IMPORTED_MODULE_0__.UserService));
      };

      _HomeAuthResolver.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _HomeAuthResolver,
        factory: _HomeAuthResolver.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    2003:
    /*!*********************************************!*\
      !*** ./src/app/home/home-routing.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeRoutingModule": function HomeRoutingModule() {
          return (
            /* binding */
            _HomeRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home.component */
      5067);
      /* harmony import */


      var _home_auth_resolver_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home-auth-resolver.service */
      2160);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var routes = [{
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
        resolve: {
          isAuthenticated: _home_auth_resolver_service__WEBPACK_IMPORTED_MODULE_1__.HomeAuthResolver
        }
      }];

      var _HomeRoutingModule = function _HomeRoutingModule() {
        _classCallCheck(this, _HomeRoutingModule);
      };

      _HomeRoutingModule.ɵfac = function HomeRoutingModule_Factory(t) {
        return new (t || _HomeRoutingModule)();
      };

      _HomeRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _HomeRoutingModule
      });
      _HomeRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_HomeRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    5067:
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeComponent": function HomeComponent() {
          return (
            /* binding */
            _HomeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../core */
      3825);
      /* harmony import */


      var _shared_show_authed_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../shared/show-authed.directive */
      893);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _shared_article_helpers_article_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/article-helpers/article-list.component */
      870);

      function HomeComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h1", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "conduit");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "A place to share your ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Angular");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " knowledge.");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function HomeComponent_a_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_a_23_Template_a_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);

            var tag_r2 = restoredCtx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r3.setListTo("all", {
              tag: tag_r2
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tag_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", tag_r2, " ");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "active": a0
        };
      };

      var _HomeComponent = /*#__PURE__*/function () {
        function _HomeComponent(router, tagsService, userService, cd) {
          _classCallCheck(this, _HomeComponent);

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

        _createClass(_HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.userService.isAuthenticated.subscribe(function (authenticated) {
              _this6.isAuthenticated = authenticated; // set the article list accordingly

              if (authenticated) {
                _this6.setListTo('feed');
              } else {
                _this6.setListTo('all');
              }

              _this6.cd.markForCheck();
            });
            this.tagsService.getAll().subscribe(function (tags) {
              _this6.tags = tags;
              _this6.tagsLoaded = true;

              _this6.cd.markForCheck();
            });
          }
        }, {
          key: "trackByFn",
          value: function trackByFn(index, item) {
            return index;
          }
        }, {
          key: "setListTo",
          value: function setListTo() {
            var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var filters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            // If feed is requested but user is not authenticated, redirect to login
            if (type === 'feed' && !this.isAuthenticated) {
              this.router.navigateByUrl('/login');
              return;
            } // Otherwise, set the list object


            this.listConfig = {
              type: type,
              filters: filters
            };
          }
        }]);

        return _HomeComponent;
      }();

      _HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || _HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.TagsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef));
      };

      _HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _HomeComponent,
        selectors: [["app-home-page"]],
        decls: 28,
        vars: 15,
        consts: [[1, "home-page"], ["class", "banner", 4, "appShowAuthed"], [1, "container", "page"], [1, "row"], [1, "col-md-9"], [1, "feed-toggle"], [1, "nav", "nav-pills", "outline-active"], [1, "nav-item"], [1, "nav-link", 3, "ngClass", "click"], [1, "nav-item", 3, "hidden"], [1, "nav-link", "active"], [1, "ion-pound"], [3, "limit", "config"], [1, "col-md-3"], [1, "sidebar"], [1, "tag-list"], ["class", "tag-default tag-pill", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "hidden"], [1, "banner"], [1, "container"], [1, "logo-font"], [1, "tag-default", "tag-pill", 3, "click"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, HomeComponent_div_1_Template, 9, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_8_listener() {
              return ctx.setListTo("feed");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Your Feed ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_11_listener() {
              return ctx.setListTo("all");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Global Feed ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "app-article-list", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Popular Tags");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, HomeComponent_a_23_Template, 2, 1, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, " Loading tags... ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " No tags are here... yet. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("appShowAuthed", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](11, _c0, ctx.listConfig.type === "feed"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](13, _c0, ctx.listConfig.type === "all" && !ctx.listConfig.filters.tag));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx.listConfig.filters.tag);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.listConfig.filters.tag, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("limit", 10)("config", ctx.listConfig);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.tags)("ngForTrackBy", ctx.trackByFn);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx.tagsLoaded);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx.tagsLoaded || ctx.tags.length > 0);
          }
        },
        directives: [_shared_show_authed_directive__WEBPACK_IMPORTED_MODULE_1__.ShowAuthedDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _shared_article_helpers_article_list_component__WEBPACK_IMPORTED_MODULE_2__.ArticleListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf],
        styles: [".nav-link[_ngcontent-%COMP%] {\r\n  cursor:pointer;\r\n}\r\n\r\n.tag-pill[_ngcontent-%COMP%]{\r\n  cursor:pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtbGluayB7XHJcbiAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuXHJcbi50YWctcGlsbHtcclxuICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG4iXX0= */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    3467:
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeModule": function HomeModule() {
          return (
            /* binding */
            _HomeModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home.component */
      5067);
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../shared */
      1679);
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home-routing.module */
      2003);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _HomeModule = function _HomeModule() {
        _classCallCheck(this, _HomeModule);
      };

      _HomeModule.ɵfac = function HomeModule_Factory(t) {
        return new (t || _HomeModule)();
      };

      _HomeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _HomeModule
      });
      _HomeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_shared__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_2__.HomeRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_HomeModule, {
          declarations: [_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent],
          imports: [_shared__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_2__.HomeRoutingModule]
        });
      })();
      /***/

    },

    /***/
    870:
    /*!******************************************************************!*\
      !*** ./src/app/shared/article-helpers/article-list.component.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ArticleListComponent": function ArticleListComponent() {
          return (
            /* binding */
            _ArticleListComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core */
      3825);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _article_preview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./article-preview.component */
      4028);

      function ArticleListComponent_app_article_preview_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-article-preview", 5);
        }

        if (rf & 2) {
          var article_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("article", article_r2);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "active": a0
        };
      };

      function ArticleListComponent_li_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ArticleListComponent_li_7_Template_li_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

            var pageNumber_r3 = restoredCtx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r4.setPageTo(pageNumber_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var pageNumber_r3 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, pageNumber_r3 === ctx_r1.currentPage));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](pageNumber_r3);
        }
      }

      var _ArticleListComponent = /*#__PURE__*/function () {
        function _ArticleListComponent(articlesService, cd) {
          _classCallCheck(this, _ArticleListComponent);

          this.articlesService = articlesService;
          this.cd = cd;
          this.loading = false;
          this.currentPage = 1;
          this.totalPages = [1];
        }

        _createClass(_ArticleListComponent, [{
          key: "config",
          set: function set(config) {
            if (config) {
              this.query = config;
              this.currentPage = 1;
              this.runQuery();
            }
          }
        }, {
          key: "setPageTo",
          value: function setPageTo(pageNumber) {
            this.currentPage = pageNumber;
            this.runQuery();
          }
        }, {
          key: "trackByFn",
          value: function trackByFn(index, item) {
            return index;
          }
        }, {
          key: "runQuery",
          value: function runQuery() {
            var _this7 = this;

            this.loading = true;
            this.results = []; // Create limit and offset filter (if necessary)

            if (this.limit) {
              this.query.filters.limit = this.limit;
              this.query.filters.offset = this.limit * (this.currentPage - 1);
            }

            this.articlesService.query(this.query).subscribe(function (data) {
              _this7.loading = false;
              _this7.results = data.articles; // Used from http://www.jstips.co/en/create-range-0...n-easily-using-one-line/

              _this7.totalPages = Array.from(new Array(Math.ceil(data.articlesCount / _this7.limit)), function (val, index) {
                return index + 1;
              });

              _this7.cd.markForCheck();
            });
          }
        }]);

        return _ArticleListComponent;
      }();

      _ArticleListComponent.ɵfac = function ArticleListComponent_Factory(t) {
        return new (t || _ArticleListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.ArticlesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
      };

      _ArticleListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _ArticleListComponent,
        selectors: [["app-article-list"]],
        inputs: {
          limit: "limit",
          config: "config"
        },
        decls: 8,
        vars: 7,
        consts: [[3, "article", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "app-article-preview", 3, "hidden"], [3, "hidden"], [1, "pagination"], ["class", "page-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "article"], [1, "page-item", 3, "ngClass", "click"], [1, "page-link"]],
        template: function ArticleListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ArticleListComponent_app_article_preview_0_Template, 1, 1, "app-article-preview", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Loading articles...\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " No articles are here... yet.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "nav", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ArticleListComponent_li_7_Template, 3, 4, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.results)("ngForTrackBy", ctx.trackByFn);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.loading || ctx.results.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.loading || ctx.totalPages.length <= 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.totalPages)("ngForTrackBy", ctx.trackByFn);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _article_preview_component__WEBPACK_IMPORTED_MODULE_1__.ArticlePreviewComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass],
        styles: [".page-link[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGUtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJhcnRpY2xlLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWxpbmsge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    540:
    /*!******************************************************************!*\
      !*** ./src/app/shared/article-helpers/article-meta.component.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ArticleMetaComponent": function ArticleMetaComponent() {
          return (
            /* binding */
            _ArticleMetaComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      8583);

      var _c0 = function _c0(a1) {
        return ["/profile", a1];
      };

      var _c1 = ["*"];

      var _ArticleMetaComponent = function _ArticleMetaComponent() {
        _classCallCheck(this, _ArticleMetaComponent);
      };

      _ArticleMetaComponent.ɵfac = function ArticleMetaComponent_Factory(t) {
        return new (t || _ArticleMetaComponent)();
      };

      _ArticleMetaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ArticleMetaComponent,
        selectors: [["app-article-meta"]],
        inputs: {
          article: "article"
        },
        ngContentSelectors: _c1,
        decls: 10,
        vars: 12,
        consts: [[1, "article-meta"], [3, "routerLink"], ["alt", "author image", 3, "src"], [1, "info"], [1, "author", 3, "routerLink"], [1, "date"]],
        template: function ArticleMetaComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.article.author.username));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.article.author.image || "https://static.productionready.io/images/smiley-cyrus.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.article.author.username));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.article.author.username, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 5, ctx.article.createdAt, "longDate"), " ");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe],
        encapsulation: 2,
        changeDetection: 0
      });
      /***/
    },

    /***/
    4028:
    /*!*********************************************************************!*\
      !*** ./src/app/shared/article-helpers/article-preview.component.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ArticlePreviewComponent": function ArticlePreviewComponent() {
          return (
            /* binding */
            _ArticlePreviewComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _article_meta_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./article-meta.component */
      540);
      /* harmony import */


      var _buttons_favorite_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../buttons/favorite-button.component */
      4929);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      8583);

      function ArticlePreviewComponent_li_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tag_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", tag_r1, " ");
        }
      }

      var _c0 = function _c0(a1) {
        return ["/article", a1];
      };

      var _ArticlePreviewComponent = /*#__PURE__*/function () {
        function _ArticlePreviewComponent() {
          _classCallCheck(this, _ArticlePreviewComponent);
        }

        _createClass(_ArticlePreviewComponent, [{
          key: "trackByFn",
          value: function trackByFn(index, item) {
            return index;
          }
        }, {
          key: "onToggleFavorite",
          value: function onToggleFavorite(favorited) {
            this.article['favorited'] = favorited;

            if (favorited) {
              this.article['favoritesCount']++;
            } else {
              this.article['favoritesCount']--;
            }
          }
        }]);

        return _ArticlePreviewComponent;
      }();

      _ArticlePreviewComponent.ɵfac = function ArticlePreviewComponent_Factory(t) {
        return new (t || _ArticlePreviewComponent)();
      };

      _ArticlePreviewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _ArticlePreviewComponent,
        selectors: [["app-article-preview"]],
        inputs: {
          article: "article"
        },
        decls: 13,
        vars: 10,
        consts: [[1, "article-preview"], [3, "article"], [1, "pull-xs-right", 3, "article", "toggle"], [1, "preview-link", 3, "routerLink"], [1, "tag-list"], ["class", "tag-default tag-pill tag-outline", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "tag-default", "tag-pill", "tag-outline"]],
        template: function ArticlePreviewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "app-article-meta", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "app-favorite-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("toggle", function ArticlePreviewComponent_Template_app_favorite_button_toggle_2_listener($event) {
              return ctx.onToggleFavorite($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Read more...");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ArticlePreviewComponent_li_12_Template, 2, 1, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("article", ctx.article);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("article", ctx.article);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.article.favoritesCount, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c0, ctx.article.slug));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.article.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.article.description);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.article.tagList)("ngForTrackBy", ctx.trackByFn);
          }
        },
        directives: [_article_meta_component__WEBPACK_IMPORTED_MODULE_0__.ArticleMetaComponent, _buttons_favorite_button_component__WEBPACK_IMPORTED_MODULE_1__.FavoriteButtonComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf],
        encapsulation: 2,
        changeDetection: 0
      });
      /***/
    },

    /***/
    6579:
    /*!*************************************************!*\
      !*** ./src/app/shared/article-helpers/index.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ArticleListComponent": function ArticleListComponent() {
          return (
            /* reexport safe */
            _article_list_component__WEBPACK_IMPORTED_MODULE_0__.ArticleListComponent
          );
        },

        /* harmony export */
        "ArticleMetaComponent": function ArticleMetaComponent() {
          return (
            /* reexport safe */
            _article_meta_component__WEBPACK_IMPORTED_MODULE_1__.ArticleMetaComponent
          );
        },

        /* harmony export */
        "ArticlePreviewComponent": function ArticlePreviewComponent() {
          return (
            /* reexport safe */
            _article_preview_component__WEBPACK_IMPORTED_MODULE_2__.ArticlePreviewComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _article_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./article-list.component */
      870);
      /* harmony import */


      var _article_meta_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./article-meta.component */
      540);
      /* harmony import */


      var _article_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./article-preview.component */
      4028);
      /***/

    },

    /***/
    4929:
    /*!*************************************************************!*\
      !*** ./src/app/shared/buttons/favorite-button.component.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FavoriteButtonComponent": function FavoriteButtonComponent() {
          return (
            /* binding */
            _FavoriteButtonComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      1964);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      3766);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      9922);
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core */
      3825);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      8583);

      var _c0 = function _c0(a0, a1, a2) {
        return {
          "disabled": a0,
          "btn-outline-primary": a1,
          "btn-primary": a2
        };
      };

      var _c1 = ["*"];

      var _FavoriteButtonComponent = /*#__PURE__*/function () {
        function _FavoriteButtonComponent(articlesService, router, userService, cd) {
          _classCallCheck(this, _FavoriteButtonComponent);

          this.articlesService = articlesService;
          this.router = router;
          this.userService = userService;
          this.cd = cd;
          this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
          this.isSubmitting = false;
        }

        _createClass(_FavoriteButtonComponent, [{
          key: "toggleFavorite",
          value: function toggleFavorite() {
            var _this8 = this;

            this.isSubmitting = true;
            this.userService.isAuthenticated.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.concatMap)(function (authenticated) {
              // Not authenticated? Push to login screen
              if (!authenticated) {
                _this8.router.navigateByUrl('/login');

                return (0, rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(null);
              } // Favorite the article if it isn't favorited yet


              if (!_this8.article.favorited) {
                return _this8.articlesService.favorite(_this8.article.slug).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(function (data) {
                  _this8.isSubmitting = false;

                  _this8.toggle.emit(true);
                }, function (err) {
                  return _this8.isSubmitting = false;
                })); // Otherwise, unfavorite the article
              } else {
                return _this8.articlesService.unfavorite(_this8.article.slug).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(function (data) {
                  _this8.isSubmitting = false;

                  _this8.toggle.emit(false);
                }, function (err) {
                  return _this8.isSubmitting = false;
                }));
              }
            })).subscribe(function () {
              _this8.cd.markForCheck();
            });
          }
        }]);

        return _FavoriteButtonComponent;
      }();

      _FavoriteButtonComponent.ɵfac = function FavoriteButtonComponent_Factory(t) {
        return new (t || _FavoriteButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.ArticlesService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
      };

      _FavoriteButtonComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _FavoriteButtonComponent,
        selectors: [["app-favorite-button"]],
        inputs: {
          article: "article"
        },
        outputs: {
          toggle: "toggle"
        },
        ngContentSelectors: _c1,
        decls: 3,
        vars: 5,
        consts: [[1, "btn", "btn-sm", 3, "ngClass", "click"], [1, "ion-heart"]],
        template: function FavoriteButtonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FavoriteButtonComponent_Template_button_click_0_listener() {
              return ctx.toggleFavorite();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](1, _c0, ctx.isSubmitting, !ctx.article.favorited, ctx.article.favorited));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass],
        encapsulation: 2,
        changeDetection: 0
      });
      /***/
    },

    /***/
    1322:
    /*!***********************************************************!*\
      !*** ./src/app/shared/buttons/follow-button.component.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FollowButtonComponent": function FollowButtonComponent() {
          return (
            /* binding */
            _FollowButtonComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      3766);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      9922);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      1964);
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core */
      3825);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      8583);

      var _c0 = function _c0(a0, a1, a2) {
        return {
          "disabled": a0,
          "btn-outline-secondary": a1,
          "btn-secondary": a2
        };
      };

      var _FollowButtonComponent = /*#__PURE__*/function () {
        function _FollowButtonComponent(profilesService, router, userService, cd) {
          _classCallCheck(this, _FollowButtonComponent);

          this.profilesService = profilesService;
          this.router = router;
          this.userService = userService;
          this.cd = cd;
          this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
          this.isSubmitting = false;
        }

        _createClass(_FollowButtonComponent, [{
          key: "toggleFollowing",
          value: function toggleFollowing() {
            var _this9 = this;

            this.isSubmitting = true; // TODO: remove nested subscribes, use mergeMap

            this.userService.isAuthenticated.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.concatMap)(function (authenticated) {
              // Not authenticated? Push to login screen
              if (!authenticated) {
                _this9.router.navigateByUrl('/login');

                return (0, rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(null);
              } // Follow this profile if we aren't already


              if (!_this9.profile.following) {
                return _this9.profilesService.follow(_this9.profile.username).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(function (data) {
                  _this9.isSubmitting = false;

                  _this9.toggle.emit(true);
                }, function (err) {
                  return _this9.isSubmitting = false;
                })); // Otherwise, unfollow this profile
              } else {
                return _this9.profilesService.unfollow(_this9.profile.username).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(function (data) {
                  _this9.isSubmitting = false;

                  _this9.toggle.emit(false);
                }, function (err) {
                  return _this9.isSubmitting = false;
                }));
              }
            })).subscribe(function () {
              _this9.cd.markForCheck();
            });
          }
        }]);

        return _FollowButtonComponent;
      }();

      _FollowButtonComponent.ɵfac = function FollowButtonComponent_Factory(t) {
        return new (t || _FollowButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.ProfilesService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
      };

      _FollowButtonComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _FollowButtonComponent,
        selectors: [["app-follow-button"]],
        inputs: {
          profile: "profile"
        },
        outputs: {
          toggle: "toggle"
        },
        decls: 3,
        vars: 7,
        consts: [[1, "btn", "btn-sm", "action-btn", 3, "ngClass", "click"], [1, "ion-plus-round"]],
        template: function FollowButtonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FollowButtonComponent_Template_button_click_0_listener() {
              return ctx.toggleFollowing();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](3, _c0, ctx.isSubmitting, !ctx.profile.following, ctx.profile.following));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" \xA0 ", ctx.profile.following ? "Unfollow" : "Follow", " ", ctx.profile.username, "\n");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass],
        encapsulation: 2,
        changeDetection: 0
      });
      /***/
    },

    /***/
    2341:
    /*!*****************************************!*\
      !*** ./src/app/shared/buttons/index.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FavoriteButtonComponent": function FavoriteButtonComponent() {
          return (
            /* reexport safe */
            _favorite_button_component__WEBPACK_IMPORTED_MODULE_0__.FavoriteButtonComponent
          );
        },

        /* harmony export */
        "FollowButtonComponent": function FollowButtonComponent() {
          return (
            /* reexport safe */
            _follow_button_component__WEBPACK_IMPORTED_MODULE_1__.FollowButtonComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _favorite_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./favorite-button.component */
      4929);
      /* harmony import */


      var _follow_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./follow-button.component */
      1322);
      /***/

    },

    /***/
    1679:
    /*!*********************************!*\
      !*** ./src/app/shared/index.ts ***!
      \*********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ArticleListComponent": function ArticleListComponent() {
          return (
            /* reexport safe */
            _article_helpers__WEBPACK_IMPORTED_MODULE_0__.ArticleListComponent
          );
        },

        /* harmony export */
        "ArticleMetaComponent": function ArticleMetaComponent() {
          return (
            /* reexport safe */
            _article_helpers__WEBPACK_IMPORTED_MODULE_0__.ArticleMetaComponent
          );
        },

        /* harmony export */
        "ArticlePreviewComponent": function ArticlePreviewComponent() {
          return (
            /* reexport safe */
            _article_helpers__WEBPACK_IMPORTED_MODULE_0__.ArticlePreviewComponent
          );
        },

        /* harmony export */
        "FavoriteButtonComponent": function FavoriteButtonComponent() {
          return (
            /* reexport safe */
            _buttons__WEBPACK_IMPORTED_MODULE_1__.FavoriteButtonComponent
          );
        },

        /* harmony export */
        "FollowButtonComponent": function FollowButtonComponent() {
          return (
            /* reexport safe */
            _buttons__WEBPACK_IMPORTED_MODULE_1__.FollowButtonComponent
          );
        },

        /* harmony export */
        "FooterComponent": function FooterComponent() {
          return (
            /* reexport safe */
            _layout__WEBPACK_IMPORTED_MODULE_2__.FooterComponent
          );
        },

        /* harmony export */
        "HeaderComponent": function HeaderComponent() {
          return (
            /* reexport safe */
            _layout__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent
          );
        },

        /* harmony export */
        "ListErrorsComponent": function ListErrorsComponent() {
          return (
            /* reexport safe */
            _list_errors_component__WEBPACK_IMPORTED_MODULE_3__.ListErrorsComponent
          );
        },

        /* harmony export */
        "SharedModule": function SharedModule() {
          return (
            /* reexport safe */
            _shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule
          );
        },

        /* harmony export */
        "ShowAuthedDirective": function ShowAuthedDirective() {
          return (
            /* reexport safe */
            _show_authed_directive__WEBPACK_IMPORTED_MODULE_5__.ShowAuthedDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _article_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./article-helpers */
      6579);
      /* harmony import */


      var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./buttons */
      2341);
      /* harmony import */


      var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./layout */
      7633);
      /* harmony import */


      var _list_errors_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./list-errors.component */
      6860);
      /* harmony import */


      var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./shared.module */
      4466);
      /* harmony import */


      var _show_authed_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./show-authed.directive */
      893);
      /***/

    },

    /***/
    8498:
    /*!***************************************************!*\
      !*** ./src/app/shared/layout/footer.component.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FooterComponent": function FooterComponent() {
          return (
            /* binding */
            _FooterComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      8583);

      var _FooterComponent = function _FooterComponent() {
        _classCallCheck(this, _FooterComponent);

        this.today = Date.now();
      };

      _FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || _FooterComponent)();
      };

      _FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _FooterComponent,
        selectors: [["app-layout-footer"]],
        decls: 10,
        vars: 4,
        consts: [[1, "container"], ["routerLink", "/", 1, "logo-font"], [1, "attribution"], ["href", "https://thinkster.io"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "conduit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Thinkster");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ". Code licensed under MIT. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \xA9 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 1, ctx.today, "yyyy"), ". An interactive learning project from ");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe],
        encapsulation: 2,
        changeDetection: 0
      });
      /***/
    },

    /***/
    9596:
    /*!***************************************************!*\
      !*** ./src/app/shared/layout/header.component.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HeaderComponent": function HeaderComponent() {
          return (
            /* binding */
            _HeaderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core */
      3825);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _show_authed_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../show-authed.directive */
      893);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      8583);

      function HeaderComponent_ul_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Sign in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Sign up ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function HeaderComponent_ul_5_img_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 16);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r2.currentUser.image || "https://static.productionready.io/images/smiley-cyrus.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        }
      }

      var _c0 = function _c0() {
        return {
          exact: true
        };
      };

      var _c1 = function _c1(a1) {
        return ["/profile", a1];
      };

      function HeaderComponent_ul_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\xA0New Article ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\xA0Settings ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, HeaderComponent_ul_5_img_14_Template, 1, 1, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c1, ctx_r1.currentUser.username));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.currentUser.image);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.currentUser.username, " ");
        }
      }

      var _HeaderComponent = /*#__PURE__*/function () {
        function _HeaderComponent(userService, cd) {
          _classCallCheck(this, _HeaderComponent);

          this.userService = userService;
          this.cd = cd;
        }

        _createClass(_HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            this.userService.currentUser.subscribe(function (userData) {
              _this10.currentUser = userData;

              _this10.cd.markForCheck();
            });
          }
        }]);

        return _HeaderComponent;
      }();

      _HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || _HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
      };

      _HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _HeaderComponent,
        selectors: [["app-layout-header"]],
        decls: 6,
        vars: 2,
        consts: [[1, "navbar", "navbar-light"], [1, "container"], ["routerLink", "/", 1, "navbar-brand"], ["class", "nav navbar-nav pull-xs-right", 4, "appShowAuthed"], [1, "nav", "navbar-nav", "pull-xs-right"], [1, "nav-item"], ["routerLink", "/", 1, "nav-link"], ["routerLink", "/login", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/register", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/editor", "routerLinkActive", "active", 1, "nav-link"], [1, "ion-compose"], ["routerLink", "/settings", "routerLinkActive", "active", 1, "nav-link"], [1, "ion-gear-a"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], ["class", "user-pic", "alt", "user image", 3, "src", 4, "ngIf"], ["alt", "user image", 1, "user-pic", 3, "src"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "conduit");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, HeaderComponent_ul_4_Template, 10, 0, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, HeaderComponent_ul_5_Template, 16, 7, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("appShowAuthed", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("appShowAuthed", true);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _show_authed_directive__WEBPACK_IMPORTED_MODULE_1__.ShowAuthedDirective, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
        encapsulation: 2,
        changeDetection: 0
      });
      /***/
    },

    /***/
    7633:
    /*!****************************************!*\
      !*** ./src/app/shared/layout/index.ts ***!
      \****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FooterComponent": function FooterComponent() {
          return (
            /* reexport safe */
            _footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent
          );
        },

        /* harmony export */
        "HeaderComponent": function HeaderComponent() {
          return (
            /* reexport safe */
            _header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./footer.component */
      8498);
      /* harmony import */


      var _header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./header.component */
      9596);
      /***/

    },

    /***/
    6860:
    /*!*************************************************!*\
      !*** ./src/app/shared/list-errors.component.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ListErrorsComponent": function ListErrorsComponent() {
          return (
            /* binding */
            _ListErrorsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      8583);

      function ListErrorsComponent_ul_0_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var error_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r2, " ");
        }
      }

      function ListErrorsComponent_ul_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListErrorsComponent_ul_0_li_1_Template, 2, 1, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.errorList)("ngForTrackBy", ctx_r0.trackByFn);
        }
      }

      var _ListErrorsComponent = /*#__PURE__*/function () {
        function _ListErrorsComponent() {
          _classCallCheck(this, _ListErrorsComponent);

          this.formattedErrors = [];
        }

        _createClass(_ListErrorsComponent, [{
          key: "errors",
          set: function set(errorList) {
            this.formattedErrors = Object.keys(errorList.errors || {}).map(function (key) {
              return "".concat(key, " ").concat(errorList.errors[key]);
            });
          }
        }, {
          key: "errorList",
          get: function get() {
            return this.formattedErrors;
          }
        }, {
          key: "trackByFn",
          value: function trackByFn(index, item) {
            return index;
          }
        }]);

        return _ListErrorsComponent;
      }();

      _ListErrorsComponent.ɵfac = function ListErrorsComponent_Factory(t) {
        return new (t || _ListErrorsComponent)();
      };

      _ListErrorsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ListErrorsComponent,
        selectors: [["app-list-errors"]],
        inputs: {
          errors: "errors"
        },
        decls: 1,
        vars: 1,
        consts: [["class", "error-messages", 4, "ngIf"], [1, "error-messages"], [4, "ngFor", "ngForOf", "ngForTrackBy"]],
        template: function ListErrorsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ListErrorsComponent_ul_0_Template, 2, 2, "ul", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorList);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
        encapsulation: 2,
        changeDetection: 0
      });
      /***/
    },

    /***/
    4466:
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SharedModule": function SharedModule() {
          return (
            /* binding */
            _SharedModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      1841);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _article_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./article-helpers */
      6579);
      /* harmony import */


      var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./buttons */
      2341);
      /* harmony import */


      var _list_errors_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./list-errors.component */
      6860);
      /* harmony import */


      var _show_authed_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./show-authed.directive */
      893);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _SharedModule = function _SharedModule() {
        _classCallCheck(this, _SharedModule);
      };

      _SharedModule.ɵfac = function SharedModule_Factory(t) {
        return new (t || _SharedModule)();
      };

      _SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _SharedModule
      });
      _SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule], _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_SharedModule, {
          declarations: [_article_helpers__WEBPACK_IMPORTED_MODULE_0__.ArticleListComponent, _article_helpers__WEBPACK_IMPORTED_MODULE_0__.ArticleMetaComponent, _article_helpers__WEBPACK_IMPORTED_MODULE_0__.ArticlePreviewComponent, _buttons__WEBPACK_IMPORTED_MODULE_1__.FavoriteButtonComponent, _buttons__WEBPACK_IMPORTED_MODULE_1__.FollowButtonComponent, _list_errors_component__WEBPACK_IMPORTED_MODULE_2__.ListErrorsComponent, _show_authed_directive__WEBPACK_IMPORTED_MODULE_3__.ShowAuthedDirective],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule],
          exports: [_article_helpers__WEBPACK_IMPORTED_MODULE_0__.ArticleListComponent, _article_helpers__WEBPACK_IMPORTED_MODULE_0__.ArticleMetaComponent, _article_helpers__WEBPACK_IMPORTED_MODULE_0__.ArticlePreviewComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _buttons__WEBPACK_IMPORTED_MODULE_1__.FavoriteButtonComponent, _buttons__WEBPACK_IMPORTED_MODULE_1__.FollowButtonComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _list_errors_component__WEBPACK_IMPORTED_MODULE_2__.ListErrorsComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _show_authed_directive__WEBPACK_IMPORTED_MODULE_3__.ShowAuthedDirective]
        });
      })();
      /***/

    },

    /***/
    893:
    /*!*************************************************!*\
      !*** ./src/app/shared/show-authed.directive.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ShowAuthedDirective": function ShowAuthedDirective() {
          return (
            /* binding */
            _ShowAuthedDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../core */
      3825);

      var _ShowAuthedDirective = /*#__PURE__*/function () {
        function _ShowAuthedDirective(templateRef, userService, viewContainer) {
          _classCallCheck(this, _ShowAuthedDirective);

          this.templateRef = templateRef;
          this.userService = userService;
          this.viewContainer = viewContainer;
        }

        _createClass(_ShowAuthedDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            this.userService.isAuthenticated.subscribe(function (isAuthenticated) {
              if (isAuthenticated && _this11.condition || !isAuthenticated && !_this11.condition) {
                _this11.viewContainer.createEmbeddedView(_this11.templateRef);
              } else {
                _this11.viewContainer.clear();
              }
            });
          }
        }, {
          key: "appShowAuthed",
          set: function set(condition) {
            this.condition = condition;
          }
        }]);

        return _ShowAuthedDirective;
      }();

      _ShowAuthedDirective.ɵfac = function ShowAuthedDirective_Factory(t) {
        return new (t || _ShowAuthedDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef));
      };

      _ShowAuthedDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: _ShowAuthedDirective,
        selectors: [["", "appShowAuthed", ""]],
        inputs: {
          appShowAuthed: "appShowAuthed"
        }
      });
      /***/
    },

    /***/
    2340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // The file contents for the current environment will overwrite these during build.
      // The build system defaults to the dev environment which uses `environment.ts`, but if you do
      // `ng build --env=prod` then `environment.prod.ts` will be used instead.
      // The list of which env maps to which file can be found in `angular-cli.json`.


      var _environment = {
        production: false,
        api_url: 'localhost:3000/api'
      };
      /***/
    },

    /***/
    4431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      6747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      2340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      var bootstrapPromise = _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule); // Logging bootstrap information


      bootstrapPromise.then(function (success) {
        return console.log("Bootstrap success");
      })["catch"](function (err) {
        return console.error(err);
      });
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(4431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map