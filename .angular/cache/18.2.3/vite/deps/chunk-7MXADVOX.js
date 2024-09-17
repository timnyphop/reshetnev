import {
  TUI_ANIMATIONS_SPEED,
  TUI_COMMON_ICONS,
  TUI_DATA_LIST_HOST,
  TUI_VIEWPORT,
  TuiAppearance,
  TuiButton,
  TuiDriver,
  TuiDriverDirective,
  TuiDropdownDirective,
  TuiPositionAccessor,
  TuiPositionService,
  TuiRectAccessor,
  TuiVisualViewportService,
  TuiWithDropdownOpen,
  TuiWithIcons,
  WaResizeObserver,
  tuiAppearance,
  tuiAppearanceFocus,
  tuiAppearanceState,
  tuiAsDataListHost,
  tuiAsDriver,
  tuiAsRectAccessor,
  tuiAsVehicle,
  tuiDropdown,
  tuiDropdownOpen,
  tuiDropdownOptionsProvider,
  tuiFadeIn,
  tuiFallbackAccessor,
  tuiIsObscured,
  tuiOverrideOptions,
  tuiParentAnimation,
  tuiPositionAccessorFor,
  tuiRectAccessorFor,
  tuiToAnimationOptions
} from "./chunk-M7KV4JTE.js";
import {
  TuiNativeValidator
} from "./chunk-UVUYYXJN.js";
import {
  EMPTY_CLIENT_RECT,
  POLYMORPHEUS_CONTEXT,
  PolymorpheusComponent,
  PolymorpheusOutlet,
  PolymorpheusTemplate,
  TuiActiveZone,
  TuiHoveredService,
  WA_NAVIGATOR,
  takeUntilDestroyed,
  tuiClamp,
  tuiCreateToken,
  tuiCreateTokenFromFactory,
  tuiFocusedIn,
  tuiIfMap,
  tuiInjectElement,
  tuiInjectId,
  tuiIsNativeFocused,
  tuiIsPresent,
  tuiPointToClientRect,
  tuiProvide,
  tuiProvideOptions,
  tuiPure,
  tuiPx,
  tuiTypedFromEvent,
  tuiWithStyles,
  tuiZoneOptimized
} from "./chunk-IDV3SLH5.js";
import {
  NgControl
} from "./chunk-A6CXCBMF.js";
import {
  CommonModule,
  DOCUMENT,
  NgForOf,
  NgIf
} from "./chunk-ET6A4XZJ.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  DestroyRef,
  Directive,
  ElementRef,
  INJECTOR$1,
  Injectable,
  Input,
  Optional,
  SkipSelf,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  computed,
  forwardRef,
  inject,
  setClassMetadata,
  signal,
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
  ɵɵhostProperty,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵsyntheticHostProperty,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-TMZGPDKF.js";
import {
  BehaviorSubject,
  Subject,
  __async,
  __decorate,
  __spreadProps,
  __spreadValues,
  debounce,
  delay,
  distinctUntilChanged,
  filter,
  fromEvent,
  map,
  merge,
  of,
  repeat,
  skip,
  startWith,
  switchMap,
  takeUntil,
  takeWhile,
  tap,
  timer
} from "./chunk-NUC4GERA.js";

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-group.mjs
var TUI_GROUP_DEFAULT_OPTIONS = {
  size: "l",
  collapsed: false,
  rounded: true,
  orientation: "horizontal"
};
var TUI_GROUP_OPTIONS = tuiCreateToken(TUI_GROUP_DEFAULT_OPTIONS);
function tuiGroupOptionsProvider(options) {
  return tuiProvideOptions(TUI_GROUP_OPTIONS, options, TUI_GROUP_DEFAULT_OPTIONS);
}
var _TuiGroupStyles = class _TuiGroupStyles {
};
_TuiGroupStyles.ɵfac = function TuiGroupStyles_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiGroupStyles)();
};
_TuiGroupStyles.ɵcmp = ɵɵdefineComponent({
  type: _TuiGroupStyles,
  selectors: [["ng-component"]],
  hostAttrs: [1, "tui-group"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 0,
  vars: 0,
  template: function TuiGroupStyles_Template(rf, ctx) {
  },
  styles: ["[tuiGroup]{position:relative;display:flex;isolation:isolate;--t-group-radius: var(--tui-radius-l);--t-group-margin: -1px;--t-group-clip: inset(-1px 1px -1px -1px)}[tuiGroup]>*{z-index:1;flex:1 1 0;min-inline-size:0}[tuiGroup]>*._disabled,[tuiGroup]>*._disabled:hover{z-index:0}[tuiGroup]>*:invalid{z-index:2;--t-group-clip: none}[tuiGroup]>*:invalid:hover{z-index:4}[tuiGroup]>*:has(:invalid),[tuiGroup]>*:has([data-mode=invalid]){z-index:2;--t-group-clip: none}[tuiGroup]>*:has(:invalid):hover,[tuiGroup]>*:has([data-mode=invalid]):hover{z-index:4}[tuiGroup]>*:hover{z-index:3;--t-group-clip: inset(-1px .5px -1px -1px)}[tuiGroup]>*:has([data-state=hover]){z-index:3;--t-group-clip: none}[tuiGroup]>*:focus-within{z-index:5;--t-group-clip: none}[tuiGroup]>*:has([data-focus=true]){z-index:5;--t-group-clip: none}[tuiGroup]>*[data-mode=checked]{z-index:6;--t-group-clip: none}[tuiGroup]>*:has([tuiBlock]:checked){z-index:6;--t-group-clip: none}[tuiGroup]>*:not(:last-child){margin-inline-end:var(--t-group-margin);clip-path:var(--t-group-clip)}[tuiGroup]>*:nth-child(n){border-radius:0}[tuiGroup]>*:first-child{border-top-left-radius:var(--t-group-radius);border-bottom-left-radius:var(--t-group-radius)}[tuiGroup]>*:last-child{border-top-right-radius:var(--t-group-radius);border-bottom-right-radius:var(--t-group-radius)}[tuiGroup][data-size=s],[tuiGroup][data-size=m]{--t-group-radius: var(--tui-radius-m)}[tuiGroup][data-orientation=vertical]{display:inline-flex;flex-direction:column;--t-group-clip: inset(-1px -1px 1px -1px)}[tuiGroup][data-orientation=vertical]>*{min-block-size:auto;flex:0 0 auto}[tuiGroup][data-orientation=vertical]>*:not(:last-child){margin-inline-end:0;margin-block-end:var(--t-group-margin)}[tuiGroup][data-orientation=vertical]>*:first-child{border-radius:var(--t-group-radius) var(--t-group-radius) 0 0}[tuiGroup][data-orientation=vertical]>*:last-child{border-radius:0 0 var(--t-group-radius) var(--t-group-radius)}[tuiGroup][data-orientation=vertical]>*:only-child{border-radius:var(--t-group-radius)}[tuiGroup][data-orientation=vertical]>*:hover{--t-group-clip: inset(-1px -1px .5px -1px)}.tui-group{position:relative;display:flex;isolation:isolate;--t-group-radius: var(--tui-radius-m)}.tui-group>*{flex:1 1 0;min-inline-size:0}.tui-group>*:not(:last-child){margin-right:.125rem}.tui-group.tui-group>*:nth-child(n){border-radius:0}.tui-group_radius_large{--t-group-radius: var(--tui-radius-l)}.tui-group_collapsed>*{z-index:1}.tui-group_collapsed>*:not(:last-child){margin:0 -1px 0 0}.tui-group_collapsed>*._readonly,.tui-group_collapsed>*._disabled,.tui-group_collapsed>*._readonly:hover,.tui-group_collapsed>*._disabled:hover{z-index:0}.tui-group_collapsed>*._invalid{z-index:2}.tui-group_collapsed>*._invalid:hover,.tui-group_collapsed>*._invalid._hovered,.tui-group_collapsed>*._invalid._pressed{z-index:4}.tui-group_collapsed>*:hover,.tui-group_collapsed>*._hovered,.tui-group_collapsed>*._pressed{z-index:3}.tui-group_collapsed>*._hosted_dropdown_focused,.tui-group_collapsed>*._focus-visible,.tui-group_collapsed>*._focused.ng-touched,.tui-group_collapsed>*._focused.ng-untouched{z-index:5}.tui-group_collapsed>*._active,.tui-group_collapsed>*[data-appearance=whiteblock-active]{z-index:6}.tui-group_collapsed>*:has([tuiBlock]:checked){z-index:6}.tui-group_collapsed>*._focus-visible._focused,.tui-group_collapsed>*._focus-visible._active,.tui-group_collapsed>*._focus-visible[data-appearance=whiteblock-active]{z-index:7}.tui-group_orientation_vertical{display:inline-flex;flex-direction:column}.tui-group_orientation_vertical>*{min-block-size:auto;flex:0 0 auto}.tui-group_orientation_vertical>*:not(:last-child){margin-right:0;margin-bottom:.125rem}.tui-group_orientation_vertical.tui-group_collapsed>*:not(:last-child){margin:0 0 -1px}.tui-group_rounded.tui-group_orientation_horizontal>*:first-child{border-top-left-radius:var(--t-group-radius);border-bottom-left-radius:var(--t-group-radius)}.tui-group_rounded.tui-group_orientation_horizontal>*:last-child{border-top-right-radius:var(--t-group-radius);border-bottom-right-radius:var(--t-group-radius)}.tui-group_rounded.tui-group_orientation_vertical>*:first-child{border-top-left-radius:var(--t-group-radius);border-top-right-radius:var(--t-group-radius)}.tui-group_rounded.tui-group_orientation_vertical>*:last-child{border-bottom-left-radius:var(--t-group-radius);border-bottom-right-radius:var(--t-group-radius)}.tui-group__auto-width-item{min-inline-size:auto;flex:0 0 auto}.tui-group__inherit-item{border-radius:inherit!important}\n"],
  encapsulation: 2,
  changeDetection: 0
});
var TuiGroupStyles = _TuiGroupStyles;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiGroupStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-group"
      },
      styles: ["[tuiGroup]{position:relative;display:flex;isolation:isolate;--t-group-radius: var(--tui-radius-l);--t-group-margin: -1px;--t-group-clip: inset(-1px 1px -1px -1px)}[tuiGroup]>*{z-index:1;flex:1 1 0;min-inline-size:0}[tuiGroup]>*._disabled,[tuiGroup]>*._disabled:hover{z-index:0}[tuiGroup]>*:invalid{z-index:2;--t-group-clip: none}[tuiGroup]>*:invalid:hover{z-index:4}[tuiGroup]>*:has(:invalid),[tuiGroup]>*:has([data-mode=invalid]){z-index:2;--t-group-clip: none}[tuiGroup]>*:has(:invalid):hover,[tuiGroup]>*:has([data-mode=invalid]):hover{z-index:4}[tuiGroup]>*:hover{z-index:3;--t-group-clip: inset(-1px .5px -1px -1px)}[tuiGroup]>*:has([data-state=hover]){z-index:3;--t-group-clip: none}[tuiGroup]>*:focus-within{z-index:5;--t-group-clip: none}[tuiGroup]>*:has([data-focus=true]){z-index:5;--t-group-clip: none}[tuiGroup]>*[data-mode=checked]{z-index:6;--t-group-clip: none}[tuiGroup]>*:has([tuiBlock]:checked){z-index:6;--t-group-clip: none}[tuiGroup]>*:not(:last-child){margin-inline-end:var(--t-group-margin);clip-path:var(--t-group-clip)}[tuiGroup]>*:nth-child(n){border-radius:0}[tuiGroup]>*:first-child{border-top-left-radius:var(--t-group-radius);border-bottom-left-radius:var(--t-group-radius)}[tuiGroup]>*:last-child{border-top-right-radius:var(--t-group-radius);border-bottom-right-radius:var(--t-group-radius)}[tuiGroup][data-size=s],[tuiGroup][data-size=m]{--t-group-radius: var(--tui-radius-m)}[tuiGroup][data-orientation=vertical]{display:inline-flex;flex-direction:column;--t-group-clip: inset(-1px -1px 1px -1px)}[tuiGroup][data-orientation=vertical]>*{min-block-size:auto;flex:0 0 auto}[tuiGroup][data-orientation=vertical]>*:not(:last-child){margin-inline-end:0;margin-block-end:var(--t-group-margin)}[tuiGroup][data-orientation=vertical]>*:first-child{border-radius:var(--t-group-radius) var(--t-group-radius) 0 0}[tuiGroup][data-orientation=vertical]>*:last-child{border-radius:0 0 var(--t-group-radius) var(--t-group-radius)}[tuiGroup][data-orientation=vertical]>*:only-child{border-radius:var(--t-group-radius)}[tuiGroup][data-orientation=vertical]>*:hover{--t-group-clip: inset(-1px -1px .5px -1px)}.tui-group{position:relative;display:flex;isolation:isolate;--t-group-radius: var(--tui-radius-m)}.tui-group>*{flex:1 1 0;min-inline-size:0}.tui-group>*:not(:last-child){margin-right:.125rem}.tui-group.tui-group>*:nth-child(n){border-radius:0}.tui-group_radius_large{--t-group-radius: var(--tui-radius-l)}.tui-group_collapsed>*{z-index:1}.tui-group_collapsed>*:not(:last-child){margin:0 -1px 0 0}.tui-group_collapsed>*._readonly,.tui-group_collapsed>*._disabled,.tui-group_collapsed>*._readonly:hover,.tui-group_collapsed>*._disabled:hover{z-index:0}.tui-group_collapsed>*._invalid{z-index:2}.tui-group_collapsed>*._invalid:hover,.tui-group_collapsed>*._invalid._hovered,.tui-group_collapsed>*._invalid._pressed{z-index:4}.tui-group_collapsed>*:hover,.tui-group_collapsed>*._hovered,.tui-group_collapsed>*._pressed{z-index:3}.tui-group_collapsed>*._hosted_dropdown_focused,.tui-group_collapsed>*._focus-visible,.tui-group_collapsed>*._focused.ng-touched,.tui-group_collapsed>*._focused.ng-untouched{z-index:5}.tui-group_collapsed>*._active,.tui-group_collapsed>*[data-appearance=whiteblock-active]{z-index:6}.tui-group_collapsed>*:has([tuiBlock]:checked){z-index:6}.tui-group_collapsed>*._focus-visible._focused,.tui-group_collapsed>*._focus-visible._active,.tui-group_collapsed>*._focus-visible[data-appearance=whiteblock-active]{z-index:7}.tui-group_orientation_vertical{display:inline-flex;flex-direction:column}.tui-group_orientation_vertical>*{min-block-size:auto;flex:0 0 auto}.tui-group_orientation_vertical>*:not(:last-child){margin-right:0;margin-bottom:.125rem}.tui-group_orientation_vertical.tui-group_collapsed>*:not(:last-child){margin:0 0 -1px}.tui-group_rounded.tui-group_orientation_horizontal>*:first-child{border-top-left-radius:var(--t-group-radius);border-bottom-left-radius:var(--t-group-radius)}.tui-group_rounded.tui-group_orientation_horizontal>*:last-child{border-top-right-radius:var(--t-group-radius);border-bottom-right-radius:var(--t-group-radius)}.tui-group_rounded.tui-group_orientation_vertical>*:first-child{border-top-left-radius:var(--t-group-radius);border-top-right-radius:var(--t-group-radius)}.tui-group_rounded.tui-group_orientation_vertical>*:last-child{border-bottom-left-radius:var(--t-group-radius);border-bottom-right-radius:var(--t-group-radius)}.tui-group__auto-width-item{min-inline-size:auto;flex:0 0 auto}.tui-group__inherit-item{border-radius:inherit!important}\n"]
    }]
  }], null, null);
})();
var _TuiGroup = class _TuiGroup {
  constructor() {
    this.options = inject(TUI_GROUP_OPTIONS);
    this.nothing = tuiWithStyles(TuiGroupStyles);
    this.orientation = this.options.orientation;
    this.collapsed = this.options.collapsed;
    this.rounded = this.options.rounded;
    this.size = this.options.size;
  }
};
_TuiGroup.ɵfac = function TuiGroup_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiGroup)();
};
_TuiGroup.ɵdir = ɵɵdefineDirective({
  type: _TuiGroup,
  selectors: [["", "tuiGroup", "", 5, "ng-container"]],
  hostAttrs: ["tuiGroup", "", "role", "group"],
  hostVars: 8,
  hostBindings: function TuiGroup_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("data-orientation", ctx.orientation)("data-size", ctx.size);
      ɵɵstyleProp("--t-group-radius", ctx.rounded ? null : 0)("--t-group-margin", ctx.collapsed ? null : 0.125, "rem")("--t-group-clip", ctx.collapsed ? null : 0.125);
    }
  },
  inputs: {
    orientation: "orientation",
    collapsed: "collapsed",
    rounded: "rounded",
    size: "size"
  },
  standalone: true
});
var TuiGroup = _TuiGroup;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiGroup, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiGroup]:not(ng-container)",
      host: {
        tuiGroup: "",
        role: "group",
        "[attr.data-orientation]": "orientation",
        "[attr.data-size]": "size",
        "[style.--t-group-radius]": "rounded ? null : 0",
        "[style.--t-group-margin.rem]": "collapsed ? null : 0.125",
        "[style.--t-group-clip]": "collapsed ? null : 0.125"
      }
    }]
  }], null, {
    orientation: [{
      type: Input
    }],
    collapsed: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    size: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-label.mjs
var _TuiLabelStyles = class _TuiLabelStyles {
};
_TuiLabelStyles.ɵfac = function TuiLabelStyles_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiLabelStyles)();
};
_TuiLabelStyles.ɵcmp = ɵɵdefineComponent({
  type: _TuiLabelStyles,
  selectors: [["ng-component"]],
  hostAttrs: [1, "tui-label"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 0,
  vars: 0,
  template: function TuiLabelStyles_Template(rf, ctx) {
  },
  styles: ["[tuiLabel]{display:flex;gap:.25rem;flex-direction:column;font:var(--tui-font-text-s);color:var(--tui-text-primary)}[tuiLabel]:not([data-orientation=vertical]){flex-direction:row;inline-size:-webkit-fit-content;inline-size:-moz-fit-content;inline-size:fit-content;font:var(--tui-font-text-m)}[tuiLabel]:has(tui-textfield),[tuiLabel]:has(tui-primitive-textfield),[tuiLabel]:has(tui-textarea){flex-direction:column!important;inline-size:auto!important;font:var(--tui-font-text-s)!important}[tuiLabel] input[type=checkbox],[tuiLabel] input[type=radio]{margin-inline-end:.5rem}[tuiLabel] input[type=checkbox][data-size=s],[tuiLabel] input[type=radio][data-size=s]{margin-inline-end:.25rem;margin-top:.125rem}[tuiLabel] small{font:var(--tui-font-text-s)}[tuiLabel] [tuiTitle]{margin-top:.125rem}[tuiLabel] [tuiSubtitle]{color:var(--tui-text-secondary)}\n"],
  encapsulation: 2,
  changeDetection: 0
});
var TuiLabelStyles = _TuiLabelStyles;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLabelStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-label"
      },
      styles: ["[tuiLabel]{display:flex;gap:.25rem;flex-direction:column;font:var(--tui-font-text-s);color:var(--tui-text-primary)}[tuiLabel]:not([data-orientation=vertical]){flex-direction:row;inline-size:-webkit-fit-content;inline-size:-moz-fit-content;inline-size:fit-content;font:var(--tui-font-text-m)}[tuiLabel]:has(tui-textfield),[tuiLabel]:has(tui-primitive-textfield),[tuiLabel]:has(tui-textarea){flex-direction:column!important;inline-size:auto!important;font:var(--tui-font-text-s)!important}[tuiLabel] input[type=checkbox],[tuiLabel] input[type=radio]{margin-inline-end:.5rem}[tuiLabel] input[type=checkbox][data-size=s],[tuiLabel] input[type=radio][data-size=s]{margin-inline-end:.25rem;margin-top:.125rem}[tuiLabel] small{font:var(--tui-font-text-s)}[tuiLabel] [tuiTitle]{margin-top:.125rem}[tuiLabel] [tuiSubtitle]{color:var(--tui-text-secondary)}\n"]
    }]
  }], null, null);
})();
var _TuiLabel = class _TuiLabel {
  constructor() {
    this.el = tuiInjectElement();
    this.nothing = tuiWithStyles(TuiLabelStyles);
    this.parent = inject(forwardRef(() => TUI_DATA_LIST_HOST), {
      optional: true
    });
  }
};
_TuiLabel.ɵfac = function TuiLabel_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiLabel)();
};
_TuiLabel.ɵdir = ɵɵdefineDirective({
  type: _TuiLabel,
  selectors: [["label", "tuiLabel", ""]],
  contentQueries: function TuiLabel_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, TUI_DATA_LIST_HOST, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.textfield = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function TuiLabel_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("for", ctx.el.htmlFor || (ctx.parent == null ? null : ctx.parent.id))("data-orientation", ctx.textfield ? "vertical" : "horizontal");
    }
  },
  standalone: true
});
var TuiLabel = _TuiLabel;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLabel, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "label[tuiLabel]",
      host: {
        "[attr.for]": "el.htmlFor || parent?.id",
        "[attr.data-orientation]": 'textfield ? "vertical" : "horizontal"'
      }
    }]
  }], null, {
    textfield: [{
      type: ContentChild,
      args: [forwardRef(() => TUI_DATA_LIST_HOST)]
    }]
  });
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-textfield.mjs
var _c0 = ["vcr"];
var _c1 = [[["input"]], [["select"]], [["label"]], "*", [["tui-icon"]]];
var _c2 = ["input", "select", "label", "*", "tui-icon"];
var _c3 = (a0) => ({
  $implicit: a0
});
function TuiTextfieldComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 6);
    ɵɵlistener("click", function TuiTextfieldComponent_button_5_Template_button_click_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.directive == null ? null : ctx_r2.directive.setValue(""));
    })("pointerdown.silent.prevent", function TuiTextfieldComponent_button_5_Template_button_pointerdown_silent_prevent_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.el == null ? null : ctx_r2.el.nativeElement == null ? null : ctx_r2.el.nativeElement.focus());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("iconStart", ctx_r2.icons.close);
  }
}
function TuiTextfieldComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r4 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r4, " ");
  }
}
function TuiTextfieldComponent_input_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "input", 7);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("value", ctx_r2.computedFiller);
  }
}
var _c4 = ["tuiTextfield", ""];
var _c5 = (a0) => [a0];
function TuiSelect_option_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.placeholder, "\n");
  }
}
function TuiSelect_ng_template_1_option_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 0);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", item_r2, " ");
  }
}
function TuiSelect_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TuiSelect_ng_template_1_option_0_Template, 2, 1, "option", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngForOf", ɵɵpureFunction1(1, _c5, ctx_r0.value));
  }
}
var DEFAULT = {
  appearance: "textfield",
  size: "l",
  cleaner: true
};
var TUI_TEXTFIELD_OPTIONS = tuiCreateToken({
  appearance: signal(DEFAULT.appearance),
  size: signal(DEFAULT.size),
  cleaner: signal(DEFAULT.cleaner)
});
function tuiTextfieldOptionsProvider(options) {
  return {
    provide: TUI_TEXTFIELD_OPTIONS,
    deps: [[new Optional(), new SkipSelf(), TUI_TEXTFIELD_OPTIONS]],
    useFactory: (parent) => __spreadValues({
      appearance: signal(parent?.appearance() ?? DEFAULT.appearance),
      size: signal(parent?.size() ?? DEFAULT.size),
      cleaner: signal(parent?.cleaner() ?? DEFAULT.cleaner)
    }, options)
  };
}
var _TuiTextfieldOptionsDirective = class _TuiTextfieldOptionsDirective {
  constructor() {
    this.options = inject(TUI_TEXTFIELD_OPTIONS, {
      skipSelf: true
    });
    this.appearance = signal(this.options.appearance());
    this.size = signal(this.options.size());
    this.cleaner = signal(this.options.cleaner());
  }
  set tuiTextfieldAppearance(appearance) {
    this.appearance.set(appearance);
  }
  set tuiTextfieldSize(size) {
    this.size.set(size);
  }
  set tuiTextfieldCleaner(enabled) {
    this.cleaner.set(enabled);
  }
};
_TuiTextfieldOptionsDirective.ɵfac = function TuiTextfieldOptionsDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiTextfieldOptionsDirective)();
};
_TuiTextfieldOptionsDirective.ɵdir = ɵɵdefineDirective({
  type: _TuiTextfieldOptionsDirective,
  selectors: [["", "tuiTextfieldAppearance", ""], ["", "tuiTextfieldSize", ""], ["", "tuiTextfieldCleaner", ""]],
  inputs: {
    tuiTextfieldAppearance: "tuiTextfieldAppearance",
    tuiTextfieldSize: "tuiTextfieldSize",
    tuiTextfieldCleaner: "tuiTextfieldCleaner"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([tuiProvide(TUI_TEXTFIELD_OPTIONS, _TuiTextfieldOptionsDirective)])]
});
var TuiTextfieldOptionsDirective = _TuiTextfieldOptionsDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldOptionsDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiTextfieldAppearance],[tuiTextfieldSize],[tuiTextfieldCleaner]",
      providers: [tuiProvide(TUI_TEXTFIELD_OPTIONS, TuiTextfieldOptionsDirective)]
    }]
  }], null, {
    tuiTextfieldAppearance: [{
      type: Input
    }],
    tuiTextfieldSize: [{
      type: Input
    }],
    tuiTextfieldCleaner: [{
      type: Input
    }]
  });
})();
var _TuiTextfieldDropdownDirective = class _TuiTextfieldDropdownDirective {
};
_TuiTextfieldDropdownDirective.ɵfac = function TuiTextfieldDropdownDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiTextfieldDropdownDirective)();
};
_TuiTextfieldDropdownDirective.ɵdir = ɵɵdefineDirective({
  type: _TuiTextfieldDropdownDirective,
  selectors: [["ng-template", "tuiTextfieldDropdown", ""]],
  standalone: true
});
var TuiTextfieldDropdownDirective = _TuiTextfieldDropdownDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldDropdownDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-template[tuiTextfieldDropdown]"
    }]
  }], null, null);
})();
var _TuiWithTextfieldDropdown = class _TuiWithTextfieldDropdown {
  constructor() {
    this.dropdown = tuiDropdown(null);
  }
  set template(template) {
    this.dropdown.set(template);
  }
};
_TuiWithTextfieldDropdown.ɵfac = function TuiWithTextfieldDropdown_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiWithTextfieldDropdown)();
};
_TuiWithTextfieldDropdown.ɵdir = ɵɵdefineDirective({
  type: _TuiWithTextfieldDropdown,
  contentQueries: function TuiWithTextfieldDropdown_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, TuiTextfieldDropdownDirective, 5, TemplateRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
    }
  },
  standalone: true
});
var TuiWithTextfieldDropdown = _TuiWithTextfieldDropdown;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWithTextfieldDropdown, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], null, {
    template: [{
      type: ContentChild,
      args: [TuiTextfieldDropdownDirective, {
        read: TemplateRef
      }]
    }]
  });
})();
var _TuiTextfieldComponent = class _TuiTextfieldComponent {
  constructor() {
    this.open = tuiDropdownOpen();
    this.focusedIn = tuiFocusedIn(tuiInjectElement());
    this.side = 0;
    this.options = inject(TUI_TEXTFIELD_OPTIONS);
    this.icons = inject(TUI_COMMON_ICONS);
    this.filler = "";
    this.stringify = String;
    this.focused = computed(() => this.open() || this.focusedIn());
  }
  get id() {
    return this.el?.nativeElement.id || "";
  }
  get size() {
    return this.options.size();
  }
  handleOption(option) {
    this.directive?.setValue(this.stringify(option));
    this.open.set(false);
  }
  get computedFiller() {
    const value = this.el?.nativeElement.value || "";
    const filler = value + this.filler.slice(value.length);
    return filler.length > value.length ? filler : "";
  }
  get showFiller() {
    return this.focused() && !!this.computedFiller && (!!this.el?.nativeElement.value || !this.el?.nativeElement.placeholder);
  }
  get hasLabel() {
    return Boolean(this.label?.nativeElement?.childNodes.length);
  }
  onResize(entry) {
    this.side = entry[0]?.contentRect?.width || 0;
  }
};
_TuiTextfieldComponent.ɵfac = function TuiTextfieldComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiTextfieldComponent)();
};
_TuiTextfieldComponent.ɵcmp = ɵɵdefineComponent({
  type: _TuiTextfieldComponent,
  selectors: [["tui-textfield"]],
  contentQueries: function TuiTextfieldComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, TuiTextfieldDirective, 5);
      ɵɵcontentQuery(dirIndex, TuiLabel, 5, ElementRef);
      ɵɵcontentQuery(dirIndex, NgControl, 5);
      ɵɵcontentQuery(dirIndex, TuiTextfieldDirective, 5, ElementRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.directive = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.label = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.control = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.el = _t.first);
    }
  },
  viewQuery: function TuiTextfieldComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 7, ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.vcr = _t.first);
    }
  },
  hostVars: 7,
  hostBindings: function TuiTextfieldComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("data-size", ctx.options.size());
      ɵɵstyleProp("--t-side", ctx.side, "px");
      ɵɵclassProp("_with-label", ctx.hasLabel)("_disabled", ctx.el == null ? null : ctx.el.nativeElement.disabled);
    }
  },
  inputs: {
    filler: "filler",
    stringify: "stringify",
    content: "content"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([tuiAsDataListHost(_TuiTextfieldComponent), tuiDropdownOptionsProvider({
    limitWidth: "fixed"
  })]), ɵɵHostDirectivesFeature([TuiNativeValidator, TuiDropdownDirective, TuiWithDropdownOpen, TuiWithTextfieldDropdown, TuiWithIcons]), ɵɵStandaloneFeature],
  ngContentSelectors: _c2,
  decls: 12,
  vars: 6,
  consts: [["vcr", ""], [1, "t-content", 3, "mousedown.prevent", "waResizeObserver"], ["appearance", "icon", "size", "xs", "tabindex", "-1", "tuiIconButton", "", "type", "button", "class", "t-clear", 3, "iconStart", "click", "pointerdown.silent.prevent", 4, "ngIf"], [1, "t-template"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["aria-hidden", "true", "disabled", "", "class", "t-filler", 3, "value", 4, "ngIf"], ["appearance", "icon", "size", "xs", "tabindex", "-1", "tuiIconButton", "", "type", "button", 1, "t-clear", 3, "click", "pointerdown.silent.prevent", "iconStart"], ["aria-hidden", "true", "disabled", "", 1, "t-filler", 3, "value"]],
  template: function TuiTextfieldComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵprojectionDef(_c1);
      ɵɵprojection(0);
      ɵɵprojection(1, 1);
      ɵɵprojection(2, 2);
      ɵɵelementStart(3, "span", 1);
      ɵɵlistener("mousedown.prevent", function TuiTextfieldComponent_Template_span_mousedown_prevent_3_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.el == null ? null : ctx.el.nativeElement == null ? null : ctx.el.nativeElement.focus());
      })("waResizeObserver", function TuiTextfieldComponent_Template_span_waResizeObserver_3_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onResize($event));
      });
      ɵɵprojection(4, 3);
      ɵɵtemplate(5, TuiTextfieldComponent_button_5_Template, 1, 1, "button", 2);
      ɵɵelementContainer(6, null, 0);
      ɵɵprojection(8, 4);
      ɵɵelementEnd();
      ɵɵelementStart(9, "span", 3);
      ɵɵtemplate(10, TuiTextfieldComponent_ng_container_10_Template, 2, 1, "ng-container", 4);
      ɵɵelementEnd();
      ɵɵtemplate(11, TuiTextfieldComponent_input_11_Template, 1, 1, "input", 5);
    }
    if (rf & 2) {
      ɵɵadvance(5);
      ɵɵproperty("ngIf", ctx.options.cleaner());
      ɵɵadvance(5);
      ɵɵproperty("polymorpheusOutlet", ctx.content)("polymorpheusOutletContext", ɵɵpureFunction1(4, _c3, ctx.control == null ? null : ctx.control.value));
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showFiller);
    }
  },
  dependencies: [NgIf, WaResizeObserver, TuiButton, PolymorpheusOutlet],
  styles: ['tui-textfield{transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;--t-height: var(--tui-height-l);position:relative;display:flex;align-items:center;pointer-events:none;cursor:pointer;block-size:var(--t-height);color:var(--tui-text-tertiary);padding:0 var(--tui-padding-l);border-radius:var(--tui-radius-l);font:var(--tui-font-text-m);box-sizing:border-box}tui-textfield[style*="--t-icon-start:"]{--t-left: 2.25rem}tui-textfield[style*="--t-icon-end:"]{--t-right: 2.25rem}tui-textfield:before{margin-inline-end:.75rem}tui-textfield:after{margin-inline-start:.25rem}tui-textfield input,tui-textfield select{font:var(--tui-font-text-m)}tui-textfield[data-size=s]{--t-height: var(--tui-height-s);padding:0 var(--tui-padding-s);border-radius:var(--tui-radius-m);font:var(--tui-font-text-s)}tui-textfield[data-size=s][style*="--t-icon-start:"]{--t-left: 1.25rem}tui-textfield[data-size=s][style*="--t-icon-end:"]{--t-right: 1.25rem}tui-textfield[data-size=s]:before{margin:0 .5rem 0 -.125rem;font-size:1rem}tui-textfield[data-size=s]:after{margin:0 -.175rem 0 .25rem;font-size:1rem}tui-textfield[data-size=s] input,tui-textfield[data-size=s] select{font:var(--tui-font-text-s)}tui-textfield[data-size=s] .t-content{gap:0}tui-textfield[data-size=m]{--t-height: var(--tui-height-m);padding:0 var(--tui-padding-m);border-radius:var(--tui-radius-m);font:var(--tui-font-text-s)}tui-textfield[data-size=m][style*="--t-icon-start:"]{--t-left: 1.75rem}tui-textfield[data-size=m][style*="--t-icon-end:"]{--t-right: 1.75rem}tui-textfield[data-size=m]:before{margin:0 .375rem 0 -.125rem}tui-textfield[data-size=m]:after{margin:0 -.125rem 0 .375rem}tui-textfield[data-size=m] input,tui-textfield[data-size=m] select{font:var(--tui-font-text-s)}tui-textfield:hover{color:var(--tui-text-secondary)}tui-textfield:hover:has(input:read-only),tui-textfield:hover:has(select[data-mode=readonly]){color:var(--tui-text-tertiary)}tui-textfield:before{z-index:1}tui-textfield:has(:disabled:not(.t-filler,button,option)):before,tui-textfield:has(:disabled:not(.t-filler,button,option)):after,tui-textfield:has(:disabled:not(.t-filler,button,option)) .t-template{opacity:var(--tui-disabled-opacity)}tui-textfield._disabled:before,tui-textfield._disabled:after,tui-textfield._disabled .t-template{opacity:var(--tui-disabled-opacity)}tui-textfield:has(label:not(:empty)) .t-template,tui-textfield:has(label:not(:empty)) input,tui-textfield:has(label:not(:empty)) select{padding-top:calc(var(--t-height) / 3)}tui-textfield:has(label:not(:empty)) .t-template::placeholder,tui-textfield:has(label:not(:empty)) input::placeholder,tui-textfield:has(label:not(:empty)) select::placeholder,tui-textfield:has(label:not(:empty)) .t-template._empty,tui-textfield:has(label:not(:empty)) input._empty,tui-textfield:has(label:not(:empty)) select._empty{color:transparent}tui-textfield._with-label .t-template,tui-textfield._with-label input,tui-textfield._with-label select{padding-top:calc(var(--t-height) / 3)}tui-textfield._with-label .t-template::placeholder,tui-textfield._with-label input::placeholder,tui-textfield._with-label select::placeholder,tui-textfield._with-label .t-template._empty,tui-textfield._with-label input._empty,tui-textfield._with-label select._empty{color:transparent}tui-textfield .t-template,tui-textfield input:defined,tui-textfield select:defined{position:absolute;top:0;left:0;bottom:0;right:0;-webkit-appearance:none;appearance:none;box-sizing:border-box;border:none;border-inline-start:var(--t-left, 0) solid transparent!important;border-inline-end:calc(var(--t-right, var(--t-0, 0rem)) + var(--t-side)) solid transparent!important;border-radius:inherit;padding:inherit}tui-textfield input:defined,tui-textfield select:defined{pointer-events:auto;background:transparent no-repeat center right 1rem / 2rem;background-clip:border-box,padding-box}tui-textfield input:defined:read-only~.t-filler,tui-textfield select:defined:read-only~.t-filler{display:none}tui-textfield input:defined:disabled~label,tui-textfield select:defined:disabled~label,tui-textfield input:defined:disabled~.t-content,tui-textfield select:defined:disabled~.t-content{opacity:var(--tui-disabled-opacity)}tui-textfield input:defined:disabled~label [tuiTooltip],tui-textfield select:defined:disabled~label [tuiTooltip],tui-textfield input:defined:disabled~.t-content [tuiTooltip],tui-textfield select:defined:disabled~.t-content [tuiTooltip]{display:none}tui-textfield input:defined:-webkit-autofill~label,tui-textfield select:defined:-webkit-autofill~label,tui-textfield input:defined:not(._empty):not(:placeholder-shown)~label,tui-textfield select:defined:not(._empty):not(:placeholder-shown)~label{font-size:.83em;transform:translateY(-.7em)}tui-textfield input:defined:-webkit-autofill:not(:disabled)[data-mode=invalid]~label,tui-textfield select:defined:-webkit-autofill:not(:disabled)[data-mode=invalid]~label,tui-textfield input:defined:not(._empty):not(:placeholder-shown):not(:disabled)[data-mode=invalid]~label,tui-textfield select:defined:not(._empty):not(:placeholder-shown):not(:disabled)[data-mode=invalid]~label,tui-textfield input:defined:-webkit-autofill:invalid:not(:disabled):not([data-mode])~label,tui-textfield select:defined:-webkit-autofill:invalid:not(:disabled):not([data-mode])~label,tui-textfield input:defined:not(._empty):not(:placeholder-shown):invalid:not(:disabled):not([data-mode])~label,tui-textfield select:defined:not(._empty):not(:placeholder-shown):invalid:not(:disabled):not([data-mode])~label{color:var(--tui-text-negative)}tui-textfield input:defined:-webkit-autofill:not(:disabled):not([data-mode=readonly])~.t-content .t-clear,tui-textfield select:defined:-webkit-autofill:not(:disabled):not([data-mode=readonly])~.t-content .t-clear,tui-textfield input:defined:not(._empty):not(:placeholder-shown):not(:disabled):not([data-mode=readonly])~.t-content .t-clear,tui-textfield select:defined:not(._empty):not(:placeholder-shown):not(:disabled):not([data-mode=readonly])~.t-content .t-clear{display:flex}tui-textfield input:defined:not([data-mode=readonly]):focus-visible:not([data-focus=false])::placeholder,tui-textfield select:defined:not([data-mode=readonly]):focus-visible:not([data-focus=false])::placeholder,tui-textfield input:defined:not([data-mode=readonly]):focus-visible:not([data-focus=false])._empty,tui-textfield select:defined:not([data-mode=readonly]):focus-visible:not([data-focus=false])._empty{color:var(--tui-text-tertiary)}tui-textfield input:defined:not([data-mode=readonly]):focus-visible:not([data-focus=false])~label,tui-textfield select:defined:not([data-mode=readonly]):focus-visible:not([data-focus=false])~label{color:var(--tui-text-primary)!important;font-size:.83em;transform:translateY(-.7em)}tui-textfield input:defined:not([data-mode=readonly])[data-focus=true]::placeholder,tui-textfield select:defined:not([data-mode=readonly])[data-focus=true]::placeholder,tui-textfield input:defined:not([data-mode=readonly])[data-focus=true]._empty,tui-textfield select:defined:not([data-mode=readonly])[data-focus=true]._empty{color:var(--tui-text-tertiary)}tui-textfield input:defined:not([data-mode=readonly])[data-focus=true]~label,tui-textfield select:defined:not([data-mode=readonly])[data-focus=true]~label{color:var(--tui-text-primary)!important;font-size:.83em;transform:translateY(-.7em)}tui-textfield label:not([data-orientation=vertical]){transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;position:relative;display:block;flex:1;font-size:inherit}tui-textfield label:defined,tui-textfield input:defined::placeholder,tui-textfield select:defined._empty{color:var(--tui-text-secondary)}tui-textfield select:not([data-mode=readonly]){cursor:pointer}@supports (-webkit-touch-callout: none){tui-textfield input:defined._ios-fix,tui-textfield select:defined._ios-fix{position:fixed;left:1000rem}}tui-textfield button,tui-textfield a{pointer-events:auto}tui-textfield .t-content{display:flex;align-items:center;gap:.25rem;margin-inline-start:auto;isolation:isolate}tui-textfield .t-clear{display:none;pointer-events:auto}tui-textfield .t-filler:defined{pointer-events:none;background:none;color:var(--tui-text-tertiary);opacity:1}tui-textfield [tuiFluidTypography]{font-weight:700}\n'],
  encapsulation: 2,
  changeDetection: 0
});
var TuiTextfieldComponent = _TuiTextfieldComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-textfield",
      imports: [NgIf, WaResizeObserver, TuiButton, PolymorpheusOutlet],
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsDataListHost(TuiTextfieldComponent), tuiDropdownOptionsProvider({
        limitWidth: "fixed"
      })],
      hostDirectives: [TuiNativeValidator, TuiDropdownDirective, TuiWithDropdownOpen, TuiWithTextfieldDropdown, TuiWithIcons],
      host: {
        "[style.--t-side.px]": "side",
        "[attr.data-size]": "options.size()",
        "[class._with-label]": "hasLabel",
        "[class._disabled]": "el?.nativeElement.disabled"
      },
      template: `<ng-content select="input" />
<ng-content select="select" />
<ng-content select="label" />
<span
    class="t-content"
    (mousedown.prevent)="el?.nativeElement?.focus()"
    (waResizeObserver)="onResize($event)"
>
    <ng-content />
    <button
        *ngIf="options.cleaner()"
        appearance="icon"
        size="xs"
        tabindex="-1"
        tuiIconButton
        type="button"
        class="t-clear"
        [iconStart]="icons.close"
        (click)="directive?.setValue('')"
        (pointerdown.silent.prevent)="el?.nativeElement?.focus()"
    ></button>
    <ng-container #vcr />
    <ng-content select="tui-icon" />
</span>
<span class="t-template">
    <ng-container *polymorpheusOutlet="content as text; context: {$implicit: control?.value}">
        {{ text }}
    </ng-container>
</span>
<input
    *ngIf="showFiller"
    aria-hidden="true"
    disabled
    class="t-filler"
    [value]="computedFiller"
/>
`,
      styles: ['tui-textfield{transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;--t-height: var(--tui-height-l);position:relative;display:flex;align-items:center;pointer-events:none;cursor:pointer;block-size:var(--t-height);color:var(--tui-text-tertiary);padding:0 var(--tui-padding-l);border-radius:var(--tui-radius-l);font:var(--tui-font-text-m);box-sizing:border-box}tui-textfield[style*="--t-icon-start:"]{--t-left: 2.25rem}tui-textfield[style*="--t-icon-end:"]{--t-right: 2.25rem}tui-textfield:before{margin-inline-end:.75rem}tui-textfield:after{margin-inline-start:.25rem}tui-textfield input,tui-textfield select{font:var(--tui-font-text-m)}tui-textfield[data-size=s]{--t-height: var(--tui-height-s);padding:0 var(--tui-padding-s);border-radius:var(--tui-radius-m);font:var(--tui-font-text-s)}tui-textfield[data-size=s][style*="--t-icon-start:"]{--t-left: 1.25rem}tui-textfield[data-size=s][style*="--t-icon-end:"]{--t-right: 1.25rem}tui-textfield[data-size=s]:before{margin:0 .5rem 0 -.125rem;font-size:1rem}tui-textfield[data-size=s]:after{margin:0 -.175rem 0 .25rem;font-size:1rem}tui-textfield[data-size=s] input,tui-textfield[data-size=s] select{font:var(--tui-font-text-s)}tui-textfield[data-size=s] .t-content{gap:0}tui-textfield[data-size=m]{--t-height: var(--tui-height-m);padding:0 var(--tui-padding-m);border-radius:var(--tui-radius-m);font:var(--tui-font-text-s)}tui-textfield[data-size=m][style*="--t-icon-start:"]{--t-left: 1.75rem}tui-textfield[data-size=m][style*="--t-icon-end:"]{--t-right: 1.75rem}tui-textfield[data-size=m]:before{margin:0 .375rem 0 -.125rem}tui-textfield[data-size=m]:after{margin:0 -.125rem 0 .375rem}tui-textfield[data-size=m] input,tui-textfield[data-size=m] select{font:var(--tui-font-text-s)}tui-textfield:hover{color:var(--tui-text-secondary)}tui-textfield:hover:has(input:read-only),tui-textfield:hover:has(select[data-mode=readonly]){color:var(--tui-text-tertiary)}tui-textfield:before{z-index:1}tui-textfield:has(:disabled:not(.t-filler,button,option)):before,tui-textfield:has(:disabled:not(.t-filler,button,option)):after,tui-textfield:has(:disabled:not(.t-filler,button,option)) .t-template{opacity:var(--tui-disabled-opacity)}tui-textfield._disabled:before,tui-textfield._disabled:after,tui-textfield._disabled .t-template{opacity:var(--tui-disabled-opacity)}tui-textfield:has(label:not(:empty)) .t-template,tui-textfield:has(label:not(:empty)) input,tui-textfield:has(label:not(:empty)) select{padding-top:calc(var(--t-height) / 3)}tui-textfield:has(label:not(:empty)) .t-template::placeholder,tui-textfield:has(label:not(:empty)) input::placeholder,tui-textfield:has(label:not(:empty)) select::placeholder,tui-textfield:has(label:not(:empty)) .t-template._empty,tui-textfield:has(label:not(:empty)) input._empty,tui-textfield:has(label:not(:empty)) select._empty{color:transparent}tui-textfield._with-label .t-template,tui-textfield._with-label input,tui-textfield._with-label select{padding-top:calc(var(--t-height) / 3)}tui-textfield._with-label .t-template::placeholder,tui-textfield._with-label input::placeholder,tui-textfield._with-label select::placeholder,tui-textfield._with-label .t-template._empty,tui-textfield._with-label input._empty,tui-textfield._with-label select._empty{color:transparent}tui-textfield .t-template,tui-textfield input:defined,tui-textfield select:defined{position:absolute;top:0;left:0;bottom:0;right:0;-webkit-appearance:none;appearance:none;box-sizing:border-box;border:none;border-inline-start:var(--t-left, 0) solid transparent!important;border-inline-end:calc(var(--t-right, var(--t-0, 0rem)) + var(--t-side)) solid transparent!important;border-radius:inherit;padding:inherit}tui-textfield input:defined,tui-textfield select:defined{pointer-events:auto;background:transparent no-repeat center right 1rem / 2rem;background-clip:border-box,padding-box}tui-textfield input:defined:read-only~.t-filler,tui-textfield select:defined:read-only~.t-filler{display:none}tui-textfield input:defined:disabled~label,tui-textfield select:defined:disabled~label,tui-textfield input:defined:disabled~.t-content,tui-textfield select:defined:disabled~.t-content{opacity:var(--tui-disabled-opacity)}tui-textfield input:defined:disabled~label [tuiTooltip],tui-textfield select:defined:disabled~label [tuiTooltip],tui-textfield input:defined:disabled~.t-content [tuiTooltip],tui-textfield select:defined:disabled~.t-content [tuiTooltip]{display:none}tui-textfield input:defined:-webkit-autofill~label,tui-textfield select:defined:-webkit-autofill~label,tui-textfield input:defined:not(._empty):not(:placeholder-shown)~label,tui-textfield select:defined:not(._empty):not(:placeholder-shown)~label{font-size:.83em;transform:translateY(-.7em)}tui-textfield input:defined:-webkit-autofill:not(:disabled)[data-mode=invalid]~label,tui-textfield select:defined:-webkit-autofill:not(:disabled)[data-mode=invalid]~label,tui-textfield input:defined:not(._empty):not(:placeholder-shown):not(:disabled)[data-mode=invalid]~label,tui-textfield select:defined:not(._empty):not(:placeholder-shown):not(:disabled)[data-mode=invalid]~label,tui-textfield input:defined:-webkit-autofill:invalid:not(:disabled):not([data-mode])~label,tui-textfield select:defined:-webkit-autofill:invalid:not(:disabled):not([data-mode])~label,tui-textfield input:defined:not(._empty):not(:placeholder-shown):invalid:not(:disabled):not([data-mode])~label,tui-textfield select:defined:not(._empty):not(:placeholder-shown):invalid:not(:disabled):not([data-mode])~label{color:var(--tui-text-negative)}tui-textfield input:defined:-webkit-autofill:not(:disabled):not([data-mode=readonly])~.t-content .t-clear,tui-textfield select:defined:-webkit-autofill:not(:disabled):not([data-mode=readonly])~.t-content .t-clear,tui-textfield input:defined:not(._empty):not(:placeholder-shown):not(:disabled):not([data-mode=readonly])~.t-content .t-clear,tui-textfield select:defined:not(._empty):not(:placeholder-shown):not(:disabled):not([data-mode=readonly])~.t-content .t-clear{display:flex}tui-textfield input:defined:not([data-mode=readonly]):focus-visible:not([data-focus=false])::placeholder,tui-textfield select:defined:not([data-mode=readonly]):focus-visible:not([data-focus=false])::placeholder,tui-textfield input:defined:not([data-mode=readonly]):focus-visible:not([data-focus=false])._empty,tui-textfield select:defined:not([data-mode=readonly]):focus-visible:not([data-focus=false])._empty{color:var(--tui-text-tertiary)}tui-textfield input:defined:not([data-mode=readonly]):focus-visible:not([data-focus=false])~label,tui-textfield select:defined:not([data-mode=readonly]):focus-visible:not([data-focus=false])~label{color:var(--tui-text-primary)!important;font-size:.83em;transform:translateY(-.7em)}tui-textfield input:defined:not([data-mode=readonly])[data-focus=true]::placeholder,tui-textfield select:defined:not([data-mode=readonly])[data-focus=true]::placeholder,tui-textfield input:defined:not([data-mode=readonly])[data-focus=true]._empty,tui-textfield select:defined:not([data-mode=readonly])[data-focus=true]._empty{color:var(--tui-text-tertiary)}tui-textfield input:defined:not([data-mode=readonly])[data-focus=true]~label,tui-textfield select:defined:not([data-mode=readonly])[data-focus=true]~label{color:var(--tui-text-primary)!important;font-size:.83em;transform:translateY(-.7em)}tui-textfield label:not([data-orientation=vertical]){transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;position:relative;display:block;flex:1;font-size:inherit}tui-textfield label:defined,tui-textfield input:defined::placeholder,tui-textfield select:defined._empty{color:var(--tui-text-secondary)}tui-textfield select:not([data-mode=readonly]){cursor:pointer}@supports (-webkit-touch-callout: none){tui-textfield input:defined._ios-fix,tui-textfield select:defined._ios-fix{position:fixed;left:1000rem}}tui-textfield button,tui-textfield a{pointer-events:auto}tui-textfield .t-content{display:flex;align-items:center;gap:.25rem;margin-inline-start:auto;isolation:isolate}tui-textfield .t-clear{display:none;pointer-events:auto}tui-textfield .t-filler:defined{pointer-events:none;background:none;color:var(--tui-text-tertiary);opacity:1}tui-textfield [tuiFluidTypography]{font-weight:700}\n']
    }]
  }], null, {
    directive: [{
      type: ContentChild,
      args: [forwardRef(() => TuiTextfieldDirective)]
    }],
    label: [{
      type: ContentChild,
      args: [forwardRef(() => TuiLabel), {
        read: ElementRef
      }]
    }],
    control: [{
      type: ContentChild,
      args: [NgControl]
    }],
    vcr: [{
      type: ViewChild,
      args: ["vcr", {
        read: ViewContainerRef,
        static: true
      }]
    }],
    el: [{
      type: ContentChild,
      args: [forwardRef(() => TuiTextfieldDirective), {
        read: ElementRef
      }]
    }],
    filler: [{
      type: Input
    }],
    stringify: [{
      type: Input
    }],
    content: [{
      type: Input
    }]
  });
})();
var _TuiTextfieldBase = class _TuiTextfieldBase {
  constructor() {
    this.focused = signal(null);
    this.a = tuiAppearance(inject(TUI_TEXTFIELD_OPTIONS).appearance);
    this.s = tuiAppearanceState(null);
    this.f = tuiAppearanceFocus(computed(() => this.focused() || this.textfield.focused()));
    this.textfield = inject(TuiTextfieldComponent);
    this.autoId = tuiInjectId();
    this.el = tuiInjectElement();
    this.readOnly = false;
    this.invalid = null;
  }
  set focusedSetter(focused) {
    this.focused.set(focused);
  }
  set stateSetter(state) {
    this.s.set(state);
  }
  get mode() {
    if (this.readOnly) {
      return "readonly";
    }
    if (this.invalid === false) {
      return "valid";
    }
    if (this.invalid) {
      return "invalid";
    }
    return null;
  }
  setValue(value) {
    this.el.value = value;
    this.el.dispatchEvent(new Event("input", {
      bubbles: true
    }));
  }
};
_TuiTextfieldBase.ɵfac = function TuiTextfieldBase_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiTextfieldBase)();
};
_TuiTextfieldBase.ɵdir = ɵɵdefineDirective({
  type: _TuiTextfieldBase,
  inputs: {
    readOnly: "readOnly",
    invalid: "invalid",
    focusedSetter: [0, "focused", "focusedSetter"],
    stateSetter: [0, "state", "stateSetter"]
  }
});
var TuiTextfieldBase = _TuiTextfieldBase;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldBase, [{
    type: Directive
  }], null, {
    readOnly: [{
      type: Input
    }],
    invalid: [{
      type: Input
    }],
    focusedSetter: [{
      type: Input,
      args: ["focused"]
    }],
    stateSetter: [{
      type: Input,
      args: ["state"]
    }]
  });
})();
var _TuiTextfieldDirective = class _TuiTextfieldDirective extends TuiTextfieldBase {
};
_TuiTextfieldDirective.ɵfac = /* @__PURE__ */ (() => {
  let ɵTuiTextfieldDirective_BaseFactory;
  return function TuiTextfieldDirective_Factory(__ngFactoryType__) {
    return (ɵTuiTextfieldDirective_BaseFactory || (ɵTuiTextfieldDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiTextfieldDirective)))(__ngFactoryType__ || _TuiTextfieldDirective);
  };
})();
_TuiTextfieldDirective.ɵdir = ɵɵdefineDirective({
  type: _TuiTextfieldDirective,
  selectors: [["input", "tuiTextfield", ""]],
  hostVars: 5,
  hostBindings: function TuiTextfieldDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("input", function TuiTextfieldDirective_input_HostBindingHandler() {
        return 0;
      })("focusin", function TuiTextfieldDirective_focusin_HostBindingHandler() {
        return 0;
      })("focusout", function TuiTextfieldDirective_focusout_HostBindingHandler() {
        return 0;
      });
    }
    if (rf & 2) {
      ɵɵhostProperty("id", ctx.el.id || ctx.autoId)("readOnly", ctx.readOnly);
      ɵɵattribute("data-mode", ctx.mode);
      ɵɵclassProp("_empty", ctx.el.value === "");
    }
  },
  standalone: true,
  features: [ɵɵHostDirectivesFeature([TuiNativeValidator, TuiAppearance]), ɵɵInheritDefinitionFeature]
});
var TuiTextfieldDirective = _TuiTextfieldDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "input[tuiTextfield]",
      hostDirectives: [TuiNativeValidator, TuiAppearance],
      host: {
        "[id]": "el.id || autoId",
        "[readOnly]": "readOnly",
        "[class._empty]": 'el.value === ""',
        "[attr.data-mode]": "mode",
        "(input)": "0",
        "(focusin)": "0",
        "(focusout)": "0"
      }
    }]
  }], null, null);
})();
var _TuiSelect = class _TuiSelect extends TuiTextfieldBase {
  constructor() {
    super(...arguments);
    this.nav = inject(WA_NAVIGATOR);
    this.control = inject(NgControl);
    this.placeholder = "";
  }
  setValue(value) {
    this.control.control?.setValue(value);
    this.el.dispatchEvent(new Event("input", {
      bubbles: true
    }));
  }
  focus() {
    this.el.classList.add("_ios-fix");
    this.el.focus();
    this.el.classList.remove("_ios-fix");
  }
  get value() {
    return this.textfield.stringify(this.control.value ?? "");
  }
  onCopy() {
    return __async(this, null, function* () {
      yield this.nav.clipboard.writeText(this.value);
    });
  }
};
_TuiSelect.ɵfac = /* @__PURE__ */ (() => {
  let ɵTuiSelect_BaseFactory;
  return function TuiSelect_Factory(__ngFactoryType__) {
    return (ɵTuiSelect_BaseFactory || (ɵTuiSelect_BaseFactory = ɵɵgetInheritedFactory(_TuiSelect)))(__ngFactoryType__ || _TuiSelect);
  };
})();
_TuiSelect.ɵcmp = ɵɵdefineComponent({
  type: _TuiSelect,
  selectors: [["select", "tuiTextfield", ""]],
  hostVars: 4,
  hostBindings: function TuiSelect_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("input", function TuiSelect_input_HostBindingHandler() {
        return 0;
      })("focusin", function TuiSelect_focusin_HostBindingHandler() {
        return 0;
      })("focusout", function TuiSelect_focusout_HostBindingHandler() {
        return 0;
      })("keydown.space.prevent", function TuiSelect_keydown_space_prevent_HostBindingHandler() {
        return 0;
      })("keydown.enter.prevent", function TuiSelect_keydown_enter_prevent_HostBindingHandler() {
        return 0;
      })("keydown.backspace", function TuiSelect_keydown_backspace_HostBindingHandler() {
        return ctx.setValue("");
      })("mousedown.prevent", function TuiSelect_mousedown_prevent_HostBindingHandler() {
        return ctx.focus();
      })("keydown.control.c", function TuiSelect_keydown_control_c_HostBindingHandler() {
        return ctx.onCopy();
      })("keydown.meta.c", function TuiSelect_keydown_meta_c_HostBindingHandler() {
        return ctx.onCopy();
      });
    }
    if (rf & 2) {
      ɵɵhostProperty("id", ctx.el.id || ctx.autoId);
      ɵɵattribute("data-mode", ctx.mode);
      ɵɵclassProp("_empty", ctx.value === "");
    }
  },
  inputs: {
    placeholder: "placeholder"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([tuiProvide(TuiTextfieldDirective, _TuiSelect)]), ɵɵHostDirectivesFeature([TuiNativeValidator, TuiAppearance]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  attrs: _c4,
  decls: 3,
  vars: 2,
  consts: [["selected", ""], ["disabled", "", "selected", "", "value", "", 4, "ngIf", "ngIfElse"], ["disabled", "", "selected", "", "value", ""], ["selected", "", 4, "ngFor", "ngForOf"]],
  template: function TuiSelect_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, TuiSelect_option_0_Template, 2, 1, "option", 1)(1, TuiSelect_ng_template_1_Template, 1, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const selected_r3 = ɵɵreference(2);
      ɵɵproperty("ngIf", ctx.placeholder && !ctx.value)("ngIfElse", selected_r3);
    }
  },
  dependencies: [CommonModule, NgForOf, NgIf],
  encapsulation: 2
});
var TuiSelect = _TuiSelect;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSelect, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "select[tuiTextfield]",
      imports: [CommonModule],
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [tuiProvide(TuiTextfieldDirective, TuiSelect)],
      hostDirectives: [TuiNativeValidator, TuiAppearance],
      host: {
        "[id]": "el.id || autoId",
        "[attr.data-mode]": "mode",
        "[class._empty]": 'value === ""',
        "(input)": "0",
        "(focusin)": "0",
        "(focusout)": "0",
        "(keydown.space.prevent)": "0",
        "(keydown.enter.prevent)": "0",
        "(keydown.backspace)": 'setValue("")',
        "(mousedown.prevent)": "focus()",
        "(keydown.control.c)": "onCopy()",
        "(keydown.meta.c)": "onCopy()"
      },
      template: '<option\n    *ngIf="placeholder && !value; else selected"\n    disabled\n    selected\n    value=""\n>\n    {{ placeholder }}\n</option>\n<ng-template #selected>\n    <option\n        *ngFor="let item of [value]"\n        selected\n    >\n        {{ item }}\n    </option>\n</ng-template>\n'
    }]
  }], null, {
    placeholder: [{
      type: Input
    }]
  });
})();
var TuiTextfield = [TuiLabel, TuiSelect, TuiTextfieldComponent, TuiTextfieldDirective, TuiTextfieldOptionsDirective, TuiTextfieldDropdownDirective];
var _TuiTextfieldContent = class _TuiTextfieldContent {
  constructor() {
    inject(TuiTextfieldComponent).vcr?.createEmbeddedView(inject(TemplateRef));
  }
};
_TuiTextfieldContent.ɵfac = function TuiTextfieldContent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiTextfieldContent)();
};
_TuiTextfieldContent.ɵdir = ɵɵdefineDirective({
  type: _TuiTextfieldContent,
  selectors: [["ng-template", "tuiTextfieldContent", ""]],
  standalone: true
});
var TuiTextfieldContent = _TuiTextfieldContent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldContent, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-template[tuiTextfieldContent]"
    }]
  }], function() {
    return [];
  }, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-hint.mjs
function TuiHintUnstyledComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c02 = ["*"];
function TuiHintComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 1);
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    ɵɵproperty("innerHTML", text_r1, ɵɵsanitizeHtml);
  }
}
var _c12 = (a0) => ({
  $implicit: a0
});
function TuiHints_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiHints_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, TuiHints_div_0_ng_container_1_Template, 1, 0, "ng-container", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const hint_r1 = ctx.$implicit;
    ɵɵproperty("@tuiParentAnimation", void 0)("tuiActiveZoneParent", hint_r1.activeZone || null);
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", hint_r1.component)("polymorpheusOutletContext", ɵɵpureFunction1(4, _c12, hint_r1));
  }
}
var TUI_HINT_COMPONENT = tuiCreateTokenFromFactory(() => TuiHintComponent);
var _TuiHintService = class _TuiHintService extends BehaviorSubject {
  constructor() {
    super([]);
  }
  add(directive) {
    this.next(this.value.concat(directive));
  }
  remove(directive) {
    if (this.value.includes(directive)) {
      this.next(this.value.filter((hint) => hint !== directive));
    }
  }
};
_TuiHintService.ɵfac = function TuiHintService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiHintService)();
};
_TuiHintService.ɵprov = ɵɵdefineInjectable({
  token: _TuiHintService,
  factory: _TuiHintService.ɵfac,
  providedIn: "root"
});
var TuiHintService = _TuiHintService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var _TuiHintDriver = class _TuiHintDriver extends TuiDriverDirective {
  constructor() {
    super(...arguments);
    this.type = "hint";
  }
};
_TuiHintDriver.ɵfac = /* @__PURE__ */ (() => {
  let ɵTuiHintDriver_BaseFactory;
  return function TuiHintDriver_Factory(__ngFactoryType__) {
    return (ɵTuiHintDriver_BaseFactory || (ɵTuiHintDriver_BaseFactory = ɵɵgetInheritedFactory(_TuiHintDriver)))(__ngFactoryType__ || _TuiHintDriver);
  };
})();
_TuiHintDriver.ɵdir = ɵɵdefineDirective({
  type: _TuiHintDriver,
  standalone: true,
  features: [ɵɵInheritDefinitionFeature]
});
var TuiHintDriver = _TuiHintDriver;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintDriver, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], null, null);
})();
var TUI_HINT_DIRECTIONS = ["bottom-left", "bottom", "bottom-right", "top-left", "top", "top-right", "left-top", "left", "left-bottom", "right-top", "right", "right-bottom"];
var TUI_HINT_DEFAULT_OPTIONS = {
  direction: "bottom-left",
  showDelay: 500,
  hideDelay: 200,
  appearance: "",
  icon: "@tui.circle-help"
};
var TUI_HINT_OPTIONS = tuiCreateToken(TUI_HINT_DEFAULT_OPTIONS);
var tuiHintOptionsProvider = (override) => ({
  provide: TUI_HINT_OPTIONS,
  deps: [[new Optional(), TuiHintOptionsDirective], [new Optional(), new SkipSelf(), TUI_HINT_OPTIONS]],
  useFactory: tuiOverrideOptions(override, TUI_HINT_DEFAULT_OPTIONS)
});
var _TuiHintOptionsDirective = class _TuiHintOptionsDirective {
  constructor() {
    this.options = inject(TUI_HINT_OPTIONS, {
      skipSelf: true
    });
    this.direction = this.options.direction;
    this.appearance = this.options.appearance;
    this.showDelay = this.options.showDelay;
    this.hideDelay = this.options.hideDelay;
    this.icon = this.options.icon;
    this.change$ = new Subject();
  }
  ngOnChanges() {
    this.change$.next();
  }
};
_TuiHintOptionsDirective.ɵfac = function TuiHintOptionsDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiHintOptionsDirective)();
};
_TuiHintOptionsDirective.ɵdir = ɵɵdefineDirective({
  type: _TuiHintOptionsDirective,
  selectors: [["", "tuiHintContent", ""]],
  inputs: {
    content: [0, "tuiHintContent", "content"],
    direction: [0, "tuiHintDirection", "direction"],
    appearance: [0, "tuiHintAppearance", "appearance"],
    showDelay: [0, "tuiHintShowDelay", "showDelay"],
    hideDelay: [0, "tuiHintHideDelay", "hideDelay"]
  },
  standalone: true,
  features: [ɵɵProvidersFeature([tuiProvide(TUI_HINT_OPTIONS, _TuiHintOptionsDirective)]), ɵɵNgOnChangesFeature]
});
var TuiHintOptionsDirective = _TuiHintOptionsDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintOptionsDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiHintContent]",
      providers: [tuiProvide(TUI_HINT_OPTIONS, TuiHintOptionsDirective)]
    }]
  }], null, {
    content: [{
      type: Input,
      args: ["tuiHintContent"]
    }],
    direction: [{
      type: Input,
      args: ["tuiHintDirection"]
    }],
    appearance: [{
      type: Input,
      args: ["tuiHintAppearance"]
    }],
    showDelay: [{
      type: Input,
      args: ["tuiHintShowDelay"]
    }],
    hideDelay: [{
      type: Input,
      args: ["tuiHintHideDelay"]
    }]
  });
})();
var _TuiHintHover = class _TuiHintHover extends TuiDriver {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.el = tuiInjectElement();
    this.hovered$ = inject(TuiHoveredService);
    this.options = inject(TUI_HINT_OPTIONS);
    this.visible = false;
    this.toggle$ = new Subject();
    this.stream$ = merge(this.toggle$.pipe(switchMap((visible) => of(visible).pipe(delay(visible ? 0 : this.tuiHintHideDelay))), takeUntil(this.hovered$), repeat()), this.hovered$.pipe(switchMap((visible) => of(visible).pipe(delay(visible ? this.tuiHintShowDelay : this.tuiHintHideDelay))), takeUntil(this.toggle$), repeat())).pipe(filter(() => this.enabled), map((value) => value && (this.el.hasAttribute("tuiHintPointer") || !tuiIsObscured(this.el))), tap((visible) => {
      this.visible = visible;
    }));
    this.parent = inject(_TuiHintHover, {
      optional: true,
      skipSelf: true
    });
    this.tuiHintShowDelay = this.options.showDelay;
    this.tuiHintHideDelay = this.options.hideDelay;
    this.type = "hint";
    this.enabled = true;
  }
  toggle(visible = !this.visible) {
    this.toggle$.next(visible);
    this.parent?.toggle(visible);
  }
};
_TuiHintHover.ɵfac = function TuiHintHover_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiHintHover)();
};
_TuiHintHover.ɵdir = ɵɵdefineDirective({
  type: _TuiHintHover,
  inputs: {
    tuiHintShowDelay: "tuiHintShowDelay",
    tuiHintHideDelay: "tuiHintHideDelay"
  },
  exportAs: ["tuiHintHover"],
  standalone: true,
  features: [ɵɵProvidersFeature([tuiAsDriver(_TuiHintHover), TuiHoveredService]), ɵɵInheritDefinitionFeature]
});
var TuiHintHover = _TuiHintHover;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintHover, [{
    type: Directive,
    args: [{
      standalone: true,
      providers: [tuiAsDriver(TuiHintHover), TuiHoveredService],
      exportAs: "tuiHintHover"
    }]
  }], function() {
    return [];
  }, {
    tuiHintShowDelay: [{
      type: Input
    }],
    tuiHintHideDelay: [{
      type: Input
    }]
  });
})();
var OFFSET = 8;
var ARROW_OFFSET = 22;
var TOP = 0;
var LEFT = 1;
var _TuiHintPosition = class _TuiHintPosition extends TuiPositionAccessor {
  constructor() {
    super(...arguments);
    this.viewport = inject(TUI_VIEWPORT);
    this.accessor = tuiFallbackAccessor("hint")(inject(TuiRectAccessor), inject(TuiHintDirective));
    this.points = TUI_HINT_DIRECTIONS.reduce((acc, direction) => __spreadProps(__spreadValues({}, acc), {
      [direction]: [0, 0]
    }), {});
    this.direction = inject(TUI_HINT_OPTIONS).direction;
    this.type = "hint";
  }
  getPosition({
    width,
    height
  }) {
    const hostRect = this.accessor.getClientRect() ?? EMPTY_CLIENT_RECT;
    const leftCenter = hostRect.left + hostRect.width / 2;
    const topCenter = hostRect.top + hostRect.height / 2;
    this.points["top-left"][TOP] = hostRect.top - height - OFFSET;
    this.points["top-left"][LEFT] = leftCenter - width + ARROW_OFFSET;
    this.points.top[TOP] = this.points["top-left"][TOP];
    this.points.top[LEFT] = leftCenter - width / 2;
    this.points["top-right"][TOP] = this.points["top-left"][TOP];
    this.points["top-right"][LEFT] = leftCenter - ARROW_OFFSET;
    this.points["bottom-left"][TOP] = hostRect.bottom + OFFSET;
    this.points["bottom-left"][LEFT] = this.points["top-left"][LEFT];
    this.points.bottom[TOP] = this.points["bottom-left"][TOP];
    this.points.bottom[LEFT] = this.points.top[LEFT];
    this.points["bottom-right"][TOP] = this.points["bottom-left"][TOP];
    this.points["bottom-right"][LEFT] = this.points["top-right"][LEFT];
    this.points["left-top"][TOP] = topCenter - height + ARROW_OFFSET;
    this.points["left-top"][LEFT] = hostRect.left - width - OFFSET;
    this.points.left[TOP] = topCenter - height / 2;
    this.points.left[LEFT] = this.points["left-top"][LEFT];
    this.points["left-bottom"][TOP] = topCenter - ARROW_OFFSET;
    this.points["left-bottom"][LEFT] = this.points["left-top"][LEFT];
    this.points["right-top"][TOP] = this.points["left-top"][TOP];
    this.points["right-top"][LEFT] = hostRect.right + OFFSET;
    this.points.right[TOP] = this.points.left[TOP];
    this.points.right[LEFT] = this.points["right-top"][LEFT];
    this.points["right-bottom"][TOP] = this.points["left-bottom"][TOP];
    this.points["right-bottom"][LEFT] = this.points["right-top"][LEFT];
    if (this.checkPosition(this.points[this.direction], width, height)) {
      return this.points[this.direction];
    }
    const direction = TUI_HINT_DIRECTIONS.find((direction2) => this.checkPosition(this.points[direction2], width, height));
    return this.points[direction || this.fallback];
  }
  get fallback() {
    return this.points.top[TOP] > this.viewport.getClientRect().bottom - this.points.bottom[TOP] ? "top" : "bottom";
  }
  checkPosition([top, left], width, height) {
    const viewport = this.viewport.getClientRect();
    return top > OFFSET / 4 && left > OFFSET / 4 && top + height < viewport.bottom - OFFSET / 4 && left + width < viewport.right - OFFSET / 4;
  }
};
_TuiHintPosition.ɵfac = /* @__PURE__ */ (() => {
  let ɵTuiHintPosition_BaseFactory;
  return function TuiHintPosition_Factory(__ngFactoryType__) {
    return (ɵTuiHintPosition_BaseFactory || (ɵTuiHintPosition_BaseFactory = ɵɵgetInheritedFactory(_TuiHintPosition)))(__ngFactoryType__ || _TuiHintPosition);
  };
})();
_TuiHintPosition.ɵdir = ɵɵdefineDirective({
  type: _TuiHintPosition,
  inputs: {
    direction: [0, "tuiHintDirection", "direction"]
  },
  standalone: true,
  features: [ɵɵInheritDefinitionFeature]
});
var TuiHintPosition = _TuiHintPosition;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintPosition, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], null, {
    direction: [{
      type: Input,
      args: ["tuiHintDirection"]
    }]
  });
})();
var _TuiHintDirective = class _TuiHintDirective {
  constructor() {
    this.service = inject(TuiHintService);
    this.appearance = inject(TUI_HINT_OPTIONS).appearance;
    this.component = inject(PolymorpheusComponent);
    this.el = tuiInjectElement();
    this.activeZone = inject(TuiActiveZone, {
      optional: true
    });
    this.type = "hint";
  }
  set tuiHint(content) {
    this.content = content;
    if (!content) {
      this.toggle(false);
    }
  }
  ngOnDestroy() {
    this.toggle(false);
  }
  getClientRect() {
    return this.el.getBoundingClientRect();
  }
  toggle(show) {
    if (show && this.content) {
      this.service.add(this);
    } else {
      this.service.remove(this);
    }
  }
};
_TuiHintDirective.ɵfac = function TuiHintDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiHintDirective)();
};
_TuiHintDirective.ɵdir = ɵɵdefineDirective({
  type: _TuiHintDirective,
  selectors: [["", "tuiHint", "", 5, "ng-container", 5, "ng-template"]],
  inputs: {
    context: [0, "tuiHintContext", "context"],
    appearance: [0, "tuiHintAppearance", "appearance"],
    tuiHint: "tuiHint"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([tuiAsRectAccessor(_TuiHintDirective), tuiAsVehicle(_TuiHintDirective), {
    provide: PolymorpheusComponent,
    deps: [TUI_HINT_COMPONENT, INJECTOR$1],
    useClass: PolymorpheusComponent
  }]), ɵɵHostDirectivesFeature([TuiHintDriver, {
    directive: TuiHintHover,
    inputs: ["tuiHintHideDelay", "tuiHintHideDelay", "tuiHintShowDelay", "tuiHintShowDelay"]
  }, {
    directive: TuiHintPosition,
    inputs: ["tuiHintDirection", "tuiHintDirection"]
  }])]
});
var TuiHintDirective = _TuiHintDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiHint]:not(ng-container):not(ng-template)",
      providers: [tuiAsRectAccessor(TuiHintDirective), tuiAsVehicle(TuiHintDirective), {
        provide: PolymorpheusComponent,
        deps: [TUI_HINT_COMPONENT, INJECTOR$1],
        useClass: PolymorpheusComponent
      }],
      hostDirectives: [TuiHintDriver, {
        directive: TuiHintHover,
        inputs: ["tuiHintHideDelay", "tuiHintShowDelay"]
      }, {
        directive: TuiHintPosition,
        inputs: ["tuiHintDirection"]
      }]
    }]
  }], null, {
    context: [{
      type: Input,
      args: ["tuiHintContext"]
    }],
    appearance: [{
      type: Input,
      args: ["tuiHintAppearance"]
    }],
    tuiHint: [{
      type: Input
    }]
  });
})();
var _TuiHintPointer = class _TuiHintPointer extends TuiHintHover {
  constructor() {
    super(...arguments);
    this.currentRect = EMPTY_CLIENT_RECT;
  }
  getClientRect() {
    return this.currentRect;
  }
  onMove({
    clientX,
    clientY
  }) {
    this.currentRect = tuiPointToClientRect(clientX, clientY);
  }
};
_TuiHintPointer.ɵfac = /* @__PURE__ */ (() => {
  let ɵTuiHintPointer_BaseFactory;
  return function TuiHintPointer_Factory(__ngFactoryType__) {
    return (ɵTuiHintPointer_BaseFactory || (ɵTuiHintPointer_BaseFactory = ɵɵgetInheritedFactory(_TuiHintPointer)))(__ngFactoryType__ || _TuiHintPointer);
  };
})();
_TuiHintPointer.ɵdir = ɵɵdefineDirective({
  type: _TuiHintPointer,
  selectors: [["", "tuiHint", "", "tuiHintPointer", ""]],
  hostBindings: function TuiHintPointer_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("mousemove.silent", function TuiHintPointer_mousemove_silent_HostBindingHandler($event) {
        return ctx.onMove($event);
      });
    }
  },
  standalone: true,
  features: [ɵɵProvidersFeature([tuiAsRectAccessor(_TuiHintPointer), tuiAsDriver(_TuiHintPointer)]), ɵɵInheritDefinitionFeature]
});
var TuiHintPointer = _TuiHintPointer;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintPointer, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiHint][tuiHintPointer]",
      providers: [tuiAsRectAccessor(TuiHintPointer), tuiAsDriver(TuiHintPointer)],
      host: {
        "(mousemove.silent)": "onMove($event)"
      }
    }]
  }], null, null);
})();
var _TuiHintUnstyledComponent = class _TuiHintUnstyledComponent {
  constructor() {
    this.context = inject(POLYMORPHEUS_CONTEXT);
  }
};
_TuiHintUnstyledComponent.ɵfac = function TuiHintUnstyledComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiHintUnstyledComponent)();
};
_TuiHintUnstyledComponent.ɵcmp = ɵɵdefineComponent({
  type: _TuiHintUnstyledComponent,
  selectors: [["ng-component"]],
  hostVars: 1,
  hostBindings: function TuiHintUnstyledComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵsyntheticHostProperty("@tuiParentAnimation", void 0);
    }
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 1,
  vars: 1,
  consts: [[4, "polymorpheusOutlet"]],
  template: function TuiHintUnstyledComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, TuiHintUnstyledComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
    }
    if (rf & 2) {
      ɵɵproperty("polymorpheusOutlet", ctx.context.$implicit.content);
    }
  },
  dependencies: [PolymorpheusOutlet],
  encapsulation: 2,
  data: {
    animation: [tuiParentAnimation]
  },
  changeDetection: 0
});
var TuiHintUnstyledComponent = _TuiHintUnstyledComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintUnstyledComponent, [{
    type: Component,
    args: [{
      standalone: true,
      imports: [PolymorpheusOutlet],
      template: '<ng-container *polymorpheusOutlet="context.$implicit.content" />',
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [tuiParentAnimation],
      host: {
        "[@tuiParentAnimation]": ""
      }
    }]
  }], null, null);
})();
var _TuiHintUnstyled = class _TuiHintUnstyled {
  constructor() {
    const hint = inject(TuiHintDirective);
    hint.component = new PolymorpheusComponent(TuiHintUnstyledComponent);
    hint.content = inject(TemplateRef);
  }
};
_TuiHintUnstyled.ɵfac = function TuiHintUnstyled_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiHintUnstyled)();
};
_TuiHintUnstyled.ɵdir = ɵɵdefineDirective({
  type: _TuiHintUnstyled,
  selectors: [["ng-template", "tuiHint", ""]],
  standalone: true
});
var TuiHintUnstyled = _TuiHintUnstyled;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintUnstyled, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-template[tuiHint]"
    }]
  }], function() {
    return [];
  }, null);
})();
var GAP = 4;
var TUI_HINT_PROVIDERS = [TuiPositionService, TuiHoveredService, tuiPositionAccessorFor("hint", TuiHintPosition), tuiRectAccessorFor("hint", TuiHintDirective)];
var _TuiHintComponent = class _TuiHintComponent {
  constructor() {
    this.el = tuiInjectElement();
    this.hover = inject(TuiHintHover);
    this.vvs = inject(TuiVisualViewportService);
    this.viewport = inject(TUI_VIEWPORT);
    this.options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
    this.pointer = inject(TuiHintPointer, {
      optional: true
    });
    this.accessor = inject(TuiRectAccessor);
    this.hint = inject(POLYMORPHEUS_CONTEXT).$implicit;
    this.appearance = this.hint.appearance || this.hint.el.closest("[tuiTheme]")?.getAttribute("tuiTheme");
    inject(TuiPositionService).pipe(takeWhile(() => this.hint.el.isConnected), map((point) => this.vvs.correct(point)), takeUntilDestroyed()).subscribe({
      next: ([top, left]) => this.update(top, left),
      complete: () => this.hover.toggle(false)
    });
    inject(TuiHoveredService).pipe(takeUntilDestroyed()).subscribe((hover) => this.hover.toggle(hover));
  }
  get content() {
    return this.hint.component.component === TuiHintUnstyledComponent ? "" : this.hint.content;
  }
  onClick(target) {
    if (!target.closest("tui-hint") && !this.hint.el.contains(target) || tuiIsObscured(this.hint.el)) {
      this.hover.toggle(false);
    }
  }
  apply(top, left, beakTop, beakLeft) {
    this.el.style.top = top;
    this.el.style.left = left;
    this.el.style.setProperty("--top", beakTop);
    this.el.style.setProperty("--left", beakLeft);
  }
  update(top, left) {
    const {
      height,
      width
    } = this.el.getBoundingClientRect();
    const rect = this.accessor.getClientRect();
    const viewport = this.viewport.getClientRect();
    if (rect === EMPTY_CLIENT_RECT || !height || !width) {
      return;
    }
    const safeLeft = tuiClamp(left, GAP, viewport.width - width - GAP);
    const [beakTop, beakLeft] = this.vvs.correct([rect.top + rect.height / 2 - top, rect.left + rect.width / 2 - safeLeft]);
    this.apply(tuiPx(Math.round(top)), tuiPx(Math.round(safeLeft)), tuiPx(Math.round(tuiClamp(beakTop, 1, height - 1))), tuiPx(Math.round(tuiClamp(beakLeft, 1, width - 1))));
  }
};
_TuiHintComponent.ɵfac = function TuiHintComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiHintComponent)();
};
_TuiHintComponent.ɵcmp = ɵɵdefineComponent({
  type: _TuiHintComponent,
  selectors: [["tui-hint"]],
  hostVars: 5,
  hostBindings: function TuiHintComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function TuiHintComponent_click_HostBindingHandler($event) {
        return ctx.onClick($event.target);
      }, false, ɵɵresolveDocument);
    }
    if (rf & 2) {
      ɵɵsyntheticHostProperty("@tuiFadeIn", ctx.options);
      ɵɵattribute("data-appearance", ctx.appearance)("tuiTheme", ctx.appearance);
      ɵɵclassProp("_untouchable", ctx.pointer);
    }
  },
  standalone: true,
  features: [ɵɵProvidersFeature(TUI_HINT_PROVIDERS), ɵɵStandaloneFeature],
  ngContentSelectors: _c02,
  decls: 2,
  vars: 2,
  consts: [[3, "innerHTML", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], [3, "innerHTML"]],
  template: function TuiHintComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
      ɵɵtemplate(1, TuiHintComponent_span_1_Template, 1, 1, "span", 0);
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("polymorpheusOutlet", ctx.content)("polymorpheusOutletContext", ctx.hint.context);
    }
  },
  dependencies: [PolymorpheusOutlet],
  styles: ['[_nghost-%COMP%]{position:absolute;max-inline-size:18rem;min-block-size:var(--tui-height-m);padding:.75rem 1rem;background:var(--tui-background-accent-1);border-radius:var(--tui-radius-l);color:var(--tui-text-primary-on-accent-1);box-sizing:border-box;font:var(--tui-font-text-s);white-space:pre-line;word-wrap:break-word;line-height:1.25rem}[_nghost-%COMP%]:before{content:"";position:absolute;top:var(--top);left:var(--left);inline-size:.5rem;block-size:.5rem;border-radius:.125rem;box-sizing:border-box;background:inherit;transform:translate(-50%,-50%) rotate(45deg)}[data-appearance=error][_nghost-%COMP%]{background:var(--tui-status-negative)}[data-appearance=dark][_nghost-%COMP%]{background:var(--tui-background-accent-opposite-hover);color:var(--tui-background-base);filter:drop-shadow(0 0 .125rem rgba(0,0,0,.16)) drop-shadow(0 1.5rem 1rem rgba(0,0,0,.03)) drop-shadow(0 .75rem .75rem rgba(0,0,0,.04)) drop-shadow(0 .25rem .375rem rgba(0,0,0,.05))}[_nghost-%COMP%]:not([style*=top]){visibility:hidden}._untouchable[_nghost-%COMP%]{pointer-events:none}'],
  data: {
    animation: [tuiFadeIn]
  },
  changeDetection: 0
});
var TuiHintComponent = _TuiHintComponent;
__decorate([tuiPure], TuiHintComponent.prototype, "apply", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-hint",
      imports: [PolymorpheusOutlet],
      template: `
        <ng-content />
        <span
            *polymorpheusOutlet="content as text; context: hint.context"
            [innerHTML]="text"
        ></span>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: TUI_HINT_PROVIDERS,
      animations: [tuiFadeIn],
      host: {
        "[@tuiFadeIn]": "options",
        "[class._untouchable]": "pointer",
        "[attr.data-appearance]": "appearance",
        "[attr.tuiTheme]": "appearance",
        "(document:click)": "onClick($event.target)"
      },
      styles: [':host{position:absolute;max-inline-size:18rem;min-block-size:var(--tui-height-m);padding:.75rem 1rem;background:var(--tui-background-accent-1);border-radius:var(--tui-radius-l);color:var(--tui-text-primary-on-accent-1);box-sizing:border-box;font:var(--tui-font-text-s);white-space:pre-line;word-wrap:break-word;line-height:1.25rem}:host:before{content:"";position:absolute;top:var(--top);left:var(--left);inline-size:.5rem;block-size:.5rem;border-radius:.125rem;box-sizing:border-box;background:inherit;transform:translate(-50%,-50%) rotate(45deg)}:host[data-appearance=error]{background:var(--tui-status-negative)}:host[data-appearance=dark]{background:var(--tui-background-accent-opposite-hover);color:var(--tui-background-base);filter:drop-shadow(0 0 .125rem rgba(0,0,0,.16)) drop-shadow(0 1.5rem 1rem rgba(0,0,0,.03)) drop-shadow(0 .75rem .75rem rgba(0,0,0,.04)) drop-shadow(0 .25rem .375rem rgba(0,0,0,.05))}:host:not([style*=top]){visibility:hidden}:host._untouchable{pointer-events:none}\n']
    }]
  }], function() {
    return [];
  }, {
    apply: []
  });
})();
var _TuiHintDescribe = class _TuiHintDescribe extends TuiDriver {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.doc = inject(DOCUMENT);
    this.el = tuiInjectElement();
    this.id$ = new BehaviorSubject("");
    this.stream$ = this.id$.pipe(distinctUntilChanged(), tuiIfMap(() => fromEvent(this.doc, "keydown", {
      capture: true
    }), tuiIsPresent), switchMap(() => this.focused ? of(false) : merge(tuiTypedFromEvent(this.doc, "keyup"), tuiTypedFromEvent(this.element, "blur")).pipe(map(() => this.focused))), debounce((visible) => visible ? timer(1e3) : of(null)), startWith(false), distinctUntilChanged(), skip(1), tuiZoneOptimized());
    this.type = "hint";
  }
  set tuiHintDescribe(id) {
    this.id$.next(id || "");
  }
  get element() {
    return this.doc.getElementById(this.id$.value || "") || this.el;
  }
  get focused() {
    return tuiIsNativeFocused(this.element);
  }
};
_TuiHintDescribe.ɵfac = function TuiHintDescribe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiHintDescribe)();
};
_TuiHintDescribe.ɵdir = ɵɵdefineDirective({
  type: _TuiHintDescribe,
  selectors: [["", "tuiHintDescribe", ""]],
  inputs: {
    tuiHintDescribe: "tuiHintDescribe"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([tuiAsDriver(_TuiHintDescribe)]), ɵɵInheritDefinitionFeature]
});
var TuiHintDescribe = _TuiHintDescribe;
__decorate([tuiPure], TuiHintDescribe.prototype, "element", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintDescribe, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiHintDescribe]",
      providers: [tuiAsDriver(TuiHintDescribe)]
    }]
  }], function() {
    return [];
  }, {
    tuiHintDescribe: [{
      type: Input
    }],
    element: []
  });
})();
var _TuiHintHost = class _TuiHintHost extends TuiRectAccessor {
  constructor() {
    super(...arguments);
    this.type = "hint";
  }
  getClientRect() {
    return this.tuiHintHost?.getBoundingClientRect() || EMPTY_CLIENT_RECT;
  }
};
_TuiHintHost.ɵfac = /* @__PURE__ */ (() => {
  let ɵTuiHintHost_BaseFactory;
  return function TuiHintHost_Factory(__ngFactoryType__) {
    return (ɵTuiHintHost_BaseFactory || (ɵTuiHintHost_BaseFactory = ɵɵgetInheritedFactory(_TuiHintHost)))(__ngFactoryType__ || _TuiHintHost);
  };
})();
_TuiHintHost.ɵdir = ɵɵdefineDirective({
  type: _TuiHintHost,
  selectors: [["", "tuiHint", "", "tuiHintHost", ""]],
  inputs: {
    tuiHintHost: "tuiHintHost"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([tuiAsRectAccessor(_TuiHintHost)]), ɵɵInheritDefinitionFeature]
});
var TuiHintHost = _TuiHintHost;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintHost, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiHint][tuiHintHost]",
      providers: [tuiAsRectAccessor(TuiHintHost)]
    }]
  }], null, {
    tuiHintHost: [{
      type: Input
    }]
  });
})();
var _TuiHintManual = class _TuiHintManual extends TuiDriver {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.hover = inject(TuiHintHover);
    this.stream$ = new BehaviorSubject(false);
    this.tuiHintManual = false;
    this.type = "hint";
    this.hover.enabled = false;
  }
  ngOnChanges() {
    this.stream$.next(this.tuiHintManual);
  }
};
_TuiHintManual.ɵfac = function TuiHintManual_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiHintManual)();
};
_TuiHintManual.ɵdir = ɵɵdefineDirective({
  type: _TuiHintManual,
  selectors: [["", "tuiHint", "", "tuiHintManual", ""]],
  inputs: {
    tuiHintManual: "tuiHintManual"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([tuiAsDriver(_TuiHintManual)]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
});
var TuiHintManual = _TuiHintManual;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintManual, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiHint][tuiHintManual]",
      providers: [tuiAsDriver(TuiHintManual)]
    }]
  }], function() {
    return [];
  }, {
    tuiHintManual: [{
      type: Input
    }]
  });
})();
var _TuiHintOverflow = class _TuiHintOverflow {
  constructor() {
    this.hint = inject(TuiHintDirective);
  }
  onMouseEnter({
    scrollWidth,
    clientWidth,
    textContent
  }) {
    this.hint.tuiHint = scrollWidth > clientWidth ? textContent : "";
  }
};
_TuiHintOverflow.ɵfac = function TuiHintOverflow_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiHintOverflow)();
};
_TuiHintOverflow.ɵdir = ɵɵdefineDirective({
  type: _TuiHintOverflow,
  selectors: [["", "tuiHintOverflow", ""]],
  hostBindings: function TuiHintOverflow_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("mouseenter", function TuiHintOverflow_mouseenter_HostBindingHandler($event) {
        return ctx.onMouseEnter($event.currentTarget);
      });
    }
  },
  standalone: true,
  features: [ɵɵHostDirectivesFeature([{
    directive: TuiHintDirective,
    inputs: ["tuiHintAppearance", "tuiHintAppearance"]
  }])]
});
var TuiHintOverflow = _TuiHintOverflow;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintOverflow, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiHintOverflow]",
      hostDirectives: [{
        directive: TuiHintDirective,
        inputs: ["tuiHintAppearance"]
      }],
      host: {
        "(mouseenter)": "onMouseEnter($event.currentTarget)"
      }
    }]
  }], null, null);
})();
var TuiHint = [TuiHintComponent, TuiHintDirective, TuiHintOptionsDirective, TuiHintUnstyled, TuiHintDriver, TuiHintPosition, TuiHintHover, TuiHintOverflow, TuiHintDescribe, TuiHintHost, TuiHintManual, TuiHintPointer];
var _TuiHints = class _TuiHints {
  constructor() {
    this.hints$ = inject(TuiHintService);
    this.destroyRef = inject(DestroyRef);
    this.cdr = inject(ChangeDetectorRef);
    this.hints = [];
  }
  ngOnInit() {
    this.hints$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((hints) => {
      this.hints = hints;
      this.cdr.detectChanges();
    });
  }
};
_TuiHints.ɵfac = function TuiHints_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiHints)();
};
_TuiHints.ɵcmp = ɵɵdefineComponent({
  type: _TuiHints,
  selectors: [["tui-hints"]],
  hostAttrs: ["aria-live", "polite"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 1,
  vars: 1,
  consts: [["role", "tooltip", 3, "tuiActiveZoneParent", 4, "ngFor", "ngForOf"], ["role", "tooltip", 3, "tuiActiveZoneParent"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"]],
  template: function TuiHints_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, TuiHints_div_0_Template, 2, 6, "div", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngForOf", ctx.hints);
    }
  },
  dependencies: [NgForOf, TuiActiveZone, PolymorpheusOutlet],
  styles: ["[_nghost-%COMP%]{position:fixed;top:0;left:0;inline-size:100%;block-size:100%;block-size:0}"],
  data: {
    animation: [tuiParentAnimation]
  }
});
var TuiHints = _TuiHints;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHints, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-hints",
      imports: [NgForOf, TuiActiveZone, PolymorpheusOutlet, PolymorpheusTemplate],
      changeDetection: ChangeDetectionStrategy.Default,
      animations: [tuiParentAnimation],
      host: {
        "aria-live": "polite"
      },
      template: '<div\n    *ngFor="let hint of hints"\n    role="tooltip"\n    @tuiParentAnimation\n    [tuiActiveZoneParent]="hint.activeZone || null"\n>\n    <ng-container *polymorpheusOutlet="hint.component; context: {$implicit: hint}" />\n</div>\n',
      styles: [":host{position:fixed;top:0;left:0;inline-size:100%;block-size:100%;block-size:0}\n"]
    }]
  }], null, null);
})();

export {
  TUI_GROUP_DEFAULT_OPTIONS,
  TUI_GROUP_OPTIONS,
  tuiGroupOptionsProvider,
  TuiGroup,
  TuiLabel,
  TUI_TEXTFIELD_OPTIONS,
  tuiTextfieldOptionsProvider,
  TuiTextfieldOptionsDirective,
  TuiTextfieldDropdownDirective,
  TuiWithTextfieldDropdown,
  TuiTextfieldComponent,
  TuiTextfieldBase,
  TuiTextfieldDirective,
  TuiSelect,
  TuiTextfield,
  TuiTextfieldContent,
  TUI_HINT_COMPONENT,
  TuiHintService,
  TuiHintDriver,
  TUI_HINT_DIRECTIONS,
  TUI_HINT_DEFAULT_OPTIONS,
  TUI_HINT_OPTIONS,
  tuiHintOptionsProvider,
  TuiHintOptionsDirective,
  TuiHintHover,
  TuiHintPosition,
  TuiHintDirective,
  TuiHintPointer,
  TuiHintUnstyledComponent,
  TuiHintUnstyled,
  TUI_HINT_PROVIDERS,
  TuiHintComponent,
  TuiHintDescribe,
  TuiHintHost,
  TuiHintManual,
  TuiHintOverflow,
  TuiHint,
  TuiHints
};
//# sourceMappingURL=chunk-7MXADVOX.js.map
