import {
  MASKITO_DEFAULT_ELEMENT_PREDICATE,
  MASKITO_DEFAULT_OPTIONS,
  Maskito,
  TUI_CALENDAR_DATE_STREAM,
  TUI_OTHER_DATE_TEXT,
  maskitoTransform
} from "./chunk-3MKKWUQW.js";
import {
  TuiCalendar
} from "./chunk-OO7PCSEA.js";
import {
  TUI_COMMON_ICONS,
  TuiDataList,
  TuiDataListComponent,
  TuiIcon,
  TuiOption
} from "./chunk-DEGDS5ZQ.js";
import {
  TuiMapperPipe
} from "./chunk-UZPV3B5J.js";
import {
  HOURS_IN_DAY,
  TUI_FALSE_HANDLER,
  TUI_FIRST_DAY,
  TUI_LAST_DAY,
  TuiDay,
  TuiDayRange,
  TuiMonth,
  TuiTime,
  takeUntilDestroyed,
  tuiDirectiveBinding,
  tuiIsString,
  tuiNullableSame,
  tuiPure,
  tuiWatch
} from "./chunk-P4W6PLEC.js";
import {
  DefaultValueAccessor
} from "./chunk-HDXU2QND.js";
import {
  AsyncPipe,
  NgForOf,
  NgIf
} from "./chunk-VFDX42D3.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  Output,
  Pipe,
  inject,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind3,
  ɵɵpipeBindV,
  ɵɵproperty,
  ɵɵpureFunction4,
  ɵɵpureFunction6,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-GJNOSL6X.js";
import {
  __decorate
} from "./chunk-YX5744VY.js";
import {
  __async
} from "./chunk-QHQP2P2Z.js";

// node_modules/@maskito/angular/fesm2022/maskito-angular.mjs
var MaskitoDirective = class _MaskitoDirective {
  constructor() {
    this.elementRef = inject(ElementRef).nativeElement;
    this.ngZone = inject(NgZone);
    this.maskedElement = null;
    this.options = null;
    this.elementPredicate = MASKITO_DEFAULT_ELEMENT_PREDICATE;
    const accessor = inject(DefaultValueAccessor, {
      self: true,
      optional: true
    });
    if (accessor) {
      const original = accessor.writeValue.bind(accessor);
      accessor.writeValue = (value) => {
        original(this.options ? maskitoTransform(String(value ?? ""), this.options) : value);
      };
    }
  }
  ngOnChanges() {
    return __async(this, null, function* () {
      const {
        elementPredicate,
        options,
        maskedElement,
        elementRef,
        ngZone
      } = this;
      maskedElement?.destroy();
      if (!options) {
        return;
      }
      const predicateResult = yield elementPredicate(elementRef);
      if (this.elementPredicate !== elementPredicate || this.options !== options) {
        return;
      }
      ngZone.runOutsideAngular(() => {
        this.maskedElement = new Maskito(predicateResult, options);
      });
    });
  }
  ngOnDestroy() {
    this.maskedElement?.destroy();
  }
  static {
    this.ɵfac = function MaskitoDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MaskitoDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _MaskitoDirective,
      selectors: [["", "maskito", ""]],
      inputs: {
        options: [0, "maskito", "options"],
        elementPredicate: [0, "maskitoElement", "elementPredicate"]
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaskitoDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[maskito]"
    }]
  }], function() {
    return [];
  }, {
    options: [{
      type: Input,
      args: ["maskito"]
    }],
    elementPredicate: [{
      type: Input,
      args: ["maskitoElement"]
    }]
  });
})();
var MaskitoPipe = class _MaskitoPipe {
  transform(value, maskitoOptions) {
    return maskitoTransform(String(value ?? ""), maskitoOptions ?? MASKITO_DEFAULT_OPTIONS);
  }
  static {
    this.ɵfac = function MaskitoPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MaskitoPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "maskito",
      type: _MaskitoPipe,
      pure: true,
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaskitoPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "maskito"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-utils.mjs
function tuiCreateTimePeriods(minHour = 0, maxHour = HOURS_IN_DAY, minutes = [0, 30]) {
  const timeArray = [];
  for (let i = minHour; i < maxHour; i++) {
    minutes.forEach((minute) => {
      const time = new TuiTime(i, minute);
      timeArray.push(time);
    });
  }
  return timeArray;
}
function tuiIsFlat(items) {
  return !Array.isArray(items[0]);
}
function tuiMaskito(options) {
  return tuiDirectiveBinding(MaskitoDirective, "options", options);
}
function tuiToggleDay(days, day) {
  return (days?.find((item) => item.daySame(day)) ? days.filter((item) => !item.daySame(day)) : days?.concat(day)) || [];
}

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-calendar-range.mjs
var _c0 = (a0, a1, a2, a3) => [a0, a1, a2, a3, false];
var _c1 = (a0, a1, a2, a3) => [a0, a1, a2, a3, true];
var _c2 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
function TuiCalendarRange_tui_calendar_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-calendar", 3);
    ɵɵpipe(1, "tuiMapper");
    ɵɵpipe(2, "tuiMapper");
    ɵɵpipe(3, "tuiMapper");
    ɵɵpipe(4, "tuiMapper");
    ɵɵtwoWayListener("hoveredItemChange", function TuiCalendarRange_tui_calendar_4_Template_tui_calendar_hoveredItemChange_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r2.hoveredItem, $event) || (ctx_r2.hoveredItem = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("dayClick", function TuiCalendarRange_tui_calendar_4_Template_tui_calendar_dayClick_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onDayClick($event));
    })("monthChange", function TuiCalendarRange_tui_calendar_4_Template_tui_calendar_monthChange_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onMonthChange($event.append({
        month: -1
      })));
    })("mousedown.prevent.silent", function TuiCalendarRange_tui_calendar_4_Template_tui_calendar_mousedown_prevent_silent_0_listener() {
      ɵɵrestoreView(_r2);
      return ɵɵresetView(0);
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("disabledItemHandler", ctx_r2.calculatedDisabledItemHandler)("markerHandler", ctx_r2.markerHandler)("max", ɵɵpipeBindV(1, 9, ɵɵpureFunction4(29, _c0, ctx_r2.max, ctx_r2.capsMapper, ctx_r2.value, ctx_r2.maxLength)))("min", ɵɵpipeBindV(2, 15, ɵɵpureFunction4(34, _c1, ctx_r2.min, ctx_r2.capsMapper, ctx_r2.value, ctx_r2.maxLength)))("minViewedMonth", ɵɵpipeBind3(3, 21, ctx_r2.defaultViewedMonth, ctx_r2.monthOffset, 1))("month", ɵɵpipeBind3(4, 25, ctx_r2.defaultViewedMonth, ctx_r2.monthOffset, 1))("showAdjacent", false)("value", ctx_r2.value);
    ɵɵtwoWayProperty("hoveredItem", ctx_r2.hoveredItem);
  }
}
function TuiCalendarRange_ng_template_5_button_1_tui_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-icon", 8);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵstyleProp("font-size", 1, "rem");
    ɵɵproperty("icon", ctx_r2.icons.check);
  }
}
function TuiCalendarRange_ng_template_5_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 6);
    ɵɵlistener("click", function TuiCalendarRange_ng_template_5_button_1_Template_button_click_0_listener() {
      const item_r5 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onItemSelect(item_r5));
    })("mousedown.prevent.silent", function TuiCalendarRange_ng_template_5_button_1_Template_button_mousedown_prevent_silent_0_listener() {
      ɵɵrestoreView(_r4);
      return ɵɵresetView(0);
    });
    ɵɵtext(1);
    ɵɵtemplate(2, TuiCalendarRange_ng_template_5_button_1_tui_icon_2_Template, 1, 3, "tui-icon", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵattribute("aria-checked", ctx_r2.isItemActive(item_r5));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", item_r5, " ");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isItemActive(item_r5));
  }
}
function TuiCalendarRange_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tui-data-list", 4);
    ɵɵtemplate(1, TuiCalendarRange_ng_template_5_button_1_Template, 3, 3, "button", 5);
    ɵɵpipe(2, "async");
    ɵɵpipe(3, "tuiMapper");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵstyleProp("flex", 1);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ɵɵpipeBindV(3, 5, ɵɵpureFunction6(12, _c2, ctx_r2.items, ctx_r2.mapper, ctx_r2.min, ctx_r2.max, ctx_r2.minLength, ɵɵpipeBind1(2, 3, ctx_r2.otherDateText$))));
  }
}
var calculateDisabledItemHandler = (disabledItemHandler, value, minLength) => (item) => {
  if (!value?.isSingleDay || !minLength) {
    return disabledItemHandler(item);
  }
  const negativeMinLength = Object.fromEntries(Object.entries(minLength).map(([key, value2]) => [key, -value2]));
  const disabledBefore = value.from.append(negativeMinLength).append({
    day: 1
  });
  const disabledAfter = value.from.append(minLength).append({
    day: -1
  });
  const inDisabledRange = disabledBefore.dayBefore(item) && disabledAfter.dayAfter(item);
  return inDisabledRange || disabledItemHandler(item);
};
var TUI_DAY_CAPS_MAPPER = (current, value, maxLength, backwards) => {
  if (!value?.isSingleDay || !maxLength) {
    return backwards ? current || TUI_FIRST_DAY : current || TUI_LAST_DAY;
  }
  const negativeMaxLength = Object.fromEntries(Object.entries(maxLength).map(([key, value2]) => [key, -value2]));
  const dateShift = value.from.append(backwards ? negativeMaxLength : maxLength).append({
    day: !backwards ? -1 : 1
  });
  if (backwards) {
    return dateShift.dayBefore(current || TUI_FIRST_DAY) ? current || TUI_FIRST_DAY : dateShift;
  }
  if (!current) {
    return dateShift;
  }
  return dateShift.dayAfter(current) ? current : dateShift;
};
var TuiCalendarRange = class _TuiCalendarRange {
  constructor() {
    this.selectedPeriod = null;
    this.otherDateText$ = inject(TUI_OTHER_DATE_TEXT);
    this.icons = inject(TUI_COMMON_ICONS);
    this.previousValue = null;
    this.hoveredItem = null;
    this.capsMapper = TUI_DAY_CAPS_MAPPER;
    this.defaultViewedMonth = TuiMonth.currentLocal();
    this.disabledItemHandler = TUI_FALSE_HANDLER;
    this.markerHandler = null;
    this.items = [];
    this.min = TUI_FIRST_DAY;
    this.max = TUI_LAST_DAY;
    this.minLength = null;
    this.maxLength = null;
    this.value = null;
    this.item = null;
    this.valueChange = new EventEmitter();
    this.itemChange = new EventEmitter();
    this.monthOffset = (value, month) => value.append({
      month
    });
    this.mapper = (items, min, max, minLength, otherDateText) => [...items.filter((item) => (minLength === null || item.range.from.append(minLength).daySameOrBefore(item.range.to)) && (min === null || item.range.to.daySameOrAfter(min)) && (max === null || item.range.from.daySameOrBefore(max))), otherDateText || ""];
    inject(TUI_CALENDAR_DATE_STREAM, {
      optional: true
    })?.pipe(tuiWatch(inject(ChangeDetectorRef)), takeUntilDestroyed()).subscribe((value) => {
      this.value = value;
      this.initDefaultViewedMonth();
    });
  }
  /**
   * @deprecated use `item`
   */
  get selectedActivePeriod() {
    return this.selectedPeriod;
  }
  /**
   * @deprecated use `item`
   */
  set selectedActivePeriod(period) {
    this.selectedPeriod = period;
  }
  ngOnChanges() {
    this.initDefaultViewedMonth();
  }
  ngOnInit() {
    this.initDefaultViewedMonth();
  }
  get calculatedDisabledItemHandler() {
    return this.calculateDisabledItemHandler(this.disabledItemHandler, this.value, this.minLength);
  }
  onEsc(event) {
    if (event.key !== "Escape" || !this.value?.isSingleDay) {
      return;
    }
    event.stopPropagation();
    this.value = this.previousValue;
  }
  isItemActive(item) {
    const {
      activePeriod
    } = this;
    return tuiIsString(item) && activePeriod === null || activePeriod === item || activePeriod?.toString() === item.toString();
  }
  onItemSelect(item) {
    if (!tuiIsString(item)) {
      this.selectedActivePeriod = item;
      this.updateValue(item.range.dayLimit(this.min, this.max));
      this.itemChange.emit(item);
    } else if (this.activePeriod !== null) {
      this.selectedActivePeriod = null;
      this.updateValue(null);
      this.itemChange.emit(null);
    }
    this.initDefaultViewedMonth();
  }
  onMonthChange(month) {
    this.defaultViewedMonth = month;
  }
  onDayClick(day) {
    this.previousValue = this.value;
    this.selectedActivePeriod = null;
    if (!this.value?.isSingleDay) {
      this.value = new TuiDayRange(day, day);
      this.itemChange.emit(this.findItemByDayRange(this.value));
    } else {
      const sortedDayRange = TuiDayRange.sort(this.value.from, day);
      this.updateValue(sortedDayRange);
      this.itemChange.emit(this.findItemByDayRange(sortedDayRange));
    }
  }
  updateValue(value) {
    this.value = value;
    this.valueChange.emit(value);
  }
  get activePeriod() {
    return this.item ?? this.selectedActivePeriod ?? (this.items.find((item) => tuiNullableSame(this.value, item.range, (a, b) => a.from.daySame(b.from.dayLimit(this.min, this.max)) && a.to.daySame(b.to.dayLimit(this.min, this.max)))) || null);
  }
  calculateDisabledItemHandler(disabledItemHandler, value, minLength) {
    return calculateDisabledItemHandler(disabledItemHandler, value, minLength);
  }
  initDefaultViewedMonth() {
    if (this.value) {
      this.defaultViewedMonth = this.items.length ? this.value.to : this.value.from;
    } else if (this.max && this.defaultViewedMonth.monthSameOrAfter(this.max)) {
      this.defaultViewedMonth = this.items.length ? this.max : this.max.append({
        month: -1
      });
    } else if (this.min && this.defaultViewedMonth.monthSameOrBefore(this.min)) {
      this.defaultViewedMonth = this.min;
    }
  }
  findItemByDayRange(dayRange) {
    return this.items.find((item) => dayRange.daySame(item.range)) ?? null;
  }
  static {
    this.ɵfac = function TuiCalendarRange_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCalendarRange)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiCalendarRange,
      selectors: [["tui-calendar-range"]],
      hostBindings: function TuiCalendarRange_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("keydown.capture", function TuiCalendarRange_keydown_capture_HostBindingHandler($event) {
            return ctx.onEsc($event);
          }, false, ɵɵresolveDocument);
        }
      },
      inputs: {
        defaultViewedMonth: "defaultViewedMonth",
        disabledItemHandler: "disabledItemHandler",
        markerHandler: "markerHandler",
        items: "items",
        min: "min",
        max: "max",
        minLength: "minLength",
        maxLength: "maxLength",
        value: "value",
        item: "item"
      },
      outputs: {
        valueChange: "valueChange",
        itemChange: "itemChange"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      decls: 7,
      vars: 37,
      consts: [["presets", ""], ["automation-id", "tui-calendar-range__calendar", 1, "t-calendar", 3, "hoveredItemChange", "dayClick", "monthChange", "mousedown.prevent.silent", "disabledItemHandler", "markerHandler", "max", "maxViewedMonth", "min", "month", "showAdjacent", "value", "hoveredItem"], [3, "disabledItemHandler", "markerHandler", "max", "min", "minViewedMonth", "month", "showAdjacent", "value", "hoveredItem", "hoveredItemChange", "dayClick", "monthChange", "mousedown.prevent.silent", 4, "ngIf", "ngIfElse"], [3, "hoveredItemChange", "dayClick", "monthChange", "mousedown.prevent.silent", "disabledItemHandler", "markerHandler", "max", "min", "minViewedMonth", "month", "showAdjacent", "value", "hoveredItem"], ["automation-id", "tui-calendar-range__menu", "role", "menu"], ["automation-id", "tui-calendar-range__menu__item", "role", "menuitemradio", "tuiOption", "", "type", "button", 3, "click", "mousedown.prevent.silent", 4, "ngFor", "ngForOf"], ["automation-id", "tui-calendar-range__menu__item", "role", "menuitemradio", "tuiOption", "", "type", "button", 3, "click", "mousedown.prevent.silent"], ["automation-id", "tui-calendar-range__checkmark", 3, "icon", "font-size", 4, "ngIf"], ["automation-id", "tui-calendar-range__checkmark", 3, "icon"]],
      template: function TuiCalendarRange_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "tui-calendar", 1);
          ɵɵpipe(1, "tuiMapper");
          ɵɵpipe(2, "tuiMapper");
          ɵɵpipe(3, "tuiMapper");
          ɵɵtwoWayListener("hoveredItemChange", function TuiCalendarRange_Template_tui_calendar_hoveredItemChange_0_listener($event) {
            ɵɵrestoreView(_r1);
            ɵɵtwoWayBindingSet(ctx.hoveredItem, $event) || (ctx.hoveredItem = $event);
            return ɵɵresetView($event);
          });
          ɵɵlistener("dayClick", function TuiCalendarRange_Template_tui_calendar_dayClick_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onDayClick($event));
          })("monthChange", function TuiCalendarRange_Template_tui_calendar_monthChange_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onMonthChange($event));
          })("mousedown.prevent.silent", function TuiCalendarRange_Template_tui_calendar_mousedown_prevent_silent_0_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(0);
          });
          ɵɵelementEnd();
          ɵɵtemplate(4, TuiCalendarRange_tui_calendar_4_Template, 5, 39, "tui-calendar", 2)(5, TuiCalendarRange_ng_template_5_Template, 4, 19, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const presets_r6 = ɵɵreference(6);
          ɵɵproperty("disabledItemHandler", ctx.calculatedDisabledItemHandler)("markerHandler", ctx.markerHandler)("max", ɵɵpipeBindV(1, 11, ɵɵpureFunction4(27, _c0, ctx.max, ctx.capsMapper, ctx.value, ctx.maxLength)))("maxViewedMonth", ctx.items.length ? null : ɵɵpipeBind3(2, 17, ctx.defaultViewedMonth, ctx.monthOffset, -1))("min", ɵɵpipeBindV(3, 21, ɵɵpureFunction4(32, _c1, ctx.min, ctx.capsMapper, ctx.value, ctx.maxLength)))("month", ctx.defaultViewedMonth)("showAdjacent", !!ctx.items.length)("value", ctx.value);
          ɵɵtwoWayProperty("hoveredItem", ctx.hoveredItem);
          ɵɵadvance(4);
          ɵɵproperty("ngIf", !ctx.items.length)("ngIfElse", presets_r6);
        }
      },
      dependencies: [AsyncPipe, NgForOf, NgIf, TuiCalendar, TuiDataListComponent, TuiOption, TuiIcon, TuiMapperPipe],
      styles: ["[_nghost-%COMP%]{display:flex;min-inline-size:30rem}.t-calendar[_ngcontent-%COMP%]{border-inline-end:1px solid var(--tui-border-normal)}"],
      changeDetection: 0
    });
  }
};
__decorate([tuiPure], TuiCalendarRange.prototype, "calculateDisabledItemHandler", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCalendarRange, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-calendar-range",
      imports: [AsyncPipe, NgForOf, NgIf, TuiCalendar, TuiDataList, TuiIcon, TuiMapperPipe],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "(document:keydown.capture)": "onEsc($event)"
      },
      template: '<tui-calendar\n    automation-id="tui-calendar-range__calendar"\n    class="t-calendar"\n    [disabledItemHandler]="calculatedDisabledItemHandler"\n    [markerHandler]="markerHandler"\n    [max]="max | tuiMapper: capsMapper : value : maxLength : false"\n    [maxViewedMonth]="items.length ? null : (defaultViewedMonth | tuiMapper: monthOffset : -1)"\n    [min]="min | tuiMapper: capsMapper : value : maxLength : true"\n    [month]="defaultViewedMonth"\n    [showAdjacent]="!!items.length"\n    [value]="value"\n    [(hoveredItem)]="hoveredItem"\n    (dayClick)="onDayClick($event)"\n    (monthChange)="onMonthChange($event)"\n    (mousedown.prevent.silent)="(0)"\n/>\n<tui-calendar\n    *ngIf="!items.length; else presets"\n    [disabledItemHandler]="calculatedDisabledItemHandler"\n    [markerHandler]="markerHandler"\n    [max]="max | tuiMapper: capsMapper : value : maxLength : false"\n    [min]="min | tuiMapper: capsMapper : value : maxLength : true"\n    [minViewedMonth]="defaultViewedMonth | tuiMapper: monthOffset : 1"\n    [month]="defaultViewedMonth | tuiMapper: monthOffset : 1"\n    [showAdjacent]="false"\n    [value]="value"\n    [(hoveredItem)]="hoveredItem"\n    (dayClick)="onDayClick($event)"\n    (monthChange)="onMonthChange($event.append({month: -1}))"\n    (mousedown.prevent.silent)="(0)"\n/>\n<ng-template #presets>\n    <tui-data-list\n        automation-id="tui-calendar-range__menu"\n        role="menu"\n        [style.flex]="1"\n    >\n        <button\n            *ngFor="let item of items | tuiMapper: mapper : min : max : minLength : (otherDateText$ | async)"\n            automation-id="tui-calendar-range__menu__item"\n            role="menuitemradio"\n            tuiOption\n            type="button"\n            [attr.aria-checked]="isItemActive(item)"\n            (click)="onItemSelect(item)"\n            (mousedown.prevent.silent)="(0)"\n        >\n            {{ item }}\n            <tui-icon\n                *ngIf="isItemActive(item)"\n                automation-id="tui-calendar-range__checkmark"\n                [icon]="icons.check"\n                [style.font-size.rem]="1"\n            />\n        </button>\n    </tui-data-list>\n</ng-template>\n',
      styles: [":host{display:flex;min-inline-size:30rem}.t-calendar{border-inline-end:1px solid var(--tui-border-normal)}\n"]
    }]
  }], function() {
    return [];
  }, {
    defaultViewedMonth: [{
      type: Input
    }],
    disabledItemHandler: [{
      type: Input
    }],
    markerHandler: [{
      type: Input
    }],
    items: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    minLength: [{
      type: Input
    }],
    maxLength: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    item: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    itemChange: [{
      type: Output
    }],
    calculateDisabledItemHandler: []
  });
})();
var TuiDayRangePeriod = class {
  constructor(range, name, content) {
    this.range = range;
    this.name = name;
    this.content = content;
  }
  toString() {
    return this.name;
  }
};
function tuiCreateDefaultDayRangePeriods(periodTitles = ["For all the time", "Today", "Yesterday", "Current week", "Current month", "Previous month"]) {
  const today = TuiDay.currentLocal();
  const yesterday = today.append({
    day: -1
  });
  const startOfWeek = today.append({
    day: -today.dayOfWeek()
  });
  const endOfWeek = startOfWeek.append({
    day: 6
  });
  const startOfMonth = today.append({
    day: 1 - today.day
  });
  const endOfMonth = startOfMonth.append({
    month: 1,
    day: -1
  });
  const startOfLastMonth = startOfMonth.append({
    month: -1
  });
  return [new TuiDayRangePeriod(new TuiDayRange(TUI_FIRST_DAY, today), periodTitles[0]), new TuiDayRangePeriod(new TuiDayRange(today, today), periodTitles[1]), new TuiDayRangePeriod(new TuiDayRange(yesterday, yesterday), periodTitles[2]), new TuiDayRangePeriod(new TuiDayRange(startOfWeek, endOfWeek), periodTitles[3]), new TuiDayRangePeriod(new TuiDayRange(startOfMonth, endOfMonth), periodTitles[4]), new TuiDayRangePeriod(new TuiDayRange(startOfLastMonth, startOfMonth.append({
    day: -1
  })), periodTitles[5])];
}

export {
  MaskitoDirective,
  tuiCreateTimePeriods,
  tuiIsFlat,
  tuiMaskito,
  tuiToggleDay,
  calculateDisabledItemHandler,
  TUI_DAY_CAPS_MAPPER,
  TuiCalendarRange,
  TuiDayRangePeriod,
  tuiCreateDefaultDayRangePeriods
};
//# sourceMappingURL=chunk-CEFF3TEZ.js.map
