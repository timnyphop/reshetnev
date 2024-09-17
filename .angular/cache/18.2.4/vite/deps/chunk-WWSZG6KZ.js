import {
  tuiInjectElement
} from "./chunk-AFJCKK4D.js";
import {
  Directive,
  ElementRef,
  setClassMetadata,
  ɵɵdefineDirective
} from "./chunk-NI274R75.js";

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-element.mjs
var _TuiElement = class _TuiElement {
  constructor() {
    this.nativeElement = tuiInjectElement();
    return new ElementRef(this.nativeElement);
  }
};
_TuiElement.ɵfac = function TuiElement_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiElement)();
};
_TuiElement.ɵdir = ɵɵdefineDirective({
  type: _TuiElement,
  selectors: [["", "tuiElement", ""]],
  exportAs: ["elementRef"],
  standalone: true
});
var TuiElement = _TuiElement;
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
//# sourceMappingURL=chunk-WWSZG6KZ.js.map
