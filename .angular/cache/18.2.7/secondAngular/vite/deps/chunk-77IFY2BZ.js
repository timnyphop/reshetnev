import {
  TUI_PLATFORM
<<<<<<<< HEAD:.angular/cache/18.2.7/secondAngular/vite/deps/chunk-2JBT7KQ6.js
} from "./chunk-4OMUCSCF.js";
========
} from "./chunk-MIOTRVVA.js";
>>>>>>>> 5564dde0 (lonic rebag):.angular/cache/18.2.7/secondAngular/vite/deps/chunk-77IFY2BZ.js
import {
  Directive,
  Input,
  inject,
  setClassMetadata,
  ɵɵProvidersFeature,
  ɵɵattribute,
  ɵɵdefineDirective
} from "./chunk-GJNOSL6X.js";

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-platform.mjs
var TuiPlatform = class _TuiPlatform {
  constructor() {
    this.tuiPlatform = inject(TUI_PLATFORM, {
      skipSelf: true
    });
  }
  static {
    this.ɵfac = function TuiPlatform_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPlatform)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiPlatform,
      selectors: [["", "tuiPlatform", ""]],
      hostVars: 1,
      hostBindings: function TuiPlatform_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-platform", ctx.tuiPlatform);
        }
      },
      inputs: {
        tuiPlatform: "tuiPlatform"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: TUI_PLATFORM,
        useFactory: () => inject(_TuiPlatform).tuiPlatform
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPlatform, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiPlatform]",
      providers: [{
        provide: TUI_PLATFORM,
        useFactory: () => inject(TuiPlatform).tuiPlatform
      }],
      host: {
        "[attr.data-platform]": "tuiPlatform"
      }
    }]
  }], null, {
    tuiPlatform: [{
      type: Input
    }]
  });
})();

export {
  TuiPlatform
};
<<<<<<<< HEAD:.angular/cache/18.2.7/secondAngular/vite/deps/chunk-2JBT7KQ6.js
//# sourceMappingURL=chunk-2JBT7KQ6.js.map
========
//# sourceMappingURL=chunk-77IFY2BZ.js.map
>>>>>>>> 5564dde0 (lonic rebag):.angular/cache/18.2.7/secondAngular/vite/deps/chunk-77IFY2BZ.js
