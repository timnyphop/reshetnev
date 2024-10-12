import {
  tuiInjectElement,
  tuiProvide,
  tuiTakeUntilDestroyed,
  tuiZonefree
<<<<<<<< HEAD:.angular/cache/18.2.7/secondAngular/vite/deps/chunk-EIH4H6ZQ.js
} from "./chunk-4OMUCSCF.js";
========
} from "./chunk-MIOTRVVA.js";
>>>>>>>> 5564dde0 (lonic rebag):.angular/cache/18.2.7/secondAngular/vite/deps/chunk-Y5XQTGPH.js
import {
  NG_VALIDATORS
} from "./chunk-HDXU2QND.js";
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
} from "./chunk-GJNOSL6X.js";
import {
  timer
} from "./chunk-YX5744VY.js";

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-native-validator.mjs
var TuiNativeValidator = class _TuiNativeValidator {
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
  static {
    this.ɵfac = function TuiNativeValidator_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiNativeValidator)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
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
  }
};
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
<<<<<<<< HEAD:.angular/cache/18.2.7/secondAngular/vite/deps/chunk-EIH4H6ZQ.js
//# sourceMappingURL=chunk-EIH4H6ZQ.js.map
========
//# sourceMappingURL=chunk-Y5XQTGPH.js.map
>>>>>>>> 5564dde0 (lonic rebag):.angular/cache/18.2.7/secondAngular/vite/deps/chunk-Y5XQTGPH.js
