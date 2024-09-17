import {
  TUI_PLATFORM
} from "./chunk-IDV3SLH5.js";
import {
  Directive,
  Input,
  inject,
  setClassMetadata,
  ɵɵProvidersFeature,
  ɵɵattribute,
  ɵɵdefineDirective
} from "./chunk-TMZGPDKF.js";

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-platform.mjs
var _TuiPlatform = class _TuiPlatform {
  constructor() {
    this.tuiPlatform = inject(TUI_PLATFORM, {
      skipSelf: true
    });
  }
};
_TuiPlatform.ɵfac = function TuiPlatform_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiPlatform)();
};
_TuiPlatform.ɵdir = ɵɵdefineDirective({
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
var TuiPlatform = _TuiPlatform;
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
//# sourceMappingURL=chunk-EDXELFY7.js.map
