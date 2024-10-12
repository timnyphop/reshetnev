import {
  PolymorpheusTemplate,
  TuiPopoverService,
  tuiClamp,
  tuiIfMap
} from "./chunk-4OMUCSCF.js";
import {
  Directive,
  ElementRef,
  Input,
  Pipe,
  TemplateRef,
  ViewContainerRef,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵdefineDirective,
  ɵɵdefinePipe,
  ɵɵgetInheritedFactory
} from "./chunk-GJNOSL6X.js";
import {
  Subject,
  distinctUntilChanged,
  endWith,
  ignoreElements,
  share
} from "./chunk-YX5744VY.js";

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-let.mjs
var TuiLetContext = class {
  constructor(internalDirectiveInstance) {
    this.internalDirectiveInstance = internalDirectiveInstance;
  }
  get $implicit() {
    return this.internalDirectiveInstance.tuiLet;
  }
  get tuiLet() {
    return this.internalDirectiveInstance.tuiLet;
  }
};
var TuiLet = class _TuiLet {
  constructor() {
    inject(ViewContainerRef).createEmbeddedView(inject(TemplateRef), new TuiLetContext(this));
  }
  /**
   * Asserts the correct type of the context for the template that `TuiLet` will render.
   *
   * The presence of this method is a signal to the Ivy template type-check compiler that the
   * `TuiLet` structural directive renders its template with a specific context type.
   */
  static ngTemplateContextGuard(_dir, _ctx) {
    return true;
  }
  static {
    this.ɵfac = function TuiLet_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiLet)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiLet,
      selectors: [["", "tuiLet", ""]],
      inputs: {
        tuiLet: "tuiLet"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLet, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiLet]"
    }]
  }], function() {
    return [];
  }, {
    tuiLet: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-repeat-times.mjs
var MAX_VALUE = 65536;
var TuiRepeatTimesContext = class {
  constructor($implicit) {
    this.$implicit = $implicit;
  }
};
var TuiRepeatTimes = class _TuiRepeatTimes {
  constructor() {
    this.viewContainer = inject(ViewContainerRef);
    this.templateRef = inject(TemplateRef);
  }
  set tuiRepeatTimesOf(count) {
    const safeCount = Math.floor(tuiClamp(count, 0, MAX_VALUE));
    const {
      length
    } = this.viewContainer;
    if (count < length) {
      this.removeContainers(length - count);
    } else {
      this.addContainers(safeCount);
    }
  }
  addContainers(count) {
    for (let index = this.viewContainer.length; index < count; index++) {
      this.viewContainer.createEmbeddedView(this.templateRef, new TuiRepeatTimesContext(index));
    }
  }
  removeContainers(amount) {
    for (let index = 0; index < amount; index++) {
      this.viewContainer.remove();
    }
  }
  static {
    this.ɵfac = function TuiRepeatTimes_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiRepeatTimes)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiRepeatTimes,
      selectors: [["", "tuiRepeatTimes", "", "tuiRepeatTimesOf", ""]],
      inputs: {
        tuiRepeatTimesOf: "tuiRepeatTimesOf"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiRepeatTimes, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiRepeatTimes][tuiRepeatTimesOf]"
    }]
  }], null, {
    tuiRepeatTimesOf: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-pipes-mapper.mjs
var TuiMapperPipe = class _TuiMapperPipe {
  /**
   * Maps object to an arbitrary result through a mapper function
   *
   * @param value an item to transform
   * @param mapper a mapping function
   * @param args arbitrary number of additional arguments
   */
  transform(value, mapper, ...args) {
    return mapper(value, ...args);
  }
  static {
    this.ɵfac = function TuiMapperPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiMapperPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiMapper",
      type: _TuiMapperPipe,
      pure: true,
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiMapperPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiMapper"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-popover.mjs
var TuiPopoverDirective = class _TuiPopoverDirective extends PolymorpheusTemplate {
  constructor() {
    super(...arguments);
    this.service = inject(TuiPopoverService);
    this.open$ = new Subject();
    this.options = {};
    this.open = false;
    this.openChange = this.open$.pipe(distinctUntilChanged(), tuiIfMap(() => this.service.open(this, this.options).pipe(ignoreElements(), endWith(false))), share());
  }
  ngOnChanges() {
    this.open$.next(this.open);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiPopoverDirective_BaseFactory;
      return function TuiPopoverDirective_Factory(__ngFactoryType__) {
        return (ɵTuiPopoverDirective_BaseFactory || (ɵTuiPopoverDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiPopoverDirective)))(__ngFactoryType__ || _TuiPopoverDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiPopoverDirective,
      features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPopoverDirective, [{
    type: Directive
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/coercion.mjs
function coerceBooleanProperty(value) {
  return value != null && `${value}` !== "false";
}
function coerceNumberProperty(value, fallbackValue = 0) {
  if (_isNumberValue(value)) {
    return Number(value);
  }
  return arguments.length === 2 ? fallbackValue : 0;
}
function _isNumberValue(value) {
  return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}
function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}
function coerceElement(elementOrRef) {
  return elementOrRef instanceof ElementRef ? elementOrRef.nativeElement : elementOrRef;
}

export {
  coerceBooleanProperty,
  coerceNumberProperty,
  coerceArray,
  coerceElement,
  TuiLetContext,
  TuiLet,
  TuiRepeatTimesContext,
  TuiRepeatTimes,
  TuiMapperPipe,
  TuiPopoverDirective
};
//# sourceMappingURL=chunk-DCYODZBR.js.map
