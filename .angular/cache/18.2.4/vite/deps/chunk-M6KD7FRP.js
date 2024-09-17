import {
  TUI_ANIMATIONS_SPEED,
  TUI_CLOSE_WORD,
  TUI_COMMON_ICONS,
  TuiButton,
  TuiIcons,
  TuiLoader,
  TuiWithAppearance,
  TuiWithIcons,
  tuiAppearanceOptionsProvider,
  tuiButtonOptionsProvider,
  tuiFadeIn,
  tuiHeightCollapse,
  tuiLinkOptionsProvider,
  tuiParentAnimation,
  tuiSlideIn,
  tuiToAnimationOptions
} from "./chunk-Q7UIJALW.js";
import {
  POLYMORPHEUS_CONTEXT,
  PolymorpheusOutlet,
  TUI_IS_MOBILE,
  TuiMapperPipe,
  TuiPopoverDirective,
  TuiPopoverService,
  injectContext,
  takeUntilDestroyed,
  toSignal,
  tuiAsPopover,
  tuiCreateToken,
  tuiCreateTokenFromFactory,
  tuiInjectElement,
  tuiIsString,
  tuiProvideOptions,
  tuiWithStyles
} from "./chunk-AFJCKK4D.js";
import {
  AsyncPipe,
  CommonModule,
  NgComponentOutlet,
  NgForOf,
  NgIf,
  NgTemplateOutlet
} from "./chunk-5AGLOXOG.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  DestroyRef,
  Directive,
  INJECTOR$1,
  Injectable,
  Injector,
  Input,
  TemplateRef,
  ViewChild,
  ViewEncapsulation$1,
  inject,
  setClassMetadata,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵsyntheticHostProperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-NI274R75.js";
import {
  BehaviorSubject,
  EMPTY,
  __spreadProps,
  __spreadValues,
  combineLatest,
  fromEvent,
  identity,
  map,
  of,
  repeat,
  switchMap,
  takeUntil,
  timer
} from "./chunk-NUC4GERA.js";

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-expand.mjs
var _c0 = ["wrapper"];
var _c1 = ["*"];
function TuiExpandComponent_ng_container_2_tui_loader_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tui-loader", 4);
    ɵɵelementContainer(1, 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("overlay", true)("showLoader", ctx_r0.loading);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.content);
  }
}
function TuiExpandComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵprojection(1);
    ɵɵtemplate(2, TuiExpandComponent_ng_container_2_tui_loader_2_Template, 2, 3, "tui-loader", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.async)("ngIfElse", ctx_r0.content);
  }
}
var _TuiExpandContent = class _TuiExpandContent {
};
_TuiExpandContent.ɵfac = function TuiExpandContent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiExpandContent)();
};
_TuiExpandContent.ɵdir = ɵɵdefineDirective({
  type: _TuiExpandContent,
  selectors: [["", "tuiExpandContent", ""]],
  standalone: true
});
var TuiExpandContent = _TuiExpandContent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiExpandContent, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiExpandContent]"
    }]
  }], null, null);
})();
var State = {
  Idle: 0,
  Loading: 1,
  Prepared: 2,
  Animated: 3
};
var LOADER_HEIGHT = 48;
var TUI_EXPAND_LOADED = "tui-expand-loaded";
var _TuiExpandComponent = class _TuiExpandComponent {
  constructor() {
    this.cdr = inject(ChangeDetectorRef);
    this.destroyRef = inject(DestroyRef);
    this.state = State.Idle;
    this.content = null;
    this.expanded = null;
    this.async = false;
  }
  set expandedSetter(expanded) {
    if (this.expanded === null) {
      this.expanded = expanded;
      return;
    }
    if (this.state !== State.Idle) {
      this.expanded = expanded;
      this.state = State.Animated;
      return;
    }
    this.expanded = expanded;
    this.retrigger(this.async && expanded ? State.Loading : State.Animated);
  }
  get contentVisible() {
    return this.expanded || this.state !== State.Idle;
  }
  get overflow() {
    return this.state !== State.Idle;
  }
  get loading() {
    return !!this.expanded && this.async && this.state === State.Loading;
  }
  get height() {
    const {
      expanded,
      state,
      contentWrapper
    } = this;
    if (expanded && state === State.Prepared || !expanded && state === State.Animated) {
      return 0;
    }
    if (contentWrapper && (!expanded && state === State.Prepared || expanded && state === State.Animated)) {
      return contentWrapper.nativeElement.offsetHeight;
    }
    if (contentWrapper && expanded && state === State.Loading) {
      return Math.max(contentWrapper.nativeElement.offsetHeight, LOADER_HEIGHT);
    }
    return null;
  }
  onTransitionEnd({
    propertyName,
    pseudoElement
  }) {
    if (propertyName === "opacity" && !pseudoElement && this.state === State.Animated) {
      this.state = State.Idle;
    }
  }
  onExpandLoaded(event) {
    event.stopPropagation();
    if (this.state === State.Loading) {
      this.retrigger(State.Animated);
    }
  }
  retrigger(state) {
    this.state = State.Prepared;
    timer(0).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      if (this.state !== State.Prepared) {
        return;
      }
      this.state = state;
      this.cdr.markForCheck();
    });
  }
};
_TuiExpandComponent.ɵfac = function TuiExpandComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiExpandComponent)();
};
_TuiExpandComponent.ɵcmp = ɵɵdefineComponent({
  type: _TuiExpandComponent,
  selectors: [["tui-expand"]],
  contentQueries: function TuiExpandComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, TuiExpandContent, 5, TemplateRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.content = _t.first);
    }
  },
  viewQuery: function TuiExpandComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentWrapper = _t.first);
    }
  },
  hostAttrs: ["ngSkipHydration", "true"],
  hostVars: 9,
  hostBindings: function TuiExpandComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("transitionend.self", function TuiExpandComponent_transitionend_self_HostBindingHandler($event) {
        return ctx.onTransitionEnd($event);
      })("tui-expand-loaded", function TuiExpandComponent_tui_expand_loaded_HostBindingHandler($event) {
        return ctx.onExpandLoaded($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("aria-expanded", ctx.expanded);
      ɵɵstyleProp("height", ctx.height, "px");
      ɵɵclassProp("_loading", ctx.loading)("_overflow", ctx.overflow)("_expanded", ctx.expanded);
    }
  },
  inputs: {
    async: "async",
    expandedSetter: [0, "expanded", "expandedSetter"]
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c1,
  decls: 3,
  vars: 3,
  consts: [["wrapper", ""], [1, "t-wrapper"], [4, "ngIf"], ["size", "l", 3, "overlay", "showLoader", 4, "ngIf", "ngIfElse"], ["size", "l", 3, "overlay", "showLoader"], [3, "ngTemplateOutlet"]],
  template: function TuiExpandComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 1, 0);
      ɵɵtemplate(2, TuiExpandComponent_ng_container_2_Template, 3, 2, "ng-container", 2);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("@tuiParentAnimation", void 0)("@.disabled", ctx.overflow);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.contentVisible);
    }
  },
  dependencies: [NgIf, NgTemplateOutlet, TuiLoader],
  styles: ['[_nghost-%COMP%]{transition-property:opacity,height,visibility;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;opacity:0;transition-delay:1ms}._overflow[_nghost-%COMP%]{overflow:hidden}._expanded[_nghost-%COMP%]{opacity:1;transform:translateZ(0)}._loading[_nghost-%COMP%]{opacity:.99}.t-wrapper[_ngcontent-%COMP%]:before, .t-wrapper[_ngcontent-%COMP%]:after{content:"";display:table}'],
  data: {
    animation: [tuiParentAnimation]
  },
  changeDetection: 0
});
var TuiExpandComponent = _TuiExpandComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiExpandComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-expand",
      imports: [NgIf, NgTemplateOutlet, TuiLoader],
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [tuiParentAnimation],
      host: {
        ngSkipHydration: "true",
        "[style.height.px]": "height",
        "[class._loading]": "loading",
        "[class._overflow]": "overflow",
        "[class._expanded]": "expanded",
        "[attr.aria-expanded]": "expanded",
        "(transitionend.self)": "onTransitionEnd($event)",
        [`(${TUI_EXPAND_LOADED})`]: "onExpandLoaded($event)"
      },
      template: '<div\n    #wrapper\n    class="t-wrapper"\n    @tuiParentAnimation\n    [@.disabled]="overflow"\n>\n    <ng-container *ngIf="contentVisible">\n        <ng-content />\n        <tui-loader\n            *ngIf="async; else content"\n            size="l"\n            [overlay]="true"\n            [showLoader]="loading"\n        >\n            <ng-container [ngTemplateOutlet]="content" />\n        </tui-loader>\n    </ng-container>\n</div>\n',
      styles: [':host{transition-property:opacity,height,visibility;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;opacity:0;transition-delay:1ms}:host._overflow{overflow:hidden}:host._expanded{opacity:1;transform:translateZ(0)}:host._loading{opacity:.99}.t-wrapper:before,.t-wrapper:after{content:"";display:table}\n']
    }]
  }], null, {
    contentWrapper: [{
      type: ViewChild,
      args: ["wrapper"]
    }],
    content: [{
      type: ContentChild,
      args: [TuiExpandContent, {
        read: TemplateRef
      }]
    }],
    async: [{
      type: Input
    }],
    expandedSetter: [{
      type: Input,
      args: ["expanded"]
    }]
  });
})();
var TuiExpand = [TuiExpandComponent, TuiExpandContent];

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-notification.mjs
var ICONS = {
  info: "@tui.info",
  success: "@tui.circle-check",
  error: "@tui.circle-x",
  warning: "@tui.circle-alert",
  neutral: "@tui.info"
};
var TUI_NOTIFICATION_DEFAULT_OPTIONS = {
  appearance: "info",
  icon: (appearance) => ICONS[appearance] ?? "",
  size: "l"
};
var TUI_NOTIFICATION_OPTIONS = tuiCreateToken(TUI_NOTIFICATION_DEFAULT_OPTIONS);
function tuiNotificationOptionsProvider(options) {
  return tuiProvideOptions(TUI_NOTIFICATION_OPTIONS, options, TUI_NOTIFICATION_DEFAULT_OPTIONS);
}
var _TuiNotificationStyles = class _TuiNotificationStyles {
};
_TuiNotificationStyles.ɵfac = function TuiNotificationStyles_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiNotificationStyles)();
};
_TuiNotificationStyles.ɵcmp = ɵɵdefineComponent({
  type: _TuiNotificationStyles,
  selectors: [["ng-component"]],
  hostAttrs: [1, "tui-notification"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 0,
  vars: 0,
  template: function TuiNotificationStyles_Template(rf, ctx) {
  },
  styles: ["tui-notification,[tuiNotification]{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;position:relative;display:flex;max-block-size:100%;color:var(--tui-text-primary);gap:.5rem;padding:1rem;font:var(--tui-font-text-m);border-radius:var(--tui-radius-l);box-sizing:border-box;overflow:hidden;text-align:start;text-decoration:none}tui-notification:after,[tuiNotification]:after{font-size:1rem;margin:0 -.25rem 0 auto;align-self:center;color:var(--tui-text-tertiary)!important}tui-notification[data-size=s],[tuiNotification][data-size=s]{gap:.5rem;padding:.375rem .625rem;font:var(--tui-font-text-s);border-radius:var(--tui-radius-m)}tui-notification[data-size=s]:before,[tuiNotification][data-size=s]:before,tui-notification[data-size=s] tui-icon,[tuiNotification][data-size=s] tui-icon{font-size:1rem;margin-top:.125rem;margin-bottom:.125rem}tui-notification[data-size=s] [tuiTitle],[tuiNotification][data-size=s] [tuiTitle]{font:var(--tui-font-text-s);font-weight:700}tui-notification[data-size=s] [tuiSubtitle],[tuiNotification][data-size=s] [tuiSubtitle]{font:var(--tui-font-text-s)}tui-notification[data-size=s] [tuiSubtitle]+*,[tuiNotification][data-size=s] [tuiSubtitle]+*{gap:1rem;margin:.375rem 0 .25rem}tui-notification[data-size=s]>[tuiIconButton],[tuiNotification][data-size=s]>[tuiIconButton]{margin:-.375rem -.625rem -.375rem auto}tui-notification[data-size=m],[tuiNotification][data-size=m]{gap:.375rem;padding:.75rem;font:var(--tui-font-text-s);border-radius:var(--tui-radius-m)}tui-notification[data-size=m]:before,[tuiNotification][data-size=m]:before,tui-notification[data-size=m] tui-icon,[tuiNotification][data-size=m] tui-icon{font-size:1.25rem}tui-notification[data-size=m] [tuiTitle],[tuiNotification][data-size=m] [tuiTitle]{font:var(--tui-font-text-ui-m);font-weight:700}tui-notification[data-size=m] [tuiSubtitle],[tuiNotification][data-size=m] [tuiSubtitle]{font:var(--tui-font-text-s)}tui-notification[data-size=m] [tuiSubtitle]+*,[tuiNotification][data-size=m] [tuiSubtitle]+*{gap:1rem;margin:.625rem 0 .25rem}tui-notification[data-size=m]>[tuiIconButton],[tuiNotification][data-size=m]>[tuiIconButton]{margin:-.375rem -.25rem -.375rem auto}tui-notification [tuiTitle],[tuiNotification] [tuiTitle]{gap:.125rem;font:var(--tui-font-text-ui-l);font-weight:700}tui-notification [tuiSubtitle],[tuiNotification] [tuiSubtitle]{font:var(--tui-font-text-m)}tui-notification [tuiSubtitle]+*,[tuiNotification] [tuiSubtitle]+*{display:flex;align-items:center;gap:1.25rem;margin-top:.625rem;font:var(--tui-font-text-s)}tui-notification>[tuiIconButton],[tuiNotification]>[tuiIconButton]{box-shadow:none!important;background:transparent!important;margin:-.25rem -.25rem -.25rem auto}[tuiNotification]{cursor:pointer}\n"],
  encapsulation: 2,
  changeDetection: 0
});
var TuiNotificationStyles = _TuiNotificationStyles;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNotificationStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-notification"
      },
      styles: ["tui-notification,[tuiNotification]{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;position:relative;display:flex;max-block-size:100%;color:var(--tui-text-primary);gap:.5rem;padding:1rem;font:var(--tui-font-text-m);border-radius:var(--tui-radius-l);box-sizing:border-box;overflow:hidden;text-align:start;text-decoration:none}tui-notification:after,[tuiNotification]:after{font-size:1rem;margin:0 -.25rem 0 auto;align-self:center;color:var(--tui-text-tertiary)!important}tui-notification[data-size=s],[tuiNotification][data-size=s]{gap:.5rem;padding:.375rem .625rem;font:var(--tui-font-text-s);border-radius:var(--tui-radius-m)}tui-notification[data-size=s]:before,[tuiNotification][data-size=s]:before,tui-notification[data-size=s] tui-icon,[tuiNotification][data-size=s] tui-icon{font-size:1rem;margin-top:.125rem;margin-bottom:.125rem}tui-notification[data-size=s] [tuiTitle],[tuiNotification][data-size=s] [tuiTitle]{font:var(--tui-font-text-s);font-weight:700}tui-notification[data-size=s] [tuiSubtitle],[tuiNotification][data-size=s] [tuiSubtitle]{font:var(--tui-font-text-s)}tui-notification[data-size=s] [tuiSubtitle]+*,[tuiNotification][data-size=s] [tuiSubtitle]+*{gap:1rem;margin:.375rem 0 .25rem}tui-notification[data-size=s]>[tuiIconButton],[tuiNotification][data-size=s]>[tuiIconButton]{margin:-.375rem -.625rem -.375rem auto}tui-notification[data-size=m],[tuiNotification][data-size=m]{gap:.375rem;padding:.75rem;font:var(--tui-font-text-s);border-radius:var(--tui-radius-m)}tui-notification[data-size=m]:before,[tuiNotification][data-size=m]:before,tui-notification[data-size=m] tui-icon,[tuiNotification][data-size=m] tui-icon{font-size:1.25rem}tui-notification[data-size=m] [tuiTitle],[tuiNotification][data-size=m] [tuiTitle]{font:var(--tui-font-text-ui-m);font-weight:700}tui-notification[data-size=m] [tuiSubtitle],[tuiNotification][data-size=m] [tuiSubtitle]{font:var(--tui-font-text-s)}tui-notification[data-size=m] [tuiSubtitle]+*,[tuiNotification][data-size=m] [tuiSubtitle]+*{gap:1rem;margin:.625rem 0 .25rem}tui-notification[data-size=m]>[tuiIconButton],[tuiNotification][data-size=m]>[tuiIconButton]{margin:-.375rem -.25rem -.375rem auto}tui-notification [tuiTitle],[tuiNotification] [tuiTitle]{gap:.125rem;font:var(--tui-font-text-ui-l);font-weight:700}tui-notification [tuiSubtitle],[tuiNotification] [tuiSubtitle]{font:var(--tui-font-text-m)}tui-notification [tuiSubtitle]+*,[tuiNotification] [tuiSubtitle]+*{display:flex;align-items:center;gap:1.25rem;margin-top:.625rem;font:var(--tui-font-text-s)}tui-notification>[tuiIconButton],[tuiNotification]>[tuiIconButton]{box-shadow:none!important;background:transparent!important;margin:-.25rem -.25rem -.25rem auto}[tuiNotification]{cursor:pointer}\n"]
    }]
  }], null, null);
})();
var _TuiNotification = class _TuiNotification {
  constructor() {
    this.options = inject(TUI_NOTIFICATION_OPTIONS);
    this.nothing = tuiWithStyles(TuiNotificationStyles);
    this.icons = inject(TuiIcons);
    this.appearance = this.options.appearance;
    this.icon = this.options.icon;
    this.size = this.options.size;
  }
  ngOnInit() {
    this.refresh();
  }
  ngOnChanges() {
    this.refresh();
  }
  refresh() {
    this.icons.iconStart = tuiIsString(this.icon) ? this.icon : this.icon(this.appearance);
  }
};
_TuiNotification.ɵfac = function TuiNotification_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiNotification)();
};
_TuiNotification.ɵdir = ɵɵdefineDirective({
  type: _TuiNotification,
  selectors: [["tui-notification"], ["a", "tuiNotification", ""], ["button", "tuiNotification", ""]],
  hostVars: 1,
  hostBindings: function TuiNotification_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("data-size", ctx.size);
    }
  },
  inputs: {
    appearance: "appearance",
    icon: "icon",
    size: "size"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([tuiAppearanceOptionsProvider(TUI_NOTIFICATION_OPTIONS), tuiLinkOptionsProvider({
    appearance: "",
    pseudo: true
  }), tuiButtonOptionsProvider({
    appearance: "whiteblock",
    size: "s"
  })]), ɵɵHostDirectivesFeature([TuiWithIcons, TuiWithAppearance]), ɵɵNgOnChangesFeature]
});
var TuiNotification = _TuiNotification;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNotification, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "tui-notification,a[tuiNotification],button[tuiNotification]",
      providers: [tuiAppearanceOptionsProvider(TUI_NOTIFICATION_OPTIONS), tuiLinkOptionsProvider({
        appearance: "",
        pseudo: true
      }), tuiButtonOptionsProvider({
        appearance: "whiteblock",
        size: "s"
      })],
      hostDirectives: [TuiWithIcons, TuiWithAppearance],
      host: {
        "[attr.data-size]": "size"
      }
    }]
  }], null, {
    appearance: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    size: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-title.mjs
var _TuiTitleStyles = class _TuiTitleStyles {
};
_TuiTitleStyles.ɵfac = function TuiTitleStyles_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiTitleStyles)();
};
_TuiTitleStyles.ɵcmp = ɵɵdefineComponent({
  type: _TuiTitleStyles,
  selectors: [["ng-component"]],
  hostAttrs: [1, "tui-title"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 0,
  vars: 0,
  template: function TuiTitleStyles_Template(rf, ctx) {
  },
  styles: ["[tuiTitle]{position:relative;display:flex;flex-direction:column;text-align:start;gap:.25rem;margin:0;font:var(--tui-font-text-ui-m)}[tuiTitle][data-size=s]{gap:.125rem;font:var(--tui-font-text-s)}[tuiTitle][data-size=s] [tuiSubtitle]{font:var(--tui-font-text-xs)}[tuiTitle][data-size=m]{gap:.125rem;font:var(--tui-font-heading-5)}[tuiTitle][data-size=m] [tuiSubtitle]{font:var(--tui-font-text-m)}[tuiTitle][data-size=l]{gap:.5rem;font:var(--tui-font-heading-3)}[tuiTitle][data-size=l] [tuiSubtitle]{font:var(--tui-font-text-m)}[tuiSubtitle]{font:var(--tui-font-text-ui-s)}\n"],
  encapsulation: 2,
  changeDetection: 0
});
var TuiTitleStyles = _TuiTitleStyles;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTitleStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-title"
      },
      styles: ["[tuiTitle]{position:relative;display:flex;flex-direction:column;text-align:start;gap:.25rem;margin:0;font:var(--tui-font-text-ui-m)}[tuiTitle][data-size=s]{gap:.125rem;font:var(--tui-font-text-s)}[tuiTitle][data-size=s] [tuiSubtitle]{font:var(--tui-font-text-xs)}[tuiTitle][data-size=m]{gap:.125rem;font:var(--tui-font-heading-5)}[tuiTitle][data-size=m] [tuiSubtitle]{font:var(--tui-font-text-m)}[tuiTitle][data-size=l]{gap:.5rem;font:var(--tui-font-heading-3)}[tuiTitle][data-size=l] [tuiSubtitle]{font:var(--tui-font-text-m)}[tuiSubtitle]{font:var(--tui-font-text-ui-s)}\n"]
    }]
  }], null, null);
})();
var _TuiTitle = class _TuiTitle {
  constructor() {
    this.nothing = tuiWithStyles(TuiTitleStyles);
    this.size = "";
  }
};
_TuiTitle.ɵfac = function TuiTitle_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiTitle)();
};
_TuiTitle.ɵdir = ɵɵdefineDirective({
  type: _TuiTitle,
  selectors: [["", "tuiTitle", ""]],
  hostAttrs: ["tuiTitle", ""],
  hostVars: 1,
  hostBindings: function TuiTitle_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("data-size", ctx.size || null);
    }
  },
  inputs: {
    size: [0, "tuiTitle", "size"]
  },
  standalone: true
});
var TuiTitle = _TuiTitle;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTitle, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiTitle]",
      host: {
        tuiTitle: "",
        "[attr.data-size]": "size || null"
      }
    }]
  }], null, {
    size: [{
      type: Input,
      args: ["tuiTitle"]
    }]
  });
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-alert.mjs
function TuiAlertComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r1, " ");
  }
}
function TuiAlertComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 6);
  }
  if (rf & 2) {
    const text_r2 = ctx.polymorpheusOutlet;
    ɵɵproperty("innerHTML", text_r2, ɵɵsanitizeHtml);
  }
}
function TuiAlertComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 7);
    ɵɵlistener("click", function TuiAlertComponent_button_5_Template_button_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.item.$implicit.complete());
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("iconStart", ctx_r3.icons.close);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r3.close(), " ");
  }
}
function TuiAlerts_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 3);
    ɵɵpipe(1, "tuiMapper");
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngComponentOutlet", item_r1.component.component)("ngComponentOutletInjector", ɵɵpipeBind2(1, 2, item_r1, ctx_r1.mapper));
  }
}
function TuiAlerts_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, TuiAlerts_div_0_ng_container_1_Template, 2, 5, "ng-container", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const group_r3 = ctx.$implicit;
    ɵɵproperty("@tuiParentAnimation", void 0);
    ɵɵadvance();
    ɵɵproperty("ngForOf", group_r3);
  }
}
var TUI_ALERT_DEFAULT_OPTIONS = {
  autoClose: 3e3,
  label: "",
  closeable: true,
  data: void 0
};
var TUI_ALERT_OPTIONS = tuiCreateTokenFromFactory(() => __spreadValues(__spreadValues({}, TUI_ALERT_DEFAULT_OPTIONS), inject(TUI_NOTIFICATION_OPTIONS)));
var TUI_ALERT_POSITION = tuiCreateTokenFromFactory(() => inject(TUI_IS_MOBILE) ? "1rem 1rem 0 auto" : "2rem 3rem 0 auto");
var TUI_ALERTS = tuiCreateToken(new BehaviorSubject([]));
var TUI_ALERTS_GROUPED = tuiCreateTokenFromFactory(() => combineLatest([of(/* @__PURE__ */ new Map()), inject(TUI_ALERTS)]).pipe(map(([map2, alerts]) => {
  map2.forEach((_, key) => map2.set(key, []));
  alerts.forEach((alert) => {
    const key = alert.component.component;
    const value = map2.get(key) || [];
    map2.set(key, [...value, alert]);
  });
  return Array.from(map2.values());
})));
var _TuiAlertComponent = class _TuiAlertComponent {
  constructor() {
    this.el = tuiInjectElement();
    this.icons = inject(TUI_COMMON_ICONS);
    this.options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
    this.close = toSignal(inject(TUI_CLOSE_WORD));
    this.position = inject(TUI_ALERT_POSITION);
    this.item = injectContext();
    this.animation = this.position.endsWith("auto") ? __spreadProps(__spreadValues({}, this.options), {
      value: "right"
    }) : __spreadProps(__spreadValues({}, this.options), {
      value: "left"
    });
    this.sub = of(typeof this.item.autoClose === "function" ? this.item.autoClose(this.item.appearance) : this.item.autoClose).pipe(switchMap((autoClose) => autoClose ? timer(autoClose) : EMPTY), takeUntil(fromEvent(this.el, "mouseenter")), repeat({
      delay: () => fromEvent(this.el, "mouseleave")
    }), takeUntilDestroyed()).subscribe(() => this.item.$implicit.complete());
  }
};
_TuiAlertComponent.ɵfac = function TuiAlertComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiAlertComponent)();
};
_TuiAlertComponent.ɵcmp = ɵɵdefineComponent({
  type: _TuiAlertComponent,
  selectors: [["tui-alert"]],
  hostAttrs: ["role", "alert"],
  hostVars: 5,
  hostBindings: function TuiAlertComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵsyntheticHostProperty("@tuiFadeIn", ctx.options)("@tuiSlideIn", ctx.animation)("@tuiHeightCollapse", ctx.animation);
      ɵɵstyleProp("margin", ctx.position);
    }
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 6,
  vars: 7,
  consts: [["size", "m", 3, "appearance", "icon"], ["tuiTitle", ""], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["tuiSubtitle", ""], [3, "innerHTML", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["tuiIconButton", "", "type", "button", 3, "iconStart", "click", 4, "ngIf"], [3, "innerHTML"], ["tuiIconButton", "", "type", "button", 3, "click", "iconStart"]],
  template: function TuiAlertComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "tui-notification", 0)(1, "span", 1);
      ɵɵtemplate(2, TuiAlertComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
      ɵɵelementStart(3, "span", 3);
      ɵɵtemplate(4, TuiAlertComponent_span_4_Template, 1, 1, "span", 4);
      ɵɵelementEnd()();
      ɵɵtemplate(5, TuiAlertComponent_button_5_Template, 2, 2, "button", 5);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("appearance", ctx.item.appearance)("icon", ctx.item.icon);
      ɵɵadvance(2);
      ɵɵproperty("polymorpheusOutlet", ctx.item.label)("polymorpheusOutletContext", ctx.item);
      ɵɵadvance(2);
      ɵɵproperty("polymorpheusOutlet", ctx.item.content)("polymorpheusOutletContext", ctx.item);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.item.closeable);
    }
  },
  dependencies: [NgIf, PolymorpheusOutlet, TuiButton, TuiNotification, TuiTitle],
  styles: ["[_nghost-%COMP%]{display:block;inline-size:18rem;flex-shrink:0;word-break:break-word;background:var(--tui-background-elevation-1);border-radius:var(--tui-radius-m);box-shadow:var(--tui-shadow-medium)}[_nghost-%COMP%]:not(:first-child){margin-top:.75rem!important}[_nghost-%COMP%]:not(:last-child){margin-bottom:0!important}"],
  data: {
    animation: [tuiFadeIn, tuiSlideIn, tuiHeightCollapse]
  },
  changeDetection: 0
});
var TuiAlertComponent = _TuiAlertComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAlertComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-alert",
      imports: [NgIf, PolymorpheusOutlet, TuiButton, TuiNotification, TuiTitle],
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [tuiFadeIn, tuiSlideIn, tuiHeightCollapse],
      host: {
        role: "alert",
        "[style.margin]": "position",
        "[@tuiFadeIn]": "options",
        "[@tuiSlideIn]": "animation",
        "[@tuiHeightCollapse]": "animation"
      },
      template: '<tui-notification\n    size="m"\n    [appearance]="item.appearance"\n    [icon]="item.icon"\n>\n    <span tuiTitle>\n        <ng-container *polymorpheusOutlet="item.label as text; context: item">\n            {{ text }}\n        </ng-container>\n        <span tuiSubtitle>\n            <span\n                *polymorpheusOutlet="item.content as text; context: item"\n                [innerHTML]="text"\n            ></span>\n        </span>\n    </span>\n    <button\n        *ngIf="item.closeable"\n        tuiIconButton\n        type="button"\n        [iconStart]="icons.close"\n        (click)="item.$implicit.complete()"\n    >\n        {{ close() }}\n    </button>\n</tui-notification>\n',
      styles: [":host{display:block;inline-size:18rem;flex-shrink:0;word-break:break-word;background:var(--tui-background-elevation-1);border-radius:var(--tui-radius-m);box-shadow:var(--tui-shadow-medium)}:host:not(:first-child){margin-top:.75rem!important}:host:not(:last-child){margin-bottom:0!important}\n"]
    }]
  }], null, null);
})();
var _TuiAlertService = class _TuiAlertService extends TuiPopoverService {
};
_TuiAlertService.ɵfac = /* @__PURE__ */ (() => {
  let ɵTuiAlertService_BaseFactory;
  return function TuiAlertService_Factory(__ngFactoryType__) {
    return (ɵTuiAlertService_BaseFactory || (ɵTuiAlertService_BaseFactory = ɵɵgetInheritedFactory(_TuiAlertService)))(__ngFactoryType__ || _TuiAlertService);
  };
})();
_TuiAlertService.ɵprov = ɵɵdefineInjectable({
  token: _TuiAlertService,
  factory: () => (() => new _TuiAlertService(TUI_ALERTS, TuiAlertComponent, inject(TUI_ALERT_OPTIONS)))(),
  providedIn: "root"
});
var TuiAlertService = _TuiAlertService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAlertService, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => new TuiAlertService(TUI_ALERTS, TuiAlertComponent, inject(TUI_ALERT_OPTIONS))
    }]
  }], null, null);
})();
var _TuiAlert = class _TuiAlert extends TuiPopoverDirective {
};
_TuiAlert.ɵfac = /* @__PURE__ */ (() => {
  let ɵTuiAlert_BaseFactory;
  return function TuiAlert_Factory(__ngFactoryType__) {
    return (ɵTuiAlert_BaseFactory || (ɵTuiAlert_BaseFactory = ɵɵgetInheritedFactory(_TuiAlert)))(__ngFactoryType__ || _TuiAlert);
  };
})();
_TuiAlert.ɵdir = ɵɵdefineDirective({
  type: _TuiAlert,
  selectors: [["ng-template", "tuiAlert", ""]],
  inputs: {
    options: [0, "tuiAlertOptions", "options"],
    open: [0, "tuiAlert", "open"]
  },
  outputs: {
    openChange: "tuiAlertChange"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([tuiAsPopover(TuiAlertService)]), ɵɵInheritDefinitionFeature]
});
var TuiAlert = _TuiAlert;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAlert, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-template[tuiAlert]",
      inputs: ["options: tuiAlertOptions", "open: tuiAlert"],
      outputs: ["openChange: tuiAlertChange"],
      providers: [tuiAsPopover(TuiAlertService)]
    }]
  }], null, null);
})();
var _TuiAlerts = class _TuiAlerts {
  constructor() {
    this.injector = inject(INJECTOR$1);
    this.alerts$ = inject(TUI_ALERTS_GROUPED);
    this.trackBy = identity;
    this.mapper = (useValue) => Injector.create({
      providers: [{
        provide: POLYMORPHEUS_CONTEXT,
        useValue
      }],
      parent: this.injector
    });
  }
};
_TuiAlerts.ɵfac = function TuiAlerts_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiAlerts)();
};
_TuiAlerts.ɵcmp = ɵɵdefineComponent({
  type: _TuiAlerts,
  selectors: [["tui-alerts"]],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 2,
  vars: 4,
  consts: [["class", "t-wrapper", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "t-wrapper"], [3, "ngComponentOutlet", "ngComponentOutletInjector", 4, "ngFor", "ngForOf"], [3, "ngComponentOutlet", "ngComponentOutletInjector"]],
  template: function TuiAlerts_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, TuiAlerts_div_0_Template, 2, 2, "div", 0);
      ɵɵpipe(1, "async");
    }
    if (rf & 2) {
      ɵɵproperty("ngForOf", ɵɵpipeBind1(1, 2, ctx.alerts$))("ngForTrackBy", ctx.trackBy);
    }
  },
  dependencies: [CommonModule, NgComponentOutlet, NgForOf, AsyncPipe, TuiMapperPipe],
  styles: ["tui-alerts>.t-wrapper{position:fixed;top:0;left:0;inline-size:100%;block-size:100%;display:flex;flex-direction:column;pointer-events:none}tui-alerts>.t-wrapper>*{pointer-events:auto}\n"],
  encapsulation: 2,
  data: {
    animation: [tuiParentAnimation]
  }
});
var TuiAlerts = _TuiAlerts;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAlerts, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-alerts",
      imports: [CommonModule, TuiMapperPipe],
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.Default,
      animations: [tuiParentAnimation],
      template: '<div\n    *ngFor="let group of alerts$ | async; trackBy: trackBy"\n    class="t-wrapper"\n    @tuiParentAnimation\n>\n    <ng-container\n        *ngFor="let item of group"\n        [ngComponentOutlet]="item.component.component"\n        [ngComponentOutletInjector]="item | tuiMapper: mapper"\n    />\n</div>\n',
      styles: ["tui-alerts>.t-wrapper{position:fixed;top:0;left:0;inline-size:100%;block-size:100%;display:flex;flex-direction:column;pointer-events:none}tui-alerts>.t-wrapper>*{pointer-events:auto}\n"]
    }]
  }], null, null);
})();

export {
  TuiExpandContent,
  TUI_EXPAND_LOADED,
  TuiExpandComponent,
  TuiExpand,
  TUI_NOTIFICATION_DEFAULT_OPTIONS,
  TUI_NOTIFICATION_OPTIONS,
  tuiNotificationOptionsProvider,
  TuiNotification,
  TuiTitle,
  TUI_ALERT_DEFAULT_OPTIONS,
  TUI_ALERT_OPTIONS,
  TUI_ALERT_POSITION,
  TUI_ALERTS,
  TUI_ALERTS_GROUPED,
  TuiAlertComponent,
  TuiAlertService,
  TuiAlert,
  TuiAlerts
};
//# sourceMappingURL=chunk-M6KD7FRP.js.map
