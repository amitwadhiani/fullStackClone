(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkang2_conduit"] = self["webpackChunkang2_conduit"] || []).push([["src_app_profile_profile_module_ts"], {
    /***/
    9513:
    /*!*******************************************************!*\
      !*** ./src/app/profile/profile-articles.component.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfileArticlesComponent": function ProfileArticlesComponent() {
          return (
            /* binding */
            _ProfileArticlesComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _shared_article_helpers_article_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../shared/article-helpers/article-list.component */
      870);

      var _ProfileArticlesComponent = /*#__PURE__*/function () {
        function _ProfileArticlesComponent(route, router, cd) {
          _classCallCheck(this, _ProfileArticlesComponent);

          this.route = route;
          this.router = router;
          this.cd = cd;
          this.articlesConfig = {
            type: 'all',
            filters: {}
          };
        }

        _createClass(_ProfileArticlesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.parent.data.subscribe(function (data) {
              _this.profile = data.profile;
              _this.articlesConfig = {
                type: 'all',
                filters: {}
              }; // Only method I found to refresh article load on swap

              _this.articlesConfig.filters.author = _this.profile.username;

              _this.cd.markForCheck();
            });
          }
        }]);

        return _ProfileArticlesComponent;
      }();

      _ProfileArticlesComponent.ɵfac = function ProfileArticlesComponent_Factory(t) {
        return new (t || _ProfileArticlesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
      };

      _ProfileArticlesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _ProfileArticlesComponent,
        selectors: [["app-profile-articles"]],
        decls: 1,
        vars: 2,
        consts: [[3, "limit", "config"]],
        template: function ProfileArticlesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-article-list", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("limit", 10)("config", ctx.articlesConfig);
          }
        },
        directives: [_shared_article_helpers_article_list_component__WEBPACK_IMPORTED_MODULE_0__.ArticleListComponent],
        encapsulation: 2,
        changeDetection: 0
      });
      /***/
    },

    /***/
    6873:
    /*!********************************************************!*\
      !*** ./src/app/profile/profile-favorites.component.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfileFavoritesComponent": function ProfileFavoritesComponent() {
          return (
            /* binding */
            _ProfileFavoritesComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _shared_article_helpers_article_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../shared/article-helpers/article-list.component */
      870);

      var _ProfileFavoritesComponent = /*#__PURE__*/function () {
        function _ProfileFavoritesComponent(route, cd) {
          _classCallCheck(this, _ProfileFavoritesComponent);

          this.route = route;
          this.cd = cd;
          this.favoritesConfig = {
            type: 'all',
            filters: {}
          };
        }

        _createClass(_ProfileFavoritesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.route.parent.data.subscribe(function (data) {
              _this2.profile = data.profile;
              _this2.favoritesConfig = Object.assign({}, _this2.favoritesConfig);
              _this2.favoritesConfig.filters.favorited = _this2.profile.username;

              _this2.cd.markForCheck();
            });
          }
        }]);

        return _ProfileFavoritesComponent;
      }();

      _ProfileFavoritesComponent.ɵfac = function ProfileFavoritesComponent_Factory(t) {
        return new (t || _ProfileFavoritesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
      };

      _ProfileFavoritesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _ProfileFavoritesComponent,
        selectors: [["app-profile-favorites"]],
        decls: 1,
        vars: 2,
        consts: [[3, "limit", "config"]],
        template: function ProfileFavoritesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-article-list", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("limit", 10)("config", ctx.favoritesConfig);
          }
        },
        directives: [_shared_article_helpers_article_list_component__WEBPACK_IMPORTED_MODULE_0__.ArticleListComponent],
        encapsulation: 2,
        changeDetection: 0
      });
      /***/
    },

    /***/
    2503:
    /*!*****************************************************!*\
      !*** ./src/app/profile/profile-resolver.service.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfileResolver": function ProfileResolver() {
          return (
            /* binding */
            _ProfileResolver
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      5894);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../core */
      3825);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      9895);

      var _ProfileResolver = /*#__PURE__*/function () {
        function _ProfileResolver(profilesService, router) {
          _classCallCheck(this, _ProfileResolver);

          this.profilesService = profilesService;
          this.router = router;
        }

        _createClass(_ProfileResolver, [{
          key: "resolve",
          value: function resolve(route, state) {
            var _this3 = this;

            return this.profilesService.get(route.params['username']).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(function (err) {
              return _this3.router.navigateByUrl('/');
            }));
          }
        }]);

        return _ProfileResolver;
      }();

      _ProfileResolver.ɵfac = function ProfileResolver_Factory(t) {
        return new (t || _ProfileResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core__WEBPACK_IMPORTED_MODULE_0__.ProfilesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
      };

      _ProfileResolver.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _ProfileResolver,
        factory: _ProfileResolver.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    6829:
    /*!***************************************************!*\
      !*** ./src/app/profile/profile-routing.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfileRoutingModule": function ProfileRoutingModule() {
          return (
            /* binding */
            _ProfileRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _profile_articles_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./profile-articles.component */
      9513);
      /* harmony import */


      var _profile_favorites_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./profile-favorites.component */
      6873);
      /* harmony import */


      var _profile_resolver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./profile-resolver.service */
      2503);
      /* harmony import */


      var _profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile.component */
      6630);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var routes = [{
        path: ':username',
        component: _profile_component__WEBPACK_IMPORTED_MODULE_3__.ProfileComponent,
        resolve: {
          profile: _profile_resolver_service__WEBPACK_IMPORTED_MODULE_2__.ProfileResolver
        },
        children: [{
          path: '',
          component: _profile_articles_component__WEBPACK_IMPORTED_MODULE_0__.ProfileArticlesComponent
        }, {
          path: 'favorites',
          component: _profile_favorites_component__WEBPACK_IMPORTED_MODULE_1__.ProfileFavoritesComponent
        }]
      }];

      var _ProfileRoutingModule = function _ProfileRoutingModule() {
        _classCallCheck(this, _ProfileRoutingModule);
      };

      _ProfileRoutingModule.ɵfac = function ProfileRoutingModule_Factory(t) {
        return new (t || _ProfileRoutingModule)();
      };

      _ProfileRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _ProfileRoutingModule
      });
      _ProfileRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_ProfileRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    6630:
    /*!**********************************************!*\
      !*** ./src/app/profile/profile.component.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfileComponent": function ProfileComponent() {
          return (
            /* binding */
            _ProfileComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      3766);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      9922);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../core */
      3825);
      /* harmony import */


      var _shared_buttons_follow_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../shared/buttons/follow-button.component */
      1322);

      var _c0 = function _c0() {
        return ["/settings"];
      };

      var _c1 = function _c1() {
        return {
          exact: true
        };
      };

      var _c2 = function _c2(a1) {
        return ["/profile", a1];
      };

      var _c3 = function _c3(a1) {
        return ["/profile", a1, "favorites"];
      };

      var _ProfileComponent = /*#__PURE__*/function () {
        function _ProfileComponent(route, userService, cd) {
          _classCallCheck(this, _ProfileComponent);

          this.route = route;
          this.userService = userService;
          this.cd = cd;
        }

        _createClass(_ProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.route.data.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.concatMap)(function (data) {
              _this4.profile = data.profile; // Load the current user's data.

              return _this4.userService.currentUser.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(function (userData) {
                _this4.currentUser = userData;
                _this4.isUser = _this4.currentUser.username === _this4.profile.username;
              }));
            })).subscribe(function () {
              _this4.cd.markForCheck();
            });
          }
        }, {
          key: "onToggleFollowing",
          value: function onToggleFollowing(following) {
            this.profile.following = following;
          }
        }]);

        return _ProfileComponent;
      }();

      _ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
        return new (t || _ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef));
      };

      _ProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _ProfileComponent,
        selectors: [["app-profile-page"]],
        decls: 26,
        vars: 18,
        consts: [[1, "profile-page"], [1, "user-info"], [1, "container"], [1, "row"], [1, "col-xs-12", "col-md-10", "offset-md-1"], ["alt", "user image", 1, "user-img", 3, "src"], [3, "hidden", "profile", "toggle"], [1, "btn", "btn-sm", "btn-outline-secondary", "action-btn", 3, "routerLink", "hidden"], [1, "ion-gear-a"], [1, "articles-toggle"], [1, "nav", "nav-pills", "outline-active"], [1, "nav-item"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions", "routerLink"]],
        template: function ProfileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "app-follow-button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("toggle", function ProfileComponent_Template_app_follow_button_toggle_10_listener($event) {
              return ctx.onToggleFollowing($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " Edit Profile Settings ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "ul", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " My Posts ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " Favorited Posts ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx.profile.image || "https://static.productionready.io/images/smiley-cyrus.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.profile.username);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.profile.bio);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", ctx.isUser)("profile", ctx.profile);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](11, _c0))("hidden", !ctx.isUser);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](12, _c1))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](13, _c2, ctx.profile.username));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](15, _c1))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](16, _c3, ctx.profile.username));
          }
        },
        directives: [_shared_buttons_follow_button_component__WEBPACK_IMPORTED_MODULE_1__.FollowButtonComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet],
        encapsulation: 2,
        changeDetection: 0
      });
      /***/
    },

    /***/
    4523:
    /*!*******************************************!*\
      !*** ./src/app/profile/profile.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfileModule": function ProfileModule() {
          return (
            /* binding */
            _ProfileModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _profile_articles_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./profile-articles.component */
      9513);
      /* harmony import */


      var _profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./profile.component */
      6630);
      /* harmony import */


      var _profile_favorites_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./profile-favorites.component */
      6873);
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared */
      1679);
      /* harmony import */


      var _profile_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./profile-routing.module */
      6829);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _ProfileModule = function _ProfileModule() {
        _classCallCheck(this, _ProfileModule);
      };

      _ProfileModule.ɵfac = function ProfileModule_Factory(t) {
        return new (t || _ProfileModule)();
      };

      _ProfileModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _ProfileModule
      });
      _ProfileModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_shared__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _profile_routing_module__WEBPACK_IMPORTED_MODULE_4__.ProfileRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_ProfileModule, {
          declarations: [_profile_articles_component__WEBPACK_IMPORTED_MODULE_0__.ProfileArticlesComponent, _profile_component__WEBPACK_IMPORTED_MODULE_1__.ProfileComponent, _profile_favorites_component__WEBPACK_IMPORTED_MODULE_2__.ProfileFavoritesComponent],
          imports: [_shared__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _profile_routing_module__WEBPACK_IMPORTED_MODULE_4__.ProfileRoutingModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_profile_profile_module_ts-es5.js.map