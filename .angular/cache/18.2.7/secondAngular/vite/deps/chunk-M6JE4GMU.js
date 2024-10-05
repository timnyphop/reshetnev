import {
  tuiContainsOrAfter,
  tuiGetActualTarget,
  tuiInjectElement,
  tuiZoneOptimized
} from "./chunk-VAG3OFHX.js";
import {
  DOCUMENT
} from "./chunk-OREPAVVY.js";
import {
  Directive,
  NgZone,
  Output,
  inject,
  setClassMetadata,
  ɵɵdefineDirective
} from "./chunk-H2EPMWCO.js";
import {
  filter,
  fromEvent,
  map
} from "./chunk-2WRQ7LJK.js";

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-click-outside.mjs
var TuiClickOutside = class _TuiClickOutside {
  constructor() {
    this.zone = inject(NgZone);
    this.doc = inject(DOCUMENT);
    this.el = tuiInjectElement();
    this.tuiClickOutside = fromEvent(this.doc, "mouseup").pipe(map(tuiGetActualTarget), filter((target) => this.isOutside(target)), tuiZoneOptimized(this.zone));
  }
  isOutside(target) {
    return target === this.el || !tuiContainsOrAfter(this.el, target);
  }
  static {
    this.ɵfac = function TuiClickOutside_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiClickOutside)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiClickOutside,
      selectors: [["", "tuiClickOutside", ""]],
      outputs: {
        tuiClickOutside: "tuiClickOutside"
      },
      standalone: true
    });
  }
};
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
//# sourceMappingURL=chunk-M6JE4GMU.js.map
