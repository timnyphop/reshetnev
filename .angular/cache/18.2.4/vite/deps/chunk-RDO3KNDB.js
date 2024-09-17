import {
  EVENT_MANAGER_PLUGINS
} from "./chunk-CO4GPT7Q.js";
import {
  DOCUMENT
} from "./chunk-5AGLOXOG.js";
import {
  Injectable,
  InjectionToken,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵgetInheritedFactory
} from "./chunk-NI274R75.js";

// node_modules/@taiga-ui/event-plugins/fesm2022/taiga-ui-event-plugins.mjs
var AbstractEventPlugin = class {
  supports(event) {
    return event.includes(this.modifier);
  }
  unwrap(event) {
    return event.split(".").filter((v) => !this.modifier.includes(v)).join(".");
  }
};
var GLOBAL_HANDLER = new InjectionToken("[GLOBAL_HANDLER]: Global event target handler", {
  factory: () => {
    const document = inject(DOCUMENT);
    return (name) => name === "body" ? document.body : document.defaultView[name] || document.createElement("div");
  }
});
var _GlobalEventPlugin = class _GlobalEventPlugin extends AbstractEventPlugin {
  constructor() {
    super(...arguments);
    this.handler = inject(GLOBAL_HANDLER);
    this.modifier = ">";
  }
  addEventListener(_, event, handler) {
    return this.manager.addEventListener(this.handler(event.split(">")[0]), event.split(">")?.[1] ?? "", handler);
  }
};
_GlobalEventPlugin.ɵfac = /* @__PURE__ */ (() => {
  let ɵGlobalEventPlugin_BaseFactory;
  return function GlobalEventPlugin_Factory(__ngFactoryType__) {
    return (ɵGlobalEventPlugin_BaseFactory || (ɵGlobalEventPlugin_BaseFactory = ɵɵgetInheritedFactory(_GlobalEventPlugin)))(__ngFactoryType__ || _GlobalEventPlugin);
  };
})();
_GlobalEventPlugin.ɵprov = ɵɵdefineInjectable({
  token: _GlobalEventPlugin,
  factory: _GlobalEventPlugin.ɵfac
});
var GlobalEventPlugin = _GlobalEventPlugin;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GlobalEventPlugin, [{
    type: Injectable
  }], null, null);
})();
var _OptionsEventPlugin = class _OptionsEventPlugin extends AbstractEventPlugin {
  constructor() {
    super(...arguments);
    this.modifier = "capture.once.passive";
  }
  supports(event) {
    return event.includes(".") && !this.unwrap(event).includes(".");
  }
  addEventListener(element, event, handler) {
    element.addEventListener(this.unwrap(event), handler, {
      once: event.includes(".once"),
      passive: event.includes(".passive"),
      capture: event.includes(".capture")
    });
    return () => element.removeEventListener(this.unwrap(event), handler, event.includes(".capture"));
  }
};
_OptionsEventPlugin.ɵfac = /* @__PURE__ */ (() => {
  let ɵOptionsEventPlugin_BaseFactory;
  return function OptionsEventPlugin_Factory(__ngFactoryType__) {
    return (ɵOptionsEventPlugin_BaseFactory || (ɵOptionsEventPlugin_BaseFactory = ɵɵgetInheritedFactory(_OptionsEventPlugin)))(__ngFactoryType__ || _OptionsEventPlugin);
  };
})();
_OptionsEventPlugin.ɵprov = ɵɵdefineInjectable({
  token: _OptionsEventPlugin,
  factory: _OptionsEventPlugin.ɵfac
});
var OptionsEventPlugin = _OptionsEventPlugin;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OptionsEventPlugin, [{
    type: Injectable
  }], null, null);
})();
var _PreventEventPlugin = class _PreventEventPlugin extends AbstractEventPlugin {
  constructor() {
    super(...arguments);
    this.modifier = ".prevent";
  }
  addEventListener(element, event, handler) {
    return this.manager.addEventListener(element, this.unwrap(event), (event2) => {
      event2.preventDefault();
      handler(event2);
    });
  }
};
_PreventEventPlugin.ɵfac = /* @__PURE__ */ (() => {
  let ɵPreventEventPlugin_BaseFactory;
  return function PreventEventPlugin_Factory(__ngFactoryType__) {
    return (ɵPreventEventPlugin_BaseFactory || (ɵPreventEventPlugin_BaseFactory = ɵɵgetInheritedFactory(_PreventEventPlugin)))(__ngFactoryType__ || _PreventEventPlugin);
  };
})();
_PreventEventPlugin.ɵprov = ɵɵdefineInjectable({
  token: _PreventEventPlugin,
  factory: _PreventEventPlugin.ɵfac
});
var PreventEventPlugin = _PreventEventPlugin;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreventEventPlugin, [{
    type: Injectable
  }], null, null);
})();
var _ResizePlugin = class _ResizePlugin extends AbstractEventPlugin {
  constructor() {
    super(...arguments);
    this.modifier = "resize";
  }
  supports(event) {
    return event === "resize";
  }
  addEventListener(element, event, handler) {
    if (typeof ResizeObserver === "undefined" || !(element instanceof Element)) {
      element.addEventListener(event, handler);
      return () => element.removeEventListener(event, handler);
    }
    const observer = new ResizeObserver(handler);
    observer.observe(element);
    return () => observer.disconnect();
  }
};
_ResizePlugin.ɵfac = /* @__PURE__ */ (() => {
  let ɵResizePlugin_BaseFactory;
  return function ResizePlugin_Factory(__ngFactoryType__) {
    return (ɵResizePlugin_BaseFactory || (ɵResizePlugin_BaseFactory = ɵɵgetInheritedFactory(_ResizePlugin)))(__ngFactoryType__ || _ResizePlugin);
  };
})();
_ResizePlugin.ɵprov = ɵɵdefineInjectable({
  token: _ResizePlugin,
  factory: _ResizePlugin.ɵfac
});
var ResizePlugin = _ResizePlugin;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizePlugin, [{
    type: Injectable
  }], null, null);
})();
var _SelfEventPlugin = class _SelfEventPlugin extends AbstractEventPlugin {
  constructor() {
    super(...arguments);
    this.modifier = ".self";
  }
  addEventListener(element, event, handler) {
    return this.manager.addEventListener(element, this.unwrap(event), (event2) => {
      if (event2.target === event2.currentTarget) {
        handler(event2);
      }
    });
  }
};
_SelfEventPlugin.ɵfac = /* @__PURE__ */ (() => {
  let ɵSelfEventPlugin_BaseFactory;
  return function SelfEventPlugin_Factory(__ngFactoryType__) {
    return (ɵSelfEventPlugin_BaseFactory || (ɵSelfEventPlugin_BaseFactory = ɵɵgetInheritedFactory(_SelfEventPlugin)))(__ngFactoryType__ || _SelfEventPlugin);
  };
})();
_SelfEventPlugin.ɵprov = ɵɵdefineInjectable({
  token: _SelfEventPlugin,
  factory: _SelfEventPlugin.ɵfac
});
var SelfEventPlugin = _SelfEventPlugin;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelfEventPlugin, [{
    type: Injectable
  }], null, null);
})();
var _SilentEventPlugin = class _SilentEventPlugin extends AbstractEventPlugin {
  constructor() {
    super(...arguments);
    this.modifier = ".silent";
  }
  addEventListener(element, event, handler) {
    _SilentEventPlugin.ngZone = this.manager.getZone();
    return _SilentEventPlugin.ngZone.runOutsideAngular(() => this.manager.addEventListener(element, this.unwrap(event), handler));
  }
};
_SilentEventPlugin.ɵfac = /* @__PURE__ */ (() => {
  let ɵSilentEventPlugin_BaseFactory;
  return function SilentEventPlugin_Factory(__ngFactoryType__) {
    return (ɵSilentEventPlugin_BaseFactory || (ɵSilentEventPlugin_BaseFactory = ɵɵgetInheritedFactory(_SilentEventPlugin)))(__ngFactoryType__ || _SilentEventPlugin);
  };
})();
_SilentEventPlugin.ɵprov = ɵɵdefineInjectable({
  token: _SilentEventPlugin,
  factory: _SilentEventPlugin.ɵfac
});
var SilentEventPlugin = _SilentEventPlugin;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SilentEventPlugin, [{
    type: Injectable
  }], null, null);
})();
var _StopEventPlugin = class _StopEventPlugin extends AbstractEventPlugin {
  constructor() {
    super(...arguments);
    this.modifier = ".stop";
  }
  addEventListener(element, event, handler) {
    return this.manager.addEventListener(element, this.unwrap(event), (event2) => {
      event2.stopPropagation();
      handler(event2);
    });
  }
};
_StopEventPlugin.ɵfac = /* @__PURE__ */ (() => {
  let ɵStopEventPlugin_BaseFactory;
  return function StopEventPlugin_Factory(__ngFactoryType__) {
    return (ɵStopEventPlugin_BaseFactory || (ɵStopEventPlugin_BaseFactory = ɵɵgetInheritedFactory(_StopEventPlugin)))(__ngFactoryType__ || _StopEventPlugin);
  };
})();
_StopEventPlugin.ɵprov = ɵɵdefineInjectable({
  token: _StopEventPlugin,
  factory: _StopEventPlugin.ɵfac
});
var StopEventPlugin = _StopEventPlugin;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StopEventPlugin, [{
    type: Injectable
  }], null, null);
})();
var PLUGINS = [SilentEventPlugin, GlobalEventPlugin, OptionsEventPlugin, PreventEventPlugin, ResizePlugin, SelfEventPlugin, StopEventPlugin];
var NG_EVENT_PLUGINS = PLUGINS.map((useClass) => ({
  provide: EVENT_MANAGER_PLUGINS,
  multi: true,
  useClass
}));
function shouldCall(predicate) {
  return (_target, _key, desc) => {
    const {
      value
    } = desc;
    desc.value = function(...args) {
      if (!predicate.apply(this, args)) {
        return;
      }
      if (SilentEventPlugin.ngZone) {
        SilentEventPlugin.ngZone.run(() => value.apply(this, args));
      } else {
        value.apply(this, args);
      }
    };
  };
}
function asCallable(a) {
  return a;
}

export {
  GLOBAL_HANDLER,
  GlobalEventPlugin,
  OptionsEventPlugin,
  PreventEventPlugin,
  ResizePlugin,
  SilentEventPlugin,
  StopEventPlugin,
  NG_EVENT_PLUGINS,
  shouldCall,
  asCallable
};
//# sourceMappingURL=chunk-RDO3KNDB.js.map
