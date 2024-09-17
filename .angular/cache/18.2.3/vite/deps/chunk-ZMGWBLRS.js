import {
  TUI_NUMBER_FORMAT
} from "./chunk-M7KV4JTE.js";
import {
  tuiProvide
} from "./chunk-IDV3SLH5.js";
import {
  Directive,
  Input,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵdefineDirective
} from "./chunk-TMZGPDKF.js";
import {
  Observable,
  ReplaySubject,
  __spreadValues,
  combineLatest,
  map
} from "./chunk-NUC4GERA.js";

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-number-format.mjs
var _TuiNumberFormat = class _TuiNumberFormat extends Observable {
  constructor() {
    super((subscriber) => combineLatest([this.parent, this.settings]).pipe(map(([parent, settings]) => __spreadValues(__spreadValues({}, parent), settings))).subscribe(subscriber));
    this.settings = new ReplaySubject(1);
    this.parent = inject(TUI_NUMBER_FORMAT, {
      skipSelf: true
    });
  }
  set tuiNumberFormat(format) {
    this.settings.next(format);
  }
};
_TuiNumberFormat.ɵfac = function TuiNumberFormat_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiNumberFormat)();
};
_TuiNumberFormat.ɵdir = ɵɵdefineDirective({
  type: _TuiNumberFormat,
  selectors: [["", "tuiNumberFormat", ""]],
  inputs: {
    tuiNumberFormat: "tuiNumberFormat"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([tuiProvide(TUI_NUMBER_FORMAT, _TuiNumberFormat)]), ɵɵInheritDefinitionFeature]
});
var TuiNumberFormat = _TuiNumberFormat;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNumberFormat, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiNumberFormat]",
      providers: [tuiProvide(TUI_NUMBER_FORMAT, TuiNumberFormat)]
    }]
  }], function() {
    return [];
  }, {
    tuiNumberFormat: [{
      type: Input
    }]
  });
})();

export {
  TuiNumberFormat
};
//# sourceMappingURL=chunk-ZMGWBLRS.js.map
