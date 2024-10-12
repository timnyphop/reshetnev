import {
  tuiInjectElement
} from "./chunk-P4W6PLEC.js";
import {
  Directive,
  ElementRef,
  setClassMetadata,
  ɵɵdefineDirective
} from "./chunk-GJNOSL6X.js";

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-element.mjs
var TuiElement = class _TuiElement {
  constructor() {
    this.nativeElement = tuiInjectElement();
    return new ElementRef(this.nativeElement);
  }
  static {
    this.ɵfac = function TuiElement_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiElement)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiElement,
      selectors: [["", "tuiElement", ""]],
      exportAs: ["elementRef"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiElement, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiElement]",
      exportAs: "elementRef"
    }]
  }], function() {
    return [];
  }, null);
})();

export {
  TuiElement
};
//# sourceMappingURL=chunk-UNQZX4ZS.js.map
