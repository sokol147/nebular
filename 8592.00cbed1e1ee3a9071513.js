(self.webpackChunknebular=self.webpackChunknebular||[]).push([[8592],{84698:function(t,e,n){"use strict";n.d(e,{T:function(){return c}});var i=n(28784),o=n(52250),r=n(31112),s=n(41998),a=n(96673);function c(t){return function(e){return e.lift(new u(t))}}var u=function(){function t(e){(0,r.Z)(this,t),this.total=e}return(0,s.Z)(t,[{key:"call",value:function(t,e){return e.subscribe(new p(t,this.total))}}]),t}(),p=function(t){(0,i.Z)(n,t);var e=(0,o.Z)(n);function n(t,i){var o;return(0,r.Z)(this,n),(o=e.call(this,t)).total=i,o.count=0,o}return(0,s.Z)(n,[{key:"_next",value:function(t){++this.count>this.total&&this.destination.next(t)}}]),n}(a.L)},22728:function(t,e,n){"use strict";n.d(e,{M:function(){return f}});var i=n(15121),o=n(71357),r=n(28784),s=n(52250),a=n(31112),c=n(41998),u=n(59829),p=n(77e3);function f(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){var n;return"function"==typeof e[e.length-1]&&(n=e.pop()),t.lift(new h(e,n))}}var h=function(){function t(e,n){(0,a.Z)(this,t),this.observables=e,this.project=n}return(0,c.Z)(t,[{key:"call",value:function(t,e){return e.subscribe(new l(t,this.observables,this.project))}}]),t}(),l=function(t){(0,r.Z)(n,t);var e=(0,s.Z)(n);function n(t,i,r){var s;(0,a.Z)(this,n),(s=e.call(this,t)).observables=i,s.project=r,s.toRespond=[];var c=i.length;s.values=new Array(c);for(var u=0;u<c;u++)s.toRespond.push(u);for(var f=0;f<c;f++){var h=i[f];s.add((0,p.D)((0,o.Z)(s),h,void 0,f))}return s}return(0,c.Z)(n,[{key:"notifyNext",value:function(t,e,n){this.values[n]=e;var i=this.toRespond;if(i.length>0){var o=i.indexOf(n);-1!==o&&i.splice(o,1)}}},{key:"notifyComplete",value:function(){}},{key:"_next",value:function(t){if(0===this.toRespond.length){var e=[t].concat((0,i.Z)(this.values));this.project?this._tryProject(e):this.destination.next(e)}}},{key:"_tryProject",value:function(t){var e;try{e=this.project.apply(this,t)}catch(n){return void this.destination.error(n)}this.destination.next(e)}}]),n}(u.L)},7367:function(t,e,n){"use strict";n.d(e,{B:function(){return v},l:function(){return C}});var i=n(91161),o=n(11785),r=n(61116),s=n(63260),a=n(88543),c=n(37727);function u(t,e){if(1&t&&(o.TgZ(0,"a",6),o._UZ(1,"nb-icon",7),o.GkF(2,8),o.qZA()),2&t){var n=o.oxw(2),i=o.MAs(4);o.Q6J("routerLink",n.link)("title",n.title),o.xp6(1),o.Q6J("config",n.icon),o.xp6(1),o.Q6J("ngTemplateOutlet",i)}}function p(t,e){if(1&t&&(o.TgZ(0,"a",9),o._UZ(1,"nb-icon",7),o.GkF(2,8),o.qZA()),2&t){var n=o.oxw(2),i=o.MAs(4);o.Q6J("href",n.href,o.LSH)("title",n.title),o.xp6(1),o.Q6J("config",n.icon),o.xp6(1),o.Q6J("ngTemplateOutlet",i)}}function f(t,e){if(1&t&&(o.TgZ(0,"a",10),o.NdJ("click",function(t){return t.preventDefault()}),o._UZ(1,"nb-icon",7),o.GkF(2,8),o.qZA()),2&t){var n=o.oxw(2),i=o.MAs(4);o.Q6J("title",n.title),o.xp6(1),o.Q6J("config",n.icon),o.xp6(1),o.Q6J("ngTemplateOutlet",i)}}function h(t,e){if(1&t&&(o.ynx(0),o.YNc(1,u,3,4,"a",3),o.YNc(2,p,3,4,"a",4),o.YNc(3,f,3,3,"a",5),o.BQk()),2&t){var n=o.oxw();o.xp6(1),o.Q6J("ngIf",n.link),o.xp6(1),o.Q6J("ngIf",n.href&&!n.link),o.xp6(1),o.Q6J("ngIf",!n.href&&!n.link)}}function l(t,e){if(1&t&&(o.Hsn(0),o.GkF(1,8)),2&t){o.oxw();var n=o.MAs(4);o.xp6(1),o.Q6J("ngTemplateOutlet",n)}}function d(t,e){if(1&t&&o._UZ(0,"nb-badge",12),2&t){var n=o.oxw(2);o.Q6J("text",n.badgeText)("dotMode",n.badgeDot)("status",n.badgeStatus)("position",n.badgePosition)}}function g(t,e){if(1&t&&o.YNc(0,d,1,4,"nb-badge",11),2&t){var n=o.oxw();o.Q6J("ngIf",n.badgeText||n.badgeDot)}}var y=["*"],b=[[["nb-action"]]],m=["nb-action"],v=function(){function t(){this.title="",this._disabled=!1,this.badgeStatus="basic"}return Object.defineProperty(t.prototype,"disabled",{get:function(){return this._disabled},set:function(t){this._disabled=(0,i.eB)(t)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"badgeDot",{get:function(){return this._badgeDot},set:function(t){this._badgeDot=(0,i.eB)(t)},enumerable:!1,configurable:!0}),t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["nb-action"]],hostVars:2,hostBindings:function(t,e){2&t&&o.ekj("disabled",e.disabled)},inputs:{link:"link",href:"href",title:"title",icon:"icon",disabled:"disabled",badgeDot:"badgeDot",badgeText:"badgeText",badgeStatus:"badgeStatus",badgePosition:"badgePosition"},ngContentSelectors:y,decls:5,vars:2,consts:[[4,"ngIf","ngIfElse"],["projectedContent",""],["badgeTemplate",""],["class","icon-container",3,"routerLink","title",4,"ngIf"],["class","icon-container",3,"href","title",4,"ngIf"],["class","icon-container","href","#",3,"title","click",4,"ngIf"],[1,"icon-container",3,"routerLink","title"],[3,"config"],[3,"ngTemplateOutlet"],[1,"icon-container",3,"href","title"],["href","#",1,"icon-container",3,"title","click"],[3,"text","dotMode","status","position",4,"ngIf"],[3,"text","dotMode","status","position"]],template:function(t,e){if(1&t&&(o.F$t(),o.YNc(0,h,4,3,"ng-container",0),o.YNc(1,l,2,1,"ng-template",null,1,o.W1O),o.YNc(3,g,1,1,"ng-template",null,2,o.W1O)),2&t){var n=o.MAs(2);o.Q6J("ngIf",e.icon)("ngIfElse",n)}},directives:[r.O5,s.yS,a.f,r.tP,c.n],styles:["[_nghost-%COMP%]{background:transparent;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative}.disabled[_nghost-%COMP%]{cursor:not-allowed}.disabled[_nghost-%COMP%]   a[_ngcontent-%COMP%], .disabled[_nghost-%COMP%]   nb-icon[_ngcontent-%COMP%]{cursor:not-allowed}nb-actions.full-width[_nghost-%COMP%], nb-actions.full-width   [_nghost-%COMP%]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%}a.icon-container[_ngcontent-%COMP%]{position:relative}a.icon-container[_ngcontent-%COMP%]:focus, a.icon-container[_ngcontent-%COMP%]:hover{text-decoration:none}nb-icon[_ngcontent-%COMP%]:hover{cursor:pointer}"]}),t}(),C=function(){function t(){this._size="small",this._fullWidth=!1}return Object.defineProperty(t.prototype,"size",{get:function(){return this._size},set:function(t){this._size=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"fullWidth",{get:function(){return this._fullWidth},set:function(t){this._fullWidth=(0,i.eB)(t)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"tiny",{get:function(){return"tiny"===this.size},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"small",{get:function(){return"small"===this.size},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"medium",{get:function(){return"medium"===this.size},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"large",{get:function(){return"large"===this.size},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"giant",{get:function(){return"giant"===this.size},enumerable:!1,configurable:!0}),t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["nb-actions"]],hostVars:12,hostBindings:function(t,e){2&t&&o.ekj("full-width",e.fullWidth)("size-tiny",e.tiny)("size-small",e.small)("size-medium",e.medium)("size-large",e.large)("size-giant",e.giant)},inputs:{size:"size",fullWidth:"fullWidth"},ngContentSelectors:m,decls:1,vars:0,template:function(t,e){1&t&&(o.F$t(b),o.Hsn(0))},styles:["[_nghost-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}"]}),t}()},45443:function(t,e,n){"use strict";n.d(e,{M:function(){return a}});var i=n(75656),o=(n(7367),n(69144)),r=n(27054),s=n(11785),a=function(){function t(){}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[i.P,o.j,r.K]]}),t}()},12177:function(t,e,n){"use strict";n.d(e,{J:function(){return p}});var i,o=n(11785),r=n(59409),s=n(79388),a=n(6785),c=(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),u=function(t){function e(e,n,i){return void 0===i&&(i=!1),t.call(this,e,n,i)||this}return c(e,t),e.prototype.isChanged=function(){return this.currentValue!==this.previousValue},e}(o.WD2),p=function(){function t(t,e,n){this.positionBuilder=t,this.triggerStrategyBuilder=e,this.dynamicOverlayService=n,this._context={},this._trigger=r.qk.NOOP,this._position=s.MG.TOP,this._adjustment=s.SH.NOOP,this._offset=15,this._overlayConfig={},this.changes={}}return t.prototype.host=function(t){return this.changes.host=new u(this._host,t),this._host=t,this},t.prototype.trigger=function(t){return this.changes.trigger=new u(this._trigger,t),this._trigger=t,this},t.prototype.position=function(t){return this.changes.position=new u(this._position,t),this._position=t,this},t.prototype.adjustment=function(t){return this.changes.adjustment=new u(this._adjustment,t),this._adjustment=t,this},t.prototype.componentType=function(t){return this.changes.componentType=new u(this._componentType,t),this._componentType=t,this},t.prototype.content=function(t){return this.changes.content=new u(this._content,t),this._content=t,this},t.prototype.context=function(t){return this.changes.context=new u(this._context,t),this._context=t,this},t.prototype.offset=function(t){return this.changes.offset=new u(this._offset,t),this._offset=t,this},t.prototype.overlayConfig=function(t){return this.changes.overlayConfig=new u(this._overlayConfig,t),this._overlayConfig=t,this},t.prototype.build=function(){if(!this._componentType||!this._host)throw Error("NbDynamicOverlayHandler: at least 'componentType' and 'host' should be\n      passed before building a dynamic overlay.");return this.dynamicOverlay=this.dynamicOverlayService.create(this._componentType,this._content,this._context,this.createPositionStrategy(),this._overlayConfig),this.connect(),this.clearChanges(),this.dynamicOverlay},t.prototype.rebuild=function(){if(this.dynamicOverlay)return this.isPositionStrategyUpdateRequired()&&this.dynamicOverlay.setPositionStrategy(this.createPositionStrategy()),this.isTriggerStrategyUpdateRequired()&&this.connect(),this.isContainerRerenderRequired()&&this.dynamicOverlay.setContentAndContext(this._content,this._context),this.isComponentTypeUpdateRequired()&&this.dynamicOverlay.setComponent(this._componentType),this.isOverlayConfigUpdateRequired()&&this.dynamicOverlay.setOverlayConfig(this._overlayConfig),this.clearChanges(),this.dynamicOverlay},t.prototype.connect=function(){if(!this.dynamicOverlay)throw new Error("NbDynamicOverlayHandler: cannot connect to DynamicOverlay\n      as it is not created yet. Call build() first");this.disconnect(),this.subscribeOnTriggers(this.dynamicOverlay)},t.prototype.disconnect=function(){this.triggerStrategy&&this.triggerStrategy.destroy()},t.prototype.destroy=function(){this.disconnect(),this.clearChanges(),this.dynamicOverlay&&this.dynamicOverlay.dispose()},t.prototype.createPositionStrategy=function(){return this.positionBuilder.connectedTo(this._host).position(this._position).adjustment(this._adjustment).offset(this._offset)},t.prototype.subscribeOnTriggers=function(t){this.triggerStrategy=this.triggerStrategyBuilder.trigger(this._trigger).host(this._host.nativeElement).container(function(){return t.getContainer()}).build(),this.triggerStrategy.show$.subscribe(function(){return t.show()}),this.triggerStrategy.hide$.subscribe(function(){return t.hide()})},t.prototype.isContainerRerenderRequired=function(){return this.isContentUpdated()||this.isContextUpdated()||this.isPositionStrategyUpdateRequired()},t.prototype.isPositionStrategyUpdateRequired=function(){return this.isAdjustmentUpdated()||this.isPositionUpdated()||this.isOffsetUpdated()||this.isHostUpdated()},t.prototype.isTriggerStrategyUpdateRequired=function(){return this.isTriggerUpdated()||this.isHostUpdated()},t.prototype.isComponentTypeUpdateRequired=function(){return this.isComponentTypeUpdated()},t.prototype.isOverlayConfigUpdateRequired=function(){return this.isOverlayConfigUpdated()},t.prototype.isComponentTypeUpdated=function(){return this.changes.componentType&&this.changes.componentType.isChanged()},t.prototype.isContentUpdated=function(){return this.changes.content&&this.changes.content.isChanged()},t.prototype.isContextUpdated=function(){return this.changes.context&&this.changes.context.isChanged()},t.prototype.isAdjustmentUpdated=function(){return this.changes.adjustment&&this.changes.adjustment.isChanged()},t.prototype.isPositionUpdated=function(){return this.changes.position&&this.changes.position.isChanged()},t.prototype.isHostUpdated=function(){return this.changes.host&&this.changes.host.isChanged()},t.prototype.isTriggerUpdated=function(){return this.changes.trigger&&this.changes.trigger.isChanged()},t.prototype.isOffsetUpdated=function(){return this.changes.offset&&this.changes.offset.isChanged()},t.prototype.isOverlayConfigUpdated=function(){return this.changes.overlayConfig&&this.changes.overlayConfig.isChanged()},t.prototype.clearChanges=function(){this.changes={}},t.\u0275fac=function(e){return new(e||t)(o.LFG(s.yp),o.LFG(r.o8),o.LFG(a.X))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac}),t}()},6785:function(t,e,n){"use strict";n.d(e,{X:function(){return l}});var i=n(98720),o=n(43835),r=n(25416),s=n(55959),a=n(78512),c=n(31906),u=n(63795),p=n(11785),f=n(8825),h=function(){return(h=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},l=function(){function t(t,e,n,i){this.overlay=t,this.componentFactoryResolver=e,this.zone=n,this.overlayContainer=i,this.context={},this.overlayConfig={},this.positionStrategyChange$=new s.xQ,this.isShown$=new a.X(!1),this.destroy$=new s.xQ,this.overlayDestroy$=new s.xQ}return Object.defineProperty(t.prototype,"isAttached",{get:function(){return this.ref&&this.ref.hasAttached()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isShown",{get:function(){return this.isShown$.pipe((0,i.x)())},enumerable:!1,configurable:!0}),t.prototype.create=function(t,e,n,i,o){return void 0===o&&(o={}),this.setContentAndContext(e,n),this.setComponent(t),this.setPositionStrategy(i),this.setOverlayConfig(o),this},t.prototype.setContent=function(t){this.content=t,this.container&&this.updateContext(),this.updatePosition()},t.prototype.setContext=function(t){this.context=t,this.container&&this.updateContext(),this.updatePosition()},t.prototype.setContentAndContext=function(t,e){this.content=t,this.context=e,this.container&&this.updateContext(),this.updatePosition()},t.prototype.setComponent=function(t){this.componentType=t;var e=this.isAttached;this.disposeOverlayRef(),e&&this.show()},t.prototype.setPositionStrategy=function(t){var e=this;this.positionStrategyChange$.next(),this.positionStrategy=t,this.positionStrategy.positionChange.pipe((0,o.h)(function(){return!!e.container}),(0,r.R)((0,c.T)(this.positionStrategyChange$,this.destroy$))).subscribe(function(t){e.lastAppliedPosition=t,(0,u.r$)(e.container,{position:t})}),this.ref&&this.ref.updatePositionStrategy(this.positionStrategy)},t.prototype.setOverlayConfig=function(t){this.overlayConfig=t;var e=this.isAttached;this.disposeOverlayRef(),e&&this.show()},t.prototype.show=function(){if(this.ref||this.createOverlay(),this.renderContainer(),!this.hasOverlayInContainer())return this.disposeOverlayRef(),this.show();this.isShown$.next(!0)},t.prototype.hide=function(){this.ref&&(this.ref.detach(),this.container=null,this.isShown$.next(!1))},t.prototype.toggle=function(){this.isAttached?this.hide():this.show()},t.prototype.dispose=function(){this.destroy$.next(),this.destroy$.complete(),this.hide(),this.disposeOverlayRef(),this.isShown$.complete(),this.positionStrategyChange$.complete(),this.overlayDestroy$.complete()},t.prototype.getContainer=function(){return this.container},t.prototype.createOverlay=function(){this.ref=this.overlay.create(h({positionStrategy:this.positionStrategy,scrollStrategy:this.overlay.scrollStrategies.reposition()},this.overlayConfig)),this.updatePositionWhenStable(this.ref)},t.prototype.renderContainer=function(){var t=this.createContainerContext();this.container||(this.container=(0,u.fH)(this.ref,this.componentType,t,this.componentFactoryResolver)),this.container.instance.renderContent()},t.prototype.updateContext=function(){var t=this.createContainerContext();Object.assign(this.container.instance,t),this.container.instance.renderContent(),this.container.changeDetectorRef.detectChanges()},t.prototype.createContainerContext=function(){return{content:this.content,context:this.context,cfr:this.componentFactoryResolver,position:this.lastAppliedPosition}},t.prototype.updatePositionWhenStable=function(t){var e=this,n=this.overlayDestroy$.pipe((0,o.h)(function(e){return e===t}));this.zone.onStable.pipe((0,r.R)((0,c.T)(this.destroy$,n))).subscribe(function(){return e.updatePosition()})},t.prototype.updatePosition=function(){this.ref&&this.ref.updatePosition()},t.prototype.hasOverlayInContainer=function(){return this.overlayContainer.getContainerElement().contains(this.ref.hostElement)},t.prototype.disposeOverlayRef=function(){this.ref&&(this.ref.dispose(),this.overlayDestroy$.next(this.ref),this.ref=null,this.container=null)},t.\u0275fac=function(e){return new(e||t)(p.LFG(u.Pn),p.LFG(p._Vd),p.LFG(p.R0b),p.LFG(f.y_))},t.\u0275prov=p.Yz7({token:t,factory:t.\u0275fac}),t}()},41165:function(t,e,n){"use strict";n.d(e,{T:function(){return u},C:function(){return p}});var i=n(11785),o=n(79388),r=n(8825),s=n(61116);function a(t,e){if(1&t&&(i.TgZ(0,"div",2),i._uU(1),i.qZA()),2&t){var n=i.oxw();i.xp6(1),i.Oqu(n.content)}}function c(t,e){}var u=function(){function t(){}return Object.defineProperty(t.prototype,"top",{get:function(){return this.position===o.MG.TOP},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"topStart",{get:function(){return this.position===o.MG.TOP_START},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"topEnd",{get:function(){return this.position===o.MG.TOP_END},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"right",{get:function(){return this.position===o.MG.RIGHT||this.position===o.MG.END},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"endTop",{get:function(){return this.position===o.MG.END_TOP},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"endBottom",{get:function(){return this.position===o.MG.END_BOTTOM},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"bottom",{get:function(){return this.position===o.MG.BOTTOM},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"bottomStart",{get:function(){return this.position===o.MG.BOTTOM_START},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"bottomEnd",{get:function(){return this.position===o.MG.BOTTOM_END},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"left",{get:function(){return this.position===o.MG.LEFT||this.position===o.MG.START},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"startTop",{get:function(){return this.position===o.MG.START_TOP},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"startBottom",{get:function(){return this.position===o.MG.START_BOTTOM},enumerable:!1,configurable:!0}),t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["ng-component"]],hostVars:24,hostBindings:function(t,e){2&t&&i.ekj("nb-overlay-top",e.top)("nb-overlay-top-start",e.topStart)("nb-overlay-top-end",e.topEnd)("nb-overlay-right",e.right)("nb-overlay-end-top",e.endTop)("nb-overlay-end-bottom",e.endBottom)("nb-overlay-bottom",e.bottom)("nb-overlay-bottom-start",e.bottomStart)("nb-overlay-bottom-end",e.bottomEnd)("nb-overlay-left",e.left)("nb-overlay-start-top",e.startTop)("nb-overlay-start-bottom",e.startBottom)},inputs:{position:"position"},decls:0,vars:0,template:function(t,e){},encapsulation:2}),t}(),p=function(){function t(t,e,n){this.vcr=t,this.injector=e,this.changeDetectorRef=n,this.isAttached=!1}return Object.defineProperty(t.prototype,"isStringContent",{get:function(){return!!this.content},enumerable:!1,configurable:!0}),t.prototype.attachComponentPortal=function(t,e){t.injector=this.createChildInjector(t.componentFactoryResolver);var n=this.portalOutlet.attachComponentPortal(t);return e&&Object.assign(n.instance,e),n.changeDetectorRef.markForCheck(),n.changeDetectorRef.detectChanges(),this.isAttached=!0,n},t.prototype.attachTemplatePortal=function(t){var e=this.portalOutlet.attachTemplatePortal(t);return e.detectChanges(),this.isAttached=!0,e},t.prototype.attachStringContent=function(t){this.content=t,this.changeDetectorRef.markForCheck(),this.changeDetectorRef.detectChanges(),this.isAttached=!0},t.prototype.detach=function(){this.portalOutlet.hasAttached()&&this.portalOutlet.detach(),this.attachStringContent(null),this.isAttached=!1},t.prototype.createChildInjector=function(t){return new r.F$(this.injector,new WeakMap([[i._Vd,t]]))},t.\u0275fac=function(e){return new(e||t)(i.Y36(i.s_b),i.Y36(i.zs3),i.Y36(i.sBO))},t.\u0275cmp=i.Xpm({type:t,selectors:[["nb-overlay-container"]],viewQuery:function(t,e){var n;1&t&&i.Gf(r.GF,7),2&t&&i.iGM(n=i.CRH())&&(e.portalOutlet=n.first)},decls:2,vars:1,consts:[["class","primitive-overlay",4,"ngIf"],["nbPortalOutlet",""],[1,"primitive-overlay"]],template:function(t,e){1&t&&(i.YNc(0,a,2,1,"div",0),i.YNc(1,c,0,0,"ng-template",1)),2&t&&i.Q6J("ngIf",e.isStringContent)},directives:[s.O5,r.GF],encapsulation:2}),t}()},25699:function(t,e,n){"use strict";n.d(e,{j:function(){return C}});var i=n(55959),o=n(26019),r=n(31305),s=n(31906),a=n(79996),c=n(98720),u=n(66599),p=n(25416),f=n(5928),h=n(48992),l=n(83234),d=n(11785),g=n(61116);function y(t,e){if(1&t&&(d.TgZ(0,"div",2),d.ALo(1,"async"),d.Hsn(2,1),d.qZA()),2&t){var n=d.oxw();d.Q6J("ngClass",d.lcZ(1,1,n.prefixClasses$))}}function b(t,e){if(1&t&&(d.TgZ(0,"div",2),d.ALo(1,"async"),d.Hsn(2,2),d.qZA()),2&t){var n=d.oxw();d.Q6J("ngClass",d.lcZ(1,1,n.suffixClasses$))}}var m=["*",[["","nbPrefix",""]],[["","nbSuffix",""]]],v=["*","[nbPrefix]","[nbSuffix]"],C=function(){function t(t,e,n,r){var s=this;this.cd=t,this.zone=e,this.elementRef=n,this.renderer=r,this.destroy$=new i.xQ,this.formControlState$=new o.t(1),this.prefixClasses$=this.formControlState$.pipe((0,a.U)(function(t){return s.getAddonClasses("prefix",t)})),this.suffixClasses$=this.formControlState$.pipe((0,a.U)(function(t){return s.getAddonClasses("suffix",t)}))}return t.prototype.ngAfterContentChecked=function(){this.formControl||function(){throw new Error("NbFormFieldComponent must contain [nbInput]")}()},t.prototype.ngAfterContentInit=function(){this.subscribeToFormControlStateChange(),this.subscribeToAddonChange()},t.prototype.ngAfterViewInit=function(){var t=this;this.zone.runOutsideAngular(function(){return setTimeout(function(){t.renderer.addClass(t.elementRef.nativeElement,"nb-transition")})})},t.prototype.ngOnDestroy=function(){this.destroy$.next()},t.prototype.shouldShowPrefix=function(){return this.getFormControlConfig().supportsPrefix&&!!this.prefix.length},t.prototype.shouldShowSuffix=function(){return this.getFormControlConfig().supportsSuffix&&!!this.suffix.length},t.prototype.subscribeToFormControlStateChange=function(){var t=this,e=this.formControl;(0,r.aj)([e.disabled$,e.focused$,e.size$,e.status$,e.fullWidth$]).pipe((0,a.U)(function(t){return{disabled:t[0],focused:t[1],size:t[2],status:t[3],fullWidth:t[4]}}),(0,c.x)(function(e,n){return t.isStatesEqual(e,n)}),(0,u.b)(function(e){var n=["nb-form-field-size-"+e.size];e.fullWidth||n.push("nb-form-field-limited-width"),t.formFieldClasses=n.join(" ")}),(0,p.R)(this.destroy$)).subscribe(this.formControlState$)},t.prototype.subscribeToAddonChange=function(){var t=this;(0,s.T)(this.prefix.changes,this.suffix.changes).pipe((0,p.R)(this.destroy$)).subscribe(function(){return t.cd.markForCheck()})},t.prototype.getAddonClasses=function(t,e){var n=["nb-form-field-addon","nb-form-field-"+t+"-"+e.size];return n.push(e.disabled?"nb-form-field-addon-disabled":e.focused?"nb-form-field-addon-"+e.status+"-highlight":"nb-form-field-addon-"+e.status),n},t.prototype.getFormControlConfig=function(){return this.formControlConfig||new l.G},t.prototype.isStatesEqual=function(t,e){return t.status===e.status&&t.disabled===e.disabled&&t.focused===e.focused&&t.fullWidth===e.fullWidth&&t.size===e.size},t.\u0275fac=function(e){return new(e||t)(d.Y36(d.sBO),d.Y36(d.R0b),d.Y36(d.SBq),d.Y36(d.Qsj))},t.\u0275cmp=d.Xpm({type:t,selectors:[["nb-form-field"]],contentQueries:function(t,e,n){if(1&t&&(d.Suo(n,l.d,5),d.Suo(n,l.G,5),d.Suo(n,f.t,5),d.Suo(n,h.y,5)),2&t){var i=void 0;d.iGM(i=d.CRH())&&(e.formControl=i.first),d.iGM(i=d.CRH())&&(e.formControlConfig=i.first),d.iGM(i=d.CRH())&&(e.prefix=i),d.iGM(i=d.CRH())&&(e.suffix=i)}},hostVars:2,hostBindings:function(t,e){2&t&&d.Tol(e.formFieldClasses)},ngContentSelectors:v,decls:4,vars:6,consts:[[3,"ngClass",4,"ngIf"],[1,"nb-form-control-container"],[3,"ngClass"]],template:function(t,e){1&t&&(d.F$t(m),d.YNc(0,y,3,3,"div",0),d.TgZ(1,"div",1),d.Hsn(2),d.qZA(),d.YNc(3,b,3,3,"div",0)),2&t&&(d.Q6J("ngIf",e.shouldShowPrefix()),d.xp6(1),d.ekj("nb-form-field-control-with-prefix",e.shouldShowPrefix())("nb-form-field-control-with-suffix",e.shouldShowSuffix()),d.xp6(2),d.Q6J("ngIf",e.shouldShowSuffix()))},directives:[g.O5,g.mk],pipes:[g.Ov],styles:["[_nghost-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.nb-form-control-container[_ngcontent-%COMP%]{width:100%}"],changeDetection:0}),t}()},55567:function(t,e,n){"use strict";n.d(e,{V:function(){return r}});var i=n(61116),o=(n(25699),n(5928),n(48992),n(11785)),r=function(){function t(){}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[i.ez]]}),t}()},5928:function(t,e,n){"use strict";n.d(e,{t:function(){return o}});var i=n(11785),o=function(){function t(){}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=i.lG2({type:t,selectors:[["","nbPrefix",""]]}),t}()},48992:function(t,e,n){"use strict";n.d(e,{y:function(){return o}});var i=n(11785),o=function(){function t(){}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=i.lG2({type:t,selectors:[["","nbSuffix",""]]}),t}()},37118:function(t,e,n){"use strict";n.d(e,{Q:function(){return c}});var i=n(11785),o=n(11590),r=n(61116);function s(t,e){if(1&t&&(i.TgZ(0,"span",2),i._uU(1),i.qZA()),2&t){var n=i.oxw();i.xp6(1),i.Oqu(n.message)}}var a=function(){function t(t){this.statusService=t,this.message="Loading...",this.size="medium",this.status="basic"}return Object.defineProperty(t.prototype,"tiny",{get:function(){return"tiny"===this.size},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"small",{get:function(){return"small"===this.size},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"medium",{get:function(){return"medium"===this.size},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"large",{get:function(){return"large"===this.size},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"giant",{get:function(){return"giant"===this.size},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"primary",{get:function(){return"primary"===this.status},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"info",{get:function(){return"info"===this.status},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"success",{get:function(){return"success"===this.status},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"warning",{get:function(){return"warning"===this.status},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"danger",{get:function(){return"danger"===this.status},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"basic",{get:function(){return"basic"===this.status},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"control",{get:function(){return"control"===this.status},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"additionalClasses",{get:function(){return this.statusService.isCustomStatus(this.status)?[this.statusService.getStatusClass(this.status)]:[]},enumerable:!1,configurable:!0}),t.\u0275fac=function(e){return new(e||t)(i.Y36(o.Y))},t.\u0275cmp=i.Xpm({type:t,selectors:[["nb-spinner"]],hostVars:26,hostBindings:function(t,e){2&t&&(i.Tol(e.additionalClasses),i.ekj("size-tiny",e.tiny)("size-small",e.small)("size-medium",e.medium)("size-large",e.large)("size-giant",e.giant)("status-primary",e.primary)("status-info",e.info)("status-success",e.success)("status-warning",e.warning)("status-danger",e.danger)("status-basic",e.basic)("status-control",e.control))},inputs:{message:"message",size:"size",status:"status"},decls:2,vars:1,consts:[[1,"spin-circle"],["class","message",4,"ngIf"],[1,"message"]],template:function(t,e){1&t&&(i._UZ(0,"span",0),i.YNc(1,s,2,1,"span",1)),2&t&&(i.xp6(1),i.Q6J("ngIf",e.message))},directives:[r.O5],styles:["[_nghost-%COMP%]{opacity:1;position:absolute;border-radius:inherit;top:0;right:0;left:0;bottom:0;overflow:hidden;z-index:9999;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;visibility:visible}[_nghost-%COMP%]   .spin-circle[_ngcontent-%COMP%]{-webkit-animation:spin .8s linear infinite;animation:spin .8s linear infinite;border-radius:50%;border-style:solid;border-width:.125em;width:1em;height:1em}[_nghost-%COMP%]   .message[_ngcontent-%COMP%]{margin-left:.5rem}"]}),t}(),c=function(){function t(t,e,n,i){this.directiveView=t,this.componentFactoryResolver=e,this.renderer=n,this.directiveElement=i,this.shouldShow=!1,this.spinnerStatus="basic",this.spinnerSize="medium",this.isSpinnerExist=!1}return Object.defineProperty(t.prototype,"nbSpinner",{set:function(t){this.componentFactory?t?this.show():this.hide():this.shouldShow=t},enumerable:!1,configurable:!0}),t.prototype.ngOnInit=function(){this.componentFactory=this.componentFactoryResolver.resolveComponentFactory(a),this.shouldShow&&this.show()},t.prototype.hide=function(){this.isSpinnerExist&&(this.directiveView.remove(),this.isSpinnerExist=!1)},t.prototype.show=function(){this.isSpinnerExist||(this.spinner=this.directiveView.createComponent(this.componentFactory),this.setInstanceInputs(this.spinner.instance),this.spinner.changeDetectorRef.detectChanges(),this.renderer.appendChild(this.directiveElement.nativeElement,this.spinner.location.nativeElement),this.isSpinnerExist=!0)},t.prototype.setInstanceInputs=function(t){t.message=this.spinnerMessage,void 0!==this.spinnerStatus&&(t.status=this.spinnerStatus),void 0!==this.spinnerSize&&(t.size=this.spinnerSize)},t.\u0275fac=function(e){return new(e||t)(i.Y36(i.s_b),i.Y36(i._Vd),i.Y36(i.Qsj),i.Y36(i.SBq))},t.\u0275dir=i.lG2({type:t,selectors:[["","nbSpinner",""]],hostVars:2,hostBindings:function(t,e){2&t&&i.ekj("nb-spinner-container",e.isSpinnerExist)},inputs:{spinnerMessage:["nbSpinnerMessage","spinnerMessage"],spinnerStatus:["nbSpinnerStatus","spinnerStatus"],spinnerSize:["nbSpinnerSize","spinnerSize"],nbSpinner:"nbSpinner"}}),t}()},72349:function(t,e,n){"use strict";n.d(e,{k:function(){return g}});var i=n(91161),o=n(11785),r=n(99624),s=n(61116),a=n(37727);function c(t,e){if(1&t&&o._UZ(0,"nb-badge",8),2&t){var n=o.oxw(2);o.Q6J("text",n.badgeText)("status",n.badgeStatus)("position",n.badgePosition)}}function u(t,e){if(1&t&&(o.TgZ(0,"div",6),o.YNc(1,c,1,3,"nb-badge",7),o.qZA()),2&t){var n=o.oxw();o.Udp("background-image",n.imageBackgroundStyle),o.xp6(1),o.Q6J("ngIf",n.badgeText)}}function p(t,e){if(1&t&&(o.ynx(0),o._uU(1),o.BQk()),2&t){var n=o.oxw(2);o.xp6(1),o.hij(" ",n.getInitials()," ")}}function f(t,e){if(1&t&&o._UZ(0,"nb-badge",8),2&t){var n=o.oxw(2);o.Q6J("text",n.badgeText)("status",n.badgeStatus)("position",n.badgePosition)}}function h(t,e){if(1&t&&(o.TgZ(0,"div",9),o.YNc(1,p,2,1,"ng-container",10),o.YNc(2,f,1,3,"nb-badge",7),o.qZA()),2&t){var n=o.oxw();o.Udp("background-color",n.color),o.xp6(1),o.Q6J("ngIf",n.showInitials),o.xp6(1),o.Q6J("ngIf",n.badgeText)}}function l(t,e){if(1&t&&(o.TgZ(0,"div",11),o._uU(1),o.qZA()),2&t){var n=o.oxw();o.xp6(1),o.Oqu(n.name)}}function d(t,e){if(1&t&&(o.TgZ(0,"div",12),o._uU(1),o.qZA()),2&t){var n=o.oxw();o.xp6(1),o.Oqu(n.title)}}var g=function(){function t(t){this.domSanitizer=t,this.name="Anonymous",this.size="medium",this.shape="round",this._showName=!0,this._showTitle=!0,this._showInitials=!0,this.badgeStatus="basic"}return Object.defineProperty(t.prototype,"picture",{set:function(t){this.imageBackgroundStyle=t?this.domSanitizer.bypassSecurityTrustStyle("url("+t+")"):null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"showName",{get:function(){return this._showName},set:function(t){this._showName=(0,i.eB)(t)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"showTitle",{get:function(){return this._showTitle},set:function(t){this._showTitle=(0,i.eB)(t)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"showInitials",{get:function(){return this._showInitials},set:function(t){this._showInitials=(0,i.eB)(t)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onlyPicture",{get:function(){return!this.showName&&!this.showTitle},set:function(t){this.showName=this.showTitle=!(0,i.eB)(t)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"tiny",{get:function(){return"tiny"===this.size},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"small",{get:function(){return"small"===this.size},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"medium",{get:function(){return"medium"===this.size},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"large",{get:function(){return"large"===this.size},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"giant",{get:function(){return"giant"===this.size},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"rectangle",{get:function(){return"rectangle"===this.shape},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"semiRound",{get:function(){return"semi-round"===this.shape},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"round",{get:function(){return"round"===this.shape},enumerable:!1,configurable:!0}),t.prototype.getInitials=function(){return this.name?this.name.split(" ").map(function(t){return t.charAt(0)}).splice(0,2).join("").toUpperCase():""},t.\u0275fac=function(e){return new(e||t)(o.Y36(r.H7))},t.\u0275cmp=o.Xpm({type:t,selectors:[["nb-user"]],hostVars:16,hostBindings:function(t,e){2&t&&o.ekj("size-tiny",e.tiny)("size-small",e.small)("size-medium",e.medium)("size-large",e.large)("size-giant",e.giant)("shape-rectangle",e.rectangle)("shape-semi-round",e.semiRound)("shape-round",e.round)},inputs:{name:"name",title:"title",picture:"picture",color:"color",size:"size",shape:"shape",showName:"showName",showTitle:"showTitle",showInitials:"showInitials",onlyPicture:"onlyPicture",badgeText:"badgeText",badgeStatus:"badgeStatus",badgePosition:"badgePosition"},decls:6,vars:4,consts:[[1,"user-container"],["class","user-picture image",3,"background-image",4,"ngIf"],["class","user-picture initials",3,"background-color",4,"ngIf"],[1,"info-container"],["class","user-name",4,"ngIf"],["class","user-title",4,"ngIf"],[1,"user-picture","image"],[3,"text","status","position",4,"ngIf"],[3,"text","status","position"],[1,"user-picture","initials"],[4,"ngIf"],[1,"user-name"],[1,"user-title"]],template:function(t,e){1&t&&(o.TgZ(0,"div",0),o.YNc(1,u,2,3,"div",1),o.YNc(2,h,3,4,"div",2),o.TgZ(3,"div",3),o.YNc(4,l,2,1,"div",4),o.YNc(5,d,2,1,"div",5),o.qZA(),o.qZA()),2&t&&(o.xp6(1),o.Q6J("ngIf",e.imageBackgroundStyle),o.xp6(1),o.Q6J("ngIf",!e.imageBackgroundStyle),o.xp6(2),o.Q6J("ngIf",e.showName&&e.name),o.xp6(1),o.Q6J("ngIf",e.showTitle&&e.title))},directives:[s.O5,a.n],styles:["[_nghost-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex}[_nghost-%COMP%]   .user-container[_ngcontent-%COMP%]{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}[_nghost-%COMP%]   .user-picture[_ngcontent-%COMP%]{position:relative;-ms-flex-negative:0;flex-shrink:0}[_nghost-%COMP%]   .user-picture.image[_ngcontent-%COMP%]{background-size:cover;background-repeat:no-repeat}[_nghost-%COMP%]   .user-picture.initials[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}[dir=rtl]   [_nghost-%COMP%]   .user-name[_ngcontent-%COMP%], [dir=rtl]\n[_nghost-%COMP%]   .user-title[_ngcontent-%COMP%]{text-align:right}[dir=ltr]   [_nghost-%COMP%]   .info-container[_ngcontent-%COMP%]{margin-left:.5rem}[dir=rtl]   [_nghost-%COMP%]   .info-container[_ngcontent-%COMP%]{margin-right:.5rem}"]}),t}()},11241:function(t,e,n){"use strict";n.d(e,{A:function(){return s}});var i=n(75656),o=(n(72349),n(69144)),r=n(11785),s=function(){function t(){}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[i.P,o.j]]}),t}()},58182:function(t,e,n){"use strict";n.d(e,{D:function(){return i}});var i=["Lemons","Raspberries","Strawberries","Blackberries","Kiwis","Grapefruit","Avocado","Watermelon","Cantaloupe","Oranges","Peaches"]}}]);