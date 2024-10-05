import {
  TUI_ANIMATIONS_SPEED,
  TUI_CLOSE_WORD,
  TUI_COMMON_ICONS,
  TuiBreakpointService,
  TuiButton,
  TuiScrollControls,
  TuiScrollRef,
  tuiFadeIn,
  tuiGetDuration,
  tuiGetViewportWidth,
  tuiHost,
  tuiSlideInTop
} from "./chunk-VHZHJUUS.js";
import {
  TuiAutoFocus,
  TuiFocusTrap
} from "./chunk-ERLSLKKF.js";
import {
  TuiPopoverDirective
} from "./chunk-MRXIBML3.js";
import {
  PolymorpheusOutlet,
  TUI_TRUE_HANDLER,
  TuiPopoverService,
  WA_WINDOW,
  injectContext,
  takeUntilDestroyed,
  toSignal,
  tuiAsPopover,
  tuiContainsOrAfter,
  tuiCreateToken,
  tuiGetActualTarget,
  tuiInjectElement,
  tuiIsElement,
  tuiProvideOptions,
  tuiTypedFromEvent
} from "./chunk-VAG3OFHX.js";
import {
  AsyncPipe,
  DOCUMENT,
  NgForOf,
  NgIf
} from "./chunk-OREPAVVY.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  Injectable,
  computed,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵsyntheticHostProperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-H2EPMWCO.js";
import {
  BehaviorSubject,
  EMPTY,
  Observable,
  Subject,
  filter,
  isObservable,
  map,
  merge,
  of,
  switchMap,
  take
} from "./chunk-2WRQ7LJK.js";

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-dialog.mjs
function TuiDialogComponent_header_0_ng_container_1_Template(rf, ctx) {
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
function TuiDialogComponent_header_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "header", 6);
    ɵɵtemplate(1, TuiDialogComponent_header_0_ng_container_1_Template, 2, 1, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r1.header)("polymorpheusOutletContext", ctx_r1.context);
  }
}
function TuiDialogComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "div", 7);
    ɵɵelementStart(2, "div", 8)(3, "button", 9);
    ɵɵlistener("click", function TuiDialogComponent_ng_container_4_Template_button_click_3_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.context.$implicit.complete());
    });
    ɵɵtext(4);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r4 = ctx.polymorpheusOutlet;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("innerHTML", text_r4, ɵɵsanitizeHtml);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", (ctx_r1.context.data == null ? null : ctx_r1.context.data.button) || "OK", " ");
  }
}
function TuiDialogComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 10)(1, "button", 11);
    ɵɵlistener("click", function TuiDialogComponent_div_6_Template_button_click_1_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.close$.next());
    })("mousedown.prevent.silent", function TuiDialogComponent_div_6_Template_button_mousedown_prevent_silent_1_listener() {
      ɵɵrestoreView(_r5);
      return ɵɵresetView(0);
    });
    ɵɵtext(2);
    ɵɵpipe(3, "async");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵstyleProp("border-radius", 100, "%");
    ɵɵproperty("appearance", ctx_r1.isMobile() ? "icon" : "neutral")("iconStart", ctx_r1.icons.close)("size", ctx_r1.isMobile() ? "xs" : "s");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 6, ctx_r1.closeWord$), " ");
  }
}
function TuiDialogs_section_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiDialogs_section_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "section", 2);
    ɵɵtemplate(1, TuiDialogs_section_1_ng_container_1_Template, 1, 0, "ng-container", 3);
    ɵɵelement(2, "tui-scroll-controls", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    ɵɵproperty("@tuiHost", void 0);
    ɵɵattribute("aria-labelledby", item_r1.id);
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", item_r1.component)("polymorpheusOutletContext", item_r1);
  }
}
var TUI_DIALOGS = tuiCreateToken(new BehaviorSubject([]));
var TUI_DIALOG_DEFAULT_OPTIONS = {
  appearance: "",
  size: "m",
  required: false,
  closeable: true,
  dismissible: true,
  label: "",
  header: "",
  data: void 0
};
var TUI_DIALOGS_CLOSE = tuiCreateToken(EMPTY);
var TUI_DIALOG_OPTIONS = tuiCreateToken(TUI_DIALOG_DEFAULT_OPTIONS);
function tuiDialogOptionsProvider(options) {
  return tuiProvideOptions(TUI_DIALOG_OPTIONS, options, TUI_DIALOG_DEFAULT_OPTIONS);
}
var SCROLLBAR_PLACEHOLDER = 17;
var TuiDialogCloseService = class _TuiDialogCloseService extends Observable {
  constructor() {
    super((subscriber) => merge(this.esc$, this.mousedown$).subscribe(subscriber));
    this.win = inject(WA_WINDOW);
    this.doc = inject(DOCUMENT);
    this.el = tuiInjectElement();
    this.esc$ = tuiTypedFromEvent(this.doc, "keydown").pipe(filter((event) => {
      const target = tuiGetActualTarget(event);
      return event.key === "Escape" && !event.defaultPrevented && (this.el.contains(target) || this.isOutside(target));
    }));
    this.mousedown$ = tuiTypedFromEvent(this.doc, "mousedown").pipe(filter((event) => tuiGetViewportWidth(this.win) - event.clientX > SCROLLBAR_PLACEHOLDER && this.isOutside(tuiGetActualTarget(event))), switchMap(() => tuiTypedFromEvent(this.doc, "mouseup").pipe(take(1), map(tuiGetActualTarget), filter((target) => this.isOutside(target)))));
  }
  isOutside(target) {
    return tuiIsElement(target) && (!tuiContainsOrAfter(this.el, target) || target === this.el);
  }
  static {
    this.ɵfac = function TuiDialogCloseService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDialogCloseService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiDialogCloseService,
      factory: _TuiDialogCloseService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialogCloseService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var REQUIRED_ERROR = new Error("Required dialog was dismissed");
function toObservable(valueOrStream) {
  return isObservable(valueOrStream) ? valueOrStream : of(valueOrStream);
}
var TuiDialogComponent = class _TuiDialogComponent {
  constructor() {
    this.speed = inject(TUI_ANIMATIONS_SPEED);
    this.animation = {
      value: "",
      params: {
        start: "40px",
        duration: tuiGetDuration(this.speed)
      }
    };
    this.fullscreenAnimation = {
      value: "",
      params: {
        start: "100vh",
        duration: tuiGetDuration(this.speed)
      }
    };
    this.close$ = new Subject();
    this.context = injectContext();
    this.closeWord$ = inject(TUI_CLOSE_WORD);
    this.icons = inject(TUI_COMMON_ICONS);
    this.slideInTop = computed(() => this.size === "fullscreen" || this.size === "page" || this.isMobile() ? this.fullscreenAnimation : this.animation);
    this.isMobile = toSignal(inject(TuiBreakpointService).pipe(map((breakpoint) => breakpoint === "mobile")));
    merge(this.close$.pipe(switchMap(() => toObservable(this.context.closeable))), inject(TuiDialogCloseService).pipe(switchMap(() => toObservable(this.context.dismissible))), inject(TUI_DIALOGS_CLOSE).pipe(map(TUI_TRUE_HANDLER))).pipe(filter(Boolean), takeUntilDestroyed()).subscribe(() => {
      this.close();
    });
  }
  get size() {
    return this.context.size;
  }
  get header() {
    return this.context.header;
  }
  close() {
    if (this.context.required) {
      this.context.$implicit.error(REQUIRED_ERROR);
    } else {
      this.context.$implicit.complete();
    }
  }
  static {
    this.ɵfac = function TuiDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDialogComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiDialogComponent,
      selectors: [["tui-dialog"]],
      hostVars: 6,
      hostBindings: function TuiDialogComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵsyntheticHostProperty("@tuiSlideInTop", ctx.slideInTop())("@tuiFadeIn", ctx.slideInTop());
          ɵɵattribute("data-appearance", ctx.context.appearance)("data-size", ctx.size);
          ɵɵclassProp("_centered", ctx.header);
        }
      },
      standalone: true,
      features: [ɵɵProvidersFeature([TuiDialogCloseService]), ɵɵStandaloneFeature],
      decls: 7,
      vars: 6,
      consts: [["class", "t-header", 4, "ngIf"], [1, "t-content"], [1, "t-heading", 3, "id", "textContent"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], [1, "t-filler"], ["class", "t-wrapper", 4, "ngIf"], [1, "t-header"], [3, "innerHTML"], [1, "t-buttons"], ["size", "m", "tuiAutoFocus", "", "tuiButton", "", "type", "button", 3, "click"], [1, "t-wrapper"], ["automation-id", "tui-dialog__close", "tuiIconButton", "", "type", "button", 1, "t-close", 3, "click", "mousedown.prevent.silent", "appearance", "iconStart", "size"]],
      template: function TuiDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiDialogComponent_header_0_Template, 2, 2, "header", 0);
          ɵɵelementStart(1, "div", 1);
          ɵɵelement(2, "h2", 2);
          ɵɵelementStart(3, "section");
          ɵɵtemplate(4, TuiDialogComponent_ng_container_4_Template, 5, 2, "ng-container", 3);
          ɵɵelementEnd()();
          ɵɵelement(5, "div", 4);
          ɵɵtemplate(6, TuiDialogComponent_div_6_Template, 4, 8, "div", 5);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.header);
          ɵɵadvance(2);
          ɵɵproperty("id", ctx.context.id)("textContent", ctx.context.label);
          ɵɵadvance(2);
          ɵɵproperty("polymorpheusOutlet", ctx.context.content)("polymorpheusOutletContext", ctx.context);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.context.closeable);
        }
      },
      dependencies: [AsyncPipe, NgIf, PolymorpheusOutlet, TuiAutoFocus, TuiButton],
      styles: ['[_nghost-%COMP%]{position:relative;display:flex;font:var(--tui-font-text-m);flex-direction:column;box-sizing:border-box;margin:auto;border-radius:1.5rem;border:2.5rem solid transparent}[_nghost-%COMP%]:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";border-radius:inherit;pointer-events:none;box-shadow:var(--tui-shadow-popup)}[data-size=auto][_nghost-%COMP%]{inline-size:auto}[data-size=s][_nghost-%COMP%]{inline-size:30rem}[data-size=s][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:1.5rem}[data-size=s][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%]{font:var(--tui-font-heading-5)}[data-size=m][_nghost-%COMP%]{inline-size:42.5rem}[data-size=l][_nghost-%COMP%]{inline-size:55rem}[data-size=fullscreen][_nghost-%COMP%], [data-size=page][_nghost-%COMP%]{min-inline-size:100vw;min-block-size:100%;border-radius:0;border:none;background:var(--tui-background-elevation-1);box-shadow:0 4rem var(--tui-background-elevation-1)}[data-size=fullscreen][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%], [data-size=page][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:3rem calc(50vw - 22.5rem)}[data-size=fullscreen][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%], [data-size=page][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%]{font:var(--tui-font-heading-3)}._centered[_nghost-%COMP%]{text-align:center}[_nghost-%COMP%]   tui-root._mobile[data-size][_nghost-%COMP%], tui-root._mobile   [data-size][_nghost-%COMP%]{min-inline-size:100%;inline-size:100%;max-inline-size:100%;border-radius:0;border:none;margin:auto 0 0}[_nghost-%COMP%]   tui-root._mobile[data-size][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%], tui-root._mobile   [data-size][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:1rem}[_nghost-%COMP%]   tui-root._mobile[data-size][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%], tui-root._mobile   [data-size][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%]{font:var(--tui-font-heading-5)}[data-size=page][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%], tui-root._mobile   [data-size=page][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:0}.t-heading[_ngcontent-%COMP%]{margin:0 0 .5rem;word-wrap:break-word;font:var(--tui-font-heading-4)}.t-heading[_ngcontent-%COMP%]:empty{display:none}.t-header[_ngcontent-%COMP%]{display:flex;border-top-left-radius:inherit;border-top-right-radius:inherit;overflow:hidden}[data-size=fullscreen][_nghost-%COMP%]   tui-root._mobile[_nghost-%COMP%]   .t-header[_ngcontent-%COMP%], tui-root._mobile   [_nghost-%COMP%]   .t-header[_ngcontent-%COMP%]{flex:1}.t-content[_ngcontent-%COMP%]{border-radius:inherit;padding:1.75rem;background:var(--tui-background-elevation-1)}.t-content[_ngcontent-%COMP%]:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}.t-wrapper[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1;order:-1}.t-filler[_ngcontent-%COMP%]{flex-grow:1}.t-close[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:1rem;right:1rem}.t-buttons[_ngcontent-%COMP%]{margin-top:1.25rem;text-align:end}'],
      data: {
        animation: [tuiSlideInTop, tuiFadeIn]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialogComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-dialog",
      imports: [AsyncPipe, NgIf, PolymorpheusOutlet, TuiAutoFocus, TuiButton],
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [TuiDialogCloseService],
      animations: [tuiSlideInTop, tuiFadeIn],
      host: {
        "[@tuiSlideInTop]": "slideInTop()",
        "[@tuiFadeIn]": "slideInTop()",
        "[attr.data-appearance]": "context.appearance",
        "[attr.data-size]": "size",
        "[class._centered]": "header"
      },
      template: `<header
    *ngIf="header"
    class="t-header"
>
    <ng-container *polymorpheusOutlet="header as text; context: context">
        {{ text }}
    </ng-container>
</header>
<div class="t-content">
    <h2
        class="t-heading"
        [id]="context.id"
        [textContent]="context.label"
    ></h2>
    <section>
        <ng-container *polymorpheusOutlet="context.content as text; context: context">
            <div [innerHTML]="text"></div>
            <div class="t-buttons">
                <button
                    size="m"
                    tuiAutoFocus
                    tuiButton
                    type="button"
                    (click)="context.$implicit.complete()"
                >
                    {{ context.data?.button || 'OK' }}
                </button>
            </div>
        </ng-container>
    </section>
</div>
<div class="t-filler"></div>

<!-- Close button is insensitive to \`context.closeable === Observable<false>\` by design -->
<div
    *ngIf="context.closeable"
    class="t-wrapper"
>
    <button
        automation-id="tui-dialog__close"
        tuiIconButton
        type="button"
        class="t-close"
        [appearance]="isMobile() ? 'icon' : 'neutral'"
        [iconStart]="icons.close"
        [size]="isMobile() ? 'xs' : 's'"
        [style.border-radius.%]="100"
        (click)="close$.next()"
        (mousedown.prevent.silent)="(0)"
    >
        {{ closeWord$ | async }}
    </button>
</div>
`,
      styles: [':host{position:relative;display:flex;font:var(--tui-font-text-m);flex-direction:column;box-sizing:border-box;margin:auto;border-radius:1.5rem;border:2.5rem solid transparent}:host:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";border-radius:inherit;pointer-events:none;box-shadow:var(--tui-shadow-popup)}:host[data-size=auto]{inline-size:auto}:host[data-size=s]{inline-size:30rem}:host[data-size=s] .t-content{padding:1.5rem}:host[data-size=s] .t-heading{font:var(--tui-font-heading-5)}:host[data-size=m]{inline-size:42.5rem}:host[data-size=l]{inline-size:55rem}:host[data-size=fullscreen],:host[data-size=page]{min-inline-size:100vw;min-block-size:100%;border-radius:0;border:none;background:var(--tui-background-elevation-1);box-shadow:0 4rem var(--tui-background-elevation-1)}:host[data-size=fullscreen] .t-content,:host[data-size=page] .t-content{padding:3rem calc(50vw - 22.5rem)}:host[data-size=fullscreen] .t-heading,:host[data-size=page] .t-heading{font:var(--tui-font-heading-3)}:host._centered{text-align:center}:host :host-context(tui-root._mobile)[data-size]{min-inline-size:100%;inline-size:100%;max-inline-size:100%;border-radius:0;border:none;margin:auto 0 0}:host :host-context(tui-root._mobile)[data-size] .t-content{padding:1rem}:host :host-context(tui-root._mobile)[data-size] .t-heading{font:var(--tui-font-heading-5)}:host[data-size=page] .t-content,:host-context(tui-root._mobile) :host[data-size=page] .t-content{padding:0}.t-heading{margin:0 0 .5rem;word-wrap:break-word;font:var(--tui-font-heading-4)}.t-heading:empty{display:none}.t-header{display:flex;border-top-left-radius:inherit;border-top-right-radius:inherit;overflow:hidden}:host[data-size=fullscreen] :host-context(tui-root._mobile) .t-header{flex:1}.t-content{border-radius:inherit;padding:1.75rem;background:var(--tui-background-elevation-1)}.t-content:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}.t-wrapper{position:sticky;top:0;z-index:1;order:-1}.t-filler{flex-grow:1}.t-close{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:1rem;right:1rem}.t-buttons{margin-top:1.25rem;text-align:end}\n']
    }]
  }], function() {
    return [];
  }, null);
})();
var TuiDialogService = class _TuiDialogService extends TuiPopoverService {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiDialogService_BaseFactory;
      return function TuiDialogService_Factory(__ngFactoryType__) {
        return (ɵTuiDialogService_BaseFactory || (ɵTuiDialogService_BaseFactory = ɵɵgetInheritedFactory(_TuiDialogService)))(__ngFactoryType__ || _TuiDialogService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiDialogService,
      factory: () => (() => new _TuiDialogService(TUI_DIALOGS, TuiDialogComponent, inject(TUI_DIALOG_OPTIONS)))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialogService, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => new TuiDialogService(TUI_DIALOGS, TuiDialogComponent, inject(TUI_DIALOG_OPTIONS))
    }]
  }], null, null);
})();
var TuiDialog = class _TuiDialog extends TuiPopoverDirective {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiDialog_BaseFactory;
      return function TuiDialog_Factory(__ngFactoryType__) {
        return (ɵTuiDialog_BaseFactory || (ɵTuiDialog_BaseFactory = ɵɵgetInheritedFactory(_TuiDialog)))(__ngFactoryType__ || _TuiDialog);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDialog,
      selectors: [["ng-template", "tuiDialog", ""]],
      inputs: {
        options: [0, "tuiDialogOptions", "options"],
        open: [0, "tuiDialog", "open"]
      },
      outputs: {
        openChange: "tuiDialogChange"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAsPopover(TuiDialogService)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialog, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-template[tuiDialog]",
      inputs: ["options: tuiDialogOptions", "open: tuiDialog"],
      outputs: ["openChange: tuiDialogChange"],
      providers: [tuiAsPopover(TuiDialogService)]
    }]
  }], null, null);
})();
var TuiDialogs = class _TuiDialogs {
  constructor() {
    this.el = tuiInjectElement();
    this.dialogs = toSignal(inject(TUI_DIALOGS), {
      initialValue: []
    });
  }
  static {
    this.ɵfac = function TuiDialogs_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDialogs)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiDialogs,
      selectors: [["tui-dialogs"]],
      hostBindings: function TuiDialogs_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("keydown.silent", function TuiDialogs_keydown_silent_HostBindingHandler() {
            return ctx.el.scrollTop = ctx.el.scrollHeight / 2;
          });
        }
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 2,
      vars: 3,
      consts: [[1, "t-overlay"], ["aria-modal", "true", "role", "dialog", "tuiFocusTrap", "", "tuiScrollRef", "", "class", "t-dialog", 4, "ngFor", "ngForOf"], ["aria-modal", "true", "role", "dialog", "tuiFocusTrap", "", "tuiScrollRef", "", 1, "t-dialog"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], [1, "t-scrollbars"]],
      template: function TuiDialogs_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "div", 0);
          ɵɵtemplate(1, TuiDialogs_section_1_Template, 3, 4, "section", 1);
        }
        if (rf & 2) {
          ɵɵstyleProp("opacity", ctx.dialogs().length);
          ɵɵadvance();
          ɵɵproperty("ngForOf", ctx.dialogs());
        }
      },
      dependencies: [NgForOf, PolymorpheusOutlet, TuiFocusTrap, TuiScrollControls, TuiScrollRef],
      styles: ['[_nghost-%COMP%]{position:fixed;top:0;left:0;inline-size:100%;block-size:100%;scrollbar-width:none;-ms-overflow-style:none;pointer-events:none;overflow:hidden;overscroll-behavior:none}[_nghost-%COMP%]::-webkit-scrollbar, [_nghost-%COMP%]::-webkit-scrollbar-thumb{display:none}[_nghost-%COMP%]:has(section){pointer-events:auto;overflow:auto}[_nghost-%COMP%]:before{content:"";display:block;block-size:1000%}.t-overlay[_ngcontent-%COMP%], .t-dialog[_ngcontent-%COMP%]{transition-property:filter;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;scrollbar-width:none;-ms-overflow-style:none;position:fixed;top:0;left:0;bottom:0;right:0;display:flex;block-size:100%;align-items:flex-start;outline:none;overflow:auto}.t-overlay[_ngcontent-%COMP%]::-webkit-scrollbar, .t-dialog[_ngcontent-%COMP%]::-webkit-scrollbar, .t-overlay[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .t-dialog[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{display:none}.t-overlay.ng-animating[_ngcontent-%COMP%], .t-dialog.ng-animating[_ngcontent-%COMP%]{overflow:clip}.t-dialog[_ngcontent-%COMP%]{position:sticky;overscroll-behavior:none;filter:brightness(.25)}.t-overlay[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;background:var(--tui-service-backdrop);-webkit-backdrop-filter:var(--tui-backdrop, none);backdrop-filter:var(--tui-backdrop, none);opacity:0}.t-dialog[_ngcontent-%COMP%]:last-child{pointer-events:auto;filter:none}.t-scrollbars[_ngcontent-%COMP%]{position:fixed;top:0;left:0;bottom:0;right:0;margin:0;color:#747474}'],
      data: {
        animation: [tuiHost]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialogs, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-dialogs",
      imports: [NgForOf, PolymorpheusOutlet, TuiFocusTrap, TuiScrollControls, TuiScrollRef],
      changeDetection: ChangeDetectionStrategy.Default,
      animations: [tuiHost],
      host: {
        "(keydown.silent)": "el.scrollTop = el.scrollHeight / 2"
      },
      template: '<div\n    class="t-overlay"\n    [style.opacity]="dialogs().length"\n></div>\n<section\n    *ngFor="let item of dialogs()"\n    aria-modal="true"\n    role="dialog"\n    tuiFocusTrap\n    tuiScrollRef\n    class="t-dialog"\n    @tuiHost\n    [attr.aria-labelledby]="item.id"\n>\n    <ng-container *polymorpheusOutlet="item.component; context: item" />\n    <tui-scroll-controls class="t-scrollbars" />\n</section>\n',
      styles: [':host{position:fixed;top:0;left:0;inline-size:100%;block-size:100%;scrollbar-width:none;-ms-overflow-style:none;pointer-events:none;overflow:hidden;overscroll-behavior:none}:host::-webkit-scrollbar,:host::-webkit-scrollbar-thumb{display:none}:host:has(section){pointer-events:auto;overflow:auto}:host:before{content:"";display:block;block-size:1000%}.t-overlay,.t-dialog{transition-property:filter;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;scrollbar-width:none;-ms-overflow-style:none;position:fixed;top:0;left:0;bottom:0;right:0;display:flex;block-size:100%;align-items:flex-start;outline:none;overflow:auto}.t-overlay::-webkit-scrollbar,.t-dialog::-webkit-scrollbar,.t-overlay::-webkit-scrollbar-thumb,.t-dialog::-webkit-scrollbar-thumb{display:none}.t-overlay.ng-animating,.t-dialog.ng-animating{overflow:clip}.t-dialog{position:sticky;overscroll-behavior:none;filter:brightness(.25)}.t-overlay{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;background:var(--tui-service-backdrop);-webkit-backdrop-filter:var(--tui-backdrop, none);backdrop-filter:var(--tui-backdrop, none);opacity:0}.t-dialog:last-child{pointer-events:auto;filter:none}.t-scrollbars{position:fixed;top:0;left:0;bottom:0;right:0;margin:0;color:#747474}\n']
    }]
  }], null, null);
})();

export {
  TUI_DIALOGS,
  TUI_DIALOG_DEFAULT_OPTIONS,
  TUI_DIALOGS_CLOSE,
  TUI_DIALOG_OPTIONS,
  tuiDialogOptionsProvider,
  TuiDialogCloseService,
  TuiDialogComponent,
  TuiDialogService,
  TuiDialog,
  TuiDialogs
};
//# sourceMappingURL=chunk-NBPPRWP2.js.map
