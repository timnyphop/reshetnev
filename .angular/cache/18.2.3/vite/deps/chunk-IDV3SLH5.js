import {
  FormArray,
  FormGroup,
  NgControl,
  NgModel
} from "./chunk-A6CXCBMF.js";
import {
  AnimationEngine
} from "./chunk-GZ7ICUWI.js";
import {
  Meta
} from "./chunk-2BAAS4WC.js";
import {
  DOCUMENT,
  isPlatformBrowser
} from "./chunk-ET6A4XZJ.js";
import {
  ChangeDetectorRef,
  DestroyRef,
  Directive,
  ElementRef,
  EnvironmentInjector,
  INJECTOR$1,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgZone,
  Optional,
  Output,
  PLATFORM_ID,
  Pipe,
  QueryList,
  RuntimeError,
  SkipSelf,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  assertInInjectionContext,
  assertNotInReactiveContext,
  computed,
  createComponent,
  effect,
  inject,
  isSignal,
  setClassMetadata,
  signal,
  untracked,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵgetInheritedFactory,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵqueryRefresh,
  ɵɵresolveDocument,
  ɵɵviewQuery
} from "./chunk-TMZGPDKF.js";
import {
  BehaviorSubject,
  EMPTY,
  NEVER,
  Observable,
  ReplaySubject,
  Subject,
  __decorate,
  __spreadProps,
  __spreadValues,
  asyncScheduler,
  catchError,
  concat,
  defaultIfEmpty,
  defer,
  delay,
  distinctUntilChanged,
  endWith,
  filter,
  fromEvent,
  ignoreElements,
  map,
  merge,
  of,
  pipe,
  repeat,
  share,
  shareReplay,
  skip,
  startWith,
  switchMap,
  take,
  takeUntil,
  takeWhile,
  tap,
  throttleTime,
  timer,
  withLatestFrom
} from "./chunk-NUC4GERA.js";

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-constants.mjs
var rect = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0,
  x: 0,
  y: 0
};
var EMPTY_QUERY = new QueryList();
var EMPTY_ARRAY = [];
var EMPTY_FUNCTION = () => {
};
var EMPTY_CLIENT_RECT = __spreadProps(__spreadValues({}, rect), {
  toJSON: () => rect
});
var TUI_FALSE_HANDLER = () => false;
var TUI_TRUE_HANDLER = () => true;
function bothEmpty(item1, item2) {
  return Array.isArray(item1) && Array.isArray(item2) && !item1.length && !item2.length;
}
var TUI_DEFAULT_MATCHER = (item, search, stringify = String) => stringify(item).toLowerCase().includes(search.toLowerCase());
var TUI_STRICT_MATCHER = (item, search, stringify = String) => stringify(item).toLowerCase() === search.toLowerCase();
var TUI_DEFAULT_IDENTITY_MATCHER = (item1, item2) => item1 === item2 || bothEmpty(item1, item2);
var TUI_DIGIT_REGEXP = /\d/;
var TUI_NON_DIGIT_REGEXP = /\D/;
var TUI_NON_DIGITS_REGEXP = /\D+/g;
var svgNodeFilter = {
  acceptNode(node) {
    return "ownerSVGElement" in node ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
  }
};
var CHAR_NO_BREAK_SPACE = " ";
var CHAR_EN_DASH = "–";
var CHAR_EM_DASH = "—";
var CHAR_LAQUO = "«";
var CHAR_RAQUO = "»";
var CHAR_HYPHEN = "-";
var CHAR_MINUS = "−";
var CHAR_PLUS = "+";
var CHAR_BULLET = "•";
var CHAR_ELLIPSIS = "…";
var CHAR_CURRENCY_SIGN = "¤";
var CHAR_ZERO_WIDTH_SPACE = "​";
var TUI_USED_ICONS = ["@tui.mir", "@tui.visa", "@tui.electron", "@tui.mastercard", "@tui.maestro", "@tui.amex", "@tui.diners-club", "@tui.discover", "@tui.humo", "@tui.jcb", "@tui.ru-pay", "@tui.union-pay", "@tui.uzcard", "@tui.verve", "@tui.search", "@tui.sun", "@tui.moon", "@tui.code", "@tui.menu", "@tui.copy", "@tui.check", "@tui.link", "@tui.eye-off", "@tui.eye", "@tui.grip-vertical", "@tui.chevron-up", "@tui.chevron-down", "@tui.chevrons-up-down", "@tui.info", "@tui.circle-check", "@tui.circle-x", "@tui.circle-alert", "@tui.circle-help", "@tui.x", "@tui.chevron-right", "@tui.chevron-left", "@tui.calendar", "@tui.minus", "@tui.file", "@tui.trash", "@tui.phone", "@tui.star", "@tui.rotate-ccw-square", "@tui.arrow-left", "@tui.arrow-right", "@tui.plus", "@tui.minimize", "@tui.filter", "@tui.layout-grid", "@tui.move-up-right", "@tui.move-right", "@tui.move-down-right", "@tui.move-down", "@tui.move-down-left", "@tui.move-left", "@tui.move-up-left", "@tui.move-up", "@tui.clock"];
var TUI_VERSION = "4.5.0";

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-utils-math.mjs
function tuiClamp(value, min, max) {
  ngDevMode && console.assert(!Number.isNaN(value));
  ngDevMode && console.assert(!Number.isNaN(min));
  ngDevMode && console.assert(!Number.isNaN(max));
  ngDevMode && console.assert(max >= min);
  return Math.min(max, Math.max(min, value));
}
function tuiInRange(value, fromInclude, toExclude) {
  ngDevMode && console.assert(!Number.isNaN(value));
  ngDevMode && console.assert(!Number.isNaN(fromInclude));
  ngDevMode && console.assert(!Number.isNaN(toExclude));
  ngDevMode && console.assert(fromInclude < toExclude);
  return value >= fromInclude && value < toExclude;
}
function tuiNormalizeToIntNumber(value, min, max) {
  ngDevMode && console.assert(Number.isInteger(min));
  ngDevMode && console.assert(Number.isInteger(max));
  ngDevMode && console.assert(min <= max);
  if (Number.isNaN(value) || value <= min) {
    return min;
  }
  if (value >= max) {
    return max;
  }
  return Math.round(value);
}
function tuiQuantize(value, quantum) {
  ngDevMode && console.assert(Number.isFinite(value));
  ngDevMode && console.assert(Number.isFinite(quantum));
  ngDevMode && console.assert(quantum > 0);
  const remainder = value % quantum;
  return remainder < quantum / 2 ? value - remainder : value + quantum - remainder;
}
var MAX_PRECISION = 292;
function calculate(value, precision, func) {
  if (value === Infinity) {
    return value;
  }
  ngDevMode && console.assert(!Number.isNaN(value), "Value must be number");
  ngDevMode && console.assert(Number.isInteger(precision), "Precision must be integer");
  precision = Math.min(precision, MAX_PRECISION);
  const pair = `${value}e`.split("e");
  const tempValue = func(Number(`${pair[0]}e${Number(pair[1]) + precision}`));
  const processedPair = `${tempValue}e`.split("e");
  return Number(`${processedPair[0]}e${Number(processedPair[1]) - precision}`);
}
function tuiRound(value, precision = 0) {
  return calculate(value, precision, Math.round);
}
function tuiCeil(value, precision = 0) {
  return calculate(value, precision, Math.ceil);
}
function tuiFloor(value, precision = 0) {
  return calculate(value, precision, Math.floor);
}
function tuiTrunc(value, precision = 0) {
  return calculate(value, precision, Math.trunc);
}
function tuiRoundWith({
  value,
  precision,
  method
}) {
  switch (method) {
    case "round":
      return tuiRound(value, precision);
    case "ceil":
      return tuiCeil(value, precision);
    case "floor":
      return tuiFloor(value, precision);
    default:
      return tuiTrunc(value, precision);
  }
}
function tuiSum(...args) {
  return args.reduce((a, b) => a + b, 0);
}
function tuiToInt(bool) {
  return bool ? 1 : 0;
}
function tuiToInteger(value) {
  return parseInt(value, 10);
}
function tuiToRadians(deg) {
  return deg * Math.PI / 180;
}

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
function takeUntilDestroyed(destroyRef) {
  if (!destroyRef) {
    assertInInjectionContext(takeUntilDestroyed);
    destroyRef = inject(DestroyRef);
  }
  const destroyed$ = new Observable((observer) => {
    const unregisterFn = destroyRef.onDestroy(observer.next.bind(observer));
    return unregisterFn;
  });
  return (source) => {
    return source.pipe(takeUntil(destroyed$));
  };
}
function toObservable(source, options) {
  !options?.injector && assertInInjectionContext(toObservable);
  const injector = options?.injector ?? inject(Injector);
  const subject = new ReplaySubject(1);
  const watcher = effect(() => {
    let value;
    try {
      value = source();
    } catch (err) {
      untracked(() => subject.error(err));
      return;
    }
    untracked(() => subject.next(value));
  }, {
    injector,
    manualCleanup: true
  });
  injector.get(DestroyRef).onDestroy(() => {
    watcher.destroy();
    subject.complete();
  });
  return subject.asObservable();
}
function toSignal(source, options) {
  ngDevMode && assertNotInReactiveContext(toSignal, "Invoking `toSignal` causes new subscriptions every time. Consider moving `toSignal` outside of the reactive context and read the signal value where needed.");
  const requiresCleanup = !options?.manualCleanup;
  requiresCleanup && !options?.injector && assertInInjectionContext(toSignal);
  const cleanupRef = requiresCleanup ? options?.injector?.get(DestroyRef) ?? inject(DestroyRef) : null;
  const equal = makeToSignalEqual(options?.equal);
  let state;
  if (options?.requireSync) {
    state = signal({
      kind: 0
      /* StateKind.NoValue */
    }, {
      equal
    });
  } else {
    state = signal({
      kind: 1,
      value: options?.initialValue
    }, {
      equal
    });
  }
  const sub = source.subscribe({
    next: (value) => state.set({
      kind: 1,
      value
    }),
    error: (error) => {
      if (options?.rejectErrors) {
        throw error;
      }
      state.set({
        kind: 2,
        error
      });
    }
    // Completion of the Observable is meaningless to the signal. Signals don't have a concept of
    // "complete".
  });
  if (options?.requireSync && state().kind === 0) {
    throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
  }
  cleanupRef?.onDestroy(sub.unsubscribe.bind(sub));
  return computed(() => {
    const current = state();
    switch (current.kind) {
      case 1:
        return current.value;
      case 2:
        throw current.error;
      case 0:
        throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
    }
  }, {
    equal: options?.equal
  });
}
function makeToSignalEqual(userEquality = Object.is) {
  return (a, b) => a.kind === 1 && b.kind === 1 && userEquality(a.value, b.value);
}

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-utils-miscellaneous.mjs
function tuiArrayRemove(array, index) {
  return array.slice(0, Math.max(index, 0)).concat(array.slice(Math.max(index + 1, 0)));
}
function tuiArrayShallowEquals(a, b) {
  return a.length === b.length && a.every((item, index) => item === b[index]);
}
function tuiArrayToggle(array, item) {
  const index = array.indexOf(item);
  return index === -1 ? [...array, item] : tuiArrayRemove(array, index);
}
var changeDateSeparator = (dateString, newDateSeparator) => dateString.replaceAll(/[^0-9A-Za-zА-Яа-я]/gi, newDateSeparator);
function tuiIsControlEmpty({
  value = null
}) {
  return value === null || value === "" || Array.isArray(value) && !value.length;
}
function tuiCountFilledControls(control) {
  if (control instanceof FormArray) {
    return control.controls.reduce((acc, nestedControl) => acc + tuiCountFilledControls(nestedControl), 0);
  }
  if (control instanceof FormGroup) {
    return Object.values(control.controls).reduce((acc, nestedControl) => acc + tuiCountFilledControls(nestedControl), 0);
  }
  return tuiToInt(!tuiIsControlEmpty(control));
}
function tuiCreateToken(defaults) {
  return tuiCreateTokenFromFactory(() => defaults);
}
function tuiCreateTokenFromFactory(factory) {
  return new InjectionToken("", {
    factory
  });
}
function tuiIsString(value) {
  return typeof value === "string";
}
function tuiDefaultSort(x, y) {
  if (x === y) {
    return 0;
  }
  if (tuiIsString(x) && tuiIsString(y)) {
    return x.localeCompare(y);
  }
  return x > y ? 1 : -1;
}
function tuiDirectiveBinding(token, key, initial, options = {
  self: true
}) {
  const result = isSignal(initial) ? initial : signal(initial);
  const directive = inject(token, options);
  const output = directive[`${key.toString()}Change`];
  let previous;
  effect(() => {
    const value = result();
    if (previous === value) {
      return;
    }
    if (isSignal(directive[key])) {
      directive[key].set(value);
    } else {
      directive[key] = value;
    }
    directive.ngOnChanges?.({});
    output?.emit?.(value);
    previous = value;
  }, {
    allowSignalWrites: true
  });
  return result;
}
function tuiDirectiveListener(token, key, options = {
  self: true
}) {
  const prop = inject(token, options)?.[key];
  return isSignal(prop) ? prop : toSignal(prop);
}
function tuiDistanceBetweenTouches({
  touches
}) {
  return Math.hypot((touches[0]?.clientX ?? 0) - (touches[1]?.clientX ?? 0), (touches[0]?.clientY ?? 0) - (touches[1]?.clientY ?? 0));
}
function tuiEaseInOutQuad(t) {
  ngDevMode && console.assert(t >= 0 && t <= 1, "Input must be between 0 and 1 inclusive but received ", t);
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}
function tuiFlatLength(array) {
  return array.reduce((count, section) => count + section.length, 0);
}
function tuiGetOriginalArrayFromQueryList(queryList) {
  let array = [];
  queryList.find((_item, _index, originalArray) => {
    array = originalArray;
    return true;
  });
  return array;
}
function tuiIsFalsy(value) {
  return !value;
}
function tuiIsNumber(value) {
  return typeof value === "number";
}
function tuiIsObject(value) {
  return typeof value === "object" && !!value;
}
function tuiIsPresent(value) {
  return value !== null && value !== void 0;
}
function tuiIsValidUrl(url) {
  const pattern = new RegExp(
    "^([a-zA-Z]+:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|localhost|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$",
    // fragment locator
    "i"
  );
  return pattern.test(url);
}
function tuiMarkControlAsTouchedAndValidate(control) {
  if (control instanceof FormArray) {
    control.controls.forEach((nestedControl) => {
      tuiMarkControlAsTouchedAndValidate(nestedControl);
    });
  }
  if (control instanceof FormGroup) {
    Object.values(control.controls).forEach((nestedControl) => {
      tuiMarkControlAsTouchedAndValidate(nestedControl);
    });
  }
  control.markAsTouched();
  control.updateValueAndValidity();
}
function tuiNullableSame(a, b, handler) {
  if (a === null) {
    return b === null;
  }
  if (b === null) {
    return false;
  }
  return handler(a, b);
}
function tuiProvide(provide, useExisting, multi = false) {
  return {
    provide,
    useExisting,
    multi
  };
}
function tuiProvideOptions(provide, options, fallback) {
  return {
    provide,
    deps: [[new Optional(), new SkipSelf(), provide]],
    useFactory: (parent) => __spreadValues(__spreadValues({}, parent || fallback), options)
  };
}
function decorateMethod(originalMethod) {
  let previousArgs = [];
  let originalFnWasCalledLeastAtOnce = false;
  let pureValue;
  return function tuiPureMethodPatched(...args) {
    const isPure = originalFnWasCalledLeastAtOnce && previousArgs.length === args.length && args.every((arg, index) => arg === previousArgs[index]);
    if (isPure) {
      return pureValue;
    }
    previousArgs = args;
    pureValue = originalMethod.apply(this, args);
    originalFnWasCalledLeastAtOnce = true;
    return pureValue;
  };
}
function decorateGetter(originalGetter, propertyKey, enumerable = true) {
  return function tuiPureGetterPatched() {
    const value = originalGetter.call(this);
    Object.defineProperty(this, propertyKey, {
      enumerable,
      value
    });
    return value;
  };
}
function tuiPure(target, propertyKeyOrContext, descriptor) {
  if (typeof target === "function") {
    const context = propertyKeyOrContext;
    if (context.kind === "getter") {
      return decorateGetter(target, context.name);
    }
    if (context.kind === "method") {
      return decorateMethod(target);
    }
    throw new TuiPureException();
  }
  const {
    get,
    enumerable,
    value
  } = descriptor;
  const propertyKey = propertyKeyOrContext;
  if (get) {
    return {
      configurable: true,
      enumerable,
      get: decorateGetter(get, propertyKey, enumerable)
    };
  }
  if (typeof value !== "function") {
    throw new TuiPureException();
  }
  const original = value;
  return {
    configurable: true,
    enumerable,
    get() {
      let previousArgs = [];
      let originalFnWasCalledLeastAtOnce = false;
      let pureValue;
      const patched = (...args) => {
        const isPure = originalFnWasCalledLeastAtOnce && previousArgs.length === args.length && args.every((arg, index) => arg === previousArgs[index]);
        if (isPure) {
          return pureValue;
        }
        previousArgs = args;
        pureValue = original.apply(this, args);
        originalFnWasCalledLeastAtOnce = true;
        return pureValue;
      };
      Object.defineProperty(this, propertyKey, {
        configurable: true,
        value: patched
      });
      return patched;
    }
  };
}
var TuiPureException = class extends Error {
  constructor() {
    super(ngDevMode ? "tuiPure can only be used with functions or getters" : "");
  }
};
function tuiPx(value) {
  ngDevMode && console.assert(Number.isFinite(value), "Value must be finite number");
  return `${value}px`;
}
function tuiUniqBy(array, key) {
  return Array.from(array.reduce((map2, item) => map2.has(item[key]) ? map2 : map2.set(item[key], item), /* @__PURE__ */ new Map()).values());
}
var MAP = tuiCreateTokenFromFactory(() => {
  const map2 = /* @__PURE__ */ new Map();
  inject(DestroyRef).onDestroy(() => map2.forEach((component) => component.destroy()));
  return map2;
});
function tuiWithStyles(component) {
  const map2 = inject(MAP);
  const environmentInjector = inject(EnvironmentInjector);
  if (!map2.has(component)) {
    map2.set(component, createComponent(component, {
      environmentInjector
    }));
  }
  return void 0;
}

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-observables.mjs
function tuiControlValue(control) {
  return new Observable((subscriber) => control?.valueChanges?.pipe(startWith(control.value)).subscribe(subscriber));
}
function tuiTypedFromEvent(target, event, options = {}) {
  return fromEvent(target, event, options);
}
var TuiDragState = class {
  constructor(stage, event) {
    this.stage = stage;
    this.event = event;
  }
};
function tuiDragAndDropFrom(element) {
  const {
    ownerDocument
  } = element;
  return concat(tuiTypedFromEvent(element, "mousedown").pipe(take(1), map((event) => new TuiDragState("start", event))), merge(tuiTypedFromEvent(ownerDocument, "mousemove").pipe(map((event) => new TuiDragState("continues", event))), merge(tuiTypedFromEvent(ownerDocument, "mouseup"), tuiTypedFromEvent(ownerDocument, "dragend")).pipe(take(1), map((event) => new TuiDragState("end", event)), endWith(null))).pipe(takeWhile(tuiIsPresent))).pipe(repeat());
}
function tuiPreventDefault() {
  return tap((event) => event.preventDefault());
}
function tuiStopPropagation() {
  return tap((event) => event.stopPropagation());
}
function tuiIfMap(project, predicate = Boolean) {
  return pipe(switchMap((value) => predicate(value) ? project(value) : EMPTY));
}
function tuiMustBePresent() {
  return map((value) => {
    if (!tuiIsPresent(value)) {
      throw new TuiValuePresentException();
    }
    return value;
  });
}
var TuiValuePresentException = class extends Error {
  constructor() {
    super(ngDevMode ? "Value must present" : "");
  }
};
function tuiQueryListChanges(queryList) {
  return queryList.changes.pipe(startWith(null), map(() => tuiGetOriginalArrayFromQueryList(queryList)));
}
function tuiScrollFrom(element) {
  return tuiTypedFromEvent(element === element.ownerDocument.documentElement ? element.ownerDocument : element, "scroll");
}
function tuiTakeUntilDestroyed(destroyRef) {
  return pipe(takeUntil(NEVER.pipe(takeUntilDestroyed(destroyRef), catchError(() => EMPTY), defaultIfEmpty(null))));
}
function tuiWatch(cdr) {
  return tap(() => cdr.markForCheck());
}
function tuiZonefull(zone = inject(NgZone)) {
  return (source) => new Observable((subscriber) => source.subscribe({
    next: (value) => zone.run(() => subscriber.next(value)),
    error: (error) => zone.run(() => subscriber.error(error)),
    complete: () => zone.run(() => subscriber.complete())
  }));
}
function tuiZonefree(zone = inject(NgZone)) {
  return (source) => new Observable((subscriber) => zone.runOutsideAngular(() => source.subscribe(subscriber)));
}
function tuiZoneOptimized(zone = inject(NgZone)) {
  return pipe(tuiZonefree(zone), tuiZonefull(zone));
}
var TuiZoneScheduler = class {
  constructor(zoneConditionFn, scheduler = asyncScheduler) {
    this.zoneConditionFn = zoneConditionFn;
    this.scheduler = scheduler;
  }
  now() {
    return this.scheduler.now();
  }
  schedule(...args) {
    return this.zoneConditionFn(() => this.scheduler.schedule(...args));
  }
};
function tuiZonefreeScheduler(zone = inject(NgZone), scheduler = asyncScheduler) {
  return new TuiZoneScheduler(zone.runOutsideAngular.bind(zone), scheduler);
}
function tuiZonefullScheduler(zone = inject(NgZone), scheduler = asyncScheduler) {
  return new TuiZoneScheduler(zone.run.bind(zone), scheduler);
}

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-utils-browser.mjs
function tuiIsApple(navigator) {
  return navigator.platform.startsWith("Mac") || navigator.platform === "iPhone";
}
function tuiIsEdge(userAgent) {
  return userAgent.toLowerCase().includes("edge");
}
function tuiIsFirefox(userAgent) {
  return userAgent.toLowerCase().includes("firefox");
}
var IOS_REG_EXP = /ipad|iphone|ipod/;
function tuiIsIos(navigator) {
  return IOS_REG_EXP.test(navigator.userAgent.toLowerCase()) || tuiIsApple(navigator) && navigator.maxTouchPoints > 1;
}
function tuiIsSafari({
  ownerDocument: doc
}) {
  const win = doc?.defaultView;
  const isMacOsSafari = typeof win.safari !== "undefined" && win.safari?.pushNotification?.toString() === "[object SafariRemoteNotification]";
  const isIosSafari = !!win.navigator?.vendor?.includes("Apple") && !win.navigator?.userAgent?.includes("CriOS") && !win.navigator?.userAgent?.includes("FxiOS");
  return isMacOsSafari || isIosSafari;
}

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-utils-color.mjs
function tuiGetGradientData(gradient) {
  return gradient.slice(0, Math.max(0, gradient.length - 1)).replace("linear-gradient(", "");
}
function tuiHexToRgb(hex) {
  const matches = hex.replace("#", "").split("").map((char, _, array) => array.length === 3 ? char + char : char).join("").match(/.{2}/g);
  return matches ? matches.map((x) => Number.parseInt(x, 16)) : [0, 0, 0];
}
var getChunksFromString = (hex, chunkSize) => hex.match(new RegExp(`.{${chunkSize}}`, "g"));
var convertHexUnitTo256 = (hexStr) => parseInt(hexStr.repeat(2 / hexStr.length), 16);
var getAlphaFloat = (a, alpha) => {
  if (typeof a !== "undefined") {
    return Number((a / 255).toFixed(2));
  }
  if (typeof alpha !== "number" || alpha < 0 || alpha > 1) {
    return 1;
  }
  return alpha;
};
function tuiHexToRGBA(hex, alpha) {
  const [r, g, b, a] = tuiParseHex(hex, alpha);
  return a < 1 ? `rgba(${r}, ${g}, ${b}, ${a})` : `rgb(${r}, ${g}, ${b})`;
}
function tuiIsValidHex(hex) {
  return /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hex);
}
function tuiParseHex(hex, alpha) {
  if (!tuiIsValidHex(hex)) {
    throw new Error("Invalid HEX");
  }
  const chunkSize = Math.floor((hex.length - 1) / 3);
  const hexArr = getChunksFromString(hex.slice(1), chunkSize);
  const [r = NaN, g = NaN, b = NaN, a] = hexArr?.map(convertHexUnitTo256) ?? [];
  const floatAlpha = getAlphaFloat(a, alpha);
  return [r, g, b, floatAlpha];
}
function hsvToColor(h, s, v, n) {
  const k = (n + h / 60) % 6;
  return Math.round(v - v * s * Math.max(Math.min(k, 4 - k, 1), 0));
}
function tuiHsvToRgb(h, s, v) {
  return [hsvToColor(h, s, v, 5), hsvToColor(h, s, v, 3), hsvToColor(h, s, v, 1)];
}
var DEFAULT = [0, 0, 0, 1];
function tuiParseColor(color) {
  const stripped = color.replace("#", "").replace("rgba(", "").replace("rgb(", "").replace(")", "");
  const array = stripped.split(",").map((item) => parseFloat(item));
  if (array.length === 4) {
    return array;
  }
  if (array.length === 3) {
    return array.concat(1);
  }
  const matches = stripped.match(new RegExp(`(.{${stripped.length / 3}})`, "g"));
  if (!matches) {
    return DEFAULT;
  }
  const parsed = matches.map((char) => parseInt(stripped.length % 2 ? char + char : char, 16));
  return [parsed[0] || DEFAULT[0], parsed[1] || DEFAULT[1], parsed[2] || DEFAULT[2], parsed[3] === void 0 ? DEFAULT[3] : parsed[3]];
}
var COMMA = "\\s*,\\s*";
var HEX = "#(?:[a-f0-9]{6}|[a-f0-9]{3})";
var RGB = "\\(\\s*(?:\\d{1,3}\\s*,\\s*){2}\\d{1,3}\\s*\\)";
var RGBA = "\\(\\s*(?:\\d{1,3}\\s*,\\s*){2}\\d{1,3}\\s*,\\s*\\d*\\.?\\d+\\)";
var VALUE = "(?:[+-]?\\d*\\.?\\d+)(?:%|[a-z]+)?";
var KEYWORD = "[_a-z-][_a-z0-9-]*";
var COLOR = ["(?:", HEX, "|", "(?:rgb|hsl)", RGB, "|", "(?:rgba|hsla)", RGBA, "|", KEYWORD, ")"];
var REGEXP_ARRAY = ["\\s*(", ...COLOR, ")", "(?:\\s+", "(", VALUE, "))?", "(?:", COMMA, "\\s*)?"];
function getPosition(match, stops) {
  const fallback = stops === 1 ? "100%" : `${stops}%`;
  return match?.includes("%") ? match : fallback;
}
function tuiParseGradient(input) {
  const stopsRegexp = new RegExp(REGEXP_ARRAY.join(""), "gi");
  const stopsString = input.startsWith("to") || input.match(/^\d/) ? input.slice(Math.max(0, input.indexOf(",") + 1)).trim() : input;
  const side = input.startsWith("to") ? input.split(",")[0] : "to bottom";
  let stops = [];
  let matchColorStop = stopsRegexp.exec(stopsString);
  while (matchColorStop !== null) {
    stops = stops.concat({
      color: matchColorStop[1] || "",
      position: getPosition(matchColorStop[2] || "", stops.length)
    });
    matchColorStop = stopsRegexp.exec(stopsString);
  }
  stops = stops.filter(({
    color
  }) => color.startsWith("#") || color.startsWith("rgb"));
  return {
    stops,
    side
  };
}
function tuiToGradient({
  stops,
  side
}) {
  return `linear-gradient(${side}, ${stops.map(({
    color,
    position
  }) => `rgba(${tuiParseColor(color).join(", ")}) ${position}`).join(", ")})`;
}
function tuiRgbToHex(r, g, b) {
  return `#${[r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("")}`;
}
function tuiRgbToHsv(r, g, b) {
  const v = Math.max(r, g, b);
  const n = v - Math.min(r, g, b);
  const h = n && (v === r ? (g - b) / n : v === g ? 2 + (b - r) / n : 4 + (r - g) / n);
  return [60 * (h < 0 ? h + 6 : h), v && n / v, v];
}
function tuiRgbaToHex(color) {
  if (!tuiIsValidRgba(color)) {
    throw new Error("Invalid RGBa");
  }
  const rgb = color.replaceAll(/\s/g, "").match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i) ?? null;
  let alpha = (rgb?.[4] ?? "").toString().trim();
  let hex = rgb ? ((parseInt(rgb?.[1] ?? "", 10) || 0) | 1 << 8).toString(16).slice(1) + ((parseInt(rgb?.[2] ?? "", 10) || 0) | 1 << 8).toString(16).slice(1) + ((parseInt(rgb?.[3] ?? "", 10) || 0) | 1 << 8).toString(16).slice(1) : color;
  alpha = alpha !== "" ? alpha : 1;
  alpha = (Number(alpha) * 255 | 1 << 8).toString(16).slice(1);
  hex += alpha;
  return `#${hex.toUpperCase()}`;
}
function tuiIsValidRgba(rgba) {
  const range = "(\\d|[1-9]\\d|1\\d{2}|2[0-4]\\d|2[0-5]{2})";
  const alpha = "([01]|0?\\.\\d+)";
  return new RegExp(`^(?:rgb\\(\\s*${range}\\s*,\\s*${range}\\s*,\\s*${range}\\s*\\)|rgba\\(\\s*${range}\\s*,\\s*${range}\\s*,\\s*${range}\\s*,\\s*${alpha}\\s*\\))$`).test(rgba);
}

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-utils-dom.mjs
function tuiContainsOrAfter(current, node) {
  try {
    return current.contains(node) || !!(node.compareDocumentPosition(current) & Node.DOCUMENT_POSITION_PRECEDING);
  } catch {
    return false;
  }
}
function tuiIsInput(element) {
  return element.matches("input");
}
function tuiIsTextarea(element) {
  return element.matches("textarea");
}
function tuiIsTextfield(element) {
  return tuiIsInput(element) || tuiIsTextarea(element);
}
function tuiIsElement(node) {
  return !!node && "nodeType" in node && node.nodeType === Node.ELEMENT_NODE;
}
function tuiIsHTMLElement(node) {
  return !!node && node instanceof node.ownerDocument.defaultView.HTMLElement;
}
function tuiIsTextNode(node) {
  return node.nodeType === Node.TEXT_NODE;
}
function tuiIsInputEvent(event) {
  return "data" in event && "inputType" in event;
}
function tuiGetActualTarget(event) {
  return event.composedPath()[0];
}
var DEFAULT_FORMAT = "text/plain";
function tuiGetClipboardDataText(event, format = DEFAULT_FORMAT) {
  return "clipboardData" in event && event.clipboardData !== null ? event.clipboardData.getData(format) || event.clipboardData.getData(DEFAULT_FORMAT) : event.target.ownerDocument.defaultView.clipboardData.getData("text");
}
function tuiGetDocumentOrShadowRoot(node) {
  return "getRootNode" in node && node.isConnected ? node.getRootNode() : node.ownerDocument;
}
function tuiGetElementObscures(element) {
  const {
    ownerDocument
  } = element;
  if (!ownerDocument?.defaultView || !element.getBoundingClientRect) {
    return null;
  }
  const {
    innerWidth,
    innerHeight
  } = ownerDocument.defaultView;
  const doc = tuiGetDocumentOrShadowRoot(element);
  const rect2 = element.getBoundingClientRect();
  if (rect2.width === 0 && rect2.height === 0) {
    return null;
  }
  const left = tuiClamp(Math.round(rect2.left) + 2, 0, innerWidth);
  const top = tuiClamp(Math.round(rect2.top) + 2, 0, innerHeight);
  const right = tuiClamp(Math.round(rect2.right) - 2, 0, innerWidth);
  const bottom = tuiClamp(Math.round(rect2.bottom) - 2, 0, innerHeight);
  const horizontalMiddle = tuiClamp(Math.round(rect2.left + rect2.width / 2), 0, innerWidth);
  const verticalMiddle = tuiClamp(Math.round(rect2.top + rect2.height / 2), 0, innerHeight);
  const elements = [doc.elementFromPoint(horizontalMiddle, top), doc.elementFromPoint(horizontalMiddle, bottom), doc.elementFromPoint(left, verticalMiddle), doc.elementFromPoint(right, verticalMiddle)];
  const nonNull = elements.filter(tuiIsPresent);
  if (!nonNull.length) {
    return [];
  }
  const filtered = nonNull.filter((el) => !element.contains(el) && !el.contains(element));
  return filtered.length === 4 ? filtered : null;
}
function tuiGetElementOffset(host, element) {
  ngDevMode && console.assert(host.contains(element), "Host must contain element");
  let {
    offsetTop,
    offsetLeft,
    offsetParent
  } = element;
  while (tuiIsHTMLElement(offsetParent) && offsetParent !== host) {
    offsetTop += offsetParent.offsetTop;
    offsetLeft += offsetParent.offsetLeft;
    offsetParent = offsetParent.offsetParent;
  }
  return {
    offsetTop,
    offsetLeft
  };
}
function tuiGetElementPoint(x, y, element) {
  const {
    left,
    top,
    width,
    height
  } = element.getBoundingClientRect();
  return [tuiClamp(x - left, 0, width) / width, tuiClamp(y - top, 0, height) / height];
}
function tuiGetSelectedText({
  getSelection,
  document
}) {
  return document.activeElement && tuiIsTextfield(document.activeElement) ? document.activeElement.value.slice(document.activeElement.selectionStart || 0, document.activeElement.selectionEnd || 0) : getSelection()?.toString() || null;
}
function tuiInjectElement() {
  return inject(ElementRef).nativeElement;
}
function tuiIsCurrentTarget({
  target,
  currentTarget
}) {
  return target === currentTarget;
}
function tuiIsElementEditable(element) {
  return tuiIsTextfield(element) && !element.readOnly || !!element.isContentEditable;
}
function tuiIsInsideIframe(win) {
  return win.parent !== win;
}
function tuiIsNodeIn(node, selector) {
  return tuiIsTextNode(node) ? !!node.parentElement?.closest(selector) : tuiIsElement(node) && !!node.closest(selector);
}
function tuiPointToClientRect(x = 0, y = 0) {
  const rect2 = {
    x,
    y,
    left: x,
    right: x,
    top: y,
    bottom: y,
    width: 0,
    height: 0
  };
  return __spreadProps(__spreadValues({}, rect2), {
    toJSON: () => rect2
  });
}
function tuiRetargetedBoundaryCrossing(event) {
  if ("explicitOriginalTarget" in event) {
    return event?.explicitOriginalTarget !== event.target;
  }
  if ("pointerId" in event) {
    return event.pointerId === -1;
  }
  if ("detail" in event && "webkitForce" in event) {
    return event?.detail === 0;
  }
  return false;
}

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-utils-focus.mjs
function tuiGetNativeFocused({
  activeElement
}) {
  if (!activeElement?.shadowRoot) {
    return activeElement;
  }
  let element = activeElement.shadowRoot.activeElement;
  while (element?.shadowRoot) {
    element = element.shadowRoot.activeElement;
  }
  return element;
}
function tuiBlurNativeFocused(doc) {
  const activeElement = tuiGetNativeFocused(doc);
  if (tuiIsHTMLElement(activeElement)) {
    activeElement.blur();
  }
}
function tuiFocusedIn(node) {
  return toSignal(merge(fromEvent(node, "focusin").pipe(map(TUI_TRUE_HANDLER)), fromEvent(node, "focusout").pipe(map(TUI_FALSE_HANDLER))), {
    initialValue: false
  });
}
function tuiIsNativeKeyboardFocusable(element) {
  if (element.hasAttribute("disabled") || element.getAttribute("tabIndex") === "-1") {
    return false;
  }
  if (tuiIsHTMLElement(element) && element.isContentEditable || element.getAttribute("tabIndex") === "0") {
    return true;
  }
  switch (element.tagName) {
    case "BUTTON":
    case "SELECT":
    case "TEXTAREA":
      return true;
    case "VIDEO":
    case "AUDIO":
      return element.hasAttribute("controls");
    case "INPUT":
      return element.getAttribute("type") !== "hidden";
    case "A":
    case "LINK":
      return element.hasAttribute("href");
    default:
      return false;
  }
}
function tuiIsNativeMouseFocusable(element) {
  return !element.hasAttribute("disabled") && (element.getAttribute("tabIndex") === "-1" || tuiIsNativeKeyboardFocusable(element));
}
function tuiGetClosestFocusable({
  initial,
  root,
  previous = false,
  keyboard = true
}) {
  if (!root.ownerDocument) {
    return null;
  }
  const check = keyboard ? tuiIsNativeKeyboardFocusable : tuiIsNativeMouseFocusable;
  const treeWalker = root.ownerDocument.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, svgNodeFilter);
  treeWalker.currentNode = initial;
  while (previous ? treeWalker.previousNode() : treeWalker.nextNode()) {
    if (tuiIsHTMLElement(treeWalker.currentNode)) {
      initial = treeWalker.currentNode;
    }
    if (tuiIsHTMLElement(initial) && check(initial)) {
      return initial;
    }
  }
  return null;
}
function tuiIsNativeFocused(node) {
  return !!node?.ownerDocument && tuiGetNativeFocused(node.ownerDocument) === node && node.ownerDocument.hasFocus();
}
function tuiIsNativeFocusedIn(node) {
  const focused = node?.ownerDocument && tuiGetNativeFocused(node.ownerDocument);
  return !!focused && node.contains(focused) && !!node.ownerDocument?.hasFocus();
}
function tuiMoveFocus(currentIndex, elements, step) {
  currentIndex += step;
  while (currentIndex >= 0 && currentIndex < elements.length) {
    elements[currentIndex]?.focus();
    if (tuiIsNativeFocused(elements[currentIndex])) {
      return;
    }
    currentIndex += step;
  }
}

// node_modules/@ng-web-apis/common/fesm2022/ng-web-apis-common.mjs
var WA_WINDOW = new InjectionToken("[WA_WINDOW]", {
  factory: () => {
    const {
      defaultView
    } = inject(DOCUMENT);
    if (!defaultView) {
      throw new Error("Window is not available");
    }
    return defaultView;
  }
});
var WINDOW = WA_WINDOW;
var WA_ANIMATION_FRAME = new InjectionToken("[WA_ANIMATION_FRAME]", {
  factory: () => {
    const {
      requestAnimationFrame,
      cancelAnimationFrame
    } = inject(WINDOW);
    const animationFrame$ = new Observable((subscriber) => {
      let id = NaN;
      const callback = (timestamp) => {
        subscriber.next(timestamp);
        id = requestAnimationFrame(callback);
      };
      id = requestAnimationFrame(callback);
      return () => {
        cancelAnimationFrame(id);
      };
    });
    return animationFrame$.pipe(share());
  }
});
var WA_CACHES = new InjectionToken("[WA_CACHES]", {
  factory: () => inject(WINDOW).caches
});
var WA_CRYPTO = new InjectionToken("[WA_CRYPTO]", {
  factory: () => inject(WINDOW).crypto
});
var WA_CSS = new InjectionToken("[WA_CSS]", {
  factory: () => inject(WINDOW).CSS ?? {
    escape: (v) => v,
    // eslint-disable-next-line no-restricted-syntax
    supports: () => false
  }
});
var WA_HISTORY = new InjectionToken("[WA_HISTORY]", {
  factory: () => inject(WINDOW).history
});
var WA_LOCAL_STORAGE = new InjectionToken("[WA_LOCAL_STORAGE]", {
  factory: () => inject(WINDOW).localStorage
});
var WA_LOCATION = new InjectionToken("[WA_LOCATION]", {
  factory: () => inject(WINDOW).location
});
var WA_NAVIGATOR = new InjectionToken("[WA_NAVIGATOR]", {
  factory: () => inject(WINDOW).navigator
});
var NAVIGATOR = WA_NAVIGATOR;
var WA_MEDIA_DEVICES = new InjectionToken("[WA_MEDIA_DEVICES]", {
  factory: () => inject(NAVIGATOR).mediaDevices
});
var WA_NETWORK_INFORMATION = new InjectionToken("[WA_NETWORK_INFORMATION]", {
  // @ts-ignore
  factory: () => inject(WA_NAVIGATOR).connection || null
});
var WA_PAGE_VISIBILITY = new InjectionToken("[WA_PAGE_VISIBILITY]", {
  factory: () => {
    const documentRef = inject(DOCUMENT);
    return fromEvent(documentRef, "visibilitychange").pipe(startWith(0), map(() => documentRef.visibilityState !== "hidden"), distinctUntilChanged(), shareReplay({
      refCount: false,
      bufferSize: 1
    }));
  }
});
var WA_PERFORMANCE = new InjectionToken("[WA_PERFORMANCE]", {
  factory: () => inject(WINDOW).performance
});
var WA_SCREEN = new InjectionToken("[WA_SCREEN]", {
  factory: () => inject(WINDOW).screen
});
var WA_SESSION_STORAGE = new InjectionToken("[WA_SESSION_STORAGE]", {
  factory: () => inject(WINDOW).sessionStorage
});
var WA_SPEECH_RECOGNITION = new InjectionToken("[WA_SPEECH_RECOGNITION]: [SPEECH_RECOGNITION]", {
  factory: () => {
    const windowRef = inject(WINDOW);
    return windowRef.speechRecognition || windowRef.webkitSpeechRecognition || null;
  }
});
var WA_SPEECH_SYNTHESIS = new InjectionToken("[WA_SPEECH_SYNTHESIS]", {
  factory: () => inject(WINDOW).speechSynthesis
});
var WA_USER_AGENT = new InjectionToken("[WA_USER_AGENT]", {
  factory: () => inject(NAVIGATOR).userAgent
});

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-tokens.mjs
var TUI_REMOVED_ELEMENT = tuiCreateTokenFromFactory(() => {
  const stub = {
    onRemovalComplete: () => {
    }
  };
  const element$ = new BehaviorSubject(null);
  const engine = inject(AnimationEngine, {
    optional: true
  }) || stub;
  const {
    onRemovalComplete = stub.onRemovalComplete
  } = engine;
  engine.onRemovalComplete = (element, context) => {
    element$.next(element);
    onRemovalComplete.call(engine, element, context);
  };
  return element$.pipe(switchMap((element) => timer(0).pipe(map(() => null), startWith(element))), share());
});
function isValidFocusout(target, removedElement = null) {
  return (
    // Not due to switching tabs/going to DevTools
    tuiGetDocumentOrShadowRoot(target).activeElement !== target && // Not due to button/input becoming disabled or under disabled fieldset
    !target.matches(":disabled") && // Not due to element being removed from DOM
    !removedElement?.contains(target) && // Not due to scrollable element became non-scrollable
    tuiIsNativeMouseFocusable(target)
  );
}
function shadowRootActiveElement(root) {
  return merge(tuiTypedFromEvent(root, "focusin").pipe(map(({
    target
  }) => target)), tuiTypedFromEvent(root, "focusout").pipe(filter(({
    target,
    relatedTarget
  }) => !!relatedTarget && isValidFocusout(target)), map(({
    relatedTarget
  }) => relatedTarget)));
}
var TUI_ACTIVE_ELEMENT = tuiCreateTokenFromFactory(() => {
  const removedElement$ = inject(TUI_REMOVED_ELEMENT);
  const win = inject(WA_WINDOW);
  const doc = inject(DOCUMENT);
  const focusout$ = tuiTypedFromEvent(win, "focusout", {
    capture: true
  });
  const focusin$ = tuiTypedFromEvent(win, "focusin", {
    capture: true
  });
  const blur$ = tuiTypedFromEvent(win, "blur");
  const mousedown$ = tuiTypedFromEvent(win, "mousedown");
  const mouseup$ = tuiTypedFromEvent(win, "mouseup");
  return merge(focusout$.pipe(takeUntil(mousedown$), repeat({
    delay: () => mouseup$
  }), withLatestFrom(removedElement$), filter(([event, removedElement]) => isValidFocusout(tuiGetActualTarget(event), removedElement)), map(([{
    relatedTarget
  }]) => relatedTarget)), blur$.pipe(map(() => doc.activeElement), filter((element) => !!element?.matches("iframe"))), focusin$.pipe(switchMap((event) => {
    const target = tuiGetActualTarget(event);
    const root = tuiGetDocumentOrShadowRoot(target);
    return root === doc ? of(target) : shadowRootActiveElement(root).pipe(startWith(target));
  })), mousedown$.pipe(switchMap((event) => {
    const actualTargetInCurrentTime = tuiGetActualTarget(event);
    return !doc.activeElement || doc.activeElement === doc.body ? of(actualTargetInCurrentTime) : focusout$.pipe(take(1), map(
      /**
       * Do not use `map(() => tuiGetActualTarget(event))`
       * because we have different result in runtime
       */
      () => actualTargetInCurrentTime
    ), takeUntil(timer(0)));
  }))).pipe(distinctUntilChanged(), share());
});
var TUI_BASE_HREF = tuiCreateTokenFromFactory(() => inject(DOCUMENT).querySelector("base")?.href ?? "");
var firstRegex = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/;
var secondRegex = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/;
var TUI_IS_MOBILE = tuiCreateTokenFromFactory(() => firstRegex.test(inject(WA_USER_AGENT).toLowerCase()) || secondRegex.test(inject(WA_USER_AGENT).slice(0, 4).toLowerCase()));
var TUI_IS_IOS = tuiCreateTokenFromFactory(() => tuiIsIos(inject(WA_NAVIGATOR)));
var TUI_IS_ANDROID = tuiCreateTokenFromFactory(() => inject(TUI_IS_MOBILE) && !inject(TUI_IS_IOS));
var TUI_IS_WEBKIT = tuiCreateTokenFromFactory(() => !!inject(WA_WINDOW)?.webkitConvertPointFromNodeToPage);
var TUI_PLATFORM = tuiCreateTokenFromFactory(() => {
  if (inject(TUI_IS_IOS)) {
    return "ios";
  }
  return inject(TUI_IS_ANDROID) ? "android" : "web";
});
var TUI_IS_TOUCH = tuiCreateTokenFromFactory(() => {
  const media = inject(WA_WINDOW).matchMedia("(pointer: coarse)");
  return toSignal(fromEvent(media, "change").pipe(map(() => media.matches)), {
    initialValue: media.matches
  });
});
var TUI_IS_CYPRESS = tuiCreateTokenFromFactory(() => !!inject(WA_WINDOW).Cypress);
var TUI_IS_PLAYWRIGHT = tuiCreateTokenFromFactory(TUI_FALSE_HANDLER);
var TUI_IS_E2E = tuiCreateTokenFromFactory(() => inject(TUI_IS_CYPRESS) || inject(TUI_IS_PLAYWRIGHT));
var TUI_FALLBACK_VALUE = tuiCreateToken(null);
function tuiFallbackValueProvider(useValue) {
  return {
    provide: TUI_FALLBACK_VALUE,
    useValue
  };
}
var TUI_RANGE = tuiCreateTokenFromFactory(() => isPlatformBrowser(inject(PLATFORM_ID)) ? new Range() : {});
var TUI_WINDOW_SIZE = new InjectionToken("[TUI_WINDOW_SIZE]", {
  factory: () => {
    const w = inject(WA_WINDOW);
    return tuiTypedFromEvent(w, "resize").pipe(startWith(null), map(() => {
      const width = Math.max(w.document.documentElement.clientWidth || 0, w.innerWidth || 0, w.visualViewport?.width || 0);
      const height = Math.max(w.document.documentElement.clientHeight || 0, w.innerHeight || 0, w.visualViewport?.height || 0);
      const rect2 = {
        width,
        height,
        top: 0,
        left: 0,
        right: width,
        bottom: height,
        x: 0,
        y: 0
      };
      return __spreadProps(__spreadValues({}, rect2), {
        toJSON: () => JSON.stringify(rect2)
      });
    }), shareReplay({
      bufferSize: 1,
      refCount: true
    }));
  }
});

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-date-time.mjs
function tuiDateClamp(date, min, max) {
  if (max && max < date) {
    return max;
  }
  if (min && min > date) {
    return min;
  }
  return date;
}
var DAYS_IN_WEEK = 7;
var DAYS_IN_NORMAL_YEAR = 365;
var DAYS_IN_LEAP_YEAR = 366;
var MONTHS_IN_YEAR = 12;
var MIN_DAY = 1;
var MIN_MONTH = 0;
var MAX_MONTH = 11;
var MIN_YEAR = 0;
var MAX_YEAR = 9999;
var RANGE_SEPARATOR_CHAR = `${CHAR_NO_BREAK_SPACE}${CHAR_EN_DASH}${CHAR_NO_BREAK_SPACE}`;
var MILLISECONDS_IN_SECOND = 1e3;
var SECONDS_IN_MINUTE = 60;
var MINUTES_IN_HOUR = 60;
var HOURS_IN_DAY = 24;
var MILLISECONDS_IN_MINUTE = MILLISECONDS_IN_SECOND * SECONDS_IN_MINUTE;
var MILLISECONDS_IN_HOUR = MILLISECONDS_IN_MINUTE * MINUTES_IN_HOUR;
var MILLISECONDS_IN_DAY = MILLISECONDS_IN_HOUR * HOURS_IN_DAY;
var DATE_FILLER_LENGTH = 10;
var DATE_RANGE_FILLER_LENGTH = 2 * DATE_FILLER_LENGTH + RANGE_SEPARATOR_CHAR.length;
var TuiDayOfWeek = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6
};
var TuiMonthNumber = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11
};
var TuiYear = class _TuiYear {
  constructor(year) {
    this.year = year;
    ngDevMode && console.assert(_TuiYear.isValidYear(year));
  }
  /**
   * Checks year for validity
   */
  static isValidYear(year) {
    return Number.isInteger(year) && tuiInRange(year, MIN_YEAR, MAX_YEAR + 1);
  }
  /**
   * Check if passed year is a leap year
   */
  static isLeapYear(year) {
    ngDevMode && console.assert(_TuiYear.isValidYear(year));
    return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
  }
  /**
   * Returns amount of leap years from year 0 to the passed one
   */
  static getAbsoluteLeapYears(year) {
    ngDevMode && console.assert(_TuiYear.isValidYear(year));
    return Math.ceil(year / 400) + (Math.ceil(year / 4) - Math.ceil(year / 100));
  }
  static lengthBetween(from, to) {
    return to.year - from.year;
  }
  /**
   * Normalizes year by clamping it between min and max years
   */
  static normalizeYearPart(year) {
    return tuiNormalizeToIntNumber(year, MIN_YEAR, MAX_YEAR);
  }
  get formattedYear() {
    return String(this.year).padStart(4, "0");
  }
  get isLeapYear() {
    return _TuiYear.isLeapYear(this.year);
  }
  /**
   * Returns amount of leap years from year 0 to current
   */
  get absoluteLeapYears() {
    return _TuiYear.getAbsoluteLeapYears(this.year);
  }
  /**
   * Passed year is after current
   */
  yearBefore({
    year
  }) {
    return this.year < year;
  }
  /**
   * Passed year is the same or after current
   */
  yearSameOrBefore({
    year
  }) {
    return this.year <= year;
  }
  /**
   * Passed year is the same as current
   */
  yearSame({
    year
  }) {
    return this.year === year;
  }
  /**
   * Passed year is either the same of before the current
   */
  yearSameOrAfter({
    year
  }) {
    return this.year >= year;
  }
  /**
   * Passed year is before current
   */
  yearAfter({
    year
  }) {
    return this.year > year;
  }
  /**
   * Immutably offsets year
   */
  append({
    year = 0
  }) {
    ngDevMode && console.assert(Number.isInteger(year));
    const resultYear = this.year + year;
    ngDevMode && console.assert(_TuiYear.isValidYear(resultYear));
    return new _TuiYear(resultYear);
  }
  toString() {
    return this.formattedYear;
  }
  valueOf() {
    return this.year;
  }
  /**
   * Returns the primitive value of the given Date object.
   * Depending on the argument, the method can return either a string or a number.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive
   */
  [Symbol.toPrimitive](hint) {
    return Date.prototype[Symbol.toPrimitive].call(this, hint);
  }
  toJSON() {
    return this.formattedYear;
  }
};
var TuiMonth = class _TuiMonth extends TuiYear {
  /**
   * @param year
   * @param month (starting with 0)
   */
  constructor(year, month) {
    super(year);
    this.month = month;
    ngDevMode && console.assert(_TuiMonth.isValidMonth(year, month));
  }
  /**
   * Tests month and year for validity
   */
  static isValidMonth(year, month) {
    return TuiYear.isValidYear(year) && _TuiMonth.isValidMonthPart(month);
  }
  /**
   * Returns number of days in a month
   */
  static getMonthDaysCount(month, isLeapYear) {
    ngDevMode && console.assert(_TuiMonth.isValidMonthPart(month));
    switch (month) {
      case TuiMonthNumber.February:
        return isLeapYear ? 29 : 28;
      case TuiMonthNumber.April:
      case TuiMonthNumber.June:
      case TuiMonthNumber.September:
      case TuiMonthNumber.November:
        return 30;
      default:
        return 31;
    }
  }
  /**
   * Returns current month and year based on local time zone
   * @nosideeffects
   */
  static currentLocal() {
    const nativeDate = /* @__PURE__ */ new Date();
    return new _TuiMonth(nativeDate.getFullYear(), nativeDate.getMonth());
  }
  /**
   * Returns current month and year based on UTC
   */
  static currentUtc() {
    const nativeDate = /* @__PURE__ */ new Date();
    return new _TuiMonth(nativeDate.getUTCFullYear(), nativeDate.getUTCMonth());
  }
  static lengthBetween(from, to) {
    const absoluteFrom = from.month + from.year * 12;
    const absoluteTo = to.month + to.year * 12;
    return absoluteTo - absoluteFrom;
  }
  /**
   * Normalizes number by clamping it between min and max month
   */
  static normalizeMonthPart(month) {
    return tuiNormalizeToIntNumber(month, MIN_MONTH, MAX_MONTH);
  }
  /**
   * Tests month for validity
   */
  static isValidMonthPart(month) {
    return Number.isInteger(month) && tuiInRange(month, MIN_MONTH, MAX_MONTH + 1);
  }
  get formattedMonthPart() {
    return String(this.month + 1).padStart(2, "0");
  }
  /**
   * Returns days in a month
   */
  get daysCount() {
    return _TuiMonth.getMonthDaysCount(this.month, this.isLeapYear);
  }
  /**
   * Passed month and year are after current
   */
  monthBefore(another) {
    return this.yearBefore(another) || this.yearSame(another) && this.month < another.month;
  }
  /**
   * Passed month and year are after or the same as current
   */
  monthSameOrBefore(another) {
    return this.yearBefore(another) || this.yearSame(another) && this.month <= another.month;
  }
  /**
   * Passed month and year are the same as current
   */
  monthSame(another) {
    return this.yearSame(another) && this.month === another.month;
  }
  /**
   * Passed month and year are either before or equal to current
   */
  monthSameOrAfter(another) {
    return this.yearAfter(another) || this.yearSame(another) && this.month >= another.month;
  }
  /**
   * Passed month and year are before current
   */
  monthAfter(another) {
    return this.yearAfter(another) || this.yearSame(another) && this.month > another.month;
  }
  /**
   * Immutably alters current month and year by passed offset
   *
   * @param offset
   * @return new month and year object as a result of offsetting current
   */
  append({
    year = 0,
    month = 0
  }) {
    const totalMonths = (this.year + year) * MONTHS_IN_YEAR + this.month + month;
    return new _TuiMonth(Math.floor(totalMonths / MONTHS_IN_YEAR), totalMonths % MONTHS_IN_YEAR);
  }
  toString() {
    return `${this.formattedMonthPart}.${this.formattedYear}`;
  }
  valueOf() {
    return this.toLocalNativeDate().valueOf();
  }
  toJSON() {
    return `${super.toJSON()}-${this.formattedMonthPart}`;
  }
  /**
   * Returns native {@link Date} based on local time zone
   */
  toLocalNativeDate() {
    return new Date(this.year, this.month);
  }
  /**
   * Returns native {@link Date} based on UTC
   */
  toUtcNativeDate() {
    return new Date(Date.UTC(this.year, this.month));
  }
};
var TuiDay = class _TuiDay extends TuiMonth {
  constructor(year, month, day) {
    super(year, month);
    this.day = day;
    ngDevMode && console.assert(_TuiDay.isValidDay(year, month, day));
  }
  /**
   * Creates {@link TuiDay} from native {@link Date} based on local time zone
   */
  static fromLocalNativeDate(date) {
    return new _TuiDay(date.getFullYear(), date.getMonth(), date.getDate());
  }
  /**
   * Creates {@link TuiDay} from native {@link Date} using UTC
   */
  static fromUtcNativeDate(date) {
    return new _TuiDay(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  }
  /**
   * Check validity of year, month and day
   *
   * @param year
   * @param month
   * @param day
   * @return boolean validity
   */
  static isValidDay(year, month, day) {
    return TuiMonth.isValidMonth(year, month) && Number.isInteger(day) && tuiInRange(day, MIN_DAY, TuiMonth.getMonthDaysCount(month, TuiYear.isLeapYear(year)) + 1);
  }
  /**
   * Current day based on local time zone
   */
  static currentLocal() {
    const nativeDate = /* @__PURE__ */ new Date();
    const year = nativeDate.getFullYear();
    const month = nativeDate.getMonth();
    const day = nativeDate.getDate();
    return new _TuiDay(year, month, day);
  }
  /**
   * Returns current day based on UTC
   */
  static currentUtc() {
    const nativeDate = /* @__PURE__ */ new Date();
    const year = nativeDate.getUTCFullYear();
    const month = nativeDate.getUTCMonth();
    const day = nativeDate.getUTCDate();
    return new _TuiDay(year, month, day);
  }
  /**
   * Calculates {@link TuiDay} normalizing year, month and day. {@link NaN} is turned into minimal value.
   *
   * @param year any year value, including invalid
   * @param month any month value, including invalid (months start with 0)
   * @param day any day value, including invalid
   * @return normalized date
   */
  static normalizeOf(year, month, day) {
    const normalizedYear = TuiYear.normalizeYearPart(year);
    const normalizedMonth = TuiMonth.normalizeMonthPart(month);
    const normalizedDay = _TuiDay.normalizeDayPart(day, normalizedMonth, normalizedYear);
    return new _TuiDay(normalizedYear, normalizedMonth, normalizedDay);
  }
  static lengthBetween(from, to) {
    return Math.round((to.toLocalNativeDate().getTime() - from.toLocalNativeDate().getTime()) / (1e3 * 60 * 60 * 24));
  }
  static parseRawDateString(date, dateMode = "DMY") {
    ngDevMode && console.assert(date.length === DATE_FILLER_LENGTH, "[parseRawDateString]: wrong date string length");
    switch (dateMode) {
      case "YMD":
        return {
          day: parseInt(date.slice(8, 10), 10),
          month: parseInt(date.slice(5, 7), 10) - 1,
          year: parseInt(date.slice(0, 4), 10)
        };
      case "MDY":
        return {
          day: parseInt(date.slice(3, 5), 10),
          month: parseInt(date.slice(0, 2), 10) - 1,
          year: parseInt(date.slice(6, 10), 10)
        };
      case "DMY":
      default:
        return {
          day: parseInt(date.slice(0, 2), 10),
          month: parseInt(date.slice(3, 5), 10) - 1,
          year: parseInt(date.slice(6, 10), 10)
        };
    }
  }
  // TODO: Move month and year related code corresponding classes
  /**
   * Parsing a string with date with normalization
   *
   * @param rawDate date string
   * @param dateMode date format of the date string (DMY | MDY | YMD)
   * @return normalized date
   */
  static normalizeParse(rawDate, dateMode = "DMY") {
    const {
      day,
      month,
      year
    } = this.parseRawDateString(rawDate, dateMode);
    return _TuiDay.normalizeOf(year, month, day);
  }
  /**
   * Parsing a date stringified in a toJSON format
   * @param yearMonthDayString date string in format of YYYY-MM-DD
   * @return date
   * @throws exceptions if any part of the date is invalid
   */
  static jsonParse(yearMonthDayString) {
    const {
      day,
      month,
      year
    } = this.parseRawDateString(yearMonthDayString, "YMD");
    if (!TuiMonth.isValidMonth(year, month) || !Number.isInteger(day) || !tuiInRange(day, MIN_DAY, TuiMonth.getMonthDaysCount(month, TuiYear.isLeapYear(year)) + 1)) {
      throw new TuiInvalidDayException(year, month, day);
    }
    return new _TuiDay(year, month, day);
  }
  static normalizeDayPart(day, month, year) {
    ngDevMode && console.assert(TuiMonth.isValidMonth(year, month));
    const monthDaysCount = TuiMonth.getMonthDaysCount(month, TuiYear.isLeapYear(year));
    return tuiNormalizeToIntNumber(day, 1, monthDaysCount);
  }
  get formattedDayPart() {
    return String(this.day).padStart(2, "0");
  }
  get isWeekend() {
    const dayOfWeek = this.dayOfWeek(false);
    return dayOfWeek === TuiDayOfWeek.Saturday || dayOfWeek === TuiDayOfWeek.Sunday;
  }
  /**
   * Returns day of week
   *
   * @param startFromMonday whether week starts from Monday and not from Sunday
   * @return day of week (from 0 to 6)
   */
  dayOfWeek(startFromMonday = true) {
    const dayOfWeek = startFromMonday ? this.toLocalNativeDate().getDay() - 1 : this.toLocalNativeDate().getDay();
    return dayOfWeek < 0 ? 6 : dayOfWeek;
  }
  /**
   * Passed date is after current
   */
  dayBefore(another) {
    return this.monthBefore(another) || this.monthSame(another) && this.day < another.day;
  }
  /**
   * Passed date is after or equals to current
   */
  daySameOrBefore(another) {
    return this.monthBefore(another) || this.monthSame(another) && this.day <= another.day;
  }
  /**
   * Passed date is the same as current
   */
  daySame(another) {
    return this.monthSame(another) && this.day === another.day;
  }
  /**
   * Passed date is either before or the same as current
   */
  daySameOrAfter(another) {
    return this.monthAfter(another) || this.monthSame(another) && this.day >= another.day;
  }
  /**
   * Passed date is before current
   */
  dayAfter(another) {
    return this.monthAfter(another) || this.monthSame(another) && this.day > another.day;
  }
  /**
   * Clamping date between two limits
   *
   * @param min
   * @param max
   * @return clamped date
   */
  dayLimit(min, max) {
    if (min !== null && this.dayBefore(min)) {
      return min;
    }
    if (max !== null && this.dayAfter(max)) {
      return max;
    }
    return this;
  }
  /**
   * Immutably alters current day by passed offset
   *
   * If resulting month has more days than original one, date is rounded to the maximum day
   * in the resulting month. Offset of days will be calculated based on the resulted year and month
   * to not interfere with parent classes methods
   *
   * @param offset
   * @return new date object as a result of offsetting current
   */
  append({
    year = 0,
    month = 0,
    day = 0
  }) {
    const totalMonths = (this.year + year) * MONTHS_IN_YEAR + this.month + month;
    let years = Math.floor(totalMonths / MONTHS_IN_YEAR);
    let months = totalMonths % MONTHS_IN_YEAR;
    let days = Math.min(this.day, TuiMonth.getMonthDaysCount(months, TuiYear.isLeapYear(years))) + day;
    while (days > TuiMonth.getMonthDaysCount(months, TuiYear.isLeapYear(years))) {
      days -= TuiMonth.getMonthDaysCount(months, TuiYear.isLeapYear(years));
      if (months === TuiMonthNumber.December) {
        years++;
        months = TuiMonthNumber.January;
      } else {
        months++;
      }
    }
    while (days < MIN_DAY) {
      if (months === TuiMonthNumber.January) {
        years--;
        months = TuiMonthNumber.December;
      } else {
        months--;
      }
      days += TuiMonth.getMonthDaysCount(months, TuiYear.isLeapYear(years));
    }
    return new _TuiDay(years, months, days);
  }
  /**
   * Returns formatted whole date
   */
  getFormattedDay(dateFormat, separator) {
    ngDevMode && console.assert(separator.length === 1, "Separator should consist of only 1 symbol");
    const dd = this.formattedDayPart;
    const mm = this.formattedMonthPart;
    const yyyy = this.formattedYear;
    switch (dateFormat) {
      case "YMD":
        return `${yyyy}${separator}${mm}${separator}${dd}`;
      case "MDY":
        return `${mm}${separator}${dd}${separator}${yyyy}`;
      case "DMY":
      default:
        return `${dd}${separator}${mm}${separator}${yyyy}`;
    }
  }
  toString(dateFormat = "DMY", separator = ".") {
    return this.getFormattedDay(dateFormat, separator);
  }
  toJSON() {
    return `${super.toJSON()}-${this.formattedDayPart}`;
  }
  /**
   * Returns native {@link Date} based on local time zone
   */
  toLocalNativeDate() {
    return new Date(this.year, this.month, this.day);
  }
  /**
   * Returns native {@link Date} based on UTC
   */
  toUtcNativeDate() {
    return new Date(Date.UTC(this.year, this.month, this.day));
  }
};
var TuiInvalidDayException = class extends Error {
  constructor(year, month, day) {
    super(ngDevMode ? `Invalid day: ${year}-${month}-${day}` : "");
  }
};
var TuiMonthRange = class _TuiMonthRange {
  constructor(from, to) {
    this.from = from;
    this.to = to;
    ngDevMode && console.assert(from.monthSameOrBefore(to));
  }
  static sort(month1, month2) {
    return month1.monthSameOrBefore(month2) ? new _TuiMonthRange(month1, month2) : new _TuiMonthRange(month2, month1);
  }
  get isSingleMonth() {
    return this.from.monthSame(this.to);
  }
  monthSame(another) {
    return this.from.monthSame(another.from) && this.to.monthSame(another.to);
  }
  toString() {
    return `${this.from}${RANGE_SEPARATOR_CHAR}${this.to}`;
  }
};
var TuiDayRange = class _TuiDayRange extends TuiMonthRange {
  constructor(from, to) {
    super(from, to);
    this.from = from;
    this.to = to;
    ngDevMode && console.assert(from.daySameOrBefore(to));
  }
  /**
   * Creates range from two days after sorting them
   *
   * @param day1
   * @param day2
   * @return new range with sorted days
   */
  static sort(day1, day2) {
    return day1.daySameOrBefore(day2) ? new _TuiDayRange(day1, day2) : new _TuiDayRange(day2, day1);
  }
  /**
   * Parse and correct a day range in string format
   *
   * @param rangeString a string of dates in a format dd.mm.yyyy - dd.mm.yyyy
   * @param dateMode {@link TuiDateMode}
   * @return normalized day range object
   */
  static normalizeParse(rangeString, dateMode = "DMY") {
    const leftDay = TuiDay.normalizeParse(rangeString.slice(0, DATE_FILLER_LENGTH), dateMode);
    if (rangeString.length < DATE_RANGE_FILLER_LENGTH) {
      return new _TuiDayRange(leftDay, leftDay);
    }
    return _TuiDayRange.sort(leftDay, TuiDay.normalizeParse(rangeString.slice(DATE_FILLER_LENGTH + RANGE_SEPARATOR_CHAR.length), dateMode));
  }
  get isSingleDay() {
    return this.from.daySame(this.to);
  }
  /**
   * Tests ranges for identity
   *
   * @param another second range to test against current
   * @return `true` if days are identical
   */
  daySame(another) {
    return this.from.daySame(another.from) && this.to.daySame(another.to);
  }
  /**
   * Locks range between two days included, or limits from one side if the other is null
   *
   * @param min
   * @param max
   * @return range — clamped range
   */
  dayLimit(min, max) {
    return new _TuiDayRange(this.from.dayLimit(min, max), this.to.dayLimit(min, max));
  }
  /**
   * Human readable format.
   */
  getFormattedDayRange(dateFormat, dateSeparator) {
    const from = this.from.getFormattedDay(dateFormat, dateSeparator);
    const to = this.to.getFormattedDay(dateFormat, dateSeparator);
    return `${from}${RANGE_SEPARATOR_CHAR}${to}`;
  }
  toString(dateFormat = "DMY", dateSeparator = ".") {
    return this.getFormattedDayRange(dateFormat, dateSeparator);
  }
};
var TUI_FIRST_DAY = new TuiDay(MIN_YEAR, MIN_MONTH, MIN_DAY);
var TUI_LAST_DAY = new TuiDay(MAX_YEAR, MAX_MONTH, 31);
var TuiTime = class _TuiTime {
  constructor(hours, minutes, seconds = 0, ms = 0) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.ms = ms;
    ngDevMode && console.assert(
      // Currently `TuiTime` could have hours more than 23
      // in order to not break current behaviour of `isValidTime` the logic is duplicated
      Number.isInteger(hours) && tuiInRange(hours, 0, Infinity) && Number.isInteger(minutes) && tuiInRange(minutes, 0, MINUTES_IN_HOUR) && Number.isInteger(seconds) && tuiInRange(seconds, 0, SECONDS_IN_MINUTE) && Number.isInteger(ms) && tuiInRange(ms, 0, 1e3),
      "Time must be real, but got:",
      hours,
      minutes,
      seconds,
      ms
    );
  }
  /**
   * Checks if time is valid
   */
  static isValidTime(hours, minutes, seconds = 0, ms = 0) {
    return Number.isInteger(hours) && tuiInRange(hours, 0, HOURS_IN_DAY) && Number.isInteger(minutes) && tuiInRange(minutes, 0, MINUTES_IN_HOUR) && Number.isInteger(seconds) && tuiInRange(seconds, 0, SECONDS_IN_MINUTE) && Number.isInteger(ms) && tuiInRange(ms, 0, 1e3);
  }
  /**
   * Current UTC time.
   */
  static current() {
    return _TuiTime.fromAbsoluteMilliseconds(Date.now() % MILLISECONDS_IN_DAY);
  }
  /**
   * Current time in local timezone
   */
  static currentLocal() {
    const date = /* @__PURE__ */ new Date();
    return _TuiTime.fromAbsoluteMilliseconds((Date.now() - date.getTimezoneOffset() * MILLISECONDS_IN_MINUTE) % MILLISECONDS_IN_DAY);
  }
  /**
   * Calculates TuiTime from milliseconds
   */
  static fromAbsoluteMilliseconds(milliseconds) {
    ngDevMode && console.assert(Number.isInteger(milliseconds));
    ngDevMode && console.assert(tuiInRange(milliseconds, 0, MILLISECONDS_IN_DAY), `Milliseconds must be below ${MILLISECONDS_IN_DAY} (milliseconds in a day).`);
    const hours = Math.floor(milliseconds / MILLISECONDS_IN_HOUR);
    const minutes = Math.floor(milliseconds % MILLISECONDS_IN_HOUR / MILLISECONDS_IN_MINUTE);
    const seconds = Math.floor(milliseconds % MILLISECONDS_IN_HOUR % MILLISECONDS_IN_MINUTE / 1e3) || 0;
    const ms = Math.floor(milliseconds % MILLISECONDS_IN_HOUR % MILLISECONDS_IN_MINUTE % 1e3) || 0;
    return new _TuiTime(hours, minutes, seconds, ms);
  }
  /**
   * Parses string into TuiTime object
   */
  static fromString(time) {
    const hours = Number(time.slice(0, 2));
    const minutes = Number(time.slice(3, 5)) || 0;
    const seconds = Number(time.slice(6, 8)) || 0;
    const ms = Number(time.slice(9, 12)) || 0;
    return new _TuiTime(hours, minutes, seconds, ms);
  }
  /**
   * Converts Date object into TuiTime
   * @param date
   */
  static fromLocalNativeDate(date) {
    return new _TuiTime(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
  }
  /**
   * Shifts time by hours and minutes
   */
  shift({
    hours = 0,
    minutes = 0,
    seconds = 0,
    ms = 0
  }) {
    const newMs = (1e3 + this.ms + ms % 1e3) % 1e3;
    const secondsInMs = ms < 0 ? Math.ceil(ms / 1e3) : Math.floor(ms / 1e3);
    const secondsToAdd = secondsInMs + seconds;
    const newSeconds = (60 + this.seconds + secondsToAdd % 60) % 60;
    const minutesInSeconds = secondsToAdd < 0 ? Math.ceil(secondsToAdd / 60) : Math.floor(secondsToAdd / 60);
    const minutesToAdd = minutesInSeconds + minutes;
    const newMinutes = (60 + this.minutes + minutesToAdd % 60) % 60;
    const hoursInMinutes = minutesToAdd < 0 ? Math.ceil(minutesToAdd / 60) : Math.floor(minutesToAdd / 60);
    const hoursToAdd = hoursInMinutes + hours;
    const newHours = (24 + this.hours + hoursToAdd % 24) % 24;
    return new _TuiTime(newHours, newMinutes, newSeconds, newMs);
  }
  /**
   * Converts TuiTime to string
   */
  toString(mode) {
    const needAddMs = mode === "HH:MM:SS.MSS" || !mode && this.ms > 0;
    const needAddSeconds = needAddMs || mode === "HH:MM:SS" || !mode && this.seconds > 0;
    const hhMm = `${this.formatTime(this.hours)}:${this.formatTime(this.minutes)}`;
    const ss = needAddSeconds ? `:${this.formatTime(this.seconds)}` : "";
    const mss = needAddMs ? `.${this.formatTime(this.ms, 3)}` : "";
    return `${hhMm}${ss}${mss}`;
  }
  valueOf() {
    return this.toAbsoluteMilliseconds();
  }
  /**
   * Returns the primitive value of the given Date object.
   * Depending on the argument, the method can return either a string or a number.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive
   */
  [Symbol.toPrimitive](hint) {
    return Date.prototype[Symbol.toPrimitive].call(this, hint);
  }
  /**
   * Converts TuiTime to milliseconds
   */
  toAbsoluteMilliseconds() {
    return this.hours * MILLISECONDS_IN_HOUR + this.minutes * MILLISECONDS_IN_MINUTE + this.seconds * 1e3 + this.ms;
  }
  formatTime(time, digits = 2) {
    return String(time).padStart(digits, "0");
  }
};

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-classes.mjs
var _c0 = ["viewContainer"];
var TuiValueTransformer = class {
};
var FLAGS = {
  self: true,
  optional: true
};
var _TuiControl = class _TuiControl {
  constructor() {
    this.fallback = inject(TUI_FALLBACK_VALUE, FLAGS);
    this.refresh$ = new Subject();
    this.pseudoInvalid = signal(null);
    this.internal = signal(this.fallback);
    this.control = inject(NgControl, {
      self: true
    });
    this.destroyRef = inject(DestroyRef);
    this.cdr = inject(ChangeDetectorRef);
    this.transformer = inject(TuiValueTransformer, FLAGS);
    this.value = computed(() => this.internal() ?? this.fallback);
    this.readOnly = signal(false);
    this.touched = signal(false);
    this.status = signal(void 0);
    this.disabled = computed(() => this.status() === "DISABLED");
    this.interactive = computed(() => !this.disabled() && !this.readOnly());
    this.invalid = computed(() => this.pseudoInvalid() !== null ? !!this.pseudoInvalid() && this.interactive() : this.interactive() && this.touched() && this.status() === "INVALID");
    this.mode = computed(() => (
      // eslint-disable-next-line no-nested-ternary
      this.readOnly() ? "readonly" : this.invalid() ? "invalid" : "valid"
    ));
    this.onTouched = EMPTY_FUNCTION;
    this.onChange = EMPTY_FUNCTION;
    this.control.valueAccessor = this;
    this.refresh$.pipe(delay(0), startWith(null), map(() => this.control.control), filter(Boolean), distinctUntilChanged(), switchMap((c) => merge(c.valueChanges, c.statusChanges)), takeUntilDestroyed(this.destroyRef)).subscribe(() => this.update());
  }
  set readOnlySetter(readOnly) {
    this.readOnly.set(readOnly);
  }
  set invalidSetter(invalid) {
    this.pseudoInvalid.set(invalid);
  }
  registerOnChange(onChange) {
    this.refresh$.next();
    this.onChange = (value) => {
      if (value === this.internal()) {
        return;
      }
      onChange(this.toControlValue(value));
      this.internal.set(value);
      this.update();
    };
  }
  registerOnTouched(onTouched) {
    this.onTouched = () => {
      onTouched();
      this.update();
    };
  }
  setDisabledState() {
    this.update();
  }
  writeValue(value) {
    const safe = this.control instanceof NgModel ? this.control.model : value;
    this.internal.set(this.fromControlValue(safe));
    this.update();
  }
  fromControlValue(value) {
    return this.transformer ? this.transformer.fromControlValue(value) : value;
  }
  toControlValue(value) {
    return this.transformer ? this.transformer.toControlValue(value) : value;
  }
  update() {
    this.status.set(this.control.control?.status);
    this.touched.set(!!this.control.control?.touched);
    this.cdr.markForCheck();
  }
};
_TuiControl.ɵfac = function TuiControl_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiControl)();
};
_TuiControl.ɵdir = ɵɵdefineDirective({
  type: _TuiControl,
  inputs: {
    readOnlySetter: [0, "readOnly", "readOnlySetter"],
    invalidSetter: [0, "invalid", "invalidSetter"]
  }
});
var TuiControl = _TuiControl;
__decorate([tuiPure], TuiControl.prototype, "fromControlValue", null);
__decorate([tuiPure], TuiControl.prototype, "toControlValue", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiControl, [{
    type: Directive
  }], function() {
    return [];
  }, {
    readOnlySetter: [{
      type: Input,
      args: ["readOnly"]
    }],
    invalidSetter: [{
      type: Input,
      args: ["invalid"]
    }],
    fromControlValue: [],
    toControlValue: []
  });
})();
function tuiAsControl(control) {
  return tuiProvide(TuiControl, control);
}
var _TuiPortals = class _TuiPortals {
  constructor() {
    this.injector = inject(INJECTOR$1);
    this.nothing = inject(TuiPortalService).attach(this);
  }
  addComponentChild(component) {
    const injector = component.createInjector(this.injector);
    const ref = this.vcr.createComponent(component.component, {
      injector
    });
    ref.changeDetectorRef.detectChanges();
    return ref;
  }
  addTemplateChild(templateRef, context) {
    return this.vcr.createEmbeddedView(templateRef, context);
  }
};
_TuiPortals.ɵfac = function TuiPortals_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiPortals)();
};
_TuiPortals.ɵdir = ɵɵdefineDirective({
  type: _TuiPortals,
  viewQuery: function TuiPortals_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5, ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.vcr = _t.first);
    }
  }
});
var TuiPortals = _TuiPortals;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPortals, [{
    type: Directive
  }], null, {
    vcr: [{
      type: ViewChild,
      args: ["viewContainer", {
        read: ViewContainerRef
      }]
    }]
  });
})();
var _TuiPortalService = class _TuiPortalService {
  attach(host) {
    this.host = host;
  }
  add(component) {
    return this.safeHost.addComponentChild(component);
  }
  remove({
    hostView
  }) {
    if (!hostView.destroyed) {
      hostView.destroy();
    }
  }
  addTemplate(templateRef, context) {
    return this.safeHost.addTemplateChild(templateRef, context);
  }
  removeTemplate(viewRef) {
    if (!viewRef.destroyed) {
      viewRef.destroy();
    }
  }
  get safeHost() {
    if (!this.host) {
      throw new TuiNoHostException();
    }
    return this.host;
  }
};
_TuiPortalService.ɵfac = function TuiPortalService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiPortalService)();
};
_TuiPortalService.ɵprov = ɵɵdefineInjectable({
  token: _TuiPortalService,
  factory: _TuiPortalService.ɵfac
});
var TuiPortalService = _TuiPortalService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPortalService, [{
    type: Injectable
  }], null, null);
})();
function tuiAsPortal(portal) {
  return tuiProvide(TuiPortalService, portal);
}
var TuiNoHostException = class extends Error {
  constructor() {
    super(ngDevMode ? "Portals cannot be used without TuiPortalHostComponent" : "");
  }
};
var TuiValidationError = class {
  constructor(message, context = {}) {
    this.message = message;
    this.context = context;
  }
};

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-active-zone.mjs
var _TuiActiveZone = class _TuiActiveZone {
  constructor() {
    this.control = inject(NgControl, {
      self: true,
      optional: true
    });
    this.active$ = inject(TUI_ACTIVE_ELEMENT);
    this.zone = inject(NgZone);
    this.el = tuiInjectElement();
    this.tuiActiveZoneParent = null;
    this.subActiveZones = [];
    this.directParentActiveZone = inject(_TuiActiveZone, {
      skipSelf: true,
      optional: true
    });
    this.tuiActiveZoneChange = this.active$.pipe(map((element) => !!element && this.contains(element)), startWith(false), distinctUntilChanged(), skip(1), tap((active) => {
      if (!active && typeof this.control?.valueAccessor.onTouched === "function") {
        this.control.valueAccessor.onTouched();
      }
    }), tuiZoneOptimized(this.zone));
    this.directParentActiveZone?.addSubActiveZone(this);
  }
  set tuiActiveZoneParentSetter(zone) {
    this.setZone(zone);
  }
  ngOnDestroy() {
    this.directParentActiveZone?.removeSubActiveZone(this);
    this.tuiActiveZoneParent?.removeSubActiveZone(this);
  }
  contains(node) {
    return this.el.contains(node) || this.subActiveZones.some((item, index, array) => array.indexOf(item) === index && item.contains(node));
  }
  setZone(zone) {
    this.tuiActiveZoneParent?.removeSubActiveZone(this);
    zone?.addSubActiveZone(this);
    this.tuiActiveZoneParent = zone;
  }
  addSubActiveZone(activeZone) {
    this.subActiveZones = [...this.subActiveZones, activeZone];
  }
  removeSubActiveZone(activeZone) {
    this.subActiveZones = tuiArrayRemove(this.subActiveZones, this.subActiveZones.indexOf(activeZone));
  }
};
_TuiActiveZone.ɵfac = function TuiActiveZone_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiActiveZone)();
};
_TuiActiveZone.ɵdir = ɵɵdefineDirective({
  type: _TuiActiveZone,
  selectors: [["", "tuiActiveZone", "", 5, "ng-container"], ["", "tuiActiveZoneChange", "", 5, "ng-container"], ["", "tuiActiveZoneParent", "", 5, "ng-container"]],
  hostBindings: function TuiActiveZone_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("mousedown.silent", function TuiActiveZone_mousedown_silent_HostBindingHandler() {
        return 0;
      }, false, ɵɵresolveDocument);
    }
  },
  inputs: {
    tuiActiveZoneParentSetter: [0, "tuiActiveZoneParent", "tuiActiveZoneParentSetter"]
  },
  outputs: {
    tuiActiveZoneChange: "tuiActiveZoneChange"
  },
  exportAs: ["tuiActiveZone"],
  standalone: true
});
var TuiActiveZone = _TuiActiveZone;
__decorate([tuiPure], TuiActiveZone.prototype, "setZone", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiActiveZone, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiActiveZone]:not(ng-container), [tuiActiveZoneChange]:not(ng-container), [tuiActiveZoneParent]:not(ng-container)",
      exportAs: "tuiActiveZone",
      host: {
        "(document:mousedown.silent)": "(0)"
      }
    }]
  }], function() {
    return [];
  }, {
    tuiActiveZoneChange: [{
      type: Output
    }],
    tuiActiveZoneParentSetter: [{
      type: Input,
      args: ["tuiActiveZoneParent"]
    }],
    setZone: []
  });
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-obscured.mjs
var _TuiObscuredService = class _TuiObscuredService extends Observable {
  constructor() {
    super((subscriber) => this.obscured$.subscribe(subscriber));
    this.el = tuiInjectElement();
    this.obscured$ = inject(WA_ANIMATION_FRAME).pipe(throttleTime(100), map(() => tuiGetElementObscures(this.el)), startWith(null), distinctUntilChanged(), tuiZoneOptimized());
  }
};
_TuiObscuredService.ɵfac = function TuiObscuredService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiObscuredService)();
};
_TuiObscuredService.ɵprov = ɵɵdefineInjectable({
  token: _TuiObscuredService,
  factory: _TuiObscuredService.ɵfac
});
var TuiObscuredService = _TuiObscuredService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiObscuredService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var _TuiObscured = class _TuiObscured {
  constructor() {
    this.activeZone = inject(TuiActiveZone, {
      optional: true
    });
    this.enabled$ = new Subject();
    this.obscured$ = inject(TuiObscuredService, {
      self: true
    }).pipe(map((by) => !!by?.every((el) => !this.activeZone?.contains(el))));
    this.tuiObscured = this.enabled$.pipe(tuiIfMap(() => this.obscured$));
  }
  set tuiObscuredEnabled(enabled) {
    this.enabled$.next(enabled);
  }
};
_TuiObscured.ɵfac = function TuiObscured_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiObscured)();
};
_TuiObscured.ɵdir = ɵɵdefineDirective({
  type: _TuiObscured,
  selectors: [["", "tuiObscured", ""]],
  inputs: {
    tuiObscuredEnabled: "tuiObscuredEnabled"
  },
  outputs: {
    tuiObscured: "tuiObscured"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([TuiObscuredService])]
});
var TuiObscured = _TuiObscured;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiObscured, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiObscured]",
      providers: [TuiObscuredService]
    }]
  }], null, {
    tuiObscured: [{
      type: Output
    }],
    tuiObscuredEnabled: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/polymorpheus/fesm2022/taiga-ui-polymorpheus.mjs
var POLYMORPHEUS_CONTEXT = new InjectionToken("");
var PolymorpheusComponent = class {
  constructor(component, i) {
    this.component = component;
    this.i = i;
  }
  createInjector(injector, useValue) {
    return Injector.create({
      parent: this.i || injector,
      providers: [{
        provide: POLYMORPHEUS_CONTEXT,
        useValue
      }]
    });
  }
};
var PolymorpheusContext = class {
  constructor($implicit) {
    this.$implicit = $implicit;
  }
  get polymorpheusOutlet() {
    return this.$implicit;
  }
};
var _PolymorpheusTemplate = class _PolymorpheusTemplate {
  constructor(template = inject(TemplateRef, {
    self: true
  }), cdr = inject(ChangeDetectorRef)) {
    this.template = template;
    this.cdr = cdr;
    this.polymorpheus = "";
  }
  static ngTemplateContextGuard(_dir, _ctx) {
    return true;
  }
  check() {
    this.cdr.markForCheck();
  }
};
_PolymorpheusTemplate.ɵfac = function PolymorpheusTemplate_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PolymorpheusTemplate)(ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(ChangeDetectorRef));
};
_PolymorpheusTemplate.ɵdir = ɵɵdefineDirective({
  type: _PolymorpheusTemplate,
  selectors: [["ng-template", "polymorpheus", ""]],
  inputs: {
    polymorpheus: "polymorpheus"
  },
  exportAs: ["polymorpheus"],
  standalone: true
});
var PolymorpheusTemplate = _PolymorpheusTemplate;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PolymorpheusTemplate, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-template[polymorpheus]",
      inputs: ["polymorpheus"],
      exportAs: "polymorpheus"
    }]
  }], function() {
    return [{
      type: TemplateRef
    }, {
      type: ChangeDetectorRef
    }];
  }, null);
})();
var _PolymorpheusOutlet = class _PolymorpheusOutlet {
  constructor() {
    this.vcr = inject(ViewContainerRef);
    this.i = inject(INJECTOR$1);
    this.t = inject(TemplateRef);
    this.content = "";
  }
  static ngTemplateContextGuard(_dir, _ctx) {
    return true;
  }
  ngOnChanges({
    content
  }) {
    const context = this.getContext();
    this.c?.injector.get(ChangeDetectorRef).markForCheck();
    if (!content) {
      return;
    }
    this.vcr.clear();
    const proxy = context && new Proxy(context, {
      get: (_, key) => this.getContext()?.[key]
    });
    if (isComponent(this.content)) {
      this.process(this.content, proxy);
    } else if (
      // eslint-disable-next-line eqeqeq
      (context instanceof PolymorpheusContext && context.$implicit) != null
    ) {
      this.vcr.createEmbeddedView(this.template, proxy, {
        injector: this.i
      });
    }
  }
  ngDoCheck() {
    if (isDirective(this.content)) {
      this.content.check();
    }
  }
  get template() {
    if (isDirective(this.content)) {
      return this.content.template;
    }
    return this.content instanceof TemplateRef ? this.content : this.t;
  }
  getContext() {
    if (isTemplate(this.content) || isComponent(this.content)) {
      return this.context;
    }
    return new PolymorpheusContext(this.context && typeof this.content === "function" ? this.content(this.context) : this.content);
  }
  process(content, proxy) {
    const injector = content.createInjector(this.i, proxy);
    this.c = this.vcr.createComponent(content.component, {
      injector
    });
  }
};
_PolymorpheusOutlet.ɵfac = function PolymorpheusOutlet_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PolymorpheusOutlet)();
};
_PolymorpheusOutlet.ɵdir = ɵɵdefineDirective({
  type: _PolymorpheusOutlet,
  selectors: [["", "polymorpheusOutlet", ""]],
  inputs: {
    content: [0, "polymorpheusOutlet", "content"],
    context: [0, "polymorpheusOutletContext", "context"]
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature]
});
var PolymorpheusOutlet = _PolymorpheusOutlet;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PolymorpheusOutlet, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[polymorpheusOutlet]"
    }]
  }], null, {
    content: [{
      type: Input,
      args: ["polymorpheusOutlet"]
    }],
    context: [{
      type: Input,
      args: ["polymorpheusOutletContext"]
    }]
  });
})();
function isDirective(content) {
  return content instanceof PolymorpheusTemplate;
}
function isComponent(content) {
  return content instanceof PolymorpheusComponent;
}
function isTemplate(content) {
  return isDirective(content) || content instanceof TemplateRef;
}

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-services.mjs
var _TuiIdService = class _TuiIdService {
  generate() {
    return `tui_${_TuiIdService.autoId++}${Date.now()}`;
  }
};
_TuiIdService.autoId = 0;
_TuiIdService.ɵfac = function TuiIdService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiIdService)();
};
_TuiIdService.ɵprov = ɵɵdefineInjectable({
  token: _TuiIdService,
  factory: _TuiIdService.ɵfac,
  providedIn: "root"
});
var TuiIdService = _TuiIdService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIdService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function tuiInjectId() {
  return inject(TuiIdService).generate();
}
var _TuiPopoverService = class _TuiPopoverService {
  constructor(items, component, options = {}) {
    this.options = options;
    this.id = inject(TuiIdService);
    this.component = new PolymorpheusComponent(component);
    this.items$ = inject(items);
  }
  open(content, options = {}) {
    return new Observable((observer) => {
      const item = __spreadProps(__spreadValues(__spreadValues({}, this.options), options), {
        content,
        $implicit: observer,
        component: this.component,
        createdAt: Date.now(),
        id: this.id.generate(),
        completeWith: (result) => {
          observer.next(result);
          observer.complete();
        }
      });
      this.items$.next([...this.items$.value, item]);
      return () => {
        this.items$.next(this.items$.value.filter((value) => value !== item));
      };
    });
  }
};
_TuiPopoverService.ɵfac = function TuiPopoverService_Factory(__ngFactoryType__) {
  ɵɵinvalidFactory();
};
_TuiPopoverService.ɵprov = ɵɵdefineInjectable({
  token: _TuiPopoverService,
  factory: _TuiPopoverService.ɵfac
});
var TuiPopoverService = _TuiPopoverService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPopoverService, [{
    type: Injectable
  }], function() {
    return [{
      type: void 0
    }, {
      type: void 0
    }, {
      type: void 0
    }];
  }, null);
})();
function tuiAsPopover(popover) {
  return tuiProvide(TuiPopoverService, popover);
}
var SCROLL_TIME = 300;
function getX(elementOrWindow) {
  return "scrollX" in elementOrWindow ? elementOrWindow.scrollX : elementOrWindow.scrollLeft;
}
function getY(elementOrWindow) {
  return "scrollY" in elementOrWindow ? elementOrWindow.scrollY : elementOrWindow.scrollTop;
}
var _TuiScrollService = class _TuiScrollService {
  constructor() {
    this.performanceRef = inject(WA_PERFORMANCE);
    this.animationFrame$ = inject(WA_ANIMATION_FRAME);
  }
  scroll$(elementOrWindow, scrollTop, scrollLeft = getX(elementOrWindow), duration = SCROLL_TIME) {
    ngDevMode && console.assert(duration >= 0, "duration cannot be negative");
    ngDevMode && console.assert(scrollTop >= 0, "scrollTop cannot be negative");
    ngDevMode && console.assert(scrollLeft >= 0, "scrollLeft cannot be negative");
    const initialTop = getY(elementOrWindow);
    const initialLeft = getX(elementOrWindow);
    const deltaTop = scrollTop - initialTop;
    const deltaLeft = scrollLeft - initialLeft;
    const observable = !duration ? of([scrollTop, scrollLeft]) : defer(() => of(this.performanceRef.now())).pipe(switchMap((start) => this.animationFrame$.pipe(map((now) => now - start))), map((elapsed) => tuiEaseInOutQuad(tuiClamp(elapsed / duration, 0, 1))), map((percent) => [initialTop + deltaTop * percent, initialLeft + deltaLeft * percent]), takeUntil(timer(duration)), endWith([scrollTop, scrollLeft]));
    return observable.pipe(tap(([scrollTop2, scrollLeft2]) => {
      elementOrWindow.scrollTo?.(scrollLeft2, scrollTop2);
    }));
  }
};
_TuiScrollService.ɵfac = function TuiScrollService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiScrollService)();
};
_TuiScrollService.ɵprov = ɵɵdefineInjectable({
  token: _TuiScrollService,
  factory: _TuiScrollService.ɵfac,
  providedIn: "root"
});
var TuiScrollService = _TuiScrollService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var TUI_THEME_COLOR = tuiCreateTokenFromFactory(() => inject(Meta).getTag('name="theme-color"')?.content ?? "");
var _TuiThemeColorService = class _TuiThemeColorService {
  constructor() {
    this.current = inject(TUI_THEME_COLOR);
    this.doc = inject(DOCUMENT);
    this.meta = inject(Meta);
  }
  get color() {
    return this.current;
  }
  set color(content) {
    this.meta.updateTag({
      name: "theme-color",
      content
    });
    this.doc.documentElement.style.setProperty("--tui-theme-color", content);
  }
};
_TuiThemeColorService.ɵfac = function TuiThemeColorService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiThemeColorService)();
};
_TuiThemeColorService.ɵprov = ɵɵdefineInjectable({
  token: _TuiThemeColorService,
  factory: _TuiThemeColorService.ɵfac,
  providedIn: "root"
});
var TuiThemeColorService = _TuiThemeColorService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiThemeColorService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-hovered.mjs
function movedOut({
  currentTarget,
  relatedTarget
}) {
  return !tuiIsElement(relatedTarget) || !tuiIsElement(currentTarget) || !currentTarget.contains(relatedTarget);
}
var _TuiHoveredService = class _TuiHoveredService extends Observable {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.el = tuiInjectElement();
    this.zone = inject(NgZone);
    this.stream$ = merge(
      tuiTypedFromEvent(this.el, "mouseenter").pipe(map(TUI_TRUE_HANDLER)),
      tuiTypedFromEvent(this.el, "mouseleave").pipe(map(TUI_FALSE_HANDLER)),
      // Hello, Safari
      tuiTypedFromEvent(this.el, "mouseout").pipe(filter(movedOut), map(TUI_FALSE_HANDLER))
    ).pipe(distinctUntilChanged(), tuiZoneOptimized(this.zone));
  }
};
_TuiHoveredService.ɵfac = function TuiHoveredService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiHoveredService)();
};
_TuiHoveredService.ɵprov = ɵɵdefineInjectable({
  token: _TuiHoveredService,
  factory: _TuiHoveredService.ɵfac
});
var TuiHoveredService = _TuiHoveredService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHoveredService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
function tuiHovered() {
  return toSignal(inject(TUI_IS_MOBILE) ? of(false) : inject(TuiHoveredService).pipe(tuiWatch(inject(ChangeDetectorRef))), {
    initialValue: false
  });
}
var _TuiHovered = class _TuiHovered {
  constructor() {
    this.tuiHoveredChange = inject(TuiHoveredService);
  }
};
_TuiHovered.ɵfac = function TuiHovered_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiHovered)();
};
_TuiHovered.ɵdir = ɵɵdefineDirective({
  type: _TuiHovered,
  selectors: [["", "tuiHoveredChange", ""]],
  outputs: {
    tuiHoveredChange: "tuiHoveredChange"
  },
  standalone: true,
  features: [ɵɵProvidersFeature([TuiHoveredService])]
});
var TuiHovered = _TuiHovered;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHovered, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiHoveredChange]",
      providers: [TuiHoveredService]
    }]
  }], null, {
    tuiHoveredChange: [{
      type: Output
    }]
  });
})();

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
var _TuiLet = class _TuiLet {
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
};
_TuiLet.ɵfac = function TuiLet_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiLet)();
};
_TuiLet.ɵdir = ɵɵdefineDirective({
  type: _TuiLet,
  selectors: [["", "tuiLet", ""]],
  inputs: {
    tuiLet: "tuiLet"
  },
  standalone: true
});
var TuiLet = _TuiLet;
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

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-pipes-mapper.mjs
var _TuiMapperPipe = class _TuiMapperPipe {
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
};
_TuiMapperPipe.ɵfac = function TuiMapperPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiMapperPipe)();
};
_TuiMapperPipe.ɵpipe = ɵɵdefinePipe({
  name: "tuiMapper",
  type: _TuiMapperPipe,
  pure: true,
  standalone: true
});
var TuiMapperPipe = _TuiMapperPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiMapperPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiMapper"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-repeat-times.mjs
var MAX_VALUE = 65536;
var TuiRepeatTimesContext = class {
  constructor($implicit) {
    this.$implicit = $implicit;
  }
};
var _TuiRepeatTimes = class _TuiRepeatTimes {
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
};
_TuiRepeatTimes.ɵfac = function TuiRepeatTimes_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiRepeatTimes)();
};
_TuiRepeatTimes.ɵdir = ɵɵdefineDirective({
  type: _TuiRepeatTimes,
  selectors: [["", "tuiRepeatTimes", "", "tuiRepeatTimesOf", ""]],
  inputs: {
    tuiRepeatTimesOf: "tuiRepeatTimesOf"
  },
  standalone: true
});
var TuiRepeatTimes = _TuiRepeatTimes;
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

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-popover.mjs
var _TuiPopoverDirective = class _TuiPopoverDirective extends PolymorpheusTemplate {
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
};
_TuiPopoverDirective.ɵfac = /* @__PURE__ */ (() => {
  let ɵTuiPopoverDirective_BaseFactory;
  return function TuiPopoverDirective_Factory(__ngFactoryType__) {
    return (ɵTuiPopoverDirective_BaseFactory || (ɵTuiPopoverDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiPopoverDirective)))(__ngFactoryType__ || _TuiPopoverDirective);
  };
})();
_TuiPopoverDirective.ɵdir = ɵɵdefineDirective({
  type: _TuiPopoverDirective,
  features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
});
var TuiPopoverDirective = _TuiPopoverDirective;
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
  takeUntilDestroyed,
  toObservable,
  toSignal,
  EMPTY_QUERY,
  EMPTY_ARRAY,
  EMPTY_FUNCTION,
  EMPTY_CLIENT_RECT,
  TUI_FALSE_HANDLER,
  TUI_TRUE_HANDLER,
  TUI_DEFAULT_MATCHER,
  TUI_STRICT_MATCHER,
  TUI_DEFAULT_IDENTITY_MATCHER,
  TUI_DIGIT_REGEXP,
  TUI_NON_DIGIT_REGEXP,
  TUI_NON_DIGITS_REGEXP,
  svgNodeFilter,
  CHAR_NO_BREAK_SPACE,
  CHAR_EN_DASH,
  CHAR_EM_DASH,
  CHAR_LAQUO,
  CHAR_RAQUO,
  CHAR_HYPHEN,
  CHAR_MINUS,
  CHAR_PLUS,
  CHAR_BULLET,
  CHAR_ELLIPSIS,
  CHAR_CURRENCY_SIGN,
  CHAR_ZERO_WIDTH_SPACE,
  TUI_USED_ICONS,
  TUI_VERSION,
  tuiClamp,
  tuiInRange,
  tuiNormalizeToIntNumber,
  tuiQuantize,
  tuiRound,
  tuiCeil,
  tuiFloor,
  tuiTrunc,
  tuiRoundWith,
  tuiSum,
  tuiToInt,
  tuiToInteger,
  tuiToRadians,
  tuiArrayRemove,
  tuiArrayShallowEquals,
  tuiArrayToggle,
  changeDateSeparator,
  tuiIsControlEmpty,
  tuiCountFilledControls,
  tuiCreateToken,
  tuiCreateTokenFromFactory,
  tuiIsString,
  tuiDefaultSort,
  tuiDirectiveBinding,
  tuiDirectiveListener,
  tuiDistanceBetweenTouches,
  tuiEaseInOutQuad,
  tuiFlatLength,
  tuiGetOriginalArrayFromQueryList,
  tuiIsFalsy,
  tuiIsNumber,
  tuiIsObject,
  tuiIsPresent,
  tuiIsValidUrl,
  tuiMarkControlAsTouchedAndValidate,
  tuiNullableSame,
  tuiProvide,
  tuiProvideOptions,
  tuiPure,
  TuiPureException,
  tuiPx,
  tuiUniqBy,
  tuiWithStyles,
  tuiControlValue,
  tuiTypedFromEvent,
  TuiDragState,
  tuiDragAndDropFrom,
  tuiPreventDefault,
  tuiStopPropagation,
  tuiIfMap,
  tuiMustBePresent,
  TuiValuePresentException,
  tuiQueryListChanges,
  tuiScrollFrom,
  tuiTakeUntilDestroyed,
  tuiWatch,
  tuiZonefull,
  tuiZonefree,
  tuiZoneOptimized,
  tuiZonefreeScheduler,
  tuiZonefullScheduler,
  WA_WINDOW,
  WINDOW,
  WA_ANIMATION_FRAME,
  WA_LOCAL_STORAGE,
  WA_NAVIGATOR,
  WA_PAGE_VISIBILITY,
  tuiIsApple,
  tuiIsEdge,
  tuiIsFirefox,
  tuiIsIos,
  tuiIsSafari,
  tuiGetGradientData,
  tuiHexToRgb,
  tuiHexToRGBA,
  tuiIsValidHex,
  tuiParseHex,
  tuiHsvToRgb,
  tuiParseColor,
  tuiParseGradient,
  tuiToGradient,
  tuiRgbToHex,
  tuiRgbToHsv,
  tuiRgbaToHex,
  tuiIsValidRgba,
  tuiContainsOrAfter,
  tuiIsInput,
  tuiIsTextarea,
  tuiIsTextfield,
  tuiIsElement,
  tuiIsHTMLElement,
  tuiIsTextNode,
  tuiIsInputEvent,
  tuiGetActualTarget,
  tuiGetClipboardDataText,
  tuiGetDocumentOrShadowRoot,
  tuiGetElementObscures,
  tuiGetElementOffset,
  tuiGetElementPoint,
  tuiGetSelectedText,
  tuiInjectElement,
  tuiIsCurrentTarget,
  tuiIsElementEditable,
  tuiIsInsideIframe,
  tuiIsNodeIn,
  tuiPointToClientRect,
  tuiRetargetedBoundaryCrossing,
  tuiGetNativeFocused,
  tuiBlurNativeFocused,
  tuiFocusedIn,
  tuiIsNativeKeyboardFocusable,
  tuiIsNativeMouseFocusable,
  tuiGetClosestFocusable,
  tuiIsNativeFocused,
  tuiIsNativeFocusedIn,
  tuiMoveFocus,
  TUI_REMOVED_ELEMENT,
  TUI_ACTIVE_ELEMENT,
  TUI_BASE_HREF,
  TUI_IS_MOBILE,
  TUI_IS_IOS,
  TUI_IS_ANDROID,
  TUI_IS_WEBKIT,
  TUI_PLATFORM,
  TUI_IS_TOUCH,
  TUI_IS_CYPRESS,
  TUI_IS_PLAYWRIGHT,
  TUI_IS_E2E,
  TUI_FALLBACK_VALUE,
  tuiFallbackValueProvider,
  TUI_RANGE,
  TUI_WINDOW_SIZE,
  POLYMORPHEUS_CONTEXT,
  PolymorpheusComponent,
  PolymorpheusTemplate,
  PolymorpheusOutlet,
  tuiDateClamp,
  DAYS_IN_WEEK,
  DAYS_IN_NORMAL_YEAR,
  DAYS_IN_LEAP_YEAR,
  MONTHS_IN_YEAR,
  MIN_DAY,
  MIN_MONTH,
  MAX_MONTH,
  MIN_YEAR,
  MAX_YEAR,
  RANGE_SEPARATOR_CHAR,
  MILLISECONDS_IN_SECOND,
  SECONDS_IN_MINUTE,
  MINUTES_IN_HOUR,
  HOURS_IN_DAY,
  MILLISECONDS_IN_MINUTE,
  MILLISECONDS_IN_HOUR,
  MILLISECONDS_IN_DAY,
  DATE_FILLER_LENGTH,
  DATE_RANGE_FILLER_LENGTH,
  TuiDayOfWeek,
  TuiMonthNumber,
  TuiYear,
  TuiMonth,
  TuiDay,
  TuiInvalidDayException,
  TuiMonthRange,
  TuiDayRange,
  TUI_FIRST_DAY,
  TUI_LAST_DAY,
  TuiTime,
  TuiValueTransformer,
  TuiControl,
  tuiAsControl,
  TuiPortals,
  TuiPortalService,
  tuiAsPortal,
  TuiNoHostException,
  TuiValidationError,
  TuiActiveZone,
  TuiObscuredService,
  TuiObscured,
  TuiIdService,
  tuiInjectId,
  TuiPopoverService,
  tuiAsPopover,
  TuiScrollService,
  TUI_THEME_COLOR,
  TuiThemeColorService,
  TuiHoveredService,
  tuiHovered,
  TuiHovered,
  TuiLetContext,
  TuiLet,
  TuiMapperPipe,
  TuiRepeatTimesContext,
  TuiRepeatTimes,
  coerceBooleanProperty,
  coerceNumberProperty,
  coerceArray,
  coerceElement,
  TuiPopoverDirective
};
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v18.2.3
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-IDV3SLH5.js.map
