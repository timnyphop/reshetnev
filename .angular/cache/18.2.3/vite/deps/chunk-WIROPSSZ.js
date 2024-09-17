import {
  TUI_ANIMATIONS_SPEED,
  TUI_CLOSE_WORD,
  TUI_COMMON_ICONS,
  TuiButton,
  TuiScrollControls,
  TuiScrollRef,
  tuiFadeIn,
  tuiGetDuration,
  tuiGetViewportWidth,
  tuiHost,
  tuiSlideInTop
} from "./chunk-M7KV4JTE.js";
import {
  TuiAutoFocus,
  TuiFocusTrap
} from "./chunk-7C2SET26.js";
import {
  POLYMORPHEUS_CONTEXT,
  PolymorpheusOutlet,
  PolymorpheusTemplate,
  TUI_IS_MOBILE,
  TUI_TRUE_HANDLER,
  TuiPopoverDirective,
  TuiPopoverService,
  WA_WINDOW,
  takeUntilDestroyed,
  tuiAsPopover,
  tuiContainsOrAfter,
  tuiCreateToken,
  tuiGetActualTarget,
  tuiInjectElement,
  tuiIsElement,
  tuiProvideOptions,
  tuiTypedFromEvent
} from "./chunk-IDV3SLH5.js";
import {
  AsyncPipe,
  CommonModule,
  DOCUMENT,
  NgForOf,
  NgIf
} from "./chunk-ET6A4XZJ.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  Injectable,
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
} from "./chunk-TMZGPDKF.js";
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
} from "./chunk-NUC4GERA.js";

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
    ɵɵproperty("appearance", ctx_r1.fullscreen ? "secondary" : "")("iconStart", ctx_r1.icons.close);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 5, ctx_r1.closeWord$), " ");
  }
}
function TuiDialogs_ng_container_0_section_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiDialogs_ng_container_0_section_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "section", 3);
    ɵɵtemplate(1, TuiDialogs_ng_container_0_section_1_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelement(2, "tui-scroll-controls", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const dialogs_r2 = ɵɵnextContext().ngIf;
    ɵɵclassProp("t-dialog_closing", !dialogs_r2.length);
    ɵɵproperty("@tuiHost", void 0);
    ɵɵattribute("aria-labelledby", item_r1.id);
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", item_r1.component)("polymorpheusOutletContext", item_r1);
  }
}
function TuiDialogs_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiDialogs_ng_container_0_section_1_Template, 3, 6, "section", 1);
    ɵɵelement(2, "div", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const dialogs_r2 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngForOf", dialogs_r2);
    ɵɵadvance();
    ɵɵstyleProp("opacity", dialogs_r2.length);
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
var _TuiDialogCloseService = class _TuiDialogCloseService extends Observable {
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
};
_TuiDialogCloseService.ɵfac = function TuiDialogCloseService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiDialogCloseService)();
};
_TuiDialogCloseService.ɵprov = ɵɵdefineInjectable({
  token: _TuiDialogCloseService,
  factory: _TuiDialogCloseService.ɵfac
});
var TuiDialogCloseService = _TuiDialogCloseService;
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
var _TuiDialogComponent = class _TuiDialogComponent {
  constructor() {
    this.speed = inject(TUI_ANIMATIONS_SPEED);
    this.isMobile = inject(TUI_IS_MOBILE);
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
    this.context = inject(POLYMORPHEUS_CONTEXT);
    this.closeWord$ = inject(TUI_CLOSE_WORD);
    this.icons = inject(TUI_COMMON_ICONS);
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
  get slideInTop() {
    return this.fullscreen || this.isMobile ? this.fullscreenAnimation : this.animation;
  }
  get fullscreen() {
    return !this.isMobile && (this.size === "fullscreen" || this.size === "page");
  }
  close() {
    if (this.context.required) {
      this.context.$implicit.error(REQUIRED_ERROR);
    } else {
      this.context.$implicit.complete();
    }
  }
};
_TuiDialogComponent.ɵfac = function TuiDialogComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiDialogComponent)();
};
_TuiDialogComponent.ɵcmp = ɵɵdefineComponent({
  type: _TuiDialogComponent,
  selectors: [["tui-dialog"]],
  hostVars: 6,
  hostBindings: function TuiDialogComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵsyntheticHostProperty("@tuiSlideInTop", ctx.slideInTop)("@tuiFadeIn", ctx.slideInTop);
      ɵɵattribute("data-appearance", ctx.context.appearance)("data-size", ctx.size);
      ɵɵclassProp("_centered", ctx.header);
    }
  },
  standalone: true,
  features: [ɵɵProvidersFeature([TuiDialogCloseService]), ɵɵStandaloneFeature],
  decls: 7,
  vars: 6,
  consts: [["class", "t-header", 4, "ngIf"], [1, "t-content"], [1, "t-heading", 3, "id", "textContent"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], [1, "t-filler"], ["class", "t-wrapper", 4, "ngIf"], [1, "t-header"], [3, "innerHTML"], [1, "t-buttons"], ["size", "m", "tuiAutoFocus", "", "tuiButton", "", "type", "button", 3, "click"], [1, "t-wrapper"], ["automation-id", "tui-dialog__close", "size", "s", "tuiIconButton", "", "type", "button", 1, "t-close", 3, "click", "mousedown.prevent.silent", "appearance", "iconStart"]],
  template: function TuiDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, TuiDialogComponent_header_0_Template, 2, 2, "header", 0);
      ɵɵelementStart(1, "div", 1);
      ɵɵelement(2, "h2", 2);
      ɵɵelementStart(3, "section");
      ɵɵtemplate(4, TuiDialogComponent_ng_container_4_Template, 5, 2, "ng-container", 3);
      ɵɵelementEnd()();
      ɵɵelement(5, "div", 4);
      ɵɵtemplate(6, TuiDialogComponent_div_6_Template, 4, 7, "div", 5);
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
  dependencies: [NgIf, PolymorpheusOutlet, TuiAutoFocus, TuiButton, AsyncPipe],
  styles: ['[_nghost-%COMP%]{position:relative;display:flex;font:var(--tui-font-text-m);flex-direction:column;box-sizing:border-box;margin:auto;border-radius:1rem;border:2.5rem solid transparent}[_nghost-%COMP%]:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";border-radius:inherit;pointer-events:none;box-shadow:var(--tui-shadow-popup)}[data-size=auto][_nghost-%COMP%]{inline-size:auto}[data-size=s][_nghost-%COMP%]{inline-size:30rem}[data-size=s][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:1.5rem}[data-size=s][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%]{margin-bottom:.5rem;font:var(--tui-font-heading-5)}[data-size=m][_nghost-%COMP%]{inline-size:42.5rem}[data-size=m][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%]{margin-bottom:.75rem;font:var(--tui-font-heading-4)}[data-size=l][_nghost-%COMP%]{inline-size:55rem}[data-size=l][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%]{margin-bottom:1rem}[data-size=fullscreen][_nghost-%COMP%], [data-size=page][_nghost-%COMP%]{min-inline-size:100vw;min-block-size:100%;border-radius:0;border:none;background:var(--tui-background-elevation-1);box-shadow:0 4rem var(--tui-background-elevation-1)}[data-size=fullscreen][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%], [data-size=page][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:3rem calc(50vw - 22.5rem)}[data-size=fullscreen][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%], [data-size=page][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%]{margin-bottom:1rem}._centered[_nghost-%COMP%]{text-align:center}[_nghost-%COMP%]   tui-root._mobile[data-size][_nghost-%COMP%], tui-root._mobile   [data-size][_nghost-%COMP%]{min-inline-size:100%;inline-size:100%;max-inline-size:100%;border-radius:0;border:none;margin:auto 0 0}[_nghost-%COMP%]   tui-root._mobile[data-size][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%], tui-root._mobile   [data-size][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:1.5rem}[_nghost-%COMP%]   tui-root._mobile[data-size][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%], tui-root._mobile   [data-size][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%]{margin-bottom:.5rem;font:var(--tui-font-heading-5)}[data-size=page][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%], tui-root._mobile   [data-size=page][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:0}.t-heading[_ngcontent-%COMP%]{margin:0;word-wrap:break-word;font:var(--tui-font-heading-3)}.t-heading[_ngcontent-%COMP%]:empty{display:none}.t-header[_ngcontent-%COMP%]{display:flex;border-top-left-radius:inherit;border-top-right-radius:inherit;overflow:hidden}[data-size=fullscreen][_nghost-%COMP%]   tui-root._mobile[_nghost-%COMP%]   .t-header[_ngcontent-%COMP%], tui-root._mobile   [_nghost-%COMP%]   .t-header[_ngcontent-%COMP%]{flex:1}.t-content[_ngcontent-%COMP%]{border-radius:inherit;padding:2rem;background:var(--tui-background-elevation-1)}.t-content[_ngcontent-%COMP%]:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}.t-wrapper[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1;order:-1}.t-filler[_ngcontent-%COMP%]{flex-grow:1}.t-close[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:fixed;top:1.5rem;right:1.5rem;display:none}.t-dialog:last-of-type[_nghost-%COMP%]   .t-close[_ngcontent-%COMP%], .t-dialog:last-of-type   [_nghost-%COMP%]   .t-close[_ngcontent-%COMP%]{display:inline-flex}[_nghost-%COMP%]:not([data-size=fullscreen]):not([data-size=page])   .t-close[_ngcontent-%COMP%]{animation:tuiFadeIn var(--tui-duration);background:#686868f5;color:var(--tui-background-base)}[_nghost-%COMP%]:not([data-size=fullscreen]):not([data-size=page])   .t-close[_ngcontent-%COMP%]:hover{background:#9f9f9fdb}[_nghost-%COMP%]:not([data-size=fullscreen]).ng-animating   .t-close[_ngcontent-%COMP%]{display:none}tui-root._mobile[_nghost-%COMP%]   .t-close[data-size][_ngcontent-%COMP%], tui-root._mobile   [_nghost-%COMP%]   .t-close[data-size][_ngcontent-%COMP%]{--tui-fade-end: .5;position:absolute;top:0;right:0;background:transparent!important;color:var(--tui-text-primary);opacity:.5}.t-buttons[_ngcontent-%COMP%]{margin-top:1.25rem;text-align:end}'],
  data: {
    animation: [tuiSlideInTop, tuiFadeIn]
  }
});
var TuiDialogComponent = _TuiDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialogComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-dialog",
      imports: [NgIf, PolymorpheusOutlet, TuiAutoFocus, TuiButton, AsyncPipe],
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [TuiDialogCloseService],
      animations: [tuiSlideInTop, tuiFadeIn],
      host: {
        "[@tuiSlideInTop]": "slideInTop",
        "[@tuiFadeIn]": "slideInTop",
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
        size="s"
        tuiIconButton
        type="button"
        class="t-close"
        [appearance]="fullscreen ? 'secondary' : ''"
        [iconStart]="icons.close"
        [style.border-radius.%]="100"
        (click)="close$.next()"
        (mousedown.prevent.silent)="(0)"
    >
        {{ closeWord$ | async }}
    </button>
</div>
`,
      styles: [':host{position:relative;display:flex;font:var(--tui-font-text-m);flex-direction:column;box-sizing:border-box;margin:auto;border-radius:1rem;border:2.5rem solid transparent}:host:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";border-radius:inherit;pointer-events:none;box-shadow:var(--tui-shadow-popup)}:host[data-size=auto]{inline-size:auto}:host[data-size=s]{inline-size:30rem}:host[data-size=s] .t-content{padding:1.5rem}:host[data-size=s] .t-heading{margin-bottom:.5rem;font:var(--tui-font-heading-5)}:host[data-size=m]{inline-size:42.5rem}:host[data-size=m] .t-heading{margin-bottom:.75rem;font:var(--tui-font-heading-4)}:host[data-size=l]{inline-size:55rem}:host[data-size=l] .t-heading{margin-bottom:1rem}:host[data-size=fullscreen],:host[data-size=page]{min-inline-size:100vw;min-block-size:100%;border-radius:0;border:none;background:var(--tui-background-elevation-1);box-shadow:0 4rem var(--tui-background-elevation-1)}:host[data-size=fullscreen] .t-content,:host[data-size=page] .t-content{padding:3rem calc(50vw - 22.5rem)}:host[data-size=fullscreen] .t-heading,:host[data-size=page] .t-heading{margin-bottom:1rem}:host._centered{text-align:center}:host :host-context(tui-root._mobile)[data-size]{min-inline-size:100%;inline-size:100%;max-inline-size:100%;border-radius:0;border:none;margin:auto 0 0}:host :host-context(tui-root._mobile)[data-size] .t-content{padding:1.5rem}:host :host-context(tui-root._mobile)[data-size] .t-heading{margin-bottom:.5rem;font:var(--tui-font-heading-5)}:host[data-size=page] .t-content,:host-context(tui-root._mobile) :host[data-size=page] .t-content{padding:0}.t-heading{margin:0;word-wrap:break-word;font:var(--tui-font-heading-3)}.t-heading:empty{display:none}.t-header{display:flex;border-top-left-radius:inherit;border-top-right-radius:inherit;overflow:hidden}:host[data-size=fullscreen] :host-context(tui-root._mobile) .t-header{flex:1}.t-content{border-radius:inherit;padding:2rem;background:var(--tui-background-elevation-1)}.t-content:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}.t-wrapper{position:sticky;top:0;z-index:1;order:-1}.t-filler{flex-grow:1}.t-close{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:fixed;top:1.5rem;right:1.5rem;display:none}:host-context(.t-dialog:last-of-type) .t-close{display:inline-flex}:host:not([data-size=fullscreen]):not([data-size=page]) .t-close{animation:tuiFadeIn var(--tui-duration);background:#686868f5;color:var(--tui-background-base)}:host:not([data-size=fullscreen]):not([data-size=page]) .t-close:hover{background:#9f9f9fdb}:host:not([data-size=fullscreen]).ng-animating .t-close{display:none}:host-context(tui-root._mobile) .t-close[data-size]{--tui-fade-end: .5;position:absolute;top:0;right:0;background:transparent!important;color:var(--tui-text-primary);opacity:.5}.t-buttons{margin-top:1.25rem;text-align:end}\n']
    }]
  }], function() {
    return [];
  }, null);
})();
var _TuiDialogService = class _TuiDialogService extends TuiPopoverService {
};
_TuiDialogService.ɵfac = /* @__PURE__ */ (() => {
  let ɵTuiDialogService_BaseFactory;
  return function TuiDialogService_Factory(__ngFactoryType__) {
    return (ɵTuiDialogService_BaseFactory || (ɵTuiDialogService_BaseFactory = ɵɵgetInheritedFactory(_TuiDialogService)))(__ngFactoryType__ || _TuiDialogService);
  };
})();
_TuiDialogService.ɵprov = ɵɵdefineInjectable({
  token: _TuiDialogService,
  factory: () => (() => new _TuiDialogService(TUI_DIALOGS, TuiDialogComponent, inject(TUI_DIALOG_OPTIONS)))(),
  providedIn: "root"
});
var TuiDialogService = _TuiDialogService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialogService, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => new TuiDialogService(TUI_DIALOGS, TuiDialogComponent, inject(TUI_DIALOG_OPTIONS))
    }]
  }], null, null);
})();
var _TuiDialog = class _TuiDialog extends TuiPopoverDirective {
};
_TuiDialog.ɵfac = /* @__PURE__ */ (() => {
  let ɵTuiDialog_BaseFactory;
  return function TuiDialog_Factory(__ngFactoryType__) {
    return (ɵTuiDialog_BaseFactory || (ɵTuiDialog_BaseFactory = ɵɵgetInheritedFactory(_TuiDialog)))(__ngFactoryType__ || _TuiDialog);
  };
})();
_TuiDialog.ɵdir = ɵɵdefineDirective({
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
var TuiDialog = _TuiDialog;
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
var _TuiDialogs = class _TuiDialogs {
  constructor() {
    this.el = tuiInjectElement();
    this.dialogs$ = inject(TUI_DIALOGS);
  }
};
_TuiDialogs.ɵfac = function TuiDialogs_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiDialogs)();
};
_TuiDialogs.ɵcmp = ɵɵdefineComponent({
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
  consts: [[4, "ngIf"], ["aria-modal", "true", "role", "dialog", "tuiFocusTrap", "", "tuiScrollRef", "", "class", "t-dialog", 3, "t-dialog_closing", 4, "ngFor", "ngForOf"], [1, "t-overlay"], ["aria-modal", "true", "role", "dialog", "tuiFocusTrap", "", "tuiScrollRef", "", 1, "t-dialog"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], [1, "t-scrollbars"]],
  template: function TuiDialogs_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, TuiDialogs_ng_container_0_Template, 3, 3, "ng-container", 0);
      ɵɵpipe(1, "async");
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.dialogs$));
    }
  },
  dependencies: [CommonModule, NgForOf, NgIf, AsyncPipe, PolymorpheusOutlet, TuiFocusTrap, TuiScrollControls, TuiScrollRef],
  styles: ['[_nghost-%COMP%]{position:fixed;top:0;left:0;inline-size:100%;block-size:100%;scrollbar-width:none;-ms-overflow-style:none;pointer-events:none;overflow:hidden;overscroll-behavior:none}[_nghost-%COMP%]::-webkit-scrollbar, [_nghost-%COMP%]::-webkit-scrollbar-thumb{display:none}[_nghost-%COMP%]:has(section){pointer-events:auto;overflow:auto}[_nghost-%COMP%]:before{content:"";display:block;block-size:1000%}.t-overlay[_ngcontent-%COMP%], .t-dialog[_ngcontent-%COMP%]{scrollbar-width:none;-ms-overflow-style:none;position:fixed;top:0;left:0;bottom:0;right:0;display:flex;block-size:100%;align-items:flex-start;outline:none;overflow:auto}.t-overlay[_ngcontent-%COMP%]::-webkit-scrollbar, .t-dialog[_ngcontent-%COMP%]::-webkit-scrollbar, .t-overlay[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .t-dialog[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{display:none}.t-overlay.ng-animating[_ngcontent-%COMP%], .t-dialog.ng-animating[_ngcontent-%COMP%]{overflow:clip}.t-dialog[_ngcontent-%COMP%]{position:sticky;pointer-events:auto;overscroll-behavior:none}.t-overlay[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;background:var(--tui-service-backdrop);-webkit-backdrop-filter:var(--tui-backdrop, none);backdrop-filter:var(--tui-backdrop, none)}.t-dialog[_ngcontent-%COMP%]:last-of-type{z-index:1}.t-scrollbars[_ngcontent-%COMP%]{position:fixed;top:0;left:0;bottom:0;right:0;margin:0;color:#747474}'],
  data: {
    animation: [tuiHost]
  }
});
var TuiDialogs = _TuiDialogs;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialogs, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-dialogs",
      imports: [CommonModule, PolymorpheusOutlet, PolymorpheusTemplate, TuiFocusTrap, TuiScrollControls, TuiScrollRef],
      changeDetection: ChangeDetectionStrategy.Default,
      animations: [tuiHost],
      host: {
        "(keydown.silent)": "el.scrollTop = el.scrollHeight / 2"
      },
      template: '<ng-container *ngIf="dialogs$ | async as dialogs">\n    <section\n        *ngFor="let item of dialogs"\n        aria-modal="true"\n        role="dialog"\n        tuiFocusTrap\n        tuiScrollRef\n        class="t-dialog"\n        @tuiHost\n        [attr.aria-labelledby]="item.id"\n        [class.t-dialog_closing]="!dialogs.length"\n    >\n        <ng-container *polymorpheusOutlet="item.component; context: item" />\n        <tui-scroll-controls class="t-scrollbars" />\n    </section>\n    <div\n        class="t-overlay"\n        [style.opacity]="dialogs.length"\n    ></div>\n</ng-container>\n',
      styles: [':host{position:fixed;top:0;left:0;inline-size:100%;block-size:100%;scrollbar-width:none;-ms-overflow-style:none;pointer-events:none;overflow:hidden;overscroll-behavior:none}:host::-webkit-scrollbar,:host::-webkit-scrollbar-thumb{display:none}:host:has(section){pointer-events:auto;overflow:auto}:host:before{content:"";display:block;block-size:1000%}.t-overlay,.t-dialog{scrollbar-width:none;-ms-overflow-style:none;position:fixed;top:0;left:0;bottom:0;right:0;display:flex;block-size:100%;align-items:flex-start;outline:none;overflow:auto}.t-overlay::-webkit-scrollbar,.t-dialog::-webkit-scrollbar,.t-overlay::-webkit-scrollbar-thumb,.t-dialog::-webkit-scrollbar-thumb{display:none}.t-overlay.ng-animating,.t-dialog.ng-animating{overflow:clip}.t-dialog{position:sticky;pointer-events:auto;overscroll-behavior:none}.t-overlay{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;background:var(--tui-service-backdrop);-webkit-backdrop-filter:var(--tui-backdrop, none);backdrop-filter:var(--tui-backdrop, none)}.t-dialog:last-of-type{z-index:1}.t-scrollbars{position:fixed;top:0;left:0;bottom:0;right:0;margin:0;color:#747474}\n']
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
//# sourceMappingURL=chunk-WIROPSSZ.js.map
