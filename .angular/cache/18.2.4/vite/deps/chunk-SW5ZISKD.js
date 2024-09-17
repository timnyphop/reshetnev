import {
  tuiCreateToken,
  tuiInjectElement,
  tuiIsPresent,
  tuiTypedFromEvent
} from "./chunk-AFJCKK4D.js";
import {
  DOCUMENT
} from "./chunk-5AGLOXOG.js";
import {
  Directive,
  Injectable,
  Output,
  inject,
  setClassMetadata,
  ɵɵProvidersFeature,
  ɵɵdefineDirective,
  ɵɵdefineInjectable
} from "./chunk-NI274R75.js";
import {
  Observable,
  filter,
  map,
  merge,
  pairwise
} from "./chunk-NUC4GERA.js";

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-swipe.mjs
var TUI_SWIPE_OPTIONS = tuiCreateToken({
  timeout: 500,
  threshold: 30
});
var _TuiSwipeService = class _TuiSwipeService extends Observable {
  constructor() {
    const doc = inject(DOCUMENT);
    const el = tuiInjectElement();
    const {
      timeout,
      threshold
    } = inject(TUI_SWIPE_OPTIONS);
    super((subscriber) => {
      merge(tuiTypedFromEvent(el, "touchstart", {
        passive: true
      }), tuiTypedFromEvent(doc, "touchend")).pipe(pairwise(), filter(([first, second]) => !!first.touches.length && first.touches[0]?.identifier === second.changedTouches[0]?.identifier), map(([start, end]) => {
        const startX = start.touches[0]?.clientX ?? 0;
        const startY = start.touches[0]?.clientY ?? 0;
        const endX = end.changedTouches[0]?.clientX ?? 0;
        const endY = end.changedTouches[0]?.clientY ?? 0;
        const distanceX = startX - endX;
        const distanceY = startY - endY;
        const duration = end.timeStamp - start.timeStamp;
        if ((Math.abs(distanceX) > threshold || Math.abs(distanceY) > threshold) && duration < timeout) {
          return {
            direction: tuiGetSwipeDirection(distanceX, distanceY),
            events: [start, end]
          };
        }
        return null;
      }), filter(tuiIsPresent)).subscribe(subscriber);
    });
  }
};
_TuiSwipeService.ɵfac = function TuiSwipeService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiSwipeService)();
};
_TuiSwipeService.ɵprov = ɵɵdefineInjectable({
  token: _TuiSwipeService,
  factory: _TuiSwipeService.ɵfac
});
var TuiSwipeService = _TuiSwipeService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSwipeService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
function tuiGetSwipeDirection(deltaX, deltaY) {
  if (Math.abs(deltaY) > Math.abs(deltaX)) {
    return deltaY > 0 ? "top" : "bottom";
  }
  return deltaX > 0 ? "left" : "right";
}
var _TuiSwipe = class _TuiSwipe {
  constructor() {
    this.tuiSwipe = inject(TuiSwipeService);
  }
};
_TuiSwipe.ɵfac = function TuiSwipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiSwipe)();
};
_TuiSwipe.ɵdir = ɵɵdefineDirective({
  type: _TuiSwipe,
  selectors: [["", "tuiSwipe", ""]],
  outputs: {
    tuiSwipe: "tuiSwipe"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([TuiSwipeService])]
});
var TuiSwipe = _TuiSwipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSwipe, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiSwipe]",
      providers: [TuiSwipeService]
    }]
  }], null, {
    tuiSwipe: [{
      type: Output
    }]
  });
})();

export {
  TUI_SWIPE_OPTIONS,
  TuiSwipeService,
  TuiSwipe
};
//# sourceMappingURL=chunk-SW5ZISKD.js.map
