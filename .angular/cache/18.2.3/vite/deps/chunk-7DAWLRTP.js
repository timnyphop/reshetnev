import {
  tuiContainsOrAfter,
  tuiGetActualTarget,
  tuiInjectElement,
  tuiZoneOptimized
} from "./chunk-IDV3SLH5.js";
import {
  DOCUMENT
} from "./chunk-ET6A4XZJ.js";
import {
  Directive,
  NgZone,
  Output,
  inject,
  setClassMetadata,
  ɵɵdefineDirective
} from "./chunk-TMZGPDKF.js";
import {
  filter,
  fromEvent,
  map
} from "./chunk-NUC4GERA.js";

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-click-outside.mjs
var _TuiClickOutside = class _TuiClickOutside {
  constructor() {
    this.zone = inject(NgZone);
    this.doc = inject(DOCUMENT);
    this.el = tuiInjectElement();
    this.tuiClickOutside = fromEvent(this.doc, "mouseup").pipe(map(tuiGetActualTarget), filter((target) => this.isOutside(target)), tuiZoneOptimized(this.zone));
  }
  isOutside(target) {
    return target === this.el || !tuiContainsOrAfter(this.el, target);
  }
};
_TuiClickOutside.ɵfac = function TuiClickOutside_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiClickOutside)();
};
_TuiClickOutside.ɵdir = ɵɵdefineDirective({
  type: _TuiClickOutside,
  selectors: [["", "tuiClickOutside", ""]],
  outputs: {
    tuiClickOutside: "tuiClickOutside"
  },
  standalone: true
});
var TuiClickOutside = _TuiClickOutside;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiClickOutside, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiClickOutside]"
    }]
  }], null, {
    tuiClickOutside: [{
      type: Output
    }]
  });
})();

export {
  TuiClickOutside
};
//# sourceMappingURL=chunk-7DAWLRTP.js.map
