import {
  TUI_COMMON_ICONS,
  TUI_DROPDOWN_COMPONENT,
  TuiCalendar,
  TuiDataList,
  TuiDataListComponent,
  TuiIcon,
  TuiOption,
  tuiExtractI18n
} from "./chunk-M7KV4JTE.js";
import {
  HOURS_IN_DAY,
  TUI_DEFAULT_IDENTITY_MATCHER,
  TUI_FALSE_HANDLER,
  TUI_FIRST_DAY,
  TUI_IS_MOBILE,
  TUI_LAST_DAY,
  TuiDay,
  TuiDayRange,
  TuiMapperPipe,
  TuiMonth,
  TuiTime,
  takeUntilDestroyed,
  tuiControlValue,
  tuiCreateToken,
  tuiCreateTokenFromFactory,
  tuiDirectiveBinding,
  tuiIsString,
  tuiNullableSame,
  tuiProvideOptions,
  tuiPure,
  tuiWatch
} from "./chunk-IDV3SLH5.js";
import {
  DefaultValueAccessor,
  NgControl
} from "./chunk-A6CXCBMF.js";
import {
  AsyncPipe,
  NgForOf,
  NgIf
} from "./chunk-ET6A4XZJ.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  InjectionToken,
  Input,
  NgZone,
  Optional,
  Output,
  Pipe,
  Self,
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
} from "./chunk-TMZGPDKF.js";
import {
  __async,
  __decorate,
  map,
  of
} from "./chunk-NUC4GERA.js";

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-tokens.mjs
var TUI_CALENDAR_DATE_STREAM = new InjectionToken("[TUI_CALENDAR_DATE_STREAM]");
function tuiDateStreamWithTransformer(transformer) {
  return {
    provide: TUI_CALENDAR_DATE_STREAM,
    deps: [[new Optional(), new Self(), NgControl], [new Optional(), transformer]],
    useFactory: tuiControlValueFactory
  };
}
function tuiControlValueFactory(control, transformer) {
  return control ? tuiControlValue(control).pipe(map((value) => transformer ? transformer?.fromControlValue(value) : value)) : of(null);
}
var TUI_DATE_VALUE_TRANSFORMER = new InjectionToken("[TUI_DATE_VALUE_TRANSFORMER]");
var TUI_DATE_RANGE_VALUE_TRANSFORMER = new InjectionToken("[TUI_DATE_RANGE_VALUE_TRANSFORMER]");
var TUI_DATE_TIME_VALUE_TRANSFORMER = new InjectionToken("[TUI_DATE_TIME_VALUE_TRANSFORMER]");
var TUI_TIME_VALUE_TRANSFORMER = new InjectionToken("[TUI_TIME_VALUE_TRANSFORMER]");
var TUI_CONFIRM_WORDS = tuiCreateTokenFromFactory(tuiExtractI18n("confirm"));
var TUI_CANCEL_WORD = tuiCreateTokenFromFactory(tuiExtractI18n("cancel"));
var TUI_DONE_WORD = tuiCreateTokenFromFactory(tuiExtractI18n("done"));
var TUI_MORE_WORD = tuiCreateTokenFromFactory(tuiExtractI18n("more"));
var TUI_HIDE_TEXT = tuiCreateTokenFromFactory(tuiExtractI18n("hide"));
var TUI_SHOW_ALL_TEXT = tuiCreateTokenFromFactory(tuiExtractI18n("showAll"));
var TUI_OTHER_DATE_TEXT = tuiCreateTokenFromFactory(tuiExtractI18n("otherDate"));
var TUI_CHOOSE_DAY_OR_RANGE_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("mobileCalendarTexts"));
var TUI_FROM_TO_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("range"));
var TUI_PLUS_MINUS_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("countTexts"));
var TUI_TIME_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("time"));
var TUI_DATE_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("dateTexts"));
var TUI_DIGITAL_INFORMATION_UNITS = tuiCreateTokenFromFactory(tuiExtractI18n("digitalInformationUnits"));
var TUI_COPY_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("copyTexts"));
var TUI_PASSWORD_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("passwordTexts"));
var TUI_CALENDAR_MONTHS = tuiCreateTokenFromFactory(tuiExtractI18n("shortCalendarMonths"));
var TUI_FILE_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("fileTexts"));
var TUI_PAGINATION_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("pagination"));
var TUI_INPUT_FILE_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("inputFileTexts"));
var TUI_MULTI_SELECT_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("multiSelectTexts"));
var TUI_COUNTRIES = tuiCreateTokenFromFactory(tuiExtractI18n("countries"));
var TUI_PREVIEW_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("previewTexts"));
var TUI_PREVIEW_ZOOM_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("zoomTexts"));
var TUI_INPUT_DATE_DEFAULT_OPTIONS = {
  icon: () => "@tui.calendar",
  min: TUI_FIRST_DAY,
  max: TUI_LAST_DAY,
  nativePicker: false
};
var TUI_INPUT_DATE_OPTIONS = tuiCreateToken(TUI_INPUT_DATE_DEFAULT_OPTIONS);
function tuiInputDateOptionsProvider(options) {
  return tuiProvideOptions(TUI_INPUT_DATE_OPTIONS, options, TUI_INPUT_DATE_DEFAULT_OPTIONS);
}
var TUI_DEFAULT_ITEMS_HANDLERS = {
  stringify: String,
  identityMatcher: TUI_DEFAULT_IDENTITY_MATCHER,
  disabledItemHandler: TUI_FALSE_HANDLER
};
var TUI_ITEMS_HANDLERS = tuiCreateToken(TUI_DEFAULT_ITEMS_HANDLERS);
function tuiItemsHandlersProvider(options) {
  return tuiProvideOptions(TUI_ITEMS_HANDLERS, options, TUI_DEFAULT_ITEMS_HANDLERS);
}
var TUI_MOBILE_CALENDAR = new InjectionToken("[TUI_MOBILE_CALENDAR]");
var TUI_MOBILE_CALENDAR_PROVIDER = {
  provide: TUI_DROPDOWN_COMPONENT,
  useFactory: () => inject(TUI_IS_MOBILE) && inject(TUI_MOBILE_CALENDAR, {
    optional: true
  }) || inject(TUI_DROPDOWN_COMPONENT, {
    skipSelf: true
  })
};
var TUI_PREVIEW_ICONS_DEFAULT = {
  rotate: "@tui.rotate-ccw-square",
  prev: "@tui.arrow-left",
  next: "@tui.arrow-right",
  zoomIn: "@tui.plus",
  zoomOut: "@tui.minus",
  zoomReset: "@tui.minimize"
};
var TUI_PREVIEW_ICONS = tuiCreateToken(TUI_PREVIEW_ICONS_DEFAULT);
function tuiPreviewIconsProvider(icons) {
  return tuiProvideOptions(TUI_PREVIEW_ICONS, icons, TUI_PREVIEW_ICONS_DEFAULT);
}
var TUI_VALIDATION_ERRORS = tuiCreateToken({});

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
var _TuiCalendarRange = class _TuiCalendarRange {
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
  get computedMonth() {
    return this.value ? this.value.from : this.defaultViewedMonth;
  }
  ngOnChanges() {
    this.defaultViewedMonth = (this.items.length ? this.value?.to : this.value?.from) || this.defaultViewedMonth;
  }
  ngOnInit() {
    if (!this.value) {
      this.updateDefaultViewedMonth();
    }
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
    return (item) => {
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
  }
  updateDefaultViewedMonth() {
    if (this.max && this.defaultViewedMonth.monthSameOrAfter(this.max)) {
      this.defaultViewedMonth = this.max.append({
        month: -1
      });
    }
    if (this.min && this.defaultViewedMonth.monthSameOrBefore(this.min)) {
      this.defaultViewedMonth = this.min;
    }
  }
  findItemByDayRange(dayRange) {
    return this.items.find((item) => dayRange.daySame(item.range)) ?? null;
  }
};
_TuiCalendarRange.ɵfac = function TuiCalendarRange_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TuiCalendarRange)();
};
_TuiCalendarRange.ɵcmp = ɵɵdefineComponent({
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
  consts: [["presets", ""], ["automation-id", "tui-calendar-range__calendar", 1, "t-calendar", 3, "hoveredItemChange", "dayClick", "monthChange", "mousedown.prevent.silent", "disabledItemHandler", "markerHandler", "max", "maxViewedMonth", "min", "month", "showAdjacent", "value", "hoveredItem"], [3, "disabledItemHandler", "markerHandler", "max", "min", "minViewedMonth", "month", "showAdjacent", "value", "hoveredItem", "hoveredItemChange", "dayClick", "monthChange", "mousedown.prevent.silent", 4, "ngIf", "ngIfElse"], [3, "hoveredItemChange", "dayClick", "monthChange", "mousedown.prevent.silent", "disabledItemHandler", "markerHandler", "max", "min", "minViewedMonth", "month", "showAdjacent", "value", "hoveredItem"], ["automation-id", "tui-calendar-range__menu", "role", "menu"], ["automation-id", "tui-calendar-range__menu__item", "role", "menuitemradio", "tuiOption", "", 3, "click", "mousedown.prevent.silent", 4, "ngFor", "ngForOf"], ["automation-id", "tui-calendar-range__menu__item", "role", "menuitemradio", "tuiOption", "", 3, "click", "mousedown.prevent.silent"], ["automation-id", "tui-calendar-range__checkmark", 3, "icon", "font-size", 4, "ngIf"], ["automation-id", "tui-calendar-range__checkmark", 3, "icon"]],
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
      ɵɵproperty("disabledItemHandler", ctx.calculatedDisabledItemHandler)("markerHandler", ctx.markerHandler)("max", ɵɵpipeBindV(1, 11, ɵɵpureFunction4(27, _c0, ctx.max, ctx.capsMapper, ctx.value, ctx.maxLength)))("maxViewedMonth", ctx.items.length ? null : ɵɵpipeBind3(2, 17, ctx.defaultViewedMonth, ctx.monthOffset, -1))("min", ɵɵpipeBindV(3, 21, ɵɵpureFunction4(32, _c1, ctx.min, ctx.capsMapper, ctx.value, ctx.maxLength)))("month", ctx.computedMonth)("showAdjacent", !!ctx.items.length)("value", ctx.value);
      ɵɵtwoWayProperty("hoveredItem", ctx.hoveredItem);
      ɵɵadvance(4);
      ɵɵproperty("ngIf", !ctx.items.length)("ngIfElse", presets_r6);
    }
  },
  dependencies: [AsyncPipe, NgIf, NgForOf, TuiMapperPipe, TuiCalendar, TuiDataListComponent, TuiOption, TuiIcon],
  styles: ["[_nghost-%COMP%]{display:flex;min-inline-size:30rem}.t-calendar[_ngcontent-%COMP%]{border-inline-end:1px solid var(--tui-border-normal)}"],
  changeDetection: 0
});
var TuiCalendarRange = _TuiCalendarRange;
__decorate([tuiPure], TuiCalendarRange.prototype, "calculateDisabledItemHandler", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCalendarRange, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-calendar-range",
      imports: [AsyncPipe, NgIf, NgForOf, TuiMapperPipe, TuiCalendar, TuiDataList, TuiIcon],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "(document:keydown.capture)": "onEsc($event)"
      },
      template: '<tui-calendar\n    automation-id="tui-calendar-range__calendar"\n    class="t-calendar"\n    [disabledItemHandler]="calculatedDisabledItemHandler"\n    [markerHandler]="markerHandler"\n    [max]="max | tuiMapper: capsMapper : value : maxLength : false"\n    [maxViewedMonth]="items.length ? null : (defaultViewedMonth | tuiMapper: monthOffset : -1)"\n    [min]="min | tuiMapper: capsMapper : value : maxLength : true"\n    [month]="computedMonth"\n    [showAdjacent]="!!items.length"\n    [value]="value"\n    [(hoveredItem)]="hoveredItem"\n    (dayClick)="onDayClick($event)"\n    (monthChange)="onMonthChange($event)"\n    (mousedown.prevent.silent)="(0)"\n/>\n<tui-calendar\n    *ngIf="!items.length; else presets"\n    [disabledItemHandler]="calculatedDisabledItemHandler"\n    [markerHandler]="markerHandler"\n    [max]="max | tuiMapper: capsMapper : value : maxLength : false"\n    [min]="min | tuiMapper: capsMapper : value : maxLength : true"\n    [minViewedMonth]="defaultViewedMonth | tuiMapper: monthOffset : 1"\n    [month]="defaultViewedMonth | tuiMapper: monthOffset : 1"\n    [showAdjacent]="false"\n    [value]="value"\n    [(hoveredItem)]="hoveredItem"\n    (dayClick)="onDayClick($event)"\n    (monthChange)="onMonthChange($event.append({month: -1}))"\n    (mousedown.prevent.silent)="(0)"\n/>\n<ng-template #presets>\n    <tui-data-list\n        automation-id="tui-calendar-range__menu"\n        role="menu"\n        [style.flex]="1"\n    >\n        <button\n            *ngFor="let item of items | tuiMapper: mapper : min : max : minLength : (otherDateText$ | async)"\n            automation-id="tui-calendar-range__menu__item"\n            role="menuitemradio"\n            tuiOption\n            [attr.aria-checked]="isItemActive(item)"\n            (click)="onItemSelect(item)"\n            (mousedown.prevent.silent)="(0)"\n        >\n            {{ item }}\n            <tui-icon\n                *ngIf="isItemActive(item)"\n                automation-id="tui-calendar-range__checkmark"\n                [icon]="icons.check"\n                [style.font-size.rem]="1"\n            />\n        </button>\n    </tui-data-list>\n</ng-template>\n',
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

// node_modules/@maskito/core/index.esm.js
function getContentEditableSelection(element) {
  const {
    anchorOffset = 0,
    focusOffset = 0
  } = element.ownerDocument.getSelection() || {};
  const from = Math.min(anchorOffset, focusOffset);
  const to = Math.max(anchorOffset, focusOffset);
  return [from, to];
}
function setContentEditableSelection(element, [from, to]) {
  var _a, _b;
  const document = element.ownerDocument;
  const range = document.createRange();
  range.setStart(element.firstChild || element, Math.min(from, ((_a = element.textContent) === null || _a === void 0 ? void 0 : _a.length) || 0));
  range.setEnd(element.lastChild || element, Math.min(to, ((_b = element.textContent) === null || _b === void 0 ? void 0 : _b.length) || 0));
  const selection = document.getSelection();
  if (selection) {
    selection.removeAllRanges();
    selection.addRange(range);
  }
}
var ContentEditableAdapter = class {
  constructor(element) {
    this.element = element;
    this.maxLength = Infinity;
  }
  get value() {
    return this.element.innerText.replace(/\n\n$/, "\n");
  }
  set value(value) {
    this.element.innerHTML = value.replace(/\n$/, "\n\n");
  }
  get selectionStart() {
    return getContentEditableSelection(this.element)[0];
  }
  get selectionEnd() {
    return getContentEditableSelection(this.element)[1];
  }
  setSelectionRange(from, to) {
    setContentEditableSelection(this.element, [from || 0, to || 0]);
  }
  select() {
    this.setSelectionRange(0, this.value.length);
  }
};
function maskitoAdaptContentEditable(element) {
  const adapter = new ContentEditableAdapter(element);
  return new Proxy(element, {
    get(target, prop) {
      if (prop in adapter) {
        return adapter[prop];
      }
      const nativeProperty = target[prop];
      return typeof nativeProperty === "function" ? nativeProperty.bind(target) : nativeProperty;
    },
    set(target, prop, val, receiver) {
      return Reflect.set(prop in adapter ? adapter : target, prop, val, receiver);
    }
  });
}
var MASKITO_DEFAULT_ELEMENT_PREDICATE = (e) => e.isContentEditable ? maskitoAdaptContentEditable(e) : e.querySelector("input,textarea") || e;
var MASKITO_DEFAULT_OPTIONS = {
  mask: /^.*$/,
  preprocessors: [],
  postprocessors: [],
  plugins: [],
  overwriteMode: "shift"
};
var MaskHistory = class {
  constructor() {
    this.now = null;
    this.past = [];
    this.future = [];
  }
  undo() {
    const state = this.past.pop();
    if (state && this.now) {
      this.future.push(this.now);
      this.updateElement(state, "historyUndo");
    }
  }
  redo() {
    const state = this.future.pop();
    if (state && this.now) {
      this.past.push(this.now);
      this.updateElement(state, "historyRedo");
    }
  }
  updateHistory(state) {
    if (!this.now) {
      this.now = state;
      return;
    }
    const isValueChanged = this.now.value !== state.value;
    const isSelectionChanged = this.now.selection.some((item, index) => item !== state.selection[index]);
    if (!isValueChanged && !isSelectionChanged) {
      return;
    }
    if (isValueChanged) {
      this.past.push(this.now);
      this.future = [];
    }
    this.now = state;
  }
  updateElement(state, inputType) {
    this.now = state;
    this.updateElementState(state, {
      inputType,
      data: null
    });
  }
};
function areElementValuesEqual(sampleState, ...states) {
  return states.every(({
    value
  }) => value === sampleState.value);
}
function areElementStatesEqual(sampleState, ...states) {
  return states.every(({
    value,
    selection
  }) => value === sampleState.value && selection[0] === sampleState.selection[0] && selection[1] === sampleState.selection[1]);
}
function applyOverwriteMode({
  value,
  selection
}, newCharacters, mode) {
  const [from, to] = selection;
  const computedMode = typeof mode === "function" ? mode({
    value,
    selection
  }) : mode;
  return {
    value,
    selection: computedMode === "replace" ? [from, from + newCharacters.length] : [from, to]
  };
}
function isFixedCharacter(char) {
  return typeof char === "string";
}
function getLeadingFixedCharacters(mask, validatedValuePart, newCharacter, initialElementState) {
  let leadingFixedCharacters = "";
  for (let i = validatedValuePart.length; i < mask.length; i++) {
    const charConstraint = mask[i] || "";
    const isInitiallyExisted = (initialElementState === null || initialElementState === void 0 ? void 0 : initialElementState.value[i]) === charConstraint;
    if (!isFixedCharacter(charConstraint) || charConstraint === newCharacter && !isInitiallyExisted) {
      return leadingFixedCharacters;
    }
    leadingFixedCharacters += charConstraint;
  }
  return leadingFixedCharacters;
}
function validateValueWithMask(value, maskExpression) {
  if (Array.isArray(maskExpression)) {
    return value.length === maskExpression.length && Array.from(value).every((char, i) => {
      const charConstraint = maskExpression[i] || "";
      return isFixedCharacter(charConstraint) ? char === charConstraint : char.match(charConstraint);
    });
  }
  return maskExpression.test(value);
}
function guessValidValueByPattern(elementState, mask, initialElementState) {
  let maskedFrom = null;
  let maskedTo = null;
  const maskedValue = Array.from(elementState.value).reduce((validatedCharacters, char, charIndex) => {
    const leadingCharacters = getLeadingFixedCharacters(mask, validatedCharacters, char, initialElementState);
    const newValidatedChars = validatedCharacters + leadingCharacters;
    const charConstraint = mask[newValidatedChars.length] || "";
    if (isFixedCharacter(charConstraint)) {
      return newValidatedChars + charConstraint;
    }
    if (!char.match(charConstraint)) {
      return newValidatedChars;
    }
    if (maskedFrom === null && charIndex >= elementState.selection[0]) {
      maskedFrom = newValidatedChars.length;
    }
    if (maskedTo === null && charIndex >= elementState.selection[1]) {
      maskedTo = newValidatedChars.length;
    }
    return newValidatedChars + char;
  }, "");
  const trailingFixedCharacters = getLeadingFixedCharacters(mask, maskedValue, "", initialElementState);
  return {
    value: validateValueWithMask(maskedValue + trailingFixedCharacters, mask) ? maskedValue + trailingFixedCharacters : maskedValue,
    selection: [maskedFrom !== null && maskedFrom !== void 0 ? maskedFrom : maskedValue.length, maskedTo !== null && maskedTo !== void 0 ? maskedTo : maskedValue.length]
  };
}
function guessValidValueByRegExp({
  value,
  selection
}, maskRegExp) {
  const [from, to] = selection;
  let newFrom = from;
  let newTo = to;
  const validatedValue = Array.from(value).reduce((validatedValuePart, char, i) => {
    const newPossibleValue = validatedValuePart + char;
    if (from === i) {
      newFrom = validatedValuePart.length;
    }
    if (to === i) {
      newTo = validatedValuePart.length;
    }
    return newPossibleValue.match(maskRegExp) ? newPossibleValue : validatedValuePart;
  }, "");
  return {
    value: validatedValue,
    selection: [newFrom, newTo]
  };
}
function calibrateValueByMask(elementState, mask, initialElementState = null) {
  if (validateValueWithMask(elementState.value, mask)) {
    return elementState;
  }
  const {
    value,
    selection
  } = Array.isArray(mask) ? guessValidValueByPattern(elementState, mask, initialElementState) : guessValidValueByRegExp(elementState, mask);
  return {
    selection,
    value: Array.isArray(mask) ? value.slice(0, mask.length) : value
  };
}
function removeFixedMaskCharacters(initialElementState, mask) {
  if (!Array.isArray(mask)) {
    return initialElementState;
  }
  const [from, to] = initialElementState.selection;
  const selection = [];
  const unmaskedValue = Array.from(initialElementState.value).reduce((rawValue, char, i) => {
    const charConstraint = mask[i] || "";
    if (i === from) {
      selection.push(rawValue.length);
    }
    if (i === to) {
      selection.push(rawValue.length);
    }
    return isFixedCharacter(charConstraint) && charConstraint === char ? rawValue : rawValue + char;
  }, "");
  if (selection.length < 2) {
    selection.push(...new Array(2 - selection.length).fill(unmaskedValue.length));
  }
  return {
    value: unmaskedValue,
    selection: [selection[0], selection[1]]
  };
}
var MaskModel = class {
  constructor(initialElementState, maskOptions) {
    this.initialElementState = initialElementState;
    this.maskOptions = maskOptions;
    this.value = "";
    this.selection = [0, 0];
    const {
      value,
      selection
    } = calibrateValueByMask(this.initialElementState, this.getMaskExpression(this.initialElementState));
    this.value = value;
    this.selection = selection;
  }
  addCharacters([from, to], newCharacters) {
    const {
      value,
      maskOptions
    } = this;
    const maskExpression = this.getMaskExpression({
      value: value.slice(0, from) + newCharacters + value.slice(to),
      selection: [from + newCharacters.length, from + newCharacters.length]
    });
    const initialElementState = {
      value,
      selection: [from, to]
    };
    const unmaskedElementState = removeFixedMaskCharacters(initialElementState, maskExpression);
    const [unmaskedFrom, unmaskedTo] = applyOverwriteMode(unmaskedElementState, newCharacters, maskOptions.overwriteMode).selection;
    const newUnmaskedLeadingValuePart = unmaskedElementState.value.slice(0, unmaskedFrom) + newCharacters;
    const newCaretIndex = newUnmaskedLeadingValuePart.length;
    const maskedElementState = calibrateValueByMask({
      value: newUnmaskedLeadingValuePart + unmaskedElementState.value.slice(unmaskedTo),
      selection: [newCaretIndex, newCaretIndex]
    }, maskExpression, initialElementState);
    const isInvalidCharsInsertion = (
      // eslint-disable-next-line @typescript-eslint/prefer-string-starts-ends-with
      value.slice(0, unmaskedFrom) === calibrateValueByMask({
        value: newUnmaskedLeadingValuePart,
        selection: [newCaretIndex, newCaretIndex]
      }, maskExpression, initialElementState).value
    );
    if (isInvalidCharsInsertion || areElementStatesEqual(this, maskedElementState)) {
      throw new Error("Invalid mask value");
    }
    this.value = maskedElementState.value;
    this.selection = maskedElementState.selection;
  }
  deleteCharacters([from, to]) {
    if (from === to || !to) {
      return;
    }
    const {
      value
    } = this;
    const maskExpression = this.getMaskExpression({
      value: value.slice(0, from) + value.slice(to),
      selection: [from, from]
    });
    const initialElementState = {
      value,
      selection: [from, to]
    };
    const unmaskedElementState = removeFixedMaskCharacters(initialElementState, maskExpression);
    const [unmaskedFrom, unmaskedTo] = unmaskedElementState.selection;
    const newUnmaskedValue = unmaskedElementState.value.slice(0, unmaskedFrom) + unmaskedElementState.value.slice(unmaskedTo);
    const maskedElementState = calibrateValueByMask({
      value: newUnmaskedValue,
      selection: [unmaskedFrom, unmaskedFrom]
    }, maskExpression, initialElementState);
    this.value = maskedElementState.value;
    this.selection = maskedElementState.selection;
  }
  getMaskExpression(elementState) {
    const {
      mask
    } = this.maskOptions;
    return typeof mask === "function" ? mask(elementState) : mask;
  }
};
var EventListener = class {
  constructor(element) {
    this.element = element;
    this.listeners = [];
  }
  listen(eventType, fn, options) {
    const untypedFn = fn;
    this.element.addEventListener(eventType, untypedFn, options);
    this.listeners.push(() => this.element.removeEventListener(eventType, untypedFn));
  }
  destroy() {
    this.listeners.forEach((stopListen) => stopListen());
  }
};
var HotkeyModifier = {
  CTRL: 1 << 0,
  ALT: 1 << 1,
  SHIFT: 1 << 2,
  META: 1 << 3
};
var HotkeyCode = {
  Y: 89,
  Z: 90
};
function isHotkey(event, modifiers, hotkeyCode) {
  return event.ctrlKey === !!(modifiers & HotkeyModifier.CTRL) && event.altKey === !!(modifiers & HotkeyModifier.ALT) && event.shiftKey === !!(modifiers & HotkeyModifier.SHIFT) && event.metaKey === !!(modifiers & HotkeyModifier.META) && /**
   * We intentionally use legacy {@link KeyboardEvent#keyCode `keyCode`} property. It is more
   * "keyboard-layout"-independent than {@link KeyboardEvent#key `key`} or {@link KeyboardEvent#code `code`} properties.
   * @see {@link https://github.com/taiga-family/maskito/issues/315 `KeyboardEvent#code` issue}
   */
  event.keyCode === hotkeyCode;
}
function isRedo(event) {
  return isHotkey(event, HotkeyModifier.CTRL, HotkeyCode.Y) || // Windows
  isHotkey(event, HotkeyModifier.CTRL | HotkeyModifier.SHIFT, HotkeyCode.Z) || // Windows & Android
  isHotkey(event, HotkeyModifier.META | HotkeyModifier.SHIFT, HotkeyCode.Z);
}
function isUndo(event) {
  return isHotkey(event, HotkeyModifier.CTRL, HotkeyCode.Z) || // Windows & Android
  isHotkey(event, HotkeyModifier.META, HotkeyCode.Z);
}
function maskitoUpdateElement(element, valueOrElementState) {
  var _a;
  const initialValue = element.value;
  if (typeof valueOrElementState === "string") {
    element.value = valueOrElementState;
  } else {
    const [from, to] = valueOrElementState.selection;
    element.value = valueOrElementState.value;
    if (element.matches(":focus")) {
      (_a = element.setSelectionRange) === null || _a === void 0 ? void 0 : _a.call(element, from, to);
    }
  }
  if (element.value !== initialValue) {
    element.dispatchEvent(new Event(
      "input",
      /**
       * React handles this event only on bubbling phase
       *
       * here is the list of events that are processed in the capture stage, others are processed in the bubbling stage
       * https://github.com/facebook/react/blob/cb2439624f43c510007f65aea5c50a8bb97917e4/packages/react-dom-bindings/src/events/DOMPluginEventSystem.js#L222
       */
      {
        bubbles: true
      }
    ));
  }
}
function getLineSelection({
  value,
  selection
}, isForward) {
  const [from, to] = selection;
  if (from !== to) {
    return [from, to];
  }
  const nearestBreak = isForward ? value.slice(from).indexOf("\n") + 1 || value.length : value.slice(0, to).lastIndexOf("\n") + 1;
  const selectFrom = isForward ? from : nearestBreak;
  const selectTo = isForward ? nearestBreak : to;
  return [selectFrom, selectTo];
}
function getNotEmptySelection({
  value,
  selection
}, isForward) {
  const [from, to] = selection;
  if (from !== to) {
    return [from, to];
  }
  const notEmptySelection = isForward ? [from, to + 1] : [from - 1, to];
  return notEmptySelection.map((x) => Math.min(Math.max(x, 0), value.length));
}
var TRAILING_SPACES_REG = /\s+$/g;
var LEADING_SPACES_REG = /^\s+/g;
var SPACE_REG = /\s/;
function getWordSelection({
  value,
  selection
}, isForward) {
  const [from, to] = selection;
  if (from !== to) {
    return [from, to];
  }
  if (isForward) {
    const valueAfterSelectionStart = value.slice(from);
    const [leadingSpaces] = valueAfterSelectionStart.match(LEADING_SPACES_REG) || [""];
    const nearestWordEndIndex = valueAfterSelectionStart.trimStart().search(SPACE_REG);
    return [from, nearestWordEndIndex !== -1 ? from + leadingSpaces.length + nearestWordEndIndex : value.length];
  }
  const valueBeforeSelectionEnd = value.slice(0, to);
  const [trailingSpaces] = valueBeforeSelectionEnd.match(TRAILING_SPACES_REG) || [""];
  const selectedWordLength = valueBeforeSelectionEnd.trimEnd().split("").reverse().findIndex((char) => char.match(SPACE_REG));
  return [selectedWordLength !== -1 ? to - trailingSpaces.length - selectedWordLength : 0, to];
}
function maskitoPipe(processors = []) {
  return (initialData, ...readonlyArgs) => processors.reduce((data, fn) => Object.assign(Object.assign({}, data), fn(data, ...readonlyArgs)), initialData);
}
function maskitoTransform(valueOrState, maskitoOptions) {
  const options = Object.assign(Object.assign({}, MASKITO_DEFAULT_OPTIONS), maskitoOptions);
  const preprocessor = maskitoPipe(options.preprocessors);
  const postprocessor = maskitoPipe(options.postprocessors);
  const initialElementState = typeof valueOrState === "string" ? {
    value: valueOrState,
    selection: [0, 0]
  } : valueOrState;
  const {
    elementState
  } = preprocessor({
    elementState: initialElementState,
    data: ""
  }, "validation");
  const maskModel = new MaskModel(elementState, options);
  const {
    value,
    selection
  } = postprocessor(maskModel, initialElementState);
  return typeof valueOrState === "string" ? value : {
    value,
    selection
  };
}
var Maskito = class extends MaskHistory {
  constructor(element, maskitoOptions) {
    super();
    this.element = element;
    this.maskitoOptions = maskitoOptions;
    this.isTextArea = this.element.nodeName === "TEXTAREA";
    this.eventListener = new EventListener(this.element);
    this.options = Object.assign(Object.assign({}, MASKITO_DEFAULT_OPTIONS), this.maskitoOptions);
    this.preprocessor = maskitoPipe(this.options.preprocessors);
    this.postprocessor = maskitoPipe(this.options.postprocessors);
    this.teardowns = this.options.plugins.map((plugin) => plugin(this.element, this.options));
    this.updateHistory(this.elementState);
    this.eventListener.listen("keydown", (event) => {
      if (isRedo(event)) {
        event.preventDefault();
        return this.redo();
      }
      if (isUndo(event)) {
        event.preventDefault();
        return this.undo();
      }
    });
    this.eventListener.listen("beforeinput", (event) => {
      var _a;
      const isForward = event.inputType.includes("Forward");
      this.updateHistory(this.elementState);
      switch (event.inputType) {
        case "historyUndo":
          event.preventDefault();
          return this.undo();
        case "historyRedo":
          event.preventDefault();
          return this.redo();
        case "deleteByCut":
        case "deleteContentBackward":
        case "deleteContentForward":
          return this.handleDelete({
            event,
            isForward,
            selection: getNotEmptySelection(this.elementState, isForward)
          });
        case "deleteWordForward":
        case "deleteWordBackward":
          return this.handleDelete({
            event,
            isForward,
            selection: getWordSelection(this.elementState, isForward),
            force: true
          });
        case "deleteSoftLineBackward":
        case "deleteSoftLineForward":
        case "deleteHardLineBackward":
        case "deleteHardLineForward":
          return this.handleDelete({
            event,
            isForward,
            selection: getLineSelection(this.elementState, isForward),
            force: true
          });
        case "insertCompositionText":
          return;
        case "insertReplacementText":
          return;
        case "insertLineBreak":
        case "insertParagraph":
          return this.handleEnter(event);
        case "insertFromPaste":
        case "insertText":
        case "insertFromDrop":
        default:
          return this.handleInsert(event, event.data || // `event.data` for `contentEditable` is always `null` for paste/drop events
          ((_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.getData("text/plain")) || "");
      }
    });
    this.eventListener.listen("input", ({
      inputType
    }) => {
      if (inputType === "insertCompositionText") {
        return;
      }
      this.ensureValueFitsMask();
      this.updateHistory(this.elementState);
    });
    this.eventListener.listen("compositionend", () => {
      this.ensureValueFitsMask();
      this.updateHistory(this.elementState);
    });
  }
  get elementState() {
    const {
      value,
      selectionStart,
      selectionEnd
    } = this.element;
    return {
      value,
      selection: [selectionStart || 0, selectionEnd || 0]
    };
  }
  get maxLength() {
    const {
      maxLength
    } = this.element;
    return maxLength === -1 ? Infinity : maxLength;
  }
  destroy() {
    this.eventListener.destroy();
    this.teardowns.forEach((teardown) => teardown === null || teardown === void 0 ? void 0 : teardown());
  }
  updateElementState({
    value,
    selection
  }, eventInit = {
    inputType: "insertText",
    data: null
  }) {
    const initialValue = this.elementState.value;
    this.updateValue(value);
    this.updateSelectionRange(selection);
    if (initialValue !== value) {
      this.dispatchInputEvent(eventInit);
    }
  }
  updateSelectionRange([from, to]) {
    var _a;
    const {
      element
    } = this;
    if (element.matches(":focus") && (element.selectionStart !== from || element.selectionEnd !== to)) {
      (_a = element.setSelectionRange) === null || _a === void 0 ? void 0 : _a.call(element, from, to);
    }
  }
  updateValue(value) {
    this.element.value = value;
  }
  ensureValueFitsMask() {
    this.updateElementState(maskitoTransform(this.elementState, this.options));
  }
  dispatchInputEvent(eventInit = {
    inputType: "insertText",
    data: null
  }) {
    if (globalThis.InputEvent) {
      this.element.dispatchEvent(new InputEvent("input", Object.assign(Object.assign({}, eventInit), {
        bubbles: true,
        cancelable: false
      })));
    }
  }
  handleDelete({
    event,
    selection,
    isForward,
    force = false
  }) {
    const initialState = {
      value: this.elementState.value,
      selection
    };
    const [initialFrom, initialTo] = initialState.selection;
    const {
      elementState
    } = this.preprocessor({
      elementState: initialState,
      data: ""
    }, isForward ? "deleteForward" : "deleteBackward");
    const maskModel = new MaskModel(elementState, this.options);
    const [from, to] = elementState.selection;
    maskModel.deleteCharacters([from, to]);
    const newElementState = this.postprocessor(maskModel, initialState);
    const newPossibleValue = initialState.value.slice(0, initialFrom) + initialState.value.slice(initialTo);
    if (newPossibleValue === newElementState.value && !force && !this.element.isContentEditable) {
      return;
    }
    event.preventDefault();
    if (areElementValuesEqual(initialState, elementState, maskModel, newElementState)) {
      return this.updateSelectionRange(isForward ? [to, to] : [from, from]);
    }
    this.updateElementState(newElementState, {
      inputType: event.inputType,
      data: null
    });
    this.updateHistory(newElementState);
  }
  handleInsert(event, data) {
    const initialElementState = this.elementState;
    const {
      elementState,
      data: insertedText = data
    } = this.preprocessor({
      data,
      elementState: initialElementState
    }, "insert");
    const maskModel = new MaskModel(elementState, this.options);
    try {
      maskModel.addCharacters(elementState.selection, insertedText);
    } catch (_a) {
      return event.preventDefault();
    }
    const [from, to] = elementState.selection;
    const newPossibleValue = initialElementState.value.slice(0, from) + data + initialElementState.value.slice(to);
    const newElementState = this.postprocessor(maskModel, initialElementState);
    if (newElementState.value.length > this.maxLength) {
      return event.preventDefault();
    }
    if (newPossibleValue !== newElementState.value || this.element.isContentEditable) {
      event.preventDefault();
      this.updateElementState(newElementState, {
        data,
        inputType: event.inputType
      });
      this.updateHistory(newElementState);
    }
  }
  handleEnter(event) {
    if (this.isTextArea || this.element.isContentEditable) {
      this.handleInsert(event, "\n");
    }
  }
};
function maskitoInitialCalibrationPlugin(customOptions) {
  return (element, options) => {
    const from = element.selectionStart || 0;
    const to = element.selectionEnd || 0;
    maskitoUpdateElement(element, {
      value: maskitoTransform(element.value, customOptions || options),
      selection: [from, to]
    });
  };
}

// node_modules/@maskito/angular/fesm2022/maskito-angular.mjs
var _MaskitoDirective = class _MaskitoDirective {
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
      if (this.elementPredicate !== elementPredicate) {
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
};
_MaskitoDirective.ɵfac = function MaskitoDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MaskitoDirective)();
};
_MaskitoDirective.ɵdir = ɵɵdefineDirective({
  type: _MaskitoDirective,
  selectors: [["", "maskito", ""]],
  inputs: {
    options: [0, "maskito", "options"],
    elementPredicate: [0, "maskitoElement", "elementPredicate"]
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature]
});
var MaskitoDirective = _MaskitoDirective;
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
var _MaskitoPipe = class _MaskitoPipe {
  transform(value, maskitoOptions) {
    return maskitoTransform(String(value ?? ""), maskitoOptions ?? MASKITO_DEFAULT_OPTIONS);
  }
};
_MaskitoPipe.ɵfac = function MaskitoPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MaskitoPipe)();
};
_MaskitoPipe.ɵpipe = ɵɵdefinePipe({
  name: "maskito",
  type: _MaskitoPipe,
  pure: true,
  standalone: true
});
var MaskitoPipe = _MaskitoPipe;
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
function tuiToggleDay(days = [], day) {
  return (days?.find((item) => item.daySame(day)) ? days.filter((item) => !item.daySame(day)) : days?.concat(day)) || [];
}

export {
  MASKITO_DEFAULT_OPTIONS,
  maskitoUpdateElement,
  maskitoTransform,
  maskitoInitialCalibrationPlugin,
  TUI_CALENDAR_DATE_STREAM,
  tuiDateStreamWithTransformer,
  TUI_DATE_VALUE_TRANSFORMER,
  TUI_DATE_RANGE_VALUE_TRANSFORMER,
  TUI_DATE_TIME_VALUE_TRANSFORMER,
  TUI_TIME_VALUE_TRANSFORMER,
  TUI_CONFIRM_WORDS,
  TUI_CANCEL_WORD,
  TUI_DONE_WORD,
  TUI_MORE_WORD,
  TUI_HIDE_TEXT,
  TUI_SHOW_ALL_TEXT,
  TUI_OTHER_DATE_TEXT,
  TUI_CHOOSE_DAY_OR_RANGE_TEXTS,
  TUI_FROM_TO_TEXTS,
  TUI_PLUS_MINUS_TEXTS,
  TUI_TIME_TEXTS,
  TUI_DATE_TEXTS,
  TUI_DIGITAL_INFORMATION_UNITS,
  TUI_COPY_TEXTS,
  TUI_PASSWORD_TEXTS,
  TUI_CALENDAR_MONTHS,
  TUI_FILE_TEXTS,
  TUI_PAGINATION_TEXTS,
  TUI_INPUT_FILE_TEXTS,
  TUI_MULTI_SELECT_TEXTS,
  TUI_COUNTRIES,
  TUI_PREVIEW_TEXTS,
  TUI_PREVIEW_ZOOM_TEXTS,
  TUI_INPUT_DATE_DEFAULT_OPTIONS,
  TUI_INPUT_DATE_OPTIONS,
  tuiInputDateOptionsProvider,
  TUI_DEFAULT_ITEMS_HANDLERS,
  TUI_ITEMS_HANDLERS,
  tuiItemsHandlersProvider,
  TUI_MOBILE_CALENDAR,
  TUI_MOBILE_CALENDAR_PROVIDER,
  TUI_PREVIEW_ICONS_DEFAULT,
  TUI_PREVIEW_ICONS,
  tuiPreviewIconsProvider,
  TUI_VALIDATION_ERRORS,
  TUI_DAY_CAPS_MAPPER,
  TuiCalendarRange,
  TuiDayRangePeriod,
  tuiCreateDefaultDayRangePeriods,
  MaskitoDirective,
  tuiCreateTimePeriods,
  tuiIsFlat,
  tuiMaskito,
  tuiToggleDay
};
//# sourceMappingURL=chunk-EBJXACNJ.js.map
