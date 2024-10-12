import {
  tuiContainsOrAfter,
  tuiGetActualTarget,
  tuiInjectElement,
  tuiZoneOptimized
<<<<<<<< HEAD:.angular/cache/18.2.7/secondAngular/vite/deps/chunk-XF2WWPZT.js
} from "./chunk-4OMUCSCF.js";
========
} from "./chunk-MIOTRVVA.js";
>>>>>>>> 5564dde0 (lonic rebag):.angular/cache/18.2.7/secondAngular/vite/deps/chunk-NNRYOBYZ.js
import {
  DOCUMENT
} from "./chunk-VFDX42D3.js";
import {
  Directive,
  NgZone,
  Output,
  inject,
  setClassMetadata,
  ɵɵdefineDirective
} from "./chunk-GJNOSL6X.js";
import {
  filter,
  fromEvent,
  map
} from "./chunk-YX5744VY.js";

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
<<<<<<<< HEAD:.angular/cache/18.2.7/secondAngular/vite/deps/chunk-XF2WWPZT.js
//# sourceMappingURL=chunk-XF2WWPZT.js.map
========
//# sourceMappingURL=chunk-NNRYOBYZ.js.map
>>>>>>>> 5564dde0 (lonic rebag):.angular/cache/18.2.7/secondAngular/vite/deps/chunk-NNRYOBYZ.js
