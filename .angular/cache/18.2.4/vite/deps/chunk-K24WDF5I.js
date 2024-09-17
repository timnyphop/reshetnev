import {
  tuiInjectElement,
  tuiProvide,
  tuiTakeUntilDestroyed,
  tuiZonefree
} from "./chunk-AFJCKK4D.js";
import {
  NG_VALIDATORS
} from "./chunk-Y74DJGUJ.js";
import {
  DestroyRef,
  Directive,
  Input,
  NgZone,
  inject,
  setClassMetadata,
  ɵɵProvidersFeature,
  ɵɵdefineDirective,
  ɵɵlistener
} from "./chunk-NI274R75.js";
import {
  timer
} from "./chunk-NUC4GERA.js";

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-native-validator.mjs
var _TuiNativeValidator = class _TuiNativeValidator {
  constructor() {
    this.destroyRef = inject(DestroyRef);
    this.zone = inject(NgZone);
    this.el = tuiInjectElement();
    this.tuiNativeValidator = "Invalid";
  }
  validate(control) {
    this.control = control;
    timer(0).pipe(tuiZonefree(this.zone), tuiTakeUntilDestroyed(this.destroyRef)).subscribe(() => this.handleValidation());
    return null;
  }
  handleValidation() {
    this.el.setCustomValidity?.(this.control?.touched && this.control?.invalid ? this.tuiNativeValidator : "");
  }
};
_TuiNativeValidator.ɵfac = function TuiNativeValidator_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiNativeValidator)();
};
_TuiNativeValidator.ɵdir = ɵɵdefineDirective({
  type: _TuiNativeValidator,
  selectors: [["", "tuiNativeValidator", ""]],
  hostBindings: function TuiNativeValidator_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("focusout", function TuiNativeValidator_focusout_HostBindingHandler() {
        return ctx.handleValidation();
      });
    }
  },
  inputs: {
    tuiNativeValidator: "tuiNativeValidator"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([tuiProvide(NG_VALIDATORS, _TuiNativeValidator, true)])]
});
var TuiNativeValidator = _TuiNativeValidator;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNativeValidator, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiNativeValidator]",
      providers: [tuiProvide(NG_VALIDATORS, TuiNativeValidator, true)],
      host: {
        "(focusout)": "handleValidation()"
      }
    }]
  }], null, {
    tuiNativeValidator: [{
      type: Input
    }]
  });
})();

export {
  TuiNativeValidator
};
//# sourceMappingURL=chunk-K24WDF5I.js.map
