import {
  EMPTY_FUNCTION,
  tuiCreateToken,
  tuiDistanceBetweenTouches,
  tuiInjectElement,
  tuiPreventDefault,
  tuiProvide,
  tuiTypedFromEvent
} from "./chunk-IDV3SLH5.js";
import {
  NG_VALIDATORS,
  Validators
} from "./chunk-A6CXCBMF.js";
import {
  DOCUMENT
} from "./chunk-ET6A4XZJ.js";
import {
  Directive,
  Injectable,
  Input,
  Output,
  inject,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵstyleProp
} from "./chunk-TMZGPDKF.js";
import {
  Observable,
  filter,
  map,
  merge,
  pairwise,
  repeat,
  scan,
  switchMap,
  takeUntil
} from "./chunk-NUC4GERA.js";

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-pan.mjs
var _TuiPanService = class _TuiPanService extends Observable {
  constructor() {
    const el = tuiInjectElement();
    const doc = inject(DOCUMENT);
    super((subscriber) => {
      merge(tuiTypedFromEvent(el, "touchstart", {
        passive: true
      }), tuiTypedFromEvent(el, "mousedown")).pipe(switchMap(() => merge(tuiTypedFromEvent(doc, "touchmove", {
        passive: true
      }).pipe(filter(({
        touches
      }) => touches.length < 2), map(({
        touches
      }) => touches[0])), tuiTypedFromEvent(doc, "mousemove"))), pairwise(), map(([first, second]) => {
        const deltaX = (second?.clientX ?? 0) - (first?.clientX ?? 0);
        const deltaY = (second?.clientY ?? 0) - (first?.clientY ?? 0);
        return [deltaX, deltaY];
      }), takeUntil(merge(tuiTypedFromEvent(doc, "touchend"), tuiTypedFromEvent(doc, "mouseup"))), repeat()).subscribe(subscriber);
    });
  }
};
_TuiPanService.ɵfac = function TuiPanService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiPanService)();
};
_TuiPanService.ɵprov = ɵɵdefineInjectable({
  token: _TuiPanService,
  factory: _TuiPanService.ɵfac
});
var TuiPanService = _TuiPanService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPanService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var _TuiPan = class _TuiPan {
  constructor() {
    this.tuiPan = inject(TuiPanService);
  }
};
_TuiPan.ɵfac = function TuiPan_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiPan)();
};
_TuiPan.ɵdir = ɵɵdefineDirective({
  type: _TuiPan,
  selectors: [["", "tuiPan", ""]],
  outputs: {
    tuiPan: "tuiPan"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([TuiPanService])]
});
var TuiPan = _TuiPan;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPan, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiPan]",
      providers: [TuiPanService]
    }]
  }], null, {
    tuiPan: [{
      type: Output
    }]
  });
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-validator.mjs
var _TuiValidator = class _TuiValidator {
  constructor() {
    this.onChange = EMPTY_FUNCTION;
    this.tuiValidator = Validators.nullValidator;
  }
  validate(control) {
    return this.tuiValidator(control);
  }
  registerOnValidatorChange(onChange) {
    this.onChange = onChange;
  }
  ngOnChanges() {
    this.onChange();
  }
  ngOnDestroy() {
    this.tuiValidator = Validators.nullValidator;
    this.onChange();
  }
};
_TuiValidator.ɵfac = function TuiValidator_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiValidator)();
};
_TuiValidator.ɵdir = ɵɵdefineDirective({
  type: _TuiValidator,
  selectors: [["", "tuiValidator", ""]],
  inputs: {
    tuiValidator: "tuiValidator"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([tuiProvide(NG_VALIDATORS, _TuiValidator, true)]), ɵɵNgOnChangesFeature]
});
var TuiValidator = _TuiValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiValidator, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiValidator]",
      providers: [tuiProvide(NG_VALIDATORS, TuiValidator, true)]
    }]
  }], null, {
    tuiValidator: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-zoom.mjs
var TUI_ZOOM_OPTIONS = tuiCreateToken({
  wheelSensitivity: 0.01
});
var TOUCH_SENSITIVITY = 0.01;
var _TuiZoomService = class _TuiZoomService extends Observable {
  constructor() {
    const el = tuiInjectElement();
    const {
      wheelSensitivity
    } = inject(TUI_ZOOM_OPTIONS);
    super((subscriber) => {
      merge(tuiTypedFromEvent(el, "touchstart", {
        passive: true
      }).pipe(filter(({
        touches
      }) => touches.length > 1), switchMap((startEvent) => tuiTypedFromEvent(el, "touchmove", {
        passive: true
      }).pipe(tuiPreventDefault(), scan((prev, event) => {
        const distance = tuiDistanceBetweenTouches(event);
        return {
          event,
          distance,
          delta: (distance - prev.distance) * TOUCH_SENSITIVITY
        };
      }, {
        event: startEvent,
        distance: tuiDistanceBetweenTouches(startEvent),
        delta: 0
      }), map(({
        event,
        delta
      }) => {
        const clientX = ((event.touches[0]?.clientX ?? 0) + (event.touches[1]?.clientX ?? 0)) / 2;
        const clientY = ((event.touches[0]?.clientY ?? 0) + (event.touches[1]?.clientY ?? 0)) / 2;
        return {
          clientX,
          clientY,
          delta,
          event
        };
      }), takeUntil(tuiTypedFromEvent(el, "touchend"))))), tuiTypedFromEvent(el, "wheel", {
        passive: false
      }).pipe(tuiPreventDefault(), map((wheel) => ({
        clientX: wheel.clientX,
        clientY: wheel.clientY,
        delta: -wheel.deltaY * wheelSensitivity,
        event: wheel
      })))).subscribe(subscriber);
    });
  }
};
_TuiZoomService.ɵfac = function TuiZoomService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiZoomService)();
};
_TuiZoomService.ɵprov = ɵɵdefineInjectable({
  token: _TuiZoomService,
  factory: _TuiZoomService.ɵfac
});
var TuiZoomService = _TuiZoomService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiZoomService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var _TuiZoom = class _TuiZoom {
  constructor() {
    this.tuiZoom = inject(TuiZoomService);
  }
};
_TuiZoom.ɵfac = function TuiZoom_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiZoom)();
};
_TuiZoom.ɵdir = ɵɵdefineDirective({
  type: _TuiZoom,
  selectors: [["", "tuiZoom", ""]],
  hostVars: 2,
  hostBindings: function TuiZoom_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("touch-action", "none");
    }
  },
  outputs: {
    tuiZoom: "tuiZoom"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([TuiZoomService])]
});
var TuiZoom = _TuiZoom;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiZoom, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiZoom]",
      outputs: ["tuiZoom"],
      providers: [TuiZoomService],
      host: {
        "[style.touch-action]": '"none"'
      }
    }]
  }], null, null);
})();

export {
  TuiPanService,
  TuiPan,
  TuiValidator,
  TUI_ZOOM_OPTIONS,
  TuiZoomService,
  TuiZoom
};
//# sourceMappingURL=chunk-RNHG72MG.js.map
