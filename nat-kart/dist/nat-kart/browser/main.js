import {
  Image,
  ImageModule,
  Select,
  SelectModule,
  Tab,
  TabList,
  Table,
  TableModule,
  Tabs,
  TabsModule,
  Tooltip,
  TooltipModule
} from "./chunk-HPNAM2FW.js";
import {
  ANIMATION_MODULE_TYPE,
  APP_BOOTSTRAP_LISTENER,
  APP_ID,
  AUTO_STYLE,
  AnimationGroupPlayer,
  AnimationMetadataType,
  ApiService,
  ApplicationModule,
  ApplicationRef,
  Attribute,
  AutoFocus,
  Badge,
  BadgeModule,
  BaseComponent,
  BaseEditableHolder,
  BaseStyle,
  BehaviorSubject,
  Bind,
  BindModule,
  Button,
  ButtonModule,
  CSP_NONCE,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Compiler,
  Component,
  ConnectableObservable,
  Console,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  DestroyRef,
  Directive,
  DomAdapter,
  EMPTY,
  ENVIRONMENT_INITIALIZER,
  ElementRef,
  EmptyError,
  EnvironmentInjector,
  ErrorHandler,
  EventEmitter,
  FormsModule,
  HashLocationStrategy,
  HostAttributeToken,
  HostBinding,
  HostListener,
  INJECTOR_SCOPE,
  INTERNAL_APPLICATION_ERROR_HANDLER,
  IS_ENABLED_BLOCKING_INITIAL_NAVIGATION,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  InputNumber,
  InputNumberModule,
  LOCATION_INITIALIZED,
  Location,
  LocationStrategy,
  MessageService,
  NG_VALUE_ACCESSOR,
  NgClass,
  NgControlStatus,
  NgModel,
  NgModule,
  NgModuleFactory$1,
  NgStyle,
  NgTemplateOutlet,
  NgZone,
  NoopAnimationPlayer,
  Observable,
  Optional,
  Output,
  P,
  PARENT_INSTANCE,
  PLATFORM_BROWSER_ID,
  PLATFORM_ID,
  PLATFORM_INITIALIZER,
  PathLocationStrategy,
  PendingTasksInternal,
  PrimeTemplate,
  Renderer2,
  RendererFactory2,
  RendererStyleFlags2,
  RuntimeError,
  SecurityContext,
  SharedModule,
  SkipSelf,
  Subject,
  Subscription,
  TESTABILITY,
  TESTABILITY_GETTER,
  Testability,
  TestabilityRegistry,
  Toast,
  ToastModule,
  TracingService,
  Tt,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  ViewportScroller,
  W,
  XSS_SECURITY_URL,
  XhrFactory,
  __async,
  __objRest,
  __spreadProps,
  __spreadValues,
  _global,
  _sanitizeHtml,
  _sanitizeUrl,
  afterNextRender,
  allLeavingAnimations,
  allowSanitizationBypassAndThrow,
  booleanAttribute,
  bypassSanitizationTrustHtml,
  bypassSanitizationTrustResourceUrl,
  bypassSanitizationTrustScript,
  bypassSanitizationTrustStyle,
  bypassSanitizationTrustUrl,
  catchError,
  combineLatest,
  concat,
  concatMap,
  createEnvironmentInjector,
  createPlatformFactory,
  defaultIfEmpty,
  defer,
  filter,
  finalize,
  first,
  formatRuntimeError,
  forwardRef,
  from,
  getDOM,
  inject,
  input,
  internalCreateApplication,
  isInjectable,
  isNgModule,
  isObservable,
  isPlatformBrowser,
  isPromise,
  isStandalone,
  last,
  makeEnvironmentProviders,
  map,
  mergeAll,
  mergeMap,
  numberAttribute,
  of,
  parseCookieValue,
  performanceMarkFeature,
  pipe,
  platformCore,
  provideAppInitializer,
  provideHttpClient,
  providePrimeNG,
  provideZoneChangeDetection,
  publishExternalGlobalUtil,
  refCount,
  reflectComponentType,
  runInInjectionContext,
  s2 as s,
  scan,
  sequence,
  setClassMetadata,
  setDocument,
  setRootDomAdapter,
  signal,
  startWith,
  style,
  switchMap,
  take,
  takeLast,
  takeUntil,
  tap,
  throwError,
  untracked,
  unwrapSafeValue,
  ɵPRE_STYLE,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵinjectAttribute,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵsanitizeUrlOrResourceUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-OQZYVA4B.js";

// node_modules/@angular/platform-browser/fesm2022/dom_renderer.mjs
var EventManagerPlugin = class {
  _doc;
  // TODO: remove (has some usage in G3)
  constructor(_doc) {
    this._doc = _doc;
  }
  // Using non-null assertion because it's set by EventManager's constructor
  manager;
};
var DomEventsPlugin = class _DomEventsPlugin extends EventManagerPlugin {
  constructor(doc) {
    super(doc);
  }
  // This plugin should come last in the list of plugins, because it accepts all
  // events.
  supports(eventName) {
    return true;
  }
  addEventListener(element, eventName, handler, options) {
    element.addEventListener(eventName, handler, options);
    return () => this.removeEventListener(element, eventName, handler, options);
  }
  removeEventListener(target, eventName, callback, options) {
    return target.removeEventListener(eventName, callback, options);
  }
  static \u0275fac = function DomEventsPlugin_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DomEventsPlugin)(\u0275\u0275inject(DOCUMENT));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DomEventsPlugin,
    factory: _DomEventsPlugin.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomEventsPlugin, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var EVENT_MANAGER_PLUGINS = new InjectionToken(ngDevMode ? "EventManagerPlugins" : "");
var EventManager = class _EventManager {
  _zone;
  _plugins;
  _eventNameToPlugin = /* @__PURE__ */ new Map();
  /**
   * Initializes an instance of the event-manager service.
   */
  constructor(plugins, _zone) {
    this._zone = _zone;
    plugins.forEach((plugin) => {
      plugin.manager = this;
    });
    const otherPlugins = plugins.filter((p4) => !(p4 instanceof DomEventsPlugin));
    this._plugins = otherPlugins.slice().reverse();
    const domEventPlugin = plugins.find((p4) => p4 instanceof DomEventsPlugin);
    if (domEventPlugin) {
      this._plugins.push(domEventPlugin);
    }
  }
  /**
   * Registers a handler for a specific element and event.
   *
   * @param element The HTML element to receive event notifications.
   * @param eventName The name of the event to listen for.
   * @param handler A function to call when the notification occurs. Receives the
   * event object as an argument.
   * @param options Options that configure how the event listener is bound.
   * @returns  A callback function that can be used to remove the handler.
   */
  addEventListener(element, eventName, handler, options) {
    const plugin = this._findPluginFor(eventName);
    return plugin.addEventListener(element, eventName, handler, options);
  }
  /**
   * Retrieves the compilation zone in which event listeners are registered.
   */
  getZone() {
    return this._zone;
  }
  /** @internal */
  _findPluginFor(eventName) {
    let plugin = this._eventNameToPlugin.get(eventName);
    if (plugin) {
      return plugin;
    }
    const plugins = this._plugins;
    plugin = plugins.find((plugin2) => plugin2.supports(eventName));
    if (!plugin) {
      throw new RuntimeError(5101, (typeof ngDevMode === "undefined" || ngDevMode) && `No event manager plugin found for event ${eventName}`);
    }
    this._eventNameToPlugin.set(eventName, plugin);
    return plugin;
  }
  static \u0275fac = function EventManager_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EventManager)(\u0275\u0275inject(EVENT_MANAGER_PLUGINS), \u0275\u0275inject(NgZone));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _EventManager,
    factory: _EventManager.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventManager, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [EVENT_MANAGER_PLUGINS]
    }]
  }, {
    type: NgZone
  }], null);
})();
var APP_ID_ATTRIBUTE_NAME = "ng-app-id";
function removeElements(elements) {
  for (const element of elements) {
    element.remove();
  }
}
function createStyleElement(style6, doc) {
  const styleElement = doc.createElement("style");
  styleElement.textContent = style6;
  return styleElement;
}
function addServerStyles(doc, appId, inline, external) {
  const elements = doc.head?.querySelectorAll(`style[${APP_ID_ATTRIBUTE_NAME}="${appId}"],link[${APP_ID_ATTRIBUTE_NAME}="${appId}"]`);
  if (elements) {
    for (const styleElement of elements) {
      styleElement.removeAttribute(APP_ID_ATTRIBUTE_NAME);
      if (styleElement instanceof HTMLLinkElement) {
        external.set(styleElement.href.slice(styleElement.href.lastIndexOf("/") + 1), {
          usage: 0,
          elements: [styleElement]
        });
      } else if (styleElement.textContent) {
        inline.set(styleElement.textContent, {
          usage: 0,
          elements: [styleElement]
        });
      }
    }
  }
}
function createLinkElement(url, doc) {
  const linkElement = doc.createElement("link");
  linkElement.setAttribute("rel", "stylesheet");
  linkElement.setAttribute("href", url);
  return linkElement;
}
var SharedStylesHost = class _SharedStylesHost {
  doc;
  appId;
  nonce;
  /**
   * Provides usage information for active inline style content and associated HTML <style> elements.
   * Embedded styles typically originate from the `styles` metadata of a rendered component.
   */
  inline = /* @__PURE__ */ new Map();
  /**
   * Provides usage information for active external style URLs and the associated HTML <link> elements.
   * External styles typically originate from the `ɵɵExternalStylesFeature` of a rendered component.
   */
  external = /* @__PURE__ */ new Map();
  /**
   * Set of host DOM nodes that will have styles attached.
   */
  hosts = /* @__PURE__ */ new Set();
  constructor(doc, appId, nonce, platformId = {}) {
    this.doc = doc;
    this.appId = appId;
    this.nonce = nonce;
    addServerStyles(doc, appId, this.inline, this.external);
    this.hosts.add(doc.head);
  }
  /**
   * Adds embedded styles to the DOM via HTML `style` elements.
   * @param styles An array of style content strings.
   */
  addStyles(styles, urls) {
    for (const value of styles) {
      this.addUsage(value, this.inline, createStyleElement);
    }
    urls?.forEach((value) => this.addUsage(value, this.external, createLinkElement));
  }
  /**
   * Removes embedded styles from the DOM that were added as HTML `style` elements.
   * @param styles An array of style content strings.
   */
  removeStyles(styles, urls) {
    for (const value of styles) {
      this.removeUsage(value, this.inline);
    }
    urls?.forEach((value) => this.removeUsage(value, this.external));
  }
  addUsage(value, usages, creator) {
    const record = usages.get(value);
    if (record) {
      if ((typeof ngDevMode === "undefined" || ngDevMode) && record.usage === 0) {
        record.elements.forEach((element) => element.setAttribute("ng-style-reused", ""));
      }
      record.usage++;
    } else {
      usages.set(value, {
        usage: 1,
        elements: [...this.hosts].map((host) => this.addElement(host, creator(value, this.doc)))
      });
    }
  }
  removeUsage(value, usages) {
    const record = usages.get(value);
    if (record) {
      record.usage--;
      if (record.usage <= 0) {
        removeElements(record.elements);
        usages.delete(value);
      }
    }
  }
  ngOnDestroy() {
    for (const [, {
      elements
    }] of [...this.inline, ...this.external]) {
      removeElements(elements);
    }
    this.hosts.clear();
  }
  /**
   * Adds a host node to the set of style hosts and adds all existing style usage to
   * the newly added host node.
   *
   * This is currently only used for Shadow DOM encapsulation mode.
   */
  addHost(hostNode) {
    this.hosts.add(hostNode);
    for (const [style6, {
      elements
    }] of this.inline) {
      elements.push(this.addElement(hostNode, createStyleElement(style6, this.doc)));
    }
    for (const [url, {
      elements
    }] of this.external) {
      elements.push(this.addElement(hostNode, createLinkElement(url, this.doc)));
    }
  }
  removeHost(hostNode) {
    this.hosts.delete(hostNode);
  }
  addElement(host, element) {
    if (this.nonce) {
      element.setAttribute("nonce", this.nonce);
    }
    if (false) {
      element.setAttribute(APP_ID_ATTRIBUTE_NAME, this.appId);
    }
    return host.appendChild(element);
  }
  static \u0275fac = function SharedStylesHost_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SharedStylesHost)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(APP_ID), \u0275\u0275inject(CSP_NONCE, 8), \u0275\u0275inject(PLATFORM_ID));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _SharedStylesHost,
    factory: _SharedStylesHost.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedStylesHost, [{
    type: Injectable
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [APP_ID]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [CSP_NONCE]
    }, {
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], null);
})();
var NAMESPACE_URIS = {
  "svg": "http://www.w3.org/2000/svg",
  "xhtml": "http://www.w3.org/1999/xhtml",
  "xlink": "http://www.w3.org/1999/xlink",
  "xml": "http://www.w3.org/XML/1998/namespace",
  "xmlns": "http://www.w3.org/2000/xmlns/",
  "math": "http://www.w3.org/1998/Math/MathML"
};
var COMPONENT_REGEX = /%COMP%/g;
var SOURCEMAP_URL_REGEXP = /\/\*#\s*sourceMappingURL=(.+?)\s*\*\//;
var PROTOCOL_REGEXP = /^https?:/;
var COMPONENT_VARIABLE = "%COMP%";
var HOST_ATTR = `_nghost-${COMPONENT_VARIABLE}`;
var CONTENT_ATTR = `_ngcontent-${COMPONENT_VARIABLE}`;
var REMOVE_STYLES_ON_COMPONENT_DESTROY_DEFAULT = true;
var REMOVE_STYLES_ON_COMPONENT_DESTROY = new InjectionToken(ngDevMode ? "RemoveStylesOnCompDestroy" : "", {
  providedIn: "root",
  factory: () => REMOVE_STYLES_ON_COMPONENT_DESTROY_DEFAULT
});
function shimContentAttribute(componentShortId) {
  return CONTENT_ATTR.replace(COMPONENT_REGEX, componentShortId);
}
function shimHostAttribute(componentShortId) {
  return HOST_ATTR.replace(COMPONENT_REGEX, componentShortId);
}
function shimStylesContent(compId, styles) {
  return styles.map((s12) => s12.replace(COMPONENT_REGEX, compId));
}
function addBaseHrefToCssSourceMap(baseHref, styles) {
  if (!baseHref) {
    return styles;
  }
  const absoluteBaseHrefUrl = new URL(baseHref, "http://localhost");
  return styles.map((cssContent) => {
    if (!cssContent.includes("sourceMappingURL=")) {
      return cssContent;
    }
    return cssContent.replace(SOURCEMAP_URL_REGEXP, (_, sourceMapUrl) => {
      if (sourceMapUrl[0] === "/" || sourceMapUrl.startsWith("data:") || PROTOCOL_REGEXP.test(sourceMapUrl)) {
        return `/*# sourceMappingURL=${sourceMapUrl} */`;
      }
      const {
        pathname: resolvedSourceMapUrl
      } = new URL(sourceMapUrl, absoluteBaseHrefUrl);
      return `/*# sourceMappingURL=${resolvedSourceMapUrl} */`;
    });
  });
}
var DomRendererFactory2 = class _DomRendererFactory2 {
  eventManager;
  sharedStylesHost;
  appId;
  removeStylesOnCompDestroy;
  doc;
  ngZone;
  nonce;
  tracingService;
  rendererByCompId = /* @__PURE__ */ new Map();
  defaultRenderer;
  platformIsServer;
  constructor(eventManager, sharedStylesHost, appId, removeStylesOnCompDestroy, doc, ngZone, nonce = null, tracingService = null) {
    this.eventManager = eventManager;
    this.sharedStylesHost = sharedStylesHost;
    this.appId = appId;
    this.removeStylesOnCompDestroy = removeStylesOnCompDestroy;
    this.doc = doc;
    this.ngZone = ngZone;
    this.nonce = nonce;
    this.tracingService = tracingService;
    this.platformIsServer = false;
    this.defaultRenderer = new DefaultDomRenderer2(eventManager, doc, ngZone, this.platformIsServer, this.tracingService);
  }
  createRenderer(element, type) {
    if (!element || !type) {
      return this.defaultRenderer;
    }
    if (false) {
      type = __spreadProps(__spreadValues({}, type), {
        encapsulation: ViewEncapsulation.Emulated
      });
    }
    const renderer = this.getOrCreateRenderer(element, type);
    if (renderer instanceof EmulatedEncapsulationDomRenderer2) {
      renderer.applyToHost(element);
    } else if (renderer instanceof NoneEncapsulationDomRenderer) {
      renderer.applyStyles();
    }
    return renderer;
  }
  getOrCreateRenderer(element, type) {
    const rendererByCompId = this.rendererByCompId;
    let renderer = rendererByCompId.get(type.id);
    if (!renderer) {
      const doc = this.doc;
      const ngZone = this.ngZone;
      const eventManager = this.eventManager;
      const sharedStylesHost = this.sharedStylesHost;
      const removeStylesOnCompDestroy = this.removeStylesOnCompDestroy;
      const platformIsServer = this.platformIsServer;
      const tracingService = this.tracingService;
      switch (type.encapsulation) {
        case ViewEncapsulation.Emulated:
          renderer = new EmulatedEncapsulationDomRenderer2(eventManager, sharedStylesHost, type, this.appId, removeStylesOnCompDestroy, doc, ngZone, platformIsServer, tracingService);
          break;
        case ViewEncapsulation.ShadowDom:
          return new ShadowDomRenderer(eventManager, sharedStylesHost, element, type, doc, ngZone, this.nonce, platformIsServer, tracingService);
        default:
          renderer = new NoneEncapsulationDomRenderer(eventManager, sharedStylesHost, type, removeStylesOnCompDestroy, doc, ngZone, platformIsServer, tracingService);
          break;
      }
      rendererByCompId.set(type.id, renderer);
    }
    return renderer;
  }
  ngOnDestroy() {
    this.rendererByCompId.clear();
  }
  /**
   * Used during HMR to clear any cached data about a component.
   * @param componentId ID of the component that is being replaced.
   */
  componentReplaced(componentId) {
    this.rendererByCompId.delete(componentId);
  }
  static \u0275fac = function DomRendererFactory2_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DomRendererFactory2)(\u0275\u0275inject(EventManager), \u0275\u0275inject(SharedStylesHost), \u0275\u0275inject(APP_ID), \u0275\u0275inject(REMOVE_STYLES_ON_COMPONENT_DESTROY), \u0275\u0275inject(DOCUMENT), \u0275\u0275inject(NgZone), \u0275\u0275inject(CSP_NONCE), \u0275\u0275inject(TracingService, 8));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DomRendererFactory2,
    factory: _DomRendererFactory2.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomRendererFactory2, [{
    type: Injectable
  }], () => [{
    type: EventManager
  }, {
    type: SharedStylesHost
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [APP_ID]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [REMOVE_STYLES_ON_COMPONENT_DESTROY]
    }]
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [CSP_NONCE]
    }]
  }, {
    type: TracingService,
    decorators: [{
      type: Inject,
      args: [TracingService]
    }, {
      type: Optional
    }]
  }], null);
})();
var DefaultDomRenderer2 = class {
  eventManager;
  doc;
  ngZone;
  platformIsServer;
  tracingService;
  data = /* @__PURE__ */ Object.create(null);
  /**
   * By default this renderer throws when encountering synthetic properties
   * This can be disabled for example by the AsyncAnimationRendererFactory
   */
  throwOnSyntheticProps = true;
  constructor(eventManager, doc, ngZone, platformIsServer, tracingService) {
    this.eventManager = eventManager;
    this.doc = doc;
    this.ngZone = ngZone;
    this.platformIsServer = platformIsServer;
    this.tracingService = tracingService;
  }
  destroy() {
  }
  destroyNode = null;
  createElement(name, namespace) {
    if (namespace) {
      return this.doc.createElementNS(NAMESPACE_URIS[namespace] || namespace, name);
    }
    return this.doc.createElement(name);
  }
  createComment(value) {
    return this.doc.createComment(value);
  }
  createText(value) {
    return this.doc.createTextNode(value);
  }
  appendChild(parent, newChild) {
    const targetParent = isTemplateNode(parent) ? parent.content : parent;
    targetParent.appendChild(newChild);
  }
  insertBefore(parent, newChild, refChild) {
    if (parent) {
      const targetParent = isTemplateNode(parent) ? parent.content : parent;
      targetParent.insertBefore(newChild, refChild);
    }
  }
  removeChild(_parent, oldChild) {
    oldChild.remove();
  }
  selectRootElement(selectorOrNode, preserveContent) {
    let el = typeof selectorOrNode === "string" ? this.doc.querySelector(selectorOrNode) : selectorOrNode;
    if (!el) {
      throw new RuntimeError(-5104, (typeof ngDevMode === "undefined" || ngDevMode) && `The selector "${selectorOrNode}" did not match any elements`);
    }
    if (!preserveContent) {
      el.textContent = "";
    }
    return el;
  }
  parentNode(node) {
    return node.parentNode;
  }
  nextSibling(node) {
    return node.nextSibling;
  }
  setAttribute(el, name, value, namespace) {
    if (namespace) {
      name = namespace + ":" + name;
      const namespaceUri = NAMESPACE_URIS[namespace];
      if (namespaceUri) {
        el.setAttributeNS(namespaceUri, name, value);
      } else {
        el.setAttribute(name, value);
      }
    } else {
      el.setAttribute(name, value);
    }
  }
  removeAttribute(el, name, namespace) {
    if (namespace) {
      const namespaceUri = NAMESPACE_URIS[namespace];
      if (namespaceUri) {
        el.removeAttributeNS(namespaceUri, name);
      } else {
        el.removeAttribute(`${namespace}:${name}`);
      }
    } else {
      el.removeAttribute(name);
    }
  }
  addClass(el, name) {
    el.classList.add(name);
  }
  removeClass(el, name) {
    el.classList.remove(name);
  }
  setStyle(el, style6, value, flags) {
    if (flags & (RendererStyleFlags2.DashCase | RendererStyleFlags2.Important)) {
      el.style.setProperty(style6, value, flags & RendererStyleFlags2.Important ? "important" : "");
    } else {
      el.style[style6] = value;
    }
  }
  removeStyle(el, style6, flags) {
    if (flags & RendererStyleFlags2.DashCase) {
      el.style.removeProperty(style6);
    } else {
      el.style[style6] = "";
    }
  }
  setProperty(el, name, value) {
    if (el == null) {
      return;
    }
    (typeof ngDevMode === "undefined" || ngDevMode) && this.throwOnSyntheticProps && checkNoSyntheticProp(name, "property");
    el[name] = value;
  }
  setValue(node, value) {
    node.nodeValue = value;
  }
  listen(target, event, callback, options) {
    (typeof ngDevMode === "undefined" || ngDevMode) && this.throwOnSyntheticProps && checkNoSyntheticProp(event, "listener");
    if (typeof target === "string") {
      target = getDOM().getGlobalEventTarget(this.doc, target);
      if (!target) {
        throw new RuntimeError(5102, (typeof ngDevMode === "undefined" || ngDevMode) && `Unsupported event target ${target} for event ${event}`);
      }
    }
    let wrappedCallback = this.decoratePreventDefault(callback);
    if (this.tracingService?.wrapEventListener) {
      wrappedCallback = this.tracingService.wrapEventListener(target, event, wrappedCallback);
    }
    return this.eventManager.addEventListener(target, event, wrappedCallback, options);
  }
  decoratePreventDefault(eventHandler) {
    return (event) => {
      if (event === "__ngUnwrap__") {
        return eventHandler;
      }
      const allowDefaultBehavior = false ? this.ngZone.runGuarded(() => eventHandler(event)) : eventHandler(event);
      if (allowDefaultBehavior === false) {
        event.preventDefault();
      }
      return void 0;
    };
  }
};
var AT_CHARCODE = (() => "@".charCodeAt(0))();
function checkNoSyntheticProp(name, nameKind) {
  if (name.charCodeAt(0) === AT_CHARCODE) {
    throw new RuntimeError(5105, `Unexpected synthetic ${nameKind} ${name} found. Please make sure that:
  - Make sure \`provideAnimationsAsync()\`, \`provideAnimations()\` or \`provideNoopAnimations()\` call was added to a list of providers used to bootstrap an application.
  - There is a corresponding animation configuration named \`${name}\` defined in the \`animations\` field of the \`@Component\` decorator (see https://angular.dev/api/core/Component#animations).`);
  }
}
function isTemplateNode(node) {
  return node.tagName === "TEMPLATE" && node.content !== void 0;
}
var ShadowDomRenderer = class extends DefaultDomRenderer2 {
  sharedStylesHost;
  hostEl;
  shadowRoot;
  constructor(eventManager, sharedStylesHost, hostEl, component, doc, ngZone, nonce, platformIsServer, tracingService) {
    super(eventManager, doc, ngZone, platformIsServer, tracingService);
    this.sharedStylesHost = sharedStylesHost;
    this.hostEl = hostEl;
    this.shadowRoot = hostEl.attachShadow({
      mode: "open"
    });
    this.sharedStylesHost.addHost(this.shadowRoot);
    let styles = component.styles;
    if (ngDevMode) {
      const baseHref = getDOM().getBaseHref(doc) ?? "";
      styles = addBaseHrefToCssSourceMap(baseHref, styles);
    }
    styles = shimStylesContent(component.id, styles);
    for (const style6 of styles) {
      const styleEl = document.createElement("style");
      if (nonce) {
        styleEl.setAttribute("nonce", nonce);
      }
      styleEl.textContent = style6;
      this.shadowRoot.appendChild(styleEl);
    }
    const styleUrls = component.getExternalStyles?.();
    if (styleUrls) {
      for (const styleUrl of styleUrls) {
        const linkEl = createLinkElement(styleUrl, doc);
        if (nonce) {
          linkEl.setAttribute("nonce", nonce);
        }
        this.shadowRoot.appendChild(linkEl);
      }
    }
  }
  nodeOrShadowRoot(node) {
    return node === this.hostEl ? this.shadowRoot : node;
  }
  appendChild(parent, newChild) {
    return super.appendChild(this.nodeOrShadowRoot(parent), newChild);
  }
  insertBefore(parent, newChild, refChild) {
    return super.insertBefore(this.nodeOrShadowRoot(parent), newChild, refChild);
  }
  removeChild(_parent, oldChild) {
    return super.removeChild(null, oldChild);
  }
  parentNode(node) {
    return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(node)));
  }
  destroy() {
    this.sharedStylesHost.removeHost(this.shadowRoot);
  }
};
var NoneEncapsulationDomRenderer = class extends DefaultDomRenderer2 {
  sharedStylesHost;
  removeStylesOnCompDestroy;
  styles;
  styleUrls;
  constructor(eventManager, sharedStylesHost, component, removeStylesOnCompDestroy, doc, ngZone, platformIsServer, tracingService, compId) {
    super(eventManager, doc, ngZone, platformIsServer, tracingService);
    this.sharedStylesHost = sharedStylesHost;
    this.removeStylesOnCompDestroy = removeStylesOnCompDestroy;
    let styles = component.styles;
    if (ngDevMode) {
      const baseHref = getDOM().getBaseHref(doc) ?? "";
      styles = addBaseHrefToCssSourceMap(baseHref, styles);
    }
    this.styles = compId ? shimStylesContent(compId, styles) : styles;
    this.styleUrls = component.getExternalStyles?.(compId);
  }
  applyStyles() {
    this.sharedStylesHost.addStyles(this.styles, this.styleUrls);
  }
  destroy() {
    if (!this.removeStylesOnCompDestroy) {
      return;
    }
    if (allLeavingAnimations.size === 0) {
      this.sharedStylesHost.removeStyles(this.styles, this.styleUrls);
    }
  }
};
var EmulatedEncapsulationDomRenderer2 = class extends NoneEncapsulationDomRenderer {
  contentAttr;
  hostAttr;
  constructor(eventManager, sharedStylesHost, component, appId, removeStylesOnCompDestroy, doc, ngZone, platformIsServer, tracingService) {
    const compId = appId + "-" + component.id;
    super(eventManager, sharedStylesHost, component, removeStylesOnCompDestroy, doc, ngZone, platformIsServer, tracingService, compId);
    this.contentAttr = shimContentAttribute(compId);
    this.hostAttr = shimHostAttribute(compId);
  }
  applyToHost(element) {
    this.applyStyles();
    this.setAttribute(element, this.hostAttr, "");
  }
  createElement(parent, name) {
    const el = super.createElement(parent, name);
    super.setAttribute(el, this.contentAttr, "");
    return el;
  }
};

// node_modules/@angular/platform-browser/fesm2022/browser.mjs
var BrowserDomAdapter = class _BrowserDomAdapter extends DomAdapter {
  supportsDOMEvents = true;
  static makeCurrent() {
    setRootDomAdapter(new _BrowserDomAdapter());
  }
  onAndCancel(el, evt, listener, options) {
    el.addEventListener(evt, listener, options);
    return () => {
      el.removeEventListener(evt, listener, options);
    };
  }
  dispatchEvent(el, evt) {
    el.dispatchEvent(evt);
  }
  remove(node) {
    node.remove();
  }
  createElement(tagName, doc) {
    doc = doc || this.getDefaultDocument();
    return doc.createElement(tagName);
  }
  createHtmlDocument() {
    return document.implementation.createHTMLDocument("fakeTitle");
  }
  getDefaultDocument() {
    return document;
  }
  isElementNode(node) {
    return node.nodeType === Node.ELEMENT_NODE;
  }
  isShadowRoot(node) {
    return node instanceof DocumentFragment;
  }
  /** @deprecated No longer being used in Ivy code. To be removed in version 14. */
  getGlobalEventTarget(doc, target) {
    if (target === "window") {
      return window;
    }
    if (target === "document") {
      return doc;
    }
    if (target === "body") {
      return doc.body;
    }
    return null;
  }
  getBaseHref(doc) {
    const href = getBaseElementHref();
    return href == null ? null : relativePath(href);
  }
  resetBaseElement() {
    baseElement = null;
  }
  getUserAgent() {
    return window.navigator.userAgent;
  }
  getCookie(name) {
    return parseCookieValue(document.cookie, name);
  }
};
var baseElement = null;
function getBaseElementHref() {
  baseElement = baseElement || document.head.querySelector("base");
  return baseElement ? baseElement.getAttribute("href") : null;
}
function relativePath(url) {
  return new URL(url, document.baseURI).pathname;
}
var BrowserGetTestability = class {
  addToWindow(registry) {
    _global["getAngularTestability"] = (elem, findInAncestors = true) => {
      const testability = registry.findTestabilityInTree(elem, findInAncestors);
      if (testability == null) {
        throw new RuntimeError(5103, (typeof ngDevMode === "undefined" || ngDevMode) && "Could not find testability for element.");
      }
      return testability;
    };
    _global["getAllAngularTestabilities"] = () => registry.getAllTestabilities();
    _global["getAllAngularRootElements"] = () => registry.getAllRootElements();
    const whenAllStable = (callback) => {
      const testabilities = _global["getAllAngularTestabilities"]();
      let count = testabilities.length;
      const decrement = function() {
        count--;
        if (count == 0) {
          callback();
        }
      };
      testabilities.forEach((testability) => {
        testability.whenStable(decrement);
      });
    };
    if (!_global["frameworkStabilizers"]) {
      _global["frameworkStabilizers"] = [];
    }
    _global["frameworkStabilizers"].push(whenAllStable);
  }
  findTestabilityInTree(registry, elem, findInAncestors) {
    if (elem == null) {
      return null;
    }
    const t42 = registry.getTestability(elem);
    if (t42 != null) {
      return t42;
    } else if (!findInAncestors) {
      return null;
    }
    if (getDOM().isShadowRoot(elem)) {
      return this.findTestabilityInTree(registry, elem.host, true);
    }
    return this.findTestabilityInTree(registry, elem.parentElement, true);
  }
};
var BrowserXhr = class _BrowserXhr {
  build() {
    return new XMLHttpRequest();
  }
  static \u0275fac = function BrowserXhr_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrowserXhr)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BrowserXhr,
    factory: _BrowserXhr.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserXhr, [{
    type: Injectable
  }], null, null);
})();
var MODIFIER_KEYS = ["alt", "control", "meta", "shift"];
var _keyMap = {
  "\b": "Backspace",
  "	": "Tab",
  "\x7F": "Delete",
  "\x1B": "Escape",
  "Del": "Delete",
  "Esc": "Escape",
  "Left": "ArrowLeft",
  "Right": "ArrowRight",
  "Up": "ArrowUp",
  "Down": "ArrowDown",
  "Menu": "ContextMenu",
  "Scroll": "ScrollLock",
  "Win": "OS"
};
var MODIFIER_KEY_GETTERS = {
  "alt": (event) => event.altKey,
  "control": (event) => event.ctrlKey,
  "meta": (event) => event.metaKey,
  "shift": (event) => event.shiftKey
};
var KeyEventsPlugin = class _KeyEventsPlugin extends EventManagerPlugin {
  /**
   * Initializes an instance of the browser plug-in.
   * @param doc The document in which key events will be detected.
   */
  constructor(doc) {
    super(doc);
  }
  /**
   * Reports whether a named key event is supported.
   * @param eventName The event name to query.
   * @return True if the named key event is supported.
   */
  supports(eventName) {
    return _KeyEventsPlugin.parseEventName(eventName) != null;
  }
  /**
   * Registers a handler for a specific element and key event.
   * @param element The HTML element to receive event notifications.
   * @param eventName The name of the key event to listen for.
   * @param handler A function to call when the notification occurs. Receives the
   * event object as an argument.
   * @returns The key event that was registered.
   */
  addEventListener(element, eventName, handler, options) {
    const parsedEvent = _KeyEventsPlugin.parseEventName(eventName);
    const outsideHandler = _KeyEventsPlugin.eventCallback(parsedEvent["fullKey"], handler, this.manager.getZone());
    return this.manager.getZone().runOutsideAngular(() => {
      return getDOM().onAndCancel(element, parsedEvent["domEventName"], outsideHandler, options);
    });
  }
  /**
   * Parses the user provided full keyboard event definition and normalizes it for
   * later internal use. It ensures the string is all lowercase, converts special
   * characters to a standard spelling, and orders all the values consistently.
   *
   * @param eventName The name of the key event to listen for.
   * @returns an object with the full, normalized string, and the dom event name
   * or null in the case when the event doesn't match a keyboard event.
   */
  static parseEventName(eventName) {
    const parts = eventName.toLowerCase().split(".");
    const domEventName = parts.shift();
    if (parts.length === 0 || !(domEventName === "keydown" || domEventName === "keyup")) {
      return null;
    }
    const key = _KeyEventsPlugin._normalizeKey(parts.pop());
    let fullKey = "";
    let codeIX = parts.indexOf("code");
    if (codeIX > -1) {
      parts.splice(codeIX, 1);
      fullKey = "code.";
    }
    MODIFIER_KEYS.forEach((modifierName) => {
      const index = parts.indexOf(modifierName);
      if (index > -1) {
        parts.splice(index, 1);
        fullKey += modifierName + ".";
      }
    });
    fullKey += key;
    if (parts.length != 0 || key.length === 0) {
      return null;
    }
    const result = {};
    result["domEventName"] = domEventName;
    result["fullKey"] = fullKey;
    return result;
  }
  /**
   * Determines whether the actual keys pressed match the configured key code string.
   * The `fullKeyCode` event is normalized in the `parseEventName` method when the
   * event is attached to the DOM during the `addEventListener` call. This is unseen
   * by the end user and is normalized for internal consistency and parsing.
   *
   * @param event The keyboard event.
   * @param fullKeyCode The normalized user defined expected key event string
   * @returns boolean.
   */
  static matchEventFullKeyCode(event, fullKeyCode) {
    let keycode = _keyMap[event.key] || event.key;
    let key = "";
    if (fullKeyCode.indexOf("code.") > -1) {
      keycode = event.code;
      key = "code.";
    }
    if (keycode == null || !keycode) return false;
    keycode = keycode.toLowerCase();
    if (keycode === " ") {
      keycode = "space";
    } else if (keycode === ".") {
      keycode = "dot";
    }
    MODIFIER_KEYS.forEach((modifierName) => {
      if (modifierName !== keycode) {
        const modifierGetter = MODIFIER_KEY_GETTERS[modifierName];
        if (modifierGetter(event)) {
          key += modifierName + ".";
        }
      }
    });
    key += keycode;
    return key === fullKeyCode;
  }
  /**
   * Configures a handler callback for a key event.
   * @param fullKey The event name that combines all simultaneous keystrokes.
   * @param handler The function that responds to the key event.
   * @param zone The zone in which the event occurred.
   * @returns A callback function.
   */
  static eventCallback(fullKey, handler, zone) {
    return (event) => {
      if (_KeyEventsPlugin.matchEventFullKeyCode(event, fullKey)) {
        zone.runGuarded(() => handler(event));
      }
    };
  }
  /** @internal */
  static _normalizeKey(keyName) {
    return keyName === "esc" ? "escape" : keyName;
  }
  static \u0275fac = function KeyEventsPlugin_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _KeyEventsPlugin)(\u0275\u0275inject(DOCUMENT));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _KeyEventsPlugin,
    factory: _KeyEventsPlugin.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KeyEventsPlugin, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
function bootstrapApplication(rootComponent, options, context) {
  const config = __spreadValues({
    rootComponent,
    platformRef: context?.platformRef
  }, createProvidersConfig(options));
  if (false) {
    return resolveComponentResources(fetch).catch((error) => {
      console.error(error);
      return Promise.resolve();
    }).then(() => internalCreateApplication(config));
  }
  return internalCreateApplication(config);
}
function createProvidersConfig(options) {
  return {
    appProviders: [...BROWSER_MODULE_PROVIDERS, ...options?.providers ?? []],
    platformProviders: INTERNAL_BROWSER_PLATFORM_PROVIDERS
  };
}
function initDomAdapter() {
  BrowserDomAdapter.makeCurrent();
}
function errorHandler() {
  return new ErrorHandler();
}
function _document() {
  setDocument(document);
  return document;
}
var INTERNAL_BROWSER_PLATFORM_PROVIDERS = [{
  provide: PLATFORM_ID,
  useValue: PLATFORM_BROWSER_ID
}, {
  provide: PLATFORM_INITIALIZER,
  useValue: initDomAdapter,
  multi: true
}, {
  provide: DOCUMENT,
  useFactory: _document
}];
var platformBrowser = createPlatformFactory(platformCore, "browser", INTERNAL_BROWSER_PLATFORM_PROVIDERS);
var BROWSER_MODULE_PROVIDERS_MARKER = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "BrowserModule Providers Marker" : "");
var TESTABILITY_PROVIDERS = [{
  provide: TESTABILITY_GETTER,
  useClass: BrowserGetTestability
}, {
  provide: TESTABILITY,
  useClass: Testability,
  deps: [NgZone, TestabilityRegistry, TESTABILITY_GETTER]
}, {
  provide: Testability,
  // Also provide as `Testability` for backwards-compatibility.
  useClass: Testability,
  deps: [NgZone, TestabilityRegistry, TESTABILITY_GETTER]
}];
var BROWSER_MODULE_PROVIDERS = [{
  provide: INJECTOR_SCOPE,
  useValue: "root"
}, {
  provide: ErrorHandler,
  useFactory: errorHandler
}, {
  provide: EVENT_MANAGER_PLUGINS,
  useClass: DomEventsPlugin,
  multi: true,
  deps: [DOCUMENT]
}, {
  provide: EVENT_MANAGER_PLUGINS,
  useClass: KeyEventsPlugin,
  multi: true,
  deps: [DOCUMENT]
}, DomRendererFactory2, SharedStylesHost, EventManager, {
  provide: RendererFactory2,
  useExisting: DomRendererFactory2
}, {
  provide: XhrFactory,
  useClass: BrowserXhr
}, typeof ngDevMode === "undefined" || ngDevMode ? {
  provide: BROWSER_MODULE_PROVIDERS_MARKER,
  useValue: true
} : []];
var BrowserModule = class _BrowserModule {
  constructor() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      const providersAlreadyPresent = inject(BROWSER_MODULE_PROVIDERS_MARKER, {
        optional: true,
        skipSelf: true
      });
      if (providersAlreadyPresent) {
        throw new RuntimeError(5100, `Providers from the \`BrowserModule\` have already been loaded. If you need access to common directives such as NgIf and NgFor, import the \`CommonModule\` instead.`);
      }
    }
  }
  static \u0275fac = function BrowserModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrowserModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _BrowserModule,
    exports: [CommonModule, ApplicationModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [...BROWSER_MODULE_PROVIDERS, ...TESTABILITY_PROVIDERS],
    imports: [CommonModule, ApplicationModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserModule, [{
    type: NgModule,
    args: [{
      providers: [...BROWSER_MODULE_PROVIDERS, ...TESTABILITY_PROVIDERS],
      exports: [CommonModule, ApplicationModule]
    }]
  }], () => [], null);
})();

// node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
var Meta = class _Meta {
  _doc;
  _dom;
  constructor(_doc) {
    this._doc = _doc;
    this._dom = getDOM();
  }
  /**
   * Retrieves or creates a specific `<meta>` tag element in the current HTML document.
   * In searching for an existing tag, Angular attempts to match the `name` or `property` attribute
   * values in the provided tag definition, and verifies that all other attribute values are equal.
   * If an existing element is found, it is returned and is not modified in any way.
   * @param tag The definition of a `<meta>` element to match or create.
   * @param forceCreation True to create a new element without checking whether one already exists.
   * @returns The existing element with the same attributes and values if found,
   * the new element if no match is found, or `null` if the tag parameter is not defined.
   */
  addTag(tag, forceCreation = false) {
    if (!tag) return null;
    return this._getOrCreateElement(tag, forceCreation);
  }
  /**
   * Retrieves or creates a set of `<meta>` tag elements in the current HTML document.
   * In searching for an existing tag, Angular attempts to match the `name` or `property` attribute
   * values in the provided tag definition, and verifies that all other attribute values are equal.
   * @param tags An array of tag definitions to match or create.
   * @param forceCreation True to create new elements without checking whether they already exist.
   * @returns The matching elements if found, or the new elements.
   */
  addTags(tags, forceCreation = false) {
    if (!tags) return [];
    return tags.reduce((result, tag) => {
      if (tag) {
        result.push(this._getOrCreateElement(tag, forceCreation));
      }
      return result;
    }, []);
  }
  /**
   * Retrieves a `<meta>` tag element in the current HTML document.
   * @param attrSelector The tag attribute and value to match against, in the format
   * `"tag_attribute='value string'"`.
   * @returns The matching element, if any.
   */
  getTag(attrSelector) {
    if (!attrSelector) return null;
    return this._doc.querySelector(`meta[${attrSelector}]`) || null;
  }
  /**
   * Retrieves a set of `<meta>` tag elements in the current HTML document.
   * @param attrSelector The tag attribute and value to match against, in the format
   * `"tag_attribute='value string'"`.
   * @returns The matching elements, if any.
   */
  getTags(attrSelector) {
    if (!attrSelector) return [];
    const list = this._doc.querySelectorAll(`meta[${attrSelector}]`);
    return list ? [].slice.call(list) : [];
  }
  /**
   * Modifies an existing `<meta>` tag element in the current HTML document.
   * @param tag The tag description with which to replace the existing tag content.
   * @param selector A tag attribute and value to match against, to identify
   * an existing tag. A string in the format `"tag_attribute=`value string`"`.
   * If not supplied, matches a tag with the same `name` or `property` attribute value as the
   * replacement tag.
   * @return The modified element.
   */
  updateTag(tag, selector) {
    if (!tag) return null;
    selector = selector || this._parseSelector(tag);
    const meta = this.getTag(selector);
    if (meta) {
      return this._setMetaElementAttributes(tag, meta);
    }
    return this._getOrCreateElement(tag, true);
  }
  /**
   * Removes an existing `<meta>` tag element from the current HTML document.
   * @param attrSelector A tag attribute and value to match against, to identify
   * an existing tag. A string in the format `"tag_attribute=`value string`"`.
   */
  removeTag(attrSelector) {
    this.removeTagElement(this.getTag(attrSelector));
  }
  /**
   * Removes an existing `<meta>` tag element from the current HTML document.
   * @param meta The tag definition to match against to identify an existing tag.
   */
  removeTagElement(meta) {
    if (meta) {
      this._dom.remove(meta);
    }
  }
  _getOrCreateElement(meta, forceCreation = false) {
    if (!forceCreation) {
      const selector = this._parseSelector(meta);
      const elem = this.getTags(selector).filter((elem2) => this._containsAttributes(meta, elem2))[0];
      if (elem !== void 0) return elem;
    }
    const element = this._dom.createElement("meta");
    this._setMetaElementAttributes(meta, element);
    const head = this._doc.getElementsByTagName("head")[0];
    head.appendChild(element);
    return element;
  }
  _setMetaElementAttributes(tag, el) {
    Object.keys(tag).forEach((prop) => el.setAttribute(this._getMetaKeyMap(prop), tag[prop]));
    return el;
  }
  _parseSelector(tag) {
    const attr = tag.name ? "name" : "property";
    return `${attr}="${tag[attr]}"`;
  }
  _containsAttributes(tag, elem) {
    return Object.keys(tag).every((key) => elem.getAttribute(this._getMetaKeyMap(key)) === tag[key]);
  }
  _getMetaKeyMap(prop) {
    return META_KEYS_MAP[prop] || prop;
  }
  static \u0275fac = function Meta_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Meta)(\u0275\u0275inject(DOCUMENT));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _Meta,
    factory: _Meta.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Meta, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var META_KEYS_MAP = {
  httpEquiv: "http-equiv"
};
var Title = class _Title {
  _doc;
  constructor(_doc) {
    this._doc = _doc;
  }
  /**
   * Get the title of the current HTML document.
   */
  getTitle() {
    return this._doc.title;
  }
  /**
   * Set the title of the current HTML document.
   * @param newTitle
   */
  setTitle(newTitle) {
    this._doc.title = newTitle || "";
  }
  static \u0275fac = function Title_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Title)(\u0275\u0275inject(DOCUMENT));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _Title,
    factory: _Title.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Title, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var EVENT_NAMES = {
  // pan
  "pan": true,
  "panstart": true,
  "panmove": true,
  "panend": true,
  "pancancel": true,
  "panleft": true,
  "panright": true,
  "panup": true,
  "pandown": true,
  // pinch
  "pinch": true,
  "pinchstart": true,
  "pinchmove": true,
  "pinchend": true,
  "pinchcancel": true,
  "pinchin": true,
  "pinchout": true,
  // press
  "press": true,
  "pressup": true,
  // rotate
  "rotate": true,
  "rotatestart": true,
  "rotatemove": true,
  "rotateend": true,
  "rotatecancel": true,
  // swipe
  "swipe": true,
  "swipeleft": true,
  "swiperight": true,
  "swipeup": true,
  "swipedown": true,
  // tap
  "tap": true,
  "doubletap": true
};
var HAMMER_GESTURE_CONFIG = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "HammerGestureConfig" : "");
var HAMMER_LOADER = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "HammerLoader" : "");
var HammerGestureConfig = class _HammerGestureConfig {
  /**
   * A set of supported event names for gestures to be used in Angular.
   * Angular supports all built-in recognizers, as listed in
   * [HammerJS documentation](https://hammerjs.github.io/).
   */
  events = [];
  /**
   * Maps gesture event names to a set of configuration options
   * that specify overrides to the default values for specific properties.
   *
   * The key is a supported event name to be configured,
   * and the options object contains a set of properties, with override values
   * to be applied to the named recognizer event.
   * For example, to disable recognition of the rotate event, specify
   *  `{"rotate": {"enable": false}}`.
   *
   * Properties that are not present take the HammerJS default values.
   * For information about which properties are supported for which events,
   * and their allowed and default values, see
   * [HammerJS documentation](https://hammerjs.github.io/).
   *
   */
  overrides = {};
  /**
   * Properties whose default values can be overridden for a given event.
   * Different sets of properties apply to different events.
   * For information about which properties are supported for which events,
   * and their allowed and default values, see
   * [HammerJS documentation](https://hammerjs.github.io/).
   */
  options;
  /**
   * Creates a [HammerJS Manager](https://hammerjs.github.io/api/#hammermanager)
   * and attaches it to a given HTML element.
   * @param element The element that will recognize gestures.
   * @returns A HammerJS event-manager object.
   */
  buildHammer(element) {
    const mc = new Hammer(element, this.options);
    mc.get("pinch").set({
      enable: true
    });
    mc.get("rotate").set({
      enable: true
    });
    for (const eventName in this.overrides) {
      mc.get(eventName).set(this.overrides[eventName]);
    }
    return mc;
  }
  static \u0275fac = function HammerGestureConfig_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HammerGestureConfig)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _HammerGestureConfig,
    factory: _HammerGestureConfig.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HammerGestureConfig, [{
    type: Injectable
  }], null, null);
})();
var HammerGesturesPlugin = class _HammerGesturesPlugin extends EventManagerPlugin {
  _config;
  _injector;
  loader;
  _loaderPromise = null;
  constructor(doc, _config, _injector, loader) {
    super(doc);
    this._config = _config;
    this._injector = _injector;
    this.loader = loader;
  }
  supports(eventName) {
    if (!EVENT_NAMES.hasOwnProperty(eventName.toLowerCase()) && !this.isCustomEvent(eventName)) {
      return false;
    }
    if (!window.Hammer && !this.loader) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        const _console = this._injector.get(Console);
        _console.warn(`The "${eventName}" event cannot be bound because Hammer.JS is not loaded and no custom loader has been specified.`);
      }
      return false;
    }
    return true;
  }
  addEventListener(element, eventName, handler) {
    const zone = this.manager.getZone();
    eventName = eventName.toLowerCase();
    if (!window.Hammer && this.loader) {
      this._loaderPromise = this._loaderPromise || zone.runOutsideAngular(() => this.loader());
      let cancelRegistration = false;
      let deregister = () => {
        cancelRegistration = true;
      };
      zone.runOutsideAngular(() => this._loaderPromise.then(() => {
        if (!window.Hammer) {
          if (typeof ngDevMode === "undefined" || ngDevMode) {
            const _console = this._injector.get(Console);
            _console.warn(`The custom HAMMER_LOADER completed, but Hammer.JS is not present.`);
          }
          deregister = () => {
          };
          return;
        }
        if (!cancelRegistration) {
          deregister = this.addEventListener(element, eventName, handler);
        }
      }).catch(() => {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          const _console = this._injector.get(Console);
          _console.warn(`The "${eventName}" event cannot be bound because the custom Hammer.JS loader failed.`);
        }
        deregister = () => {
        };
      }));
      return () => {
        deregister();
      };
    }
    return zone.runOutsideAngular(() => {
      const mc = this._config.buildHammer(element);
      const callback = function(eventObj) {
        zone.runGuarded(function() {
          handler(eventObj);
        });
      };
      mc.on(eventName, callback);
      return () => {
        mc.off(eventName, callback);
        if (typeof mc.destroy === "function") {
          mc.destroy();
        }
      };
    });
  }
  isCustomEvent(eventName) {
    return this._config.events.indexOf(eventName) > -1;
  }
  static \u0275fac = function HammerGesturesPlugin_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HammerGesturesPlugin)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(HAMMER_GESTURE_CONFIG), \u0275\u0275inject(Injector), \u0275\u0275inject(HAMMER_LOADER, 8));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _HammerGesturesPlugin,
    factory: _HammerGesturesPlugin.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HammerGesturesPlugin, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: HammerGestureConfig,
    decorators: [{
      type: Inject,
      args: [HAMMER_GESTURE_CONFIG]
    }]
  }, {
    type: Injector
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [HAMMER_LOADER]
    }]
  }], null);
})();
var HammerModule = class _HammerModule {
  static \u0275fac = function HammerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HammerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _HammerModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [{
      provide: EVENT_MANAGER_PLUGINS,
      useClass: HammerGesturesPlugin,
      multi: true,
      deps: [DOCUMENT, HAMMER_GESTURE_CONFIG, Injector, [new Optional(), HAMMER_LOADER]]
    }, {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerGestureConfig
    }]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HammerModule, [{
    type: NgModule,
    args: [{
      providers: [{
        provide: EVENT_MANAGER_PLUGINS,
        useClass: HammerGesturesPlugin,
        multi: true,
        deps: [DOCUMENT, HAMMER_GESTURE_CONFIG, Injector, [new Optional(), HAMMER_LOADER]]
      }, {
        provide: HAMMER_GESTURE_CONFIG,
        useClass: HammerGestureConfig
      }]
    }]
  }], null, null);
})();
var DomSanitizer = class _DomSanitizer {
  static \u0275fac = function DomSanitizer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DomSanitizer)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DomSanitizer,
    factory: function DomSanitizer_Factory(__ngFactoryType__) {
      let __ngConditionalFactory__ = null;
      if (__ngFactoryType__) {
        __ngConditionalFactory__ = new (__ngFactoryType__ || _DomSanitizer)();
      } else {
        __ngConditionalFactory__ = \u0275\u0275inject(DomSanitizerImpl);
      }
      return __ngConditionalFactory__;
    },
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomSanitizer, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useExisting: forwardRef(() => DomSanitizerImpl)
    }]
  }], null, null);
})();
var DomSanitizerImpl = class _DomSanitizerImpl extends DomSanitizer {
  _doc;
  constructor(_doc) {
    super();
    this._doc = _doc;
  }
  sanitize(ctx, value) {
    if (value == null) return null;
    switch (ctx) {
      case SecurityContext.NONE:
        return value;
      case SecurityContext.HTML:
        if (allowSanitizationBypassAndThrow(
          value,
          "HTML"
          /* BypassType.Html */
        )) {
          return unwrapSafeValue(value);
        }
        return _sanitizeHtml(this._doc, String(value)).toString();
      case SecurityContext.STYLE:
        if (allowSanitizationBypassAndThrow(
          value,
          "Style"
          /* BypassType.Style */
        )) {
          return unwrapSafeValue(value);
        }
        return value;
      case SecurityContext.SCRIPT:
        if (allowSanitizationBypassAndThrow(
          value,
          "Script"
          /* BypassType.Script */
        )) {
          return unwrapSafeValue(value);
        }
        throw new RuntimeError(5200, (typeof ngDevMode === "undefined" || ngDevMode) && "unsafe value used in a script context");
      case SecurityContext.URL:
        if (allowSanitizationBypassAndThrow(
          value,
          "URL"
          /* BypassType.Url */
        )) {
          return unwrapSafeValue(value);
        }
        return _sanitizeUrl(String(value));
      case SecurityContext.RESOURCE_URL:
        if (allowSanitizationBypassAndThrow(
          value,
          "ResourceURL"
          /* BypassType.ResourceUrl */
        )) {
          return unwrapSafeValue(value);
        }
        throw new RuntimeError(5201, (typeof ngDevMode === "undefined" || ngDevMode) && `unsafe value used in a resource URL context (see ${XSS_SECURITY_URL})`);
      default:
        throw new RuntimeError(5202, (typeof ngDevMode === "undefined" || ngDevMode) && `Unexpected SecurityContext ${ctx} (see ${XSS_SECURITY_URL})`);
    }
  }
  bypassSecurityTrustHtml(value) {
    return bypassSanitizationTrustHtml(value);
  }
  bypassSecurityTrustStyle(value) {
    return bypassSanitizationTrustStyle(value);
  }
  bypassSecurityTrustScript(value) {
    return bypassSanitizationTrustScript(value);
  }
  bypassSecurityTrustUrl(value) {
    return bypassSanitizationTrustUrl(value);
  }
  bypassSecurityTrustResourceUrl(value) {
    return bypassSanitizationTrustResourceUrl(value);
  }
  static \u0275fac = function DomSanitizerImpl_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DomSanitizerImpl)(\u0275\u0275inject(DOCUMENT));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DomSanitizerImpl,
    factory: _DomSanitizerImpl.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomSanitizerImpl, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var HydrationFeatureKind;
(function(HydrationFeatureKind2) {
  HydrationFeatureKind2[HydrationFeatureKind2["NoHttpTransferCache"] = 0] = "NoHttpTransferCache";
  HydrationFeatureKind2[HydrationFeatureKind2["HttpTransferCacheOptions"] = 1] = "HttpTransferCacheOptions";
  HydrationFeatureKind2[HydrationFeatureKind2["I18nSupport"] = 2] = "I18nSupport";
  HydrationFeatureKind2[HydrationFeatureKind2["EventReplay"] = 3] = "EventReplay";
  HydrationFeatureKind2[HydrationFeatureKind2["IncrementalHydration"] = 4] = "IncrementalHydration";
})(HydrationFeatureKind || (HydrationFeatureKind = {}));

// node_modules/@angular/animations/fesm2022/util.mjs
var LINE_START = "\n - ";
function invalidTimingValue(exp) {
  return new RuntimeError(3e3, ngDevMode && `The provided timing value "${exp}" is invalid.`);
}
function negativeStepValue() {
  return new RuntimeError(3100, ngDevMode && "Duration values below 0 are not allowed for this animation step.");
}
function negativeDelayValue() {
  return new RuntimeError(3101, ngDevMode && "Delay values below 0 are not allowed for this animation step.");
}
function invalidStyleParams(varName) {
  return new RuntimeError(3001, ngDevMode && `Unable to resolve the local animation param ${varName} in the given list of values`);
}
function invalidParamValue(varName) {
  return new RuntimeError(3003, ngDevMode && `Please provide a value for the animation param ${varName}`);
}
function invalidNodeType(nodeType) {
  return new RuntimeError(3004, ngDevMode && `Unable to resolve animation metadata node #${nodeType}`);
}
function invalidCssUnitValue(userProvidedProperty, value) {
  return new RuntimeError(3005, ngDevMode && `Please provide a CSS unit value for ${userProvidedProperty}:${value}`);
}
function invalidTrigger() {
  return new RuntimeError(3006, ngDevMode && "animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))");
}
function invalidDefinition() {
  return new RuntimeError(3007, ngDevMode && "only state() and transition() definitions can sit inside of a trigger()");
}
function invalidState(metadataName, missingSubs) {
  return new RuntimeError(3008, ngDevMode && `state("${metadataName}", ...) must define default values for all the following style substitutions: ${missingSubs.join(", ")}`);
}
function invalidStyleValue(value) {
  return new RuntimeError(3002, ngDevMode && `The provided style string value ${value} is not allowed.`);
}
function invalidParallelAnimation(prop, firstStart, firstEnd, secondStart, secondEnd) {
  return new RuntimeError(3010, ngDevMode && `The CSS property "${prop}" that exists between the times of "${firstStart}ms" and "${firstEnd}ms" is also being animated in a parallel animation between the times of "${secondStart}ms" and "${secondEnd}ms"`);
}
function invalidKeyframes() {
  return new RuntimeError(3011, ngDevMode && `keyframes() must be placed inside of a call to animate()`);
}
function invalidOffset() {
  return new RuntimeError(3012, ngDevMode && `Please ensure that all keyframe offsets are between 0 and 1`);
}
function keyframeOffsetsOutOfOrder() {
  return new RuntimeError(3200, ngDevMode && `Please ensure that all keyframe offsets are in order`);
}
function keyframesMissingOffsets() {
  return new RuntimeError(3202, ngDevMode && `Not all style() steps within the declared keyframes() contain offsets`);
}
function invalidStagger() {
  return new RuntimeError(3013, ngDevMode && `stagger() can only be used inside of query()`);
}
function invalidQuery(selector) {
  return new RuntimeError(3014, ngDevMode && `\`query("${selector}")\` returned zero elements. (Use \`query("${selector}", { optional: true })\` if you wish to allow this.)`);
}
function invalidExpression(expr) {
  return new RuntimeError(3015, ngDevMode && `The provided transition expression "${expr}" is not supported`);
}
function invalidTransitionAlias(alias) {
  return new RuntimeError(3016, ngDevMode && `The transition alias value "${alias}" is not supported`);
}
function triggerBuildFailed(name, errors) {
  return new RuntimeError(3404, ngDevMode && `The animation trigger "${name}" has failed to build due to the following errors:
 - ${errors.map((err) => err.message).join("\n - ")}`);
}
function animationFailed(errors) {
  return new RuntimeError(3502, ngDevMode && `Unable to animate due to the following errors:${LINE_START}${errors.map((err) => err.message).join(LINE_START)}`);
}
function registerFailed(errors) {
  return new RuntimeError(3503, ngDevMode && `Unable to build the animation due to the following errors: ${errors.map((err) => err.message).join("\n")}`);
}
function missingOrDestroyedAnimation() {
  return new RuntimeError(3300, ngDevMode && "The requested animation doesn't exist or has already been destroyed");
}
function createAnimationFailed(errors) {
  return new RuntimeError(3504, ngDevMode && `Unable to create the animation due to the following errors:${errors.map((err) => err.message).join("\n")}`);
}
function missingPlayer(id) {
  return new RuntimeError(3301, ngDevMode && `Unable to find the timeline player referenced by ${id}`);
}
function missingTrigger(phase, name) {
  return new RuntimeError(3302, ngDevMode && `Unable to listen on the animation trigger event "${phase}" because the animation trigger "${name}" doesn't exist!`);
}
function missingEvent(name) {
  return new RuntimeError(3303, ngDevMode && `Unable to listen on the animation trigger "${name}" because the provided event is undefined!`);
}
function unsupportedTriggerEvent(phase, name) {
  return new RuntimeError(3400, ngDevMode && `The provided animation trigger event "${phase}" for the animation trigger "${name}" is not supported!`);
}
function unregisteredTrigger(name) {
  return new RuntimeError(3401, ngDevMode && `The provided animation trigger "${name}" has not been registered!`);
}
function triggerTransitionsFailed(errors) {
  return new RuntimeError(3402, ngDevMode && `Unable to process animations due to the following failed trigger transitions
 ${errors.map((err) => err.message).join("\n")}`);
}
function transitionFailed(name, errors) {
  return new RuntimeError(3505, ngDevMode && `@${name} has failed due to:
 ${errors.map((err) => err.message).join("\n- ")}`);
}
var ANIMATABLE_PROP_SET = /* @__PURE__ */ new Set([
  "-moz-outline-radius",
  "-moz-outline-radius-bottomleft",
  "-moz-outline-radius-bottomright",
  "-moz-outline-radius-topleft",
  "-moz-outline-radius-topright",
  "-ms-grid-columns",
  "-ms-grid-rows",
  "-webkit-line-clamp",
  "-webkit-text-fill-color",
  "-webkit-text-stroke",
  "-webkit-text-stroke-color",
  "accent-color",
  "all",
  "backdrop-filter",
  "background",
  "background-color",
  "background-position",
  "background-size",
  "block-size",
  "border",
  "border-block-end",
  "border-block-end-color",
  "border-block-end-width",
  "border-block-start",
  "border-block-start-color",
  "border-block-start-width",
  "border-bottom",
  "border-bottom-color",
  "border-bottom-left-radius",
  "border-bottom-right-radius",
  "border-bottom-width",
  "border-color",
  "border-end-end-radius",
  "border-end-start-radius",
  "border-image-outset",
  "border-image-slice",
  "border-image-width",
  "border-inline-end",
  "border-inline-end-color",
  "border-inline-end-width",
  "border-inline-start",
  "border-inline-start-color",
  "border-inline-start-width",
  "border-left",
  "border-left-color",
  "border-left-width",
  "border-radius",
  "border-right",
  "border-right-color",
  "border-right-width",
  "border-start-end-radius",
  "border-start-start-radius",
  "border-top",
  "border-top-color",
  "border-top-left-radius",
  "border-top-right-radius",
  "border-top-width",
  "border-width",
  "bottom",
  "box-shadow",
  "caret-color",
  "clip",
  "clip-path",
  "color",
  "column-count",
  "column-gap",
  "column-rule",
  "column-rule-color",
  "column-rule-width",
  "column-width",
  "columns",
  "filter",
  "flex",
  "flex-basis",
  "flex-grow",
  "flex-shrink",
  "font",
  "font-size",
  "font-size-adjust",
  "font-stretch",
  "font-variation-settings",
  "font-weight",
  "gap",
  "grid-column-gap",
  "grid-gap",
  "grid-row-gap",
  "grid-template-columns",
  "grid-template-rows",
  "height",
  "inline-size",
  "input-security",
  "inset",
  "inset-block",
  "inset-block-end",
  "inset-block-start",
  "inset-inline",
  "inset-inline-end",
  "inset-inline-start",
  "left",
  "letter-spacing",
  "line-clamp",
  "line-height",
  "margin",
  "margin-block-end",
  "margin-block-start",
  "margin-bottom",
  "margin-inline-end",
  "margin-inline-start",
  "margin-left",
  "margin-right",
  "margin-top",
  "mask",
  "mask-border",
  "mask-position",
  "mask-size",
  "max-block-size",
  "max-height",
  "max-inline-size",
  "max-lines",
  "max-width",
  "min-block-size",
  "min-height",
  "min-inline-size",
  "min-width",
  "object-position",
  "offset",
  "offset-anchor",
  "offset-distance",
  "offset-path",
  "offset-position",
  "offset-rotate",
  "opacity",
  "order",
  "outline",
  "outline-color",
  "outline-offset",
  "outline-width",
  "padding",
  "padding-block-end",
  "padding-block-start",
  "padding-bottom",
  "padding-inline-end",
  "padding-inline-start",
  "padding-left",
  "padding-right",
  "padding-top",
  "perspective",
  "perspective-origin",
  "right",
  "rotate",
  "row-gap",
  "scale",
  "scroll-margin",
  "scroll-margin-block",
  "scroll-margin-block-end",
  "scroll-margin-block-start",
  "scroll-margin-bottom",
  "scroll-margin-inline",
  "scroll-margin-inline-end",
  "scroll-margin-inline-start",
  "scroll-margin-left",
  "scroll-margin-right",
  "scroll-margin-top",
  "scroll-padding",
  "scroll-padding-block",
  "scroll-padding-block-end",
  "scroll-padding-block-start",
  "scroll-padding-bottom",
  "scroll-padding-inline",
  "scroll-padding-inline-end",
  "scroll-padding-inline-start",
  "scroll-padding-left",
  "scroll-padding-right",
  "scroll-padding-top",
  "scroll-snap-coordinate",
  "scroll-snap-destination",
  "scrollbar-color",
  "shape-image-threshold",
  "shape-margin",
  "shape-outside",
  "tab-size",
  "text-decoration",
  "text-decoration-color",
  "text-decoration-thickness",
  "text-emphasis",
  "text-emphasis-color",
  "text-indent",
  "text-shadow",
  "text-underline-offset",
  "top",
  "transform",
  "transform-origin",
  "translate",
  "vertical-align",
  "visibility",
  "width",
  "word-spacing",
  "z-index",
  "zoom"
]);
function optimizeGroupPlayer(players) {
  switch (players.length) {
    case 0:
      return new NoopAnimationPlayer();
    case 1:
      return players[0];
    default:
      return new AnimationGroupPlayer(players);
  }
}
function normalizeKeyframes$1(normalizer, keyframes, preStyles = /* @__PURE__ */ new Map(), postStyles = /* @__PURE__ */ new Map()) {
  const errors = [];
  const normalizedKeyframes = [];
  let previousOffset = -1;
  let previousKeyframe = null;
  keyframes.forEach((kf) => {
    const offset = kf.get("offset");
    const isSameOffset = offset == previousOffset;
    const normalizedKeyframe = isSameOffset && previousKeyframe || /* @__PURE__ */ new Map();
    kf.forEach((val, prop) => {
      let normalizedProp = prop;
      let normalizedValue = val;
      if (prop !== "offset") {
        normalizedProp = normalizer.normalizePropertyName(normalizedProp, errors);
        switch (normalizedValue) {
          case \u0275PRE_STYLE:
            normalizedValue = preStyles.get(prop);
            break;
          case AUTO_STYLE:
            normalizedValue = postStyles.get(prop);
            break;
          default:
            normalizedValue = normalizer.normalizeStyleValue(prop, normalizedProp, normalizedValue, errors);
            break;
        }
      }
      normalizedKeyframe.set(normalizedProp, normalizedValue);
    });
    if (!isSameOffset) {
      normalizedKeyframes.push(normalizedKeyframe);
    }
    previousKeyframe = normalizedKeyframe;
    previousOffset = offset;
  });
  if (errors.length) {
    throw animationFailed(errors);
  }
  return normalizedKeyframes;
}
function listenOnPlayer(player, eventName, event, callback) {
  switch (eventName) {
    case "start":
      player.onStart(() => callback(event && copyAnimationEvent(event, "start", player)));
      break;
    case "done":
      player.onDone(() => callback(event && copyAnimationEvent(event, "done", player)));
      break;
    case "destroy":
      player.onDestroy(() => callback(event && copyAnimationEvent(event, "destroy", player)));
      break;
  }
}
function copyAnimationEvent(e59, phaseName, player) {
  const totalTime = player.totalTime;
  const disabled = player.disabled ? true : false;
  const event = makeAnimationEvent(e59.element, e59.triggerName, e59.fromState, e59.toState, phaseName || e59.phaseName, totalTime == void 0 ? e59.totalTime : totalTime, disabled);
  const data = e59["_data"];
  if (data != null) {
    event["_data"] = data;
  }
  return event;
}
function makeAnimationEvent(element, triggerName, fromState, toState, phaseName = "", totalTime = 0, disabled) {
  return { element, triggerName, fromState, toState, phaseName, totalTime, disabled: !!disabled };
}
function getOrSetDefaultValue(map2, key, defaultValue) {
  let value = map2.get(key);
  if (!value) {
    map2.set(key, value = defaultValue);
  }
  return value;
}
function parseTimelineCommand(command) {
  const separatorPos = command.indexOf(":");
  const id = command.substring(1, separatorPos);
  const action = command.slice(separatorPos + 1);
  return [id, action];
}
var documentElement = /* @__PURE__ */ (() => typeof document === "undefined" ? null : document.documentElement)();
function getParentElement(element) {
  const parent = element.parentNode || element.host || null;
  if (parent === documentElement) {
    return null;
  }
  return parent;
}
function containsVendorPrefix(prop) {
  return prop.substring(1, 6) == "ebkit";
}
var _CACHED_BODY = null;
var _IS_WEBKIT = false;
function validateStyleProperty(prop) {
  if (!_CACHED_BODY) {
    _CACHED_BODY = getBodyNode() || {};
    _IS_WEBKIT = _CACHED_BODY.style ? "WebkitAppearance" in _CACHED_BODY.style : false;
  }
  let result = true;
  if (_CACHED_BODY.style && !containsVendorPrefix(prop)) {
    result = prop in _CACHED_BODY.style;
    if (!result && _IS_WEBKIT) {
      const camelProp = "Webkit" + prop.charAt(0).toUpperCase() + prop.slice(1);
      result = camelProp in _CACHED_BODY.style;
    }
  }
  return result;
}
function validateWebAnimatableStyleProperty(prop) {
  return ANIMATABLE_PROP_SET.has(prop);
}
function getBodyNode() {
  if (typeof document != "undefined") {
    return document.body;
  }
  return null;
}
function containsElement(elm1, elm2) {
  while (elm2) {
    if (elm2 === elm1) {
      return true;
    }
    elm2 = getParentElement(elm2);
  }
  return false;
}
function invokeQuery(element, selector, multi) {
  if (multi) {
    return Array.from(element.querySelectorAll(selector));
  }
  const elem = element.querySelector(selector);
  return elem ? [elem] : [];
}
var ONE_SECOND = 1e3;
var SUBSTITUTION_EXPR_START = "{{";
var SUBSTITUTION_EXPR_END = "}}";
var ENTER_CLASSNAME = "ng-enter";
var LEAVE_CLASSNAME = "ng-leave";
var NG_TRIGGER_CLASSNAME = "ng-trigger";
var NG_TRIGGER_SELECTOR = ".ng-trigger";
var NG_ANIMATING_CLASSNAME = "ng-animating";
var NG_ANIMATING_SELECTOR = ".ng-animating";
function resolveTimingValue(value) {
  if (typeof value == "number")
    return value;
  const matches = value.match(/^(-?[\.\d]+)(m?s)/);
  if (!matches || matches.length < 2)
    return 0;
  return _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
}
function _convertTimeValueToMS(value, unit) {
  switch (unit) {
    case "s":
      return value * ONE_SECOND;
    default:
      return value;
  }
}
function resolveTiming(timings, errors, allowNegativeValues) {
  return timings.hasOwnProperty("duration") ? timings : parseTimeExpression(timings, errors, allowNegativeValues);
}
var PARSE_TIME_EXPRESSION_REGEX = /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;
function parseTimeExpression(exp, errors, allowNegativeValues) {
  let duration;
  let delay = 0;
  let easing = "";
  if (typeof exp === "string") {
    const matches = exp.match(PARSE_TIME_EXPRESSION_REGEX);
    if (matches === null) {
      errors.push(invalidTimingValue(exp));
      return { duration: 0, delay: 0, easing: "" };
    }
    duration = _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
    const delayMatch = matches[3];
    if (delayMatch != null) {
      delay = _convertTimeValueToMS(parseFloat(delayMatch), matches[4]);
    }
    const easingVal = matches[5];
    if (easingVal) {
      easing = easingVal;
    }
  } else {
    duration = exp;
  }
  if (!allowNegativeValues) {
    let containsErrors = false;
    let startIndex = errors.length;
    if (duration < 0) {
      errors.push(negativeStepValue());
      containsErrors = true;
    }
    if (delay < 0) {
      errors.push(negativeDelayValue());
      containsErrors = true;
    }
    if (containsErrors) {
      errors.splice(startIndex, 0, invalidTimingValue(exp));
    }
  }
  return { duration, delay, easing };
}
function normalizeKeyframes(keyframes) {
  if (!keyframes.length) {
    return [];
  }
  if (keyframes[0] instanceof Map) {
    return keyframes;
  }
  return keyframes.map((kf) => new Map(Object.entries(kf)));
}
function setStyles(element, styles, formerStyles) {
  styles.forEach((val, prop) => {
    const camelProp = dashCaseToCamelCase(prop);
    if (formerStyles && !formerStyles.has(prop)) {
      formerStyles.set(prop, element.style[camelProp]);
    }
    element.style[camelProp] = val;
  });
}
function eraseStyles(element, styles) {
  styles.forEach((_, prop) => {
    const camelProp = dashCaseToCamelCase(prop);
    element.style[camelProp] = "";
  });
}
function normalizeAnimationEntry(steps) {
  if (Array.isArray(steps)) {
    if (steps.length == 1)
      return steps[0];
    return sequence(steps);
  }
  return steps;
}
function validateStyleParams(value, options, errors) {
  const params = options.params || {};
  const matches = extractStyleParams(value);
  if (matches.length) {
    matches.forEach((varName) => {
      if (!params.hasOwnProperty(varName)) {
        errors.push(invalidStyleParams(varName));
      }
    });
  }
}
var PARAM_REGEX = /* @__PURE__ */ new RegExp(`${SUBSTITUTION_EXPR_START}\\s*(.+?)\\s*${SUBSTITUTION_EXPR_END}`, "g");
function extractStyleParams(value) {
  let params = [];
  if (typeof value === "string") {
    let match2;
    while (match2 = PARAM_REGEX.exec(value)) {
      params.push(match2[1]);
    }
    PARAM_REGEX.lastIndex = 0;
  }
  return params;
}
function interpolateParams(value, params, errors) {
  const original = `${value}`;
  const str = original.replace(PARAM_REGEX, (_, varName) => {
    let localVal = params[varName];
    if (localVal == null) {
      errors.push(invalidParamValue(varName));
      localVal = "";
    }
    return localVal.toString();
  });
  return str == original ? value : str;
}
var DASH_CASE_REGEXP = /-+([a-z0-9])/g;
function dashCaseToCamelCase(input2) {
  return input2.replace(DASH_CASE_REGEXP, (...m5) => m5[1].toUpperCase());
}
function camelCaseToDashCase(input2) {
  return input2.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function allowPreviousPlayerStylesMerge(duration, delay) {
  return duration === 0 || delay === 0;
}
function balancePreviousStylesIntoKeyframes(element, keyframes, previousStyles) {
  if (previousStyles.size && keyframes.length) {
    let startingKeyframe = keyframes[0];
    let missingStyleProps = [];
    previousStyles.forEach((val, prop) => {
      if (!startingKeyframe.has(prop)) {
        missingStyleProps.push(prop);
      }
      startingKeyframe.set(prop, val);
    });
    if (missingStyleProps.length) {
      for (let i29 = 1; i29 < keyframes.length; i29++) {
        let kf = keyframes[i29];
        missingStyleProps.forEach((prop) => kf.set(prop, computeStyle(element, prop)));
      }
    }
  }
  return keyframes;
}
function visitDslNode(visitor, node, context) {
  switch (node.type) {
    case AnimationMetadataType.Trigger:
      return visitor.visitTrigger(node, context);
    case AnimationMetadataType.State:
      return visitor.visitState(node, context);
    case AnimationMetadataType.Transition:
      return visitor.visitTransition(node, context);
    case AnimationMetadataType.Sequence:
      return visitor.visitSequence(node, context);
    case AnimationMetadataType.Group:
      return visitor.visitGroup(node, context);
    case AnimationMetadataType.Animate:
      return visitor.visitAnimate(node, context);
    case AnimationMetadataType.Keyframes:
      return visitor.visitKeyframes(node, context);
    case AnimationMetadataType.Style:
      return visitor.visitStyle(node, context);
    case AnimationMetadataType.Reference:
      return visitor.visitReference(node, context);
    case AnimationMetadataType.AnimateChild:
      return visitor.visitAnimateChild(node, context);
    case AnimationMetadataType.AnimateRef:
      return visitor.visitAnimateRef(node, context);
    case AnimationMetadataType.Query:
      return visitor.visitQuery(node, context);
    case AnimationMetadataType.Stagger:
      return visitor.visitStagger(node, context);
    default:
      throw invalidNodeType(node.type);
  }
}
function computeStyle(element, prop) {
  return window.getComputedStyle(element)[prop];
}

// node_modules/@angular/animations/fesm2022/browser.mjs
var NoopAnimationDriver = class _NoopAnimationDriver {
  /**
   * @returns Whether `prop` is a valid CSS property
   */
  validateStyleProperty(prop) {
    return validateStyleProperty(prop);
  }
  /**
   *
   * @returns Whether elm1 contains elm2.
   */
  containsElement(elm1, elm2) {
    return containsElement(elm1, elm2);
  }
  /**
   * @returns Rhe parent of the given element or `null` if the element is the `document`
   */
  getParentElement(element) {
    return getParentElement(element);
  }
  /**
   * @returns The result of the query selector on the element. The array will contain up to 1 item
   *     if `multi` is  `false`.
   */
  query(element, selector, multi) {
    return invokeQuery(element, selector, multi);
  }
  /**
   * @returns The `defaultValue` or empty string
   */
  computeStyle(element, prop, defaultValue) {
    return defaultValue || "";
  }
  /**
   * @returns An `NoopAnimationPlayer`
   */
  animate(element, keyframes, duration, delay, easing, previousPlayers = [], scrubberAccessRequested) {
    return new NoopAnimationPlayer(duration, delay);
  }
  static \u0275fac = function NoopAnimationDriver_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoopAnimationDriver)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NoopAnimationDriver,
    factory: _NoopAnimationDriver.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoopAnimationDriver, [{
    type: Injectable
  }], null, null);
})();
var AnimationDriver = class {
  /**
   * @deprecated Use the NoopAnimationDriver class.
   */
  static NOOP = new NoopAnimationDriver();
};
var AnimationStyleNormalizer = class {
};
var DIMENSIONAL_PROP_SET = /* @__PURE__ */ new Set(["width", "height", "minWidth", "minHeight", "maxWidth", "maxHeight", "left", "top", "bottom", "right", "fontSize", "outlineWidth", "outlineOffset", "paddingTop", "paddingLeft", "paddingBottom", "paddingRight", "marginTop", "marginLeft", "marginBottom", "marginRight", "borderRadius", "borderWidth", "borderTopWidth", "borderLeftWidth", "borderRightWidth", "borderBottomWidth", "textIndent", "perspective"]);
var WebAnimationsStyleNormalizer = class extends AnimationStyleNormalizer {
  normalizePropertyName(propertyName, errors) {
    return dashCaseToCamelCase(propertyName);
  }
  normalizeStyleValue(userProvidedProperty, normalizedProperty, value, errors) {
    let unit = "";
    const strVal = value.toString().trim();
    if (DIMENSIONAL_PROP_SET.has(normalizedProperty) && value !== 0 && value !== "0") {
      if (typeof value === "number") {
        unit = "px";
      } else {
        const valAndSuffixMatch = value.match(/^[+-]?[\d\.]+([a-z]*)$/);
        if (valAndSuffixMatch && valAndSuffixMatch[1].length == 0) {
          errors.push(invalidCssUnitValue(userProvidedProperty, value));
        }
      }
    }
    return strVal + unit;
  }
};
function createListOfWarnings(warnings) {
  const LINE_START2 = "\n - ";
  return `${LINE_START2}${warnings.filter(Boolean).map((warning) => warning).join(LINE_START2)}`;
}
function warnTriggerBuild(name, warnings) {
  console.warn(`The animation trigger "${name}" has built with the following warnings:${createListOfWarnings(warnings)}`);
}
function warnRegister(warnings) {
  console.warn(`Animation built with the following warnings:${createListOfWarnings(warnings)}`);
}
function pushUnrecognizedPropertiesWarning(warnings, props) {
  if (props.length) {
    warnings.push(`The following provided properties are not recognized: ${props.join(", ")}`);
  }
}
var ANY_STATE = "*";
function parseTransitionExpr(transitionValue, errors) {
  const expressions = [];
  if (typeof transitionValue == "string") {
    transitionValue.split(/\s*,\s*/).forEach((str) => parseInnerTransitionStr(str, expressions, errors));
  } else {
    expressions.push(transitionValue);
  }
  return expressions;
}
function parseInnerTransitionStr(eventStr, expressions, errors) {
  if (eventStr[0] == ":") {
    const result = parseAnimationAlias(eventStr, errors);
    if (typeof result == "function") {
      expressions.push(result);
      return;
    }
    eventStr = result;
  }
  const match2 = eventStr.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
  if (match2 == null || match2.length < 4) {
    errors.push(invalidExpression(eventStr));
    return expressions;
  }
  const fromState = match2[1];
  const separator = match2[2];
  const toState = match2[3];
  expressions.push(makeLambdaFromStates(fromState, toState));
  const isFullAnyStateExpr = fromState == ANY_STATE && toState == ANY_STATE;
  if (separator[0] == "<" && !isFullAnyStateExpr) {
    expressions.push(makeLambdaFromStates(toState, fromState));
  }
  return;
}
function parseAnimationAlias(alias, errors) {
  switch (alias) {
    case ":enter":
      return "void => *";
    case ":leave":
      return "* => void";
    case ":increment":
      return (fromState, toState) => parseFloat(toState) > parseFloat(fromState);
    case ":decrement":
      return (fromState, toState) => parseFloat(toState) < parseFloat(fromState);
    default:
      errors.push(invalidTransitionAlias(alias));
      return "* => *";
  }
}
var TRUE_BOOLEAN_VALUES = /* @__PURE__ */ new Set(["true", "1"]);
var FALSE_BOOLEAN_VALUES = /* @__PURE__ */ new Set(["false", "0"]);
function makeLambdaFromStates(lhs, rhs) {
  const LHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(lhs) || FALSE_BOOLEAN_VALUES.has(lhs);
  const RHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(rhs) || FALSE_BOOLEAN_VALUES.has(rhs);
  return (fromState, toState) => {
    let lhsMatch = lhs == ANY_STATE || lhs == fromState;
    let rhsMatch = rhs == ANY_STATE || rhs == toState;
    if (!lhsMatch && LHS_MATCH_BOOLEAN && typeof fromState === "boolean") {
      lhsMatch = fromState ? TRUE_BOOLEAN_VALUES.has(lhs) : FALSE_BOOLEAN_VALUES.has(lhs);
    }
    if (!rhsMatch && RHS_MATCH_BOOLEAN && typeof toState === "boolean") {
      rhsMatch = toState ? TRUE_BOOLEAN_VALUES.has(rhs) : FALSE_BOOLEAN_VALUES.has(rhs);
    }
    return lhsMatch && rhsMatch;
  };
}
var SELF_TOKEN = ":self";
var SELF_TOKEN_REGEX = /* @__PURE__ */ new RegExp(`s*${SELF_TOKEN}s*,?`, "g");
function buildAnimationAst(driver, metadata, errors, warnings) {
  return new AnimationAstBuilderVisitor(driver).build(metadata, errors, warnings);
}
var ROOT_SELECTOR = "";
var AnimationAstBuilderVisitor = class {
  _driver;
  constructor(_driver) {
    this._driver = _driver;
  }
  build(metadata, errors, warnings) {
    const context = new AnimationAstBuilderContext(errors);
    this._resetContextStyleTimingState(context);
    const ast = visitDslNode(this, normalizeAnimationEntry(metadata), context);
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (context.unsupportedCSSPropertiesFound.size) {
        pushUnrecognizedPropertiesWarning(warnings, [...context.unsupportedCSSPropertiesFound.keys()]);
      }
    }
    return ast;
  }
  _resetContextStyleTimingState(context) {
    context.currentQuerySelector = ROOT_SELECTOR;
    context.collectedStyles = /* @__PURE__ */ new Map();
    context.collectedStyles.set(ROOT_SELECTOR, /* @__PURE__ */ new Map());
    context.currentTime = 0;
  }
  visitTrigger(metadata, context) {
    let queryCount = context.queryCount = 0;
    let depCount = context.depCount = 0;
    const states = [];
    const transitions = [];
    if (metadata.name.charAt(0) == "@") {
      context.errors.push(invalidTrigger());
    }
    metadata.definitions.forEach((def) => {
      this._resetContextStyleTimingState(context);
      if (def.type == AnimationMetadataType.State) {
        const stateDef = def;
        const name = stateDef.name;
        name.toString().split(/\s*,\s*/).forEach((n39) => {
          stateDef.name = n39;
          states.push(this.visitState(stateDef, context));
        });
        stateDef.name = name;
      } else if (def.type == AnimationMetadataType.Transition) {
        const transition = this.visitTransition(def, context);
        queryCount += transition.queryCount;
        depCount += transition.depCount;
        transitions.push(transition);
      } else {
        context.errors.push(invalidDefinition());
      }
    });
    return {
      type: AnimationMetadataType.Trigger,
      name: metadata.name,
      states,
      transitions,
      queryCount,
      depCount,
      options: null
    };
  }
  visitState(metadata, context) {
    const styleAst = this.visitStyle(metadata.styles, context);
    const astParams = metadata.options && metadata.options.params || null;
    if (styleAst.containsDynamicStyles) {
      const missingSubs = /* @__PURE__ */ new Set();
      const params = astParams || {};
      styleAst.styles.forEach((style6) => {
        if (style6 instanceof Map) {
          style6.forEach((value) => {
            extractStyleParams(value).forEach((sub) => {
              if (!params.hasOwnProperty(sub)) {
                missingSubs.add(sub);
              }
            });
          });
        }
      });
      if (missingSubs.size) {
        context.errors.push(invalidState(metadata.name, [...missingSubs.values()]));
      }
    }
    return {
      type: AnimationMetadataType.State,
      name: metadata.name,
      style: styleAst,
      options: astParams ? {
        params: astParams
      } : null
    };
  }
  visitTransition(metadata, context) {
    context.queryCount = 0;
    context.depCount = 0;
    const animation = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
    const matchers = parseTransitionExpr(metadata.expr, context.errors);
    return {
      type: AnimationMetadataType.Transition,
      matchers,
      animation,
      queryCount: context.queryCount,
      depCount: context.depCount,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitSequence(metadata, context) {
    return {
      type: AnimationMetadataType.Sequence,
      steps: metadata.steps.map((s12) => visitDslNode(this, s12, context)),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitGroup(metadata, context) {
    const currentTime = context.currentTime;
    let furthestTime = 0;
    const steps = metadata.steps.map((step) => {
      context.currentTime = currentTime;
      const innerAst = visitDslNode(this, step, context);
      furthestTime = Math.max(furthestTime, context.currentTime);
      return innerAst;
    });
    context.currentTime = furthestTime;
    return {
      type: AnimationMetadataType.Group,
      steps,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimate(metadata, context) {
    const timingAst = constructTimingAst(metadata.timings, context.errors);
    context.currentAnimateTimings = timingAst;
    let styleAst;
    let styleMetadata = metadata.styles ? metadata.styles : style({});
    if (styleMetadata.type == AnimationMetadataType.Keyframes) {
      styleAst = this.visitKeyframes(styleMetadata, context);
    } else {
      let styleMetadata2 = metadata.styles;
      let isEmpty = false;
      if (!styleMetadata2) {
        isEmpty = true;
        const newStyleData = {};
        if (timingAst.easing) {
          newStyleData["easing"] = timingAst.easing;
        }
        styleMetadata2 = style(newStyleData);
      }
      context.currentTime += timingAst.duration + timingAst.delay;
      const _styleAst = this.visitStyle(styleMetadata2, context);
      _styleAst.isEmptyStep = isEmpty;
      styleAst = _styleAst;
    }
    context.currentAnimateTimings = null;
    return {
      type: AnimationMetadataType.Animate,
      timings: timingAst,
      style: styleAst,
      options: null
    };
  }
  visitStyle(metadata, context) {
    const ast = this._makeStyleAst(metadata, context);
    this._validateStyleAst(ast, context);
    return ast;
  }
  _makeStyleAst(metadata, context) {
    const styles = [];
    const metadataStyles = Array.isArray(metadata.styles) ? metadata.styles : [metadata.styles];
    for (let styleTuple of metadataStyles) {
      if (typeof styleTuple === "string") {
        if (styleTuple === AUTO_STYLE) {
          styles.push(styleTuple);
        } else {
          context.errors.push(invalidStyleValue(styleTuple));
        }
      } else {
        styles.push(new Map(Object.entries(styleTuple)));
      }
    }
    let containsDynamicStyles = false;
    let collectedEasing = null;
    styles.forEach((styleData) => {
      if (styleData instanceof Map) {
        if (styleData.has("easing")) {
          collectedEasing = styleData.get("easing");
          styleData.delete("easing");
        }
        if (!containsDynamicStyles) {
          for (let value of styleData.values()) {
            if (value.toString().indexOf(SUBSTITUTION_EXPR_START) >= 0) {
              containsDynamicStyles = true;
              break;
            }
          }
        }
      }
    });
    return {
      type: AnimationMetadataType.Style,
      styles,
      easing: collectedEasing,
      offset: metadata.offset,
      containsDynamicStyles,
      options: null
    };
  }
  _validateStyleAst(ast, context) {
    const timings = context.currentAnimateTimings;
    let endTime = context.currentTime;
    let startTime = context.currentTime;
    if (timings && startTime > 0) {
      startTime -= timings.duration + timings.delay;
    }
    ast.styles.forEach((tuple) => {
      if (typeof tuple === "string") return;
      tuple.forEach((value, prop) => {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          if (!this._driver.validateStyleProperty(prop)) {
            tuple.delete(prop);
            context.unsupportedCSSPropertiesFound.add(prop);
            return;
          }
        }
        const collectedStyles = context.collectedStyles.get(context.currentQuerySelector);
        const collectedEntry = collectedStyles.get(prop);
        let updateCollectedStyle = true;
        if (collectedEntry) {
          if (startTime != endTime && startTime >= collectedEntry.startTime && endTime <= collectedEntry.endTime) {
            context.errors.push(invalidParallelAnimation(prop, collectedEntry.startTime, collectedEntry.endTime, startTime, endTime));
            updateCollectedStyle = false;
          }
          startTime = collectedEntry.startTime;
        }
        if (updateCollectedStyle) {
          collectedStyles.set(prop, {
            startTime,
            endTime
          });
        }
        if (context.options) {
          validateStyleParams(value, context.options, context.errors);
        }
      });
    });
  }
  visitKeyframes(metadata, context) {
    const ast = {
      type: AnimationMetadataType.Keyframes,
      styles: [],
      options: null
    };
    if (!context.currentAnimateTimings) {
      context.errors.push(invalidKeyframes());
      return ast;
    }
    const MAX_KEYFRAME_OFFSET = 1;
    let totalKeyframesWithOffsets = 0;
    const offsets = [];
    let offsetsOutOfOrder = false;
    let keyframesOutOfRange = false;
    let previousOffset = 0;
    const keyframes = metadata.steps.map((styles) => {
      const style6 = this._makeStyleAst(styles, context);
      let offsetVal = style6.offset != null ? style6.offset : consumeOffset(style6.styles);
      let offset = 0;
      if (offsetVal != null) {
        totalKeyframesWithOffsets++;
        offset = style6.offset = offsetVal;
      }
      keyframesOutOfRange = keyframesOutOfRange || offset < 0 || offset > 1;
      offsetsOutOfOrder = offsetsOutOfOrder || offset < previousOffset;
      previousOffset = offset;
      offsets.push(offset);
      return style6;
    });
    if (keyframesOutOfRange) {
      context.errors.push(invalidOffset());
    }
    if (offsetsOutOfOrder) {
      context.errors.push(keyframeOffsetsOutOfOrder());
    }
    const length = metadata.steps.length;
    let generatedOffset = 0;
    if (totalKeyframesWithOffsets > 0 && totalKeyframesWithOffsets < length) {
      context.errors.push(keyframesMissingOffsets());
    } else if (totalKeyframesWithOffsets == 0) {
      generatedOffset = MAX_KEYFRAME_OFFSET / (length - 1);
    }
    const limit = length - 1;
    const currentTime = context.currentTime;
    const currentAnimateTimings = context.currentAnimateTimings;
    const animateDuration = currentAnimateTimings.duration;
    keyframes.forEach((kf, i29) => {
      const offset = generatedOffset > 0 ? i29 == limit ? 1 : generatedOffset * i29 : offsets[i29];
      const durationUpToThisFrame = offset * animateDuration;
      context.currentTime = currentTime + currentAnimateTimings.delay + durationUpToThisFrame;
      currentAnimateTimings.duration = durationUpToThisFrame;
      this._validateStyleAst(kf, context);
      kf.offset = offset;
      ast.styles.push(kf);
    });
    return ast;
  }
  visitReference(metadata, context) {
    return {
      type: AnimationMetadataType.Reference,
      animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimateChild(metadata, context) {
    context.depCount++;
    return {
      type: AnimationMetadataType.AnimateChild,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimateRef(metadata, context) {
    return {
      type: AnimationMetadataType.AnimateRef,
      animation: this.visitReference(metadata.animation, context),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitQuery(metadata, context) {
    const parentSelector = context.currentQuerySelector;
    const options = metadata.options || {};
    context.queryCount++;
    context.currentQuery = metadata;
    const [selector, includeSelf] = normalizeSelector(metadata.selector);
    context.currentQuerySelector = parentSelector.length ? parentSelector + " " + selector : selector;
    getOrSetDefaultValue(context.collectedStyles, context.currentQuerySelector, /* @__PURE__ */ new Map());
    const animation = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
    context.currentQuery = null;
    context.currentQuerySelector = parentSelector;
    return {
      type: AnimationMetadataType.Query,
      selector,
      limit: options.limit || 0,
      optional: !!options.optional,
      includeSelf,
      animation,
      originalSelector: metadata.selector,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitStagger(metadata, context) {
    if (!context.currentQuery) {
      context.errors.push(invalidStagger());
    }
    const timings = metadata.timings === "full" ? {
      duration: 0,
      delay: 0,
      easing: "full"
    } : resolveTiming(metadata.timings, context.errors, true);
    return {
      type: AnimationMetadataType.Stagger,
      animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context),
      timings,
      options: null
    };
  }
};
function normalizeSelector(selector) {
  const hasAmpersand = selector.split(/\s*,\s*/).find((token) => token == SELF_TOKEN) ? true : false;
  if (hasAmpersand) {
    selector = selector.replace(SELF_TOKEN_REGEX, "");
  }
  selector = selector.replace(/@\*/g, NG_TRIGGER_SELECTOR).replace(/@\w+/g, (match2) => NG_TRIGGER_SELECTOR + "-" + match2.slice(1)).replace(/:animating/g, NG_ANIMATING_SELECTOR);
  return [selector, hasAmpersand];
}
function normalizeParams(obj) {
  return obj ? __spreadValues({}, obj) : null;
}
var AnimationAstBuilderContext = class {
  errors;
  queryCount = 0;
  depCount = 0;
  currentTransition = null;
  currentQuery = null;
  currentQuerySelector = null;
  currentAnimateTimings = null;
  currentTime = 0;
  collectedStyles = /* @__PURE__ */ new Map();
  options = null;
  unsupportedCSSPropertiesFound = /* @__PURE__ */ new Set();
  constructor(errors) {
    this.errors = errors;
  }
};
function consumeOffset(styles) {
  if (typeof styles == "string") return null;
  let offset = null;
  if (Array.isArray(styles)) {
    styles.forEach((styleTuple) => {
      if (styleTuple instanceof Map && styleTuple.has("offset")) {
        const obj = styleTuple;
        offset = parseFloat(obj.get("offset"));
        obj.delete("offset");
      }
    });
  } else if (styles instanceof Map && styles.has("offset")) {
    const obj = styles;
    offset = parseFloat(obj.get("offset"));
    obj.delete("offset");
  }
  return offset;
}
function constructTimingAst(value, errors) {
  if (value.hasOwnProperty("duration")) {
    return value;
  }
  if (typeof value == "number") {
    const duration = resolveTiming(value, errors).duration;
    return makeTimingAst(duration, 0, "");
  }
  const strValue = value;
  const isDynamic = strValue.split(/\s+/).some((v3) => v3.charAt(0) == "{" && v3.charAt(1) == "{");
  if (isDynamic) {
    const ast = makeTimingAst(0, 0, "");
    ast.dynamic = true;
    ast.strValue = strValue;
    return ast;
  }
  const timings = resolveTiming(strValue, errors);
  return makeTimingAst(timings.duration, timings.delay, timings.easing);
}
function normalizeAnimationOptions(options) {
  if (options) {
    options = __spreadValues({}, options);
    if (options["params"]) {
      options["params"] = normalizeParams(options["params"]);
    }
  } else {
    options = {};
  }
  return options;
}
function makeTimingAst(duration, delay, easing) {
  return {
    duration,
    delay,
    easing
  };
}
function createTimelineInstruction(element, keyframes, preStyleProps, postStyleProps, duration, delay, easing = null, subTimeline = false) {
  return {
    type: 1,
    element,
    keyframes,
    preStyleProps,
    postStyleProps,
    duration,
    delay,
    totalTime: duration + delay,
    easing,
    subTimeline
  };
}
var ElementInstructionMap = class {
  _map = /* @__PURE__ */ new Map();
  get(element) {
    return this._map.get(element) || [];
  }
  append(element, instructions) {
    let existingInstructions = this._map.get(element);
    if (!existingInstructions) {
      this._map.set(element, existingInstructions = []);
    }
    existingInstructions.push(...instructions);
  }
  has(element) {
    return this._map.has(element);
  }
  clear() {
    this._map.clear();
  }
};
var ONE_FRAME_IN_MILLISECONDS = 1;
var ENTER_TOKEN = ":enter";
var ENTER_TOKEN_REGEX = /* @__PURE__ */ new RegExp(ENTER_TOKEN, "g");
var LEAVE_TOKEN = ":leave";
var LEAVE_TOKEN_REGEX = /* @__PURE__ */ new RegExp(LEAVE_TOKEN, "g");
function buildAnimationTimelines(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles = /* @__PURE__ */ new Map(), finalStyles = /* @__PURE__ */ new Map(), options, subInstructions, errors = []) {
  return new AnimationTimelineBuilderVisitor().buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options, subInstructions, errors);
}
var AnimationTimelineBuilderVisitor = class {
  buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options, subInstructions, errors = []) {
    subInstructions = subInstructions || new ElementInstructionMap();
    const context = new AnimationTimelineContext(driver, rootElement, subInstructions, enterClassName, leaveClassName, errors, []);
    context.options = options;
    const delay = options.delay ? resolveTimingValue(options.delay) : 0;
    context.currentTimeline.delayNextStep(delay);
    context.currentTimeline.setStyles([startingStyles], null, context.errors, options);
    visitDslNode(this, ast, context);
    const timelines = context.timelines.filter((timeline) => timeline.containsAnimation());
    if (timelines.length && finalStyles.size) {
      let lastRootTimeline;
      for (let i29 = timelines.length - 1; i29 >= 0; i29--) {
        const timeline = timelines[i29];
        if (timeline.element === rootElement) {
          lastRootTimeline = timeline;
          break;
        }
      }
      if (lastRootTimeline && !lastRootTimeline.allowOnlyTimelineStyles()) {
        lastRootTimeline.setStyles([finalStyles], null, context.errors, options);
      }
    }
    return timelines.length ? timelines.map((timeline) => timeline.buildKeyframes()) : [createTimelineInstruction(rootElement, [], [], [], 0, delay, "", false)];
  }
  visitTrigger(ast, context) {
  }
  visitState(ast, context) {
  }
  visitTransition(ast, context) {
  }
  visitAnimateChild(ast, context) {
    const elementInstructions = context.subInstructions.get(context.element);
    if (elementInstructions) {
      const innerContext = context.createSubContext(ast.options);
      const startTime = context.currentTimeline.currentTime;
      const endTime = this._visitSubInstructions(elementInstructions, innerContext, innerContext.options);
      if (startTime != endTime) {
        context.transformIntoNewTimeline(endTime);
      }
    }
    context.previousNode = ast;
  }
  visitAnimateRef(ast, context) {
    const innerContext = context.createSubContext(ast.options);
    innerContext.transformIntoNewTimeline();
    this._applyAnimationRefDelays([ast.options, ast.animation.options], context, innerContext);
    this.visitReference(ast.animation, innerContext);
    context.transformIntoNewTimeline(innerContext.currentTimeline.currentTime);
    context.previousNode = ast;
  }
  _applyAnimationRefDelays(animationsRefsOptions, context, innerContext) {
    for (const animationRefOptions of animationsRefsOptions) {
      const animationDelay = animationRefOptions?.delay;
      if (animationDelay) {
        const animationDelayValue = typeof animationDelay === "number" ? animationDelay : resolveTimingValue(interpolateParams(animationDelay, animationRefOptions?.params ?? {}, context.errors));
        innerContext.delayNextStep(animationDelayValue);
      }
    }
  }
  _visitSubInstructions(instructions, context, options) {
    const startTime = context.currentTimeline.currentTime;
    let furthestTime = startTime;
    const duration = options.duration != null ? resolveTimingValue(options.duration) : null;
    const delay = options.delay != null ? resolveTimingValue(options.delay) : null;
    if (duration !== 0) {
      instructions.forEach((instruction) => {
        const instructionTimings = context.appendInstructionToTimeline(instruction, duration, delay);
        furthestTime = Math.max(furthestTime, instructionTimings.duration + instructionTimings.delay);
      });
    }
    return furthestTime;
  }
  visitReference(ast, context) {
    context.updateOptions(ast.options, true);
    visitDslNode(this, ast.animation, context);
    context.previousNode = ast;
  }
  visitSequence(ast, context) {
    const subContextCount = context.subContextCount;
    let ctx = context;
    const options = ast.options;
    if (options && (options.params || options.delay)) {
      ctx = context.createSubContext(options);
      ctx.transformIntoNewTimeline();
      if (options.delay != null) {
        if (ctx.previousNode.type == AnimationMetadataType.Style) {
          ctx.currentTimeline.snapshotCurrentStyles();
          ctx.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
        }
        const delay = resolveTimingValue(options.delay);
        ctx.delayNextStep(delay);
      }
    }
    if (ast.steps.length) {
      ast.steps.forEach((s12) => visitDslNode(this, s12, ctx));
      ctx.currentTimeline.applyStylesToKeyframe();
      if (ctx.subContextCount > subContextCount) {
        ctx.transformIntoNewTimeline();
      }
    }
    context.previousNode = ast;
  }
  visitGroup(ast, context) {
    const innerTimelines = [];
    let furthestTime = context.currentTimeline.currentTime;
    const delay = ast.options && ast.options.delay ? resolveTimingValue(ast.options.delay) : 0;
    ast.steps.forEach((s12) => {
      const innerContext = context.createSubContext(ast.options);
      if (delay) {
        innerContext.delayNextStep(delay);
      }
      visitDslNode(this, s12, innerContext);
      furthestTime = Math.max(furthestTime, innerContext.currentTimeline.currentTime);
      innerTimelines.push(innerContext.currentTimeline);
    });
    innerTimelines.forEach((timeline) => context.currentTimeline.mergeTimelineCollectedStyles(timeline));
    context.transformIntoNewTimeline(furthestTime);
    context.previousNode = ast;
  }
  _visitTiming(ast, context) {
    if (ast.dynamic) {
      const strValue = ast.strValue;
      const timingValue = context.params ? interpolateParams(strValue, context.params, context.errors) : strValue;
      return resolveTiming(timingValue, context.errors);
    } else {
      return {
        duration: ast.duration,
        delay: ast.delay,
        easing: ast.easing
      };
    }
  }
  visitAnimate(ast, context) {
    const timings = context.currentAnimateTimings = this._visitTiming(ast.timings, context);
    const timeline = context.currentTimeline;
    if (timings.delay) {
      context.incrementTime(timings.delay);
      timeline.snapshotCurrentStyles();
    }
    const style6 = ast.style;
    if (style6.type == AnimationMetadataType.Keyframes) {
      this.visitKeyframes(style6, context);
    } else {
      context.incrementTime(timings.duration);
      this.visitStyle(style6, context);
      timeline.applyStylesToKeyframe();
    }
    context.currentAnimateTimings = null;
    context.previousNode = ast;
  }
  visitStyle(ast, context) {
    const timeline = context.currentTimeline;
    const timings = context.currentAnimateTimings;
    if (!timings && timeline.hasCurrentStyleProperties()) {
      timeline.forwardFrame();
    }
    const easing = timings && timings.easing || ast.easing;
    if (ast.isEmptyStep) {
      timeline.applyEmptyStep(easing);
    } else {
      timeline.setStyles(ast.styles, easing, context.errors, context.options);
    }
    context.previousNode = ast;
  }
  visitKeyframes(ast, context) {
    const currentAnimateTimings = context.currentAnimateTimings;
    const startTime = context.currentTimeline.duration;
    const duration = currentAnimateTimings.duration;
    const innerContext = context.createSubContext();
    const innerTimeline = innerContext.currentTimeline;
    innerTimeline.easing = currentAnimateTimings.easing;
    ast.styles.forEach((step) => {
      const offset = step.offset || 0;
      innerTimeline.forwardTime(offset * duration);
      innerTimeline.setStyles(step.styles, step.easing, context.errors, context.options);
      innerTimeline.applyStylesToKeyframe();
    });
    context.currentTimeline.mergeTimelineCollectedStyles(innerTimeline);
    context.transformIntoNewTimeline(startTime + duration);
    context.previousNode = ast;
  }
  visitQuery(ast, context) {
    const startTime = context.currentTimeline.currentTime;
    const options = ast.options || {};
    const delay = options.delay ? resolveTimingValue(options.delay) : 0;
    if (delay && (context.previousNode.type === AnimationMetadataType.Style || startTime == 0 && context.currentTimeline.hasCurrentStyleProperties())) {
      context.currentTimeline.snapshotCurrentStyles();
      context.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
    }
    let furthestTime = startTime;
    const elms = context.invokeQuery(ast.selector, ast.originalSelector, ast.limit, ast.includeSelf, options.optional ? true : false, context.errors);
    context.currentQueryTotal = elms.length;
    let sameElementTimeline = null;
    elms.forEach((element, i29) => {
      context.currentQueryIndex = i29;
      const innerContext = context.createSubContext(ast.options, element);
      if (delay) {
        innerContext.delayNextStep(delay);
      }
      if (element === context.element) {
        sameElementTimeline = innerContext.currentTimeline;
      }
      visitDslNode(this, ast.animation, innerContext);
      innerContext.currentTimeline.applyStylesToKeyframe();
      const endTime = innerContext.currentTimeline.currentTime;
      furthestTime = Math.max(furthestTime, endTime);
    });
    context.currentQueryIndex = 0;
    context.currentQueryTotal = 0;
    context.transformIntoNewTimeline(furthestTime);
    if (sameElementTimeline) {
      context.currentTimeline.mergeTimelineCollectedStyles(sameElementTimeline);
      context.currentTimeline.snapshotCurrentStyles();
    }
    context.previousNode = ast;
  }
  visitStagger(ast, context) {
    const parentContext = context.parentContext;
    const tl = context.currentTimeline;
    const timings = ast.timings;
    const duration = Math.abs(timings.duration);
    const maxTime = duration * (context.currentQueryTotal - 1);
    let delay = duration * context.currentQueryIndex;
    let staggerTransformer = timings.duration < 0 ? "reverse" : timings.easing;
    switch (staggerTransformer) {
      case "reverse":
        delay = maxTime - delay;
        break;
      case "full":
        delay = parentContext.currentStaggerTime;
        break;
    }
    const timeline = context.currentTimeline;
    if (delay) {
      timeline.delayNextStep(delay);
    }
    const startingTime = timeline.currentTime;
    visitDslNode(this, ast.animation, context);
    context.previousNode = ast;
    parentContext.currentStaggerTime = tl.currentTime - startingTime + (tl.startTime - parentContext.currentTimeline.startTime);
  }
};
var DEFAULT_NOOP_PREVIOUS_NODE = {};
var AnimationTimelineContext = class _AnimationTimelineContext {
  _driver;
  element;
  subInstructions;
  _enterClassName;
  _leaveClassName;
  errors;
  timelines;
  parentContext = null;
  currentTimeline;
  currentAnimateTimings = null;
  previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
  subContextCount = 0;
  options = {};
  currentQueryIndex = 0;
  currentQueryTotal = 0;
  currentStaggerTime = 0;
  constructor(_driver, element, subInstructions, _enterClassName, _leaveClassName, errors, timelines, initialTimeline) {
    this._driver = _driver;
    this.element = element;
    this.subInstructions = subInstructions;
    this._enterClassName = _enterClassName;
    this._leaveClassName = _leaveClassName;
    this.errors = errors;
    this.timelines = timelines;
    this.currentTimeline = initialTimeline || new TimelineBuilder(this._driver, element, 0);
    timelines.push(this.currentTimeline);
  }
  get params() {
    return this.options.params;
  }
  updateOptions(options, skipIfExists) {
    if (!options) return;
    const newOptions = options;
    let optionsToUpdate = this.options;
    if (newOptions.duration != null) {
      optionsToUpdate.duration = resolveTimingValue(newOptions.duration);
    }
    if (newOptions.delay != null) {
      optionsToUpdate.delay = resolveTimingValue(newOptions.delay);
    }
    const newParams = newOptions.params;
    if (newParams) {
      let paramsToUpdate = optionsToUpdate.params;
      if (!paramsToUpdate) {
        paramsToUpdate = this.options.params = {};
      }
      Object.keys(newParams).forEach((name) => {
        if (!skipIfExists || !paramsToUpdate.hasOwnProperty(name)) {
          paramsToUpdate[name] = interpolateParams(newParams[name], paramsToUpdate, this.errors);
        }
      });
    }
  }
  _copyOptions() {
    const options = {};
    if (this.options) {
      const oldParams = this.options.params;
      if (oldParams) {
        const params = options["params"] = {};
        Object.keys(oldParams).forEach((name) => {
          params[name] = oldParams[name];
        });
      }
    }
    return options;
  }
  createSubContext(options = null, element, newTime) {
    const target = element || this.element;
    const context = new _AnimationTimelineContext(this._driver, target, this.subInstructions, this._enterClassName, this._leaveClassName, this.errors, this.timelines, this.currentTimeline.fork(target, newTime || 0));
    context.previousNode = this.previousNode;
    context.currentAnimateTimings = this.currentAnimateTimings;
    context.options = this._copyOptions();
    context.updateOptions(options);
    context.currentQueryIndex = this.currentQueryIndex;
    context.currentQueryTotal = this.currentQueryTotal;
    context.parentContext = this;
    this.subContextCount++;
    return context;
  }
  transformIntoNewTimeline(newTime) {
    this.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
    this.currentTimeline = this.currentTimeline.fork(this.element, newTime);
    this.timelines.push(this.currentTimeline);
    return this.currentTimeline;
  }
  appendInstructionToTimeline(instruction, duration, delay) {
    const updatedTimings = {
      duration: duration != null ? duration : instruction.duration,
      delay: this.currentTimeline.currentTime + (delay != null ? delay : 0) + instruction.delay,
      easing: ""
    };
    const builder = new SubTimelineBuilder(this._driver, instruction.element, instruction.keyframes, instruction.preStyleProps, instruction.postStyleProps, updatedTimings, instruction.stretchStartingKeyframe);
    this.timelines.push(builder);
    return updatedTimings;
  }
  incrementTime(time) {
    this.currentTimeline.forwardTime(this.currentTimeline.duration + time);
  }
  delayNextStep(delay) {
    if (delay > 0) {
      this.currentTimeline.delayNextStep(delay);
    }
  }
  invokeQuery(selector, originalSelector, limit, includeSelf, optional, errors) {
    let results = [];
    if (includeSelf) {
      results.push(this.element);
    }
    if (selector.length > 0) {
      selector = selector.replace(ENTER_TOKEN_REGEX, "." + this._enterClassName);
      selector = selector.replace(LEAVE_TOKEN_REGEX, "." + this._leaveClassName);
      const multi = limit != 1;
      let elements = this._driver.query(this.element, selector, multi);
      if (limit !== 0) {
        elements = limit < 0 ? elements.slice(elements.length + limit, elements.length) : elements.slice(0, limit);
      }
      results.push(...elements);
    }
    if (!optional && results.length == 0) {
      errors.push(invalidQuery(originalSelector));
    }
    return results;
  }
};
var TimelineBuilder = class _TimelineBuilder {
  _driver;
  element;
  startTime;
  _elementTimelineStylesLookup;
  duration = 0;
  easing = null;
  _previousKeyframe = /* @__PURE__ */ new Map();
  _currentKeyframe = /* @__PURE__ */ new Map();
  _keyframes = /* @__PURE__ */ new Map();
  _styleSummary = /* @__PURE__ */ new Map();
  _localTimelineStyles = /* @__PURE__ */ new Map();
  _globalTimelineStyles;
  _pendingStyles = /* @__PURE__ */ new Map();
  _backFill = /* @__PURE__ */ new Map();
  _currentEmptyStepKeyframe = null;
  constructor(_driver, element, startTime, _elementTimelineStylesLookup) {
    this._driver = _driver;
    this.element = element;
    this.startTime = startTime;
    this._elementTimelineStylesLookup = _elementTimelineStylesLookup;
    if (!this._elementTimelineStylesLookup) {
      this._elementTimelineStylesLookup = /* @__PURE__ */ new Map();
    }
    this._globalTimelineStyles = this._elementTimelineStylesLookup.get(element);
    if (!this._globalTimelineStyles) {
      this._globalTimelineStyles = this._localTimelineStyles;
      this._elementTimelineStylesLookup.set(element, this._localTimelineStyles);
    }
    this._loadKeyframe();
  }
  containsAnimation() {
    switch (this._keyframes.size) {
      case 0:
        return false;
      case 1:
        return this.hasCurrentStyleProperties();
      default:
        return true;
    }
  }
  hasCurrentStyleProperties() {
    return this._currentKeyframe.size > 0;
  }
  get currentTime() {
    return this.startTime + this.duration;
  }
  delayNextStep(delay) {
    const hasPreStyleStep = this._keyframes.size === 1 && this._pendingStyles.size;
    if (this.duration || hasPreStyleStep) {
      this.forwardTime(this.currentTime + delay);
      if (hasPreStyleStep) {
        this.snapshotCurrentStyles();
      }
    } else {
      this.startTime += delay;
    }
  }
  fork(element, currentTime) {
    this.applyStylesToKeyframe();
    return new _TimelineBuilder(this._driver, element, currentTime || this.currentTime, this._elementTimelineStylesLookup);
  }
  _loadKeyframe() {
    if (this._currentKeyframe) {
      this._previousKeyframe = this._currentKeyframe;
    }
    this._currentKeyframe = this._keyframes.get(this.duration);
    if (!this._currentKeyframe) {
      this._currentKeyframe = /* @__PURE__ */ new Map();
      this._keyframes.set(this.duration, this._currentKeyframe);
    }
  }
  forwardFrame() {
    this.duration += ONE_FRAME_IN_MILLISECONDS;
    this._loadKeyframe();
  }
  forwardTime(time) {
    this.applyStylesToKeyframe();
    this.duration = time;
    this._loadKeyframe();
  }
  _updateStyle(prop, value) {
    this._localTimelineStyles.set(prop, value);
    this._globalTimelineStyles.set(prop, value);
    this._styleSummary.set(prop, {
      time: this.currentTime,
      value
    });
  }
  allowOnlyTimelineStyles() {
    return this._currentEmptyStepKeyframe !== this._currentKeyframe;
  }
  applyEmptyStep(easing) {
    if (easing) {
      this._previousKeyframe.set("easing", easing);
    }
    for (let [prop, value] of this._globalTimelineStyles) {
      this._backFill.set(prop, value || AUTO_STYLE);
      this._currentKeyframe.set(prop, AUTO_STYLE);
    }
    this._currentEmptyStepKeyframe = this._currentKeyframe;
  }
  setStyles(input2, easing, errors, options) {
    if (easing) {
      this._previousKeyframe.set("easing", easing);
    }
    const params = options && options.params || {};
    const styles = flattenStyles(input2, this._globalTimelineStyles);
    for (let [prop, value] of styles) {
      const val = interpolateParams(value, params, errors);
      this._pendingStyles.set(prop, val);
      if (!this._localTimelineStyles.has(prop)) {
        this._backFill.set(prop, this._globalTimelineStyles.get(prop) ?? AUTO_STYLE);
      }
      this._updateStyle(prop, val);
    }
  }
  applyStylesToKeyframe() {
    if (this._pendingStyles.size == 0) return;
    this._pendingStyles.forEach((val, prop) => {
      this._currentKeyframe.set(prop, val);
    });
    this._pendingStyles.clear();
    this._localTimelineStyles.forEach((val, prop) => {
      if (!this._currentKeyframe.has(prop)) {
        this._currentKeyframe.set(prop, val);
      }
    });
  }
  snapshotCurrentStyles() {
    for (let [prop, val] of this._localTimelineStyles) {
      this._pendingStyles.set(prop, val);
      this._updateStyle(prop, val);
    }
  }
  getFinalKeyframe() {
    return this._keyframes.get(this.duration);
  }
  get properties() {
    const properties = [];
    for (let prop in this._currentKeyframe) {
      properties.push(prop);
    }
    return properties;
  }
  mergeTimelineCollectedStyles(timeline) {
    timeline._styleSummary.forEach((details1, prop) => {
      const details0 = this._styleSummary.get(prop);
      if (!details0 || details1.time > details0.time) {
        this._updateStyle(prop, details1.value);
      }
    });
  }
  buildKeyframes() {
    this.applyStylesToKeyframe();
    const preStyleProps = /* @__PURE__ */ new Set();
    const postStyleProps = /* @__PURE__ */ new Set();
    const isEmpty = this._keyframes.size === 1 && this.duration === 0;
    let finalKeyframes = [];
    this._keyframes.forEach((keyframe, time) => {
      const finalKeyframe = new Map([...this._backFill, ...keyframe]);
      finalKeyframe.forEach((value, prop) => {
        if (value === \u0275PRE_STYLE) {
          preStyleProps.add(prop);
        } else if (value === AUTO_STYLE) {
          postStyleProps.add(prop);
        }
      });
      if (!isEmpty) {
        finalKeyframe.set("offset", time / this.duration);
      }
      finalKeyframes.push(finalKeyframe);
    });
    const preProps = [...preStyleProps.values()];
    const postProps = [...postStyleProps.values()];
    if (isEmpty) {
      const kf0 = finalKeyframes[0];
      const kf1 = new Map(kf0);
      kf0.set("offset", 0);
      kf1.set("offset", 1);
      finalKeyframes = [kf0, kf1];
    }
    return createTimelineInstruction(this.element, finalKeyframes, preProps, postProps, this.duration, this.startTime, this.easing, false);
  }
};
var SubTimelineBuilder = class extends TimelineBuilder {
  keyframes;
  preStyleProps;
  postStyleProps;
  _stretchStartingKeyframe;
  timings;
  constructor(driver, element, keyframes, preStyleProps, postStyleProps, timings, _stretchStartingKeyframe = false) {
    super(driver, element, timings.delay);
    this.keyframes = keyframes;
    this.preStyleProps = preStyleProps;
    this.postStyleProps = postStyleProps;
    this._stretchStartingKeyframe = _stretchStartingKeyframe;
    this.timings = {
      duration: timings.duration,
      delay: timings.delay,
      easing: timings.easing
    };
  }
  containsAnimation() {
    return this.keyframes.length > 1;
  }
  buildKeyframes() {
    let keyframes = this.keyframes;
    let {
      delay,
      duration,
      easing
    } = this.timings;
    if (this._stretchStartingKeyframe && delay) {
      const newKeyframes = [];
      const totalTime = duration + delay;
      const startingGap = delay / totalTime;
      const newFirstKeyframe = new Map(keyframes[0]);
      newFirstKeyframe.set("offset", 0);
      newKeyframes.push(newFirstKeyframe);
      const oldFirstKeyframe = new Map(keyframes[0]);
      oldFirstKeyframe.set("offset", roundOffset(startingGap));
      newKeyframes.push(oldFirstKeyframe);
      const limit = keyframes.length - 1;
      for (let i29 = 1; i29 <= limit; i29++) {
        let kf = new Map(keyframes[i29]);
        const oldOffset = kf.get("offset");
        const timeAtKeyframe = delay + oldOffset * duration;
        kf.set("offset", roundOffset(timeAtKeyframe / totalTime));
        newKeyframes.push(kf);
      }
      duration = totalTime;
      delay = 0;
      easing = "";
      keyframes = newKeyframes;
    }
    return createTimelineInstruction(this.element, keyframes, this.preStyleProps, this.postStyleProps, duration, delay, easing, true);
  }
};
function roundOffset(offset, decimalPoints = 3) {
  const mult = Math.pow(10, decimalPoints - 1);
  return Math.round(offset * mult) / mult;
}
function flattenStyles(input2, allStyles) {
  const styles = /* @__PURE__ */ new Map();
  let allProperties;
  input2.forEach((token) => {
    if (token === "*") {
      allProperties ??= allStyles.keys();
      for (let prop of allProperties) {
        styles.set(prop, AUTO_STYLE);
      }
    } else {
      for (let [prop, val] of token) {
        styles.set(prop, val);
      }
    }
  });
  return styles;
}
function createTransitionInstruction(element, triggerName, fromState, toState, isRemovalTransition, fromStyles, toStyles, timelines, queriedElements, preStyleProps, postStyleProps, totalTime, errors) {
  return {
    type: 0,
    element,
    triggerName,
    isRemovalTransition,
    fromState,
    fromStyles,
    toState,
    toStyles,
    timelines,
    queriedElements,
    preStyleProps,
    postStyleProps,
    totalTime,
    errors
  };
}
var EMPTY_OBJECT = {};
var AnimationTransitionFactory = class {
  _triggerName;
  ast;
  _stateStyles;
  constructor(_triggerName, ast, _stateStyles) {
    this._triggerName = _triggerName;
    this.ast = ast;
    this._stateStyles = _stateStyles;
  }
  match(currentState, nextState, element, params) {
    return oneOrMoreTransitionsMatch(this.ast.matchers, currentState, nextState, element, params);
  }
  buildStyles(stateName, params, errors) {
    let styler = this._stateStyles.get("*");
    if (stateName !== void 0) {
      styler = this._stateStyles.get(stateName?.toString()) || styler;
    }
    return styler ? styler.buildStyles(params, errors) : /* @__PURE__ */ new Map();
  }
  build(driver, element, currentState, nextState, enterClassName, leaveClassName, currentOptions, nextOptions, subInstructions, skipAstBuild) {
    const errors = [];
    const transitionAnimationParams = this.ast.options && this.ast.options.params || EMPTY_OBJECT;
    const currentAnimationParams = currentOptions && currentOptions.params || EMPTY_OBJECT;
    const currentStateStyles = this.buildStyles(currentState, currentAnimationParams, errors);
    const nextAnimationParams = nextOptions && nextOptions.params || EMPTY_OBJECT;
    const nextStateStyles = this.buildStyles(nextState, nextAnimationParams, errors);
    const queriedElements = /* @__PURE__ */ new Set();
    const preStyleMap = /* @__PURE__ */ new Map();
    const postStyleMap = /* @__PURE__ */ new Map();
    const isRemoval = nextState === "void";
    const animationOptions = {
      params: applyParamDefaults(nextAnimationParams, transitionAnimationParams),
      delay: this.ast.options?.delay
    };
    const timelines = skipAstBuild ? [] : buildAnimationTimelines(driver, element, this.ast.animation, enterClassName, leaveClassName, currentStateStyles, nextStateStyles, animationOptions, subInstructions, errors);
    let totalTime = 0;
    timelines.forEach((tl) => {
      totalTime = Math.max(tl.duration + tl.delay, totalTime);
    });
    if (errors.length) {
      return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, [], [], preStyleMap, postStyleMap, totalTime, errors);
    }
    timelines.forEach((tl) => {
      const elm = tl.element;
      const preProps = getOrSetDefaultValue(preStyleMap, elm, /* @__PURE__ */ new Set());
      tl.preStyleProps.forEach((prop) => preProps.add(prop));
      const postProps = getOrSetDefaultValue(postStyleMap, elm, /* @__PURE__ */ new Set());
      tl.postStyleProps.forEach((prop) => postProps.add(prop));
      if (elm !== element) {
        queriedElements.add(elm);
      }
    });
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      checkNonAnimatableInTimelines(timelines, this._triggerName, driver);
    }
    return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, timelines, [...queriedElements.values()], preStyleMap, postStyleMap, totalTime);
  }
};
function checkNonAnimatableInTimelines(timelines, triggerName, driver) {
  if (!driver.validateAnimatableStyleProperty) {
    return;
  }
  const allowedNonAnimatableProps = /* @__PURE__ */ new Set([
    // 'easing' is a utility/synthetic prop we use to represent
    // easing functions, it represents a property of the animation
    // which is not animatable but different values can be used
    // in different steps
    "easing"
  ]);
  const invalidNonAnimatableProps = /* @__PURE__ */ new Set();
  timelines.forEach(({
    keyframes
  }) => {
    const nonAnimatablePropsInitialValues = /* @__PURE__ */ new Map();
    keyframes.forEach((keyframe) => {
      const entriesToCheck = Array.from(keyframe.entries()).filter(([prop]) => !allowedNonAnimatableProps.has(prop));
      for (const [prop, value] of entriesToCheck) {
        if (!driver.validateAnimatableStyleProperty(prop)) {
          if (nonAnimatablePropsInitialValues.has(prop) && !invalidNonAnimatableProps.has(prop)) {
            const propInitialValue = nonAnimatablePropsInitialValues.get(prop);
            if (propInitialValue !== value) {
              invalidNonAnimatableProps.add(prop);
            }
          } else {
            nonAnimatablePropsInitialValues.set(prop, value);
          }
        }
      }
    });
  });
  if (invalidNonAnimatableProps.size > 0) {
    console.warn(`Warning: The animation trigger "${triggerName}" is attempting to animate the following not animatable properties: ` + Array.from(invalidNonAnimatableProps).join(", ") + "\n(to check the list of all animatable properties visit https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)");
  }
}
function oneOrMoreTransitionsMatch(matchFns, currentState, nextState, element, params) {
  return matchFns.some((fn) => fn(currentState, nextState, element, params));
}
function applyParamDefaults(userParams, defaults) {
  const result = __spreadValues({}, defaults);
  Object.entries(userParams).forEach(([key, value]) => {
    if (value != null) {
      result[key] = value;
    }
  });
  return result;
}
var AnimationStateStyles = class {
  styles;
  defaultParams;
  normalizer;
  constructor(styles, defaultParams, normalizer) {
    this.styles = styles;
    this.defaultParams = defaultParams;
    this.normalizer = normalizer;
  }
  buildStyles(params, errors) {
    const finalStyles = /* @__PURE__ */ new Map();
    const combinedParams = applyParamDefaults(params, this.defaultParams);
    this.styles.styles.forEach((value) => {
      if (typeof value !== "string") {
        value.forEach((val, prop) => {
          if (val) {
            val = interpolateParams(val, combinedParams, errors);
          }
          const normalizedProp = this.normalizer.normalizePropertyName(prop, errors);
          val = this.normalizer.normalizeStyleValue(prop, normalizedProp, val, errors);
          finalStyles.set(prop, val);
        });
      }
    });
    return finalStyles;
  }
};
function buildTrigger(name, ast, normalizer) {
  return new AnimationTrigger(name, ast, normalizer);
}
var AnimationTrigger = class {
  name;
  ast;
  _normalizer;
  transitionFactories = [];
  fallbackTransition;
  states = /* @__PURE__ */ new Map();
  constructor(name, ast, _normalizer) {
    this.name = name;
    this.ast = ast;
    this._normalizer = _normalizer;
    ast.states.forEach((ast2) => {
      const defaultParams = ast2.options && ast2.options.params || {};
      this.states.set(ast2.name, new AnimationStateStyles(ast2.style, defaultParams, _normalizer));
    });
    balanceProperties(this.states, "true", "1");
    balanceProperties(this.states, "false", "0");
    ast.transitions.forEach((ast2) => {
      this.transitionFactories.push(new AnimationTransitionFactory(name, ast2, this.states));
    });
    this.fallbackTransition = createFallbackTransition(name, this.states);
  }
  get containsQueries() {
    return this.ast.queryCount > 0;
  }
  matchTransition(currentState, nextState, element, params) {
    const entry = this.transitionFactories.find((f11) => f11.match(currentState, nextState, element, params));
    return entry || null;
  }
  matchStyles(currentState, params, errors) {
    return this.fallbackTransition.buildStyles(currentState, params, errors);
  }
};
function createFallbackTransition(triggerName, states, normalizer) {
  const matchers = [(fromState, toState) => true];
  const animation = {
    type: AnimationMetadataType.Sequence,
    steps: [],
    options: null
  };
  const transition = {
    type: AnimationMetadataType.Transition,
    animation,
    matchers,
    options: null,
    queryCount: 0,
    depCount: 0
  };
  return new AnimationTransitionFactory(triggerName, transition, states);
}
function balanceProperties(stateMap, key1, key2) {
  if (stateMap.has(key1)) {
    if (!stateMap.has(key2)) {
      stateMap.set(key2, stateMap.get(key1));
    }
  } else if (stateMap.has(key2)) {
    stateMap.set(key1, stateMap.get(key2));
  }
}
var EMPTY_INSTRUCTION_MAP = /* @__PURE__ */ new ElementInstructionMap();
var TimelineAnimationEngine = class {
  bodyNode;
  _driver;
  _normalizer;
  _animations = /* @__PURE__ */ new Map();
  _playersById = /* @__PURE__ */ new Map();
  players = [];
  constructor(bodyNode, _driver, _normalizer) {
    this.bodyNode = bodyNode;
    this._driver = _driver;
    this._normalizer = _normalizer;
  }
  register(id, metadata) {
    const errors = [];
    const warnings = [];
    const ast = buildAnimationAst(this._driver, metadata, errors, warnings);
    if (errors.length) {
      throw registerFailed(errors);
    } else {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        if (warnings.length) {
          warnRegister(warnings);
        }
      }
      this._animations.set(id, ast);
    }
  }
  _buildPlayer(i29, preStyles, postStyles) {
    const element = i29.element;
    const keyframes = normalizeKeyframes$1(this._normalizer, i29.keyframes, preStyles, postStyles);
    return this._driver.animate(element, keyframes, i29.duration, i29.delay, i29.easing, [], true);
  }
  create(id, element, options = {}) {
    const errors = [];
    const ast = this._animations.get(id);
    let instructions;
    const autoStylesMap = /* @__PURE__ */ new Map();
    if (ast) {
      instructions = buildAnimationTimelines(this._driver, element, ast, ENTER_CLASSNAME, LEAVE_CLASSNAME, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), options, EMPTY_INSTRUCTION_MAP, errors);
      instructions.forEach((inst) => {
        const styles = getOrSetDefaultValue(autoStylesMap, inst.element, /* @__PURE__ */ new Map());
        inst.postStyleProps.forEach((prop) => styles.set(prop, null));
      });
    } else {
      errors.push(missingOrDestroyedAnimation());
      instructions = [];
    }
    if (errors.length) {
      throw createAnimationFailed(errors);
    }
    autoStylesMap.forEach((styles, element2) => {
      styles.forEach((_, prop) => {
        styles.set(prop, this._driver.computeStyle(element2, prop, AUTO_STYLE));
      });
    });
    const players = instructions.map((i29) => {
      const styles = autoStylesMap.get(i29.element);
      return this._buildPlayer(i29, /* @__PURE__ */ new Map(), styles);
    });
    const player = optimizeGroupPlayer(players);
    this._playersById.set(id, player);
    player.onDestroy(() => this.destroy(id));
    this.players.push(player);
    return player;
  }
  destroy(id) {
    const player = this._getPlayer(id);
    player.destroy();
    this._playersById.delete(id);
    const index = this.players.indexOf(player);
    if (index >= 0) {
      this.players.splice(index, 1);
    }
  }
  _getPlayer(id) {
    const player = this._playersById.get(id);
    if (!player) {
      throw missingPlayer(id);
    }
    return player;
  }
  listen(id, element, eventName, callback) {
    const baseEvent = makeAnimationEvent(element, "", "", "");
    listenOnPlayer(this._getPlayer(id), eventName, baseEvent, callback);
    return () => {
    };
  }
  command(id, element, command, args) {
    if (command == "register") {
      this.register(id, args[0]);
      return;
    }
    if (command == "create") {
      const options = args[0] || {};
      this.create(id, element, options);
      return;
    }
    const player = this._getPlayer(id);
    switch (command) {
      case "play":
        player.play();
        break;
      case "pause":
        player.pause();
        break;
      case "reset":
        player.reset();
        break;
      case "restart":
        player.restart();
        break;
      case "finish":
        player.finish();
        break;
      case "init":
        player.init();
        break;
      case "setPosition":
        player.setPosition(parseFloat(args[0]));
        break;
      case "destroy":
        this.destroy(id);
        break;
    }
  }
};
var QUEUED_CLASSNAME = "ng-animate-queued";
var QUEUED_SELECTOR = ".ng-animate-queued";
var DISABLED_CLASSNAME = "ng-animate-disabled";
var DISABLED_SELECTOR = ".ng-animate-disabled";
var STAR_CLASSNAME = "ng-star-inserted";
var STAR_SELECTOR = ".ng-star-inserted";
var EMPTY_PLAYER_ARRAY = [];
var NULL_REMOVAL_STATE = {
  namespaceId: "",
  setForRemoval: false,
  setForMove: false,
  hasAnimation: false,
  removedBeforeQueried: false
};
var NULL_REMOVED_QUERIED_STATE = {
  namespaceId: "",
  setForMove: false,
  setForRemoval: false,
  hasAnimation: false,
  removedBeforeQueried: true
};
var REMOVAL_FLAG = "__ng_removed";
var StateValue = class {
  namespaceId;
  value;
  options;
  get params() {
    return this.options.params;
  }
  constructor(input2, namespaceId = "") {
    this.namespaceId = namespaceId;
    const isObj = input2 && input2.hasOwnProperty("value");
    const value = isObj ? input2["value"] : input2;
    this.value = normalizeTriggerValue(value);
    if (isObj) {
      const _a = input2, {
        value: value2
      } = _a, options = __objRest(_a, [
        "value"
      ]);
      this.options = options;
    } else {
      this.options = {};
    }
    if (!this.options.params) {
      this.options.params = {};
    }
  }
  absorbOptions(options) {
    const newParams = options.params;
    if (newParams) {
      const oldParams = this.options.params;
      Object.keys(newParams).forEach((prop) => {
        if (oldParams[prop] == null) {
          oldParams[prop] = newParams[prop];
        }
      });
    }
  }
};
var VOID_VALUE = "void";
var DEFAULT_STATE_VALUE = /* @__PURE__ */ new StateValue(VOID_VALUE);
var AnimationTransitionNamespace = class {
  id;
  hostElement;
  _engine;
  players = [];
  _triggers = /* @__PURE__ */ new Map();
  _queue = [];
  _elementListeners = /* @__PURE__ */ new Map();
  _hostClassName;
  constructor(id, hostElement, _engine) {
    this.id = id;
    this.hostElement = hostElement;
    this._engine = _engine;
    this._hostClassName = "ng-tns-" + id;
    addClass(hostElement, this._hostClassName);
  }
  listen(element, name, phase, callback) {
    if (!this._triggers.has(name)) {
      throw missingTrigger(phase, name);
    }
    if (phase == null || phase.length == 0) {
      throw missingEvent(name);
    }
    if (!isTriggerEventValid(phase)) {
      throw unsupportedTriggerEvent(phase, name);
    }
    const listeners = getOrSetDefaultValue(this._elementListeners, element, []);
    const data = {
      name,
      phase,
      callback
    };
    listeners.push(data);
    const triggersWithStates = getOrSetDefaultValue(this._engine.statesByElement, element, /* @__PURE__ */ new Map());
    if (!triggersWithStates.has(name)) {
      addClass(element, NG_TRIGGER_CLASSNAME);
      addClass(element, NG_TRIGGER_CLASSNAME + "-" + name);
      triggersWithStates.set(name, DEFAULT_STATE_VALUE);
    }
    return () => {
      this._engine.afterFlush(() => {
        const index = listeners.indexOf(data);
        if (index >= 0) {
          listeners.splice(index, 1);
        }
        if (!this._triggers.has(name)) {
          triggersWithStates.delete(name);
        }
      });
    };
  }
  register(name, ast) {
    if (this._triggers.has(name)) {
      return false;
    } else {
      this._triggers.set(name, ast);
      return true;
    }
  }
  _getTrigger(name) {
    const trigger = this._triggers.get(name);
    if (!trigger) {
      throw unregisteredTrigger(name);
    }
    return trigger;
  }
  trigger(element, triggerName, value, defaultToFallback = true) {
    const trigger = this._getTrigger(triggerName);
    const player = new TransitionAnimationPlayer(this.id, triggerName, element);
    let triggersWithStates = this._engine.statesByElement.get(element);
    if (!triggersWithStates) {
      addClass(element, NG_TRIGGER_CLASSNAME);
      addClass(element, NG_TRIGGER_CLASSNAME + "-" + triggerName);
      this._engine.statesByElement.set(element, triggersWithStates = /* @__PURE__ */ new Map());
    }
    let fromState = triggersWithStates.get(triggerName);
    const toState = new StateValue(value, this.id);
    const isObj = value && value.hasOwnProperty("value");
    if (!isObj && fromState) {
      toState.absorbOptions(fromState.options);
    }
    triggersWithStates.set(triggerName, toState);
    if (!fromState) {
      fromState = DEFAULT_STATE_VALUE;
    }
    const isRemoval = toState.value === VOID_VALUE;
    if (!isRemoval && fromState.value === toState.value) {
      if (!objEquals(fromState.params, toState.params)) {
        const errors = [];
        const fromStyles = trigger.matchStyles(fromState.value, fromState.params, errors);
        const toStyles = trigger.matchStyles(toState.value, toState.params, errors);
        if (errors.length) {
          this._engine.reportError(errors);
        } else {
          this._engine.afterFlush(() => {
            eraseStyles(element, fromStyles);
            setStyles(element, toStyles);
          });
        }
      }
      return;
    }
    const playersOnElement = getOrSetDefaultValue(this._engine.playersByElement, element, []);
    playersOnElement.forEach((player2) => {
      if (player2.namespaceId == this.id && player2.triggerName == triggerName && player2.queued) {
        player2.destroy();
      }
    });
    let transition = trigger.matchTransition(fromState.value, toState.value, element, toState.params);
    let isFallbackTransition = false;
    if (!transition) {
      if (!defaultToFallback) return;
      transition = trigger.fallbackTransition;
      isFallbackTransition = true;
    }
    this._engine.totalQueuedPlayers++;
    this._queue.push({
      element,
      triggerName,
      transition,
      fromState,
      toState,
      player,
      isFallbackTransition
    });
    if (!isFallbackTransition) {
      addClass(element, QUEUED_CLASSNAME);
      player.onStart(() => {
        removeClass(element, QUEUED_CLASSNAME);
      });
    }
    player.onDone(() => {
      let index = this.players.indexOf(player);
      if (index >= 0) {
        this.players.splice(index, 1);
      }
      const players = this._engine.playersByElement.get(element);
      if (players) {
        let index2 = players.indexOf(player);
        if (index2 >= 0) {
          players.splice(index2, 1);
        }
      }
    });
    this.players.push(player);
    playersOnElement.push(player);
    return player;
  }
  deregister(name) {
    this._triggers.delete(name);
    this._engine.statesByElement.forEach((stateMap) => stateMap.delete(name));
    this._elementListeners.forEach((listeners, element) => {
      this._elementListeners.set(element, listeners.filter((entry) => {
        return entry.name != name;
      }));
    });
  }
  clearElementCache(element) {
    this._engine.statesByElement.delete(element);
    this._elementListeners.delete(element);
    const elementPlayers = this._engine.playersByElement.get(element);
    if (elementPlayers) {
      elementPlayers.forEach((player) => player.destroy());
      this._engine.playersByElement.delete(element);
    }
  }
  _signalRemovalForInnerTriggers(rootElement, context) {
    const elements = this._engine.driver.query(rootElement, NG_TRIGGER_SELECTOR, true);
    elements.forEach((elm) => {
      if (elm[REMOVAL_FLAG]) return;
      const namespaces = this._engine.fetchNamespacesByElement(elm);
      if (namespaces.size) {
        namespaces.forEach((ns) => ns.triggerLeaveAnimation(elm, context, false, true));
      } else {
        this.clearElementCache(elm);
      }
    });
    this._engine.afterFlushAnimationsDone(() => elements.forEach((elm) => this.clearElementCache(elm)));
  }
  triggerLeaveAnimation(element, context, destroyAfterComplete, defaultToFallback) {
    const triggerStates = this._engine.statesByElement.get(element);
    const previousTriggersValues = /* @__PURE__ */ new Map();
    if (triggerStates) {
      const players = [];
      triggerStates.forEach((state, triggerName) => {
        previousTriggersValues.set(triggerName, state.value);
        if (this._triggers.has(triggerName)) {
          const player = this.trigger(element, triggerName, VOID_VALUE, defaultToFallback);
          if (player) {
            players.push(player);
          }
        }
      });
      if (players.length) {
        this._engine.markElementAsRemoved(this.id, element, true, context, previousTriggersValues);
        if (destroyAfterComplete) {
          optimizeGroupPlayer(players).onDone(() => this._engine.processLeaveNode(element));
        }
        return true;
      }
    }
    return false;
  }
  prepareLeaveAnimationListeners(element) {
    const listeners = this._elementListeners.get(element);
    const elementStates = this._engine.statesByElement.get(element);
    if (listeners && elementStates) {
      const visitedTriggers = /* @__PURE__ */ new Set();
      listeners.forEach((listener) => {
        const triggerName = listener.name;
        if (visitedTriggers.has(triggerName)) return;
        visitedTriggers.add(triggerName);
        const trigger = this._triggers.get(triggerName);
        const transition = trigger.fallbackTransition;
        const fromState = elementStates.get(triggerName) || DEFAULT_STATE_VALUE;
        const toState = new StateValue(VOID_VALUE);
        const player = new TransitionAnimationPlayer(this.id, triggerName, element);
        this._engine.totalQueuedPlayers++;
        this._queue.push({
          element,
          triggerName,
          transition,
          fromState,
          toState,
          player,
          isFallbackTransition: true
        });
      });
    }
  }
  removeNode(element, context) {
    const engine = this._engine;
    if (element.childElementCount) {
      this._signalRemovalForInnerTriggers(element, context);
    }
    if (this.triggerLeaveAnimation(element, context, true)) return;
    let containsPotentialParentTransition = false;
    if (engine.totalAnimations) {
      const currentPlayers = engine.players.length ? engine.playersByQueriedElement.get(element) : [];
      if (currentPlayers && currentPlayers.length) {
        containsPotentialParentTransition = true;
      } else {
        let parent = element;
        while (parent = parent.parentNode) {
          const triggers = engine.statesByElement.get(parent);
          if (triggers) {
            containsPotentialParentTransition = true;
            break;
          }
        }
      }
    }
    this.prepareLeaveAnimationListeners(element);
    if (containsPotentialParentTransition) {
      engine.markElementAsRemoved(this.id, element, false, context);
    } else {
      const removalFlag = element[REMOVAL_FLAG];
      if (!removalFlag || removalFlag === NULL_REMOVAL_STATE) {
        engine.afterFlush(() => this.clearElementCache(element));
        engine.destroyInnerAnimations(element);
        engine._onRemovalComplete(element, context);
      }
    }
  }
  insertNode(element, parent) {
    addClass(element, this._hostClassName);
  }
  drainQueuedTransitions(microtaskId) {
    const instructions = [];
    this._queue.forEach((entry) => {
      const player = entry.player;
      if (player.destroyed) return;
      const element = entry.element;
      const listeners = this._elementListeners.get(element);
      if (listeners) {
        listeners.forEach((listener) => {
          if (listener.name == entry.triggerName) {
            const baseEvent = makeAnimationEvent(element, entry.triggerName, entry.fromState.value, entry.toState.value);
            baseEvent["_data"] = microtaskId;
            listenOnPlayer(entry.player, listener.phase, baseEvent, listener.callback);
          }
        });
      }
      if (player.markedForDestroy) {
        this._engine.afterFlush(() => {
          player.destroy();
        });
      } else {
        instructions.push(entry);
      }
    });
    this._queue = [];
    return instructions.sort((a43, b5) => {
      const d0 = a43.transition.ast.depCount;
      const d1 = b5.transition.ast.depCount;
      if (d0 == 0 || d1 == 0) {
        return d0 - d1;
      }
      return this._engine.driver.containsElement(a43.element, b5.element) ? 1 : -1;
    });
  }
  destroy(context) {
    this.players.forEach((p4) => p4.destroy());
    this._signalRemovalForInnerTriggers(this.hostElement, context);
  }
};
var TransitionAnimationEngine = class {
  bodyNode;
  driver;
  _normalizer;
  players = [];
  newHostElements = /* @__PURE__ */ new Map();
  playersByElement = /* @__PURE__ */ new Map();
  playersByQueriedElement = /* @__PURE__ */ new Map();
  statesByElement = /* @__PURE__ */ new Map();
  disabledNodes = /* @__PURE__ */ new Set();
  totalAnimations = 0;
  totalQueuedPlayers = 0;
  _namespaceLookup = {};
  _namespaceList = [];
  _flushFns = [];
  _whenQuietFns = [];
  namespacesByHostElement = /* @__PURE__ */ new Map();
  collectedEnterElements = [];
  collectedLeaveElements = [];
  // this method is designed to be overridden by the code that uses this engine
  onRemovalComplete = (element, context) => {
  };
  /** @internal */
  _onRemovalComplete(element, context) {
    this.onRemovalComplete(element, context);
  }
  constructor(bodyNode, driver, _normalizer) {
    this.bodyNode = bodyNode;
    this.driver = driver;
    this._normalizer = _normalizer;
  }
  get queuedPlayers() {
    const players = [];
    this._namespaceList.forEach((ns) => {
      ns.players.forEach((player) => {
        if (player.queued) {
          players.push(player);
        }
      });
    });
    return players;
  }
  createNamespace(namespaceId, hostElement) {
    const ns = new AnimationTransitionNamespace(namespaceId, hostElement, this);
    if (this.bodyNode && this.driver.containsElement(this.bodyNode, hostElement)) {
      this._balanceNamespaceList(ns, hostElement);
    } else {
      this.newHostElements.set(hostElement, ns);
      this.collectEnterElement(hostElement);
    }
    return this._namespaceLookup[namespaceId] = ns;
  }
  _balanceNamespaceList(ns, hostElement) {
    const namespaceList = this._namespaceList;
    const namespacesByHostElement = this.namespacesByHostElement;
    const limit = namespaceList.length - 1;
    if (limit >= 0) {
      let found = false;
      let ancestor = this.driver.getParentElement(hostElement);
      while (ancestor) {
        const ancestorNs = namespacesByHostElement.get(ancestor);
        if (ancestorNs) {
          const index = namespaceList.indexOf(ancestorNs);
          namespaceList.splice(index + 1, 0, ns);
          found = true;
          break;
        }
        ancestor = this.driver.getParentElement(ancestor);
      }
      if (!found) {
        namespaceList.unshift(ns);
      }
    } else {
      namespaceList.push(ns);
    }
    namespacesByHostElement.set(hostElement, ns);
    return ns;
  }
  register(namespaceId, hostElement) {
    let ns = this._namespaceLookup[namespaceId];
    if (!ns) {
      ns = this.createNamespace(namespaceId, hostElement);
    }
    return ns;
  }
  registerTrigger(namespaceId, name, trigger) {
    let ns = this._namespaceLookup[namespaceId];
    if (ns && ns.register(name, trigger)) {
      this.totalAnimations++;
    }
  }
  destroy(namespaceId, context) {
    if (!namespaceId) return;
    this.afterFlush(() => {
    });
    this.afterFlushAnimationsDone(() => {
      const ns = this._fetchNamespace(namespaceId);
      this.namespacesByHostElement.delete(ns.hostElement);
      const index = this._namespaceList.indexOf(ns);
      if (index >= 0) {
        this._namespaceList.splice(index, 1);
      }
      ns.destroy(context);
      delete this._namespaceLookup[namespaceId];
    });
  }
  _fetchNamespace(id) {
    return this._namespaceLookup[id];
  }
  fetchNamespacesByElement(element) {
    const namespaces = /* @__PURE__ */ new Set();
    const elementStates = this.statesByElement.get(element);
    if (elementStates) {
      for (let stateValue of elementStates.values()) {
        if (stateValue.namespaceId) {
          const ns = this._fetchNamespace(stateValue.namespaceId);
          if (ns) {
            namespaces.add(ns);
          }
        }
      }
    }
    return namespaces;
  }
  trigger(namespaceId, element, name, value) {
    if (isElementNode(element)) {
      const ns = this._fetchNamespace(namespaceId);
      if (ns) {
        ns.trigger(element, name, value);
        return true;
      }
    }
    return false;
  }
  insertNode(namespaceId, element, parent, insertBefore) {
    if (!isElementNode(element)) return;
    const details = element[REMOVAL_FLAG];
    if (details && details.setForRemoval) {
      details.setForRemoval = false;
      details.setForMove = true;
      const index = this.collectedLeaveElements.indexOf(element);
      if (index >= 0) {
        this.collectedLeaveElements.splice(index, 1);
      }
    }
    if (namespaceId) {
      const ns = this._fetchNamespace(namespaceId);
      if (ns) {
        ns.insertNode(element, parent);
      }
    }
    if (insertBefore) {
      this.collectEnterElement(element);
    }
  }
  collectEnterElement(element) {
    this.collectedEnterElements.push(element);
  }
  markElementAsDisabled(element, value) {
    if (value) {
      if (!this.disabledNodes.has(element)) {
        this.disabledNodes.add(element);
        addClass(element, DISABLED_CLASSNAME);
      }
    } else if (this.disabledNodes.has(element)) {
      this.disabledNodes.delete(element);
      removeClass(element, DISABLED_CLASSNAME);
    }
  }
  removeNode(namespaceId, element, context) {
    if (isElementNode(element)) {
      const ns = namespaceId ? this._fetchNamespace(namespaceId) : null;
      if (ns) {
        ns.removeNode(element, context);
      } else {
        this.markElementAsRemoved(namespaceId, element, false, context);
      }
      const hostNS = this.namespacesByHostElement.get(element);
      if (hostNS && hostNS.id !== namespaceId) {
        hostNS.removeNode(element, context);
      }
    } else {
      this._onRemovalComplete(element, context);
    }
  }
  markElementAsRemoved(namespaceId, element, hasAnimation, context, previousTriggersValues) {
    this.collectedLeaveElements.push(element);
    element[REMOVAL_FLAG] = {
      namespaceId,
      setForRemoval: context,
      hasAnimation,
      removedBeforeQueried: false,
      previousTriggersValues
    };
  }
  listen(namespaceId, element, name, phase, callback) {
    if (isElementNode(element)) {
      return this._fetchNamespace(namespaceId).listen(element, name, phase, callback);
    }
    return () => {
    };
  }
  _buildInstruction(entry, subTimelines, enterClassName, leaveClassName, skipBuildAst) {
    return entry.transition.build(this.driver, entry.element, entry.fromState.value, entry.toState.value, enterClassName, leaveClassName, entry.fromState.options, entry.toState.options, subTimelines, skipBuildAst);
  }
  destroyInnerAnimations(containerElement) {
    let elements = this.driver.query(containerElement, NG_TRIGGER_SELECTOR, true);
    elements.forEach((element) => this.destroyActiveAnimationsForElement(element));
    if (this.playersByQueriedElement.size == 0) return;
    elements = this.driver.query(containerElement, NG_ANIMATING_SELECTOR, true);
    elements.forEach((element) => this.finishActiveQueriedAnimationOnElement(element));
  }
  destroyActiveAnimationsForElement(element) {
    const players = this.playersByElement.get(element);
    if (players) {
      players.forEach((player) => {
        if (player.queued) {
          player.markedForDestroy = true;
        } else {
          player.destroy();
        }
      });
    }
  }
  finishActiveQueriedAnimationOnElement(element) {
    const players = this.playersByQueriedElement.get(element);
    if (players) {
      players.forEach((player) => player.finish());
    }
  }
  whenRenderingDone() {
    return new Promise((resolve) => {
      if (this.players.length) {
        return optimizeGroupPlayer(this.players).onDone(() => resolve());
      } else {
        resolve();
      }
    });
  }
  processLeaveNode(element) {
    const details = element[REMOVAL_FLAG];
    if (details && details.setForRemoval) {
      element[REMOVAL_FLAG] = NULL_REMOVAL_STATE;
      if (details.namespaceId) {
        this.destroyInnerAnimations(element);
        const ns = this._fetchNamespace(details.namespaceId);
        if (ns) {
          ns.clearElementCache(element);
        }
      }
      this._onRemovalComplete(element, details.setForRemoval);
    }
    if (element.classList?.contains(DISABLED_CLASSNAME)) {
      this.markElementAsDisabled(element, false);
    }
    this.driver.query(element, DISABLED_SELECTOR, true).forEach((node) => {
      this.markElementAsDisabled(node, false);
    });
  }
  flush(microtaskId = -1) {
    let players = [];
    if (this.newHostElements.size) {
      this.newHostElements.forEach((ns, element) => this._balanceNamespaceList(ns, element));
      this.newHostElements.clear();
    }
    if (this.totalAnimations && this.collectedEnterElements.length) {
      for (let i29 = 0; i29 < this.collectedEnterElements.length; i29++) {
        const elm = this.collectedEnterElements[i29];
        addClass(elm, STAR_CLASSNAME);
      }
    }
    if (this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
      const cleanupFns = [];
      try {
        players = this._flushAnimations(cleanupFns, microtaskId);
      } finally {
        for (let i29 = 0; i29 < cleanupFns.length; i29++) {
          cleanupFns[i29]();
        }
      }
    } else {
      for (let i29 = 0; i29 < this.collectedLeaveElements.length; i29++) {
        const element = this.collectedLeaveElements[i29];
        this.processLeaveNode(element);
      }
    }
    this.totalQueuedPlayers = 0;
    this.collectedEnterElements.length = 0;
    this.collectedLeaveElements.length = 0;
    this._flushFns.forEach((fn) => fn());
    this._flushFns = [];
    if (this._whenQuietFns.length) {
      const quietFns = this._whenQuietFns;
      this._whenQuietFns = [];
      if (players.length) {
        optimizeGroupPlayer(players).onDone(() => {
          quietFns.forEach((fn) => fn());
        });
      } else {
        quietFns.forEach((fn) => fn());
      }
    }
  }
  reportError(errors) {
    throw triggerTransitionsFailed(errors);
  }
  _flushAnimations(cleanupFns, microtaskId) {
    const subTimelines = new ElementInstructionMap();
    const skippedPlayers = [];
    const skippedPlayersMap = /* @__PURE__ */ new Map();
    const queuedInstructions = [];
    const queriedElements = /* @__PURE__ */ new Map();
    const allPreStyleElements = /* @__PURE__ */ new Map();
    const allPostStyleElements = /* @__PURE__ */ new Map();
    const disabledElementsSet = /* @__PURE__ */ new Set();
    this.disabledNodes.forEach((node) => {
      disabledElementsSet.add(node);
      const nodesThatAreDisabled = this.driver.query(node, QUEUED_SELECTOR, true);
      for (let i30 = 0; i30 < nodesThatAreDisabled.length; i30++) {
        disabledElementsSet.add(nodesThatAreDisabled[i30]);
      }
    });
    const bodyNode = this.bodyNode;
    const allTriggerElements = Array.from(this.statesByElement.keys());
    const enterNodeMap = buildRootMap(allTriggerElements, this.collectedEnterElements);
    const enterNodeMapIds = /* @__PURE__ */ new Map();
    let i29 = 0;
    enterNodeMap.forEach((nodes, root) => {
      const className = ENTER_CLASSNAME + i29++;
      enterNodeMapIds.set(root, className);
      nodes.forEach((node) => addClass(node, className));
    });
    const allLeaveNodes = [];
    const mergedLeaveNodes = /* @__PURE__ */ new Set();
    const leaveNodesWithoutAnimations = /* @__PURE__ */ new Set();
    for (let i30 = 0; i30 < this.collectedLeaveElements.length; i30++) {
      const element = this.collectedLeaveElements[i30];
      const details = element[REMOVAL_FLAG];
      if (details && details.setForRemoval) {
        allLeaveNodes.push(element);
        mergedLeaveNodes.add(element);
        if (details.hasAnimation) {
          this.driver.query(element, STAR_SELECTOR, true).forEach((elm) => mergedLeaveNodes.add(elm));
        } else {
          leaveNodesWithoutAnimations.add(element);
        }
      }
    }
    const leaveNodeMapIds = /* @__PURE__ */ new Map();
    const leaveNodeMap = buildRootMap(allTriggerElements, Array.from(mergedLeaveNodes));
    leaveNodeMap.forEach((nodes, root) => {
      const className = LEAVE_CLASSNAME + i29++;
      leaveNodeMapIds.set(root, className);
      nodes.forEach((node) => addClass(node, className));
    });
    cleanupFns.push(() => {
      enterNodeMap.forEach((nodes, root) => {
        const className = enterNodeMapIds.get(root);
        nodes.forEach((node) => removeClass(node, className));
      });
      leaveNodeMap.forEach((nodes, root) => {
        const className = leaveNodeMapIds.get(root);
        nodes.forEach((node) => removeClass(node, className));
      });
      allLeaveNodes.forEach((element) => {
        this.processLeaveNode(element);
      });
    });
    const allPlayers = [];
    const erroneousTransitions = [];
    for (let i30 = this._namespaceList.length - 1; i30 >= 0; i30--) {
      const ns = this._namespaceList[i30];
      ns.drainQueuedTransitions(microtaskId).forEach((entry) => {
        const player = entry.player;
        const element = entry.element;
        allPlayers.push(player);
        if (this.collectedEnterElements.length) {
          const details = element[REMOVAL_FLAG];
          if (details && details.setForMove) {
            if (details.previousTriggersValues && details.previousTriggersValues.has(entry.triggerName)) {
              const previousValue = details.previousTriggersValues.get(entry.triggerName);
              const triggersWithStates = this.statesByElement.get(entry.element);
              if (triggersWithStates && triggersWithStates.has(entry.triggerName)) {
                const state = triggersWithStates.get(entry.triggerName);
                state.value = previousValue;
                triggersWithStates.set(entry.triggerName, state);
              }
            }
            player.destroy();
            return;
          }
        }
        const nodeIsOrphaned = !bodyNode || !this.driver.containsElement(bodyNode, element);
        const leaveClassName = leaveNodeMapIds.get(element);
        const enterClassName = enterNodeMapIds.get(element);
        const instruction = this._buildInstruction(entry, subTimelines, enterClassName, leaveClassName, nodeIsOrphaned);
        if (instruction.errors && instruction.errors.length) {
          erroneousTransitions.push(instruction);
          return;
        }
        if (nodeIsOrphaned) {
          player.onStart(() => eraseStyles(element, instruction.fromStyles));
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          skippedPlayers.push(player);
          return;
        }
        if (entry.isFallbackTransition) {
          player.onStart(() => eraseStyles(element, instruction.fromStyles));
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          skippedPlayers.push(player);
          return;
        }
        const timelines = [];
        instruction.timelines.forEach((tl) => {
          tl.stretchStartingKeyframe = true;
          if (!this.disabledNodes.has(tl.element)) {
            timelines.push(tl);
          }
        });
        instruction.timelines = timelines;
        subTimelines.append(element, instruction.timelines);
        const tuple = {
          instruction,
          player,
          element
        };
        queuedInstructions.push(tuple);
        instruction.queriedElements.forEach((element2) => getOrSetDefaultValue(queriedElements, element2, []).push(player));
        instruction.preStyleProps.forEach((stringMap, element2) => {
          if (stringMap.size) {
            let setVal = allPreStyleElements.get(element2);
            if (!setVal) {
              allPreStyleElements.set(element2, setVal = /* @__PURE__ */ new Set());
            }
            stringMap.forEach((_, prop) => setVal.add(prop));
          }
        });
        instruction.postStyleProps.forEach((stringMap, element2) => {
          let setVal = allPostStyleElements.get(element2);
          if (!setVal) {
            allPostStyleElements.set(element2, setVal = /* @__PURE__ */ new Set());
          }
          stringMap.forEach((_, prop) => setVal.add(prop));
        });
      });
    }
    if (erroneousTransitions.length) {
      const errors = [];
      erroneousTransitions.forEach((instruction) => {
        errors.push(transitionFailed(instruction.triggerName, instruction.errors));
      });
      allPlayers.forEach((player) => player.destroy());
      this.reportError(errors);
    }
    const allPreviousPlayersMap = /* @__PURE__ */ new Map();
    const animationElementMap = /* @__PURE__ */ new Map();
    queuedInstructions.forEach((entry) => {
      const element = entry.element;
      if (subTimelines.has(element)) {
        animationElementMap.set(element, element);
        this._beforeAnimationBuild(entry.player.namespaceId, entry.instruction, allPreviousPlayersMap);
      }
    });
    skippedPlayers.forEach((player) => {
      const element = player.element;
      const previousPlayers = this._getPreviousPlayers(element, false, player.namespaceId, player.triggerName, null);
      previousPlayers.forEach((prevPlayer) => {
        getOrSetDefaultValue(allPreviousPlayersMap, element, []).push(prevPlayer);
        prevPlayer.destroy();
      });
    });
    const replaceNodes = allLeaveNodes.filter((node) => {
      return replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements);
    });
    const postStylesMap = /* @__PURE__ */ new Map();
    const allLeaveQueriedNodes = cloakAndComputeStyles(postStylesMap, this.driver, leaveNodesWithoutAnimations, allPostStyleElements, AUTO_STYLE);
    allLeaveQueriedNodes.forEach((node) => {
      if (replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements)) {
        replaceNodes.push(node);
      }
    });
    const preStylesMap = /* @__PURE__ */ new Map();
    enterNodeMap.forEach((nodes, root) => {
      cloakAndComputeStyles(preStylesMap, this.driver, new Set(nodes), allPreStyleElements, \u0275PRE_STYLE);
    });
    replaceNodes.forEach((node) => {
      const post = postStylesMap.get(node);
      const pre = preStylesMap.get(node);
      postStylesMap.set(node, new Map([...post?.entries() ?? [], ...pre?.entries() ?? []]));
    });
    const rootPlayers = [];
    const subPlayers = [];
    const NO_PARENT_ANIMATION_ELEMENT_DETECTED = {};
    queuedInstructions.forEach((entry) => {
      const {
        element,
        player,
        instruction
      } = entry;
      if (subTimelines.has(element)) {
        if (disabledElementsSet.has(element)) {
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          player.disabled = true;
          player.overrideTotalTime(instruction.totalTime);
          skippedPlayers.push(player);
          return;
        }
        let parentWithAnimation = NO_PARENT_ANIMATION_ELEMENT_DETECTED;
        if (animationElementMap.size > 1) {
          let elm = element;
          const parentsToAdd = [];
          while (elm = elm.parentNode) {
            const detectedParent = animationElementMap.get(elm);
            if (detectedParent) {
              parentWithAnimation = detectedParent;
              break;
            }
            parentsToAdd.push(elm);
          }
          parentsToAdd.forEach((parent) => animationElementMap.set(parent, parentWithAnimation));
        }
        const innerPlayer = this._buildAnimation(player.namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap);
        player.setRealPlayer(innerPlayer);
        if (parentWithAnimation === NO_PARENT_ANIMATION_ELEMENT_DETECTED) {
          rootPlayers.push(player);
        } else {
          const parentPlayers = this.playersByElement.get(parentWithAnimation);
          if (parentPlayers && parentPlayers.length) {
            player.parentPlayer = optimizeGroupPlayer(parentPlayers);
          }
          skippedPlayers.push(player);
        }
      } else {
        eraseStyles(element, instruction.fromStyles);
        player.onDestroy(() => setStyles(element, instruction.toStyles));
        subPlayers.push(player);
        if (disabledElementsSet.has(element)) {
          skippedPlayers.push(player);
        }
      }
    });
    subPlayers.forEach((player) => {
      const playersForElement = skippedPlayersMap.get(player.element);
      if (playersForElement && playersForElement.length) {
        const innerPlayer = optimizeGroupPlayer(playersForElement);
        player.setRealPlayer(innerPlayer);
      }
    });
    skippedPlayers.forEach((player) => {
      if (player.parentPlayer) {
        player.syncPlayerEvents(player.parentPlayer);
      } else {
        player.destroy();
      }
    });
    for (let i30 = 0; i30 < allLeaveNodes.length; i30++) {
      const element = allLeaveNodes[i30];
      const details = element[REMOVAL_FLAG];
      removeClass(element, LEAVE_CLASSNAME);
      if (details && details.hasAnimation) continue;
      let players = [];
      if (queriedElements.size) {
        let queriedPlayerResults = queriedElements.get(element);
        if (queriedPlayerResults && queriedPlayerResults.length) {
          players.push(...queriedPlayerResults);
        }
        let queriedInnerElements = this.driver.query(element, NG_ANIMATING_SELECTOR, true);
        for (let j = 0; j < queriedInnerElements.length; j++) {
          let queriedPlayers = queriedElements.get(queriedInnerElements[j]);
          if (queriedPlayers && queriedPlayers.length) {
            players.push(...queriedPlayers);
          }
        }
      }
      const activePlayers = players.filter((p4) => !p4.destroyed);
      if (activePlayers.length) {
        removeNodesAfterAnimationDone(this, element, activePlayers);
      } else {
        this.processLeaveNode(element);
      }
    }
    allLeaveNodes.length = 0;
    rootPlayers.forEach((player) => {
      this.players.push(player);
      player.onDone(() => {
        player.destroy();
        const index = this.players.indexOf(player);
        this.players.splice(index, 1);
      });
      player.play();
    });
    return rootPlayers;
  }
  afterFlush(callback) {
    this._flushFns.push(callback);
  }
  afterFlushAnimationsDone(callback) {
    this._whenQuietFns.push(callback);
  }
  _getPreviousPlayers(element, isQueriedElement, namespaceId, triggerName, toStateValue) {
    let players = [];
    if (isQueriedElement) {
      const queriedElementPlayers = this.playersByQueriedElement.get(element);
      if (queriedElementPlayers) {
        players = queriedElementPlayers;
      }
    } else {
      const elementPlayers = this.playersByElement.get(element);
      if (elementPlayers) {
        const isRemovalAnimation = !toStateValue || toStateValue == VOID_VALUE;
        elementPlayers.forEach((player) => {
          if (player.queued) return;
          if (!isRemovalAnimation && player.triggerName != triggerName) return;
          players.push(player);
        });
      }
    }
    if (namespaceId || triggerName) {
      players = players.filter((player) => {
        if (namespaceId && namespaceId != player.namespaceId) return false;
        if (triggerName && triggerName != player.triggerName) return false;
        return true;
      });
    }
    return players;
  }
  _beforeAnimationBuild(namespaceId, instruction, allPreviousPlayersMap) {
    const triggerName = instruction.triggerName;
    const rootElement = instruction.element;
    const targetNameSpaceId = instruction.isRemovalTransition ? void 0 : namespaceId;
    const targetTriggerName = instruction.isRemovalTransition ? void 0 : triggerName;
    for (const timelineInstruction of instruction.timelines) {
      const element = timelineInstruction.element;
      const isQueriedElement = element !== rootElement;
      const players = getOrSetDefaultValue(allPreviousPlayersMap, element, []);
      const previousPlayers = this._getPreviousPlayers(element, isQueriedElement, targetNameSpaceId, targetTriggerName, instruction.toState);
      previousPlayers.forEach((player) => {
        const realPlayer = player.getRealPlayer();
        if (realPlayer.beforeDestroy) {
          realPlayer.beforeDestroy();
        }
        player.destroy();
        players.push(player);
      });
    }
    eraseStyles(rootElement, instruction.fromStyles);
  }
  _buildAnimation(namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap) {
    const triggerName = instruction.triggerName;
    const rootElement = instruction.element;
    const allQueriedPlayers = [];
    const allConsumedElements = /* @__PURE__ */ new Set();
    const allSubElements = /* @__PURE__ */ new Set();
    const allNewPlayers = instruction.timelines.map((timelineInstruction) => {
      const element = timelineInstruction.element;
      allConsumedElements.add(element);
      const details = element[REMOVAL_FLAG];
      if (details && details.removedBeforeQueried) return new NoopAnimationPlayer(timelineInstruction.duration, timelineInstruction.delay);
      const isQueriedElement = element !== rootElement;
      const previousPlayers = flattenGroupPlayers((allPreviousPlayersMap.get(element) || EMPTY_PLAYER_ARRAY).map((p4) => p4.getRealPlayer())).filter((p4) => {
        const pp = p4;
        return pp.element ? pp.element === element : false;
      });
      const preStyles = preStylesMap.get(element);
      const postStyles = postStylesMap.get(element);
      const keyframes = normalizeKeyframes$1(this._normalizer, timelineInstruction.keyframes, preStyles, postStyles);
      const player2 = this._buildPlayer(timelineInstruction, keyframes, previousPlayers);
      if (timelineInstruction.subTimeline && skippedPlayersMap) {
        allSubElements.add(element);
      }
      if (isQueriedElement) {
        const wrappedPlayer = new TransitionAnimationPlayer(namespaceId, triggerName, element);
        wrappedPlayer.setRealPlayer(player2);
        allQueriedPlayers.push(wrappedPlayer);
      }
      return player2;
    });
    allQueriedPlayers.forEach((player2) => {
      getOrSetDefaultValue(this.playersByQueriedElement, player2.element, []).push(player2);
      player2.onDone(() => deleteOrUnsetInMap(this.playersByQueriedElement, player2.element, player2));
    });
    allConsumedElements.forEach((element) => addClass(element, NG_ANIMATING_CLASSNAME));
    const player = optimizeGroupPlayer(allNewPlayers);
    player.onDestroy(() => {
      allConsumedElements.forEach((element) => removeClass(element, NG_ANIMATING_CLASSNAME));
      setStyles(rootElement, instruction.toStyles);
    });
    allSubElements.forEach((element) => {
      getOrSetDefaultValue(skippedPlayersMap, element, []).push(player);
    });
    return player;
  }
  _buildPlayer(instruction, keyframes, previousPlayers) {
    if (keyframes.length > 0) {
      return this.driver.animate(instruction.element, keyframes, instruction.duration, instruction.delay, instruction.easing, previousPlayers);
    }
    return new NoopAnimationPlayer(instruction.duration, instruction.delay);
  }
};
var TransitionAnimationPlayer = class {
  namespaceId;
  triggerName;
  element;
  _player = new NoopAnimationPlayer();
  _containsRealPlayer = false;
  _queuedCallbacks = /* @__PURE__ */ new Map();
  destroyed = false;
  parentPlayer = null;
  markedForDestroy = false;
  disabled = false;
  queued = true;
  totalTime = 0;
  constructor(namespaceId, triggerName, element) {
    this.namespaceId = namespaceId;
    this.triggerName = triggerName;
    this.element = element;
  }
  setRealPlayer(player) {
    if (this._containsRealPlayer) return;
    this._player = player;
    this._queuedCallbacks.forEach((callbacks, phase) => {
      callbacks.forEach((callback) => listenOnPlayer(player, phase, void 0, callback));
    });
    this._queuedCallbacks.clear();
    this._containsRealPlayer = true;
    this.overrideTotalTime(player.totalTime);
    this.queued = false;
  }
  getRealPlayer() {
    return this._player;
  }
  overrideTotalTime(totalTime) {
    this.totalTime = totalTime;
  }
  syncPlayerEvents(player) {
    const p4 = this._player;
    if (p4.triggerCallback) {
      player.onStart(() => p4.triggerCallback("start"));
    }
    player.onDone(() => this.finish());
    player.onDestroy(() => this.destroy());
  }
  _queueEvent(name, callback) {
    getOrSetDefaultValue(this._queuedCallbacks, name, []).push(callback);
  }
  onDone(fn) {
    if (this.queued) {
      this._queueEvent("done", fn);
    }
    this._player.onDone(fn);
  }
  onStart(fn) {
    if (this.queued) {
      this._queueEvent("start", fn);
    }
    this._player.onStart(fn);
  }
  onDestroy(fn) {
    if (this.queued) {
      this._queueEvent("destroy", fn);
    }
    this._player.onDestroy(fn);
  }
  init() {
    this._player.init();
  }
  hasStarted() {
    return this.queued ? false : this._player.hasStarted();
  }
  play() {
    !this.queued && this._player.play();
  }
  pause() {
    !this.queued && this._player.pause();
  }
  restart() {
    !this.queued && this._player.restart();
  }
  finish() {
    this._player.finish();
  }
  destroy() {
    this.destroyed = true;
    this._player.destroy();
  }
  reset() {
    !this.queued && this._player.reset();
  }
  setPosition(p4) {
    if (!this.queued) {
      this._player.setPosition(p4);
    }
  }
  getPosition() {
    return this.queued ? 0 : this._player.getPosition();
  }
  /** @internal */
  triggerCallback(phaseName) {
    const p4 = this._player;
    if (p4.triggerCallback) {
      p4.triggerCallback(phaseName);
    }
  }
};
function deleteOrUnsetInMap(map2, key, value) {
  let currentValues = map2.get(key);
  if (currentValues) {
    if (currentValues.length) {
      const index = currentValues.indexOf(value);
      currentValues.splice(index, 1);
    }
    if (currentValues.length == 0) {
      map2.delete(key);
    }
  }
  return currentValues;
}
function normalizeTriggerValue(value) {
  return value != null ? value : null;
}
function isElementNode(node) {
  return node && node["nodeType"] === 1;
}
function isTriggerEventValid(eventName) {
  return eventName == "start" || eventName == "done";
}
function cloakElement(element, value) {
  const oldValue = element.style.display;
  element.style.display = value != null ? value : "none";
  return oldValue;
}
function cloakAndComputeStyles(valuesMap, driver, elements, elementPropsMap, defaultStyle) {
  const cloakVals = [];
  elements.forEach((element) => cloakVals.push(cloakElement(element)));
  const failedElements = [];
  elementPropsMap.forEach((props, element) => {
    const styles = /* @__PURE__ */ new Map();
    props.forEach((prop) => {
      const value = driver.computeStyle(element, prop, defaultStyle);
      styles.set(prop, value);
      if (!value || value.length == 0) {
        element[REMOVAL_FLAG] = NULL_REMOVED_QUERIED_STATE;
        failedElements.push(element);
      }
    });
    valuesMap.set(element, styles);
  });
  let i29 = 0;
  elements.forEach((element) => cloakElement(element, cloakVals[i29++]));
  return failedElements;
}
function buildRootMap(roots, nodes) {
  const rootMap = /* @__PURE__ */ new Map();
  roots.forEach((root) => rootMap.set(root, []));
  if (nodes.length == 0) return rootMap;
  const NULL_NODE = 1;
  const nodeSet = new Set(nodes);
  const localRootMap = /* @__PURE__ */ new Map();
  function getRoot(node) {
    if (!node) return NULL_NODE;
    let root = localRootMap.get(node);
    if (root) return root;
    const parent = node.parentNode;
    if (rootMap.has(parent)) {
      root = parent;
    } else if (nodeSet.has(parent)) {
      root = NULL_NODE;
    } else {
      root = getRoot(parent);
    }
    localRootMap.set(node, root);
    return root;
  }
  nodes.forEach((node) => {
    const root = getRoot(node);
    if (root !== NULL_NODE) {
      rootMap.get(root).push(node);
    }
  });
  return rootMap;
}
function addClass(element, className) {
  element.classList?.add(className);
}
function removeClass(element, className) {
  element.classList?.remove(className);
}
function removeNodesAfterAnimationDone(engine, element, players) {
  optimizeGroupPlayer(players).onDone(() => engine.processLeaveNode(element));
}
function flattenGroupPlayers(players) {
  const finalPlayers = [];
  _flattenGroupPlayersRecur(players, finalPlayers);
  return finalPlayers;
}
function _flattenGroupPlayersRecur(players, finalPlayers) {
  for (let i29 = 0; i29 < players.length; i29++) {
    const player = players[i29];
    if (player instanceof AnimationGroupPlayer) {
      _flattenGroupPlayersRecur(player.players, finalPlayers);
    } else {
      finalPlayers.push(player);
    }
  }
}
function objEquals(a43, b5) {
  const k1 = Object.keys(a43);
  const k22 = Object.keys(b5);
  if (k1.length != k22.length) return false;
  for (let i29 = 0; i29 < k1.length; i29++) {
    const prop = k1[i29];
    if (!b5.hasOwnProperty(prop) || a43[prop] !== b5[prop]) return false;
  }
  return true;
}
function replacePostStylesAsPre(element, allPreStyleElements, allPostStyleElements) {
  const postEntry = allPostStyleElements.get(element);
  if (!postEntry) return false;
  let preEntry = allPreStyleElements.get(element);
  if (preEntry) {
    postEntry.forEach((data) => preEntry.add(data));
  } else {
    allPreStyleElements.set(element, postEntry);
  }
  allPostStyleElements.delete(element);
  return true;
}
var AnimationEngine = class {
  _driver;
  _normalizer;
  _transitionEngine;
  _timelineEngine;
  _triggerCache = {};
  // this method is designed to be overridden by the code that uses this engine
  onRemovalComplete = (element, context) => {
  };
  constructor(doc, _driver, _normalizer) {
    this._driver = _driver;
    this._normalizer = _normalizer;
    this._transitionEngine = new TransitionAnimationEngine(doc.body, _driver, _normalizer);
    this._timelineEngine = new TimelineAnimationEngine(doc.body, _driver, _normalizer);
    this._transitionEngine.onRemovalComplete = (element, context) => this.onRemovalComplete(element, context);
  }
  registerTrigger(componentId, namespaceId, hostElement, name, metadata) {
    const cacheKey = componentId + "-" + name;
    let trigger = this._triggerCache[cacheKey];
    if (!trigger) {
      const errors = [];
      const warnings = [];
      const ast = buildAnimationAst(this._driver, metadata, errors, warnings);
      if (errors.length) {
        throw triggerBuildFailed(name, errors);
      }
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        if (warnings.length) {
          warnTriggerBuild(name, warnings);
        }
      }
      trigger = buildTrigger(name, ast, this._normalizer);
      this._triggerCache[cacheKey] = trigger;
    }
    this._transitionEngine.registerTrigger(namespaceId, name, trigger);
  }
  register(namespaceId, hostElement) {
    this._transitionEngine.register(namespaceId, hostElement);
  }
  destroy(namespaceId, context) {
    this._transitionEngine.destroy(namespaceId, context);
  }
  onInsert(namespaceId, element, parent, insertBefore) {
    this._transitionEngine.insertNode(namespaceId, element, parent, insertBefore);
  }
  onRemove(namespaceId, element, context) {
    this._transitionEngine.removeNode(namespaceId, element, context);
  }
  disableAnimations(element, disable) {
    this._transitionEngine.markElementAsDisabled(element, disable);
  }
  process(namespaceId, element, property, value) {
    if (property.charAt(0) == "@") {
      const [id, action] = parseTimelineCommand(property);
      const args = value;
      this._timelineEngine.command(id, element, action, args);
    } else {
      this._transitionEngine.trigger(namespaceId, element, property, value);
    }
  }
  listen(namespaceId, element, eventName, eventPhase, callback) {
    if (eventName.charAt(0) == "@") {
      const [id, action] = parseTimelineCommand(eventName);
      return this._timelineEngine.listen(id, element, action, callback);
    }
    return this._transitionEngine.listen(namespaceId, element, eventName, eventPhase, callback);
  }
  flush(microtaskId = -1) {
    this._transitionEngine.flush(microtaskId);
  }
  get players() {
    return [...this._transitionEngine.players, ...this._timelineEngine.players];
  }
  whenRenderingDone() {
    return this._transitionEngine.whenRenderingDone();
  }
  afterFlushAnimationsDone(cb) {
    this._transitionEngine.afterFlushAnimationsDone(cb);
  }
};
function packageNonAnimatableStyles(element, styles) {
  let startStyles = null;
  let endStyles = null;
  if (Array.isArray(styles) && styles.length) {
    startStyles = filterNonAnimatableStyles(styles[0]);
    if (styles.length > 1) {
      endStyles = filterNonAnimatableStyles(styles[styles.length - 1]);
    }
  } else if (styles instanceof Map) {
    startStyles = filterNonAnimatableStyles(styles);
  }
  return startStyles || endStyles ? new SpecialCasedStyles(element, startStyles, endStyles) : null;
}
var SpecialCasedStyles = class _SpecialCasedStyles {
  _element;
  _startStyles;
  _endStyles;
  static initialStylesByElement = /* @__PURE__ */ new WeakMap();
  _state = 0;
  _initialStyles;
  constructor(_element, _startStyles, _endStyles) {
    this._element = _element;
    this._startStyles = _startStyles;
    this._endStyles = _endStyles;
    let initialStyles = _SpecialCasedStyles.initialStylesByElement.get(_element);
    if (!initialStyles) {
      _SpecialCasedStyles.initialStylesByElement.set(_element, initialStyles = /* @__PURE__ */ new Map());
    }
    this._initialStyles = initialStyles;
  }
  start() {
    if (this._state < 1) {
      if (this._startStyles) {
        setStyles(this._element, this._startStyles, this._initialStyles);
      }
      this._state = 1;
    }
  }
  finish() {
    this.start();
    if (this._state < 2) {
      setStyles(this._element, this._initialStyles);
      if (this._endStyles) {
        setStyles(this._element, this._endStyles);
        this._endStyles = null;
      }
      this._state = 1;
    }
  }
  destroy() {
    this.finish();
    if (this._state < 3) {
      _SpecialCasedStyles.initialStylesByElement.delete(this._element);
      if (this._startStyles) {
        eraseStyles(this._element, this._startStyles);
        this._endStyles = null;
      }
      if (this._endStyles) {
        eraseStyles(this._element, this._endStyles);
        this._endStyles = null;
      }
      setStyles(this._element, this._initialStyles);
      this._state = 3;
    }
  }
};
function filterNonAnimatableStyles(styles) {
  let result = null;
  styles.forEach((val, prop) => {
    if (isNonAnimatableStyle(prop)) {
      result = result || /* @__PURE__ */ new Map();
      result.set(prop, val);
    }
  });
  return result;
}
function isNonAnimatableStyle(prop) {
  return prop === "display" || prop === "position";
}
var WebAnimationsPlayer = class {
  element;
  keyframes;
  options;
  _specialStyles;
  _onDoneFns = [];
  _onStartFns = [];
  _onDestroyFns = [];
  _duration;
  _delay;
  _initialized = false;
  _finished = false;
  _started = false;
  _destroyed = false;
  _finalKeyframe;
  // the following original fns are persistent copies of the _onStartFns and _onDoneFns
  // and are used to reset the fns to their original values upon reset()
  // (since the _onStartFns and _onDoneFns get deleted after they are called)
  _originalOnDoneFns = [];
  _originalOnStartFns = [];
  domPlayer = null;
  time = 0;
  parentPlayer = null;
  currentSnapshot = /* @__PURE__ */ new Map();
  constructor(element, keyframes, options, _specialStyles) {
    this.element = element;
    this.keyframes = keyframes;
    this.options = options;
    this._specialStyles = _specialStyles;
    this._duration = options["duration"];
    this._delay = options["delay"] || 0;
    this.time = this._duration + this._delay;
  }
  _onFinish() {
    if (!this._finished) {
      this._finished = true;
      this._onDoneFns.forEach((fn) => fn());
      this._onDoneFns = [];
    }
  }
  init() {
    if (!this._buildPlayer()) {
      return;
    }
    this._preparePlayerBeforeStart();
  }
  _buildPlayer() {
    if (this._initialized) return this.domPlayer;
    this._initialized = true;
    const keyframes = this.keyframes;
    const animation = this._triggerWebAnimation(this.element, keyframes, this.options);
    if (!animation) {
      this._onFinish();
      return null;
    }
    this.domPlayer = animation;
    this._finalKeyframe = keyframes.length ? keyframes[keyframes.length - 1] : /* @__PURE__ */ new Map();
    const onFinish = () => this._onFinish();
    animation.addEventListener("finish", onFinish);
    this.onDestroy(() => {
      animation.removeEventListener("finish", onFinish);
    });
    return animation;
  }
  _preparePlayerBeforeStart() {
    if (this._delay) {
      this._resetDomPlayerState();
    } else {
      this.domPlayer?.pause();
    }
  }
  _convertKeyframesToObject(keyframes) {
    const kfs = [];
    keyframes.forEach((frame) => {
      kfs.push(Object.fromEntries(frame));
    });
    return kfs;
  }
  /** @internal */
  _triggerWebAnimation(element, keyframes, options) {
    const keyframesObject = this._convertKeyframesToObject(keyframes);
    try {
      return element.animate(keyframesObject, options);
    } catch {
      return null;
    }
  }
  onStart(fn) {
    this._originalOnStartFns.push(fn);
    this._onStartFns.push(fn);
  }
  onDone(fn) {
    this._originalOnDoneFns.push(fn);
    this._onDoneFns.push(fn);
  }
  onDestroy(fn) {
    this._onDestroyFns.push(fn);
  }
  play() {
    const player = this._buildPlayer();
    if (!player) {
      return;
    }
    if (!this.hasStarted()) {
      this._onStartFns.forEach((fn) => fn());
      this._onStartFns = [];
      this._started = true;
      if (this._specialStyles) {
        this._specialStyles.start();
      }
    }
    player.play();
  }
  pause() {
    this.init();
    this.domPlayer?.pause();
  }
  finish() {
    this.init();
    if (!this.domPlayer) return;
    if (this._specialStyles) {
      this._specialStyles.finish();
    }
    this._onFinish();
    this.domPlayer.finish();
  }
  reset() {
    this._resetDomPlayerState();
    this._destroyed = false;
    this._finished = false;
    this._started = false;
    this._onStartFns = this._originalOnStartFns;
    this._onDoneFns = this._originalOnDoneFns;
  }
  _resetDomPlayerState() {
    this.domPlayer?.cancel();
  }
  restart() {
    this.reset();
    this.play();
  }
  hasStarted() {
    return this._started;
  }
  destroy() {
    if (!this._destroyed) {
      this._destroyed = true;
      this._resetDomPlayerState();
      this._onFinish();
      if (this._specialStyles) {
        this._specialStyles.destroy();
      }
      this._onDestroyFns.forEach((fn) => fn());
      this._onDestroyFns = [];
    }
  }
  setPosition(p4) {
    if (!this.domPlayer) {
      this.init();
    }
    if (this.domPlayer) {
      this.domPlayer.currentTime = p4 * this.time;
    }
  }
  getPosition() {
    if (!this.domPlayer) {
      return this._initialized ? 1 : 0;
    }
    return +(this.domPlayer.currentTime ?? 0) / this.time;
  }
  get totalTime() {
    return this._delay + this._duration;
  }
  beforeDestroy() {
    const styles = /* @__PURE__ */ new Map();
    if (this.hasStarted()) {
      const finalKeyframe = this._finalKeyframe;
      finalKeyframe.forEach((val, prop) => {
        if (prop !== "offset") {
          styles.set(prop, this._finished ? val : computeStyle(this.element, prop));
        }
      });
    }
    this.currentSnapshot = styles;
  }
  /** @internal */
  triggerCallback(phaseName) {
    const methods = phaseName === "start" ? this._onStartFns : this._onDoneFns;
    methods.forEach((fn) => fn());
    methods.length = 0;
  }
};
var WebAnimationsDriver = class {
  validateStyleProperty(prop) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      return validateStyleProperty(prop);
    }
    return true;
  }
  validateAnimatableStyleProperty(prop) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      const cssProp = camelCaseToDashCase(prop);
      return validateWebAnimatableStyleProperty(cssProp);
    }
    return true;
  }
  containsElement(elm1, elm2) {
    return containsElement(elm1, elm2);
  }
  getParentElement(element) {
    return getParentElement(element);
  }
  query(element, selector, multi) {
    return invokeQuery(element, selector, multi);
  }
  computeStyle(element, prop, defaultValue) {
    return computeStyle(element, prop);
  }
  animate(element, keyframes, duration, delay, easing, previousPlayers = []) {
    const fill = delay == 0 ? "both" : "forwards";
    const playerOptions = {
      duration,
      delay,
      fill
    };
    if (easing) {
      playerOptions["easing"] = easing;
    }
    const previousStyles = /* @__PURE__ */ new Map();
    const previousWebAnimationPlayers = previousPlayers.filter((player) => player instanceof WebAnimationsPlayer);
    if (allowPreviousPlayerStylesMerge(duration, delay)) {
      previousWebAnimationPlayers.forEach((player) => {
        player.currentSnapshot.forEach((val, prop) => previousStyles.set(prop, val));
      });
    }
    let _keyframes = normalizeKeyframes(keyframes).map((styles) => new Map(styles));
    _keyframes = balancePreviousStylesIntoKeyframes(element, _keyframes, previousStyles);
    const specialStyles = packageNonAnimatableStyles(element, _keyframes);
    return new WebAnimationsPlayer(element, _keyframes, playerOptions, specialStyles);
  }
};
var ANIMATION_PREFIX = "@";
var DISABLE_ANIMATIONS_FLAG = "@.disabled";
var BaseAnimationRenderer = class {
  namespaceId;
  delegate;
  engine;
  _onDestroy;
  // We need to explicitly type this property because of an api-extractor bug
  // See https://github.com/microsoft/rushstack/issues/4390
  \u0275type = 0;
  constructor(namespaceId, delegate, engine, _onDestroy) {
    this.namespaceId = namespaceId;
    this.delegate = delegate;
    this.engine = engine;
    this._onDestroy = _onDestroy;
  }
  get data() {
    return this.delegate.data;
  }
  destroyNode(node) {
    this.delegate.destroyNode?.(node);
  }
  destroy() {
    this.engine.destroy(this.namespaceId, this.delegate);
    this.engine.afterFlushAnimationsDone(() => {
      queueMicrotask(() => {
        this.delegate.destroy();
      });
    });
    this._onDestroy?.();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
    this.engine.onInsert(this.namespaceId, newChild, parent, false);
  }
  insertBefore(parent, newChild, refChild, isMove = true) {
    this.delegate.insertBefore(parent, newChild, refChild);
    this.engine.onInsert(this.namespaceId, newChild, parent, isMove);
  }
  // TODO(thePunderWoman): remove the requireSynchronousElementRemoval flag after the
  // animations package has been fully deleted post v23.
  removeChild(parent, oldChild, isHostElement, requireSynchronousElementRemoval) {
    if (requireSynchronousElementRemoval) {
      this.delegate.removeChild(parent, oldChild, isHostElement, requireSynchronousElementRemoval);
      return;
    }
    if (this.parentNode(oldChild)) {
      this.engine.onRemove(this.namespaceId, oldChild, this.delegate);
    }
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style6, value, flags) {
    this.delegate.setStyle(el, style6, value, flags);
  }
  removeStyle(el, style6, flags) {
    this.delegate.removeStyle(el, style6, flags);
  }
  setProperty(el, name, value) {
    if (name.charAt(0) == ANIMATION_PREFIX && name == DISABLE_ANIMATIONS_FLAG) {
      this.disableAnimations(el, !!value);
    } else {
      this.delegate.setProperty(el, name, value);
    }
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback, options) {
    return this.delegate.listen(target, eventName, callback, options);
  }
  disableAnimations(element, value) {
    this.engine.disableAnimations(element, value);
  }
};
var AnimationRenderer = class extends BaseAnimationRenderer {
  factory;
  constructor(factory, namespaceId, delegate, engine, onDestroy) {
    super(namespaceId, delegate, engine, onDestroy);
    this.factory = factory;
    this.namespaceId = namespaceId;
  }
  setProperty(el, name, value) {
    if (name.charAt(0) == ANIMATION_PREFIX) {
      if (name.charAt(1) == "." && name == DISABLE_ANIMATIONS_FLAG) {
        value = value === void 0 ? true : !!value;
        this.disableAnimations(el, value);
      } else {
        this.engine.process(this.namespaceId, el, name.slice(1), value);
      }
    } else {
      this.delegate.setProperty(el, name, value);
    }
  }
  listen(target, eventName, callback, options) {
    if (eventName.charAt(0) == ANIMATION_PREFIX) {
      const element = resolveElementFromTarget(target);
      let name = eventName.slice(1);
      let phase = "";
      if (name.charAt(0) != ANIMATION_PREFIX) {
        [name, phase] = parseTriggerCallbackName(name);
      }
      return this.engine.listen(this.namespaceId, element, name, phase, (event) => {
        const countId = event["_data"] || -1;
        this.factory.scheduleListenerCallback(countId, callback, event);
      });
    }
    return this.delegate.listen(target, eventName, callback, options);
  }
};
function resolveElementFromTarget(target) {
  switch (target) {
    case "body":
      return document.body;
    case "document":
      return document;
    case "window":
      return window;
    default:
      return target;
  }
}
function parseTriggerCallbackName(triggerName) {
  const dotIndex = triggerName.indexOf(".");
  const trigger = triggerName.substring(0, dotIndex);
  const phase = triggerName.slice(dotIndex + 1);
  return [trigger, phase];
}
var AnimationRendererFactory = class {
  delegate;
  engine;
  _zone;
  _currentId = 0;
  _microtaskId = 1;
  _animationCallbacksBuffer = [];
  _rendererCache = /* @__PURE__ */ new Map();
  _cdRecurDepth = 0;
  constructor(delegate, engine, _zone) {
    this.delegate = delegate;
    this.engine = engine;
    this._zone = _zone;
    engine.onRemovalComplete = (element, delegate2) => {
      delegate2?.removeChild(null, element);
    };
  }
  createRenderer(hostElement, type) {
    const EMPTY_NAMESPACE_ID = "";
    const delegate = this.delegate.createRenderer(hostElement, type);
    if (!hostElement || !type?.data?.["animation"]) {
      const cache = this._rendererCache;
      let renderer = cache.get(delegate);
      if (!renderer) {
        const onRendererDestroy = () => cache.delete(delegate);
        renderer = new BaseAnimationRenderer(EMPTY_NAMESPACE_ID, delegate, this.engine, onRendererDestroy);
        cache.set(delegate, renderer);
      }
      return renderer;
    }
    const componentId = type.id;
    const namespaceId = type.id + "-" + this._currentId;
    this._currentId++;
    this.engine.register(namespaceId, hostElement);
    const registerTrigger = (trigger) => {
      if (Array.isArray(trigger)) {
        trigger.forEach(registerTrigger);
      } else {
        this.engine.registerTrigger(componentId, namespaceId, hostElement, trigger.name, trigger);
      }
    };
    const animationTriggers = type.data["animation"];
    animationTriggers.forEach(registerTrigger);
    return new AnimationRenderer(this, namespaceId, delegate, this.engine);
  }
  begin() {
    this._cdRecurDepth++;
    if (this.delegate.begin) {
      this.delegate.begin();
    }
  }
  _scheduleCountTask() {
    queueMicrotask(() => {
      this._microtaskId++;
    });
  }
  /** @internal */
  scheduleListenerCallback(count, fn, data) {
    if (count >= 0 && count < this._microtaskId) {
      this._zone.run(() => fn(data));
      return;
    }
    const animationCallbacksBuffer = this._animationCallbacksBuffer;
    if (animationCallbacksBuffer.length == 0) {
      queueMicrotask(() => {
        this._zone.run(() => {
          animationCallbacksBuffer.forEach((tuple) => {
            const [fn2, data2] = tuple;
            fn2(data2);
          });
          this._animationCallbacksBuffer = [];
        });
      });
    }
    animationCallbacksBuffer.push([fn, data]);
  }
  end() {
    this._cdRecurDepth--;
    if (this._cdRecurDepth == 0) {
      this._zone.runOutsideAngular(() => {
        this._scheduleCountTask();
        this.engine.flush(this._microtaskId);
      });
    }
    if (this.delegate.end) {
      this.delegate.end();
    }
  }
  whenRenderingDone() {
    return this.engine.whenRenderingDone();
  }
  /**
   * Used during HMR to clear any cached data about a component.
   * @param componentId ID of the component that is being replaced.
   */
  componentReplaced(componentId) {
    this.engine.flush();
    this.delegate.componentReplaced?.(componentId);
  }
};

// node_modules/@angular/platform-browser/fesm2022/animations.mjs
var InjectableAnimationEngine = class _InjectableAnimationEngine extends AnimationEngine {
  // The `ApplicationRef` is injected here explicitly to force the dependency ordering.
  // Since the `ApplicationRef` should be created earlier before the `AnimationEngine`, they
  // both have `ngOnDestroy` hooks and `flush()` must be called after all views are destroyed.
  constructor(doc, driver, normalizer) {
    super(doc, driver, normalizer);
  }
  ngOnDestroy() {
    this.flush();
  }
  static \u0275fac = function InjectableAnimationEngine_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InjectableAnimationEngine)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(AnimationDriver), \u0275\u0275inject(AnimationStyleNormalizer));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _InjectableAnimationEngine,
    factory: _InjectableAnimationEngine.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InjectableAnimationEngine, [{
    type: Injectable
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: AnimationDriver
  }, {
    type: AnimationStyleNormalizer
  }], null);
})();
function instantiateDefaultStyleNormalizer() {
  return new WebAnimationsStyleNormalizer();
}
function instantiateRendererFactory(renderer, engine, zone) {
  return new AnimationRendererFactory(renderer, engine, zone);
}
var SHARED_ANIMATION_PROVIDERS = [{
  provide: AnimationStyleNormalizer,
  useFactory: instantiateDefaultStyleNormalizer
}, {
  provide: AnimationEngine,
  useClass: InjectableAnimationEngine
}, {
  provide: RendererFactory2,
  useFactory: instantiateRendererFactory,
  deps: [DomRendererFactory2, AnimationEngine, NgZone]
}];
var BROWSER_NOOP_ANIMATIONS_PROVIDERS = [{
  provide: AnimationDriver,
  useClass: NoopAnimationDriver
}, {
  provide: ANIMATION_MODULE_TYPE,
  useValue: "NoopAnimations"
}, ...SHARED_ANIMATION_PROVIDERS];
var BROWSER_ANIMATIONS_PROVIDERS = [
  // Note: the `ngServerMode` happen inside factories to give the variable time to initialize.
  {
    provide: AnimationDriver,
    useFactory: () => false ? new NoopAnimationDriver() : new WebAnimationsDriver()
  },
  {
    provide: ANIMATION_MODULE_TYPE,
    useFactory: () => false ? "NoopAnimations" : "BrowserAnimations"
  },
  ...SHARED_ANIMATION_PROVIDERS
];
var BrowserAnimationsModule = class _BrowserAnimationsModule {
  /**
   * Configures the module based on the specified object.
   *
   * @param config Object used to configure the behavior of the `BrowserAnimationsModule`.
   * @see {@link BrowserAnimationsModuleConfig}
   *
   * @usageNotes
   * When registering the `BrowserAnimationsModule`, you can use the `withConfig`
   * function as follows:
   * ```ts
   * @NgModule({
   *   imports: [BrowserAnimationsModule.withConfig(config)]
   * })
   * class MyNgModule {}
   * ```
   */
  static withConfig(config) {
    return {
      ngModule: _BrowserAnimationsModule,
      providers: config.disableAnimations ? BROWSER_NOOP_ANIMATIONS_PROVIDERS : BROWSER_ANIMATIONS_PROVIDERS
    };
  }
  static \u0275fac = function BrowserAnimationsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrowserAnimationsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _BrowserAnimationsModule,
    exports: [BrowserModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: BROWSER_ANIMATIONS_PROVIDERS,
    imports: [BrowserModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();
function provideAnimations() {
  performanceMarkFeature("NgEagerAnimations");
  return [...BROWSER_ANIMATIONS_PROVIDERS];
}
var NoopAnimationsModule = class _NoopAnimationsModule {
  static \u0275fac = function NoopAnimationsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoopAnimationsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NoopAnimationsModule,
    exports: [BrowserModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS,
    imports: [BrowserModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoopAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();

// node_modules/@angular/router/fesm2022/router2.mjs
var PRIMARY_OUTLET = "primary";
var RouteTitleKey = /* @__PURE__ */ Symbol("RouteTitle");
var ParamsAsMap = class {
  params;
  constructor(params) {
    this.params = params || {};
  }
  has(name) {
    return Object.prototype.hasOwnProperty.call(this.params, name);
  }
  get(name) {
    if (this.has(name)) {
      const v3 = this.params[name];
      return Array.isArray(v3) ? v3[0] : v3;
    }
    return null;
  }
  getAll(name) {
    if (this.has(name)) {
      const v3 = this.params[name];
      return Array.isArray(v3) ? v3 : [v3];
    }
    return [];
  }
  get keys() {
    return Object.keys(this.params);
  }
};
function convertToParamMap(params) {
  return new ParamsAsMap(params);
}
function defaultUrlMatcher(segments, segmentGroup, route) {
  const parts = route.path.split("/");
  if (parts.length > segments.length) {
    return null;
  }
  if (route.pathMatch === "full" && (segmentGroup.hasChildren() || parts.length < segments.length)) {
    return null;
  }
  const posParams = {};
  for (let index = 0; index < parts.length; index++) {
    const part = parts[index];
    const segment = segments[index];
    const isParameter = part[0] === ":";
    if (isParameter) {
      posParams[part.substring(1)] = segment;
    } else if (part !== segment.path) {
      return null;
    }
  }
  return {
    consumed: segments.slice(0, parts.length),
    posParams
  };
}
function shallowEqualArrays(a43, b5) {
  if (a43.length !== b5.length) return false;
  for (let i29 = 0; i29 < a43.length; ++i29) {
    if (!shallowEqual(a43[i29], b5[i29])) return false;
  }
  return true;
}
function shallowEqual(a43, b5) {
  const k1 = a43 ? getDataKeys(a43) : void 0;
  const k22 = b5 ? getDataKeys(b5) : void 0;
  if (!k1 || !k22 || k1.length != k22.length) {
    return false;
  }
  let key;
  for (let i29 = 0; i29 < k1.length; i29++) {
    key = k1[i29];
    if (!equalArraysOrString(a43[key], b5[key])) {
      return false;
    }
  }
  return true;
}
function getDataKeys(obj) {
  return [...Object.keys(obj), ...Object.getOwnPropertySymbols(obj)];
}
function equalArraysOrString(a43, b5) {
  if (Array.isArray(a43) && Array.isArray(b5)) {
    if (a43.length !== b5.length) return false;
    const aSorted = [...a43].sort();
    const bSorted = [...b5].sort();
    return aSorted.every((val, index) => bSorted[index] === val);
  } else {
    return a43 === b5;
  }
}
function last2(a43) {
  return a43.length > 0 ? a43[a43.length - 1] : null;
}
function wrapIntoObservable(value) {
  if (isObservable(value)) {
    return value;
  }
  if (isPromise(value)) {
    return from(Promise.resolve(value));
  }
  return of(value);
}
var pathCompareMap = {
  "exact": equalSegmentGroups,
  "subset": containsSegmentGroup
};
var paramCompareMap = {
  "exact": equalParams,
  "subset": containsParams,
  "ignored": () => true
};
function containsTree(container, containee, options) {
  return pathCompareMap[options.paths](container.root, containee.root, options.matrixParams) && paramCompareMap[options.queryParams](container.queryParams, containee.queryParams) && !(options.fragment === "exact" && container.fragment !== containee.fragment);
}
function equalParams(container, containee) {
  return shallowEqual(container, containee);
}
function equalSegmentGroups(container, containee, matrixParams) {
  if (!equalPath(container.segments, containee.segments)) return false;
  if (!matrixParamsMatch(container.segments, containee.segments, matrixParams)) {
    return false;
  }
  if (container.numberOfChildren !== containee.numberOfChildren) return false;
  for (const c27 in containee.children) {
    if (!container.children[c27]) return false;
    if (!equalSegmentGroups(container.children[c27], containee.children[c27], matrixParams)) return false;
  }
  return true;
}
function containsParams(container, containee) {
  return Object.keys(containee).length <= Object.keys(container).length && Object.keys(containee).every((key) => equalArraysOrString(container[key], containee[key]));
}
function containsSegmentGroup(container, containee, matrixParams) {
  return containsSegmentGroupHelper(container, containee, containee.segments, matrixParams);
}
function containsSegmentGroupHelper(container, containee, containeePaths, matrixParams) {
  if (container.segments.length > containeePaths.length) {
    const current = container.segments.slice(0, containeePaths.length);
    if (!equalPath(current, containeePaths)) return false;
    if (containee.hasChildren()) return false;
    if (!matrixParamsMatch(current, containeePaths, matrixParams)) return false;
    return true;
  } else if (container.segments.length === containeePaths.length) {
    if (!equalPath(container.segments, containeePaths)) return false;
    if (!matrixParamsMatch(container.segments, containeePaths, matrixParams)) return false;
    for (const c27 in containee.children) {
      if (!container.children[c27]) return false;
      if (!containsSegmentGroup(container.children[c27], containee.children[c27], matrixParams)) {
        return false;
      }
    }
    return true;
  } else {
    const current = containeePaths.slice(0, container.segments.length);
    const next = containeePaths.slice(container.segments.length);
    if (!equalPath(container.segments, current)) return false;
    if (!matrixParamsMatch(container.segments, current, matrixParams)) return false;
    if (!container.children[PRIMARY_OUTLET]) return false;
    return containsSegmentGroupHelper(container.children[PRIMARY_OUTLET], containee, next, matrixParams);
  }
}
function matrixParamsMatch(containerPaths, containeePaths, options) {
  return containeePaths.every((containeeSegment, i29) => {
    return paramCompareMap[options](containerPaths[i29].parameters, containeeSegment.parameters);
  });
}
var UrlTree = class {
  root;
  queryParams;
  fragment;
  /** @internal */
  _queryParamMap;
  constructor(root = new UrlSegmentGroup([], {}), queryParams = {}, fragment = null) {
    this.root = root;
    this.queryParams = queryParams;
    this.fragment = fragment;
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (root.segments.length > 0) {
        throw new RuntimeError(4015, "The root `UrlSegmentGroup` should not contain `segments`. Instead, these segments belong in the `children` so they can be associated with a named outlet.");
      }
    }
  }
  get queryParamMap() {
    this._queryParamMap ??= convertToParamMap(this.queryParams);
    return this._queryParamMap;
  }
  /** @docsNotRequired */
  toString() {
    return DEFAULT_SERIALIZER.serialize(this);
  }
};
var UrlSegmentGroup = class {
  segments;
  children;
  /** The parent node in the url tree */
  parent = null;
  constructor(segments, children) {
    this.segments = segments;
    this.children = children;
    Object.values(children).forEach((v3) => v3.parent = this);
  }
  /** Whether the segment has child segments */
  hasChildren() {
    return this.numberOfChildren > 0;
  }
  /** Number of child segments */
  get numberOfChildren() {
    return Object.keys(this.children).length;
  }
  /** @docsNotRequired */
  toString() {
    return serializePaths(this);
  }
};
var UrlSegment = class {
  path;
  parameters;
  /** @internal */
  _parameterMap;
  constructor(path, parameters) {
    this.path = path;
    this.parameters = parameters;
  }
  get parameterMap() {
    this._parameterMap ??= convertToParamMap(this.parameters);
    return this._parameterMap;
  }
  /** @docsNotRequired */
  toString() {
    return serializePath(this);
  }
};
function equalSegments(as, bs) {
  return equalPath(as, bs) && as.every((a43, i29) => shallowEqual(a43.parameters, bs[i29].parameters));
}
function equalPath(as, bs) {
  if (as.length !== bs.length) return false;
  return as.every((a43, i29) => a43.path === bs[i29].path);
}
function mapChildrenIntoArray(segment, fn) {
  let res = [];
  Object.entries(segment.children).forEach(([childOutlet, child]) => {
    if (childOutlet === PRIMARY_OUTLET) {
      res = res.concat(fn(child, childOutlet));
    }
  });
  Object.entries(segment.children).forEach(([childOutlet, child]) => {
    if (childOutlet !== PRIMARY_OUTLET) {
      res = res.concat(fn(child, childOutlet));
    }
  });
  return res;
}
var UrlSerializer = class _UrlSerializer {
  static \u0275fac = function UrlSerializer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UrlSerializer)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _UrlSerializer,
    factory: () => (() => new DefaultUrlSerializer())(),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UrlSerializer, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => new DefaultUrlSerializer()
    }]
  }], null, null);
})();
var DefaultUrlSerializer = class {
  /** Parses a url into a `UrlTree` */
  parse(url) {
    const p4 = new UrlParser(url);
    return new UrlTree(p4.parseRootSegment(), p4.parseQueryParams(), p4.parseFragment());
  }
  /** Converts a `UrlTree` into a url */
  serialize(tree2) {
    const segment = `/${serializeSegment(tree2.root, true)}`;
    const query = serializeQueryParams(tree2.queryParams);
    const fragment = typeof tree2.fragment === `string` ? `#${encodeUriFragment(tree2.fragment)}` : "";
    return `${segment}${query}${fragment}`;
  }
};
var DEFAULT_SERIALIZER = new DefaultUrlSerializer();
function serializePaths(segment) {
  return segment.segments.map((p4) => serializePath(p4)).join("/");
}
function serializeSegment(segment, root) {
  if (!segment.hasChildren()) {
    return serializePaths(segment);
  }
  if (root) {
    const primary = segment.children[PRIMARY_OUTLET] ? serializeSegment(segment.children[PRIMARY_OUTLET], false) : "";
    const children = [];
    Object.entries(segment.children).forEach(([k4, v3]) => {
      if (k4 !== PRIMARY_OUTLET) {
        children.push(`${k4}:${serializeSegment(v3, false)}`);
      }
    });
    return children.length > 0 ? `${primary}(${children.join("//")})` : primary;
  } else {
    const children = mapChildrenIntoArray(segment, (v3, k4) => {
      if (k4 === PRIMARY_OUTLET) {
        return [serializeSegment(segment.children[PRIMARY_OUTLET], false)];
      }
      return [`${k4}:${serializeSegment(v3, false)}`];
    });
    if (Object.keys(segment.children).length === 1 && segment.children[PRIMARY_OUTLET] != null) {
      return `${serializePaths(segment)}/${children[0]}`;
    }
    return `${serializePaths(segment)}/(${children.join("//")})`;
  }
}
function encodeUriString(s12) {
  return encodeURIComponent(s12).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",");
}
function encodeUriQuery(s12) {
  return encodeUriString(s12).replace(/%3B/gi, ";");
}
function encodeUriFragment(s12) {
  return encodeURI(s12);
}
function encodeUriSegment(s12) {
  return encodeUriString(s12).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&");
}
function decode(s12) {
  return decodeURIComponent(s12);
}
function decodeQuery(s12) {
  return decode(s12.replace(/\+/g, "%20"));
}
function serializePath(path) {
  return `${encodeUriSegment(path.path)}${serializeMatrixParams(path.parameters)}`;
}
function serializeMatrixParams(params) {
  return Object.entries(params).map(([key, value]) => `;${encodeUriSegment(key)}=${encodeUriSegment(value)}`).join("");
}
function serializeQueryParams(params) {
  const strParams = Object.entries(params).map(([name, value]) => {
    return Array.isArray(value) ? value.map((v3) => `${encodeUriQuery(name)}=${encodeUriQuery(v3)}`).join("&") : `${encodeUriQuery(name)}=${encodeUriQuery(value)}`;
  }).filter((s12) => s12);
  return strParams.length ? `?${strParams.join("&")}` : "";
}
var SEGMENT_RE = /^[^\/()?;#]+/;
function matchSegments(str) {
  const match2 = str.match(SEGMENT_RE);
  return match2 ? match2[0] : "";
}
var MATRIX_PARAM_SEGMENT_RE = /^[^\/()?;=#]+/;
function matchMatrixKeySegments(str) {
  const match2 = str.match(MATRIX_PARAM_SEGMENT_RE);
  return match2 ? match2[0] : "";
}
var QUERY_PARAM_RE = /^[^=?&#]+/;
function matchQueryParams(str) {
  const match2 = str.match(QUERY_PARAM_RE);
  return match2 ? match2[0] : "";
}
var QUERY_PARAM_VALUE_RE = /^[^&#]+/;
function matchUrlQueryParamValue(str) {
  const match2 = str.match(QUERY_PARAM_VALUE_RE);
  return match2 ? match2[0] : "";
}
var UrlParser = class {
  url;
  remaining;
  constructor(url) {
    this.url = url;
    this.remaining = url;
  }
  parseRootSegment() {
    this.consumeOptional("/");
    if (this.remaining === "" || this.peekStartsWith("?") || this.peekStartsWith("#")) {
      return new UrlSegmentGroup([], {});
    }
    return new UrlSegmentGroup([], this.parseChildren());
  }
  parseQueryParams() {
    const params = {};
    if (this.consumeOptional("?")) {
      do {
        this.parseQueryParam(params);
      } while (this.consumeOptional("&"));
    }
    return params;
  }
  parseFragment() {
    return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null;
  }
  parseChildren() {
    if (this.remaining === "") {
      return {};
    }
    this.consumeOptional("/");
    const segments = [];
    if (!this.peekStartsWith("(")) {
      segments.push(this.parseSegment());
    }
    while (this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(")) {
      this.capture("/");
      segments.push(this.parseSegment());
    }
    let children = {};
    if (this.peekStartsWith("/(")) {
      this.capture("/");
      children = this.parseParens(true);
    }
    let res = {};
    if (this.peekStartsWith("(")) {
      res = this.parseParens(false);
    }
    if (segments.length > 0 || Object.keys(children).length > 0) {
      res[PRIMARY_OUTLET] = new UrlSegmentGroup(segments, children);
    }
    return res;
  }
  // parse a segment with its matrix parameters
  // ie `name;k1=v1;k2`
  parseSegment() {
    const path = matchSegments(this.remaining);
    if (path === "" && this.peekStartsWith(";")) {
      throw new RuntimeError(4009, (typeof ngDevMode === "undefined" || ngDevMode) && `Empty path url segment cannot have parameters: '${this.remaining}'.`);
    }
    this.capture(path);
    return new UrlSegment(decode(path), this.parseMatrixParams());
  }
  parseMatrixParams() {
    const params = {};
    while (this.consumeOptional(";")) {
      this.parseParam(params);
    }
    return params;
  }
  parseParam(params) {
    const key = matchMatrixKeySegments(this.remaining);
    if (!key) {
      return;
    }
    this.capture(key);
    let value = "";
    if (this.consumeOptional("=")) {
      const valueMatch = matchSegments(this.remaining);
      if (valueMatch) {
        value = valueMatch;
        this.capture(value);
      }
    }
    params[decode(key)] = decode(value);
  }
  // Parse a single query parameter `name[=value]`
  parseQueryParam(params) {
    const key = matchQueryParams(this.remaining);
    if (!key) {
      return;
    }
    this.capture(key);
    let value = "";
    if (this.consumeOptional("=")) {
      const valueMatch = matchUrlQueryParamValue(this.remaining);
      if (valueMatch) {
        value = valueMatch;
        this.capture(value);
      }
    }
    const decodedKey = decodeQuery(key);
    const decodedVal = decodeQuery(value);
    if (params.hasOwnProperty(decodedKey)) {
      let currentVal = params[decodedKey];
      if (!Array.isArray(currentVal)) {
        currentVal = [currentVal];
        params[decodedKey] = currentVal;
      }
      currentVal.push(decodedVal);
    } else {
      params[decodedKey] = decodedVal;
    }
  }
  // parse `(a/b//outlet_name:c/d)`
  parseParens(allowPrimary) {
    const segments = {};
    this.capture("(");
    while (!this.consumeOptional(")") && this.remaining.length > 0) {
      const path = matchSegments(this.remaining);
      const next = this.remaining[path.length];
      if (next !== "/" && next !== ")" && next !== ";") {
        throw new RuntimeError(4010, (typeof ngDevMode === "undefined" || ngDevMode) && `Cannot parse url '${this.url}'`);
      }
      let outletName;
      if (path.indexOf(":") > -1) {
        outletName = path.slice(0, path.indexOf(":"));
        this.capture(outletName);
        this.capture(":");
      } else if (allowPrimary) {
        outletName = PRIMARY_OUTLET;
      }
      const children = this.parseChildren();
      segments[outletName ?? PRIMARY_OUTLET] = Object.keys(children).length === 1 && children[PRIMARY_OUTLET] ? children[PRIMARY_OUTLET] : new UrlSegmentGroup([], children);
      this.consumeOptional("//");
    }
    return segments;
  }
  peekStartsWith(str) {
    return this.remaining.startsWith(str);
  }
  // Consumes the prefix when it is present and returns whether it has been consumed
  consumeOptional(str) {
    if (this.peekStartsWith(str)) {
      this.remaining = this.remaining.substring(str.length);
      return true;
    }
    return false;
  }
  capture(str) {
    if (!this.consumeOptional(str)) {
      throw new RuntimeError(4011, (typeof ngDevMode === "undefined" || ngDevMode) && `Expected "${str}".`);
    }
  }
};
function createRoot(rootCandidate) {
  return rootCandidate.segments.length > 0 ? new UrlSegmentGroup([], {
    [PRIMARY_OUTLET]: rootCandidate
  }) : rootCandidate;
}
function squashSegmentGroup(segmentGroup) {
  const newChildren = {};
  for (const [childOutlet, child] of Object.entries(segmentGroup.children)) {
    const childCandidate = squashSegmentGroup(child);
    if (childOutlet === PRIMARY_OUTLET && childCandidate.segments.length === 0 && childCandidate.hasChildren()) {
      for (const [grandChildOutlet, grandChild] of Object.entries(childCandidate.children)) {
        newChildren[grandChildOutlet] = grandChild;
      }
    } else if (childCandidate.segments.length > 0 || childCandidate.hasChildren()) {
      newChildren[childOutlet] = childCandidate;
    }
  }
  const s12 = new UrlSegmentGroup(segmentGroup.segments, newChildren);
  return mergeTrivialChildren(s12);
}
function mergeTrivialChildren(s12) {
  if (s12.numberOfChildren === 1 && s12.children[PRIMARY_OUTLET]) {
    const c27 = s12.children[PRIMARY_OUTLET];
    return new UrlSegmentGroup(s12.segments.concat(c27.segments), c27.children);
  }
  return s12;
}
function isUrlTree(v3) {
  return v3 instanceof UrlTree;
}
function createUrlTreeFromSnapshot(relativeTo, commands, queryParams = null, fragment = null) {
  const relativeToUrlSegmentGroup = createSegmentGroupFromRoute(relativeTo);
  return createUrlTreeFromSegmentGroup(relativeToUrlSegmentGroup, commands, queryParams, fragment);
}
function createSegmentGroupFromRoute(route) {
  let targetGroup;
  function createSegmentGroupFromRouteRecursive(currentRoute) {
    const childOutlets = {};
    for (const childSnapshot of currentRoute.children) {
      const root = createSegmentGroupFromRouteRecursive(childSnapshot);
      childOutlets[childSnapshot.outlet] = root;
    }
    const segmentGroup = new UrlSegmentGroup(currentRoute.url, childOutlets);
    if (currentRoute === route) {
      targetGroup = segmentGroup;
    }
    return segmentGroup;
  }
  const rootCandidate = createSegmentGroupFromRouteRecursive(route.root);
  const rootSegmentGroup = createRoot(rootCandidate);
  return targetGroup ?? rootSegmentGroup;
}
function createUrlTreeFromSegmentGroup(relativeTo, commands, queryParams, fragment) {
  let root = relativeTo;
  while (root.parent) {
    root = root.parent;
  }
  if (commands.length === 0) {
    return tree(root, root, root, queryParams, fragment);
  }
  const nav = computeNavigation(commands);
  if (nav.toRoot()) {
    return tree(root, root, new UrlSegmentGroup([], {}), queryParams, fragment);
  }
  const position = findStartingPositionForTargetGroup(nav, root, relativeTo);
  const newSegmentGroup = position.processChildren ? updateSegmentGroupChildren(position.segmentGroup, position.index, nav.commands) : updateSegmentGroup(position.segmentGroup, position.index, nav.commands);
  return tree(root, position.segmentGroup, newSegmentGroup, queryParams, fragment);
}
function isMatrixParams(command) {
  return typeof command === "object" && command != null && !command.outlets && !command.segmentPath;
}
function isCommandWithOutlets(command) {
  return typeof command === "object" && command != null && command.outlets;
}
function tree(oldRoot, oldSegmentGroup, newSegmentGroup, queryParams, fragment) {
  let qp = {};
  if (queryParams) {
    Object.entries(queryParams).forEach(([name, value]) => {
      qp[name] = Array.isArray(value) ? value.map((v3) => `${v3}`) : `${value}`;
    });
  }
  let rootCandidate;
  if (oldRoot === oldSegmentGroup) {
    rootCandidate = newSegmentGroup;
  } else {
    rootCandidate = replaceSegment(oldRoot, oldSegmentGroup, newSegmentGroup);
  }
  const newRoot = createRoot(squashSegmentGroup(rootCandidate));
  return new UrlTree(newRoot, qp, fragment);
}
function replaceSegment(current, oldSegment, newSegment) {
  const children = {};
  Object.entries(current.children).forEach(([outletName, c27]) => {
    if (c27 === oldSegment) {
      children[outletName] = newSegment;
    } else {
      children[outletName] = replaceSegment(c27, oldSegment, newSegment);
    }
  });
  return new UrlSegmentGroup(current.segments, children);
}
var Navigation = class {
  isAbsolute;
  numberOfDoubleDots;
  commands;
  constructor(isAbsolute, numberOfDoubleDots, commands) {
    this.isAbsolute = isAbsolute;
    this.numberOfDoubleDots = numberOfDoubleDots;
    this.commands = commands;
    if (isAbsolute && commands.length > 0 && isMatrixParams(commands[0])) {
      throw new RuntimeError(4003, (typeof ngDevMode === "undefined" || ngDevMode) && "Root segment cannot have matrix parameters");
    }
    const cmdWithOutlet = commands.find(isCommandWithOutlets);
    if (cmdWithOutlet && cmdWithOutlet !== last2(commands)) {
      throw new RuntimeError(4004, (typeof ngDevMode === "undefined" || ngDevMode) && "{outlets:{}} has to be the last command");
    }
  }
  toRoot() {
    return this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/";
  }
};
function computeNavigation(commands) {
  if (typeof commands[0] === "string" && commands.length === 1 && commands[0] === "/") {
    return new Navigation(true, 0, commands);
  }
  let numberOfDoubleDots = 0;
  let isAbsolute = false;
  const res = commands.reduce((res2, cmd, cmdIdx) => {
    if (typeof cmd === "object" && cmd != null) {
      if (cmd.outlets) {
        const outlets = {};
        Object.entries(cmd.outlets).forEach(([name, commands2]) => {
          outlets[name] = typeof commands2 === "string" ? commands2.split("/") : commands2;
        });
        return [...res2, {
          outlets
        }];
      }
      if (cmd.segmentPath) {
        return [...res2, cmd.segmentPath];
      }
    }
    if (!(typeof cmd === "string")) {
      return [...res2, cmd];
    }
    if (cmdIdx === 0) {
      cmd.split("/").forEach((urlPart, partIndex) => {
        if (partIndex == 0 && urlPart === ".") ;
        else if (partIndex == 0 && urlPart === "") {
          isAbsolute = true;
        } else if (urlPart === "..") {
          numberOfDoubleDots++;
        } else if (urlPart != "") {
          res2.push(urlPart);
        }
      });
      return res2;
    }
    return [...res2, cmd];
  }, []);
  return new Navigation(isAbsolute, numberOfDoubleDots, res);
}
var Position = class {
  segmentGroup;
  processChildren;
  index;
  constructor(segmentGroup, processChildren, index) {
    this.segmentGroup = segmentGroup;
    this.processChildren = processChildren;
    this.index = index;
  }
};
function findStartingPositionForTargetGroup(nav, root, target) {
  if (nav.isAbsolute) {
    return new Position(root, true, 0);
  }
  if (!target) {
    return new Position(root, false, NaN);
  }
  if (target.parent === null) {
    return new Position(target, true, 0);
  }
  const modifier = isMatrixParams(nav.commands[0]) ? 0 : 1;
  const index = target.segments.length - 1 + modifier;
  return createPositionApplyingDoubleDots(target, index, nav.numberOfDoubleDots);
}
function createPositionApplyingDoubleDots(group, index, numberOfDoubleDots) {
  let g6 = group;
  let ci = index;
  let dd = numberOfDoubleDots;
  while (dd > ci) {
    dd -= ci;
    g6 = g6.parent;
    if (!g6) {
      throw new RuntimeError(4005, (typeof ngDevMode === "undefined" || ngDevMode) && "Invalid number of '../'");
    }
    ci = g6.segments.length;
  }
  return new Position(g6, false, ci - dd);
}
function getOutlets(commands) {
  if (isCommandWithOutlets(commands[0])) {
    return commands[0].outlets;
  }
  return {
    [PRIMARY_OUTLET]: commands
  };
}
function updateSegmentGroup(segmentGroup, startIndex, commands) {
  segmentGroup ??= new UrlSegmentGroup([], {});
  if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
    return updateSegmentGroupChildren(segmentGroup, startIndex, commands);
  }
  const m5 = prefixedWith(segmentGroup, startIndex, commands);
  const slicedCommands = commands.slice(m5.commandIndex);
  if (m5.match && m5.pathIndex < segmentGroup.segments.length) {
    const g6 = new UrlSegmentGroup(segmentGroup.segments.slice(0, m5.pathIndex), {});
    g6.children[PRIMARY_OUTLET] = new UrlSegmentGroup(segmentGroup.segments.slice(m5.pathIndex), segmentGroup.children);
    return updateSegmentGroupChildren(g6, 0, slicedCommands);
  } else if (m5.match && slicedCommands.length === 0) {
    return new UrlSegmentGroup(segmentGroup.segments, {});
  } else if (m5.match && !segmentGroup.hasChildren()) {
    return createNewSegmentGroup(segmentGroup, startIndex, commands);
  } else if (m5.match) {
    return updateSegmentGroupChildren(segmentGroup, 0, slicedCommands);
  } else {
    return createNewSegmentGroup(segmentGroup, startIndex, commands);
  }
}
function updateSegmentGroupChildren(segmentGroup, startIndex, commands) {
  if (commands.length === 0) {
    return new UrlSegmentGroup(segmentGroup.segments, {});
  } else {
    const outlets = getOutlets(commands);
    const children = {};
    if (Object.keys(outlets).some((o88) => o88 !== PRIMARY_OUTLET) && segmentGroup.children[PRIMARY_OUTLET] && segmentGroup.numberOfChildren === 1 && segmentGroup.children[PRIMARY_OUTLET].segments.length === 0) {
      const childrenOfEmptyChild = updateSegmentGroupChildren(segmentGroup.children[PRIMARY_OUTLET], startIndex, commands);
      return new UrlSegmentGroup(segmentGroup.segments, childrenOfEmptyChild.children);
    }
    Object.entries(outlets).forEach(([outlet, commands2]) => {
      if (typeof commands2 === "string") {
        commands2 = [commands2];
      }
      if (commands2 !== null) {
        children[outlet] = updateSegmentGroup(segmentGroup.children[outlet], startIndex, commands2);
      }
    });
    Object.entries(segmentGroup.children).forEach(([childOutlet, child]) => {
      if (outlets[childOutlet] === void 0) {
        children[childOutlet] = child;
      }
    });
    return new UrlSegmentGroup(segmentGroup.segments, children);
  }
}
function prefixedWith(segmentGroup, startIndex, commands) {
  let currentCommandIndex = 0;
  let currentPathIndex = startIndex;
  const noMatch2 = {
    match: false,
    pathIndex: 0,
    commandIndex: 0
  };
  while (currentPathIndex < segmentGroup.segments.length) {
    if (currentCommandIndex >= commands.length) return noMatch2;
    const path = segmentGroup.segments[currentPathIndex];
    const command = commands[currentCommandIndex];
    if (isCommandWithOutlets(command)) {
      break;
    }
    const curr = `${command}`;
    const next = currentCommandIndex < commands.length - 1 ? commands[currentCommandIndex + 1] : null;
    if (currentPathIndex > 0 && curr === void 0) break;
    if (curr && next && typeof next === "object" && next.outlets === void 0) {
      if (!compare(curr, next, path)) return noMatch2;
      currentCommandIndex += 2;
    } else {
      if (!compare(curr, {}, path)) return noMatch2;
      currentCommandIndex++;
    }
    currentPathIndex++;
  }
  return {
    match: true,
    pathIndex: currentPathIndex,
    commandIndex: currentCommandIndex
  };
}
function createNewSegmentGroup(segmentGroup, startIndex, commands) {
  const paths = segmentGroup.segments.slice(0, startIndex);
  let i29 = 0;
  while (i29 < commands.length) {
    const command = commands[i29];
    if (isCommandWithOutlets(command)) {
      const children = createNewSegmentChildren(command.outlets);
      return new UrlSegmentGroup(paths, children);
    }
    if (i29 === 0 && isMatrixParams(commands[0])) {
      const p4 = segmentGroup.segments[startIndex];
      paths.push(new UrlSegment(p4.path, stringify(commands[0])));
      i29++;
      continue;
    }
    const curr = isCommandWithOutlets(command) ? command.outlets[PRIMARY_OUTLET] : `${command}`;
    const next = i29 < commands.length - 1 ? commands[i29 + 1] : null;
    if (curr && next && isMatrixParams(next)) {
      paths.push(new UrlSegment(curr, stringify(next)));
      i29 += 2;
    } else {
      paths.push(new UrlSegment(curr, {}));
      i29++;
    }
  }
  return new UrlSegmentGroup(paths, {});
}
function createNewSegmentChildren(outlets) {
  const children = {};
  Object.entries(outlets).forEach(([outlet, commands]) => {
    if (typeof commands === "string") {
      commands = [commands];
    }
    if (commands !== null) {
      children[outlet] = createNewSegmentGroup(new UrlSegmentGroup([], {}), 0, commands);
    }
  });
  return children;
}
function stringify(params) {
  const res = {};
  Object.entries(params).forEach(([k4, v3]) => res[k4] = `${v3}`);
  return res;
}
function compare(path, params, segment) {
  return path == segment.path && shallowEqual(params, segment.parameters);
}
var IMPERATIVE_NAVIGATION = "imperative";
var EventType;
(function(EventType2) {
  EventType2[EventType2["NavigationStart"] = 0] = "NavigationStart";
  EventType2[EventType2["NavigationEnd"] = 1] = "NavigationEnd";
  EventType2[EventType2["NavigationCancel"] = 2] = "NavigationCancel";
  EventType2[EventType2["NavigationError"] = 3] = "NavigationError";
  EventType2[EventType2["RoutesRecognized"] = 4] = "RoutesRecognized";
  EventType2[EventType2["ResolveStart"] = 5] = "ResolveStart";
  EventType2[EventType2["ResolveEnd"] = 6] = "ResolveEnd";
  EventType2[EventType2["GuardsCheckStart"] = 7] = "GuardsCheckStart";
  EventType2[EventType2["GuardsCheckEnd"] = 8] = "GuardsCheckEnd";
  EventType2[EventType2["RouteConfigLoadStart"] = 9] = "RouteConfigLoadStart";
  EventType2[EventType2["RouteConfigLoadEnd"] = 10] = "RouteConfigLoadEnd";
  EventType2[EventType2["ChildActivationStart"] = 11] = "ChildActivationStart";
  EventType2[EventType2["ChildActivationEnd"] = 12] = "ChildActivationEnd";
  EventType2[EventType2["ActivationStart"] = 13] = "ActivationStart";
  EventType2[EventType2["ActivationEnd"] = 14] = "ActivationEnd";
  EventType2[EventType2["Scroll"] = 15] = "Scroll";
  EventType2[EventType2["NavigationSkipped"] = 16] = "NavigationSkipped";
})(EventType || (EventType = {}));
var RouterEvent = class {
  id;
  url;
  constructor(id, url) {
    this.id = id;
    this.url = url;
  }
};
var NavigationStart = class extends RouterEvent {
  type = EventType.NavigationStart;
  /**
   * Identifies the call or event that triggered the navigation.
   * An `imperative` trigger is a call to `router.navigateByUrl()` or `router.navigate()`.
   *
   * @see {@link NavigationEnd}
   * @see {@link NavigationCancel}
   * @see {@link NavigationError}
   */
  navigationTrigger;
  /**
   * The navigation state that was previously supplied to the `pushState` call,
   * when the navigation is triggered by a `popstate` event. Otherwise null.
   *
   * The state object is defined by `NavigationExtras`, and contains any
   * developer-defined state value, as well as a unique ID that
   * the router assigns to every router transition/navigation.
   *
   * From the perspective of the router, the router never "goes back".
   * When the user clicks on the back button in the browser,
   * a new navigation ID is created.
   *
   * Use the ID in this previous-state object to differentiate between a newly created
   * state and one returned to by a `popstate` event, so that you can restore some
   * remembered state, such as scroll position.
   *
   */
  restoredState;
  constructor(id, url, navigationTrigger = "imperative", restoredState = null) {
    super(id, url);
    this.navigationTrigger = navigationTrigger;
    this.restoredState = restoredState;
  }
  /** @docsNotRequired */
  toString() {
    return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
  }
};
var NavigationEnd = class extends RouterEvent {
  urlAfterRedirects;
  type = EventType.NavigationEnd;
  constructor(id, url, urlAfterRedirects) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
  }
  /** @docsNotRequired */
  toString() {
    return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
  }
};
var NavigationCancellationCode;
(function(NavigationCancellationCode2) {
  NavigationCancellationCode2[NavigationCancellationCode2["Redirect"] = 0] = "Redirect";
  NavigationCancellationCode2[NavigationCancellationCode2["SupersededByNewNavigation"] = 1] = "SupersededByNewNavigation";
  NavigationCancellationCode2[NavigationCancellationCode2["NoDataFromResolver"] = 2] = "NoDataFromResolver";
  NavigationCancellationCode2[NavigationCancellationCode2["GuardRejected"] = 3] = "GuardRejected";
  NavigationCancellationCode2[NavigationCancellationCode2["Aborted"] = 4] = "Aborted";
})(NavigationCancellationCode || (NavigationCancellationCode = {}));
var NavigationSkippedCode;
(function(NavigationSkippedCode2) {
  NavigationSkippedCode2[NavigationSkippedCode2["IgnoredSameUrlNavigation"] = 0] = "IgnoredSameUrlNavigation";
  NavigationSkippedCode2[NavigationSkippedCode2["IgnoredByUrlHandlingStrategy"] = 1] = "IgnoredByUrlHandlingStrategy";
})(NavigationSkippedCode || (NavigationSkippedCode = {}));
var NavigationCancel = class extends RouterEvent {
  reason;
  code;
  type = EventType.NavigationCancel;
  constructor(id, url, reason, code) {
    super(id, url);
    this.reason = reason;
    this.code = code;
  }
  /** @docsNotRequired */
  toString() {
    return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
  }
};
var NavigationSkipped = class extends RouterEvent {
  reason;
  code;
  type = EventType.NavigationSkipped;
  constructor(id, url, reason, code) {
    super(id, url);
    this.reason = reason;
    this.code = code;
  }
};
var NavigationError = class extends RouterEvent {
  error;
  target;
  type = EventType.NavigationError;
  constructor(id, url, error, target) {
    super(id, url);
    this.error = error;
    this.target = target;
  }
  /** @docsNotRequired */
  toString() {
    return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
  }
};
var RoutesRecognized = class extends RouterEvent {
  urlAfterRedirects;
  state;
  type = EventType.RoutesRecognized;
  constructor(id, url, urlAfterRedirects, state) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
  }
  /** @docsNotRequired */
  toString() {
    return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
  }
};
var GuardsCheckStart = class extends RouterEvent {
  urlAfterRedirects;
  state;
  type = EventType.GuardsCheckStart;
  constructor(id, url, urlAfterRedirects, state) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
  }
  toString() {
    return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
  }
};
var GuardsCheckEnd = class extends RouterEvent {
  urlAfterRedirects;
  state;
  shouldActivate;
  type = EventType.GuardsCheckEnd;
  constructor(id, url, urlAfterRedirects, state, shouldActivate) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
    this.shouldActivate = shouldActivate;
  }
  toString() {
    return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
  }
};
var ResolveStart = class extends RouterEvent {
  urlAfterRedirects;
  state;
  type = EventType.ResolveStart;
  constructor(id, url, urlAfterRedirects, state) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
  }
  toString() {
    return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
  }
};
var ResolveEnd = class extends RouterEvent {
  urlAfterRedirects;
  state;
  type = EventType.ResolveEnd;
  constructor(id, url, urlAfterRedirects, state) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
  }
  toString() {
    return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
  }
};
var RouteConfigLoadStart = class {
  route;
  type = EventType.RouteConfigLoadStart;
  constructor(route) {
    this.route = route;
  }
  toString() {
    return `RouteConfigLoadStart(path: ${this.route.path})`;
  }
};
var RouteConfigLoadEnd = class {
  route;
  type = EventType.RouteConfigLoadEnd;
  constructor(route) {
    this.route = route;
  }
  toString() {
    return `RouteConfigLoadEnd(path: ${this.route.path})`;
  }
};
var ChildActivationStart = class {
  snapshot;
  type = EventType.ChildActivationStart;
  constructor(snapshot) {
    this.snapshot = snapshot;
  }
  toString() {
    const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || "";
    return `ChildActivationStart(path: '${path}')`;
  }
};
var ChildActivationEnd = class {
  snapshot;
  type = EventType.ChildActivationEnd;
  constructor(snapshot) {
    this.snapshot = snapshot;
  }
  toString() {
    const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || "";
    return `ChildActivationEnd(path: '${path}')`;
  }
};
var ActivationStart = class {
  snapshot;
  type = EventType.ActivationStart;
  constructor(snapshot) {
    this.snapshot = snapshot;
  }
  toString() {
    const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || "";
    return `ActivationStart(path: '${path}')`;
  }
};
var ActivationEnd = class {
  snapshot;
  type = EventType.ActivationEnd;
  constructor(snapshot) {
    this.snapshot = snapshot;
  }
  toString() {
    const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || "";
    return `ActivationEnd(path: '${path}')`;
  }
};
var Scroll = class {
  routerEvent;
  position;
  anchor;
  type = EventType.Scroll;
  constructor(routerEvent, position, anchor) {
    this.routerEvent = routerEvent;
    this.position = position;
    this.anchor = anchor;
  }
  toString() {
    const pos = this.position ? `${this.position[0]}, ${this.position[1]}` : null;
    return `Scroll(anchor: '${this.anchor}', position: '${pos}')`;
  }
};
var BeforeActivateRoutes = class {
};
var RedirectRequest = class {
  url;
  navigationBehaviorOptions;
  constructor(url, navigationBehaviorOptions) {
    this.url = url;
    this.navigationBehaviorOptions = navigationBehaviorOptions;
  }
};
function isPublicRouterEvent(e59) {
  return !(e59 instanceof BeforeActivateRoutes) && !(e59 instanceof RedirectRequest);
}
function stringifyEvent(routerEvent) {
  switch (routerEvent.type) {
    case EventType.ActivationEnd:
      return `ActivationEnd(path: '${routerEvent.snapshot.routeConfig?.path || ""}')`;
    case EventType.ActivationStart:
      return `ActivationStart(path: '${routerEvent.snapshot.routeConfig?.path || ""}')`;
    case EventType.ChildActivationEnd:
      return `ChildActivationEnd(path: '${routerEvent.snapshot.routeConfig?.path || ""}')`;
    case EventType.ChildActivationStart:
      return `ChildActivationStart(path: '${routerEvent.snapshot.routeConfig?.path || ""}')`;
    case EventType.GuardsCheckEnd:
      return `GuardsCheckEnd(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state}, shouldActivate: ${routerEvent.shouldActivate})`;
    case EventType.GuardsCheckStart:
      return `GuardsCheckStart(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state})`;
    case EventType.NavigationCancel:
      return `NavigationCancel(id: ${routerEvent.id}, url: '${routerEvent.url}')`;
    case EventType.NavigationSkipped:
      return `NavigationSkipped(id: ${routerEvent.id}, url: '${routerEvent.url}')`;
    case EventType.NavigationEnd:
      return `NavigationEnd(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}')`;
    case EventType.NavigationError:
      return `NavigationError(id: ${routerEvent.id}, url: '${routerEvent.url}', error: ${routerEvent.error})`;
    case EventType.NavigationStart:
      return `NavigationStart(id: ${routerEvent.id}, url: '${routerEvent.url}')`;
    case EventType.ResolveEnd:
      return `ResolveEnd(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state})`;
    case EventType.ResolveStart:
      return `ResolveStart(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state})`;
    case EventType.RouteConfigLoadEnd:
      return `RouteConfigLoadEnd(path: ${routerEvent.route.path})`;
    case EventType.RouteConfigLoadStart:
      return `RouteConfigLoadStart(path: ${routerEvent.route.path})`;
    case EventType.RoutesRecognized:
      return `RoutesRecognized(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state})`;
    case EventType.Scroll:
      const pos = routerEvent.position ? `${routerEvent.position[0]}, ${routerEvent.position[1]}` : null;
      return `Scroll(anchor: '${routerEvent.anchor}', position: '${pos}')`;
  }
}
function getOrCreateRouteInjectorIfNeeded(route, currentInjector) {
  if (route.providers && !route._injector) {
    route._injector = createEnvironmentInjector(route.providers, currentInjector, `Route: ${route.path}`);
  }
  return route._injector ?? currentInjector;
}
function validateConfig(config, parentPath = "", requireStandaloneComponents = false) {
  for (let i29 = 0; i29 < config.length; i29++) {
    const route = config[i29];
    const fullPath = getFullPath(parentPath, route);
    validateNode(route, fullPath, requireStandaloneComponents);
  }
}
function assertStandalone(fullPath, component) {
  if (component && isNgModule(component)) {
    throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}'. You are using 'loadComponent' with a module, but it must be used with standalone components. Use 'loadChildren' instead.`);
  } else if (component && !isStandalone(component)) {
    throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}'. The component must be standalone.`);
  }
}
function validateNode(route, fullPath, requireStandaloneComponents) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (!route) {
      throw new RuntimeError(4014, `
      Invalid configuration of route '${fullPath}': Encountered undefined route.
      The reason might be an extra comma.

      Example:
      const routes: Routes = [
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        { path: 'dashboard',  component: DashboardComponent },, << two commas
        { path: 'detail/:id', component: HeroDetailComponent }
      ];
    `);
    }
    if (Array.isArray(route)) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': Array cannot be specified`);
    }
    if (!route.redirectTo && !route.component && !route.loadComponent && !route.children && !route.loadChildren && route.outlet && route.outlet !== PRIMARY_OUTLET) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': a componentless route without children or loadChildren cannot have a named outlet set`);
    }
    if (route.redirectTo && route.children) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': redirectTo and children cannot be used together`);
    }
    if (route.redirectTo && route.loadChildren) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': redirectTo and loadChildren cannot be used together`);
    }
    if (route.children && route.loadChildren) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': children and loadChildren cannot be used together`);
    }
    if (route.component && route.loadComponent) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': component and loadComponent cannot be used together`);
    }
    if (route.redirectTo) {
      if (route.component || route.loadComponent) {
        throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': redirectTo and component/loadComponent cannot be used together`);
      }
      if (route.canMatch || route.canActivate) {
        throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': redirectTo and ${route.canMatch ? "canMatch" : "canActivate"} cannot be used together.Redirects happen before guards are executed.`);
      }
    }
    if (route.path && route.matcher) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': path and matcher cannot be used together`);
    }
    if (route.redirectTo === void 0 && !route.component && !route.loadComponent && !route.children && !route.loadChildren) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}'. One of the following must be provided: component, loadComponent, redirectTo, children or loadChildren`);
    }
    if (route.path === void 0 && route.matcher === void 0) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': routes must have either a path or a matcher specified`);
    }
    if (typeof route.path === "string" && route.path.charAt(0) === "/") {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': path cannot start with a slash`);
    }
    if (route.path === "" && route.redirectTo !== void 0 && route.pathMatch === void 0) {
      const exp = `The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.`;
      throw new RuntimeError(4014, `Invalid configuration of route '{path: "${fullPath}", redirectTo: "${route.redirectTo}"}': please provide 'pathMatch'. ${exp}`);
    }
    if (requireStandaloneComponents) {
      assertStandalone(fullPath, route.component);
    }
  }
  if (route.children) {
    validateConfig(route.children, fullPath, requireStandaloneComponents);
  }
}
function getFullPath(parentPath, currentRoute) {
  if (!currentRoute) {
    return parentPath;
  }
  if (!parentPath && !currentRoute.path) {
    return "";
  } else if (parentPath && !currentRoute.path) {
    return `${parentPath}/`;
  } else if (!parentPath && currentRoute.path) {
    return currentRoute.path;
  } else {
    return `${parentPath}/${currentRoute.path}`;
  }
}
function getOutlet(route) {
  return route.outlet || PRIMARY_OUTLET;
}
function sortByMatchingOutlets(routes2, outletName) {
  const sortedConfig = routes2.filter((r85) => getOutlet(r85) === outletName);
  sortedConfig.push(...routes2.filter((r85) => getOutlet(r85) !== outletName));
  return sortedConfig;
}
function getClosestRouteInjector(snapshot) {
  if (!snapshot) return null;
  if (snapshot.routeConfig?._injector) {
    return snapshot.routeConfig._injector;
  }
  for (let s12 = snapshot.parent; s12; s12 = s12.parent) {
    const route = s12.routeConfig;
    if (route?._loadedInjector) return route._loadedInjector;
    if (route?._injector) return route._injector;
  }
  return null;
}
var OutletContext = class {
  rootInjector;
  outlet = null;
  route = null;
  children;
  attachRef = null;
  get injector() {
    return getClosestRouteInjector(this.route?.snapshot) ?? this.rootInjector;
  }
  constructor(rootInjector) {
    this.rootInjector = rootInjector;
    this.children = new ChildrenOutletContexts(this.rootInjector);
  }
};
var ChildrenOutletContexts = class _ChildrenOutletContexts {
  rootInjector;
  // contexts for child outlets, by name.
  contexts = /* @__PURE__ */ new Map();
  /** @docs-private */
  constructor(rootInjector) {
    this.rootInjector = rootInjector;
  }
  /** Called when a `RouterOutlet` directive is instantiated */
  onChildOutletCreated(childName, outlet) {
    const context = this.getOrCreateContext(childName);
    context.outlet = outlet;
    this.contexts.set(childName, context);
  }
  /**
   * Called when a `RouterOutlet` directive is destroyed.
   * We need to keep the context as the outlet could be destroyed inside a NgIf and might be
   * re-created later.
   */
  onChildOutletDestroyed(childName) {
    const context = this.getContext(childName);
    if (context) {
      context.outlet = null;
      context.attachRef = null;
    }
  }
  /**
   * Called when the corresponding route is deactivated during navigation.
   * Because the component get destroyed, all children outlet are destroyed.
   */
  onOutletDeactivated() {
    const contexts = this.contexts;
    this.contexts = /* @__PURE__ */ new Map();
    return contexts;
  }
  onOutletReAttached(contexts) {
    this.contexts = contexts;
  }
  getOrCreateContext(childName) {
    let context = this.getContext(childName);
    if (!context) {
      context = new OutletContext(this.rootInjector);
      this.contexts.set(childName, context);
    }
    return context;
  }
  getContext(childName) {
    return this.contexts.get(childName) || null;
  }
  static \u0275fac = function ChildrenOutletContexts_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChildrenOutletContexts)(\u0275\u0275inject(EnvironmentInjector));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ChildrenOutletContexts,
    factory: _ChildrenOutletContexts.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChildrenOutletContexts, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: EnvironmentInjector
  }], null);
})();
var Tree = class {
  /** @internal */
  _root;
  constructor(root) {
    this._root = root;
  }
  get root() {
    return this._root.value;
  }
  /**
   * @internal
   */
  parent(t42) {
    const p4 = this.pathFromRoot(t42);
    return p4.length > 1 ? p4[p4.length - 2] : null;
  }
  /**
   * @internal
   */
  children(t42) {
    const n39 = findNode(t42, this._root);
    return n39 ? n39.children.map((t43) => t43.value) : [];
  }
  /**
   * @internal
   */
  firstChild(t42) {
    const n39 = findNode(t42, this._root);
    return n39 && n39.children.length > 0 ? n39.children[0].value : null;
  }
  /**
   * @internal
   */
  siblings(t42) {
    const p4 = findPath(t42, this._root);
    if (p4.length < 2) return [];
    const c27 = p4[p4.length - 2].children.map((c28) => c28.value);
    return c27.filter((cc) => cc !== t42);
  }
  /**
   * @internal
   */
  pathFromRoot(t42) {
    return findPath(t42, this._root).map((s12) => s12.value);
  }
};
function findNode(value, node) {
  if (value === node.value) return node;
  for (const child of node.children) {
    const node2 = findNode(value, child);
    if (node2) return node2;
  }
  return null;
}
function findPath(value, node) {
  if (value === node.value) return [node];
  for (const child of node.children) {
    const path = findPath(value, child);
    if (path.length) {
      path.unshift(node);
      return path;
    }
  }
  return [];
}
var TreeNode = class {
  value;
  children;
  constructor(value, children) {
    this.value = value;
    this.children = children;
  }
  toString() {
    return `TreeNode(${this.value})`;
  }
};
function nodeChildrenAsMap(node) {
  const map2 = {};
  if (node) {
    node.children.forEach((child) => map2[child.value.outlet] = child);
  }
  return map2;
}
var RouterState = class extends Tree {
  snapshot;
  /** @internal */
  constructor(root, snapshot) {
    super(root);
    this.snapshot = snapshot;
    setRouterState(this, root);
  }
  toString() {
    return this.snapshot.toString();
  }
};
function createEmptyState(rootComponent) {
  const snapshot = createEmptyStateSnapshot(rootComponent);
  const emptyUrl = new BehaviorSubject([new UrlSegment("", {})]);
  const emptyParams = new BehaviorSubject({});
  const emptyData = new BehaviorSubject({});
  const emptyQueryParams = new BehaviorSubject({});
  const fragment = new BehaviorSubject("");
  const activated = new ActivatedRoute(emptyUrl, emptyParams, emptyQueryParams, fragment, emptyData, PRIMARY_OUTLET, rootComponent, snapshot.root);
  activated.snapshot = snapshot.root;
  return new RouterState(new TreeNode(activated, []), snapshot);
}
function createEmptyStateSnapshot(rootComponent) {
  const emptyParams = {};
  const emptyData = {};
  const emptyQueryParams = {};
  const fragment = "";
  const activated = new ActivatedRouteSnapshot([], emptyParams, emptyQueryParams, fragment, emptyData, PRIMARY_OUTLET, rootComponent, null, {});
  return new RouterStateSnapshot("", new TreeNode(activated, []));
}
var ActivatedRoute = class {
  urlSubject;
  paramsSubject;
  queryParamsSubject;
  fragmentSubject;
  dataSubject;
  outlet;
  component;
  /** The current snapshot of this route */
  snapshot;
  /** @internal */
  _futureSnapshot;
  /** @internal */
  _routerState;
  /** @internal */
  _paramMap;
  /** @internal */
  _queryParamMap;
  /** An Observable of the resolved route title */
  title;
  /** An observable of the URL segments matched by this route. */
  url;
  /** An observable of the matrix parameters scoped to this route. */
  params;
  /** An observable of the query parameters shared by all the routes. */
  queryParams;
  /** An observable of the URL fragment shared by all the routes. */
  fragment;
  /** An observable of the static and resolved data of this route. */
  data;
  /** @internal */
  constructor(urlSubject, paramsSubject, queryParamsSubject, fragmentSubject, dataSubject, outlet, component, futureSnapshot) {
    this.urlSubject = urlSubject;
    this.paramsSubject = paramsSubject;
    this.queryParamsSubject = queryParamsSubject;
    this.fragmentSubject = fragmentSubject;
    this.dataSubject = dataSubject;
    this.outlet = outlet;
    this.component = component;
    this._futureSnapshot = futureSnapshot;
    this.title = this.dataSubject?.pipe(map((d34) => d34[RouteTitleKey])) ?? of(void 0);
    this.url = urlSubject;
    this.params = paramsSubject;
    this.queryParams = queryParamsSubject;
    this.fragment = fragmentSubject;
    this.data = dataSubject;
  }
  /** The configuration used to match this route. */
  get routeConfig() {
    return this._futureSnapshot.routeConfig;
  }
  /** The root of the router state. */
  get root() {
    return this._routerState.root;
  }
  /** The parent of this route in the router state tree. */
  get parent() {
    return this._routerState.parent(this);
  }
  /** The first child of this route in the router state tree. */
  get firstChild() {
    return this._routerState.firstChild(this);
  }
  /** The children of this route in the router state tree. */
  get children() {
    return this._routerState.children(this);
  }
  /** The path from the root of the router state tree to this route. */
  get pathFromRoot() {
    return this._routerState.pathFromRoot(this);
  }
  /**
   * An Observable that contains a map of the required and optional parameters
   * specific to the route.
   * The map supports retrieving single and multiple values from the same parameter.
   */
  get paramMap() {
    this._paramMap ??= this.params.pipe(map((p4) => convertToParamMap(p4)));
    return this._paramMap;
  }
  /**
   * An Observable that contains a map of the query parameters available to all routes.
   * The map supports retrieving single and multiple values from the query parameter.
   */
  get queryParamMap() {
    this._queryParamMap ??= this.queryParams.pipe(map((p4) => convertToParamMap(p4)));
    return this._queryParamMap;
  }
  toString() {
    return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`;
  }
};
function getInherited(route, parent, paramsInheritanceStrategy = "emptyOnly") {
  let inherited;
  const {
    routeConfig
  } = route;
  if (parent !== null && (paramsInheritanceStrategy === "always" || // inherit parent data if route is empty path
  routeConfig?.path === "" || // inherit parent data if parent was componentless
  !parent.component && !parent.routeConfig?.loadComponent)) {
    inherited = {
      params: __spreadValues(__spreadValues({}, parent.params), route.params),
      data: __spreadValues(__spreadValues({}, parent.data), route.data),
      resolve: __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, route.data), parent.data), routeConfig?.data), route._resolvedData)
    };
  } else {
    inherited = {
      params: __spreadValues({}, route.params),
      data: __spreadValues({}, route.data),
      resolve: __spreadValues(__spreadValues({}, route.data), route._resolvedData ?? {})
    };
  }
  if (routeConfig && hasStaticTitle(routeConfig)) {
    inherited.resolve[RouteTitleKey] = routeConfig.title;
  }
  return inherited;
}
var ActivatedRouteSnapshot = class {
  url;
  params;
  queryParams;
  fragment;
  data;
  outlet;
  component;
  /** The configuration used to match this route **/
  routeConfig;
  /** @internal */
  _resolve;
  /** @internal */
  _resolvedData;
  /** @internal */
  _routerState;
  /** @internal */
  _paramMap;
  /** @internal */
  _queryParamMap;
  /** The resolved route title */
  get title() {
    return this.data?.[RouteTitleKey];
  }
  /** @internal */
  constructor(url, params, queryParams, fragment, data, outlet, component, routeConfig, resolve) {
    this.url = url;
    this.params = params;
    this.queryParams = queryParams;
    this.fragment = fragment;
    this.data = data;
    this.outlet = outlet;
    this.component = component;
    this.routeConfig = routeConfig;
    this._resolve = resolve;
  }
  /** The root of the router state */
  get root() {
    return this._routerState.root;
  }
  /** The parent of this route in the router state tree */
  get parent() {
    return this._routerState.parent(this);
  }
  /** The first child of this route in the router state tree */
  get firstChild() {
    return this._routerState.firstChild(this);
  }
  /** The children of this route in the router state tree */
  get children() {
    return this._routerState.children(this);
  }
  /** The path from the root of the router state tree to this route */
  get pathFromRoot() {
    return this._routerState.pathFromRoot(this);
  }
  get paramMap() {
    this._paramMap ??= convertToParamMap(this.params);
    return this._paramMap;
  }
  get queryParamMap() {
    this._queryParamMap ??= convertToParamMap(this.queryParams);
    return this._queryParamMap;
  }
  toString() {
    const url = this.url.map((segment) => segment.toString()).join("/");
    const matched = this.routeConfig ? this.routeConfig.path : "";
    return `Route(url:'${url}', path:'${matched}')`;
  }
};
var RouterStateSnapshot = class extends Tree {
  url;
  /** @internal */
  constructor(url, root) {
    super(root);
    this.url = url;
    setRouterState(this, root);
  }
  toString() {
    return serializeNode(this._root);
  }
};
function setRouterState(state, node) {
  node.value._routerState = state;
  node.children.forEach((c27) => setRouterState(state, c27));
}
function serializeNode(node) {
  const c27 = node.children.length > 0 ? ` { ${node.children.map(serializeNode).join(", ")} } ` : "";
  return `${node.value}${c27}`;
}
function advanceActivatedRoute(route) {
  if (route.snapshot) {
    const currentSnapshot = route.snapshot;
    const nextSnapshot = route._futureSnapshot;
    route.snapshot = nextSnapshot;
    if (!shallowEqual(currentSnapshot.queryParams, nextSnapshot.queryParams)) {
      route.queryParamsSubject.next(nextSnapshot.queryParams);
    }
    if (currentSnapshot.fragment !== nextSnapshot.fragment) {
      route.fragmentSubject.next(nextSnapshot.fragment);
    }
    if (!shallowEqual(currentSnapshot.params, nextSnapshot.params)) {
      route.paramsSubject.next(nextSnapshot.params);
    }
    if (!shallowEqualArrays(currentSnapshot.url, nextSnapshot.url)) {
      route.urlSubject.next(nextSnapshot.url);
    }
    if (!shallowEqual(currentSnapshot.data, nextSnapshot.data)) {
      route.dataSubject.next(nextSnapshot.data);
    }
  } else {
    route.snapshot = route._futureSnapshot;
    route.dataSubject.next(route._futureSnapshot.data);
  }
}
function equalParamsAndUrlSegments(a43, b5) {
  const equalUrlParams = shallowEqual(a43.params, b5.params) && equalSegments(a43.url, b5.url);
  const parentsMismatch = !a43.parent !== !b5.parent;
  return equalUrlParams && !parentsMismatch && (!a43.parent || equalParamsAndUrlSegments(a43.parent, b5.parent));
}
function hasStaticTitle(config) {
  return typeof config.title === "string" || config.title === null;
}
var ROUTER_OUTLET_DATA = new InjectionToken(ngDevMode ? "RouterOutlet data" : "");
var RouterOutlet = class _RouterOutlet {
  activated = null;
  /** @internal */
  get activatedComponentRef() {
    return this.activated;
  }
  _activatedRoute = null;
  /**
   * The name of the outlet
   *
   */
  name = PRIMARY_OUTLET;
  activateEvents = new EventEmitter();
  deactivateEvents = new EventEmitter();
  /**
   * Emits an attached component instance when the `RouteReuseStrategy` instructs to re-attach a
   * previously detached subtree.
   **/
  attachEvents = new EventEmitter();
  /**
   * Emits a detached component instance when the `RouteReuseStrategy` instructs to detach the
   * subtree.
   */
  detachEvents = new EventEmitter();
  /**
   * Data that will be provided to the child injector through the `ROUTER_OUTLET_DATA` token.
   *
   * When unset, the value of the token is `undefined` by default.
   */
  routerOutletData = input(...ngDevMode ? [void 0, {
    debugName: "routerOutletData"
  }] : []);
  parentContexts = inject(ChildrenOutletContexts);
  location = inject(ViewContainerRef);
  changeDetector = inject(ChangeDetectorRef);
  inputBinder = inject(INPUT_BINDER, {
    optional: true
  });
  /** @docs-private */
  supportsBindingToComponentInputs = true;
  /** @docs-private */
  ngOnChanges(changes) {
    if (changes["name"]) {
      const {
        firstChange,
        previousValue
      } = changes["name"];
      if (firstChange) {
        return;
      }
      if (this.isTrackedInParentContexts(previousValue)) {
        this.deactivate();
        this.parentContexts.onChildOutletDestroyed(previousValue);
      }
      this.initializeOutletWithName();
    }
  }
  /** @docs-private */
  ngOnDestroy() {
    if (this.isTrackedInParentContexts(this.name)) {
      this.parentContexts.onChildOutletDestroyed(this.name);
    }
    this.inputBinder?.unsubscribeFromRouteData(this);
  }
  isTrackedInParentContexts(outletName) {
    return this.parentContexts.getContext(outletName)?.outlet === this;
  }
  /** @docs-private */
  ngOnInit() {
    this.initializeOutletWithName();
  }
  initializeOutletWithName() {
    this.parentContexts.onChildOutletCreated(this.name, this);
    if (this.activated) {
      return;
    }
    const context = this.parentContexts.getContext(this.name);
    if (context?.route) {
      if (context.attachRef) {
        this.attach(context.attachRef, context.route);
      } else {
        this.activateWith(context.route, context.injector);
      }
    }
  }
  get isActivated() {
    return !!this.activated;
  }
  /**
   * @returns The currently activated component instance.
   * @throws An error if the outlet is not activated.
   */
  get component() {
    if (!this.activated) throw new RuntimeError(4012, (typeof ngDevMode === "undefined" || ngDevMode) && "Outlet is not activated");
    return this.activated.instance;
  }
  get activatedRoute() {
    if (!this.activated) throw new RuntimeError(4012, (typeof ngDevMode === "undefined" || ngDevMode) && "Outlet is not activated");
    return this._activatedRoute;
  }
  get activatedRouteData() {
    if (this._activatedRoute) {
      return this._activatedRoute.snapshot.data;
    }
    return {};
  }
  /**
   * Called when the `RouteReuseStrategy` instructs to detach the subtree
   */
  detach() {
    if (!this.activated) throw new RuntimeError(4012, (typeof ngDevMode === "undefined" || ngDevMode) && "Outlet is not activated");
    this.location.detach();
    const cmp = this.activated;
    this.activated = null;
    this._activatedRoute = null;
    this.detachEvents.emit(cmp.instance);
    return cmp;
  }
  /**
   * Called when the `RouteReuseStrategy` instructs to re-attach a previously detached subtree
   */
  attach(ref, activatedRoute) {
    this.activated = ref;
    this._activatedRoute = activatedRoute;
    this.location.insert(ref.hostView);
    this.inputBinder?.bindActivatedRouteToOutletComponent(this);
    this.attachEvents.emit(ref.instance);
  }
  deactivate() {
    if (this.activated) {
      const c27 = this.component;
      this.activated.destroy();
      this.activated = null;
      this._activatedRoute = null;
      this.deactivateEvents.emit(c27);
    }
  }
  activateWith(activatedRoute, environmentInjector) {
    if (this.isActivated) {
      throw new RuntimeError(4013, (typeof ngDevMode === "undefined" || ngDevMode) && "Cannot activate an already activated outlet");
    }
    this._activatedRoute = activatedRoute;
    const location = this.location;
    const snapshot = activatedRoute.snapshot;
    const component = snapshot.component;
    const childContexts = this.parentContexts.getOrCreateContext(this.name).children;
    const injector = new OutletInjector(activatedRoute, childContexts, location.injector, this.routerOutletData);
    this.activated = location.createComponent(component, {
      index: location.length,
      injector,
      environmentInjector
    });
    this.changeDetector.markForCheck();
    this.inputBinder?.bindActivatedRouteToOutletComponent(this);
    this.activateEvents.emit(this.activated.instance);
  }
  static \u0275fac = function RouterOutlet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouterOutlet)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RouterOutlet,
    selectors: [["router-outlet"]],
    inputs: {
      name: "name",
      routerOutletData: [1, "routerOutletData"]
    },
    outputs: {
      activateEvents: "activate",
      deactivateEvents: "deactivate",
      attachEvents: "attach",
      detachEvents: "detach"
    },
    exportAs: ["outlet"],
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterOutlet, [{
    type: Directive,
    args: [{
      selector: "router-outlet",
      exportAs: "outlet"
    }]
  }], null, {
    name: [{
      type: Input
    }],
    activateEvents: [{
      type: Output,
      args: ["activate"]
    }],
    deactivateEvents: [{
      type: Output,
      args: ["deactivate"]
    }],
    attachEvents: [{
      type: Output,
      args: ["attach"]
    }],
    detachEvents: [{
      type: Output,
      args: ["detach"]
    }],
    routerOutletData: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "routerOutletData",
        required: false
      }]
    }]
  });
})();
var OutletInjector = class {
  route;
  childContexts;
  parent;
  outletData;
  constructor(route, childContexts, parent, outletData) {
    this.route = route;
    this.childContexts = childContexts;
    this.parent = parent;
    this.outletData = outletData;
  }
  get(token, notFoundValue) {
    if (token === ActivatedRoute) {
      return this.route;
    }
    if (token === ChildrenOutletContexts) {
      return this.childContexts;
    }
    if (token === ROUTER_OUTLET_DATA) {
      return this.outletData;
    }
    return this.parent.get(token, notFoundValue);
  }
};
var INPUT_BINDER = new InjectionToken("");
var RoutedComponentInputBinder = class _RoutedComponentInputBinder {
  outletDataSubscriptions = /* @__PURE__ */ new Map();
  bindActivatedRouteToOutletComponent(outlet) {
    this.unsubscribeFromRouteData(outlet);
    this.subscribeToRouteData(outlet);
  }
  unsubscribeFromRouteData(outlet) {
    this.outletDataSubscriptions.get(outlet)?.unsubscribe();
    this.outletDataSubscriptions.delete(outlet);
  }
  subscribeToRouteData(outlet) {
    const {
      activatedRoute
    } = outlet;
    const dataSubscription = combineLatest([activatedRoute.queryParams, activatedRoute.params, activatedRoute.data]).pipe(switchMap(([queryParams, params, data], index) => {
      data = __spreadValues(__spreadValues(__spreadValues({}, queryParams), params), data);
      if (index === 0) {
        return of(data);
      }
      return Promise.resolve(data);
    })).subscribe((data) => {
      if (!outlet.isActivated || !outlet.activatedComponentRef || outlet.activatedRoute !== activatedRoute || activatedRoute.component === null) {
        this.unsubscribeFromRouteData(outlet);
        return;
      }
      const mirror = reflectComponentType(activatedRoute.component);
      if (!mirror) {
        this.unsubscribeFromRouteData(outlet);
        return;
      }
      for (const {
        templateName
      } of mirror.inputs) {
        outlet.activatedComponentRef.setInput(templateName, data[templateName]);
      }
    });
    this.outletDataSubscriptions.set(outlet, dataSubscription);
  }
  static \u0275fac = function RoutedComponentInputBinder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RoutedComponentInputBinder)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RoutedComponentInputBinder,
    factory: _RoutedComponentInputBinder.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoutedComponentInputBinder, [{
    type: Injectable
  }], null, null);
})();
var \u0275EmptyOutletComponent = class _\u0275EmptyOutletComponent {
  static \u0275fac = function \u0275EmptyOutletComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _\u0275EmptyOutletComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _\u0275EmptyOutletComponent,
    selectors: [["ng-component"]],
    exportAs: ["emptyRouterOutlet"],
    decls: 1,
    vars: 0,
    template: function _EmptyOutletComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "router-outlet");
      }
    },
    dependencies: [RouterOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275EmptyOutletComponent, [{
    type: Component,
    args: [{
      template: `<router-outlet/>`,
      imports: [RouterOutlet],
      // Used to avoid component ID collisions with user code.
      exportAs: "emptyRouterOutlet"
    }]
  }], null, null);
})();
function standardizeConfig(r85) {
  const children = r85.children && r85.children.map(standardizeConfig);
  const c27 = children ? __spreadProps(__spreadValues({}, r85), {
    children
  }) : __spreadValues({}, r85);
  if (!c27.component && !c27.loadComponent && (children || c27.loadChildren) && c27.outlet && c27.outlet !== PRIMARY_OUTLET) {
    c27.component = \u0275EmptyOutletComponent;
  }
  return c27;
}
function createRouterState(routeReuseStrategy, curr, prevState) {
  const root = createNode(routeReuseStrategy, curr._root, prevState ? prevState._root : void 0);
  return new RouterState(root, curr);
}
function createNode(routeReuseStrategy, curr, prevState) {
  if (prevState && routeReuseStrategy.shouldReuseRoute(curr.value, prevState.value.snapshot)) {
    const value = prevState.value;
    value._futureSnapshot = curr.value;
    const children = createOrReuseChildren(routeReuseStrategy, curr, prevState);
    return new TreeNode(value, children);
  } else {
    if (routeReuseStrategy.shouldAttach(curr.value)) {
      const detachedRouteHandle = routeReuseStrategy.retrieve(curr.value);
      if (detachedRouteHandle !== null) {
        const tree2 = detachedRouteHandle.route;
        tree2.value._futureSnapshot = curr.value;
        tree2.children = curr.children.map((c27) => createNode(routeReuseStrategy, c27));
        return tree2;
      }
    }
    const value = createActivatedRoute(curr.value);
    const children = curr.children.map((c27) => createNode(routeReuseStrategy, c27));
    return new TreeNode(value, children);
  }
}
function createOrReuseChildren(routeReuseStrategy, curr, prevState) {
  return curr.children.map((child) => {
    for (const p4 of prevState.children) {
      if (routeReuseStrategy.shouldReuseRoute(child.value, p4.value.snapshot)) {
        return createNode(routeReuseStrategy, child, p4);
      }
    }
    return createNode(routeReuseStrategy, child);
  });
}
function createActivatedRoute(c27) {
  return new ActivatedRoute(new BehaviorSubject(c27.url), new BehaviorSubject(c27.params), new BehaviorSubject(c27.queryParams), new BehaviorSubject(c27.fragment), new BehaviorSubject(c27.data), c27.outlet, c27.component, c27);
}
var RedirectCommand = class {
  redirectTo;
  navigationBehaviorOptions;
  constructor(redirectTo, navigationBehaviorOptions) {
    this.redirectTo = redirectTo;
    this.navigationBehaviorOptions = navigationBehaviorOptions;
  }
};
var NAVIGATION_CANCELING_ERROR = "ngNavigationCancelingError";
function redirectingNavigationError(urlSerializer, redirect) {
  const {
    redirectTo,
    navigationBehaviorOptions
  } = isUrlTree(redirect) ? {
    redirectTo: redirect,
    navigationBehaviorOptions: void 0
  } : redirect;
  const error = navigationCancelingError(ngDevMode && `Redirecting to "${urlSerializer.serialize(redirectTo)}"`, NavigationCancellationCode.Redirect);
  error.url = redirectTo;
  error.navigationBehaviorOptions = navigationBehaviorOptions;
  return error;
}
function navigationCancelingError(message, code) {
  const error = new Error(`NavigationCancelingError: ${message || ""}`);
  error[NAVIGATION_CANCELING_ERROR] = true;
  error.cancellationCode = code;
  return error;
}
function isRedirectingNavigationCancelingError(error) {
  return isNavigationCancelingError(error) && isUrlTree(error.url);
}
function isNavigationCancelingError(error) {
  return !!error && error[NAVIGATION_CANCELING_ERROR];
}
var warnedAboutUnsupportedInputBinding = false;
var activateRoutes = (rootContexts, routeReuseStrategy, forwardEvent, inputBindingEnabled) => map((t42) => {
  new ActivateRoutes(routeReuseStrategy, t42.targetRouterState, t42.currentRouterState, forwardEvent, inputBindingEnabled).activate(rootContexts);
  return t42;
});
var ActivateRoutes = class {
  routeReuseStrategy;
  futureState;
  currState;
  forwardEvent;
  inputBindingEnabled;
  constructor(routeReuseStrategy, futureState, currState, forwardEvent, inputBindingEnabled) {
    this.routeReuseStrategy = routeReuseStrategy;
    this.futureState = futureState;
    this.currState = currState;
    this.forwardEvent = forwardEvent;
    this.inputBindingEnabled = inputBindingEnabled;
  }
  activate(parentContexts) {
    const futureRoot = this.futureState._root;
    const currRoot = this.currState ? this.currState._root : null;
    this.deactivateChildRoutes(futureRoot, currRoot, parentContexts);
    advanceActivatedRoute(this.futureState.root);
    this.activateChildRoutes(futureRoot, currRoot, parentContexts);
  }
  // De-activate the child route that are not re-used for the future state
  deactivateChildRoutes(futureNode, currNode, contexts) {
    const children = nodeChildrenAsMap(currNode);
    futureNode.children.forEach((futureChild) => {
      const childOutletName = futureChild.value.outlet;
      this.deactivateRoutes(futureChild, children[childOutletName], contexts);
      delete children[childOutletName];
    });
    Object.values(children).forEach((v3) => {
      this.deactivateRouteAndItsChildren(v3, contexts);
    });
  }
  deactivateRoutes(futureNode, currNode, parentContext) {
    const future = futureNode.value;
    const curr = currNode ? currNode.value : null;
    if (future === curr) {
      if (future.component) {
        const context = parentContext.getContext(future.outlet);
        if (context) {
          this.deactivateChildRoutes(futureNode, currNode, context.children);
        }
      } else {
        this.deactivateChildRoutes(futureNode, currNode, parentContext);
      }
    } else {
      if (curr) {
        this.deactivateRouteAndItsChildren(currNode, parentContext);
      }
    }
  }
  deactivateRouteAndItsChildren(route, parentContexts) {
    if (route.value.component && this.routeReuseStrategy.shouldDetach(route.value.snapshot)) {
      this.detachAndStoreRouteSubtree(route, parentContexts);
    } else {
      this.deactivateRouteAndOutlet(route, parentContexts);
    }
  }
  detachAndStoreRouteSubtree(route, parentContexts) {
    const context = parentContexts.getContext(route.value.outlet);
    const contexts = context && route.value.component ? context.children : parentContexts;
    const children = nodeChildrenAsMap(route);
    for (const treeNode of Object.values(children)) {
      this.deactivateRouteAndItsChildren(treeNode, contexts);
    }
    if (context && context.outlet) {
      const componentRef = context.outlet.detach();
      const contexts2 = context.children.onOutletDeactivated();
      this.routeReuseStrategy.store(route.value.snapshot, {
        componentRef,
        route,
        contexts: contexts2
      });
    }
  }
  deactivateRouteAndOutlet(route, parentContexts) {
    const context = parentContexts.getContext(route.value.outlet);
    const contexts = context && route.value.component ? context.children : parentContexts;
    const children = nodeChildrenAsMap(route);
    for (const treeNode of Object.values(children)) {
      this.deactivateRouteAndItsChildren(treeNode, contexts);
    }
    if (context) {
      if (context.outlet) {
        context.outlet.deactivate();
        context.children.onOutletDeactivated();
      }
      context.attachRef = null;
      context.route = null;
    }
  }
  activateChildRoutes(futureNode, currNode, contexts) {
    const children = nodeChildrenAsMap(currNode);
    futureNode.children.forEach((c27) => {
      this.activateRoutes(c27, children[c27.value.outlet], contexts);
      this.forwardEvent(new ActivationEnd(c27.value.snapshot));
    });
    if (futureNode.children.length) {
      this.forwardEvent(new ChildActivationEnd(futureNode.value.snapshot));
    }
  }
  activateRoutes(futureNode, currNode, parentContexts) {
    const future = futureNode.value;
    const curr = currNode ? currNode.value : null;
    advanceActivatedRoute(future);
    if (future === curr) {
      if (future.component) {
        const context = parentContexts.getOrCreateContext(future.outlet);
        this.activateChildRoutes(futureNode, currNode, context.children);
      } else {
        this.activateChildRoutes(futureNode, currNode, parentContexts);
      }
    } else {
      if (future.component) {
        const context = parentContexts.getOrCreateContext(future.outlet);
        if (this.routeReuseStrategy.shouldAttach(future.snapshot)) {
          const stored = this.routeReuseStrategy.retrieve(future.snapshot);
          this.routeReuseStrategy.store(future.snapshot, null);
          context.children.onOutletReAttached(stored.contexts);
          context.attachRef = stored.componentRef;
          context.route = stored.route.value;
          if (context.outlet) {
            context.outlet.attach(stored.componentRef, stored.route.value);
          }
          advanceActivatedRoute(stored.route.value);
          this.activateChildRoutes(futureNode, null, context.children);
        } else {
          context.attachRef = null;
          context.route = future;
          if (context.outlet) {
            context.outlet.activateWith(future, context.injector);
          }
          this.activateChildRoutes(futureNode, null, context.children);
        }
      } else {
        this.activateChildRoutes(futureNode, null, parentContexts);
      }
    }
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      const context = parentContexts.getOrCreateContext(future.outlet);
      const outlet = context.outlet;
      if (outlet && this.inputBindingEnabled && !outlet.supportsBindingToComponentInputs && !warnedAboutUnsupportedInputBinding) {
        console.warn(`'withComponentInputBinding' feature is enabled but this application is using an outlet that may not support binding to component inputs.`);
        warnedAboutUnsupportedInputBinding = true;
      }
    }
  }
};
var CanActivate = class {
  path;
  route;
  constructor(path) {
    this.path = path;
    this.route = this.path[this.path.length - 1];
  }
};
var CanDeactivate = class {
  component;
  route;
  constructor(component, route) {
    this.component = component;
    this.route = route;
  }
};
function getAllRouteGuards(future, curr, parentContexts) {
  const futureRoot = future._root;
  const currRoot = curr ? curr._root : null;
  return getChildRouteGuards(futureRoot, currRoot, parentContexts, [futureRoot.value]);
}
function getCanActivateChild(p4) {
  const canActivateChild = p4.routeConfig ? p4.routeConfig.canActivateChild : null;
  if (!canActivateChild || canActivateChild.length === 0) return null;
  return {
    node: p4,
    guards: canActivateChild
  };
}
function getTokenOrFunctionIdentity(tokenOrFunction, injector) {
  const NOT_FOUND = Symbol();
  const result = injector.get(tokenOrFunction, NOT_FOUND);
  if (result === NOT_FOUND) {
    if (typeof tokenOrFunction === "function" && !isInjectable(tokenOrFunction)) {
      return tokenOrFunction;
    } else {
      return injector.get(tokenOrFunction);
    }
  }
  return result;
}
function getChildRouteGuards(futureNode, currNode, contexts, futurePath, checks = {
  canDeactivateChecks: [],
  canActivateChecks: []
}) {
  const prevChildren = nodeChildrenAsMap(currNode);
  futureNode.children.forEach((c27) => {
    getRouteGuards(c27, prevChildren[c27.value.outlet], contexts, futurePath.concat([c27.value]), checks);
    delete prevChildren[c27.value.outlet];
  });
  Object.entries(prevChildren).forEach(([k4, v3]) => deactivateRouteAndItsChildren(v3, contexts.getContext(k4), checks));
  return checks;
}
function getRouteGuards(futureNode, currNode, parentContexts, futurePath, checks = {
  canDeactivateChecks: [],
  canActivateChecks: []
}) {
  const future = futureNode.value;
  const curr = currNode ? currNode.value : null;
  const context = parentContexts ? parentContexts.getContext(futureNode.value.outlet) : null;
  if (curr && future.routeConfig === curr.routeConfig) {
    const shouldRun = shouldRunGuardsAndResolvers(curr, future, future.routeConfig.runGuardsAndResolvers);
    if (shouldRun) {
      checks.canActivateChecks.push(new CanActivate(futurePath));
    } else {
      future.data = curr.data;
      future._resolvedData = curr._resolvedData;
    }
    if (future.component) {
      getChildRouteGuards(futureNode, currNode, context ? context.children : null, futurePath, checks);
    } else {
      getChildRouteGuards(futureNode, currNode, parentContexts, futurePath, checks);
    }
    if (shouldRun && context && context.outlet && context.outlet.isActivated) {
      checks.canDeactivateChecks.push(new CanDeactivate(context.outlet.component, curr));
    }
  } else {
    if (curr) {
      deactivateRouteAndItsChildren(currNode, context, checks);
    }
    checks.canActivateChecks.push(new CanActivate(futurePath));
    if (future.component) {
      getChildRouteGuards(futureNode, null, context ? context.children : null, futurePath, checks);
    } else {
      getChildRouteGuards(futureNode, null, parentContexts, futurePath, checks);
    }
  }
  return checks;
}
function shouldRunGuardsAndResolvers(curr, future, mode) {
  if (typeof mode === "function") {
    return mode(curr, future);
  }
  switch (mode) {
    case "pathParamsChange":
      return !equalPath(curr.url, future.url);
    case "pathParamsOrQueryParamsChange":
      return !equalPath(curr.url, future.url) || !shallowEqual(curr.queryParams, future.queryParams);
    case "always":
      return true;
    case "paramsOrQueryParamsChange":
      return !equalParamsAndUrlSegments(curr, future) || !shallowEqual(curr.queryParams, future.queryParams);
    case "paramsChange":
    default:
      return !equalParamsAndUrlSegments(curr, future);
  }
}
function deactivateRouteAndItsChildren(route, context, checks) {
  const children = nodeChildrenAsMap(route);
  const r85 = route.value;
  Object.entries(children).forEach(([childName, node]) => {
    if (!r85.component) {
      deactivateRouteAndItsChildren(node, context, checks);
    } else if (context) {
      deactivateRouteAndItsChildren(node, context.children.getContext(childName), checks);
    } else {
      deactivateRouteAndItsChildren(node, null, checks);
    }
  });
  if (!r85.component) {
    checks.canDeactivateChecks.push(new CanDeactivate(null, r85));
  } else if (context && context.outlet && context.outlet.isActivated) {
    checks.canDeactivateChecks.push(new CanDeactivate(context.outlet.component, r85));
  } else {
    checks.canDeactivateChecks.push(new CanDeactivate(null, r85));
  }
}
function isFunction(v3) {
  return typeof v3 === "function";
}
function isBoolean(v3) {
  return typeof v3 === "boolean";
}
function isCanLoad(guard) {
  return guard && isFunction(guard.canLoad);
}
function isCanActivate(guard) {
  return guard && isFunction(guard.canActivate);
}
function isCanActivateChild(guard) {
  return guard && isFunction(guard.canActivateChild);
}
function isCanDeactivate(guard) {
  return guard && isFunction(guard.canDeactivate);
}
function isCanMatch(guard) {
  return guard && isFunction(guard.canMatch);
}
function isEmptyError(e59) {
  return e59 instanceof EmptyError || e59?.name === "EmptyError";
}
var INITIAL_VALUE = /* @__PURE__ */ Symbol("INITIAL_VALUE");
function prioritizedGuardValue() {
  return switchMap((obs) => {
    return combineLatest(obs.map((o88) => o88.pipe(take(1), startWith(INITIAL_VALUE)))).pipe(map((results) => {
      for (const result of results) {
        if (result === true) {
          continue;
        } else if (result === INITIAL_VALUE) {
          return INITIAL_VALUE;
        } else if (result === false || isRedirect(result)) {
          return result;
        }
      }
      return true;
    }), filter((item) => item !== INITIAL_VALUE), take(1));
  });
}
function isRedirect(val) {
  return isUrlTree(val) || val instanceof RedirectCommand;
}
function checkGuards(injector, forwardEvent) {
  return mergeMap((t42) => {
    const {
      targetSnapshot,
      currentSnapshot,
      guards: {
        canActivateChecks,
        canDeactivateChecks
      }
    } = t42;
    if (canDeactivateChecks.length === 0 && canActivateChecks.length === 0) {
      return of(__spreadProps(__spreadValues({}, t42), {
        guardsResult: true
      }));
    }
    return runCanDeactivateChecks(canDeactivateChecks, targetSnapshot, currentSnapshot, injector).pipe(mergeMap((canDeactivate) => {
      return canDeactivate && isBoolean(canDeactivate) ? runCanActivateChecks(targetSnapshot, canActivateChecks, injector, forwardEvent) : of(canDeactivate);
    }), map((guardsResult) => __spreadProps(__spreadValues({}, t42), {
      guardsResult
    })));
  });
}
function runCanDeactivateChecks(checks, futureRSS, currRSS, injector) {
  return from(checks).pipe(mergeMap((check) => runCanDeactivate(check.component, check.route, currRSS, futureRSS, injector)), first((result) => {
    return result !== true;
  }, true));
}
function runCanActivateChecks(futureSnapshot, checks, injector, forwardEvent) {
  return from(checks).pipe(concatMap((check) => {
    return concat(fireChildActivationStart(check.route.parent, forwardEvent), fireActivationStart(check.route, forwardEvent), runCanActivateChild(futureSnapshot, check.path, injector), runCanActivate(futureSnapshot, check.route, injector));
  }), first((result) => {
    return result !== true;
  }, true));
}
function fireActivationStart(snapshot, forwardEvent) {
  if (snapshot !== null && forwardEvent) {
    forwardEvent(new ActivationStart(snapshot));
  }
  return of(true);
}
function fireChildActivationStart(snapshot, forwardEvent) {
  if (snapshot !== null && forwardEvent) {
    forwardEvent(new ChildActivationStart(snapshot));
  }
  return of(true);
}
function runCanActivate(futureRSS, futureARS, injector) {
  const canActivate = futureARS.routeConfig ? futureARS.routeConfig.canActivate : null;
  if (!canActivate || canActivate.length === 0) return of(true);
  const canActivateObservables = canActivate.map((canActivate2) => {
    return defer(() => {
      const closestInjector = getClosestRouteInjector(futureARS) ?? injector;
      const guard = getTokenOrFunctionIdentity(canActivate2, closestInjector);
      const guardVal = isCanActivate(guard) ? guard.canActivate(futureARS, futureRSS) : runInInjectionContext(closestInjector, () => guard(futureARS, futureRSS));
      return wrapIntoObservable(guardVal).pipe(first());
    });
  });
  return of(canActivateObservables).pipe(prioritizedGuardValue());
}
function runCanActivateChild(futureRSS, path, injector) {
  const futureARS = path[path.length - 1];
  const canActivateChildGuards = path.slice(0, path.length - 1).reverse().map((p4) => getCanActivateChild(p4)).filter((_) => _ !== null);
  const canActivateChildGuardsMapped = canActivateChildGuards.map((d34) => {
    return defer(() => {
      const guardsMapped = d34.guards.map((canActivateChild) => {
        const closestInjector = getClosestRouteInjector(d34.node) ?? injector;
        const guard = getTokenOrFunctionIdentity(canActivateChild, closestInjector);
        const guardVal = isCanActivateChild(guard) ? guard.canActivateChild(futureARS, futureRSS) : runInInjectionContext(closestInjector, () => guard(futureARS, futureRSS));
        return wrapIntoObservable(guardVal).pipe(first());
      });
      return of(guardsMapped).pipe(prioritizedGuardValue());
    });
  });
  return of(canActivateChildGuardsMapped).pipe(prioritizedGuardValue());
}
function runCanDeactivate(component, currARS, currRSS, futureRSS, injector) {
  const canDeactivate = currARS && currARS.routeConfig ? currARS.routeConfig.canDeactivate : null;
  if (!canDeactivate || canDeactivate.length === 0) return of(true);
  const canDeactivateObservables = canDeactivate.map((c27) => {
    const closestInjector = getClosestRouteInjector(currARS) ?? injector;
    const guard = getTokenOrFunctionIdentity(c27, closestInjector);
    const guardVal = isCanDeactivate(guard) ? guard.canDeactivate(component, currARS, currRSS, futureRSS) : runInInjectionContext(closestInjector, () => guard(component, currARS, currRSS, futureRSS));
    return wrapIntoObservable(guardVal).pipe(first());
  });
  return of(canDeactivateObservables).pipe(prioritizedGuardValue());
}
function runCanLoadGuards(injector, route, segments, urlSerializer) {
  const canLoad = route.canLoad;
  if (canLoad === void 0 || canLoad.length === 0) {
    return of(true);
  }
  const canLoadObservables = canLoad.map((injectionToken) => {
    const guard = getTokenOrFunctionIdentity(injectionToken, injector);
    const guardVal = isCanLoad(guard) ? guard.canLoad(route, segments) : runInInjectionContext(injector, () => guard(route, segments));
    return wrapIntoObservable(guardVal);
  });
  return of(canLoadObservables).pipe(prioritizedGuardValue(), redirectIfUrlTree(urlSerializer));
}
function redirectIfUrlTree(urlSerializer) {
  return pipe(tap((result) => {
    if (typeof result === "boolean") return;
    throw redirectingNavigationError(urlSerializer, result);
  }), map((result) => result === true));
}
function runCanMatchGuards(injector, route, segments, urlSerializer) {
  const canMatch = route.canMatch;
  if (!canMatch || canMatch.length === 0) return of(true);
  const canMatchObservables = canMatch.map((injectionToken) => {
    const guard = getTokenOrFunctionIdentity(injectionToken, injector);
    const guardVal = isCanMatch(guard) ? guard.canMatch(route, segments) : runInInjectionContext(injector, () => guard(route, segments));
    return wrapIntoObservable(guardVal);
  });
  return of(canMatchObservables).pipe(prioritizedGuardValue(), redirectIfUrlTree(urlSerializer));
}
var NoMatch = class {
  segmentGroup;
  constructor(segmentGroup) {
    this.segmentGroup = segmentGroup || null;
  }
};
var AbsoluteRedirect = class extends Error {
  urlTree;
  constructor(urlTree) {
    super();
    this.urlTree = urlTree;
  }
};
function noMatch$1(segmentGroup) {
  return throwError(new NoMatch(segmentGroup));
}
function namedOutletsRedirect(redirectTo) {
  return throwError(new RuntimeError(4e3, (typeof ngDevMode === "undefined" || ngDevMode) && `Only absolute redirects can have named outlets. redirectTo: '${redirectTo}'`));
}
function canLoadFails(route) {
  return throwError(navigationCancelingError((typeof ngDevMode === "undefined" || ngDevMode) && `Cannot load children because the guard of the route "path: '${route.path}'" returned false`, NavigationCancellationCode.GuardRejected));
}
var ApplyRedirects = class {
  urlSerializer;
  urlTree;
  constructor(urlSerializer, urlTree) {
    this.urlSerializer = urlSerializer;
    this.urlTree = urlTree;
  }
  lineralizeSegments(route, urlTree) {
    let res = [];
    let c27 = urlTree.root;
    while (true) {
      res = res.concat(c27.segments);
      if (c27.numberOfChildren === 0) {
        return of(res);
      }
      if (c27.numberOfChildren > 1 || !c27.children[PRIMARY_OUTLET]) {
        return namedOutletsRedirect(`${route.redirectTo}`);
      }
      c27 = c27.children[PRIMARY_OUTLET];
    }
  }
  applyRedirectCommands(segments, redirectTo, posParams, currentSnapshot, injector) {
    return getRedirectResult(redirectTo, currentSnapshot, injector).pipe(map((redirect) => {
      if (redirect instanceof UrlTree) {
        throw new AbsoluteRedirect(redirect);
      }
      const newTree = this.applyRedirectCreateUrlTree(redirect, this.urlSerializer.parse(redirect), segments, posParams);
      if (redirect[0] === "/") {
        throw new AbsoluteRedirect(newTree);
      }
      return newTree;
    }));
  }
  applyRedirectCreateUrlTree(redirectTo, urlTree, segments, posParams) {
    const newRoot = this.createSegmentGroup(redirectTo, urlTree.root, segments, posParams);
    return new UrlTree(newRoot, this.createQueryParams(urlTree.queryParams, this.urlTree.queryParams), urlTree.fragment);
  }
  createQueryParams(redirectToParams, actualParams) {
    const res = {};
    Object.entries(redirectToParams).forEach(([k4, v3]) => {
      const copySourceValue = typeof v3 === "string" && v3[0] === ":";
      if (copySourceValue) {
        const sourceName = v3.substring(1);
        res[k4] = actualParams[sourceName];
      } else {
        res[k4] = v3;
      }
    });
    return res;
  }
  createSegmentGroup(redirectTo, group, segments, posParams) {
    const updatedSegments = this.createSegments(redirectTo, group.segments, segments, posParams);
    let children = {};
    Object.entries(group.children).forEach(([name, child]) => {
      children[name] = this.createSegmentGroup(redirectTo, child, segments, posParams);
    });
    return new UrlSegmentGroup(updatedSegments, children);
  }
  createSegments(redirectTo, redirectToSegments, actualSegments, posParams) {
    return redirectToSegments.map((s12) => s12.path[0] === ":" ? this.findPosParam(redirectTo, s12, posParams) : this.findOrReturn(s12, actualSegments));
  }
  findPosParam(redirectTo, redirectToUrlSegment, posParams) {
    const pos = posParams[redirectToUrlSegment.path.substring(1)];
    if (!pos) throw new RuntimeError(4001, (typeof ngDevMode === "undefined" || ngDevMode) && `Cannot redirect to '${redirectTo}'. Cannot find '${redirectToUrlSegment.path}'.`);
    return pos;
  }
  findOrReturn(redirectToUrlSegment, actualSegments) {
    let idx = 0;
    for (const s12 of actualSegments) {
      if (s12.path === redirectToUrlSegment.path) {
        actualSegments.splice(idx);
        return s12;
      }
      idx++;
    }
    return redirectToUrlSegment;
  }
};
function getRedirectResult(redirectTo, currentSnapshot, injector) {
  if (typeof redirectTo === "string") {
    return of(redirectTo);
  }
  const redirectToFn = redirectTo;
  const {
    queryParams,
    fragment,
    routeConfig,
    url,
    outlet,
    params,
    data,
    title
  } = currentSnapshot;
  return wrapIntoObservable(runInInjectionContext(injector, () => redirectToFn({
    params,
    data,
    queryParams,
    fragment,
    routeConfig,
    url,
    outlet,
    title
  })));
}
var noMatch = {
  matched: false,
  consumedSegments: [],
  remainingSegments: [],
  parameters: {},
  positionalParamSegments: {}
};
function matchWithChecks(segmentGroup, route, segments, injector, urlSerializer) {
  const result = match(segmentGroup, route, segments);
  if (!result.matched) {
    return of(result);
  }
  injector = getOrCreateRouteInjectorIfNeeded(route, injector);
  return runCanMatchGuards(injector, route, segments, urlSerializer).pipe(map((v3) => v3 === true ? result : __spreadValues({}, noMatch)));
}
function match(segmentGroup, route, segments) {
  if (route.path === "**") {
    return createWildcardMatchResult(segments);
  }
  if (route.path === "") {
    if (route.pathMatch === "full" && (segmentGroup.hasChildren() || segments.length > 0)) {
      return __spreadValues({}, noMatch);
    }
    return {
      matched: true,
      consumedSegments: [],
      remainingSegments: segments,
      parameters: {},
      positionalParamSegments: {}
    };
  }
  const matcher = route.matcher || defaultUrlMatcher;
  const res = matcher(segments, segmentGroup, route);
  if (!res) return __spreadValues({}, noMatch);
  const posParams = {};
  Object.entries(res.posParams ?? {}).forEach(([k4, v3]) => {
    posParams[k4] = v3.path;
  });
  const parameters = res.consumed.length > 0 ? __spreadValues(__spreadValues({}, posParams), res.consumed[res.consumed.length - 1].parameters) : posParams;
  return {
    matched: true,
    consumedSegments: res.consumed,
    remainingSegments: segments.slice(res.consumed.length),
    // TODO(atscott): investigate combining parameters and positionalParamSegments
    parameters,
    positionalParamSegments: res.posParams ?? {}
  };
}
function createWildcardMatchResult(segments) {
  return {
    matched: true,
    parameters: segments.length > 0 ? last2(segments).parameters : {},
    consumedSegments: segments,
    remainingSegments: [],
    positionalParamSegments: {}
  };
}
function split(segmentGroup, consumedSegments, slicedSegments, config) {
  if (slicedSegments.length > 0 && containsEmptyPathMatchesWithNamedOutlets(segmentGroup, slicedSegments, config)) {
    const s13 = new UrlSegmentGroup(consumedSegments, createChildrenForEmptyPaths(config, new UrlSegmentGroup(slicedSegments, segmentGroup.children)));
    return {
      segmentGroup: s13,
      slicedSegments: []
    };
  }
  if (slicedSegments.length === 0 && containsEmptyPathMatches(segmentGroup, slicedSegments, config)) {
    const s13 = new UrlSegmentGroup(segmentGroup.segments, addEmptyPathsToChildrenIfNeeded(segmentGroup, slicedSegments, config, segmentGroup.children));
    return {
      segmentGroup: s13,
      slicedSegments
    };
  }
  const s12 = new UrlSegmentGroup(segmentGroup.segments, segmentGroup.children);
  return {
    segmentGroup: s12,
    slicedSegments
  };
}
function addEmptyPathsToChildrenIfNeeded(segmentGroup, slicedSegments, routes2, children) {
  const res = {};
  for (const r85 of routes2) {
    if (emptyPathMatch(segmentGroup, slicedSegments, r85) && !children[getOutlet(r85)]) {
      const s12 = new UrlSegmentGroup([], {});
      res[getOutlet(r85)] = s12;
    }
  }
  return __spreadValues(__spreadValues({}, children), res);
}
function createChildrenForEmptyPaths(routes2, primarySegment) {
  const res = {};
  res[PRIMARY_OUTLET] = primarySegment;
  for (const r85 of routes2) {
    if (r85.path === "" && getOutlet(r85) !== PRIMARY_OUTLET) {
      const s12 = new UrlSegmentGroup([], {});
      res[getOutlet(r85)] = s12;
    }
  }
  return res;
}
function containsEmptyPathMatchesWithNamedOutlets(segmentGroup, slicedSegments, routes2) {
  return routes2.some((r85) => emptyPathMatch(segmentGroup, slicedSegments, r85) && getOutlet(r85) !== PRIMARY_OUTLET);
}
function containsEmptyPathMatches(segmentGroup, slicedSegments, routes2) {
  return routes2.some((r85) => emptyPathMatch(segmentGroup, slicedSegments, r85));
}
function emptyPathMatch(segmentGroup, slicedSegments, r85) {
  if ((segmentGroup.hasChildren() || slicedSegments.length > 0) && r85.pathMatch === "full") {
    return false;
  }
  return r85.path === "";
}
function noLeftoversInUrl(segmentGroup, segments, outlet) {
  return segments.length === 0 && !segmentGroup.children[outlet];
}
var NoLeftoversInUrl = class {
};
function recognize$1(injector, configLoader, rootComponentType, config, urlTree, urlSerializer, paramsInheritanceStrategy = "emptyOnly") {
  return new Recognizer(injector, configLoader, rootComponentType, config, urlTree, paramsInheritanceStrategy, urlSerializer).recognize();
}
var MAX_ALLOWED_REDIRECTS = 31;
var Recognizer = class {
  injector;
  configLoader;
  rootComponentType;
  config;
  urlTree;
  paramsInheritanceStrategy;
  urlSerializer;
  applyRedirects;
  absoluteRedirectCount = 0;
  allowRedirects = true;
  constructor(injector, configLoader, rootComponentType, config, urlTree, paramsInheritanceStrategy, urlSerializer) {
    this.injector = injector;
    this.configLoader = configLoader;
    this.rootComponentType = rootComponentType;
    this.config = config;
    this.urlTree = urlTree;
    this.paramsInheritanceStrategy = paramsInheritanceStrategy;
    this.urlSerializer = urlSerializer;
    this.applyRedirects = new ApplyRedirects(this.urlSerializer, this.urlTree);
  }
  noMatchError(e59) {
    return new RuntimeError(4002, typeof ngDevMode === "undefined" || ngDevMode ? `Cannot match any routes. URL Segment: '${e59.segmentGroup}'` : `'${e59.segmentGroup}'`);
  }
  recognize() {
    const rootSegmentGroup = split(this.urlTree.root, [], [], this.config).segmentGroup;
    return this.match(rootSegmentGroup).pipe(map(({
      children,
      rootSnapshot
    }) => {
      const rootNode = new TreeNode(rootSnapshot, children);
      const routeState = new RouterStateSnapshot("", rootNode);
      const tree2 = createUrlTreeFromSnapshot(rootSnapshot, [], this.urlTree.queryParams, this.urlTree.fragment);
      tree2.queryParams = this.urlTree.queryParams;
      routeState.url = this.urlSerializer.serialize(tree2);
      return {
        state: routeState,
        tree: tree2
      };
    }));
  }
  match(rootSegmentGroup) {
    const rootSnapshot = new ActivatedRouteSnapshot([], Object.freeze({}), Object.freeze(__spreadValues({}, this.urlTree.queryParams)), this.urlTree.fragment, Object.freeze({}), PRIMARY_OUTLET, this.rootComponentType, null, {});
    return this.processSegmentGroup(this.injector, this.config, rootSegmentGroup, PRIMARY_OUTLET, rootSnapshot).pipe(map((children) => {
      return {
        children,
        rootSnapshot
      };
    }), catchError((e59) => {
      if (e59 instanceof AbsoluteRedirect) {
        this.urlTree = e59.urlTree;
        return this.match(e59.urlTree.root);
      }
      if (e59 instanceof NoMatch) {
        throw this.noMatchError(e59);
      }
      throw e59;
    }));
  }
  processSegmentGroup(injector, config, segmentGroup, outlet, parentRoute) {
    if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
      return this.processChildren(injector, config, segmentGroup, parentRoute);
    }
    return this.processSegment(injector, config, segmentGroup, segmentGroup.segments, outlet, true, parentRoute).pipe(map((child) => child instanceof TreeNode ? [child] : []));
  }
  /**
   * Matches every child outlet in the `segmentGroup` to a `Route` in the config. Returns `null` if
   * we cannot find a match for _any_ of the children.
   *
   * @param config - The `Routes` to match against
   * @param segmentGroup - The `UrlSegmentGroup` whose children need to be matched against the
   *     config.
   */
  processChildren(injector, config, segmentGroup, parentRoute) {
    const childOutlets = [];
    for (const child of Object.keys(segmentGroup.children)) {
      if (child === "primary") {
        childOutlets.unshift(child);
      } else {
        childOutlets.push(child);
      }
    }
    return from(childOutlets).pipe(concatMap((childOutlet) => {
      const child = segmentGroup.children[childOutlet];
      const sortedConfig = sortByMatchingOutlets(config, childOutlet);
      return this.processSegmentGroup(injector, sortedConfig, child, childOutlet, parentRoute);
    }), scan((children, outletChildren) => {
      children.push(...outletChildren);
      return children;
    }), defaultIfEmpty(null), last(), mergeMap((children) => {
      if (children === null) return noMatch$1(segmentGroup);
      const mergedChildren = mergeEmptyPathMatches(children);
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        checkOutletNameUniqueness(mergedChildren);
      }
      sortActivatedRouteSnapshots(mergedChildren);
      return of(mergedChildren);
    }));
  }
  processSegment(injector, routes2, segmentGroup, segments, outlet, allowRedirects, parentRoute) {
    return from(routes2).pipe(concatMap((r85) => {
      return this.processSegmentAgainstRoute(r85._injector ?? injector, routes2, r85, segmentGroup, segments, outlet, allowRedirects, parentRoute).pipe(catchError((e59) => {
        if (e59 instanceof NoMatch) {
          return of(null);
        }
        throw e59;
      }));
    }), first((x) => !!x), catchError((e59) => {
      if (isEmptyError(e59)) {
        if (noLeftoversInUrl(segmentGroup, segments, outlet)) {
          return of(new NoLeftoversInUrl());
        }
        return noMatch$1(segmentGroup);
      }
      throw e59;
    }));
  }
  processSegmentAgainstRoute(injector, routes2, route, rawSegment, segments, outlet, allowRedirects, parentRoute) {
    if (getOutlet(route) !== outlet && (outlet === PRIMARY_OUTLET || !emptyPathMatch(rawSegment, segments, route))) {
      return noMatch$1(rawSegment);
    }
    if (route.redirectTo === void 0) {
      return this.matchSegmentAgainstRoute(injector, rawSegment, route, segments, outlet, parentRoute);
    }
    if (this.allowRedirects && allowRedirects) {
      return this.expandSegmentAgainstRouteUsingRedirect(injector, rawSegment, routes2, route, segments, outlet, parentRoute);
    }
    return noMatch$1(rawSegment);
  }
  expandSegmentAgainstRouteUsingRedirect(injector, segmentGroup, routes2, route, segments, outlet, parentRoute) {
    const {
      matched,
      parameters,
      consumedSegments,
      positionalParamSegments,
      remainingSegments
    } = match(segmentGroup, route, segments);
    if (!matched) return noMatch$1(segmentGroup);
    if (typeof route.redirectTo === "string" && route.redirectTo[0] === "/") {
      this.absoluteRedirectCount++;
      if (this.absoluteRedirectCount > MAX_ALLOWED_REDIRECTS) {
        if (ngDevMode) {
          throw new RuntimeError(4016, `Detected possible infinite redirect when redirecting from '${this.urlTree}' to '${route.redirectTo}'.
This is currently a dev mode only error but will become a call stack size exceeded error in production in a future major version.`);
        }
        this.allowRedirects = false;
      }
    }
    const currentSnapshot = new ActivatedRouteSnapshot(segments, parameters, Object.freeze(__spreadValues({}, this.urlTree.queryParams)), this.urlTree.fragment, getData(route), getOutlet(route), route.component ?? route._loadedComponent ?? null, route, getResolve(route));
    const inherited = getInherited(currentSnapshot, parentRoute, this.paramsInheritanceStrategy);
    currentSnapshot.params = Object.freeze(inherited.params);
    currentSnapshot.data = Object.freeze(inherited.data);
    const newTree$ = this.applyRedirects.applyRedirectCommands(consumedSegments, route.redirectTo, positionalParamSegments, currentSnapshot, injector);
    return newTree$.pipe(switchMap((newTree) => this.applyRedirects.lineralizeSegments(route, newTree)), mergeMap((newSegments) => {
      return this.processSegment(injector, routes2, segmentGroup, newSegments.concat(remainingSegments), outlet, false, parentRoute);
    }));
  }
  matchSegmentAgainstRoute(injector, rawSegment, route, segments, outlet, parentRoute) {
    const matchResult = matchWithChecks(rawSegment, route, segments, injector, this.urlSerializer);
    if (route.path === "**") {
      rawSegment.children = {};
    }
    return matchResult.pipe(switchMap((result) => {
      if (!result.matched) {
        return noMatch$1(rawSegment);
      }
      injector = route._injector ?? injector;
      return this.getChildConfig(injector, route, segments).pipe(switchMap(({
        routes: childConfig
      }) => {
        const childInjector = route._loadedInjector ?? injector;
        const {
          parameters,
          consumedSegments,
          remainingSegments
        } = result;
        const snapshot = new ActivatedRouteSnapshot(consumedSegments, parameters, Object.freeze(__spreadValues({}, this.urlTree.queryParams)), this.urlTree.fragment, getData(route), getOutlet(route), route.component ?? route._loadedComponent ?? null, route, getResolve(route));
        const inherited = getInherited(snapshot, parentRoute, this.paramsInheritanceStrategy);
        snapshot.params = Object.freeze(inherited.params);
        snapshot.data = Object.freeze(inherited.data);
        const {
          segmentGroup,
          slicedSegments
        } = split(rawSegment, consumedSegments, remainingSegments, childConfig);
        if (slicedSegments.length === 0 && segmentGroup.hasChildren()) {
          return this.processChildren(childInjector, childConfig, segmentGroup, snapshot).pipe(map((children) => {
            return new TreeNode(snapshot, children);
          }));
        }
        if (childConfig.length === 0 && slicedSegments.length === 0) {
          return of(new TreeNode(snapshot, []));
        }
        const matchedOnOutlet = getOutlet(route) === outlet;
        return this.processSegment(childInjector, childConfig, segmentGroup, slicedSegments, matchedOnOutlet ? PRIMARY_OUTLET : outlet, true, snapshot).pipe(map((child) => {
          return new TreeNode(snapshot, child instanceof TreeNode ? [child] : []);
        }));
      }));
    }));
  }
  getChildConfig(injector, route, segments) {
    if (route.children) {
      return of({
        routes: route.children,
        injector
      });
    }
    if (route.loadChildren) {
      if (route._loadedRoutes !== void 0) {
        return of({
          routes: route._loadedRoutes,
          injector: route._loadedInjector
        });
      }
      return runCanLoadGuards(injector, route, segments, this.urlSerializer).pipe(mergeMap((shouldLoadResult) => {
        if (shouldLoadResult) {
          return this.configLoader.loadChildren(injector, route).pipe(tap((cfg) => {
            route._loadedRoutes = cfg.routes;
            route._loadedInjector = cfg.injector;
          }));
        }
        return canLoadFails(route);
      }));
    }
    return of({
      routes: [],
      injector
    });
  }
};
function sortActivatedRouteSnapshots(nodes) {
  nodes.sort((a43, b5) => {
    if (a43.value.outlet === PRIMARY_OUTLET) return -1;
    if (b5.value.outlet === PRIMARY_OUTLET) return 1;
    return a43.value.outlet.localeCompare(b5.value.outlet);
  });
}
function hasEmptyPathConfig(node) {
  const config = node.value.routeConfig;
  return config && config.path === "";
}
function mergeEmptyPathMatches(nodes) {
  const result = [];
  const mergedNodes = /* @__PURE__ */ new Set();
  for (const node of nodes) {
    if (!hasEmptyPathConfig(node)) {
      result.push(node);
      continue;
    }
    const duplicateEmptyPathNode = result.find((resultNode) => node.value.routeConfig === resultNode.value.routeConfig);
    if (duplicateEmptyPathNode !== void 0) {
      duplicateEmptyPathNode.children.push(...node.children);
      mergedNodes.add(duplicateEmptyPathNode);
    } else {
      result.push(node);
    }
  }
  for (const mergedNode of mergedNodes) {
    const mergedChildren = mergeEmptyPathMatches(mergedNode.children);
    result.push(new TreeNode(mergedNode.value, mergedChildren));
  }
  return result.filter((n39) => !mergedNodes.has(n39));
}
function checkOutletNameUniqueness(nodes) {
  const names = {};
  nodes.forEach((n39) => {
    const routeWithSameOutletName = names[n39.value.outlet];
    if (routeWithSameOutletName) {
      const p4 = routeWithSameOutletName.url.map((s12) => s12.toString()).join("/");
      const c27 = n39.value.url.map((s12) => s12.toString()).join("/");
      throw new RuntimeError(4006, (typeof ngDevMode === "undefined" || ngDevMode) && `Two segments cannot have the same outlet name: '${p4}' and '${c27}'.`);
    }
    names[n39.value.outlet] = n39.value;
  });
}
function getData(route) {
  return route.data || {};
}
function getResolve(route) {
  return route.resolve || {};
}
function recognize(injector, configLoader, rootComponentType, config, serializer, paramsInheritanceStrategy) {
  return mergeMap((t42) => recognize$1(injector, configLoader, rootComponentType, config, t42.extractedUrl, serializer, paramsInheritanceStrategy).pipe(map(({
    state: targetSnapshot,
    tree: urlAfterRedirects
  }) => {
    return __spreadProps(__spreadValues({}, t42), {
      targetSnapshot,
      urlAfterRedirects
    });
  })));
}
function resolveData(paramsInheritanceStrategy, injector) {
  return mergeMap((t42) => {
    const {
      targetSnapshot,
      guards: {
        canActivateChecks
      }
    } = t42;
    if (!canActivateChecks.length) {
      return of(t42);
    }
    const routesWithResolversToRun = new Set(canActivateChecks.map((check) => check.route));
    const routesNeedingDataUpdates = /* @__PURE__ */ new Set();
    for (const route of routesWithResolversToRun) {
      if (routesNeedingDataUpdates.has(route)) {
        continue;
      }
      for (const newRoute of flattenRouteTree(route)) {
        routesNeedingDataUpdates.add(newRoute);
      }
    }
    let routesProcessed = 0;
    return from(routesNeedingDataUpdates).pipe(concatMap((route) => {
      if (routesWithResolversToRun.has(route)) {
        return runResolve(route, targetSnapshot, paramsInheritanceStrategy, injector);
      } else {
        route.data = getInherited(route, route.parent, paramsInheritanceStrategy).resolve;
        return of(void 0);
      }
    }), tap(() => routesProcessed++), takeLast(1), mergeMap((_) => routesProcessed === routesNeedingDataUpdates.size ? of(t42) : EMPTY));
  });
}
function flattenRouteTree(route) {
  const descendants = route.children.map((child) => flattenRouteTree(child)).flat();
  return [route, ...descendants];
}
function runResolve(futureARS, futureRSS, paramsInheritanceStrategy, injector) {
  const config = futureARS.routeConfig;
  const resolve = futureARS._resolve;
  if (config?.title !== void 0 && !hasStaticTitle(config)) {
    resolve[RouteTitleKey] = config.title;
  }
  return defer(() => {
    futureARS.data = getInherited(futureARS, futureARS.parent, paramsInheritanceStrategy).resolve;
    return resolveNode(resolve, futureARS, futureRSS, injector).pipe(map((resolvedData) => {
      futureARS._resolvedData = resolvedData;
      futureARS.data = __spreadValues(__spreadValues({}, futureARS.data), resolvedData);
      return null;
    }));
  });
}
function resolveNode(resolve, futureARS, futureRSS, injector) {
  const keys = getDataKeys(resolve);
  if (keys.length === 0) {
    return of({});
  }
  const data = {};
  return from(keys).pipe(mergeMap((key) => getResolver(resolve[key], futureARS, futureRSS, injector).pipe(first(), tap((value) => {
    if (value instanceof RedirectCommand) {
      throw redirectingNavigationError(new DefaultUrlSerializer(), value);
    }
    data[key] = value;
  }))), takeLast(1), map(() => data), catchError((e59) => isEmptyError(e59) ? EMPTY : throwError(e59)));
}
function getResolver(injectionToken, futureARS, futureRSS, injector) {
  const closestInjector = getClosestRouteInjector(futureARS) ?? injector;
  const resolver = getTokenOrFunctionIdentity(injectionToken, closestInjector);
  const resolverValue = resolver.resolve ? resolver.resolve(futureARS, futureRSS) : runInInjectionContext(closestInjector, () => resolver(futureARS, futureRSS));
  return wrapIntoObservable(resolverValue);
}
function switchTap(next) {
  return switchMap((v3) => {
    const nextResult = next(v3);
    if (nextResult) {
      return from(nextResult).pipe(map(() => v3));
    }
    return of(v3);
  });
}
var TitleStrategy = class _TitleStrategy {
  /**
   * @returns The `title` of the deepest primary route.
   */
  buildTitle(snapshot) {
    let pageTitle;
    let route = snapshot.root;
    while (route !== void 0) {
      pageTitle = this.getResolvedTitleForRoute(route) ?? pageTitle;
      route = route.children.find((child) => child.outlet === PRIMARY_OUTLET);
    }
    return pageTitle;
  }
  /**
   * Given an `ActivatedRouteSnapshot`, returns the final value of the
   * `Route.title` property, which can either be a static string or a resolved value.
   */
  getResolvedTitleForRoute(snapshot) {
    return snapshot.data[RouteTitleKey];
  }
  static \u0275fac = function TitleStrategy_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TitleStrategy)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TitleStrategy,
    factory: () => (() => inject(DefaultTitleStrategy))(),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TitleStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(DefaultTitleStrategy)
    }]
  }], null, null);
})();
var DefaultTitleStrategy = class _DefaultTitleStrategy extends TitleStrategy {
  title;
  constructor(title) {
    super();
    this.title = title;
  }
  /**
   * Sets the title of the browser to the given value.
   *
   * @param title The `pageTitle` from the deepest primary route.
   */
  updateTitle(snapshot) {
    const title = this.buildTitle(snapshot);
    if (title !== void 0) {
      this.title.setTitle(title);
    }
  }
  static \u0275fac = function DefaultTitleStrategy_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DefaultTitleStrategy)(\u0275\u0275inject(Title));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DefaultTitleStrategy,
    factory: _DefaultTitleStrategy.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultTitleStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Title
  }], null);
})();
var ROUTER_CONFIGURATION = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "router config" : "", {
  providedIn: "root",
  factory: () => ({})
});
var ROUTES = new InjectionToken(ngDevMode ? "ROUTES" : "");
var RouterConfigLoader = class _RouterConfigLoader {
  componentLoaders = /* @__PURE__ */ new WeakMap();
  childrenLoaders = /* @__PURE__ */ new WeakMap();
  onLoadStartListener;
  onLoadEndListener;
  compiler = inject(Compiler);
  loadComponent(injector, route) {
    if (this.componentLoaders.get(route)) {
      return this.componentLoaders.get(route);
    } else if (route._loadedComponent) {
      return of(route._loadedComponent);
    }
    if (this.onLoadStartListener) {
      this.onLoadStartListener(route);
    }
    const loadRunner = wrapIntoObservable(runInInjectionContext(injector, () => route.loadComponent())).pipe(map(maybeUnwrapDefaultExport), switchMap(maybeResolveResources), tap((component) => {
      if (this.onLoadEndListener) {
        this.onLoadEndListener(route);
      }
      (typeof ngDevMode === "undefined" || ngDevMode) && assertStandalone(route.path ?? "", component);
      route._loadedComponent = component;
    }), finalize(() => {
      this.componentLoaders.delete(route);
    }));
    const loader = new ConnectableObservable(loadRunner, () => new Subject()).pipe(refCount());
    this.componentLoaders.set(route, loader);
    return loader;
  }
  loadChildren(parentInjector, route) {
    if (this.childrenLoaders.get(route)) {
      return this.childrenLoaders.get(route);
    } else if (route._loadedRoutes) {
      return of({
        routes: route._loadedRoutes,
        injector: route._loadedInjector
      });
    }
    if (this.onLoadStartListener) {
      this.onLoadStartListener(route);
    }
    const moduleFactoryOrRoutes$ = loadChildren(route, this.compiler, parentInjector, this.onLoadEndListener);
    const loadRunner = moduleFactoryOrRoutes$.pipe(finalize(() => {
      this.childrenLoaders.delete(route);
    }));
    const loader = new ConnectableObservable(loadRunner, () => new Subject()).pipe(refCount());
    this.childrenLoaders.set(route, loader);
    return loader;
  }
  static \u0275fac = function RouterConfigLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouterConfigLoader)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RouterConfigLoader,
    factory: _RouterConfigLoader.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterConfigLoader, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function loadChildren(route, compiler, parentInjector, onLoadEndListener) {
  return wrapIntoObservable(runInInjectionContext(parentInjector, () => route.loadChildren())).pipe(map(maybeUnwrapDefaultExport), switchMap(maybeResolveResources), mergeMap((t42) => {
    if (t42 instanceof NgModuleFactory$1 || Array.isArray(t42)) {
      return of(t42);
    } else {
      return from(compiler.compileModuleAsync(t42));
    }
  }), map((factoryOrRoutes) => {
    if (onLoadEndListener) {
      onLoadEndListener(route);
    }
    let injector;
    let rawRoutes;
    let requireStandaloneComponents = false;
    if (Array.isArray(factoryOrRoutes)) {
      rawRoutes = factoryOrRoutes;
      requireStandaloneComponents = true;
    } else {
      injector = factoryOrRoutes.create(parentInjector).injector;
      rawRoutes = injector.get(ROUTES, [], {
        optional: true,
        self: true
      }).flat();
    }
    const routes2 = rawRoutes.map(standardizeConfig);
    (typeof ngDevMode === "undefined" || ngDevMode) && validateConfig(routes2, route.path, requireStandaloneComponents);
    return {
      routes: routes2,
      injector
    };
  }));
}
function isWrappedDefaultExport(value) {
  return value && typeof value === "object" && "default" in value;
}
function maybeUnwrapDefaultExport(input2) {
  return isWrappedDefaultExport(input2) ? input2["default"] : input2;
}
function maybeResolveResources(value) {
  if (false) {
    return resolveComponentResources(fetch).catch((error) => {
      console.error(error);
      return Promise.resolve();
    }).then(() => value);
  }
  return of(value);
}
var UrlHandlingStrategy = class _UrlHandlingStrategy {
  static \u0275fac = function UrlHandlingStrategy_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UrlHandlingStrategy)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _UrlHandlingStrategy,
    factory: () => (() => inject(DefaultUrlHandlingStrategy))(),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UrlHandlingStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(DefaultUrlHandlingStrategy)
    }]
  }], null, null);
})();
var DefaultUrlHandlingStrategy = class _DefaultUrlHandlingStrategy {
  shouldProcessUrl(url) {
    return true;
  }
  extract(url) {
    return url;
  }
  merge(newUrlPart, wholeUrl) {
    return newUrlPart;
  }
  static \u0275fac = function DefaultUrlHandlingStrategy_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DefaultUrlHandlingStrategy)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DefaultUrlHandlingStrategy,
    factory: _DefaultUrlHandlingStrategy.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultUrlHandlingStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var CREATE_VIEW_TRANSITION = new InjectionToken(ngDevMode ? "view transition helper" : "");
var VIEW_TRANSITION_OPTIONS = new InjectionToken(ngDevMode ? "view transition options" : "");
function createViewTransition(injector, from2, to) {
  const transitionOptions = injector.get(VIEW_TRANSITION_OPTIONS);
  const document2 = injector.get(DOCUMENT);
  if (!document2.startViewTransition || transitionOptions.skipNextTransition) {
    transitionOptions.skipNextTransition = false;
    return new Promise((resolve) => setTimeout(resolve));
  }
  let resolveViewTransitionStarted;
  const viewTransitionStarted = new Promise((resolve) => {
    resolveViewTransitionStarted = resolve;
  });
  const transition = document2.startViewTransition(() => {
    resolveViewTransitionStarted();
    return createRenderPromise(injector);
  });
  transition.ready.catch((error) => {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.error(error);
    }
  });
  const {
    onViewTransitionCreated
  } = transitionOptions;
  if (onViewTransitionCreated) {
    runInInjectionContext(injector, () => onViewTransitionCreated({
      transition,
      from: from2,
      to
    }));
  }
  return viewTransitionStarted;
}
function createRenderPromise(injector) {
  return new Promise((resolve) => {
    afterNextRender({
      read: () => setTimeout(resolve)
    }, {
      injector
    });
  });
}
var NAVIGATION_ERROR_HANDLER = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "navigation error handler" : "");
var NavigationTransitions = class _NavigationTransitions {
  // Some G3 targets expect the navigation object to be mutated (and not getting a new reference on changes).
  currentNavigation = signal(null, ...ngDevMode ? [{
    debugName: "currentNavigation",
    equal: () => false
  }] : [{
    equal: () => false
  }]);
  currentTransition = null;
  lastSuccessfulNavigation = null;
  /**
   * These events are used to communicate back to the Router about the state of the transition. The
   * Router wants to respond to these events in various ways. Because the `NavigationTransition`
   * class is not public, this event subject is not publicly exposed.
   */
  events = new Subject();
  /**
   * Used to abort the current transition with an error.
   */
  transitionAbortWithErrorSubject = new Subject();
  configLoader = inject(RouterConfigLoader);
  environmentInjector = inject(EnvironmentInjector);
  destroyRef = inject(DestroyRef);
  urlSerializer = inject(UrlSerializer);
  rootContexts = inject(ChildrenOutletContexts);
  location = inject(Location);
  inputBindingEnabled = inject(INPUT_BINDER, {
    optional: true
  }) !== null;
  titleStrategy = inject(TitleStrategy);
  options = inject(ROUTER_CONFIGURATION, {
    optional: true
  }) || {};
  paramsInheritanceStrategy = this.options.paramsInheritanceStrategy || "emptyOnly";
  urlHandlingStrategy = inject(UrlHandlingStrategy);
  createViewTransition = inject(CREATE_VIEW_TRANSITION, {
    optional: true
  });
  navigationErrorHandler = inject(NAVIGATION_ERROR_HANDLER, {
    optional: true
  });
  navigationId = 0;
  get hasRequestedNavigation() {
    return this.navigationId !== 0;
  }
  transitions;
  /**
   * Hook that enables you to pause navigation after the preactivation phase.
   * Used by `RouterModule`.
   *
   * @internal
   */
  afterPreactivation = () => of(void 0);
  /** @internal */
  rootComponentType = null;
  destroyed = false;
  constructor() {
    const onLoadStart = (r85) => this.events.next(new RouteConfigLoadStart(r85));
    const onLoadEnd = (r85) => this.events.next(new RouteConfigLoadEnd(r85));
    this.configLoader.onLoadEndListener = onLoadEnd;
    this.configLoader.onLoadStartListener = onLoadStart;
    this.destroyRef.onDestroy(() => {
      this.destroyed = true;
    });
  }
  complete() {
    this.transitions?.complete();
  }
  handleNavigationRequest(request) {
    const id = ++this.navigationId;
    untracked(() => {
      this.transitions?.next(__spreadProps(__spreadValues({}, request), {
        extractedUrl: this.urlHandlingStrategy.extract(request.rawUrl),
        targetSnapshot: null,
        targetRouterState: null,
        guards: {
          canActivateChecks: [],
          canDeactivateChecks: []
        },
        guardsResult: null,
        abortController: new AbortController(),
        id
      }));
    });
  }
  setupNavigations(router) {
    this.transitions = new BehaviorSubject(null);
    return this.transitions.pipe(
      filter((t42) => t42 !== null),
      // Using switchMap so we cancel executing navigations when a new one comes in
      switchMap((overallTransitionState) => {
        let completedOrAborted = false;
        return of(overallTransitionState).pipe(
          switchMap((t42) => {
            if (this.navigationId > overallTransitionState.id) {
              const cancellationReason = typeof ngDevMode === "undefined" || ngDevMode ? `Navigation ID ${overallTransitionState.id} is not equal to the current navigation id ${this.navigationId}` : "";
              this.cancelNavigationTransition(overallTransitionState, cancellationReason, NavigationCancellationCode.SupersededByNewNavigation);
              return EMPTY;
            }
            this.currentTransition = overallTransitionState;
            this.currentNavigation.set({
              id: t42.id,
              initialUrl: t42.rawUrl,
              extractedUrl: t42.extractedUrl,
              targetBrowserUrl: typeof t42.extras.browserUrl === "string" ? this.urlSerializer.parse(t42.extras.browserUrl) : t42.extras.browserUrl,
              trigger: t42.source,
              extras: t42.extras,
              previousNavigation: !this.lastSuccessfulNavigation ? null : __spreadProps(__spreadValues({}, this.lastSuccessfulNavigation), {
                previousNavigation: null
              }),
              abort: () => t42.abortController.abort()
            });
            const urlTransition = !router.navigated || this.isUpdatingInternalState() || this.isUpdatedBrowserUrl();
            const onSameUrlNavigation = t42.extras.onSameUrlNavigation ?? router.onSameUrlNavigation;
            if (!urlTransition && onSameUrlNavigation !== "reload") {
              const reason = typeof ngDevMode === "undefined" || ngDevMode ? `Navigation to ${t42.rawUrl} was ignored because it is the same as the current Router URL.` : "";
              this.events.next(new NavigationSkipped(t42.id, this.urlSerializer.serialize(t42.rawUrl), reason, NavigationSkippedCode.IgnoredSameUrlNavigation));
              t42.resolve(false);
              return EMPTY;
            }
            if (this.urlHandlingStrategy.shouldProcessUrl(t42.rawUrl)) {
              return of(t42).pipe(
                // Fire NavigationStart event
                switchMap((t43) => {
                  this.events.next(new NavigationStart(t43.id, this.urlSerializer.serialize(t43.extractedUrl), t43.source, t43.restoredState));
                  if (t43.id !== this.navigationId) {
                    return EMPTY;
                  }
                  return Promise.resolve(t43);
                }),
                // Recognize
                recognize(this.environmentInjector, this.configLoader, this.rootComponentType, router.config, this.urlSerializer, this.paramsInheritanceStrategy),
                // Update URL if in `eager` update mode
                tap((t43) => {
                  overallTransitionState.targetSnapshot = t43.targetSnapshot;
                  overallTransitionState.urlAfterRedirects = t43.urlAfterRedirects;
                  this.currentNavigation.update((nav) => {
                    nav.finalUrl = t43.urlAfterRedirects;
                    return nav;
                  });
                  const routesRecognized = new RoutesRecognized(t43.id, this.urlSerializer.serialize(t43.extractedUrl), this.urlSerializer.serialize(t43.urlAfterRedirects), t43.targetSnapshot);
                  this.events.next(routesRecognized);
                })
              );
            } else if (urlTransition && this.urlHandlingStrategy.shouldProcessUrl(t42.currentRawUrl)) {
              const {
                id,
                extractedUrl,
                source,
                restoredState,
                extras
              } = t42;
              const navStart = new NavigationStart(id, this.urlSerializer.serialize(extractedUrl), source, restoredState);
              this.events.next(navStart);
              const targetSnapshot = createEmptyState(this.rootComponentType).snapshot;
              this.currentTransition = overallTransitionState = __spreadProps(__spreadValues({}, t42), {
                targetSnapshot,
                urlAfterRedirects: extractedUrl,
                extras: __spreadProps(__spreadValues({}, extras), {
                  skipLocationChange: false,
                  replaceUrl: false
                })
              });
              this.currentNavigation.update((nav) => {
                nav.finalUrl = extractedUrl;
                return nav;
              });
              return of(overallTransitionState);
            } else {
              const reason = typeof ngDevMode === "undefined" || ngDevMode ? `Navigation was ignored because the UrlHandlingStrategy indicated neither the current URL ${t42.currentRawUrl} nor target URL ${t42.rawUrl} should be processed.` : "";
              this.events.next(new NavigationSkipped(t42.id, this.urlSerializer.serialize(t42.extractedUrl), reason, NavigationSkippedCode.IgnoredByUrlHandlingStrategy));
              t42.resolve(false);
              return EMPTY;
            }
          }),
          // --- GUARDS ---
          tap((t42) => {
            const guardsStart = new GuardsCheckStart(t42.id, this.urlSerializer.serialize(t42.extractedUrl), this.urlSerializer.serialize(t42.urlAfterRedirects), t42.targetSnapshot);
            this.events.next(guardsStart);
          }),
          map((t42) => {
            this.currentTransition = overallTransitionState = __spreadProps(__spreadValues({}, t42), {
              guards: getAllRouteGuards(t42.targetSnapshot, t42.currentSnapshot, this.rootContexts)
            });
            return overallTransitionState;
          }),
          checkGuards(this.environmentInjector, (evt) => this.events.next(evt)),
          tap((t42) => {
            overallTransitionState.guardsResult = t42.guardsResult;
            if (t42.guardsResult && typeof t42.guardsResult !== "boolean") {
              throw redirectingNavigationError(this.urlSerializer, t42.guardsResult);
            }
            const guardsEnd = new GuardsCheckEnd(t42.id, this.urlSerializer.serialize(t42.extractedUrl), this.urlSerializer.serialize(t42.urlAfterRedirects), t42.targetSnapshot, !!t42.guardsResult);
            this.events.next(guardsEnd);
          }),
          filter((t42) => {
            if (!t42.guardsResult) {
              this.cancelNavigationTransition(t42, "", NavigationCancellationCode.GuardRejected);
              return false;
            }
            return true;
          }),
          // --- RESOLVE ---
          switchTap((t42) => {
            if (t42.guards.canActivateChecks.length === 0) {
              return void 0;
            }
            return of(t42).pipe(tap((t43) => {
              const resolveStart = new ResolveStart(t43.id, this.urlSerializer.serialize(t43.extractedUrl), this.urlSerializer.serialize(t43.urlAfterRedirects), t43.targetSnapshot);
              this.events.next(resolveStart);
            }), switchMap((t43) => {
              let dataResolved = false;
              return of(t43).pipe(resolveData(this.paramsInheritanceStrategy, this.environmentInjector), tap({
                next: () => dataResolved = true,
                complete: () => {
                  if (!dataResolved) {
                    this.cancelNavigationTransition(t43, typeof ngDevMode === "undefined" || ngDevMode ? `At least one route resolver didn't emit any value.` : "", NavigationCancellationCode.NoDataFromResolver);
                  }
                }
              }));
            }), tap((t43) => {
              const resolveEnd = new ResolveEnd(t43.id, this.urlSerializer.serialize(t43.extractedUrl), this.urlSerializer.serialize(t43.urlAfterRedirects), t43.targetSnapshot);
              this.events.next(resolveEnd);
            }));
          }),
          // --- LOAD COMPONENTS ---
          switchTap((t42) => {
            const loadComponents = (route) => {
              const loaders = [];
              if (route.routeConfig?.loadComponent) {
                const injector = getClosestRouteInjector(route) ?? this.environmentInjector;
                loaders.push(this.configLoader.loadComponent(injector, route.routeConfig).pipe(tap((loadedComponent) => {
                  route.component = loadedComponent;
                }), map(() => void 0)));
              }
              for (const child of route.children) {
                loaders.push(...loadComponents(child));
              }
              return loaders;
            };
            return combineLatest(loadComponents(t42.targetSnapshot.root)).pipe(defaultIfEmpty(null), take(1));
          }),
          switchTap(() => this.afterPreactivation()),
          switchMap(() => {
            const {
              currentSnapshot,
              targetSnapshot
            } = overallTransitionState;
            const viewTransitionStarted = this.createViewTransition?.(this.environmentInjector, currentSnapshot.root, targetSnapshot.root);
            return viewTransitionStarted ? from(viewTransitionStarted).pipe(map(() => overallTransitionState)) : of(overallTransitionState);
          }),
          map((t42) => {
            const targetRouterState = createRouterState(router.routeReuseStrategy, t42.targetSnapshot, t42.currentRouterState);
            this.currentTransition = overallTransitionState = __spreadProps(__spreadValues({}, t42), {
              targetRouterState
            });
            this.currentNavigation.update((nav) => {
              nav.targetRouterState = targetRouterState;
              return nav;
            });
            return overallTransitionState;
          }),
          tap(() => {
            this.events.next(new BeforeActivateRoutes());
          }),
          activateRoutes(this.rootContexts, router.routeReuseStrategy, (evt) => this.events.next(evt), this.inputBindingEnabled),
          // Ensure that if some observable used to drive the transition doesn't
          // complete, the navigation still finalizes This should never happen, but
          // this is done as a safety measure to avoid surfacing this error (#49567).
          take(1),
          takeUntil(new Observable((subscriber) => {
            const abortSignal = overallTransitionState.abortController.signal;
            const handler = () => subscriber.next();
            abortSignal.addEventListener("abort", handler);
            return () => abortSignal.removeEventListener("abort", handler);
          }).pipe(
            // Ignore aborts if we are already completed, canceled, or are in the activation stage (we have targetRouterState)
            filter(() => !completedOrAborted && !overallTransitionState.targetRouterState),
            tap(() => {
              this.cancelNavigationTransition(overallTransitionState, overallTransitionState.abortController.signal.reason + "", NavigationCancellationCode.Aborted);
            })
          )),
          tap({
            next: (t42) => {
              completedOrAborted = true;
              this.lastSuccessfulNavigation = untracked(this.currentNavigation);
              this.events.next(new NavigationEnd(t42.id, this.urlSerializer.serialize(t42.extractedUrl), this.urlSerializer.serialize(t42.urlAfterRedirects)));
              this.titleStrategy?.updateTitle(t42.targetRouterState.snapshot);
              t42.resolve(true);
            },
            complete: () => {
              completedOrAborted = true;
            }
          }),
          // There used to be a lot more logic happening directly within the
          // transition Observable. Some of this logic has been refactored out to
          // other places but there may still be errors that happen there. This gives
          // us a way to cancel the transition from the outside. This may also be
          // required in the future to support something like the abort signal of the
          // Navigation API where the navigation gets aborted from outside the
          // transition.
          takeUntil(this.transitionAbortWithErrorSubject.pipe(tap((err) => {
            throw err;
          }))),
          finalize(() => {
            if (!completedOrAborted) {
              const cancelationReason = typeof ngDevMode === "undefined" || ngDevMode ? `Navigation ID ${overallTransitionState.id} is not equal to the current navigation id ${this.navigationId}` : "";
              this.cancelNavigationTransition(overallTransitionState, cancelationReason, NavigationCancellationCode.SupersededByNewNavigation);
            }
            if (this.currentTransition?.id === overallTransitionState.id) {
              this.currentNavigation.set(null);
              this.currentTransition = null;
            }
          }),
          catchError((e59) => {
            if (this.destroyed) {
              overallTransitionState.resolve(false);
              return EMPTY;
            }
            completedOrAborted = true;
            if (isNavigationCancelingError(e59)) {
              this.events.next(new NavigationCancel(overallTransitionState.id, this.urlSerializer.serialize(overallTransitionState.extractedUrl), e59.message, e59.cancellationCode));
              if (!isRedirectingNavigationCancelingError(e59)) {
                overallTransitionState.resolve(false);
              } else {
                this.events.next(new RedirectRequest(e59.url, e59.navigationBehaviorOptions));
              }
            } else {
              const navigationError = new NavigationError(overallTransitionState.id, this.urlSerializer.serialize(overallTransitionState.extractedUrl), e59, overallTransitionState.targetSnapshot ?? void 0);
              try {
                const navigationErrorHandlerResult = runInInjectionContext(this.environmentInjector, () => this.navigationErrorHandler?.(navigationError));
                if (navigationErrorHandlerResult instanceof RedirectCommand) {
                  const {
                    message,
                    cancellationCode
                  } = redirectingNavigationError(this.urlSerializer, navigationErrorHandlerResult);
                  this.events.next(new NavigationCancel(overallTransitionState.id, this.urlSerializer.serialize(overallTransitionState.extractedUrl), message, cancellationCode));
                  this.events.next(new RedirectRequest(navigationErrorHandlerResult.redirectTo, navigationErrorHandlerResult.navigationBehaviorOptions));
                } else {
                  this.events.next(navigationError);
                  throw e59;
                }
              } catch (ee) {
                if (this.options.resolveNavigationPromiseOnError) {
                  overallTransitionState.resolve(false);
                } else {
                  overallTransitionState.reject(ee);
                }
              }
            }
            return EMPTY;
          })
        );
      })
    );
  }
  cancelNavigationTransition(t42, reason, code) {
    const navCancel = new NavigationCancel(t42.id, this.urlSerializer.serialize(t42.extractedUrl), reason, code);
    this.events.next(navCancel);
    t42.resolve(false);
  }
  /**
   * @returns Whether we're navigating to somewhere that is not what the Router is
   * currently set to.
   */
  isUpdatingInternalState() {
    return this.currentTransition?.extractedUrl.toString() !== this.currentTransition?.currentUrlTree.toString();
  }
  /**
   * @returns Whether we're updating the browser URL to something new (navigation is going
   * to somewhere not displayed in the URL bar and we will update the URL
   * bar if navigation succeeds).
   */
  isUpdatedBrowserUrl() {
    const currentBrowserUrl = this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(true)));
    const currentNavigation = untracked(this.currentNavigation);
    const targetBrowserUrl = currentNavigation?.targetBrowserUrl ?? currentNavigation?.extractedUrl;
    return currentBrowserUrl.toString() !== targetBrowserUrl?.toString() && !currentNavigation?.extras.skipLocationChange;
  }
  static \u0275fac = function NavigationTransitions_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavigationTransitions)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NavigationTransitions,
    factory: _NavigationTransitions.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigationTransitions, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function isBrowserTriggeredNavigation(source) {
  return source !== IMPERATIVE_NAVIGATION;
}
var RouteReuseStrategy = class _RouteReuseStrategy {
  static \u0275fac = function RouteReuseStrategy_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouteReuseStrategy)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RouteReuseStrategy,
    factory: () => (() => inject(DefaultRouteReuseStrategy))(),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouteReuseStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(DefaultRouteReuseStrategy)
    }]
  }], null, null);
})();
var BaseRouteReuseStrategy = class {
  /**
   * Whether the given route should detach for later reuse.
   * Always returns false for `BaseRouteReuseStrategy`.
   * */
  shouldDetach(route) {
    return false;
  }
  /**
   * A no-op; the route is never stored since this strategy never detaches routes for later re-use.
   */
  store(route, detachedTree) {
  }
  /** Returns `false`, meaning the route (and its subtree) is never reattached */
  shouldAttach(route) {
    return false;
  }
  /** Returns `null` because this strategy does not store routes for later re-use. */
  retrieve(route) {
    return null;
  }
  /**
   * Determines if a route should be reused.
   * This strategy returns `true` when the future route config and current route config are
   * identical.
   */
  shouldReuseRoute(future, curr) {
    return future.routeConfig === curr.routeConfig;
  }
};
var DefaultRouteReuseStrategy = class _DefaultRouteReuseStrategy extends BaseRouteReuseStrategy {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275DefaultRouteReuseStrategy_BaseFactory;
    return function DefaultRouteReuseStrategy_Factory(__ngFactoryType__) {
      return (\u0275DefaultRouteReuseStrategy_BaseFactory || (\u0275DefaultRouteReuseStrategy_BaseFactory = \u0275\u0275getInheritedFactory(_DefaultRouteReuseStrategy)))(__ngFactoryType__ || _DefaultRouteReuseStrategy);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DefaultRouteReuseStrategy,
    factory: _DefaultRouteReuseStrategy.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultRouteReuseStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var StateManager = class _StateManager {
  urlSerializer = inject(UrlSerializer);
  options = inject(ROUTER_CONFIGURATION, {
    optional: true
  }) || {};
  canceledNavigationResolution = this.options.canceledNavigationResolution || "replace";
  location = inject(Location);
  urlHandlingStrategy = inject(UrlHandlingStrategy);
  urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
  currentUrlTree = new UrlTree();
  /**
   * Returns the currently activated `UrlTree`.
   *
   * This `UrlTree` shows only URLs that the `Router` is configured to handle (through
   * `UrlHandlingStrategy`).
   *
   * The value is set after finding the route config tree to activate but before activating the
   * route.
   */
  getCurrentUrlTree() {
    return this.currentUrlTree;
  }
  rawUrlTree = this.currentUrlTree;
  /**
   * Returns a `UrlTree` that is represents what the browser is actually showing.
   *
   * In the life of a navigation transition:
   * 1. When a navigation begins, the raw `UrlTree` is updated to the full URL that's being
   * navigated to.
   * 2. During a navigation, redirects are applied, which might only apply to _part_ of the URL (due
   * to `UrlHandlingStrategy`).
   * 3. Just before activation, the raw `UrlTree` is updated to include the redirects on top of the
   * original raw URL.
   *
   * Note that this is _only_ here to support `UrlHandlingStrategy.extract` and
   * `UrlHandlingStrategy.shouldProcessUrl`. Without those APIs, the current `UrlTree` would not
   * deviated from the raw `UrlTree`.
   *
   * For `extract`, a raw `UrlTree` is needed because `extract` may only return part
   * of the navigation URL. Thus, the current `UrlTree` may only represent _part_ of the browser
   * URL. When a navigation gets cancelled and the router needs to reset the URL or a new navigation
   * occurs, it needs to know the _whole_ browser URL, not just the part handled by
   * `UrlHandlingStrategy`.
   * For `shouldProcessUrl`, when the return is `false`, the router ignores the navigation but
   * still updates the raw `UrlTree` with the assumption that the navigation was caused by the
   * location change listener due to a URL update by the AngularJS router. In this case, the router
   * still need to know what the browser's URL is for future navigations.
   */
  getRawUrlTree() {
    return this.rawUrlTree;
  }
  createBrowserPath({
    finalUrl,
    initialUrl,
    targetBrowserUrl
  }) {
    const rawUrl = finalUrl !== void 0 ? this.urlHandlingStrategy.merge(finalUrl, initialUrl) : initialUrl;
    const url = targetBrowserUrl ?? rawUrl;
    const path = url instanceof UrlTree ? this.urlSerializer.serialize(url) : url;
    return path;
  }
  commitTransition({
    targetRouterState,
    finalUrl,
    initialUrl
  }) {
    if (finalUrl && targetRouterState) {
      this.currentUrlTree = finalUrl;
      this.rawUrlTree = this.urlHandlingStrategy.merge(finalUrl, initialUrl);
      this.routerState = targetRouterState;
    } else {
      this.rawUrlTree = initialUrl;
    }
  }
  routerState = createEmptyState(null);
  /** Returns the current RouterState. */
  getRouterState() {
    return this.routerState;
  }
  stateMemento = this.createStateMemento();
  updateStateMemento() {
    this.stateMemento = this.createStateMemento();
  }
  createStateMemento() {
    return {
      rawUrlTree: this.rawUrlTree,
      currentUrlTree: this.currentUrlTree,
      routerState: this.routerState
    };
  }
  resetInternalState({
    finalUrl
  }) {
    this.routerState = this.stateMemento.routerState;
    this.currentUrlTree = this.stateMemento.currentUrlTree;
    this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, finalUrl ?? this.rawUrlTree);
  }
  static \u0275fac = function StateManager_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StateManager)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _StateManager,
    factory: () => (() => inject(HistoryStateManager))(),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StateManager, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(HistoryStateManager)
    }]
  }], null, null);
})();
var HistoryStateManager = class _HistoryStateManager extends StateManager {
  /**
   * The id of the currently active page in the router.
   * Updated to the transition's target id on a successful navigation.
   *
   * This is used to track what page the router last activated. When an attempted navigation fails,
   * the router can then use this to compute how to restore the state back to the previously active
   * page.
   */
  currentPageId = 0;
  lastSuccessfulId = -1;
  restoredState() {
    return this.location.getState();
  }
  /**
   * The ɵrouterPageId of whatever page is currently active in the browser history. This is
   * important for computing the target page id for new navigations because we need to ensure each
   * page id in the browser history is 1 more than the previous entry.
   */
  get browserPageId() {
    if (this.canceledNavigationResolution !== "computed") {
      return this.currentPageId;
    }
    return this.restoredState()?.\u0275routerPageId ?? this.currentPageId;
  }
  registerNonRouterCurrentEntryChangeListener(listener) {
    return this.location.subscribe((event) => {
      if (event["type"] === "popstate") {
        setTimeout(() => {
          listener(event["url"], event.state, "popstate");
        });
      }
    });
  }
  handleRouterEvent(e59, currentTransition) {
    if (e59 instanceof NavigationStart) {
      this.updateStateMemento();
    } else if (e59 instanceof NavigationSkipped) {
      this.commitTransition(currentTransition);
    } else if (e59 instanceof RoutesRecognized) {
      if (this.urlUpdateStrategy === "eager") {
        if (!currentTransition.extras.skipLocationChange) {
          this.setBrowserUrl(this.createBrowserPath(currentTransition), currentTransition);
        }
      }
    } else if (e59 instanceof BeforeActivateRoutes) {
      this.commitTransition(currentTransition);
      if (this.urlUpdateStrategy === "deferred" && !currentTransition.extras.skipLocationChange) {
        this.setBrowserUrl(this.createBrowserPath(currentTransition), currentTransition);
      }
    } else if (e59 instanceof NavigationCancel && e59.code !== NavigationCancellationCode.SupersededByNewNavigation && e59.code !== NavigationCancellationCode.Redirect) {
      this.restoreHistory(currentTransition);
    } else if (e59 instanceof NavigationError) {
      this.restoreHistory(currentTransition, true);
    } else if (e59 instanceof NavigationEnd) {
      this.lastSuccessfulId = e59.id;
      this.currentPageId = this.browserPageId;
    }
  }
  setBrowserUrl(path, {
    extras,
    id
  }) {
    const {
      replaceUrl,
      state
    } = extras;
    if (this.location.isCurrentPathEqualTo(path) || !!replaceUrl) {
      const currentBrowserPageId = this.browserPageId;
      const newState = __spreadValues(__spreadValues({}, state), this.generateNgRouterState(id, currentBrowserPageId));
      this.location.replaceState(path, "", newState);
    } else {
      const newState = __spreadValues(__spreadValues({}, state), this.generateNgRouterState(id, this.browserPageId + 1));
      this.location.go(path, "", newState);
    }
  }
  /**
   * Performs the necessary rollback action to restore the browser URL to the
   * state before the transition.
   */
  restoreHistory(navigation, restoringFromCaughtError = false) {
    if (this.canceledNavigationResolution === "computed") {
      const currentBrowserPageId = this.browserPageId;
      const targetPagePosition = this.currentPageId - currentBrowserPageId;
      if (targetPagePosition !== 0) {
        this.location.historyGo(targetPagePosition);
      } else if (this.getCurrentUrlTree() === navigation.finalUrl && targetPagePosition === 0) {
        this.resetInternalState(navigation);
        this.resetUrlToCurrentUrlTree();
      } else ;
    } else if (this.canceledNavigationResolution === "replace") {
      if (restoringFromCaughtError) {
        this.resetInternalState(navigation);
      }
      this.resetUrlToCurrentUrlTree();
    }
  }
  resetUrlToCurrentUrlTree() {
    this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()), "", this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId));
  }
  generateNgRouterState(navigationId, routerPageId) {
    if (this.canceledNavigationResolution === "computed") {
      return {
        navigationId,
        \u0275routerPageId: routerPageId
      };
    }
    return {
      navigationId
    };
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275HistoryStateManager_BaseFactory;
    return function HistoryStateManager_Factory(__ngFactoryType__) {
      return (\u0275HistoryStateManager_BaseFactory || (\u0275HistoryStateManager_BaseFactory = \u0275\u0275getInheritedFactory(_HistoryStateManager)))(__ngFactoryType__ || _HistoryStateManager);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _HistoryStateManager,
    factory: _HistoryStateManager.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HistoryStateManager, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function afterNextNavigation(router, action) {
  router.events.pipe(filter((e59) => e59 instanceof NavigationEnd || e59 instanceof NavigationCancel || e59 instanceof NavigationError || e59 instanceof NavigationSkipped), map((e59) => {
    if (e59 instanceof NavigationEnd || e59 instanceof NavigationSkipped) {
      return 0;
    }
    const redirecting = e59 instanceof NavigationCancel ? e59.code === NavigationCancellationCode.Redirect || e59.code === NavigationCancellationCode.SupersededByNewNavigation : false;
    return redirecting ? 2 : 1;
  }), filter(
    (result) => result !== 2
    /* NavigationResult.REDIRECTING */
  ), take(1)).subscribe(() => {
    action();
  });
}
var exactMatchOptions = {
  paths: "exact",
  fragment: "ignored",
  matrixParams: "ignored",
  queryParams: "exact"
};
var subsetMatchOptions = {
  paths: "subset",
  fragment: "ignored",
  matrixParams: "ignored",
  queryParams: "subset"
};
var Router = class _Router {
  get currentUrlTree() {
    return this.stateManager.getCurrentUrlTree();
  }
  get rawUrlTree() {
    return this.stateManager.getRawUrlTree();
  }
  disposed = false;
  nonRouterCurrentEntryChangeSubscription;
  console = inject(Console);
  stateManager = inject(StateManager);
  options = inject(ROUTER_CONFIGURATION, {
    optional: true
  }) || {};
  pendingTasks = inject(PendingTasksInternal);
  urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
  navigationTransitions = inject(NavigationTransitions);
  urlSerializer = inject(UrlSerializer);
  location = inject(Location);
  urlHandlingStrategy = inject(UrlHandlingStrategy);
  injector = inject(EnvironmentInjector);
  /**
   * The private `Subject` type for the public events exposed in the getter. This is used internally
   * to push events to. The separate field allows us to expose separate types in the public API
   * (i.e., an Observable rather than the Subject).
   */
  _events = new Subject();
  /**
   * An event stream for routing events.
   */
  get events() {
    return this._events;
  }
  /**
   * The current state of routing in this NgModule.
   */
  get routerState() {
    return this.stateManager.getRouterState();
  }
  /**
   * True if at least one navigation event has occurred,
   * false otherwise.
   */
  navigated = false;
  /**
   * A strategy for re-using routes.
   *
   * @deprecated Configure using `providers` instead:
   *   `{provide: RouteReuseStrategy, useClass: MyStrategy}`.
   */
  routeReuseStrategy = inject(RouteReuseStrategy);
  /**
   * How to handle a navigation request to the current URL.
   *
   *
   * @deprecated Configure this through `provideRouter` or `RouterModule.forRoot` instead.
   * @see {@link withRouterConfig}
   * @see {@link provideRouter}
   * @see {@link RouterModule}
   */
  onSameUrlNavigation = this.options.onSameUrlNavigation || "ignore";
  config = inject(ROUTES, {
    optional: true
  })?.flat() ?? [];
  /**
   * Indicates whether the application has opted in to binding Router data to component inputs.
   *
   * This option is enabled by the `withComponentInputBinding` feature of `provideRouter` or
   * `bindToComponentInputs` in the `ExtraOptions` of `RouterModule.forRoot`.
   */
  componentInputBindingEnabled = !!inject(INPUT_BINDER, {
    optional: true
  });
  /**
   * Signal of the current `Navigation` object when the router is navigating, and `null` when idle.
   *
   * Note: The current navigation becomes to null after the NavigationEnd event is emitted.
   */
  currentNavigation = this.navigationTransitions.currentNavigation.asReadonly();
  constructor() {
    this.resetConfig(this.config);
    this.navigationTransitions.setupNavigations(this).subscribe({
      error: (e59) => {
        this.console.warn(ngDevMode ? `Unhandled Navigation Error: ${e59}` : e59);
      }
    });
    this.subscribeToNavigationEvents();
  }
  eventsSubscription = new Subscription();
  subscribeToNavigationEvents() {
    const subscription = this.navigationTransitions.events.subscribe((e59) => {
      try {
        const currentTransition = this.navigationTransitions.currentTransition;
        const currentNavigation = untracked(this.navigationTransitions.currentNavigation);
        if (currentTransition !== null && currentNavigation !== null) {
          this.stateManager.handleRouterEvent(e59, currentNavigation);
          if (e59 instanceof NavigationCancel && e59.code !== NavigationCancellationCode.Redirect && e59.code !== NavigationCancellationCode.SupersededByNewNavigation) {
            this.navigated = true;
          } else if (e59 instanceof NavigationEnd) {
            this.navigated = true;
          } else if (e59 instanceof RedirectRequest) {
            const opts = e59.navigationBehaviorOptions;
            const mergedTree = this.urlHandlingStrategy.merge(e59.url, currentTransition.currentRawUrl);
            const extras = __spreadValues({
              browserUrl: currentTransition.extras.browserUrl,
              info: currentTransition.extras.info,
              skipLocationChange: currentTransition.extras.skipLocationChange,
              // The URL is already updated at this point if we have 'eager' URL
              // updates or if the navigation was triggered by the browser (back
              // button, URL bar, etc). We want to replace that item in history
              // if the navigation is rejected.
              replaceUrl: currentTransition.extras.replaceUrl || this.urlUpdateStrategy === "eager" || isBrowserTriggeredNavigation(currentTransition.source)
            }, opts);
            this.scheduleNavigation(mergedTree, IMPERATIVE_NAVIGATION, null, extras, {
              resolve: currentTransition.resolve,
              reject: currentTransition.reject,
              promise: currentTransition.promise
            });
          }
        }
        if (isPublicRouterEvent(e59)) {
          this._events.next(e59);
        }
      } catch (e60) {
        this.navigationTransitions.transitionAbortWithErrorSubject.next(e60);
      }
    });
    this.eventsSubscription.add(subscription);
  }
  /** @internal */
  resetRootComponentType(rootComponentType) {
    this.routerState.root.component = rootComponentType;
    this.navigationTransitions.rootComponentType = rootComponentType;
  }
  /**
   * Sets up the location change listener and performs the initial navigation.
   */
  initialNavigation() {
    this.setUpLocationChangeListener();
    if (!this.navigationTransitions.hasRequestedNavigation) {
      this.navigateToSyncWithBrowser(this.location.path(true), IMPERATIVE_NAVIGATION, this.stateManager.restoredState());
    }
  }
  /**
   * Sets up the location change listener. This listener detects navigations triggered from outside
   * the Router (the browser back/forward buttons, for example) and schedules a corresponding Router
   * navigation so that the correct events, guards, etc. are triggered.
   */
  setUpLocationChangeListener() {
    this.nonRouterCurrentEntryChangeSubscription ??= this.stateManager.registerNonRouterCurrentEntryChangeListener((url, state, source) => {
      this.navigateToSyncWithBrowser(url, source, state);
    });
  }
  /**
   * Schedules a router navigation to synchronize Router state with the browser state.
   *
   * This is done as a response to a popstate event and the initial navigation. These
   * two scenarios represent times when the browser URL/state has been updated and
   * the Router needs to respond to ensure its internal state matches.
   */
  navigateToSyncWithBrowser(url, source, state) {
    const extras = {
      replaceUrl: true
    };
    const restoredState = state?.navigationId ? state : null;
    if (state) {
      const stateCopy = __spreadValues({}, state);
      delete stateCopy.navigationId;
      delete stateCopy.\u0275routerPageId;
      if (Object.keys(stateCopy).length !== 0) {
        extras.state = stateCopy;
      }
    }
    const urlTree = this.parseUrl(url);
    this.scheduleNavigation(urlTree, source, restoredState, extras).catch((e59) => {
      if (this.disposed) {
        return;
      }
      this.injector.get(INTERNAL_APPLICATION_ERROR_HANDLER)(e59);
    });
  }
  /** The current URL. */
  get url() {
    return this.serializeUrl(this.currentUrlTree);
  }
  /**
   * Returns the current `Navigation` object when the router is navigating,
   * and `null` when idle.
   *
   * @deprecated 20.2 Use the `currentNavigation` signal instead.
   */
  getCurrentNavigation() {
    return untracked(this.navigationTransitions.currentNavigation);
  }
  /**
   * The `Navigation` object of the most recent navigation to succeed and `null` if there
   *     has not been a successful navigation yet.
   */
  get lastSuccessfulNavigation() {
    return this.navigationTransitions.lastSuccessfulNavigation;
  }
  /**
   * Resets the route configuration used for navigation and generating links.
   *
   * @param config The route array for the new configuration.
   *
   * @usageNotes
   *
   * ```ts
   * router.resetConfig([
   *  { path: 'team/:id', component: TeamCmp, children: [
   *    { path: 'simple', component: SimpleCmp },
   *    { path: 'user/:name', component: UserCmp }
   *  ]}
   * ]);
   * ```
   */
  resetConfig(config) {
    (typeof ngDevMode === "undefined" || ngDevMode) && validateConfig(config);
    this.config = config.map(standardizeConfig);
    this.navigated = false;
  }
  /** @docs-private */
  ngOnDestroy() {
    this.dispose();
  }
  /** Disposes of the router. */
  dispose() {
    this._events.unsubscribe();
    this.navigationTransitions.complete();
    if (this.nonRouterCurrentEntryChangeSubscription) {
      this.nonRouterCurrentEntryChangeSubscription.unsubscribe();
      this.nonRouterCurrentEntryChangeSubscription = void 0;
    }
    this.disposed = true;
    this.eventsSubscription.unsubscribe();
  }
  /**
   * Appends URL segments to the current URL tree to create a new URL tree.
   *
   * @param commands An array of URL fragments with which to construct the new URL tree.
   * If the path is static, can be the literal URL string. For a dynamic path, pass an array of path
   * segments, followed by the parameters for each segment.
   * The fragments are applied to the current URL tree or the one provided  in the `relativeTo`
   * property of the options object, if supplied.
   * @param navigationExtras Options that control the navigation strategy.
   * @returns The new URL tree.
   *
   * @usageNotes
   *
   * ```
   * // create /team/33/user/11
   * router.createUrlTree(['/team', 33, 'user', 11]);
   *
   * // create /team/33;expand=true/user/11
   * router.createUrlTree(['/team', 33, {expand: true}, 'user', 11]);
   *
   * // you can collapse static segments like this (this works only with the first passed-in value):
   * router.createUrlTree(['/team/33/user', userId]);
   *
   * // If the first segment can contain slashes, and you do not want the router to split it,
   * // you can do the following:
   * router.createUrlTree([{segmentPath: '/one/two'}]);
   *
   * // create /team/33/(user/11//right:chat)
   * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: 'chat'}}]);
   *
   * // remove the right secondary node
   * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: null}}]);
   *
   * // assuming the current url is `/team/33/user/11` and the route points to `user/11`
   *
   * // navigate to /team/33/user/11/details
   * router.createUrlTree(['details'], {relativeTo: route});
   *
   * // navigate to /team/33/user/22
   * router.createUrlTree(['../22'], {relativeTo: route});
   *
   * // navigate to /team/44/user/22
   * router.createUrlTree(['../../team/44/user/22'], {relativeTo: route});
   *
   * Note that a value of `null` or `undefined` for `relativeTo` indicates that the
   * tree should be created relative to the root.
   * ```
   */
  createUrlTree(commands, navigationExtras = {}) {
    const {
      relativeTo,
      queryParams,
      fragment,
      queryParamsHandling,
      preserveFragment
    } = navigationExtras;
    const f11 = preserveFragment ? this.currentUrlTree.fragment : fragment;
    let q = null;
    switch (queryParamsHandling ?? this.options.defaultQueryParamsHandling) {
      case "merge":
        q = __spreadValues(__spreadValues({}, this.currentUrlTree.queryParams), queryParams);
        break;
      case "preserve":
        q = this.currentUrlTree.queryParams;
        break;
      default:
        q = queryParams || null;
    }
    if (q !== null) {
      q = this.removeEmptyProps(q);
    }
    let relativeToUrlSegmentGroup;
    try {
      const relativeToSnapshot = relativeTo ? relativeTo.snapshot : this.routerState.snapshot.root;
      relativeToUrlSegmentGroup = createSegmentGroupFromRoute(relativeToSnapshot);
    } catch (e59) {
      if (typeof commands[0] !== "string" || commands[0][0] !== "/") {
        commands = [];
      }
      relativeToUrlSegmentGroup = this.currentUrlTree.root;
    }
    return createUrlTreeFromSegmentGroup(relativeToUrlSegmentGroup, commands, q, f11 ?? null);
  }
  /**
   * Navigates to a view using an absolute route path.
   *
   * @param url An absolute path for a defined route. The function does not apply any delta to the
   *     current URL.
   * @param extras An object containing properties that modify the navigation strategy.
   *
   * @returns A Promise that resolves to 'true' when navigation succeeds,
   * to 'false' when navigation fails, or is rejected on error.
   *
   * @usageNotes
   *
   * The following calls request navigation to an absolute path.
   *
   * ```ts
   * router.navigateByUrl("/team/33/user/11");
   *
   * // Navigate without updating the URL
   * router.navigateByUrl("/team/33/user/11", { skipLocationChange: true });
   * ```
   *
   * @see [Routing and Navigation guide](guide/routing/common-router-tasks)
   *
   */
  navigateByUrl(url, extras = {
    skipLocationChange: false
  }) {
    const urlTree = isUrlTree(url) ? url : this.parseUrl(url);
    const mergedTree = this.urlHandlingStrategy.merge(urlTree, this.rawUrlTree);
    return this.scheduleNavigation(mergedTree, IMPERATIVE_NAVIGATION, null, extras);
  }
  /**
   * Navigate based on the provided array of commands and a starting point.
   * If no starting route is provided, the navigation is absolute.
   *
   * @param commands An array of URL fragments with which to construct the target URL.
   * If the path is static, can be the literal URL string. For a dynamic path, pass an array of path
   * segments, followed by the parameters for each segment.
   * The fragments are applied to the current URL or the one provided  in the `relativeTo` property
   * of the options object, if supplied.
   * @param extras An options object that determines how the URL should be constructed or
   *     interpreted.
   *
   * @returns A Promise that resolves to `true` when navigation succeeds, or `false` when navigation
   *     fails. The Promise is rejected when an error occurs if `resolveNavigationPromiseOnError` is
   * not `true`.
   *
   * @usageNotes
   *
   * The following calls request navigation to a dynamic route path relative to the current URL.
   *
   * ```ts
   * router.navigate(['team', 33, 'user', 11], {relativeTo: route});
   *
   * // Navigate without updating the URL, overriding the default behavior
   * router.navigate(['team', 33, 'user', 11], {relativeTo: route, skipLocationChange: true});
   * ```
   *
   * @see [Routing and Navigation guide](guide/routing/common-router-tasks)
   *
   */
  navigate(commands, extras = {
    skipLocationChange: false
  }) {
    validateCommands(commands);
    return this.navigateByUrl(this.createUrlTree(commands, extras), extras);
  }
  /** Serializes a `UrlTree` into a string */
  serializeUrl(url) {
    return this.urlSerializer.serialize(url);
  }
  /** Parses a string into a `UrlTree` */
  parseUrl(url) {
    try {
      return this.urlSerializer.parse(url);
    } catch (e59) {
      this.console.warn(formatRuntimeError(4018, ngDevMode && `Error parsing URL ${url}. Falling back to '/' instead. 
` + e59));
      return this.urlSerializer.parse("/");
    }
  }
  isActive(url, matchOptions) {
    let options;
    if (matchOptions === true) {
      options = __spreadValues({}, exactMatchOptions);
    } else if (matchOptions === false) {
      options = __spreadValues({}, subsetMatchOptions);
    } else {
      options = matchOptions;
    }
    if (isUrlTree(url)) {
      return containsTree(this.currentUrlTree, url, options);
    }
    const urlTree = this.parseUrl(url);
    return containsTree(this.currentUrlTree, urlTree, options);
  }
  removeEmptyProps(params) {
    return Object.entries(params).reduce((result, [key, value]) => {
      if (value !== null && value !== void 0) {
        result[key] = value;
      }
      return result;
    }, {});
  }
  scheduleNavigation(rawUrl, source, restoredState, extras, priorPromise) {
    if (this.disposed) {
      return Promise.resolve(false);
    }
    let resolve;
    let reject;
    let promise;
    if (priorPromise) {
      resolve = priorPromise.resolve;
      reject = priorPromise.reject;
      promise = priorPromise.promise;
    } else {
      promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
      });
    }
    const taskId = this.pendingTasks.add();
    afterNextNavigation(this, () => {
      queueMicrotask(() => this.pendingTasks.remove(taskId));
    });
    this.navigationTransitions.handleNavigationRequest({
      source,
      restoredState,
      currentUrlTree: this.currentUrlTree,
      currentRawUrl: this.currentUrlTree,
      rawUrl,
      extras,
      resolve,
      reject,
      promise,
      currentSnapshot: this.routerState.snapshot,
      currentRouterState: this.routerState
    });
    return promise.catch((e59) => {
      return Promise.reject(e59);
    });
  }
  static \u0275fac = function Router_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Router)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _Router,
    factory: _Router.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Router, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function validateCommands(commands) {
  for (let i29 = 0; i29 < commands.length; i29++) {
    const cmd = commands[i29];
    if (cmd == null) {
      throw new RuntimeError(4008, (typeof ngDevMode === "undefined" || ngDevMode) && `The requested path contains ${cmd} segment at index ${i29}`);
    }
  }
}

// node_modules/@angular/router/fesm2022/router_module.mjs
var RouterLink = class _RouterLink {
  router;
  route;
  tabIndexAttribute;
  renderer;
  el;
  locationStrategy;
  /** @nodoc */
  reactiveHref = signal(null, ...ngDevMode ? [{
    debugName: "reactiveHref"
  }] : []);
  /**
   * Represents an `href` attribute value applied to a host element,
   * when a host element is an `<a>`/`<area>` tag or a compatible custom element.
   * For other tags, the value is `null`.
   */
  get href() {
    return untracked(this.reactiveHref);
  }
  /** @deprecated */
  set href(value) {
    this.reactiveHref.set(value);
  }
  /**
   * Represents the `target` attribute on a host element.
   * This is only used when the host element is
   * an `<a>`/`<area>` tag or a compatible custom element.
   */
  target;
  /**
   * Passed to {@link Router#createUrlTree} as part of the
   * `UrlCreationOptions`.
   * @see {@link UrlCreationOptions#queryParams}
   * @see {@link Router#createUrlTree}
   */
  queryParams;
  /**
   * Passed to {@link Router#createUrlTree} as part of the
   * `UrlCreationOptions`.
   * @see {@link UrlCreationOptions#fragment}
   * @see {@link Router#createUrlTree}
   */
  fragment;
  /**
   * Passed to {@link Router#createUrlTree} as part of the
   * `UrlCreationOptions`.
   * @see {@link UrlCreationOptions#queryParamsHandling}
   * @see {@link Router#createUrlTree}
   */
  queryParamsHandling;
  /**
   * Passed to {@link Router#navigateByUrl} as part of the
   * `NavigationBehaviorOptions`.
   * @see {@link NavigationBehaviorOptions#state}
   * @see {@link Router#navigateByUrl}
   */
  state;
  /**
   * Passed to {@link Router#navigateByUrl} as part of the
   * `NavigationBehaviorOptions`.
   * @see {@link NavigationBehaviorOptions#info}
   * @see {@link Router#navigateByUrl}
   */
  info;
  /**
   * Passed to {@link Router#createUrlTree} as part of the
   * `UrlCreationOptions`.
   * Specify a value here when you do not want to use the default value
   * for `routerLink`, which is the current activated route.
   * Note that a value of `undefined` here will use the `routerLink` default.
   * @see {@link UrlCreationOptions#relativeTo}
   * @see {@link Router#createUrlTree}
   */
  relativeTo;
  /** Whether a host element is an `<a>`/`<area>` tag or a compatible custom element. */
  isAnchorElement;
  subscription;
  /** @internal */
  onChanges = new Subject();
  applicationErrorHandler = inject(INTERNAL_APPLICATION_ERROR_HANDLER);
  options = inject(ROUTER_CONFIGURATION, {
    optional: true
  });
  constructor(router, route, tabIndexAttribute, renderer, el, locationStrategy) {
    this.router = router;
    this.route = route;
    this.tabIndexAttribute = tabIndexAttribute;
    this.renderer = renderer;
    this.el = el;
    this.locationStrategy = locationStrategy;
    this.reactiveHref.set(inject(new HostAttributeToken("href"), {
      optional: true
    }));
    const tagName = el.nativeElement.tagName?.toLowerCase();
    this.isAnchorElement = tagName === "a" || tagName === "area" || !!// Avoid breaking in an SSR context where customElements might not be defined.
    (typeof customElements === "object" && // observedAttributes is an optional static property/getter on a custom element.
    // The spec states that this must be an array of strings.
    customElements.get(tagName)?.observedAttributes?.includes?.("href"));
    if (!this.isAnchorElement) {
      this.subscribeToNavigationEventsIfNecessary();
    } else {
      this.setTabIndexIfNotOnNativeEl("0");
    }
  }
  subscribeToNavigationEventsIfNecessary() {
    if (this.subscription !== void 0 || !this.isAnchorElement) {
      return;
    }
    let createSubcription = this.preserveFragment;
    const dependsOnRouterState = (handling) => handling === "merge" || handling === "preserve";
    createSubcription ||= dependsOnRouterState(this.queryParamsHandling);
    createSubcription ||= !this.queryParamsHandling && !dependsOnRouterState(this.options?.defaultQueryParamsHandling);
    if (!createSubcription) {
      return;
    }
    this.subscription = this.router.events.subscribe((s12) => {
      if (s12 instanceof NavigationEnd) {
        this.updateHref();
      }
    });
  }
  /**
   * Passed to {@link Router#createUrlTree} as part of the
   * `UrlCreationOptions`.
   * @see {@link UrlCreationOptions#preserveFragment}
   * @see {@link Router#createUrlTree}
   */
  preserveFragment = false;
  /**
   * Passed to {@link Router#navigateByUrl} as part of the
   * `NavigationBehaviorOptions`.
   * @see {@link NavigationBehaviorOptions#skipLocationChange}
   * @see {@link Router#navigateByUrl}
   */
  skipLocationChange = false;
  /**
   * Passed to {@link Router#navigateByUrl} as part of the
   * `NavigationBehaviorOptions`.
   * @see {@link NavigationBehaviorOptions#replaceUrl}
   * @see {@link Router#navigateByUrl}
   */
  replaceUrl = false;
  /**
   * Modifies the tab index if there was not a tabindex attribute on the element during
   * instantiation.
   */
  setTabIndexIfNotOnNativeEl(newTabIndex) {
    if (this.tabIndexAttribute != null || this.isAnchorElement) {
      return;
    }
    this.applyAttributeValue("tabindex", newTabIndex);
  }
  /** @docs-private */
  // TODO(atscott): Remove changes parameter in major version as a breaking change.
  ngOnChanges(changes) {
    if (ngDevMode && isUrlTree(this.routerLinkInput) && (this.fragment !== void 0 || this.queryParams || this.queryParamsHandling || this.preserveFragment || this.relativeTo)) {
      throw new RuntimeError(4017, "Cannot configure queryParams or fragment when using a UrlTree as the routerLink input value.");
    }
    if (this.isAnchorElement) {
      this.updateHref();
      this.subscribeToNavigationEventsIfNecessary();
    }
    this.onChanges.next(this);
  }
  routerLinkInput = null;
  /**
   * Commands to pass to {@link Router#createUrlTree} or a `UrlTree`.
   *   - **array**: commands to pass to {@link Router#createUrlTree}.
   *   - **string**: shorthand for array of commands with just the string, i.e. `['/route']`
   *   - **UrlTree**: a `UrlTree` for this link rather than creating one from the commands
   *     and other inputs that correspond to properties of `UrlCreationOptions`.
   *   - **null|undefined**: effectively disables the `routerLink`
   * @see {@link Router#createUrlTree}
   */
  set routerLink(commandsOrUrlTree) {
    if (commandsOrUrlTree == null) {
      this.routerLinkInput = null;
      this.setTabIndexIfNotOnNativeEl(null);
    } else {
      if (isUrlTree(commandsOrUrlTree)) {
        this.routerLinkInput = commandsOrUrlTree;
      } else {
        this.routerLinkInput = Array.isArray(commandsOrUrlTree) ? commandsOrUrlTree : [commandsOrUrlTree];
      }
      this.setTabIndexIfNotOnNativeEl("0");
    }
  }
  /** @docs-private */
  onClick(button, ctrlKey, shiftKey, altKey, metaKey) {
    const urlTree = this.urlTree;
    if (urlTree === null) {
      return true;
    }
    if (this.isAnchorElement) {
      if (button !== 0 || ctrlKey || shiftKey || altKey || metaKey) {
        return true;
      }
      if (typeof this.target === "string" && this.target != "_self") {
        return true;
      }
    }
    const extras = {
      skipLocationChange: this.skipLocationChange,
      replaceUrl: this.replaceUrl,
      state: this.state,
      info: this.info
    };
    this.router.navigateByUrl(urlTree, extras)?.catch((e59) => {
      this.applicationErrorHandler(e59);
    });
    return !this.isAnchorElement;
  }
  /** @docs-private */
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  updateHref() {
    const urlTree = this.urlTree;
    this.reactiveHref.set(urlTree !== null && this.locationStrategy ? this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(urlTree)) ?? "" : null);
  }
  applyAttributeValue(attrName, attrValue) {
    const renderer = this.renderer;
    const nativeElement = this.el.nativeElement;
    if (attrValue !== null) {
      renderer.setAttribute(nativeElement, attrName, attrValue);
    } else {
      renderer.removeAttribute(nativeElement, attrName);
    }
  }
  get urlTree() {
    if (this.routerLinkInput === null) {
      return null;
    } else if (isUrlTree(this.routerLinkInput)) {
      return this.routerLinkInput;
    }
    return this.router.createUrlTree(this.routerLinkInput, {
      // If the `relativeTo` input is not defined, we want to use `this.route` by default.
      // Otherwise, we should use the value provided by the user in the input.
      relativeTo: this.relativeTo !== void 0 ? this.relativeTo : this.route,
      queryParams: this.queryParams,
      fragment: this.fragment,
      queryParamsHandling: this.queryParamsHandling,
      preserveFragment: this.preserveFragment
    });
  }
  static \u0275fac = function RouterLink_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouterLink)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275injectAttribute("tabindex"), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(LocationStrategy));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RouterLink,
    selectors: [["", "routerLink", ""]],
    hostVars: 2,
    hostBindings: function RouterLink_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function RouterLink_click_HostBindingHandler($event) {
          return ctx.onClick($event.button, $event.ctrlKey, $event.shiftKey, $event.altKey, $event.metaKey);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("href", ctx.reactiveHref(), \u0275\u0275sanitizeUrlOrResourceUrl)("target", ctx.target);
      }
    },
    inputs: {
      target: "target",
      queryParams: "queryParams",
      fragment: "fragment",
      queryParamsHandling: "queryParamsHandling",
      state: "state",
      info: "info",
      relativeTo: "relativeTo",
      preserveFragment: [2, "preserveFragment", "preserveFragment", booleanAttribute],
      skipLocationChange: [2, "skipLocationChange", "skipLocationChange", booleanAttribute],
      replaceUrl: [2, "replaceUrl", "replaceUrl", booleanAttribute],
      routerLink: "routerLink"
    },
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterLink, [{
    type: Directive,
    args: [{
      selector: "[routerLink]",
      host: {
        "[attr.href]": "reactiveHref()"
      }
    }]
  }], () => [{
    type: Router
  }, {
    type: ActivatedRoute
  }, {
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["tabindex"]
    }]
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: LocationStrategy
  }], {
    target: [{
      type: HostBinding,
      args: ["attr.target"]
    }, {
      type: Input
    }],
    queryParams: [{
      type: Input
    }],
    fragment: [{
      type: Input
    }],
    queryParamsHandling: [{
      type: Input
    }],
    state: [{
      type: Input
    }],
    info: [{
      type: Input
    }],
    relativeTo: [{
      type: Input
    }],
    preserveFragment: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    skipLocationChange: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    replaceUrl: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    routerLink: [{
      type: Input
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event.button", "$event.ctrlKey", "$event.shiftKey", "$event.altKey", "$event.metaKey"]]
    }]
  });
})();
var RouterLinkActive = class _RouterLinkActive {
  router;
  element;
  renderer;
  cdr;
  link;
  links;
  classes = [];
  routerEventsSubscription;
  linkInputChangesSubscription;
  _isActive = false;
  get isActive() {
    return this._isActive;
  }
  /**
   * Options to configure how to determine if the router link is active.
   *
   * These options are passed to the `Router.isActive()` function.
   *
   * @see {@link Router#isActive}
   */
  routerLinkActiveOptions = {
    exact: false
  };
  /**
   * Aria-current attribute to apply when the router link is active.
   *
   * Possible values: `'page'` | `'step'` | `'location'` | `'date'` | `'time'` | `true` | `false`.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current}
   */
  ariaCurrentWhenActive;
  /**
   *
   * You can use the output `isActiveChange` to get notified each time the link becomes
   * active or inactive.
   *
   * Emits:
   * true  -> Route is active
   * false -> Route is inactive
   *
   * ```html
   * <a
   *  routerLink="/user/bob"
   *  routerLinkActive="active-link"
   *  (isActiveChange)="this.onRouterLinkActive($event)">Bob</a>
   * ```
   */
  isActiveChange = new EventEmitter();
  constructor(router, element, renderer, cdr, link) {
    this.router = router;
    this.element = element;
    this.renderer = renderer;
    this.cdr = cdr;
    this.link = link;
    this.routerEventsSubscription = router.events.subscribe((s12) => {
      if (s12 instanceof NavigationEnd) {
        this.update();
      }
    });
  }
  /** @docs-private */
  ngAfterContentInit() {
    of(this.links.changes, of(null)).pipe(mergeAll()).subscribe((_) => {
      this.update();
      this.subscribeToEachLinkOnChanges();
    });
  }
  subscribeToEachLinkOnChanges() {
    this.linkInputChangesSubscription?.unsubscribe();
    const allLinkChanges = [...this.links.toArray(), this.link].filter((link) => !!link).map((link) => link.onChanges);
    this.linkInputChangesSubscription = from(allLinkChanges).pipe(mergeAll()).subscribe((link) => {
      if (this._isActive !== this.isLinkActive(this.router)(link)) {
        this.update();
      }
    });
  }
  set routerLinkActive(data) {
    const classes3 = Array.isArray(data) ? data : data.split(" ");
    this.classes = classes3.filter((c27) => !!c27);
  }
  /** @docs-private */
  ngOnChanges(changes) {
    this.update();
  }
  /** @docs-private */
  ngOnDestroy() {
    this.routerEventsSubscription.unsubscribe();
    this.linkInputChangesSubscription?.unsubscribe();
  }
  update() {
    if (!this.links || !this.router.navigated) return;
    queueMicrotask(() => {
      const hasActiveLinks = this.hasActiveLinks();
      this.classes.forEach((c27) => {
        if (hasActiveLinks) {
          this.renderer.addClass(this.element.nativeElement, c27);
        } else {
          this.renderer.removeClass(this.element.nativeElement, c27);
        }
      });
      if (hasActiveLinks && this.ariaCurrentWhenActive !== void 0) {
        this.renderer.setAttribute(this.element.nativeElement, "aria-current", this.ariaCurrentWhenActive.toString());
      } else {
        this.renderer.removeAttribute(this.element.nativeElement, "aria-current");
      }
      if (this._isActive !== hasActiveLinks) {
        this._isActive = hasActiveLinks;
        this.cdr.markForCheck();
        this.isActiveChange.emit(hasActiveLinks);
      }
    });
  }
  isLinkActive(router) {
    const options = isActiveMatchOptions(this.routerLinkActiveOptions) ? this.routerLinkActiveOptions : (
      // While the types should disallow `undefined` here, it's possible without strict inputs
      this.routerLinkActiveOptions.exact || false
    );
    return (link) => {
      const urlTree = link.urlTree;
      return urlTree ? router.isActive(urlTree, options) : false;
    };
  }
  hasActiveLinks() {
    const isActiveCheckFn = this.isLinkActive(this.router);
    return this.link && isActiveCheckFn(this.link) || this.links.some(isActiveCheckFn);
  }
  static \u0275fac = function RouterLinkActive_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouterLinkActive)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(RouterLink, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RouterLinkActive,
    selectors: [["", "routerLinkActive", ""]],
    contentQueries: function RouterLinkActive_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, RouterLink, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.links = _t);
      }
    },
    inputs: {
      routerLinkActiveOptions: "routerLinkActiveOptions",
      ariaCurrentWhenActive: "ariaCurrentWhenActive",
      routerLinkActive: "routerLinkActive"
    },
    outputs: {
      isActiveChange: "isActiveChange"
    },
    exportAs: ["routerLinkActive"],
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterLinkActive, [{
    type: Directive,
    args: [{
      selector: "[routerLinkActive]",
      exportAs: "routerLinkActive"
    }]
  }], () => [{
    type: Router
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: RouterLink,
    decorators: [{
      type: Optional
    }]
  }], {
    links: [{
      type: ContentChildren,
      args: [RouterLink, {
        descendants: true
      }]
    }],
    routerLinkActiveOptions: [{
      type: Input
    }],
    ariaCurrentWhenActive: [{
      type: Input
    }],
    isActiveChange: [{
      type: Output
    }],
    routerLinkActive: [{
      type: Input
    }]
  });
})();
function isActiveMatchOptions(options) {
  return !!options.paths;
}
var PreloadingStrategy = class {
};
var PreloadAllModules = class _PreloadAllModules {
  preload(route, fn) {
    return fn().pipe(catchError(() => of(null)));
  }
  static \u0275fac = function PreloadAllModules_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PreloadAllModules)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _PreloadAllModules,
    factory: _PreloadAllModules.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreloadAllModules, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NoPreloading = class _NoPreloading {
  preload(route, fn) {
    return of(null);
  }
  static \u0275fac = function NoPreloading_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoPreloading)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NoPreloading,
    factory: _NoPreloading.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoPreloading, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var RouterPreloader = class _RouterPreloader {
  router;
  injector;
  preloadingStrategy;
  loader;
  subscription;
  constructor(router, injector, preloadingStrategy, loader) {
    this.router = router;
    this.injector = injector;
    this.preloadingStrategy = preloadingStrategy;
    this.loader = loader;
  }
  setUpPreloading() {
    this.subscription = this.router.events.pipe(filter((e59) => e59 instanceof NavigationEnd), concatMap(() => this.preload())).subscribe(() => {
    });
  }
  preload() {
    return this.processRoutes(this.injector, this.router.config);
  }
  /** @docs-private */
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  processRoutes(injector, routes2) {
    const res = [];
    for (const route of routes2) {
      if (route.providers && !route._injector) {
        route._injector = createEnvironmentInjector(route.providers, injector, `Route: ${route.path}`);
      }
      const injectorForCurrentRoute = route._injector ?? injector;
      const injectorForChildren = route._loadedInjector ?? injectorForCurrentRoute;
      if (route.loadChildren && !route._loadedRoutes && route.canLoad === void 0 || route.loadComponent && !route._loadedComponent) {
        res.push(this.preloadConfig(injectorForCurrentRoute, route));
      }
      if (route.children || route._loadedRoutes) {
        res.push(this.processRoutes(injectorForChildren, route.children ?? route._loadedRoutes));
      }
    }
    return from(res).pipe(mergeAll());
  }
  preloadConfig(injector, route) {
    return this.preloadingStrategy.preload(route, () => {
      let loadedChildren$;
      if (route.loadChildren && route.canLoad === void 0) {
        loadedChildren$ = this.loader.loadChildren(injector, route);
      } else {
        loadedChildren$ = of(null);
      }
      const recursiveLoadChildren$ = loadedChildren$.pipe(mergeMap((config) => {
        if (config === null) {
          return of(void 0);
        }
        route._loadedRoutes = config.routes;
        route._loadedInjector = config.injector;
        return this.processRoutes(config.injector ?? injector, config.routes);
      }));
      if (route.loadComponent && !route._loadedComponent) {
        const loadComponent$ = this.loader.loadComponent(injector, route);
        return from([recursiveLoadChildren$, loadComponent$]).pipe(mergeAll());
      } else {
        return recursiveLoadChildren$;
      }
    });
  }
  static \u0275fac = function RouterPreloader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouterPreloader)(\u0275\u0275inject(Router), \u0275\u0275inject(EnvironmentInjector), \u0275\u0275inject(PreloadingStrategy), \u0275\u0275inject(RouterConfigLoader));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RouterPreloader,
    factory: _RouterPreloader.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterPreloader, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Router
  }, {
    type: EnvironmentInjector
  }, {
    type: PreloadingStrategy
  }, {
    type: RouterConfigLoader
  }], null);
})();
var ROUTER_SCROLLER = new InjectionToken("");
var RouterScroller = class _RouterScroller {
  urlSerializer;
  transitions;
  viewportScroller;
  zone;
  options;
  routerEventsSubscription;
  scrollEventsSubscription;
  lastId = 0;
  lastSource = IMPERATIVE_NAVIGATION;
  restoredId = 0;
  store = {};
  /** @docs-private */
  constructor(urlSerializer, transitions, viewportScroller, zone, options = {}) {
    this.urlSerializer = urlSerializer;
    this.transitions = transitions;
    this.viewportScroller = viewportScroller;
    this.zone = zone;
    this.options = options;
    options.scrollPositionRestoration ||= "disabled";
    options.anchorScrolling ||= "disabled";
  }
  init() {
    if (this.options.scrollPositionRestoration !== "disabled") {
      this.viewportScroller.setHistoryScrollRestoration("manual");
    }
    this.routerEventsSubscription = this.createScrollEvents();
    this.scrollEventsSubscription = this.consumeScrollEvents();
  }
  createScrollEvents() {
    return this.transitions.events.subscribe((e59) => {
      if (e59 instanceof NavigationStart) {
        this.store[this.lastId] = this.viewportScroller.getScrollPosition();
        this.lastSource = e59.navigationTrigger;
        this.restoredId = e59.restoredState ? e59.restoredState.navigationId : 0;
      } else if (e59 instanceof NavigationEnd) {
        this.lastId = e59.id;
        this.scheduleScrollEvent(e59, this.urlSerializer.parse(e59.urlAfterRedirects).fragment);
      } else if (e59 instanceof NavigationSkipped && e59.code === NavigationSkippedCode.IgnoredSameUrlNavigation) {
        this.lastSource = void 0;
        this.restoredId = 0;
        this.scheduleScrollEvent(e59, this.urlSerializer.parse(e59.url).fragment);
      }
    });
  }
  consumeScrollEvents() {
    return this.transitions.events.subscribe((e59) => {
      if (!(e59 instanceof Scroll)) return;
      const instantScroll = {
        behavior: "instant"
      };
      if (e59.position) {
        if (this.options.scrollPositionRestoration === "top") {
          this.viewportScroller.scrollToPosition([0, 0], instantScroll);
        } else if (this.options.scrollPositionRestoration === "enabled") {
          this.viewportScroller.scrollToPosition(e59.position, instantScroll);
        }
      } else {
        if (e59.anchor && this.options.anchorScrolling === "enabled") {
          this.viewportScroller.scrollToAnchor(e59.anchor);
        } else if (this.options.scrollPositionRestoration !== "disabled") {
          this.viewportScroller.scrollToPosition([0, 0]);
        }
      }
    });
  }
  scheduleScrollEvent(routerEvent, anchor) {
    this.zone.runOutsideAngular(() => __async(this, null, function* () {
      yield new Promise((resolve) => {
        setTimeout(resolve);
        if (typeof requestAnimationFrame !== "undefined") {
          requestAnimationFrame(resolve);
        }
      });
      this.zone.run(() => {
        this.transitions.events.next(new Scroll(routerEvent, this.lastSource === "popstate" ? this.store[this.restoredId] : null, anchor));
      });
    }));
  }
  /** @docs-private */
  ngOnDestroy() {
    this.routerEventsSubscription?.unsubscribe();
    this.scrollEventsSubscription?.unsubscribe();
  }
  static \u0275fac = function RouterScroller_Factory(__ngFactoryType__) {
    \u0275\u0275invalidFactory();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RouterScroller,
    factory: _RouterScroller.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterScroller, [{
    type: Injectable
  }], () => [{
    type: UrlSerializer
  }, {
    type: NavigationTransitions
  }, {
    type: ViewportScroller
  }, {
    type: NgZone
  }, {
    type: void 0
  }], null);
})();
function getLoadedRoutes(route) {
  return route._loadedRoutes;
}
function getRouterInstance(injector) {
  return injector.get(Router, null, {
    optional: true
  });
}
function navigateByUrl(router, url) {
  if (!(router instanceof Router)) {
    throw new Error("The provided router is not an Angular Router.");
  }
  return router.navigateByUrl(url);
}
function provideRouter(routes2, ...features) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    publishExternalGlobalUtil("\u0275getLoadedRoutes", getLoadedRoutes);
    publishExternalGlobalUtil("\u0275getRouterInstance", getRouterInstance);
    publishExternalGlobalUtil("\u0275navigateByUrl", navigateByUrl);
  }
  return makeEnvironmentProviders([{
    provide: ROUTES,
    multi: true,
    useValue: routes2
  }, typeof ngDevMode === "undefined" || ngDevMode ? {
    provide: ROUTER_IS_PROVIDED,
    useValue: true
  } : [], {
    provide: ActivatedRoute,
    useFactory: rootRoute,
    deps: [Router]
  }, {
    provide: APP_BOOTSTRAP_LISTENER,
    multi: true,
    useFactory: getBootstrapListener
  }, features.map((feature) => feature.\u0275providers)]);
}
function rootRoute(router) {
  return router.routerState.root;
}
function routerFeature(kind, providers) {
  return {
    \u0275kind: kind,
    \u0275providers: providers
  };
}
var ROUTER_IS_PROVIDED = new InjectionToken("", {
  providedIn: "root",
  factory: () => false
});
function getBootstrapListener() {
  const injector = inject(Injector);
  return (bootstrappedComponentRef) => {
    const ref = injector.get(ApplicationRef);
    if (bootstrappedComponentRef !== ref.components[0]) {
      return;
    }
    const router = injector.get(Router);
    const bootstrapDone = injector.get(BOOTSTRAP_DONE);
    if (injector.get(INITIAL_NAVIGATION) === 1) {
      router.initialNavigation();
    }
    injector.get(ROUTER_PRELOADER, null, {
      optional: true
    })?.setUpPreloading();
    injector.get(ROUTER_SCROLLER, null, {
      optional: true
    })?.init();
    router.resetRootComponentType(ref.componentTypes[0]);
    if (!bootstrapDone.closed) {
      bootstrapDone.next();
      bootstrapDone.complete();
      bootstrapDone.unsubscribe();
    }
  };
}
var BOOTSTRAP_DONE = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "bootstrap done indicator" : "", {
  factory: () => {
    return new Subject();
  }
});
var INITIAL_NAVIGATION = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "initial navigation" : "", {
  providedIn: "root",
  factory: () => 1
  /* InitialNavigation.EnabledNonBlocking */
});
function withEnabledBlockingInitialNavigation() {
  const providers = [{
    provide: IS_ENABLED_BLOCKING_INITIAL_NAVIGATION,
    useValue: true
  }, {
    provide: INITIAL_NAVIGATION,
    useValue: 0
    /* InitialNavigation.EnabledBlocking */
  }, provideAppInitializer(() => {
    const injector = inject(Injector);
    const locationInitialized = injector.get(LOCATION_INITIALIZED, Promise.resolve());
    return locationInitialized.then(() => {
      return new Promise((resolve) => {
        const router = injector.get(Router);
        const bootstrapDone = injector.get(BOOTSTRAP_DONE);
        afterNextNavigation(router, () => {
          resolve(true);
        });
        injector.get(NavigationTransitions).afterPreactivation = () => {
          resolve(true);
          return bootstrapDone.closed ? of(void 0) : bootstrapDone;
        };
        router.initialNavigation();
      });
    });
  })];
  return routerFeature(2, providers);
}
function withDisabledInitialNavigation() {
  const providers = [provideAppInitializer(() => {
    inject(Router).setUpLocationChangeListener();
  }), {
    provide: INITIAL_NAVIGATION,
    useValue: 2
    /* InitialNavigation.Disabled */
  }];
  return routerFeature(3, providers);
}
function withDebugTracing() {
  let providers = [];
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    providers = [{
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useFactory: () => {
        const router = inject(Router);
        return () => router.events.subscribe((e59) => {
          console.group?.(`Router Event: ${e59.constructor.name}`);
          console.log(stringifyEvent(e59));
          console.log(e59);
          console.groupEnd?.();
        });
      }
    }];
  } else {
    providers = [];
  }
  return routerFeature(1, providers);
}
var ROUTER_PRELOADER = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "router preloader" : "");
function withPreloading(preloadingStrategy) {
  const providers = [{
    provide: ROUTER_PRELOADER,
    useExisting: RouterPreloader
  }, {
    provide: PreloadingStrategy,
    useExisting: preloadingStrategy
  }];
  return routerFeature(0, providers);
}
function withComponentInputBinding() {
  const providers = [RoutedComponentInputBinder, {
    provide: INPUT_BINDER,
    useExisting: RoutedComponentInputBinder
  }];
  return routerFeature(8, providers);
}
function withViewTransitions(options) {
  performanceMarkFeature("NgRouterViewTransitions");
  const providers = [{
    provide: CREATE_VIEW_TRANSITION,
    useValue: createViewTransition
  }, {
    provide: VIEW_TRANSITION_OPTIONS,
    useValue: __spreadValues({
      skipNextTransition: !!options?.skipInitialTransition
    }, options)
  }];
  return routerFeature(9, providers);
}
var ROUTER_DIRECTIVES = [RouterOutlet, RouterLink, RouterLinkActive, \u0275EmptyOutletComponent];
var ROUTER_FORROOT_GUARD = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "router duplicate forRoot guard" : "");
var ROUTER_PROVIDERS = [
  Location,
  {
    provide: UrlSerializer,
    useClass: DefaultUrlSerializer
  },
  Router,
  ChildrenOutletContexts,
  {
    provide: ActivatedRoute,
    useFactory: rootRoute,
    deps: [Router]
  },
  RouterConfigLoader,
  // Only used to warn when `provideRoutes` is used without `RouterModule` or `provideRouter`. Can
  // be removed when `provideRoutes` is removed.
  typeof ngDevMode === "undefined" || ngDevMode ? {
    provide: ROUTER_IS_PROVIDED,
    useValue: true
  } : []
];
var RouterModule = class _RouterModule {
  constructor() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      inject(ROUTER_FORROOT_GUARD, {
        optional: true
      });
    }
  }
  /**
   * Creates and configures a module with all the router providers and directives.
   * Optionally sets up an application listener to perform an initial navigation.
   *
   * When registering the NgModule at the root, import as follows:
   *
   * ```ts
   * @NgModule({
   *   imports: [RouterModule.forRoot(ROUTES)]
   * })
   * class MyNgModule {}
   * ```
   *
   * @param routes An array of `Route` objects that define the navigation paths for the application.
   * @param config An `ExtraOptions` configuration object that controls how navigation is performed.
   * @return The new `NgModule`.
   *
   */
  static forRoot(routes2, config) {
    return {
      ngModule: _RouterModule,
      providers: [ROUTER_PROVIDERS, typeof ngDevMode === "undefined" || ngDevMode ? config?.enableTracing ? withDebugTracing().\u0275providers : [] : [], {
        provide: ROUTES,
        multi: true,
        useValue: routes2
      }, typeof ngDevMode === "undefined" || ngDevMode ? {
        provide: ROUTER_FORROOT_GUARD,
        useFactory: provideForRootGuard,
        deps: [[Router, new Optional(), new SkipSelf()]]
      } : [], config?.errorHandler ? {
        provide: NAVIGATION_ERROR_HANDLER,
        useValue: config.errorHandler
      } : [], {
        provide: ROUTER_CONFIGURATION,
        useValue: config ? config : {}
      }, config?.useHash ? provideHashLocationStrategy() : providePathLocationStrategy(), provideRouterScroller(), config?.preloadingStrategy ? withPreloading(config.preloadingStrategy).\u0275providers : [], config?.initialNavigation ? provideInitialNavigation(config) : [], config?.bindToComponentInputs ? withComponentInputBinding().\u0275providers : [], config?.enableViewTransitions ? withViewTransitions().\u0275providers : [], provideRouterInitializer()]
    };
  }
  /**
   * Creates a module with all the router directives and a provider registering routes,
   * without creating a new Router service.
   * When registering for submodules and lazy-loaded submodules, create the NgModule as follows:
   *
   * ```ts
   * @NgModule({
   *   imports: [RouterModule.forChild(ROUTES)]
   * })
   * class MyNgModule {}
   * ```
   *
   * @param routes An array of `Route` objects that define the navigation paths for the submodule.
   * @return The new NgModule.
   *
   */
  static forChild(routes2) {
    return {
      ngModule: _RouterModule,
      providers: [{
        provide: ROUTES,
        multi: true,
        useValue: routes2
      }]
    };
  }
  static \u0275fac = function RouterModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouterModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _RouterModule,
    imports: [RouterOutlet, RouterLink, RouterLinkActive, \u0275EmptyOutletComponent],
    exports: [RouterOutlet, RouterLink, RouterLinkActive, \u0275EmptyOutletComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterModule, [{
    type: NgModule,
    args: [{
      imports: ROUTER_DIRECTIVES,
      exports: ROUTER_DIRECTIVES
    }]
  }], () => [], null);
})();
function provideRouterScroller() {
  return {
    provide: ROUTER_SCROLLER,
    useFactory: () => {
      const viewportScroller = inject(ViewportScroller);
      const zone = inject(NgZone);
      const config = inject(ROUTER_CONFIGURATION);
      const transitions = inject(NavigationTransitions);
      const urlSerializer = inject(UrlSerializer);
      if (config.scrollOffset) {
        viewportScroller.setOffset(config.scrollOffset);
      }
      return new RouterScroller(urlSerializer, transitions, viewportScroller, zone, config);
    }
  };
}
function provideHashLocationStrategy() {
  return {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  };
}
function providePathLocationStrategy() {
  return {
    provide: LocationStrategy,
    useClass: PathLocationStrategy
  };
}
function provideForRootGuard(router) {
  if (router) {
    throw new RuntimeError(4007, `The Router was provided more than once. This can happen if 'forRoot' is used outside of the root injector. Lazy loaded modules should use RouterModule.forChild() instead.`);
  }
  return "guarded";
}
function provideInitialNavigation(config) {
  return [config.initialNavigation === "disabled" ? withDisabledInitialNavigation().\u0275providers : [], config.initialNavigation === "enabledBlocking" ? withEnabledBlockingInitialNavigation().\u0275providers : []];
}
var ROUTER_INITIALIZER = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "Router Initializer" : "");
function provideRouterInitializer() {
  return [
    // ROUTER_INITIALIZER token should be removed. It's public API but shouldn't be. We can just
    // have `getBootstrapListener` directly attached to APP_BOOTSTRAP_LISTENER.
    {
      provide: ROUTER_INITIALIZER,
      useFactory: getBootstrapListener
    },
    {
      provide: APP_BOOTSTRAP_LISTENER,
      multi: true,
      useExisting: ROUTER_INITIALIZER
    }
  ];
}

// node_modules/@primeuix/styles/dist/scrollpanel/index.mjs
var style2 = "\n    .p-scrollpanel-content-container {\n        overflow: hidden;\n        width: 100%;\n        height: 100%;\n        position: relative;\n        z-index: 1;\n        float: left;\n    }\n\n    .p-scrollpanel-content {\n        height: calc(100% + calc(2 * dt('scrollpanel.bar.size')));\n        width: calc(100% + calc(2 * dt('scrollpanel.bar.size')));\n        padding-inline: 0 calc(2 * dt('scrollpanel.bar.size'));\n        padding-block: 0 calc(2 * dt('scrollpanel.bar.size'));\n        position: relative;\n        overflow: auto;\n        box-sizing: border-box;\n        scrollbar-width: none;\n    }\n\n    .p-scrollpanel-content::-webkit-scrollbar {\n        display: none;\n    }\n\n    .p-scrollpanel-bar {\n        position: relative;\n        border-radius: dt('scrollpanel.bar.border.radius');\n        z-index: 2;\n        cursor: pointer;\n        opacity: 0;\n        outline-color: transparent;\n        background: dt('scrollpanel.bar.background');\n        border: 0 none;\n        transition:\n            outline-color dt('scrollpanel.transition.duration'),\n            opacity dt('scrollpanel.transition.duration');\n    }\n\n    .p-scrollpanel-bar:focus-visible {\n        box-shadow: dt('scrollpanel.bar.focus.ring.shadow');\n        outline: dt('scrollpanel.barfocus.ring.width') dt('scrollpanel.bar.focus.ring.style') dt('scrollpanel.bar.focus.ring.color');\n        outline-offset: dt('scrollpanel.barfocus.ring.offset');\n    }\n\n    .p-scrollpanel-bar-y {\n        width: dt('scrollpanel.bar.size');\n        inset-block-start: 0;\n    }\n\n    .p-scrollpanel-bar-x {\n        height: dt('scrollpanel.bar.size');\n        inset-block-end: 0;\n    }\n\n    .p-scrollpanel-hidden {\n        visibility: hidden;\n    }\n\n    .p-scrollpanel:hover .p-scrollpanel-bar,\n    .p-scrollpanel:active .p-scrollpanel-bar {\n        opacity: 1;\n    }\n\n    .p-scrollpanel-grabbed {\n        user-select: none;\n    }\n";

// node_modules/primeng/fesm2022/primeng-scrollpanel.mjs
var _c0 = ["content"];
var _c1 = ["xBar"];
var _c2 = ["yBar"];
var _c3 = ["*"];
function ScrollPanel_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function ScrollPanel_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
var style3 = (
  /*css*/
  `
    ${style2}

    .p-scrollpanel {
        display: block;
    }
`
);
var classes = {
  root: "p-scrollpanel p-component",
  contentContainer: "p-scrollpanel-content-container",
  content: "p-scrollpanel-content",
  barX: "p-scrollpanel-bar p-scrollpanel-bar-x",
  barY: "p-scrollpanel-bar p-scrollpanel-bar-y"
};
var ScrollPanelStyle = class _ScrollPanelStyle extends BaseStyle {
  name = "scrollpanel";
  style = style3;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ScrollPanelStyle_BaseFactory;
    return function ScrollPanelStyle_Factory(__ngFactoryType__) {
      return (\u0275ScrollPanelStyle_BaseFactory || (\u0275ScrollPanelStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ScrollPanelStyle)))(__ngFactoryType__ || _ScrollPanelStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ScrollPanelStyle,
    factory: _ScrollPanelStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollPanelStyle, [{
    type: Injectable
  }], null, null);
})();
var ScrollPanelClasses;
(function(ScrollPanelClasses2) {
  ScrollPanelClasses2["root"] = "p-scrollpanel";
  ScrollPanelClasses2["contentContainer"] = "p-scrollpanel-content-container";
  ScrollPanelClasses2["content"] = "p-scrollpanel-content";
  ScrollPanelClasses2["barX"] = "p-scrollpanel-bar-x";
  ScrollPanelClasses2["barY"] = "p-scrollpanel-bar-y";
})(ScrollPanelClasses || (ScrollPanelClasses = {}));
var SCROLLPANEL_INSTANCE = new InjectionToken("SCROLLPANEL_INSTANCE");
var ScrollPanel = class _ScrollPanel extends BaseComponent {
  $pcScrollPanel = inject(SCROLLPANEL_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * Style class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Step factor to scroll the content while pressing the arrow keys.
   * @group Props
   */
  step = 5;
  contentViewChild;
  xBarViewChild;
  yBarViewChild;
  /**
   * Defines template option for content.
   * @group Templates
   */
  contentTemplate;
  templates;
  _contentTemplate;
  scrollYRatio;
  scrollXRatio;
  timeoutFrame = (fn) => setTimeout(fn, 0);
  initialized = false;
  lastPageY;
  lastPageX;
  isXBarClicked = false;
  isYBarClicked = false;
  lastScrollLeft = 0;
  lastScrollTop = 0;
  orientation = "vertical";
  timer;
  contentId;
  windowResizeListener;
  contentScrollListener;
  mouseEnterListener;
  xBarMouseDownListener;
  yBarMouseDownListener;
  documentMouseMoveListener;
  documentMouseUpListener;
  _componentStyle = inject(ScrollPanelStyle);
  zone = inject(NgZone);
  onInit() {
    this.contentId = s("pn_id_") + "_content";
  }
  onAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        this.moveBar();
        this.moveBar = this.moveBar.bind(this);
        this.onXBarMouseDown = this.onXBarMouseDown.bind(this);
        this.onYBarMouseDown = this.onYBarMouseDown.bind(this);
        this.onDocumentMouseMove = this.onDocumentMouseMove.bind(this);
        this.onDocumentMouseUp = this.onDocumentMouseUp.bind(this);
        this.windowResizeListener = this.renderer.listen(window, "resize", this.moveBar);
        this.contentScrollListener = this.renderer.listen(this.contentViewChild.nativeElement, "scroll", this.moveBar);
        this.mouseEnterListener = this.renderer.listen(this.contentViewChild.nativeElement, "mouseenter", this.moveBar);
        this.xBarMouseDownListener = this.renderer.listen(this.xBarViewChild.nativeElement, "mousedown", this.onXBarMouseDown);
        this.yBarMouseDownListener = this.renderer.listen(this.yBarViewChild.nativeElement, "mousedown", this.onYBarMouseDown);
        this.calculateContainerHeight();
        this.initialized = true;
      });
    }
  }
  onAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this._contentTemplate = item.template;
          break;
        default:
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  calculateContainerHeight() {
    let container = this.el.nativeElement;
    let content = this.contentViewChild.nativeElement;
    let xBar = this.xBarViewChild.nativeElement;
    const window2 = this.document.defaultView;
    let containerStyles = window2.getComputedStyle(container), xBarStyles = window2.getComputedStyle(xBar), pureContainerHeight = Tt(container) - parseInt(xBarStyles["height"], 10);
    if (containerStyles["max-height"] != "none" && pureContainerHeight == 0) {
      if (content.offsetHeight + parseInt(xBarStyles["height"], 10) > parseInt(containerStyles["max-height"], 10)) {
        container.style.height = containerStyles["max-height"];
      } else {
        container.style.height = content.offsetHeight + parseFloat(containerStyles.paddingTop) + parseFloat(containerStyles.paddingBottom) + parseFloat(containerStyles.borderTopWidth) + parseFloat(containerStyles.borderBottomWidth) + "px";
      }
    }
  }
  moveBar() {
    let container = this.el.nativeElement;
    let content = this.contentViewChild.nativeElement;
    let xBar = this.xBarViewChild.nativeElement;
    let totalWidth = content.scrollWidth;
    let ownWidth = content.clientWidth;
    let bottom = (container.clientHeight - xBar.clientHeight) * -1;
    this.scrollXRatio = ownWidth / totalWidth;
    let yBar = this.yBarViewChild.nativeElement;
    let totalHeight = content.scrollHeight;
    let ownHeight = content.clientHeight;
    let right = (container.clientWidth - yBar.clientWidth) * -1;
    this.scrollYRatio = ownHeight / totalHeight;
    this.requestAnimationFrame(() => {
      if (this.scrollXRatio >= 1) {
        xBar.setAttribute("data-p-scrollpanel-hidden", "true");
        W(xBar, "p-scrollpanel-hidden");
      } else {
        xBar.setAttribute("data-p-scrollpanel-hidden", "false");
        P(xBar, "p-scrollpanel-hidden");
        const xBarWidth = Math.max(this.scrollXRatio * 100, 10);
        const xBarLeft = Math.abs(content.scrollLeft * (100 - xBarWidth) / (totalWidth - ownWidth));
        xBar.style.cssText = "width:" + xBarWidth + "%; inset-inline-start:" + xBarLeft + "%;bottom:" + bottom + "px;";
      }
      if (this.scrollYRatio >= 1) {
        yBar.setAttribute("data-p-scrollpanel-hidden", "true");
        W(yBar, "p-scrollpanel-hidden");
      } else {
        yBar.setAttribute("data-p-scrollpanel-hidden", "false");
        P(yBar, "p-scrollpanel-hidden");
        const yBarHeight = Math.max(this.scrollYRatio * 100, 10);
        const yBarTop = content.scrollTop * (100 - yBarHeight) / (totalHeight - ownHeight);
        yBar.style.cssText = "height:" + yBarHeight + "%; top: calc(" + yBarTop + "% - " + xBar.clientHeight + "px); inset-inline-end:" + right + "px;";
      }
    });
    this.cd.markForCheck();
  }
  onScroll(event) {
    if (this.lastScrollLeft !== event.target.scrollLeft) {
      this.lastScrollLeft = event.target.scrollLeft;
      this.orientation = "horizontal";
    } else if (this.lastScrollTop !== event.target.scrollTop) {
      this.lastScrollTop = event.target.scrollTop;
      this.orientation = "vertical";
    }
    this.moveBar();
  }
  onKeyDown(event) {
    if (this.orientation === "vertical") {
      switch (event.code) {
        case "ArrowDown": {
          this.setTimer("scrollTop", this.step);
          event.preventDefault();
          break;
        }
        case "ArrowUp": {
          this.setTimer("scrollTop", this.step * -1);
          event.preventDefault();
          break;
        }
        case "ArrowLeft":
        case "ArrowRight": {
          event.preventDefault();
          break;
        }
        default:
          break;
      }
    } else if (this.orientation === "horizontal") {
      switch (event.code) {
        case "ArrowRight": {
          this.setTimer("scrollLeft", this.step);
          event.preventDefault();
          break;
        }
        case "ArrowLeft": {
          this.setTimer("scrollLeft", this.step * -1);
          event.preventDefault();
          break;
        }
        case "ArrowDown":
        case "ArrowUp": {
          event.preventDefault();
          break;
        }
        default:
          break;
      }
    }
  }
  onKeyUp() {
    this.clearTimer();
  }
  repeat(bar, step) {
    this.contentViewChild?.nativeElement && (this.contentViewChild.nativeElement[bar] += step);
    this.moveBar();
  }
  setTimer(bar, step) {
    this.clearTimer();
    this.timer = setTimeout(() => {
      this.repeat(bar, step);
    }, 40);
  }
  clearTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
  bindDocumentMouseListeners() {
    if (!this.documentMouseMoveListener) {
      this.documentMouseMoveListener = (e59) => {
        this.onDocumentMouseMove(e59);
      };
      this.document.addEventListener("mousemove", this.documentMouseMoveListener);
    }
    if (!this.documentMouseUpListener) {
      this.documentMouseUpListener = (e59) => {
        this.onDocumentMouseUp(e59);
      };
      this.document.addEventListener("mouseup", this.documentMouseUpListener);
    }
  }
  unbindDocumentMouseListeners() {
    if (this.documentMouseMoveListener) {
      this.document.removeEventListener("mousemove", this.documentMouseMoveListener);
      this.documentMouseMoveListener = null;
    }
    if (this.documentMouseUpListener) {
      document.removeEventListener("mouseup", this.documentMouseUpListener);
      this.documentMouseUpListener = null;
    }
  }
  onYBarMouseDown(e59) {
    this.isYBarClicked = true;
    this.yBarViewChild?.nativeElement?.focus();
    this.lastPageY = e59.pageY;
    this.yBarViewChild?.nativeElement?.setAttribute("data-p-scrollpanel-grabbed", "true");
    W(this.yBarViewChild.nativeElement, "p-scrollpanel-grabbed");
    this.document.body.setAttribute("data-p-scrollpanel-grabbed", "true");
    W(this.document.body, "p-scrollpanel-grabbed");
    this.bindDocumentMouseListeners();
    e59.preventDefault();
  }
  onXBarMouseDown(e59) {
    this.isXBarClicked = true;
    this.xBarViewChild?.nativeElement?.focus();
    this.lastPageX = e59.pageX;
    this.xBarViewChild?.nativeElement?.setAttribute("data-p-scrollpanel-grabbed", "false");
    W(this.xBarViewChild.nativeElement, "p-scrollpanel-grabbed");
    this.document.body.setAttribute("data-p-scrollpanel-grabbed", "false");
    W(this.document.body, "p-scrollpanel-grabbed");
    this.bindDocumentMouseListeners();
    e59.preventDefault();
  }
  onDocumentMouseMove(e59) {
    if (this.isXBarClicked) {
      this.onMouseMoveForXBar(e59);
    } else if (this.isYBarClicked) {
      this.onMouseMoveForYBar(e59);
    } else {
      this.onMouseMoveForXBar(e59);
      this.onMouseMoveForYBar(e59);
    }
  }
  onMouseMoveForXBar(e59) {
    let deltaX = e59.pageX - this.lastPageX;
    this.lastPageX = e59.pageX;
    this.requestAnimationFrame(() => {
      this.contentViewChild.nativeElement.scrollLeft += deltaX / this.scrollXRatio;
    });
  }
  onMouseMoveForYBar(e59) {
    let deltaY = e59.pageY - this.lastPageY;
    this.lastPageY = e59.pageY;
    this.requestAnimationFrame(() => {
      this.contentViewChild.nativeElement.scrollTop += deltaY / this.scrollYRatio;
    });
  }
  /**
   * Scrolls the top location to the given value.
   * @param scrollTop
   * @group Method
   */
  scrollTop(scrollTop) {
    let scrollableHeight = this.contentViewChild.nativeElement.scrollHeight - this.contentViewChild.nativeElement.clientHeight;
    scrollTop = scrollTop > scrollableHeight ? scrollableHeight : scrollTop > 0 ? scrollTop : 0;
    this.contentViewChild.nativeElement.scrollTop = scrollTop;
  }
  onFocus(event) {
    if (this.xBarViewChild?.nativeElement?.isSameNode(event.target)) {
      this.orientation = "horizontal";
    } else if (this.yBarViewChild?.nativeElement?.isSameNode(event.target)) {
      this.orientation = "vertical";
    }
  }
  onBlur() {
    if (this.orientation === "horizontal") {
      this.orientation = "vertical";
    }
  }
  onDocumentMouseUp(e59) {
    this.yBarViewChild?.nativeElement?.setAttribute("data-p-scrollpanel-grabbed", "false");
    P(this.yBarViewChild.nativeElement, "p-scrollpanel-grabbed");
    this.xBarViewChild?.nativeElement?.setAttribute("data-p-scrollpanel-grabbed", "false");
    P(this.xBarViewChild.nativeElement, "p-scrollpanel-grabbed");
    this.document.body.setAttribute("data-p-scrollpanel-grabbed", "false");
    P(this.document.body, "p-scrollpanel-grabbed");
    this.unbindDocumentMouseListeners();
    this.isXBarClicked = false;
    this.isYBarClicked = false;
  }
  requestAnimationFrame(f11) {
    let frame = window.requestAnimationFrame || this.timeoutFrame;
    frame(f11);
  }
  unbindListeners() {
    if (this.windowResizeListener) {
      this.windowResizeListener();
      this.windowResizeListener = null;
    }
    if (this.contentScrollListener) {
      this.contentScrollListener();
      this.contentScrollListener = null;
    }
    if (this.mouseEnterListener) {
      this.mouseEnterListener();
      this.mouseEnterListener = null;
    }
    if (this.xBarMouseDownListener) {
      this.xBarMouseDownListener();
      this.xBarMouseDownListener = null;
    }
    if (this.yBarMouseDownListener) {
      this.yBarMouseDownListener();
      this.yBarMouseDownListener = null;
    }
  }
  onDestroy() {
    if (this.initialized) {
      this.unbindListeners();
    }
  }
  /**
   * Refreshes the position and size of the scrollbar.
   * @group Method
   */
  refresh() {
    this.moveBar();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ScrollPanel_BaseFactory;
    return function ScrollPanel_Factory(__ngFactoryType__) {
      return (\u0275ScrollPanel_BaseFactory || (\u0275ScrollPanel_BaseFactory = \u0275\u0275getInheritedFactory(_ScrollPanel)))(__ngFactoryType__ || _ScrollPanel);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ScrollPanel,
    selectors: [["p-scroll-panel"], ["p-scrollPanel"], ["p-scrollpanel"]],
    contentQueries: function ScrollPanel_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c0, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function ScrollPanel_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 5);
        \u0275\u0275viewQuery(_c2, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.xBarViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.yBarViewChild = _t.first);
      }
    },
    hostVars: 2,
    hostBindings: function ScrollPanel_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      styleClass: "styleClass",
      step: [2, "step", "step", numberAttribute]
    },
    features: [\u0275\u0275ProvidersFeature([ScrollPanelStyle, {
      provide: SCROLLPANEL_INSTANCE,
      useExisting: _ScrollPanel
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _ScrollPanel
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c3,
    decls: 9,
    vars: 20,
    consts: [["content", ""], ["xBar", ""], ["yBar", ""], [3, "pBind"], [3, "mouseenter", "scroll", "pBind"], [4, "ngTemplateOutlet"], ["tabindex", "0", "role", "scrollbar", 3, "mousedown", "keydown", "keyup", "focus", "blur", "pBind"], ["tabindex", "0", "role", "scrollbar", 3, "mousedown", "keydown", "keyup", "focus", "pBind"]],
    template: function ScrollPanel_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 3)(1, "div", 4, 0);
        \u0275\u0275listener("mouseenter", function ScrollPanel_Template_div_mouseenter_1_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.moveBar());
        })("scroll", function ScrollPanel_Template_div_scroll_1_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onScroll($event));
        });
        \u0275\u0275conditionalCreate(3, ScrollPanel_Conditional_3_Template, 1, 0);
        \u0275\u0275template(4, ScrollPanel_ng_container_4_Template, 1, 0, "ng-container", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 6, 1);
        \u0275\u0275listener("mousedown", function ScrollPanel_Template_div_mousedown_5_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onXBarMouseDown($event));
        })("keydown", function ScrollPanel_Template_div_keydown_5_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onKeyDown($event));
        })("keyup", function ScrollPanel_Template_div_keyup_5_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onKeyUp());
        })("focus", function ScrollPanel_Template_div_focus_5_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onFocus($event));
        })("blur", function ScrollPanel_Template_div_blur_5_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onBlur());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 7, 2);
        \u0275\u0275listener("mousedown", function ScrollPanel_Template_div_mousedown_7_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onYBarMouseDown($event));
        })("keydown", function ScrollPanel_Template_div_keydown_7_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onKeyDown($event));
        })("keyup", function ScrollPanel_Template_div_keyup_7_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onKeyUp());
        })("focus", function ScrollPanel_Template_div_focus_7_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onFocus($event));
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("contentContainer"));
        \u0275\u0275property("pBind", ctx.ptm("contentContainer"));
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("content"));
        \u0275\u0275property("pBind", ctx.ptm("content"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.contentTemplate && !ctx._contentTemplate ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("ngTemplateOutlet", ctx.contentTemplate || ctx._contentTemplate);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("barX"));
        \u0275\u0275property("pBind", ctx.ptm("barX"));
        \u0275\u0275attribute("aria-orientation", "horizontal")("aria-valuenow", ctx.lastScrollLeft)("aria-controls", ctx.contentId);
        \u0275\u0275advance(2);
        \u0275\u0275classMap(ctx.cx("barY"));
        \u0275\u0275property("pBind", ctx.ptm("barY"));
        \u0275\u0275attribute("aria-orientation", "vertical")("aria-valuenow", ctx.lastScrollTop)("aria-controls", ctx.contentId);
      }
    },
    dependencies: [CommonModule, NgTemplateOutlet, SharedModule, BindModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollPanel, [{
    type: Component,
    args: [{
      selector: "p-scroll-panel, p-scrollPanel, p-scrollpanel",
      standalone: true,
      imports: [CommonModule, SharedModule, BindModule],
      template: `
        <div [pBind]="ptm('contentContainer')" [class]="cx('contentContainer')">
            <div #content [pBind]="ptm('content')" [class]="cx('content')" (mouseenter)="moveBar()" (scroll)="onScroll($event)">
                @if (!contentTemplate && !_contentTemplate) {
                    <ng-content></ng-content>
                }
                <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate"></ng-container>
            </div>
        </div>
        <div
            #xBar
            [pBind]="ptm('barX')"
            [class]="cx('barX')"
            tabindex="0"
            role="scrollbar"
            [attr.aria-orientation]="'horizontal'"
            [attr.aria-valuenow]="lastScrollLeft"
            [attr.aria-controls]="contentId"
            (mousedown)="onXBarMouseDown($event)"
            (keydown)="onKeyDown($event)"
            (keyup)="onKeyUp()"
            (focus)="onFocus($event)"
            (blur)="onBlur()"
        ></div>
        <div
            #yBar
            [pBind]="ptm('barY')"
            [class]="cx('barY')"
            tabindex="0"
            role="scrollbar"
            [attr.aria-orientation]="'vertical'"
            [attr.aria-valuenow]="lastScrollTop"
            [attr.aria-controls]="contentId"
            (mousedown)="onYBarMouseDown($event)"
            (keydown)="onKeyDown($event)"
            (keyup)="onKeyUp()"
            (focus)="onFocus($event)"
        ></div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ScrollPanelStyle, {
        provide: SCROLLPANEL_INSTANCE,
        useExisting: ScrollPanel
      }, {
        provide: PARENT_INSTANCE,
        useExisting: ScrollPanel
      }],
      host: {
        "[class]": 'cn(cx("root"), styleClass)'
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    styleClass: [{
      type: Input
    }],
    step: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    contentViewChild: [{
      type: ViewChild,
      args: ["content"]
    }],
    xBarViewChild: [{
      type: ViewChild,
      args: ["xBar"]
    }],
    yBarViewChild: [{
      type: ViewChild,
      args: ["yBar"]
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ScrollPanelModule = class _ScrollPanelModule {
  static \u0275fac = function ScrollPanelModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScrollPanelModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ScrollPanelModule,
    imports: [ScrollPanel, SharedModule, BindModule],
    exports: [ScrollPanel, SharedModule, BindModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ScrollPanel, SharedModule, BindModule, SharedModule, BindModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollPanelModule, [{
    type: NgModule,
    args: [{
      imports: [ScrollPanel, SharedModule, BindModule],
      exports: [ScrollPanel, SharedModule, BindModule]
    }]
  }], null, null);
})();

// src/app/services/loading.service.ts
var LoadingService = class _LoadingService {
  /**
   * Global loading state signal.
   * Components can read this to display loading indicators.
   */
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  /**
   * Show the global loader.
   */
  show() {
    this.loading.set(true);
  }
  /**
   * Hide the global loader.
   */
  hide() {
    this.loading.set(false);
  }
  static \u0275fac = function LoadingService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoadingService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LoadingService, factory: _LoadingService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadingService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/component/champion-wheel/champion-wheel.component.ts
var _c02 = () => ({ width: "100%", height: "100%" });
function ChampionWheelComponent_Conditional_3_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-image", 18);
  }
  if (rf & 2) {
    const avatar_r1 = ctx.$implicit;
    \u0275\u0275property("src", "http://localhost:8080/images/players/" + avatar_r1);
  }
}
function ChampionWheelComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-scrollPanel", 15)(1, "p", 16);
    \u0275\u0275text(2, " Pool");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17);
    \u0275\u0275repeaterCreate(4, ChampionWheelComponent_Conditional_3_For_5_Template, 1, 1, "p-image", 18, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(2, _c02));
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.avatars());
  }
}
function ChampionWheelComponent_Conditional_11_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", "http://localhost:8080/images/players/" + ctx_r1.avatar, \u0275\u0275sanitizeUrl);
  }
}
function ChampionWheelComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ChampionWheelComponent_Conditional_11_Conditional_0_Template, 1, 1, "img", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.avatar ? 0 : -1);
  }
}
function ChampionWheelComponent_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "p-image", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const player_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", "http://localhost:8080/images/players/" + player_r3)("width", ctx_r1.drawnPlayers().length > 3 ? "60" : "80");
  }
}
function ChampionWheelComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275repeaterCreate(1, ChampionWheelComponent_Conditional_12_For_2_Template, 2, 2, "div", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.drawnPlayers());
  }
}
function ChampionWheelComponent_Conditional_15_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "p-badge", 23);
    \u0275\u0275listener("click", function ChampionWheelComponent_Conditional_15_For_5_Template_p_badge_click_1_listener() {
      const avatar_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.introduceAvatarByName(avatar_r5));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "p-image", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const avatar_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("value", "X");
    \u0275\u0275advance();
    \u0275\u0275property("src", "http://localhost:8080/images/players/" + avatar_r5);
  }
}
function ChampionWheelComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-scrollPanel", 15)(1, "p", 16);
    \u0275\u0275text(2, " Sont d\xE9j\xE0 pass\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17);
    \u0275\u0275repeaterCreate(4, ChampionWheelComponent_Conditional_15_For_5_Template, 3, 2, "div", 22, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(2, _c02));
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.excludeAvatars());
  }
}
var ChampionWheelComponent = class _ChampionWheelComponent {
  // Signals for reactive state
  avatars = signal([], ...ngDevMode ? [{ debugName: "avatars" }] : []);
  excludeAvatars = signal([], ...ngDevMode ? [{ debugName: "excludeAvatars" }] : []);
  drawnPlayers = signal([], ...ngDevMode ? [{ debugName: "drawnPlayers" }] : []);
  players = signal([], ...ngDevMode ? [{ debugName: "players" }] : []);
  // Regular properties
  avatar = "";
  playerCount = 1;
  isAnimating = false;
  hasPlayers = false;
  apiService = inject(ApiService);
  messageService = inject(MessageService);
  loadingService = inject(LoadingService);
  ngOnInit() {
    this.reloadPool();
  }
  checkPlayers() {
    this.apiService.get("players").subscribe((players) => {
      const playerList = players || [];
      this.players.set(playerList);
      this.hasPlayers = playerList.length > 0;
      if (this.hasPlayers) {
        const playersWithoutImages = playerList.filter((p4) => !p4.picture || p4.picture === "").length;
        this.playerCount = Math.min(playersWithoutImages, this.avatars().length > 0 ? this.avatars().length : 1);
      }
    });
  }
  loadCharacters() {
    this.apiService.get("characters").subscribe((data) => {
      if (data) {
        this.avatars.set(data);
        const currentAvatars = this.avatars();
        if (currentAvatars.length > 0 && (!this.avatar || !currentAvatars.includes(this.avatar))) {
          this.avatar = currentAvatars[0];
        }
      }
    });
  }
  loadExcludedCharacters() {
    this.apiService.get("characters/exclude").subscribe((data) => {
      if (data) {
        this.excludeAvatars.set(data);
      }
    });
  }
  canSpin() {
    const playerList = this.players();
    const playersWithoutImages = playerList.filter((p4) => !p4.picture || p4.picture === "").length;
    return this.avatars().length > 0 && this.hasPlayers && playersWithoutImages > 0;
  }
  onSpin() {
    if (!this.canSpin()) {
      if (!this.hasPlayers) {
        this.messageService.add({
          severity: "warn",
          summary: "Attention",
          detail: "Aucun joueur n'a \xE9t\xE9 cr\xE9\xE9. Veuillez cr\xE9er des joueurs avant de lancer la roue."
        });
      } else {
        this.messageService.add({
          severity: "warn",
          summary: "Attention",
          detail: "Tous les joueurs ont d\xE9j\xE0 une image assign\xE9e."
        });
      }
      return;
    }
    const playerList = this.players();
    const playersWithoutImages = playerList.filter((p4) => !p4.picture || p4.picture === "").length;
    if (this.playerCount > playersWithoutImages) {
      this.playerCount = playersWithoutImages;
      this.messageService.add({
        severity: "info",
        summary: "Ajustement",
        detail: `Le nombre de tirages a \xE9t\xE9 ajust\xE9 \xE0 ${this.playerCount} (nombre de joueurs sans image).`
      });
    }
    this.loadingService.show();
    this.isAnimating = true;
    this.drawnPlayers.set([]);
    let counter = 0;
    const maxSpins = 20;
    const interval = setInterval(() => {
      const currentAvatars = this.avatars();
      const randomIndex = Math.floor(Math.random() * currentAvatars.length);
      this.avatar = currentAvatars[randomIndex];
      counter++;
      if (counter >= maxSpins) {
        clearInterval(interval);
        this.performDraw();
      }
    }, 100);
  }
  performDraw() {
    const available = [...this.avatars()];
    const drawn = [];
    const countToDraw = Math.min(this.playerCount, available.length);
    for (let i29 = 0; i29 < countToDraw; i29++) {
      if (available.length === 0)
        break;
      const randomIndex = Math.floor(Math.random() * available.length);
      const selected = available[randomIndex];
      drawn.push(selected);
      available.splice(randomIndex, 1);
    }
    this.drawnPlayers.set(drawn);
    const playerList = this.players();
    const playersWithoutImages = playerList.filter((p4) => !p4.picture || p4.picture === "");
    for (let i29 = 0; i29 < drawn.length; i29++) {
      if (i29 < playersWithoutImages.length) {
        playersWithoutImages[i29].picture = drawn[i29];
        this.updatePlayer(playersWithoutImages[i29]);
      }
    }
    setTimeout(() => {
      this.loadCharacters();
      this.loadExcludedCharacters();
      this.checkPlayers();
    }, 500);
    this.loadingService.hide();
    this.isAnimating = false;
    const drawnList = this.drawnPlayers();
    if (drawnList.length === 1) {
      this.avatar = drawnList[0];
    }
  }
  updatePlayer(player) {
    this.apiService.put("players", player).subscribe({
      error: (err) => {
        console.error("Error updating player:", err);
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: `Impossible de mettre \xE0 jour l'avatar pour ${player.pseudo}`
        });
      }
    });
  }
  resetExcludeAvatars() {
    this.apiService.post("characters/exclude/clear", {}).subscribe({
      next: () => {
        const playerList = this.players();
        playerList.forEach((player) => {
          if (player.picture) {
            player.picture = "";
            this.updatePlayer(player);
          }
        });
        this.messageService.add({
          severity: "info",
          summary: "Reset",
          detail: "La pool a \xE9t\xE9 r\xE9initialis\xE9e et les images d\xE9sassign\xE9es"
        });
        setTimeout(() => this.reloadPool(), 500);
      },
      error: (err) => {
        console.error("Error resetting pool:", err);
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: "Impossible de r\xE9initialiser la pool"
        });
      }
    });
  }
  reloadPool() {
    this.loadCharacters();
    this.loadExcludedCharacters();
    this.checkPlayers();
    this.messageService.add({
      severity: "info",
      summary: "Actualisation",
      detail: "La liste des joueurs et des avatars a \xE9t\xE9 actualis\xE9e"
    });
  }
  introduceAvatarByName(name) {
    this.apiService.post(`characters/include/${name.replace(".png", "")}`, {}).subscribe({
      next: () => {
        const playerList = this.players();
        const playerWithPicture = playerList.find((p4) => p4.picture === name);
        if (playerWithPicture) {
          playerWithPicture.picture = "";
          this.updatePlayer(playerWithPicture);
        }
        setTimeout(() => this.reloadPool(), 300);
      },
      error: (err) => {
        console.error("Error introducing avatar:", err);
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: "Impossible de r\xE9introduire l'avatar"
        });
      }
    });
  }
  getPlayersWithoutImages() {
    const playerList = this.players();
    return playerList.filter((p4) => !p4.picture || p4.picture === "").length;
  }
  static \u0275fac = function ChampionWheelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChampionWheelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChampionWheelComponent, selectors: [["app-champion-wheel"]], decls: 19, vars: 9, consts: [[1, "flex", "flex-col", "lg:grid", "lg:grid-cols-[20%_1fr_20%]", "h-screen", "w-full", "overflow-hidden", "relative"], [1, "fixed", "inset-0", "w-full", "h-full", "bg-cover", "bg-center", "-z-10", 2, "background-image", "url('http://localhost:8080/images/wallpapers/wallpaper2.jpeg')", "filter", "blur(3px)"], [1, "w-full", "h-48", "lg:h-full", "p-4", "bg-gray-900/70", "border-b", "lg:border-b-0", "lg:border-r", "border-white/20", "flex", "flex-col", "overflow-hidden", "shrink-0"], ["styleClass", "custom-scroll", 3, "style"], [1, "flex", "flex-col", "justify-start", "lg:justify-center", "items-center", "p-2", "lg:p-4", "grow", "w-full", "overflow-y-auto"], [1, "flex", "flex-col", "items-center", "gap-2", "lg:gap-4", "w-full", "max-w-md"], [1, "w-11/12", "max-w-xs", "p-1", "lg:p-2", "flex", "flex-col", "items-center", "justify-center", "gap-1", "mx-auto"], ["for", "playerCount", 1, "text-base", "lg:text-lg", "font-black", "text-white", "text-center", "uppercase", "tracking-wider", "shadow-md"], ["inputId", "playerCount", "buttonLayout", "horizontal", "incrementButtonIcon", "pi pi-plus", "decrementButtonIcon", "pi pi-minus", "styleClass", "tailwind-input", "inputStyleClass", "text-center font-bold text-base p-1 rounded-md border-2 border-white/50 bg-white/90 text-gray-800", 3, "ngModelChange", "ngModel", "min", "max", "showButtons"], [1, "bg-red-500/85", "rounded-2xl", "p-3", "lg:p-6", "flex", "justify-center", "items-center", "w-11/12", "lg:w-full", "max-w-xs", "lg:max-w-md", "min-h-[150px]", "lg:min-h-[250px]", "h-auto", "border-2", "border-white/30", "shadow-xl", "mx-auto"], [1, "grid", "grid-cols-[repeat(auto-fit,60px)]", "lg:grid-cols-[repeat(auto-fit,80px)]", "gap-2", "lg:gap-3", "w-full", "justify-items-center"], ["styleClass", "tailwind-button w-11/12 max-w-xs", "label", "Tourner la roue", 3, "click", "disabled"], [1, "w-full", "h-48", "lg:h-full", "p-4", "bg-gray-900/70", "border-b", "lg:border-b-0", "lg:border-l", "border-white/20", "flex", "flex-col", "overflow-hidden", "shrink-0"], ["pTooltip", "Reset la pool", "tooltipPosition", "top", "src", "http://localhost:8080/images/ui/star.png", "alt", "reset", 1, "fixed", "right-4", "bottom-4", "lg:right-8", "lg:bottom-8", "z-50", "cursor-pointer", "shadow-lg", "transition-transform", "w-16", "lg:w-20", "h-auto", "hover:scale-110", 3, "click"], ["icon", "pi pi-refresh", "severity", "info", "styleClass", "fixed right-24 bottom-4 lg:right-32 lg:bottom-8 z-50 shadow-lg w-12 h-12 lg:w-16 lg:h-16", "pTooltip", "Actualiser les donn\xE9es", "tooltipPosition", "top", 3, "onClick", "rounded"], ["styleClass", "custom-scroll"], [1, "font-black", "text-white", "text-2xl", "lg:text-3xl", "text-center", "mb-2", "sticky", "top-0", "z-10", "bg-gray-900/90", "lg:bg-transparent", "p-2", "rounded", "shadow-md"], [1, "grid", "grid-cols-[repeat(auto-fill,60px)]", "gap-4", "p-4"], ["alt", "pool", "width", "70", "styleClass", "w-full h-auto block", 3, "src"], ["alt", "personnage", 1, "shadow-lg", "max-w-full", "max-h-[140px]", "lg:max-h-[230px]", "w-auto", "h-auto", "object-contain", "block", 3, "src"], [1, "flex", "flex-col", "items-center"], ["alt", "personnage", "styleClass", "shadow-lg max-w-full h-auto", 3, "src", "width"], [1, "relative", "inline-block", "overflow-visible", "m-1", "hover:opacity-75", "group"], ["severity", "danger", 1, "absolute", "-top-2", "-left-2", "z-20", "cursor-pointer", "transition-transform", "hover:scale-125", 3, "click", "value"], ["styleClass", "w-full h-auto block grayscale", "alt", "pool", "width", "70", 3, "src"]], template: function ChampionWheelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "div", 1);
      \u0275\u0275elementStart(2, "div", 2);
      \u0275\u0275conditionalCreate(3, ChampionWheelComponent_Conditional_3_Template, 6, 3, "p-scrollPanel", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "label", 7);
      \u0275\u0275text(8, "Nombre de joueurs :");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p-inputNumber", 8);
      \u0275\u0275twoWayListener("ngModelChange", function ChampionWheelComponent_Template_p_inputNumber_ngModelChange_9_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.playerCount, $event) || (ctx.playerCount = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 9);
      \u0275\u0275conditionalCreate(11, ChampionWheelComponent_Conditional_11_Template, 1, 1)(12, ChampionWheelComponent_Conditional_12_Template, 3, 0, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "p-button", 11);
      \u0275\u0275listener("click", function ChampionWheelComponent_Template_p_button_click_13_listener() {
        return ctx.onSpin();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "div", 12);
      \u0275\u0275conditionalCreate(15, ChampionWheelComponent_Conditional_15_Template, 6, 3, "p-scrollPanel", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "img", 13);
      \u0275\u0275listener("click", function ChampionWheelComponent_Template_img_click_16_listener() {
        return ctx.resetExcludeAvatars();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p-button", 14);
      \u0275\u0275listener("onClick", function ChampionWheelComponent_Template_p_button_onClick_17_listener() {
        return ctx.reloadPool();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(18, "p-toast");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.avatars().length > 0 ? 3 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.playerCount);
      \u0275\u0275property("min", 1)("max", ctx.getPlayersWithoutImages())("showButtons", true);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isAnimating || ctx.drawnPlayers().length === 0 ? 11 : 12);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.canSpin());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.excludeAvatars().length > 0 ? 15 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("rounded", true);
    }
  }, dependencies: [CommonModule, FormsModule, NgControlStatus, NgModel, ImageModule, Image, ButtonModule, Button, InputNumberModule, InputNumber, ScrollPanelModule, ScrollPanel, BadgeModule, Badge, ToastModule, Toast, TooltipModule, Tooltip], styles: ["\n\n  .custom-scroll .p-scrollpanel-wrapper {\n  border-right: none;\n}\n  .custom-scroll .p-scrollpanel-bar {\n  background-color: rgba(255, 255, 255, 0.3);\n}\n  .tailwind-input .p-inputnumber {\n  width: 100%;\n  max-width: 200px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);\n  border-radius: 6px;\n}\n  .tailwind-button.p-button, \n  .tailwind-button .p-button, \n  .tailwind-button button {\n  width: 100% !important;\n  background: rgba(255, 50, 50, 0.95) !important;\n  background-color: rgba(255, 50, 50, 0.95) !important;\n  border: 2px solid rgba(255, 255, 255, 0.3) !important;\n  color: white !important;\n  font-size: 1.2rem !important;\n  font-weight: bold !important;\n  padding: 1rem !important;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8) !important;\n  transition: all 0.3s ease !important;\n  border-radius: 0.375rem !important;\n}\n  .tailwind-button.p-button:not(:disabled):hover, \n  .tailwind-button .p-button:not(:disabled):hover, \n  .tailwind-button button:not(:disabled):hover {\n  background: rgb(255, 80, 80) !important;\n  background-color: rgb(255, 80, 80) !important;\n  transform: scale(1.02) !important;\n  box-shadow: 0 6px 20px rgba(255, 50, 50, 0.6) !important;\n}\n  .tailwind-button.p-button:disabled, \n  .tailwind-button .p-button:disabled, \n  .tailwind-button button:disabled {\n  background: rgba(100, 100, 100, 0.6) !important;\n  background-color: rgba(100, 100, 100, 0.6) !important;\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n/*# sourceMappingURL=champion-wheel.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChampionWheelComponent, [{
    type: Component,
    args: [{ selector: "app-champion-wheel", imports: [
      CommonModule,
      FormsModule,
      ImageModule,
      ButtonModule,
      InputNumberModule,
      ScrollPanelModule,
      BadgeModule,
      ToastModule,
      TooltipModule
    ], template: `<div class="flex flex-col lg:grid lg:grid-cols-[20%_1fr_20%] h-screen w-full overflow-hidden relative">

  <!-- Background -->
  <div class="fixed inset-0 w-full h-full bg-cover bg-center -z-10"
    style="background-image: url('http://localhost:8080/images/wallpapers/wallpaper2.jpeg'); filter: blur(3px);"></div>

  <!-- Left Column: Available Pool -->
  <div
    class="w-full h-48 lg:h-full p-4 bg-gray-900/70 border-b lg:border-b-0 lg:border-r border-white/20 flex flex-col overflow-hidden shrink-0">
    @if (avatars().length > 0) {
    <p-scrollPanel [style]="{width: '100%', height: '100%'}" styleClass="custom-scroll">
      <p
        class="font-black text-white text-2xl lg:text-3xl text-center mb-2 sticky top-0 z-10 bg-gray-900/90 lg:bg-transparent p-2 rounded shadow-md">
        Pool</p>
      <div class="grid grid-cols-[repeat(auto-fill,60px)] gap-4 p-4">
        @for (avatar of avatars(); track avatar) {
        <p-image [src]="'http://localhost:8080/images/players/' + avatar" alt="pool" width="70"
          styleClass="w-full h-auto block" />
        }
      </div>
    </p-scrollPanel>
    }
  </div>

  <!-- Center Column: Main Content -->
  <div class="flex flex-col justify-start lg:justify-center items-center p-2 lg:p-4 grow w-full overflow-y-auto">
    <div class="flex flex-col items-center gap-2 lg:gap-4 w-full max-w-md">

      <!-- Player count input -->
      <div class="w-11/12 max-w-xs p-1 lg:p-2 flex flex-col items-center justify-center gap-1 mx-auto">
        <label for="playerCount"
          class="text-base lg:text-lg font-black text-white text-center uppercase tracking-wider shadow-md">Nombre de
          joueurs :</label>
        <p-inputNumber inputId="playerCount" [(ngModel)]="playerCount" [min]="1" [max]="getPlayersWithoutImages()"
          [showButtons]="true" buttonLayout="horizontal" incrementButtonIcon="pi pi-plus"
          decrementButtonIcon="pi pi-minus" styleClass="tailwind-input"
          inputStyleClass="text-center font-bold text-base p-1 rounded-md border-2 border-white/50 bg-white/90 text-gray-800" />
      </div>

      <!-- Drawn players display -->
      <div
        class="bg-red-500/85 rounded-2xl p-3 lg:p-6 flex justify-center items-center w-11/12 lg:w-full max-w-xs lg:max-w-md min-h-[150px] lg:min-h-[250px] h-auto border-2 border-white/30 shadow-xl mx-auto">
        @if (isAnimating || drawnPlayers().length === 0) {
        <!-- Single player animation -->
        @if (avatar) {
        <img class="shadow-lg max-w-full max-h-[140px] lg:max-h-[230px] w-auto h-auto object-contain block"
          [src]="'http://localhost:8080/images/players/' + avatar" alt="personnage" />
        }
        } @else {
        <!-- Multi-player grid -->
        <div
          class="grid grid-cols-[repeat(auto-fit,60px)] lg:grid-cols-[repeat(auto-fit,80px)] gap-2 lg:gap-3 w-full justify-items-center">
          @for (player of drawnPlayers(); track player) {
          <div class="flex flex-col items-center">
            <p-image [src]="'http://localhost:8080/images/players/' + player" alt="personnage"
              [width]="drawnPlayers().length > 3 ? '60' : '80'" styleClass="shadow-lg max-w-full h-auto" />
          </div>
          }
        </div>
        }
      </div>

      <!-- Spin button -->
      <p-button styleClass="tailwind-button w-11/12 max-w-xs" [disabled]="!canSpin()" label="Tourner la roue"
        (click)="onSpin()">
      </p-button>
    </div>
  </div>

  <!-- Right Column: Excluded Players -->
  <div
    class="w-full h-48 lg:h-full p-4 bg-gray-900/70 border-b lg:border-b-0 lg:border-l border-white/20 flex flex-col overflow-hidden shrink-0">
    @if (excludeAvatars().length > 0) {
    <p-scrollPanel [style]="{width: '100%', height: '100%'}" styleClass="custom-scroll">
      <p
        class="font-black text-white text-2xl lg:text-3xl text-center mb-2 sticky top-0 z-10 bg-gray-900/90 lg:bg-transparent p-2 rounded shadow-md">
        Sont d\xE9j\xE0 pass\xE9s</p>
      <div class="grid grid-cols-[repeat(auto-fill,60px)] gap-4 p-4">
        @for (avatar of excludeAvatars(); track avatar) {
        <div class="relative inline-block overflow-visible m-1 hover:opacity-75 group">
          <p-badge [value]="'X'" severity="danger"
            class="absolute -top-2 -left-2 z-20 cursor-pointer transition-transform hover:scale-125"
            (click)="introduceAvatarByName(avatar)" />
          <p-image styleClass="w-full h-auto block grayscale" [src]="'http://localhost:8080/images/players/' + avatar"
            alt="pool" width="70" />
        </div>
        }
      </div>
    </p-scrollPanel>
    }
  </div>

  <!-- Reset button (star) -->
  <img
    class="fixed right-4 bottom-4 lg:right-8 lg:bottom-8 z-50 cursor-pointer shadow-lg transition-transform w-16 lg:w-20 h-auto hover:scale-110"
    pTooltip="Reset la pool" tooltipPosition="top" src="http://localhost:8080/images/ui/star.png" alt="reset"
    (click)="resetExcludeAvatars()" />

  <!-- Refresh button -->
  <p-button icon="pi pi-refresh" [rounded]="true" severity="info"
    styleClass="fixed right-24 bottom-4 lg:right-32 lg:bottom-8 z-50 shadow-lg w-12 h-12 lg:w-16 lg:h-16"
    pTooltip="Actualiser les donn\xE9es" tooltipPosition="top" (onClick)="reloadPool()" />

  <p-toast />
</div>`, styles: ["/* src/app/component/champion-wheel/champion-wheel.component.scss */\n::ng-deep .custom-scroll .p-scrollpanel-wrapper {\n  border-right: none;\n}\n::ng-deep .custom-scroll .p-scrollpanel-bar {\n  background-color: rgba(255, 255, 255, 0.3);\n}\n::ng-deep .tailwind-input .p-inputnumber {\n  width: 100%;\n  max-width: 200px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);\n  border-radius: 6px;\n}\n::ng-deep .tailwind-button.p-button,\n::ng-deep .tailwind-button .p-button,\n::ng-deep .tailwind-button button {\n  width: 100% !important;\n  background: rgba(255, 50, 50, 0.95) !important;\n  background-color: rgba(255, 50, 50, 0.95) !important;\n  border: 2px solid rgba(255, 255, 255, 0.3) !important;\n  color: white !important;\n  font-size: 1.2rem !important;\n  font-weight: bold !important;\n  padding: 1rem !important;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8) !important;\n  transition: all 0.3s ease !important;\n  border-radius: 0.375rem !important;\n}\n::ng-deep .tailwind-button.p-button:not(:disabled):hover,\n::ng-deep .tailwind-button .p-button:not(:disabled):hover,\n::ng-deep .tailwind-button button:not(:disabled):hover {\n  background: rgb(255, 80, 80) !important;\n  background-color: rgb(255, 80, 80) !important;\n  transform: scale(1.02) !important;\n  box-shadow: 0 6px 20px rgba(255, 50, 50, 0.6) !important;\n}\n::ng-deep .tailwind-button.p-button:disabled,\n::ng-deep .tailwind-button .p-button:disabled,\n::ng-deep .tailwind-button button:disabled {\n  background: rgba(100, 100, 100, 0.6) !important;\n  background-color: rgba(100, 100, 100, 0.6) !important;\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n/*# sourceMappingURL=champion-wheel.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChampionWheelComponent, { className: "ChampionWheelComponent", filePath: "src/app/component/champion-wheel/champion-wheel.component.ts", lineNumber: 24 });
})();

// src/app/services/ranking.service.ts
var RankingService = class _RankingService {
  constructor() {
  }
  sortByRanking(karters) {
    return [...karters].sort((a43, b5) => {
      if (b5.points !== a43.points) {
        return b5.points - a43.points;
      }
      return b5.victory - a43.victory;
    });
  }
  getCupImage(rank) {
    const path = "http://localhost:8080/images/ranks/";
    switch (rank) {
      case 1:
        return path + "golden-cup.png";
      case 2:
        return path + "silver-cup.png";
      case 3:
        return path + "bronze-cup.png";
      default:
        return "";
    }
  }
  hasCup(rank) {
    return rank != null && (rank === 1 || rank === 2 || rank === 3);
  }
  static \u0275fac = function RankingService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RankingService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RankingService, factory: _RankingService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RankingService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/component/ranking/ranking.component.ts
var _c03 = () => ({ "min-width": "60rem" });
function RankingComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Rank");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "th");
    \u0275\u0275elementStart(4, "th");
    \u0275\u0275text(5, "Joueur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Points");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Victoires");
    \u0275\u0275elementEnd()();
  }
}
function RankingComponent_ng_template_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275element(1, "img", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const player_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.getRankCup(player_r1.rank), \u0275\u0275sanitizeUrl);
  }
}
function RankingComponent_ng_template_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const player_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(player_r1.rank);
  }
}
function RankingComponent_ng_template_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 6);
  }
  if (rf & 2) {
    const player_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", "http://localhost:8080/images/players/" + player_r1.picture, \u0275\u0275sanitizeUrl)("alt", player_r1.name);
  }
}
function RankingComponent_ng_template_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 7);
  }
  if (rf & 2) {
    const player_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("alt", player_r1.name);
  }
}
function RankingComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275conditionalCreate(1, RankingComponent_ng_template_5_Conditional_1_Template, 2, 1, "td")(2, RankingComponent_ng_template_5_Conditional_2_Template, 2, 1, "td");
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275conditionalCreate(4, RankingComponent_ng_template_5_Conditional_4_Template, 1, 2, "img", 6)(5, RankingComponent_ng_template_5_Conditional_5_Template, 1, 1, "img", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const player_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isCups(player_r1.rank) ? 1 : 2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(player_r1.picture ? 4 : 5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(player_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(player_r1.category || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(player_r1.points);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(player_r1.victory);
  }
}
var RankingComponent = class _RankingComponent {
  apiService;
  rankingService;
  ranks = [];
  pollingInterval;
  constructor(apiService, rankingService) {
    this.apiService = apiService;
    this.rankingService = rankingService;
  }
  ngOnInit() {
    this.getAllRanks();
    this.pollingInterval = setInterval(() => {
      this.getAllRanks();
    }, 5e3);
  }
  ngOnDestroy() {
    if (this.pollingInterval) {
      clearInterval(this.pollingInterval);
    }
  }
  getAllRanks() {
    this.apiService.get("ranks").subscribe((ranks) => {
      if (ranks) {
        this.ranks = this.rankingService.sortByRanking(ranks);
      }
    });
  }
  getRankCup(rank) {
    return this.rankingService.getCupImage(rank);
  }
  isCups(rank) {
    return this.rankingService.hasCup(rank);
  }
  onExport() {
    this.apiService.getBlob("ranks/excel").subscribe((blob) => {
      if (blob) {
        const url = window.URL.createObjectURL(blob);
        const a43 = document.createElement("a");
        a43.href = url;
        a43.download = "classement.xlsx";
        document.body.appendChild(a43);
        a43.click();
        document.body.removeChild(a43);
        window.URL.revokeObjectURL(url);
      }
    });
  }
  static \u0275fac = function RankingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RankingComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(RankingService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RankingComponent, selectors: [["app-ranking"]], decls: 6, vars: 3, consts: [[1, "fixed", "inset-0", "w-full", "h-full", "bg-cover", "bg-center", "-z-10", "blur-[3px]", 2, "background-image", "url('http://localhost:8080/images/wallpapers/wallpaper3.jpg')"], [1, "h-[93vh]", "w-full", "relative"], ["label", "Exporter", 1, "absolute", "right-0", "z-[999]", 3, "click"], ["styleClass", "rank-table mt-4 rounded", 3, "value", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["width", "55", 1, "shadow-lg", 3, "src", "alt"], ["src", "http://localhost:8080/images/players/unknown.png", "width", "55", 1, "shadow-lg", "opacity-50", 3, "alt"], ["width", "25", 1, "shadow-lg", 3, "src"]], template: function RankingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "div", 0);
      \u0275\u0275elementStart(1, "div", 1)(2, "p-button", 2);
      \u0275\u0275listener("click", function RankingComponent_Template_p_button_click_2_listener() {
        return ctx.onExport();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p-table", 3);
      \u0275\u0275template(4, RankingComponent_ng_template_4_Template, 12, 0, "ng-template", 4)(5, RankingComponent_ng_template_5_Template, 14, 6, "ng-template", 5);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("value", ctx.ranks)("tableStyle", \u0275\u0275pureFunction0(2, _c03));
    }
  }, dependencies: [ImageModule, PrimeTemplate, ButtonModule, Button, TableModule, Table], styles: ["\n\n  .rank-table th, \n  .rank-table tr, \n  .rank-table td {\n  background-color: rgba(64, 64, 64, 0.5) !important;\n  font-weight: bold !important;\n  color: white !important;\n  font-size: 20px !important;\n  border: none !important;\n  padding: 0 !important;\n}\n  .rank-table .p-datatable-wrapper {\n  padding: 0;\n  margin-top: 1%;\n  border-radius: 3px;\n}\n/*# sourceMappingURL=ranking.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RankingComponent, [{
    type: Component,
    args: [{ selector: "app-ranking", imports: [ImageModule, ButtonModule, TableModule], template: `<div class="fixed inset-0 w-full h-full bg-cover bg-center -z-10 blur-[3px]"
  style="background-image: url('http://localhost:8080/images/wallpapers/wallpaper3.jpg');"></div>
<div class="h-[93vh] w-full relative">
  <p-button class="absolute right-0 z-[999]" (click)="onExport()" label="Exporter" />
  <p-table styleClass="rank-table mt-4 rounded" [value]="ranks" [tableStyle]="{'min-width': '60rem'}">
    <ng-template pTemplate="header">
      <tr>
        <th>Rank</th>
        <th></th>
        <th>Joueur</th>
        <th>Cat\xE9gorie</th>
        <th>Points</th>
        <th>Victoires</th>
      </tr>
    </ng-template>
    <ng-template pTemplate="body" let-player>
      <tr>
        @if (isCups(player.rank)) {
        <td>
          <img [src]="getRankCup(player.rank)" width="25" class="shadow-lg" />
        </td>
        } @else {
        <td>{{player.rank}}</td>
        }

        <td>
          @if (player.picture) {
          <img [src]="'http://localhost:8080/images/players/' + player.picture" [alt]="player.name" width="55"
            class="shadow-lg" />
          } @else {
          <img src="http://localhost:8080/images/players/unknown.png" [alt]="player.name" width="55"
            class="shadow-lg opacity-50" />
          }
        </td>
        <td>{{player.name}}</td>
        <td>{{player.category || '-'}}</td>
        <td>{{player.points}}</td>
        <td>{{player.victory}}</td>
      </tr>
    </ng-template>
  </p-table>
</div>`, styles: ["/* src/app/component/ranking/ranking.component.scss */\n::ng-deep .rank-table th,\n::ng-deep .rank-table tr,\n::ng-deep .rank-table td {\n  background-color: rgba(64, 64, 64, 0.5) !important;\n  font-weight: bold !important;\n  color: white !important;\n  font-size: 20px !important;\n  border: none !important;\n  padding: 0 !important;\n}\n::ng-deep .rank-table .p-datatable-wrapper {\n  padding: 0;\n  margin-top: 1%;\n  border-radius: 3px;\n}\n/*# sourceMappingURL=ranking.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: RankingService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RankingComponent, { className: "RankingComponent", filePath: "src/app/component/ranking/ranking.component.ts", lineNumber: 15 });
})();

// node_modules/@primeuix/styles/dist/toggleswitch/index.mjs
var style4 = "\n    .p-toggleswitch {\n        display: inline-block;\n        width: dt('toggleswitch.width');\n        height: dt('toggleswitch.height');\n    }\n\n    .p-toggleswitch-input {\n        cursor: pointer;\n        appearance: none;\n        position: absolute;\n        top: 0;\n        inset-inline-start: 0;\n        width: 100%;\n        height: 100%;\n        padding: 0;\n        margin: 0;\n        opacity: 0;\n        z-index: 1;\n        outline: 0 none;\n        border-radius: dt('toggleswitch.border.radius');\n    }\n\n    .p-toggleswitch-slider {\n        cursor: pointer;\n        width: 100%;\n        height: 100%;\n        border-width: dt('toggleswitch.border.width');\n        border-style: solid;\n        border-color: dt('toggleswitch.border.color');\n        background: dt('toggleswitch.background');\n        transition:\n            background dt('toggleswitch.transition.duration'),\n            color dt('toggleswitch.transition.duration'),\n            border-color dt('toggleswitch.transition.duration'),\n            outline-color dt('toggleswitch.transition.duration'),\n            box-shadow dt('toggleswitch.transition.duration');\n        border-radius: dt('toggleswitch.border.radius');\n        outline-color: transparent;\n        box-shadow: dt('toggleswitch.shadow');\n    }\n\n    .p-toggleswitch-handle {\n        position: absolute;\n        top: 50%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background: dt('toggleswitch.handle.background');\n        color: dt('toggleswitch.handle.color');\n        width: dt('toggleswitch.handle.size');\n        height: dt('toggleswitch.handle.size');\n        inset-inline-start: dt('toggleswitch.gap');\n        margin-block-start: calc(-1 * calc(dt('toggleswitch.handle.size') / 2));\n        border-radius: dt('toggleswitch.handle.border.radius');\n        transition:\n            background dt('toggleswitch.transition.duration'),\n            color dt('toggleswitch.transition.duration'),\n            inset-inline-start dt('toggleswitch.slide.duration'),\n            box-shadow dt('toggleswitch.slide.duration');\n    }\n\n    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {\n        background: dt('toggleswitch.checked.background');\n        border-color: dt('toggleswitch.checked.border.color');\n    }\n\n    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {\n        background: dt('toggleswitch.handle.checked.background');\n        color: dt('toggleswitch.handle.checked.color');\n        inset-inline-start: calc(dt('toggleswitch.width') - calc(dt('toggleswitch.handle.size') + dt('toggleswitch.gap')));\n    }\n\n    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {\n        background: dt('toggleswitch.hover.background');\n        border-color: dt('toggleswitch.hover.border.color');\n    }\n\n    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {\n        background: dt('toggleswitch.handle.hover.background');\n        color: dt('toggleswitch.handle.hover.color');\n    }\n\n    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {\n        background: dt('toggleswitch.checked.hover.background');\n        border-color: dt('toggleswitch.checked.hover.border.color');\n    }\n\n    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {\n        background: dt('toggleswitch.handle.checked.hover.background');\n        color: dt('toggleswitch.handle.checked.hover.color');\n    }\n\n    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {\n        box-shadow: dt('toggleswitch.focus.ring.shadow');\n        outline: dt('toggleswitch.focus.ring.width') dt('toggleswitch.focus.ring.style') dt('toggleswitch.focus.ring.color');\n        outline-offset: dt('toggleswitch.focus.ring.offset');\n    }\n\n    .p-toggleswitch.p-invalid > .p-toggleswitch-slider {\n        border-color: dt('toggleswitch.invalid.border.color');\n    }\n\n    .p-toggleswitch.p-disabled {\n        opacity: 1;\n    }\n\n    .p-toggleswitch.p-disabled .p-toggleswitch-slider {\n        background: dt('toggleswitch.disabled.background');\n    }\n\n    .p-toggleswitch.p-disabled .p-toggleswitch-handle {\n        background: dt('toggleswitch.handle.disabled.background');\n    }\n";

// node_modules/primeng/fesm2022/primeng-toggleswitch.mjs
var _c04 = ["handle"];
var _c12 = ["input"];
var _c22 = (a0) => ({
  checked: a0
});
function ToggleSwitch_Conditional_4_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ToggleSwitch_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ToggleSwitch_Conditional_4_ng_container_0_Template, 1, 0, "ng-container", 3);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.handleTemplate || ctx_r1._handleTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c22, ctx_r1.checked()));
  }
}
var style5 = (
  /*css*/
  `
    ${style4}

    p-toggleswitch.ng-invalid.ng-dirty > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }
`
);
var inlineStyles = {
  root: {
    position: "relative"
  }
};
var classes2 = {
  root: ({
    instance
  }) => ["p-toggleswitch p-component", {
    "p-toggleswitch p-component": true,
    "p-toggleswitch-checked": instance.checked(),
    "p-disabled": instance.$disabled(),
    "p-invalid": instance.invalid()
  }],
  input: "p-toggleswitch-input",
  slider: "p-toggleswitch-slider",
  handle: "p-toggleswitch-handle"
};
var ToggleSwitchStyle = class _ToggleSwitchStyle extends BaseStyle {
  name = "toggleswitch";
  style = style5;
  classes = classes2;
  inlineStyles = inlineStyles;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ToggleSwitchStyle_BaseFactory;
    return function ToggleSwitchStyle_Factory(__ngFactoryType__) {
      return (\u0275ToggleSwitchStyle_BaseFactory || (\u0275ToggleSwitchStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ToggleSwitchStyle)))(__ngFactoryType__ || _ToggleSwitchStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ToggleSwitchStyle,
    factory: _ToggleSwitchStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleSwitchStyle, [{
    type: Injectable
  }], null, null);
})();
var ToggleSwitchClasses;
(function(ToggleSwitchClasses2) {
  ToggleSwitchClasses2["root"] = "p-toggleswitch";
  ToggleSwitchClasses2["input"] = "p-toggleswitch-input";
  ToggleSwitchClasses2["slider"] = "p-toggleswitch-slider";
})(ToggleSwitchClasses || (ToggleSwitchClasses = {}));
var TOGGLESWITCH_INSTANCE = new InjectionToken("TOGGLESWITCH_INSTANCE");
var TOGGLESWITCH_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ToggleSwitch),
  multi: true
};
var ToggleSwitch = class _ToggleSwitch extends BaseEditableHolder {
  $pcToggleSwitch = inject(TOGGLESWITCH_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * Style class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex;
  /**
   * Identifier of the input element.
   * @group Props
   */
  inputId;
  /**
   * When present, it specifies that the component cannot be edited.
   * @group Props
   */
  readonly;
  /**
   * Value in checked state.
   * @group Props
   */
  trueValue = true;
  /**
   * Value in unchecked state.
   * @group Props
   */
  falseValue = false;
  /**
   * Used to define a string that autocomplete attribute the current element.
   * @group Props
   */
  ariaLabel;
  /**
   * Specifies the size of the component.
   * @defaultValue undefined
   * @group Props
   */
  size = input(...ngDevMode ? [void 0, {
    debugName: "size"
  }] : []);
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Callback to invoke when the on value change.
   * @param {ToggleSwitchChangeEvent} event - Custom change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  input;
  /**
   * Callback to invoke when the on value change.
   * @type {TemplateRef<ToggleSwitchHandleTemplateContext>} context - Context of the template
   * @example
   * ```html
   * <ng-template #handle let-checked="checked"> </ng-template>
   * ```
   * @see {@link ToggleSwitchHandleTemplateContext}
   * @group Templates
   */
  handleTemplate;
  _handleTemplate;
  focused = false;
  _componentStyle = inject(ToggleSwitchStyle);
  templates;
  onHostClick(event) {
    this.onClick(event);
  }
  onAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "handle":
          this._handleTemplate = item.template;
          break;
        default:
          this._handleTemplate = item.template;
          break;
      }
    });
  }
  onClick(event) {
    if (!this.$disabled() && !this.readonly) {
      this.writeModelValue(this.checked() ? this.falseValue : this.trueValue);
      this.onModelChange(this.modelValue());
      this.onChange.emit({
        originalEvent: event,
        checked: this.modelValue()
      });
      this.input.nativeElement.focus();
    }
  }
  onFocus() {
    this.focused = true;
  }
  onBlur() {
    this.focused = false;
    this.onModelTouched();
  }
  checked() {
    return this.modelValue() === this.trueValue;
  }
  /**
   * @override
   *
   * @see {@link BaseEditableHolder.writeControlValue}
   * Writes the value to the control.
   */
  writeControlValue(value, setModelValue) {
    setModelValue(value);
    this.cd.markForCheck();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ToggleSwitch_BaseFactory;
    return function ToggleSwitch_Factory(__ngFactoryType__) {
      return (\u0275ToggleSwitch_BaseFactory || (\u0275ToggleSwitch_BaseFactory = \u0275\u0275getInheritedFactory(_ToggleSwitch)))(__ngFactoryType__ || _ToggleSwitch);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ToggleSwitch,
    selectors: [["p-toggleswitch"], ["p-toggleSwitch"], ["p-toggle-switch"]],
    contentQueries: function ToggleSwitch_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c04, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.handleTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function ToggleSwitch_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c12, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.input = _t.first);
      }
    },
    hostVars: 5,
    hostBindings: function ToggleSwitch_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function ToggleSwitch_click_HostBindingHandler($event) {
          return ctx.onHostClick($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("data-pc-name", "toggleswitch");
        \u0275\u0275styleMap(ctx.sx("root"));
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      styleClass: "styleClass",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      inputId: "inputId",
      readonly: [2, "readonly", "readonly", booleanAttribute],
      trueValue: "trueValue",
      falseValue: "falseValue",
      ariaLabel: "ariaLabel",
      size: [1, "size"],
      ariaLabelledBy: "ariaLabelledBy",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute]
    },
    outputs: {
      onChange: "onChange"
    },
    features: [\u0275\u0275ProvidersFeature([TOGGLESWITCH_VALUE_ACCESSOR, ToggleSwitchStyle, {
      provide: TOGGLESWITCH_INSTANCE,
      useExisting: _ToggleSwitch
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _ToggleSwitch
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 5,
    vars: 20,
    consts: [["input", ""], ["type", "checkbox", "role", "switch", 3, "focus", "blur", "checked", "pAutoFocus", "pBind"], [3, "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function ToggleSwitch_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "input", 1, 0);
        \u0275\u0275listener("focus", function ToggleSwitch_Template_input_focus_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onFocus());
        })("blur", function ToggleSwitch_Template_input_blur_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onBlur());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 2);
        \u0275\u0275conditionalCreate(4, ToggleSwitch_Conditional_4_Template, 1, 4, "ng-container");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("input"));
        \u0275\u0275property("checked", ctx.checked())("pAutoFocus", ctx.autofocus)("pBind", ctx.ptm("input"));
        \u0275\u0275attribute("id", ctx.inputId)("required", ctx.required() ? "" : void 0)("disabled", ctx.$disabled() ? "" : void 0)("aria-checked", ctx.checked())("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel)("name", ctx.name())("tabindex", ctx.tabindex);
        \u0275\u0275advance(2);
        \u0275\u0275classMap(ctx.cx("slider"));
        \u0275\u0275property("pBind", ctx.ptm("slider"));
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("handle"));
        \u0275\u0275property("pBind", ctx.ptm("handle"));
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.handleTemplate || ctx._handleTemplate ? 4 : -1);
      }
    },
    dependencies: [CommonModule, NgTemplateOutlet, AutoFocus, SharedModule, BindModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleSwitch, [{
    type: Component,
    args: [{
      selector: "p-toggleswitch, p-toggleSwitch, p-toggle-switch",
      standalone: true,
      imports: [CommonModule, AutoFocus, SharedModule, BindModule],
      template: `
        <input
            #input
            [attr.id]="inputId"
            type="checkbox"
            role="switch"
            [class]="cx('input')"
            [checked]="checked()"
            [attr.required]="required() ? '' : undefined"
            [attr.disabled]="$disabled() ? '' : undefined"
            [attr.aria-checked]="checked()"
            [attr.aria-labelledby]="ariaLabelledBy"
            [attr.aria-label]="ariaLabel"
            [attr.name]="name()"
            [attr.tabindex]="tabindex"
            (focus)="onFocus()"
            (blur)="onBlur()"
            [pAutoFocus]="autofocus"
            [pBind]="ptm('input')"
        />
        <div [class]="cx('slider')" [pBind]="ptm('slider')">
            <div [class]="cx('handle')" [pBind]="ptm('handle')">
                @if (handleTemplate || _handleTemplate) {
                    <ng-container *ngTemplateOutlet="handleTemplate || _handleTemplate; context: { checked: checked() }" />
                }
            </div>
        </div>
    `,
      providers: [TOGGLESWITCH_VALUE_ACCESSOR, ToggleSwitchStyle, {
        provide: TOGGLESWITCH_INSTANCE,
        useExisting: ToggleSwitch
      }, {
        provide: PARENT_INSTANCE,
        useExisting: ToggleSwitch
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": "cn(cx('root'), styleClass)",
        "[style]": "sx('root')",
        "[attr.data-pc-name]": "'toggleswitch'"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    styleClass: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    inputId: [{
      type: Input
    }],
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    trueValue: [{
      type: Input
    }],
    falseValue: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onChange: [{
      type: Output
    }],
    input: [{
      type: ViewChild,
      args: ["input"]
    }],
    handleTemplate: [{
      type: ContentChild,
      args: ["handle", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    onHostClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var ToggleSwitchModule = class _ToggleSwitchModule {
  static \u0275fac = function ToggleSwitchModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToggleSwitchModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ToggleSwitchModule,
    imports: [ToggleSwitch, SharedModule],
    exports: [ToggleSwitch, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ToggleSwitch, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleSwitchModule, [{
    type: NgModule,
    args: [{
      imports: [ToggleSwitch, SharedModule],
      exports: [ToggleSwitch, SharedModule]
    }]
  }], null, null);
})();

// src/app/component/score-management/score-management.component.ts
var _c05 = () => ({ width: "100%", height: "100%" });
var _c13 = (a0, a1) => ({ "h-16": a0, "h-64": a1 });
function ScoreManagementComponent_For_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 31);
  }
  if (rf & 2) {
    const rank_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", "http://localhost:8080/images/players/" + rank_r2.picture, \u0275\u0275sanitizeUrl)("alt", rank_r2.name);
  }
}
function ScoreManagementComponent_For_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 32);
  }
  if (rf & 2) {
    const rank_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("alt", rank_r2.name);
  }
}
function ScoreManagementComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275listener("click", function ScoreManagementComponent_For_6_Template_div_click_0_listener() {
      const rank_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectNewRank(rank_r2));
    });
    \u0275\u0275conditionalCreate(1, ScoreManagementComponent_For_6_Conditional_1_Template, 1, 2, "img", 31)(2, ScoreManagementComponent_For_6_Conditional_2_Template, 1, 1, "img", 32);
    \u0275\u0275elementStart(3, "div", 12)(4, "span", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const rank_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("!bg-primary", (ctx_r2.selectedRank == null ? null : ctx_r2.selectedRank.name) === rank_r2.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(rank_r2.picture ? 1 : 2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(rank_r2.name);
  }
}
function ScoreManagementComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 10);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("src", "http://localhost:8080/images/players/" + (ctx_r2.selectedRank == null ? null : ctx_r2.selectedRank.picture), \u0275\u0275sanitizeUrl)("alt", ctx_r2.selectedRank == null ? null : ctx_r2.selectedRank.name);
  }
}
function ScoreManagementComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 11);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("alt", ctx_r2.selectedRank == null ? null : ctx_r2.selectedRank.name);
  }
}
function ScoreManagementComponent_ng_template_38_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275element(1, "img", 35);
    \u0275\u0275elementStart(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", "http://localhost:8080/images/consoles/" + ctx_r2.selectedConsole.picture, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.selectedConsole.name);
  }
}
function ScoreManagementComponent_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ScoreManagementComponent_ng_template_38_Conditional_0_Template, 4, 2, "div", 34);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.selectedConsole ? 0 : -1);
  }
}
function ScoreManagementComponent_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275element(1, "img", 35);
    \u0275\u0275elementStart(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const selectedConsole_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", "http://localhost:8080/images/consoles/" + selectedConsole_r4.picture, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(selectedConsole_r4.name);
  }
}
function ScoreManagementComponent_Conditional_40_ng_template_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275element(1, "img", 35);
    \u0275\u0275elementStart(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", "http://localhost:8080/images/cups/" + ctx_r2.selectedConsole.name + "/" + ctx_r2.selectedCups.picture, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.selectedCups.name);
  }
}
function ScoreManagementComponent_Conditional_40_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ScoreManagementComponent_Conditional_40_ng_template_1_Conditional_0_Template, 4, 2, "div", 34);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r2.selectedCups ? 0 : -1);
  }
}
function ScoreManagementComponent_Conditional_40_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275element(1, "img", 35);
    \u0275\u0275elementStart(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const selectedCups_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", "http://localhost:8080/images/cups/" + ctx_r2.selectedConsole.name + "/" + selectedCups_r6.picture, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(selectedCups_r6.name);
  }
}
function ScoreManagementComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-select", 36);
    \u0275\u0275twoWayListener("ngModelChange", function ScoreManagementComponent_Conditional_40_Template_p_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.selectedCups, $event) || (ctx_r2.selectedCups = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(1, ScoreManagementComponent_Conditional_40_ng_template_1_Template, 1, 1, "ng-template", 37)(2, ScoreManagementComponent_Conditional_40_ng_template_2_Template, 4, 2, "ng-template", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("options", ctx_r2.cups);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.selectedCups);
    \u0275\u0275property("showClear", true);
  }
}
function ScoreManagementComponent_Conditional_43_Conditional_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Joueur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Pts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Console");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Coupe");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "th");
    \u0275\u0275elementEnd();
  }
}
function ScoreManagementComponent_Conditional_43_Conditional_6_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "p-badge", 46);
    \u0275\u0275listener("click", function ScoreManagementComponent_Conditional_43_Conditional_6_ng_template_3_Template_p_badge_click_10_listener() {
      const line_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.deleteHistorique(line_r9));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const line_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r9.player.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r9.points);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r9.console.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(line_r9.cups.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", "X");
  }
}
function ScoreManagementComponent_Conditional_43_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-scrollPanel", 42)(1, "p-table", 43);
    \u0275\u0275template(2, ScoreManagementComponent_Conditional_43_Conditional_6_ng_template_2_Template, 10, 0, "ng-template", 44)(3, ScoreManagementComponent_Conditional_43_Conditional_6_ng_template_3_Template, 11, 5, "ng-template", 45);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(4, _c05));
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r2.historique)("rowHover", true);
  }
}
function ScoreManagementComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 38)(2, "div", 39);
    \u0275\u0275text(3, " Historique ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 40);
    \u0275\u0275listener("click", function ScoreManagementComponent_Conditional_43_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.isHistoryVisible = !ctx_r2.isHistoryVisible);
    });
    \u0275\u0275element(5, "i");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, ScoreManagementComponent_Conditional_43_Conditional_6_Template, 4, 5, "p-scrollPanel", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275classMap(ctx_r2.isHistoryVisible ? "pi pi-chevron-up" : "pi pi-chevron-down");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isHistoryVisible ? 6 : -1);
  }
}
var ScoreManagementComponent = class _ScoreManagementComponent {
  apiService;
  messageService;
  ranks = [];
  selectedRank = null;
  // No default selection
  consoles = [];
  selectedConsole = null;
  cups = [];
  selectedCups = null;
  valueToAdd = 0;
  loading = false;
  victory = false;
  historique = [];
  isHistoryVisible = true;
  constructor(apiService, messageService) {
    this.apiService = apiService;
    this.messageService = messageService;
  }
  ngOnInit() {
    this.loadRanks();
    this.loadConsoles();
  }
  loadRanks() {
    this.apiService.get("ranks").subscribe((ranks) => {
      if (ranks) {
        this.ranks = ranks;
        if (this.selectedRank && this.selectedRank.name) {
          this.selectKarterByName(this.selectedRank.name);
        }
      }
    });
  }
  loadConsoles() {
    this.apiService.get("consoles").subscribe((consoles) => {
      if (consoles)
        this.consoles = consoles;
    });
  }
  selectNewRank(selectedRank) {
    console.log("selectNewRank called with:", selectedRank.name);
    this.selectedRank = selectedRank;
    this.loadHistoryForPlayer(this.selectedRank.name);
  }
  updatePlayer() {
    if (!this.canUpdate() || !this.selectedRank)
      return;
    console.log("updatePlayer: Starting update for", this.selectedRank.name);
    this.loading = true;
    this.selectedRank.points += this.valueToAdd;
    if (this.victory)
      this.selectedRank.victory++;
    this.apiService.post("ranks", this.selectedRank).subscribe({
      next: (response) => {
        console.log("updatePlayer: POST /ranks response:", response);
        this.messageService.add({
          severity: "success",
          summary: "Mise \xE0 jour r\xE9ussie",
          detail: "Les points ont bien \xE9t\xE9 mis \xE0 jour"
        });
        console.log("updatePlayer: Calling saveHistory()");
        this.saveHistory();
        this.resetForm();
      },
      error: (err) => {
        console.error("updatePlayer: API error:", err);
        this.resetForm();
      }
    });
  }
  saveHistory() {
    const entry = this.createHistoryEntry();
    console.log("saveHistory: Creating entry:", entry);
    console.log("saveHistory: Sending POST to /historique");
    this.apiService.post("historique", entry).subscribe({
      next: (response) => {
        console.log("saveHistory: Response received:", response);
        if (response) {
          this.messageService.add({
            severity: "info",
            summary: "Historique",
            detail: "Historique mis \xE0 jour"
          });
          if (entry.player && entry.player.name) {
            this.loadHistoryForPlayer(entry.player.name);
          }
        }
      },
      error: (err) => {
        console.error("saveHistory: API error:", err);
      }
    });
  }
  createHistoryEntry() {
    return {
      player: this.selectedRank,
      console: this.selectedConsole,
      cups: this.selectedCups,
      points: this.valueToAdd,
      victory: this.victory
    };
  }
  isUpdateButtonAvailable() {
    return this.valueToAdd === 0 || !this.selectedRank?.name || !this.selectedConsole?.name || !this.selectedCups?.name;
  }
  canUpdate() {
    return !this.isUpdateButtonAvailable();
  }
  selectKarterByName(name) {
    const karter = this.ranks.find((rank) => rank.name === name);
    if (karter) {
      this.selectedRank = karter;
      this.loadHistoryForPlayer(karter.name);
    }
  }
  loadHistoryForPlayer(playerName) {
    if (!playerName) {
      console.warn("loadHistoryForPlayer called with null/undefined playerName");
      this.historique = [];
      return;
    }
    console.log("loadHistoryForPlayer: Making API call for", playerName);
    this.apiService.get(`historique/${playerName}`).subscribe({
      next: (history) => {
        console.log("loadHistoryForPlayer: Received response:", history);
        if (history) {
          this.historique = history;
          console.log("loadHistoryForPlayer: historique updated, length:", this.historique.length);
        } else {
          console.warn("loadHistoryForPlayer: Response is null/undefined");
          this.historique = [];
        }
      },
      error: (err) => {
        console.error("loadHistoryForPlayer: API error:", err);
        this.historique = [];
      }
    });
  }
  onConsoleSelected() {
    this.loadConsoles();
    this.cups = this.selectedConsole?.cups ? this.getAvailableCups(this.selectedConsole.cups) : [];
  }
  getAvailableCups(allCups) {
    return allCups.filter((cup) => !this.historique.some((entry) => entry.cups.name === cup.name));
  }
  resetForm() {
    console.log("resetForm called, selectedRank:", this.selectedRank);
    this.loadRanks();
    this.valueToAdd = 0;
    this.loading = false;
    this.victory = false;
    this.selectedCups = null;
    this.selectedConsole = null;
    if (this.selectedRank && this.selectedRank.name) {
      console.log("Reloading history for:", this.selectedRank.name);
      this.loadHistoryForPlayer(this.selectedRank.name);
    } else {
      console.log("No selected player to reload history for");
    }
  }
  deleteHistorique(entry) {
    this.apiService.delete(`historique/${entry.id}`).subscribe((response) => {
      if (response !== null) {
        this.messageService.add({
          severity: "info",
          summary: "Historique",
          detail: "Ligne supprim\xE9e"
        });
      }
      this.resetForm();
    });
  }
  static \u0275fac = function ScoreManagementComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScoreManagementComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScoreManagementComponent, selectors: [["app-score-management"]], decls: 45, vars: 22, consts: [[1, "fixed", "inset-0", "w-full", "h-full", "bg-cover", "bg-center", "-z-10", "blur-[3px]", 2, "background-image", "url('http://localhost:8080/images/wallpapers/wallpaper4.jpeg')"], [1, "flex", "flex-col", "lg:grid", "lg:grid-cols-[minmax(250px,20%)_1fr_minmax(350px,30%)]", "h-screen", "w-full", "overflow-x-hidden", "overflow-y-auto", "lg:overflow-hidden", "relative", "bg-[rgba(45,45,45,0.7)]", 2, "background-image", "linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)", "background-size", "30px 30px"], [1, "w-full", "h-48", "lg:h-full", "p-4", "bg-gray-900/60", "border-b", "lg:border-b-0", "lg:border-r", "border-white/10", "flex", "flex-col", "overflow-hidden", "shrink-0"], ["styleClass", "ranks-scroll"], [1, "flex", "flex-col", "gap-2"], [1, "flex", "items-center", "gap-4", "p-3", "rounded-lg", "bg-gray-700/80", "cursor-pointer", "transition-all", "hover:bg-gray-600/90", "hover:translate-x-1", 3, "!bg-primary"], [1, "p-8", "flex", "flex-col", "items-center", "gap-8", "overflow-y-auto"], [1, "text-[clamp(1.5rem,4vw,2.5rem)]", "font-bold", "text-white", "drop-shadow-md", "text-center", "mb-4"], [1, "bg-gray-700/90", "rounded-2xl", "p-8", "shadow-2xl", "border", "border-white/10", "backdrop-blur-sm", "w-full", "max-w-[800px]"], [1, "flex", "items-center", "gap-8"], [1, "w-[clamp(80px,10vw,120px)]", "h-[clamp(80px,10vw,120px)]", "rounded-full", "border-4", "border-white/20", "object-cover", "shrink-0", 3, "src", "alt"], ["src", "http://localhost:8080/images/players/unknown.png", 1, "w-[clamp(80px,10vw,120px)]", "h-[clamp(80px,10vw,120px)]", "rounded-full", "border-4", "border-white/20", "object-cover", "shrink-0", "opacity-50", 3, "alt"], [1, "flex-1", "min-w-0"], [1, "text-[clamp(1.25rem,3vw,2rem)]", "font-bold", "text-white", "mb-2"], [1, "flex", "flex-wrap", "gap-4", "text-white/80", "text-[clamp(0.75rem,1.5vw,1rem)]"], [1, "bg-black/20", "px-3", "py-1", "rounded", "whitespace-nowrap"], [1, "w-full", "max-w-[800px]", "flex", "flex-col", "gap-6", "bg-gray-700/90", "p-8", "rounded-2xl", "border", "border-white/10"], [1, "grid", "grid-cols-2", "max-lg:grid-cols-1", "gap-8", "items-start"], [1, "flex", "flex-col", "gap-2", "text-white"], ["for", "pointToAdd", 1, "font-bold", "text-[clamp(0.75rem,1.5vw,0.9rem)]", "text-white/90"], ["inputId", "pointToAdd", 3, "ngModelChange", "ngModel"], [1, "font-bold", "text-[clamp(0.75rem,1.5vw,0.9rem)]", "text-white/90"], [3, "ngModelChange", "ngModel"], ["styleClass", "w-full", "optionLabel", "name", "placeholder", "Choisir une console", 3, "click", "ngModelChange", "options", "ngModel", "showClear"], ["pTemplate", "selectedConsole"], ["pTemplate", "item"], ["styleClass", "w-full", "optionLabel", "name", "placeholder", "Choisir une coupe", 3, "options", "ngModel", "showClear"], ["label", "Mettre \xE0 jour", "icon", "pi pi-check", 1, "w-full", "mt-4", 3, "onClick", "loading", "disabled"], [1, "w-full", "lg:h-full", "p-4", "bg-gray-900/60", "border-t", "lg:border-t-0", "lg:border-l", "border-white/10", "flex", "flex-col", "overflow-hidden", "shrink-0", 3, "ngClass"], [1, "h-full", "flex", "flex-col", "gap-4"], [1, "flex", "items-center", "gap-4", "p-3", "rounded-lg", "bg-gray-700/80", "cursor-pointer", "transition-all", "hover:bg-gray-600/90", "hover:translate-x-1", 3, "click"], [1, "w-[clamp(40px,5vw,60px)]", "h-[clamp(40px,5vw,60px)]", "object-cover", "rounded-full", "shrink-0", 3, "src", "alt"], ["src", "http://localhost:8080/images/players/unknown.png", 1, "w-[clamp(40px,5vw,60px)]", "h-[clamp(40px,5vw,60px)]", "object-cover", "rounded-full", "shrink-0", "opacity-50", 3, "alt"], [1, "font-bold", "text-white", "text-[clamp(0.875rem,1.5vw,1rem)]", "whitespace-nowrap", "overflow-hidden", "text-ellipsis"], [1, "flex", "items-center", "gap-2"], [1, "w-[clamp(60px,8vw,100px)]", "h-[clamp(60px,8vw,100px)]", "object-contain", 3, "src"], ["styleClass", "w-full", "optionLabel", "name", "placeholder", "Choisir une coupe", 3, "ngModelChange", "options", "ngModel", "showClear"], ["pTemplate", "selectedCups"], [1, "flex", "items-center", "justify-between", "p-2", "lg:p-4", "border-b", "border-white/10", "bg-gray-900/90", "lg:bg-transparent", "sticky", "top-0", "z-10", "rounded", "shadow-md"], [1, "text-[clamp(1rem,2.5vw,1.5rem)]", "font-bold", "text-white", "text-center", "flex-1"], [1, "ml-2", "p-2", "text-white", "hover:bg-white/10", "rounded", "transition-colors", 3, "click"], ["styleClass", "custom-scroll", 3, "style"], ["styleClass", "custom-scroll"], ["styleClass", "historique-table", 3, "value", "rowHover"], ["pTemplate", "header"], ["pTemplate", "body"], ["severity", "danger", 1, "badge-del", "cursor-pointer", "hover:scale-110", "inline-block", 3, "click", "value"]], template: function ScoreManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "div", 0);
      \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "p-scrollPanel", 3)(4, "div", 4);
      \u0275\u0275repeaterCreate(5, ScoreManagementComponent_For_6_Template, 6, 4, "div", 5, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 6)(8, "div", 7);
      \u0275\u0275text(9, " Modification des rangs ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 8)(11, "div", 9);
      \u0275\u0275conditionalCreate(12, ScoreManagementComponent_Conditional_12_Template, 1, 2, "img", 10)(13, ScoreManagementComponent_Conditional_13_Template, 1, 1, "img", 11);
      \u0275\u0275elementStart(14, "div", 12)(15, "div", 13);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 14)(18, "span", 15);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "span", 15);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "span", 15);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "span", 15);
      \u0275\u0275text(25);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(26, "div", 16)(27, "div", 17)(28, "div", 18)(29, "label", 19);
      \u0275\u0275text(30, "Points \xE0 ajouter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "p-inputNumber", 20);
      \u0275\u0275twoWayListener("ngModelChange", function ScoreManagementComponent_Template_p_inputNumber_ngModelChange_31_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.valueToAdd, $event) || (ctx.valueToAdd = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 18)(33, "label", 21);
      \u0275\u0275text(34, "Victoire");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "p-toggleSwitch", 22);
      \u0275\u0275twoWayListener("ngModelChange", function ScoreManagementComponent_Template_p_toggleSwitch_ngModelChange_35_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.victory, $event) || (ctx.victory = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "div", 17)(37, "p-select", 23);
      \u0275\u0275listener("click", function ScoreManagementComponent_Template_p_select_click_37_listener() {
        return ctx.onConsoleSelected();
      });
      \u0275\u0275twoWayListener("ngModelChange", function ScoreManagementComponent_Template_p_select_ngModelChange_37_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedConsole, $event) || (ctx.selectedConsole = $event);
        return $event;
      });
      \u0275\u0275template(38, ScoreManagementComponent_ng_template_38_Template, 1, 1, "ng-template", 24)(39, ScoreManagementComponent_ng_template_39_Template, 4, 2, "ng-template", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(40, ScoreManagementComponent_Conditional_40_Template, 3, 3, "p-select", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "p-button", 27);
      \u0275\u0275listener("onClick", function ScoreManagementComponent_Template_p_button_onClick_41_listener() {
        return ctx.updatePlayer();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(42, "div", 28);
      \u0275\u0275conditionalCreate(43, ScoreManagementComponent_Conditional_43_Template, 7, 3, "div", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(44, "p-toast");
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(18, _c05));
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.ranks);
      \u0275\u0275advance(7);
      \u0275\u0275conditional((ctx.selectedRank == null ? null : ctx.selectedRank.picture) ? 12 : 13);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.selectedRank == null ? null : ctx.selectedRank.name);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("Points: ", ctx.selectedRank == null ? null : ctx.selectedRank.points);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("Classement: #", ctx.selectedRank == null ? null : ctx.selectedRank.rank);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("Victoires: ", ctx.selectedRank == null ? null : ctx.selectedRank.victory);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("Parties: ", ctx.historique.length);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.valueToAdd);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.victory);
      \u0275\u0275advance(2);
      \u0275\u0275property("options", ctx.consoles);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedConsole);
      \u0275\u0275property("showClear", true);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.selectedConsole != null && ctx.selectedConsole.name != "" ? 40 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("loading", ctx.loading)("disabled", ctx.isUpdateButtonAvailable());
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(19, _c13, !ctx.isHistoryVisible, ctx.isHistoryVisible));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.selectedRank != null && ctx.selectedRank.name != "" ? 43 : -1);
    }
  }, dependencies: [CommonModule, NgClass, ButtonModule, Button, PrimeTemplate, SelectModule, Select, ToastModule, Toast, InputNumberModule, InputNumber, ToggleSwitchModule, ToggleSwitch, BadgeModule, Badge, TableModule, Table, ScrollPanelModule, ScrollPanel, FormsModule, NgControlStatus, NgModel], styles: ["\n\n  .ranks-scroll .p-scrollpanel-wrapper {\n  border-right: none;\n}\n  .ranks-scroll .p-scrollpanel-bar {\n  background-color: rgba(255, 255, 255, 0.2);\n  opacity: 0.5;\n  transition: opacity 0.3s;\n}\n  .ranks-scroll .p-scrollpanel-bar:hover {\n  opacity: 0.8;\n}\n  .historique-table .p-datatable {\n  font-size: clamp(0.75rem, 1.5vw, 0.875rem);\n}\n  .historique-table .p-datatable-thead > tr > th {\n  background-color: rgba(64, 64, 64, 0.9);\n  color: white;\n  border: none;\n  padding: 0.5rem;\n}\n  .historique-table .p-datatable-thead > tr > th:last-child {\n  width: 3rem;\n  min-width: 3rem;\n}\n  .historique-table .p-datatable-tbody > tr {\n  background-color: rgba(64, 64, 64, 0.5);\n  color: white;\n  overflow: visible;\n}\n/*# sourceMappingURL=score-management.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScoreManagementComponent, [{
    type: Component,
    args: [{ selector: "app-score-management", imports: [
      CommonModule,
      ButtonModule,
      SelectModule,
      ToastModule,
      InputNumberModule,
      ToggleSwitchModule,
      BadgeModule,
      TableModule,
      ScrollPanelModule,
      FormsModule
    ], template: `<div class="fixed inset-0 w-full h-full bg-cover bg-center -z-10 blur-[3px]"
  style="background-image: url('http://localhost:8080/images/wallpapers/wallpaper4.jpeg');"></div>

<!-- Poolup Layout: Flex column on mobile, Grid on desktop (like Kart) -->
<div
  class="flex flex-col lg:grid lg:grid-cols-[minmax(250px,20%)_1fr_minmax(350px,30%)] h-screen w-full overflow-x-hidden overflow-y-auto lg:overflow-hidden relative bg-[rgba(45,45,45,0.7)]"
  style="background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px); background-size: 30px 30px;">

  <!-- Left Sidebar: Avatar List -->
  <div
    class="w-full h-48 lg:h-full p-4 bg-gray-900/60 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col overflow-hidden shrink-0">
    <p-scrollPanel [style]="{width: '100%', height: '100%'}" styleClass="ranks-scroll">
      <div class="flex flex-col gap-2">
        @for (rank of ranks; track $index) {
        <div
          class="flex items-center gap-4 p-3 rounded-lg bg-gray-700/80 cursor-pointer transition-all hover:bg-gray-600/90 hover:translate-x-1"
          [class.!bg-primary]="selectedRank?.name === rank.name" (click)="selectNewRank(rank)">
          @if (rank.picture) {
          <img [src]="'http://localhost:8080/images/players/' + rank.picture"
            class="w-[clamp(40px,5vw,60px)] h-[clamp(40px,5vw,60px)] object-cover rounded-full shrink-0"
            [alt]="rank.name" />
          } @else {
          <img src="http://localhost:8080/images/players/unknown.png"
            class="w-[clamp(40px,5vw,60px)] h-[clamp(40px,5vw,60px)] object-cover rounded-full shrink-0 opacity-50"
            [alt]="rank.name" />
          }
          <div class="flex-1 min-w-0">
            <span
              class="font-bold text-white text-[clamp(0.875rem,1.5vw,1rem)] whitespace-nowrap overflow-hidden text-ellipsis">{{
              rank.name }}</span>
          </div>
        </div>
        }
      </div>
    </p-scrollPanel>
  </div>

  <!-- Main Content: Details & Controls -->
  <div class="p-8 flex flex-col items-center gap-8 overflow-y-auto">
    <div class="text-[clamp(1.5rem,4vw,2.5rem)] font-bold text-white drop-shadow-md text-center mb-4">
      Modification des rangs
    </div>

    <div class="bg-gray-700/90 rounded-2xl p-8 shadow-2xl border border-white/10 backdrop-blur-sm w-full max-w-[800px]">
      <div class="flex items-center gap-8">
        @if (selectedRank?.picture) {
        <img [src]="'http://localhost:8080/images/players/' + selectedRank?.picture" [alt]="selectedRank?.name"
          class="w-[clamp(80px,10vw,120px)] h-[clamp(80px,10vw,120px)] rounded-full border-4 border-white/20 object-cover shrink-0" />
        } @else {
        <img src="http://localhost:8080/images/players/unknown.png" [alt]="selectedRank?.name"
          class="w-[clamp(80px,10vw,120px)] h-[clamp(80px,10vw,120px)] rounded-full border-4 border-white/20 object-cover shrink-0 opacity-50" />
        }
        <div class="flex-1 min-w-0">
          <div class="text-[clamp(1.25rem,3vw,2rem)] font-bold text-white mb-2">{{ selectedRank?.name }}</div>
          <div class="flex flex-wrap gap-4 text-white/80 text-[clamp(0.75rem,1.5vw,1rem)]">
            <span class="bg-black/20 px-3 py-1 rounded whitespace-nowrap">Points: {{ selectedRank?.points }}</span>
            <span class="bg-black/20 px-3 py-1 rounded whitespace-nowrap">Classement: #{{ selectedRank?.rank }}</span>
            <span class="bg-black/20 px-3 py-1 rounded whitespace-nowrap">Victoires: {{ selectedRank?.victory }}</span>
            <span class="bg-black/20 px-3 py-1 rounded whitespace-nowrap">Parties: {{ historique.length }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full max-w-[800px] flex flex-col gap-6 bg-gray-700/90 p-8 rounded-2xl border border-white/10">
      <div class="grid grid-cols-2 max-lg:grid-cols-1 gap-8 items-start">
        <div class="flex flex-col gap-2 text-white">
          <label for="pointToAdd" class="font-bold text-[clamp(0.75rem,1.5vw,0.9rem)] text-white/90">Points \xE0
            ajouter</label>
          <p-inputNumber inputId="pointToAdd" [(ngModel)]="valueToAdd" />
        </div>

        <div class="flex flex-col gap-2 text-white">
          <label class="font-bold text-[clamp(0.75rem,1.5vw,0.9rem)] text-white/90">Victoire</label>
          <p-toggleSwitch [(ngModel)]="victory" />
        </div>
      </div>

      <div class="grid grid-cols-2 max-lg:grid-cols-1 gap-8 items-start">
        <p-select (click)="onConsoleSelected()" styleClass="w-full" [options]="consoles" [(ngModel)]="selectedConsole"
          optionLabel="name" [showClear]="true" placeholder="Choisir une console">
          <ng-template pTemplate="selectedConsole">
            @if (selectedConsole) {
            <div class="flex items-center gap-2">
              <img [src]="'http://localhost:8080/images/consoles/' + selectedConsole.picture"
                class="w-[clamp(60px,8vw,100px)] h-[clamp(60px,8vw,100px)] object-contain" />
              <div>{{ selectedConsole.name }}</div>
            </div>
            }
          </ng-template>
          <ng-template let-selectedConsole pTemplate="item">
            <div class="flex items-center gap-2">
              <img [src]="'http://localhost:8080/images/consoles/' + selectedConsole.picture"
                class="w-[clamp(60px,8vw,100px)] h-[clamp(60px,8vw,100px)] object-contain" />
              <div>{{ selectedConsole.name }}</div>
            </div>
          </ng-template>
        </p-select>

        @if (selectedConsole != null && selectedConsole.name != '') {
        <p-select styleClass="w-full" [options]="cups" [(ngModel)]="selectedCups" optionLabel="name" [showClear]="true"
          placeholder="Choisir une coupe">
          <ng-template pTemplate="selectedCups">
            @if (selectedCups) {
            <div class="flex items-center gap-2">
              <img [src]="'http://localhost:8080/images/cups/'+ selectedConsole.name + '/' + selectedCups.picture"
                class="w-[clamp(60px,8vw,100px)] h-[clamp(60px,8vw,100px)] object-contain" />
              <div>{{ selectedCups.name }}</div>
            </div>
            }
          </ng-template>
          <ng-template let-selectedCups pTemplate="item">
            <div class="flex items-center gap-2">
              <img [src]="'http://localhost:8080/images/cups/'+ selectedConsole.name + '/' + selectedCups.picture"
                class="w-[clamp(60px,8vw,100px)] h-[clamp(60px,8vw,100px)] object-contain" />
              <div>{{ selectedCups.name }}</div>
            </div>
          </ng-template>
        </p-select>
        }
      </div>

      <p-button class="w-full mt-4" label="Mettre \xE0 jour" icon="pi pi-check" [loading]="loading"
        [disabled]="isUpdateButtonAvailable()" (onClick)="updatePlayer()" />
    </div>
  </div>

  <!-- Right Sidebar: History (Collapsible) -->
  <div
    class="w-full lg:h-full p-4 bg-gray-900/60 border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col overflow-hidden shrink-0"
    [ngClass]="{'h-16': !isHistoryVisible, 'h-64': isHistoryVisible}">
    @if (selectedRank != null && selectedRank.name != '') {
    <div class="h-full flex flex-col gap-4">
      <!-- Header with toggle button -->
      <div
        class="flex items-center justify-between p-2 lg:p-4 border-b border-white/10 bg-gray-900/90 lg:bg-transparent sticky top-0 z-10 rounded shadow-md">
        <div class="text-[clamp(1rem,2.5vw,1.5rem)] font-bold text-white text-center flex-1">
          Historique
        </div>
        <button (click)="isHistoryVisible = !isHistoryVisible"
          class="ml-2 p-2 text-white hover:bg-white/10 rounded transition-colors">
          <i [class]="isHistoryVisible ? 'pi pi-chevron-up' : 'pi pi-chevron-down'"></i>
        </button>
      </div>

      @if (isHistoryVisible) {
      <p-scrollPanel [style]="{width: '100%', height: '100%'}" styleClass="custom-scroll">
        <p-table [value]="historique" styleClass="historique-table" [rowHover]="true">
          <ng-template pTemplate="header">
            <tr>
              <th>Joueur</th>
              <th>Pts</th>
              <th>Console</th>
              <th>Coupe</th>
              <th></th>
            </tr>
          </ng-template>
          <ng-template pTemplate="body" let-line>
            <tr>
              <td>{{ line.player.name }}</td>
              <td>{{ line.points }}</td>
              <td>{{ line.console.name }}</td>
              <td>{{ line.cups.name }}</td>
              <td><p-badge [value]="'X'" severity="danger" class="badge-del cursor-pointer hover:scale-110 inline-block"
                  (click)="deleteHistorique(line)" /></td>
            </tr>
          </ng-template>
        </p-table>
      </p-scrollPanel>
      }
    </div>
    }
  </div>

</div>

<p-toast />`, styles: ["/* src/app/component/score-management/score-management.component.scss */\n::ng-deep .ranks-scroll .p-scrollpanel-wrapper {\n  border-right: none;\n}\n::ng-deep .ranks-scroll .p-scrollpanel-bar {\n  background-color: rgba(255, 255, 255, 0.2);\n  opacity: 0.5;\n  transition: opacity 0.3s;\n}\n::ng-deep .ranks-scroll .p-scrollpanel-bar:hover {\n  opacity: 0.8;\n}\n::ng-deep .historique-table .p-datatable {\n  font-size: clamp(0.75rem, 1.5vw, 0.875rem);\n}\n::ng-deep .historique-table .p-datatable-thead > tr > th {\n  background-color: rgba(64, 64, 64, 0.9);\n  color: white;\n  border: none;\n  padding: 0.5rem;\n}\n::ng-deep .historique-table .p-datatable-thead > tr > th:last-child {\n  width: 3rem;\n  min-width: 3rem;\n}\n::ng-deep .historique-table .p-datatable-tbody > tr {\n  background-color: rgba(64, 64, 64, 0.5);\n  color: white;\n  overflow: visible;\n}\n/*# sourceMappingURL=score-management.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScoreManagementComponent, { className: "ScoreManagementComponent", filePath: "src/app/component/score-management/score-management.component.ts", lineNumber: 28 });
})();

// src/app/component/console-wheel/console-wheel.component.ts
var _c06 = () => ({ "width": "3rem", "height": "3rem" });
var _c14 = (a0) => ({ "grid-template-columns": a0 });
function ConsoleWheelComponent_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "p-image", 10);
    \u0275\u0275elementStart(4, "div", 11);
    \u0275\u0275element(5, "p-image", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const console_r1 = ctx.$implicit;
    const \u0275$index_18_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(console_r1.name);
    \u0275\u0275advance();
    \u0275\u0275property("src", "http://localhost:8080/images/consoles/" + console_r1.picture);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r2.allCupsImages[\u0275$index_18_r2]);
  }
}
function ConsoleWheelComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275repeaterCreate(1, ConsoleWheelComponent_Conditional_7_For_2_Template, 6, 3, "div", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(1, _c14, ctx_r2.calculateConsolesPerLine() > 0 ? "repeat(" + ctx_r2.calculateConsolesPerLine() + ", 1fr)" : "1fr"));
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.consolesDisplayed);
  }
}
var ConsoleWheelComponent = class _ConsoleWheelComponent {
  apiService;
  consoles = [];
  consolesDisplayed = [];
  isLoading = false;
  allCupsImages = [];
  isConsolesVisible = true;
  constructor(apiService) {
    this.apiService = apiService;
  }
  ngOnInit() {
    this.loadConsoles();
  }
  loadConsoles() {
    this.apiService.get("consoles").subscribe((data) => {
      if (data) {
        this.consoles = data;
        this.consolesDisplayed = [...this.consoles];
        this.initializeCupsImages();
      }
    });
  }
  initializeCupsImages() {
    this.allCupsImages = this.consolesDisplayed.map(() => "http://localhost:8080/images/ui/intero.png");
  }
  onSpin() {
    this.isLoading = true;
    this.initializeCupsImages();
    let spinCount = 0;
    const maxSpins = 20;
    const interval = setInterval(() => {
      this.consolesDisplayed = this.shuffleArray([...this.consoles]);
      spinCount++;
      if (spinCount >= maxSpins) {
        clearInterval(interval);
        this.isLoading = false;
        this.revealCups();
      }
    }, 100);
  }
  revealCups() {
    this.consolesDisplayed.forEach((console2, index) => {
      setTimeout(() => {
        if (console2.cups && console2.cups.length > 0) {
          const randomCupIndex = Math.floor(Math.random() * console2.cups.length);
          this.allCupsImages[index] = "http://localhost:8080/images/cups/" + console2.name + "/" + console2.cups[randomCupIndex].picture;
        }
      }, index * 500);
    });
  }
  shuffleArray(array) {
    for (let i29 = array.length - 1; i29 > 0; i29--) {
      const j = Math.floor(Math.random() * (i29 + 1));
      [array[i29], array[j]] = [array[j], array[i29]];
    }
    return array;
  }
  calculateConsolesPerLine() {
    const width = window.innerWidth;
    if (width < 1024)
      return 1;
    return Math.min(this.consolesDisplayed.length, 3);
  }
  static \u0275fac = function ConsoleWheelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConsoleWheelComponent)(\u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConsoleWheelComponent, selectors: [["app-console-wheel"]], decls: 8, vars: 6, consts: [[1, "fixed", "inset-0", "w-full", "h-full", "bg-cover", "bg-center", "-z-10", "blur-[3px]", 2, "background-image", "url('http://localhost:8080/images/wallpapers/wallpaper5.jpg')"], [1, "h-[93vh]", "w-full", "flex", "flex-col", "p-4", "overflow-hidden"], [1, "flex", "flex-col", "items-center", "gap-2", "mb-4"], [1, "relative", "flex", "justify-center", "items-center", "w-full", "max-w-[500px]"], ["styleClass", "consoling-button", "label", "Tourner la roue", 3, "click", "disabled"], [1, "absolute", "right-0"], ["styleClass", "p-button-rounded p-button-secondary", 3, "click", "icon"], [1, "flex", "flex-col", "lg:grid", "gap-4", "overflow-y-auto", "lg:overflow-visible", "flex-1", 3, "ngStyle"], [1, "h-auto", "lg:h-full", "text-white", "font-bold", "text-lg", "lg:text-xl", "bg-gray-700/90", "border-2", "border-gray-500", "rounded-xl", "lg:rounded-2xl", "flex", "flex-col", "items-center", "justify-between", "text-center", "p-6", "lg:p-4", "gap-4"], [1, "text-xl", "lg:text-lg"], ["alt", "console", "width", "120", 1, "flex-shrink-0", 3, "src"], [1, "bg-black/65", "w-[120px]", "h-[120px]", "flex", "flex-col", "items-center", "justify-center", "border-4", "border-yellow-400", "rounded-lg", "lg:rounded-xl"], ["width", "100", 1, "flex-shrink-0", 3, "src"]], template: function ConsoleWheelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "div", 0);
      \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "p-button", 4);
      \u0275\u0275listener("click", function ConsoleWheelComponent_Template_p_button_click_4_listener() {
        return ctx.onSpin();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 5)(6, "p-button", 6);
      \u0275\u0275listener("click", function ConsoleWheelComponent_Template_p_button_click_6_listener() {
        return ctx.isConsolesVisible = !ctx.isConsolesVisible;
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(7, ConsoleWheelComponent_Conditional_7_Template, 3, 3, "div", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance(2);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(5, _c06));
      \u0275\u0275property("icon", ctx.isConsolesVisible ? "pi pi-chevron-up" : "pi pi-chevron-down");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isConsolesVisible ? 7 : -1);
    }
  }, dependencies: [CommonModule, NgStyle, ButtonModule, Button, ImageModule, Image], styles: ["\n\n  .consoling-button .p-button {\n  background:\n    linear-gradient(\n      to right,\n      rgba(65, 65, 65, 0) 0%,\n      rgba(65, 65, 65, 0.9) 50%,\n      rgba(65, 65, 65, 0) 100%) !important;\n  border: none !important;\n  transition: transform 0.2s;\n}\n  .consoling-button .p-button:hover {\n  transform: scale(1.005);\n}\n/*# sourceMappingURL=console-wheel.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConsoleWheelComponent, [{
    type: Component,
    args: [{ selector: "app-console-wheel", imports: [CommonModule, ButtonModule, ImageModule], template: `<div class="fixed inset-0 w-full h-full bg-cover bg-center -z-10 blur-[3px]"\r
  style="background-image: url('http://localhost:8080/images/wallpapers/wallpaper5.jpg');"></div>\r
<div class="h-[93vh] w-full flex flex-col p-4 overflow-hidden">\r
\r
  <!-- Button with toggle for consoles list -->\r
  <div class="flex flex-col items-center gap-2 mb-4">\r
    <div class="relative flex justify-center items-center w-full max-w-[500px]">\r
      <p-button styleClass="consoling-button" [disabled]="isLoading" label="Tourner la roue" (click)="onSpin()">\r
      </p-button>\r
\r
      <div class="absolute right-0">\r
        <p-button (click)="isConsolesVisible = !isConsolesVisible"\r
          [icon]="isConsolesVisible ? 'pi pi-chevron-up' : 'pi pi-chevron-down'"\r
          styleClass="p-button-rounded p-button-secondary" [style]="{'width': '3rem', 'height': '3rem'}">\r
        </p-button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Collapsible Consoles List - Vertical on mobile, Grid on desktop -->\r
  @if (isConsolesVisible) {\r
  <div class="flex flex-col lg:grid gap-4 overflow-y-auto lg:overflow-visible flex-1"\r
    [ngStyle]="{'grid-template-columns': calculateConsolesPerLine() > 0 ? 'repeat(' + calculateConsolesPerLine() + ', 1fr)' : '1fr'}">\r
    @for (console of consolesDisplayed; track console; let index = $index) {\r
    <div\r
      class="h-auto lg:h-full text-white font-bold text-lg lg:text-xl bg-gray-700/90 border-2 border-gray-500 rounded-xl lg:rounded-2xl flex flex-col items-center justify-between text-center p-6 lg:p-4 gap-4">\r
      <div class="text-xl lg:text-lg">{{ console.name }}</div>\r
      <p-image [src]="'http://localhost:8080/images/consoles/' + console.picture" alt="console" width="120"\r
        class="flex-shrink-0"></p-image>\r
\r
      <div\r
        class="bg-black/65 w-[120px] h-[120px] flex flex-col items-center justify-center border-4 border-yellow-400 rounded-lg lg:rounded-xl">\r
        <p-image [src]="allCupsImages[index]" width="100" class="flex-shrink-0" />\r
      </div>\r
    </div>\r
    }\r
  </div>\r
  }\r
</div>`, styles: ["/* src/app/component/console-wheel/console-wheel.component.scss */\n::ng-deep .consoling-button .p-button {\n  background:\n    linear-gradient(\n      to right,\n      rgba(65, 65, 65, 0) 0%,\n      rgba(65, 65, 65, 0.9) 50%,\n      rgba(65, 65, 65, 0) 100%) !important;\n  border: none !important;\n  transition: transform 0.2s;\n}\n::ng-deep .consoling-button .p-button:hover {\n  transform: scale(1.005);\n}\n/*# sourceMappingURL=console-wheel.component.css.map */\n"] }]
  }], () => [{ type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConsoleWheelComponent, { className: "ConsoleWheelComponent", filePath: "src/app/component/console-wheel/console-wheel.component.ts", lineNumber: 14 });
})();

// src/app/component/console-management/console-management.component.ts
function ConsoleManagementComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "p-image", 8);
    \u0275\u0275elementStart(2, "label", 9);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-inputNumber", 10);
    \u0275\u0275twoWayListener("ngModelChange", function ConsoleManagementComponent_For_9_Template_p_inputNumber_ngModelChange_4_listener($event) {
      const \u0275$index_16_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.consolesValues[\u0275$index_16_r2], $event) || (ctx_r2.consolesValues[\u0275$index_16_r2] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const counter_r4 = ctx.$implicit;
    const \u0275$index_16_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", "http://localhost:8080/images/consoles/" + counter_r4.name + ".png");
    \u0275\u0275advance();
    \u0275\u0275property("for", "console_" + \u0275$index_16_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Console ", counter_r4.name);
    \u0275\u0275advance();
    \u0275\u0275property("inputId", "console_" + \u0275$index_16_r2)("name", "console_" + \u0275$index_16_r2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.consolesValues[\u0275$index_16_r2]);
  }
}
var ConsoleManagementComponent = class _ConsoleManagementComponent {
  apiService;
  messageService;
  counters = [];
  consolesValues = [];
  constructor(apiService, messageService) {
    this.apiService = apiService;
    this.messageService = messageService;
  }
  ngOnInit() {
    this.loadCounters();
  }
  loadCounters() {
    this.apiService.get("counters").subscribe((counters) => {
      if (counters) {
        this.counters = counters;
        this.consolesValues = this.counters.map((c27) => c27.counter);
      }
    });
  }
  onSaveCounters() {
    this.counters.forEach((counter, index) => {
      counter.counter = this.consolesValues[index];
    });
    this.apiService.post("counters", this.counters).subscribe((response) => {
      if (response) {
        this.messageService.add({
          severity: "success",
          summary: "Succ\xE8s",
          detail: "Les compteurs ont \xE9t\xE9 mis \xE0 jour"
        });
      }
    });
  }
  static \u0275fac = function ConsoleManagementComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConsoleManagementComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConsoleManagementComponent, selectors: [["app-console-management"]], decls: 11, vars: 0, consts: [[1, "fixed", "inset-0", "w-full", "h-full", "bg-cover", "bg-center", "-z-10", "blur-[3px]", 2, "background-image", "url('http://localhost:8080/images/wallpapers/wallpaper4.jpeg')"], [1, "w-full", "h-[93vh]", "bg-[rgba(45,45,45,0.7)]", "flex", "flex-col", "p-4", "overflow-hidden", 2, "background-image", "linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)", "background-size", "30px 30px"], [1, "flex", "flex-col", "items-center", "gap-4", "mb-4", "shrink-0"], [1, "h-20", "w-full", "max-w-[400px]", "text-white", "font-bold", "text-3xl", "flex", "flex-col", "justify-center", "items-center", "bg-gray-700/90", "rounded-xl", "shadow-lg", "border-2", "border-gray-500"], ["label", "Sauvegarder", 3, "click"], [1, "flex-1", "overflow-y-auto", "w-full", "flex", "justify-center"], [1, "flex", "flex-col", "lg:flex-row", "lg:justify-between", "items-center", "lg:items-end", "gap-6", "lg:gap-8", "w-full", "max-w-[90%]", "lg:max-w-[95%]", "h-auto", "lg:h-[300px]", "bg-gray-700/90", "rounded-xl", "shadow-lg", "border-2", "border-gray-500", "px-8", "py-6"], [1, "flex", "flex-col", "items-center", "justify-end", "text-center", "w-full", "lg:w-auto", "h-auto", "lg:h-full", "py-4", "lg:py-0"], ["styleClass", "max-w-full object-contain mb-3", "width", "120", 3, "src"], [1, "sr-only", 3, "for"], [3, "ngModelChange", "inputId", "name", "ngModel"]], template: function ConsoleManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "div", 0);
      \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275text(4, " Gestions des consoles ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p-button", 4);
      \u0275\u0275listener("click", function ConsoleManagementComponent_Template_p_button_click_5_listener() {
        return ctx.onSaveCounters();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 5)(7, "div", 6);
      \u0275\u0275repeaterCreate(8, ConsoleManagementComponent_For_9_Template, 5, 6, "div", 7, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(10, "p-toast");
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.counters);
    }
  }, dependencies: [CommonModule, FormsModule, NgControlStatus, NgModel, ImageModule, Image, InputNumberModule, InputNumber, ButtonModule, Button, ToastModule, Toast], styles: ["\n\n/*# sourceMappingURL=console-management.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConsoleManagementComponent, [{
    type: Component,
    args: [{ selector: "app-console-management", imports: [CommonModule, FormsModule, ImageModule, InputNumberModule, ButtonModule, ToastModule], template: `<div class="fixed inset-0 w-full h-full bg-cover bg-center -z-10 blur-[3px]"
  style="background-image: url('http://localhost:8080/images/wallpapers/wallpaper4.jpeg');"></div>
<div class="w-full h-[93vh] bg-[rgba(45,45,45,0.7)] flex flex-col p-4 overflow-hidden"
  style="background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px); background-size: 30px 30px;">

  <!-- Fixed Header with Title and Save Button -->
  <div class="flex flex-col items-center gap-4 mb-4 shrink-0">
    <div
      class="h-20 w-full max-w-[400px] text-white font-bold text-3xl flex flex-col justify-center items-center bg-gray-700/90 rounded-xl shadow-lg border-2 border-gray-500">
      Gestions des consoles
    </div>
    <p-button label="Sauvegarder" (click)="onSaveCounters()" />
  </div>

  <!-- Scrollable Content -->
  <div class="flex-1 overflow-y-auto w-full flex justify-center">
    <!-- Changed to flex-col on mobile, flex-row on lg+ -->
    <div
      class="flex flex-col lg:flex-row lg:justify-between items-center lg:items-end gap-6 lg:gap-8 w-full max-w-[90%] lg:max-w-[95%] h-auto lg:h-[300px] bg-gray-700/90 rounded-xl shadow-lg border-2 border-gray-500 px-8 py-6">
      @for (counter of counters; track counter; let index = $index) {
      <div class="flex flex-col items-center justify-end text-center w-full lg:w-auto h-auto lg:h-full py-4 lg:py-0">
        <p-image styleClass="max-w-full object-contain mb-3"
          [src]="'http://localhost:8080/images/consoles/'+ counter.name + '.png'" width="120"></p-image>
        <label [for]="'console_' + index" class="sr-only">Console {{counter.name}}</label>
        <p-inputNumber [inputId]="'console_' + index" [name]="'console_' + index"
          [(ngModel)]="consolesValues[index]"></p-inputNumber>
      </div>
      }
    </div>
  </div>
</div>

<p-toast />`, styles: ["/* src/app/component/console-management/console-management.component.scss */\n/*# sourceMappingURL=console-management.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConsoleManagementComponent, { className: "ConsoleManagementComponent", filePath: "src/app/component/console-management/console-management.component.ts", lineNumber: 19 });
})();

// src/app/app.routes.ts
var routes = [
  { path: "ranking", component: RankingComponent },
  { path: "champion-wheel", component: ChampionWheelComponent },
  { path: "score-management", component: ScoreManagementComponent },
  { path: "console-wheel", component: ConsoleWheelComponent },
  { path: "console-management", component: ConsoleManagementComponent },
  { path: "player-management", loadComponent: () => import("./chunk-QIQVDOWQ.js").then((m5) => m5.PlayerManagementComponent) },
  { path: "admin", loadComponent: () => import("./chunk-RJN2JKW6.js").then((m5) => m5.AdminComponent) },
  { path: "", redirectTo: "ranking", pathMatch: "full" },
  { path: "**", redirectTo: "ranking" }
];

// node_modules/@primeuix/themes/dist/aura/accordion/index.mjs
var o = { transitionDuration: "{transition.duration}" };
var r = { borderWidth: "0 0 1px 0", borderColor: "{content.border.color}" };
var t = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}", padding: "1.125rem", fontWeight: "600", borderRadius: "0", borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", hoverBackground: "{content.background}", activeBackground: "{content.background}", activeHoverBackground: "{content.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, toggleIcon: { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{text.color}", activeHoverColor: "{text.color}" }, first: { topBorderRadius: "{content.border.radius}", borderWidth: "0" }, last: { bottomBorderRadius: "{content.border.radius}", activeBottomBorderRadius: "0" } };
var e = { borderWidth: "0", borderColor: "{content.border.color}", background: "{content.background}", color: "{text.color}", padding: "0 1.125rem 1.125rem 1.125rem" };
var c = { root: o, panel: r, header: t, content: e };

// node_modules/@primeuix/themes/dist/aura/autocomplete/index.mjs
var o2 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" };
var r2 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var d = { padding: "{list.padding}", gap: "{list.gap}" };
var e2 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var l = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" };
var i = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var c2 = { borderRadius: "{border.radius.sm}" };
var f = { padding: "{list.option.padding}" };
var s2 = { light: { chip: { focusBackground: "{surface.200}", focusColor: "{surface.800}" }, dropdown: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", focusColor: "{surface.0}" }, dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" } } };
var a = { root: o2, overlay: r2, list: d, option: e2, optionGroup: l, dropdown: i, chip: c2, emptyMessage: f, colorScheme: s2 };

// node_modules/@primeuix/themes/dist/aura/avatar/index.mjs
var e3 = { width: "2rem", height: "2rem", fontSize: "1rem", background: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" };
var r3 = { size: "1rem" };
var o3 = { borderColor: "{content.background}", offset: "-0.75rem" };
var t2 = { width: "3rem", height: "3rem", fontSize: "1.5rem", icon: { size: "1.5rem" }, group: { offset: "-1rem" } };
var i2 = { width: "4rem", height: "4rem", fontSize: "2rem", icon: { size: "2rem" }, group: { offset: "-1.5rem" } };
var n = { root: e3, icon: r3, group: o3, lg: t2, xl: i2 };

// node_modules/@primeuix/themes/dist/aura/badge/index.mjs
var r4 = { borderRadius: "{border.radius.md}", padding: "0 0.5rem", fontSize: "0.75rem", fontWeight: "700", minWidth: "1.5rem", height: "1.5rem" };
var o4 = { size: "0.5rem" };
var e4 = { fontSize: "0.625rem", minWidth: "1.25rem", height: "1.25rem" };
var c3 = { fontSize: "0.875rem", minWidth: "1.75rem", height: "1.75rem" };
var a2 = { fontSize: "1rem", minWidth: "2rem", height: "2rem" };
var n2 = { light: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.500}", color: "{surface.0}" }, info: { background: "{sky.500}", color: "{surface.0}" }, warn: { background: "{orange.500}", color: "{surface.0}" }, danger: { background: "{red.500}", color: "{surface.0}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "{primary.color}", color: "{primary.contrast.color}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "{green.400}", color: "{green.950}" }, info: { background: "{sky.400}", color: "{sky.950}" }, warn: { background: "{orange.400}", color: "{orange.950}" }, danger: { background: "{red.400}", color: "{red.950}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } };
var d2 = { root: r4, dot: o4, sm: e4, lg: c3, xl: a2, colorScheme: n2 };

// node_modules/@primeuix/themes/dist/aura/base/index.mjs
var r5 = { borderRadius: { none: "0", xs: "2px", sm: "4px", md: "6px", lg: "8px", xl: "12px" }, emerald: { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b", 950: "#022c22" }, green: { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d", 950: "#052e16" }, lime: { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314", 950: "#1a2e05" }, red: { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d", 950: "#450a0a" }, orange: { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12", 950: "#431407" }, amber: { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f", 950: "#451a03" }, yellow: { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12", 950: "#422006" }, teal: { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a", 950: "#042f2e" }, cyan: { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63", 950: "#083344" }, sky: { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e", 950: "#082f49" }, blue: { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a", 950: "#172554" }, indigo: { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81", 950: "#1e1b4b" }, violet: { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95", 950: "#2e1065" }, purple: { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87", 950: "#3b0764" }, fuchsia: { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75", 950: "#4a044e" }, pink: { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843", 950: "#500724" }, rose: { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337", 950: "#4c0519" }, slate: { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a", 950: "#020617" }, gray: { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827", 950: "#030712" }, zinc: { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b", 950: "#09090b" }, neutral: { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717", 950: "#0a0a0a" }, stone: { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917", 950: "#0c0a09" } };
var o5 = { transitionDuration: "0.2s", focusRing: { width: "1px", style: "solid", color: "{primary.color}", offset: "2px", shadow: "none" }, disabledOpacity: "0.6", iconSize: "1rem", anchorGutter: "2px", primary: { 50: "{emerald.50}", 100: "{emerald.100}", 200: "{emerald.200}", 300: "{emerald.300}", 400: "{emerald.400}", 500: "{emerald.500}", 600: "{emerald.600}", 700: "{emerald.700}", 800: "{emerald.800}", 900: "{emerald.900}", 950: "{emerald.950}" }, formField: { paddingX: "0.75rem", paddingY: "0.5rem", sm: { fontSize: "0.875rem", paddingX: "0.625rem", paddingY: "0.375rem" }, lg: { fontSize: "1.125rem", paddingX: "0.875rem", paddingY: "0.625rem" }, borderRadius: "{border.radius.md}", focusRing: { width: "0", style: "none", color: "transparent", offset: "0", shadow: "none" }, transitionDuration: "{transition.duration}" }, list: { padding: "0.25rem 0.25rem", gap: "2px", header: { padding: "0.5rem 1rem 0.25rem 1rem" }, option: { padding: "0.5rem 0.75rem", borderRadius: "{border.radius.sm}" }, optionGroup: { padding: "0.5rem 0.75rem", fontWeight: "600" } }, content: { borderRadius: "{border.radius.md}" }, mask: { transitionDuration: "0.3s" }, navigation: { list: { padding: "0.25rem 0.25rem", gap: "2px" }, item: { padding: "0.5rem 0.75rem", borderRadius: "{border.radius.sm}", gap: "0.5rem" }, submenuLabel: { padding: "0.5rem 0.75rem", fontWeight: "600" }, submenuIcon: { size: "0.875rem" } }, overlay: { select: { borderRadius: "{border.radius.md}", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, popover: { borderRadius: "{border.radius.md}", padding: "0.75rem", shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" }, modal: { borderRadius: "{border.radius.xl}", padding: "1.25rem", shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }, navigation: { shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)" } }, colorScheme: { light: { surface: { 0: "#ffffff", 50: "{slate.50}", 100: "{slate.100}", 200: "{slate.200}", 300: "{slate.300}", 400: "{slate.400}", 500: "{slate.500}", 600: "{slate.600}", 700: "{slate.700}", 800: "{slate.800}", 900: "{slate.900}", 950: "{slate.950}" }, primary: { color: "{primary.500}", contrastColor: "#ffffff", hoverColor: "{primary.600}", activeColor: "{primary.700}" }, highlight: { background: "{primary.50}", focusBackground: "{primary.100}", color: "{primary.700}", focusColor: "{primary.800}" }, mask: { background: "rgba(0,0,0,0.4)", color: "{surface.200}" }, formField: { background: "{surface.0}", disabledBackground: "{surface.200}", filledBackground: "{surface.50}", filledHoverBackground: "{surface.50}", filledFocusBackground: "{surface.50}", borderColor: "{surface.300}", hoverBorderColor: "{surface.400}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.400}", color: "{surface.700}", disabledColor: "{surface.500}", placeholderColor: "{surface.500}", invalidPlaceholderColor: "{red.600}", floatLabelColor: "{surface.500}", floatLabelFocusColor: "{primary.600}", floatLabelActiveColor: "{surface.500}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)" }, text: { color: "{surface.700}", hoverColor: "{surface.800}", mutedColor: "{surface.500}", hoverMutedColor: "{surface.600}" }, content: { background: "{surface.0}", hoverBackground: "{surface.100}", borderColor: "{surface.200}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, popover: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" }, modal: { background: "{surface.0}", borderColor: "{surface.200}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.100}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}" } }, optionGroup: { background: "transparent", color: "{text.muted.color}" } }, navigation: { item: { focusBackground: "{surface.100}", activeBackground: "{surface.100}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } }, submenuLabel: { background: "transparent", color: "{text.muted.color}" }, submenuIcon: { color: "{surface.400}", focusColor: "{surface.500}", activeColor: "{surface.500}" } } }, dark: { surface: { 0: "#ffffff", 50: "{zinc.50}", 100: "{zinc.100}", 200: "{zinc.200}", 300: "{zinc.300}", 400: "{zinc.400}", 500: "{zinc.500}", 600: "{zinc.600}", 700: "{zinc.700}", 800: "{zinc.800}", 900: "{zinc.900}", 950: "{zinc.950}" }, primary: { color: "{primary.400}", contrastColor: "{surface.900}", hoverColor: "{primary.300}", activeColor: "{primary.200}" }, highlight: { background: "color-mix(in srgb, {primary.400}, transparent 84%)", focusBackground: "color-mix(in srgb, {primary.400}, transparent 76%)", color: "rgba(255,255,255,.87)", focusColor: "rgba(255,255,255,.87)" }, mask: { background: "rgba(0,0,0,0.6)", color: "{surface.200}" }, formField: { background: "{surface.950}", disabledBackground: "{surface.700}", filledBackground: "{surface.800}", filledHoverBackground: "{surface.800}", filledFocusBackground: "{surface.800}", borderColor: "{surface.600}", hoverBorderColor: "{surface.500}", focusBorderColor: "{primary.color}", invalidBorderColor: "{red.300}", color: "{surface.0}", disabledColor: "{surface.400}", placeholderColor: "{surface.400}", invalidPlaceholderColor: "{red.400}", floatLabelColor: "{surface.400}", floatLabelFocusColor: "{primary.color}", floatLabelActiveColor: "{surface.400}", floatLabelInvalidColor: "{form.field.invalid.placeholder.color}", iconColor: "{surface.400}", shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)" }, text: { color: "{surface.0}", hoverColor: "{surface.0}", mutedColor: "{surface.400}", hoverMutedColor: "{surface.300}" }, content: { background: "{surface.900}", hoverBackground: "{surface.800}", borderColor: "{surface.700}", color: "{text.color}", hoverColor: "{text.hover.color}" }, overlay: { select: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, popover: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" }, modal: { background: "{surface.900}", borderColor: "{surface.700}", color: "{text.color}" } }, list: { option: { focusBackground: "{surface.800}", selectedBackground: "{highlight.background}", selectedFocusBackground: "{highlight.focus.background}", color: "{text.color}", focusColor: "{text.hover.color}", selectedColor: "{highlight.color}", selectedFocusColor: "{highlight.focus.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}" } }, optionGroup: { background: "transparent", color: "{text.muted.color}" } }, navigation: { item: { focusBackground: "{surface.800}", activeBackground: "{surface.800}", color: "{text.color}", focusColor: "{text.hover.color}", activeColor: "{text.hover.color}", icon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } }, submenuLabel: { background: "transparent", color: "{text.muted.color}" }, submenuIcon: { color: "{surface.500}", focusColor: "{surface.400}", activeColor: "{surface.400}" } } } } };
var e5 = { primitive: r5, semantic: o5 };

// node_modules/@primeuix/themes/dist/aura/blockui/index.mjs
var r6 = { borderRadius: "{content.border.radius}" };
var o6 = { root: r6 };

// node_modules/@primeuix/themes/dist/aura/breadcrumb/index.mjs
var o7 = { padding: "1rem", background: "{content.background}", gap: "0.5rem", transitionDuration: "{transition.duration}" };
var r7 = { color: "{text.muted.color}", hoverColor: "{text.color}", borderRadius: "{content.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", hoverColor: "{navigation.item.icon.focus.color}" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var i3 = { color: "{navigation.item.icon.color}" };
var t3 = { root: o7, item: r7, separator: i3 };

// node_modules/@primeuix/themes/dist/aura/button/index.mjs
var r8 = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", gap: "0.5rem", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", iconOnlyWidth: "2.5rem", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}", iconOnlyWidth: "2rem" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}", iconOnlyWidth: "3rem" }, label: { fontWeight: "500" }, raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" }, badgeSize: "1rem", transitionDuration: "{form.field.transition.duration}" };
var o8 = { light: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", borderColor: "{surface.100}", hoverBorderColor: "{surface.200}", activeBorderColor: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}", focusRing: { color: "{surface.600}", shadow: "none" } }, info: { background: "{sky.500}", hoverBackground: "{sky.600}", activeBackground: "{sky.700}", borderColor: "{sky.500}", hoverBorderColor: "{sky.600}", activeBorderColor: "{sky.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{sky.500}", shadow: "none" } }, success: { background: "{green.500}", hoverBackground: "{green.600}", activeBackground: "{green.700}", borderColor: "{green.500}", hoverBorderColor: "{green.600}", activeBorderColor: "{green.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{green.500}", shadow: "none" } }, warn: { background: "{orange.500}", hoverBackground: "{orange.600}", activeBackground: "{orange.700}", borderColor: "{orange.500}", hoverBorderColor: "{orange.600}", activeBorderColor: "{orange.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{orange.500}", shadow: "none" } }, help: { background: "{purple.500}", hoverBackground: "{purple.600}", activeBackground: "{purple.700}", borderColor: "{purple.500}", hoverBorderColor: "{purple.600}", activeBorderColor: "{purple.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{purple.500}", shadow: "none" } }, danger: { background: "{red.500}", hoverBackground: "{red.600}", activeBackground: "{red.700}", borderColor: "{red.500}", hoverBorderColor: "{red.600}", activeBorderColor: "{red.700}", color: "#ffffff", hoverColor: "#ffffff", activeColor: "#ffffff", focusRing: { color: "{red.500}", shadow: "none" } }, contrast: { background: "{surface.950}", hoverBackground: "{surface.900}", activeBackground: "{surface.800}", borderColor: "{surface.950}", hoverBorderColor: "{surface.900}", activeBorderColor: "{surface.800}", color: "{surface.0}", hoverColor: "{surface.0}", activeColor: "{surface.0}", focusRing: { color: "{surface.950}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", borderColor: "{primary.200}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", borderColor: "{green.200}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", borderColor: "{sky.200}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", borderColor: "{orange.200}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", borderColor: "{purple.200}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", borderColor: "{red.200}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.700}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", borderColor: "{surface.200}", color: "{surface.700}" } }, text: { primary: { hoverBackground: "{primary.50}", activeBackground: "{primary.100}", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.500}" }, success: { hoverBackground: "{green.50}", activeBackground: "{green.100}", color: "{green.500}" }, info: { hoverBackground: "{sky.50}", activeBackground: "{sky.100}", color: "{sky.500}" }, warn: { hoverBackground: "{orange.50}", activeBackground: "{orange.100}", color: "{orange.500}" }, help: { hoverBackground: "{purple.50}", activeBackground: "{purple.100}", color: "{purple.500}" }, danger: { hoverBackground: "{red.50}", activeBackground: "{red.100}", color: "{red.500}" }, contrast: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.950}" }, plain: { hoverBackground: "{surface.50}", activeBackground: "{surface.100}", color: "{surface.700}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } }, dark: { root: { primary: { background: "{primary.color}", hoverBackground: "{primary.hover.color}", activeBackground: "{primary.active.color}", borderColor: "{primary.color}", hoverBorderColor: "{primary.hover.color}", activeBorderColor: "{primary.active.color}", color: "{primary.contrast.color}", hoverColor: "{primary.contrast.color}", activeColor: "{primary.contrast.color}", focusRing: { color: "{primary.color}", shadow: "none" } }, secondary: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", borderColor: "{surface.800}", hoverBorderColor: "{surface.700}", activeBorderColor: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}", focusRing: { color: "{surface.300}", shadow: "none" } }, info: { background: "{sky.400}", hoverBackground: "{sky.300}", activeBackground: "{sky.200}", borderColor: "{sky.400}", hoverBorderColor: "{sky.300}", activeBorderColor: "{sky.200}", color: "{sky.950}", hoverColor: "{sky.950}", activeColor: "{sky.950}", focusRing: { color: "{sky.400}", shadow: "none" } }, success: { background: "{green.400}", hoverBackground: "{green.300}", activeBackground: "{green.200}", borderColor: "{green.400}", hoverBorderColor: "{green.300}", activeBorderColor: "{green.200}", color: "{green.950}", hoverColor: "{green.950}", activeColor: "{green.950}", focusRing: { color: "{green.400}", shadow: "none" } }, warn: { background: "{orange.400}", hoverBackground: "{orange.300}", activeBackground: "{orange.200}", borderColor: "{orange.400}", hoverBorderColor: "{orange.300}", activeBorderColor: "{orange.200}", color: "{orange.950}", hoverColor: "{orange.950}", activeColor: "{orange.950}", focusRing: { color: "{orange.400}", shadow: "none" } }, help: { background: "{purple.400}", hoverBackground: "{purple.300}", activeBackground: "{purple.200}", borderColor: "{purple.400}", hoverBorderColor: "{purple.300}", activeBorderColor: "{purple.200}", color: "{purple.950}", hoverColor: "{purple.950}", activeColor: "{purple.950}", focusRing: { color: "{purple.400}", shadow: "none" } }, danger: { background: "{red.400}", hoverBackground: "{red.300}", activeBackground: "{red.200}", borderColor: "{red.400}", hoverBorderColor: "{red.300}", activeBorderColor: "{red.200}", color: "{red.950}", hoverColor: "{red.950}", activeColor: "{red.950}", focusRing: { color: "{red.400}", shadow: "none" } }, contrast: { background: "{surface.0}", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{surface.0}", hoverBorderColor: "{surface.100}", activeBorderColor: "{surface.200}", color: "{surface.950}", hoverColor: "{surface.950}", activeColor: "{surface.950}", focusRing: { color: "{surface.0}", shadow: "none" } } }, outlined: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", borderColor: "{primary.700}", color: "{primary.color}" }, secondary: { hoverBackground: "rgba(255,255,255,0.04)", activeBackground: "rgba(255,255,255,0.16)", borderColor: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", borderColor: "{green.700}", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", borderColor: "{sky.700}", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", borderColor: "{orange.700}", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", borderColor: "{purple.700}", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", borderColor: "{red.700}", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.500}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{surface.600}", color: "{surface.0}" } }, text: { primary: { hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)", activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)", color: "{primary.color}" }, secondary: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.400}" }, success: { hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)", color: "{green.400}" }, info: { hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)", color: "{sky.400}" }, warn: { hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)", color: "{orange.400}" }, help: { hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)", color: "{purple.400}" }, danger: { hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)", activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)", color: "{red.400}" }, contrast: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" }, plain: { hoverBackground: "{surface.800}", activeBackground: "{surface.700}", color: "{surface.0}" } }, link: { color: "{primary.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" } } };
var e6 = { root: r8, colorScheme: o8 };

// node_modules/@primeuix/themes/dist/aura/card/index.mjs
var o9 = { background: "{content.background}", borderRadius: "{border.radius.xl}", color: "{content.color}", shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)" };
var r9 = { padding: "1.25rem", gap: "0.5rem" };
var t4 = { gap: "0.5rem" };
var e7 = { fontSize: "1.25rem", fontWeight: "500" };
var a3 = { color: "{text.muted.color}" };
var d3 = { root: o9, body: r9, caption: t4, title: e7, subtitle: a3 };

// node_modules/@primeuix/themes/dist/aura/carousel/index.mjs
var r10 = { transitionDuration: "{transition.duration}" };
var o10 = { gap: "0.25rem" };
var a4 = { padding: "1rem", gap: "0.5rem" };
var i4 = { width: "2rem", height: "0.5rem", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var c4 = { light: { indicator: { background: "{surface.200}", hoverBackground: "{surface.300}", activeBackground: "{primary.color}" } }, dark: { indicator: { background: "{surface.700}", hoverBackground: "{surface.600}", activeBackground: "{primary.color}" } } };
var t5 = { root: r10, content: o10, indicatorList: a4, indicator: i4, colorScheme: c4 };

// node_modules/@primeuix/themes/dist/aura/cascadeselect/index.mjs
var o11 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var r11 = { width: "2.5rem", color: "{form.field.icon.color}" };
var d4 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var l2 = { padding: "{list.padding}", gap: "{list.gap}", mobileIndent: "1rem" };
var e8 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", icon: { color: "{list.option.icon.color}", focusColor: "{list.option.icon.focus.color}", size: "0.875rem" } };
var i5 = { color: "{form.field.icon.color}" };
var f2 = { root: o11, dropdown: r11, overlay: d4, list: l2, option: e8, clearIcon: i5 };

// node_modules/@primeuix/themes/dist/aura/checkbox/index.mjs
var r12 = { borderRadius: "{border.radius.sm}", width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } };
var o12 = { size: "0.875rem", color: "{form.field.color}", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.75rem" }, lg: { size: "1rem" } };
var e9 = { root: r12, icon: o12 };

// node_modules/@primeuix/themes/dist/aura/chip/index.mjs
var o13 = { borderRadius: "16px", paddingX: "0.75rem", paddingY: "0.5rem", gap: "0.5rem", transitionDuration: "{transition.duration}" };
var r13 = { width: "2rem", height: "2rem" };
var e10 = { size: "1rem" };
var c5 = { size: "1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" } };
var i6 = { light: { root: { background: "{surface.100}", color: "{surface.800}" }, icon: { color: "{surface.800}" }, removeIcon: { color: "{surface.800}" } }, dark: { root: { background: "{surface.800}", color: "{surface.0}" }, icon: { color: "{surface.0}" }, removeIcon: { color: "{surface.0}" } } };
var s3 = { root: o13, image: r13, icon: e10, removeIcon: c5, colorScheme: i6 };

// node_modules/@primeuix/themes/dist/aura/colorpicker/index.mjs
var r14 = { transitionDuration: "{transition.duration}" };
var o14 = { width: "1.5rem", height: "1.5rem", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e11 = { shadow: "{overlay.popover.shadow}", borderRadius: "{overlay.popover.borderRadius}" };
var a5 = { light: { panel: { background: "{surface.800}", borderColor: "{surface.900}" }, handle: { color: "{surface.0}" } }, dark: { panel: { background: "{surface.900}", borderColor: "{surface.700}" }, handle: { color: "{surface.0}" } } };
var s4 = { root: r14, preview: o14, panel: e11, colorScheme: a5 };

// node_modules/@primeuix/themes/dist/aura/confirmdialog/index.mjs
var o15 = { size: "2rem", color: "{overlay.modal.color}" };
var e12 = { gap: "1rem" };
var r15 = { icon: o15, content: e12 };

// node_modules/@primeuix/themes/dist/aura/confirmpopup/index.mjs
var o16 = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" };
var r16 = { padding: "{overlay.popover.padding}", gap: "1rem" };
var e13 = { size: "1.5rem", color: "{overlay.popover.color}" };
var p = { gap: "0.5rem", padding: "0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}" };
var a6 = { root: o16, content: r16, icon: e13, footer: p };

// node_modules/@primeuix/themes/dist/aura/contextmenu/index.mjs
var o17 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" };
var i7 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var n3 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } };
var a7 = { mobileIndent: "1rem" };
var t6 = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" };
var r17 = { borderColor: "{content.border.color}" };
var c6 = { root: o17, list: i7, item: n3, submenu: a7, submenuIcon: t6, separator: r17 };

// node_modules/@primeuix/themes/dist/aura/datatable/index.mjs
var o18 = { transitionDuration: "{transition.duration}" };
var r18 = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var e14 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{datatable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var d5 = { fontWeight: "600" };
var t7 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var l3 = { borderColor: "{datatable.border.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var c7 = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var n4 = { fontWeight: "600" };
var a8 = { background: "{content.background}", borderColor: "{datatable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", sm: { padding: "0.375rem 0.5rem" }, lg: { padding: "1rem 1.25rem" } };
var i8 = { color: "{primary.color}" };
var s5 = { width: "0.5rem" };
var g = { width: "1px", color: "{primary.color}" };
var u = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" };
var b = { size: "2rem" };
var p2 = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var m = { inlineGap: "0.5rem", overlaySelect: { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" }, overlayPopover: { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}", gap: "0.5rem" }, rule: { borderColor: "{content.border.color}" }, constraintList: { padding: "{list.padding}", gap: "{list.gap}" }, constraint: { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", separator: { borderColor: "{content.border.color}" }, padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" } };
var h = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" };
var f3 = { borderColor: "{datatable.border.color}", borderWidth: "0 0 1px 0" };
var v = { light: { root: { borderColor: "{content.border.color}" }, row: { stripedBackground: "{surface.50}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, row: { stripedBackground: "{surface.950}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } };
var k = { root: o18, header: r18, headerCell: e14, columnTitle: d5, row: t7, bodyCell: l3, footerCell: c7, columnFooter: n4, footer: a8, dropPoint: i8, columnResizer: s5, resizeIndicator: g, sortIcon: u, loadingIcon: b, rowToggleButton: p2, filter: m, paginatorTop: h, paginatorBottom: f3, colorScheme: v };

// node_modules/@primeuix/themes/dist/aura/dataview/index.mjs
var o19 = { borderColor: "transparent", borderWidth: "0", borderRadius: "0", padding: "0" };
var r19 = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem", borderRadius: "0" };
var d6 = { background: "{content.background}", color: "{content.color}", borderColor: "transparent", borderWidth: "0", padding: "0", borderRadius: "0" };
var e15 = { background: "{content.background}", color: "{content.color}", borderColor: "{content.border.color}", borderWidth: "1px 0 0 0", padding: "0.75rem 1rem", borderRadius: "0" };
var t8 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" };
var n5 = { borderColor: "{content.border.color}", borderWidth: "1px 0 0 0" };
var c8 = { root: o19, header: r19, content: d6, footer: e15, paginatorTop: t8, paginatorBottom: n5 };

// node_modules/@primeuix/themes/dist/aura/datepicker/index.mjs
var o20 = { transitionDuration: "{transition.duration}" };
var r20 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.popover.shadow}", padding: "{overlay.popover.padding}" };
var e16 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", padding: "0 0 0.5rem 0" };
var c9 = { gap: "0.5rem", fontWeight: "500" };
var d7 = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" }, borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var n6 = { color: "{form.field.icon.color}" };
var t9 = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" };
var a9 = { hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}" };
var i9 = { borderColor: "{content.border.color}", gap: "{overlay.popover.padding}" };
var l4 = { margin: "0.5rem 0 0 0" };
var u2 = { padding: "0.25rem", fontWeight: "500", color: "{content.color}" };
var s6 = { hoverBackground: "{content.hover.background}", selectedBackground: "{primary.color}", rangeSelectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{primary.contrast.color}", rangeSelectedColor: "{highlight.color}", width: "2rem", height: "2rem", borderRadius: "50%", padding: "0.25rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var g2 = { margin: "0.5rem 0 0 0" };
var f4 = { padding: "0.375rem", borderRadius: "{content.border.radius}" };
var h2 = { margin: "0.5rem 0 0 0" };
var b2 = { padding: "0.375rem", borderRadius: "{content.border.radius}" };
var m2 = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}" };
var p3 = { padding: "0.5rem 0 0 0", borderColor: "{content.border.color}", gap: "0.5rem", buttonGap: "0.25rem" };
var v2 = { light: { dropdown: { background: "{surface.100}", hoverBackground: "{surface.200}", activeBackground: "{surface.300}", color: "{surface.600}", hoverColor: "{surface.700}", activeColor: "{surface.800}" }, today: { background: "{surface.200}", color: "{surface.900}" } }, dark: { dropdown: { background: "{surface.800}", hoverBackground: "{surface.700}", activeBackground: "{surface.600}", color: "{surface.300}", hoverColor: "{surface.200}", activeColor: "{surface.100}" }, today: { background: "{surface.700}", color: "{surface.0}" } } };
var k2 = { root: o20, panel: r20, header: e16, title: c9, dropdown: d7, inputIcon: n6, selectMonth: t9, selectYear: a9, group: i9, dayView: l4, weekDay: u2, date: s6, monthView: g2, month: f4, yearView: h2, year: b2, buttonbar: m2, timePicker: p3, colorScheme: v2 };

// node_modules/@primeuix/themes/dist/aura/dialog/index.mjs
var o21 = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", borderRadius: "{overlay.modal.border.radius}", shadow: "{overlay.modal.shadow}" };
var a10 = { padding: "{overlay.modal.padding}", gap: "0.5rem" };
var d8 = { fontSize: "1.25rem", fontWeight: "600" };
var r21 = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" };
var l5 = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}", gap: "0.5rem" };
var e17 = { root: o21, header: a10, title: d8, content: r21, footer: l5 };

// node_modules/@primeuix/themes/dist/aura/divider/index.mjs
var r22 = { borderColor: "{content.border.color}" };
var o22 = { background: "{content.background}", color: "{text.color}" };
var n7 = { margin: "1rem 0", padding: "0 1rem", content: { padding: "0 0.5rem" } };
var e18 = { margin: "0 1rem", padding: "0.5rem 0", content: { padding: "0.5rem 0" } };
var t10 = { root: r22, content: o22, horizontal: n7, vertical: e18 };

// node_modules/@primeuix/themes/dist/aura/dock/index.mjs
var r23 = { background: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.2)", padding: "0.5rem", borderRadius: "{border.radius.xl}" };
var o23 = { borderRadius: "{content.border.radius}", padding: "0.5rem", size: "3rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var d9 = { root: r23, item: o23 };

// node_modules/@primeuix/themes/dist/aura/drawer/index.mjs
var o24 = { background: "{overlay.modal.background}", borderColor: "{overlay.modal.border.color}", color: "{overlay.modal.color}", shadow: "{overlay.modal.shadow}" };
var a11 = { padding: "{overlay.modal.padding}" };
var d10 = { fontSize: "1.5rem", fontWeight: "600" };
var r24 = { padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}" };
var l6 = { padding: "{overlay.modal.padding}" };
var e19 = { root: o24, header: a11, title: d10, content: r24, footer: l6 };

// node_modules/@primeuix/themes/dist/aura/editor/index.mjs
var o25 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}" };
var r25 = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" };
var e20 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}", padding: "{list.padding}" };
var t11 = { focusBackground: "{list.option.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var d11 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" };
var l7 = { toolbar: o25, toolbarItem: r25, overlay: e20, overlayOption: t11, content: d11 };

// node_modules/@primeuix/themes/dist/aura/fieldset/index.mjs
var o26 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", padding: "0 1.125rem 1.125rem 1.125rem", transitionDuration: "{transition.duration}" };
var r26 = { background: "{content.background}", hoverBackground: "{content.hover.background}", color: "{content.color}", hoverColor: "{content.hover.color}", borderRadius: "{content.border.radius}", borderWidth: "1px", borderColor: "transparent", padding: "0.5rem 0.75rem", gap: "0.5rem", fontWeight: "600", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t12 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}" };
var n8 = { padding: "0" };
var e21 = { root: o26, legend: r26, toggleIcon: t12, content: n8 };

// node_modules/@primeuix/themes/dist/aura/fileupload/index.mjs
var r27 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" };
var o27 = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderColor: "unset", borderWidth: "0", borderRadius: "0", gap: "0.5rem" };
var e22 = { highlightBorderColor: "{primary.color}", padding: "0 1.125rem 1.125rem 1.125rem", gap: "1rem" };
var t13 = { padding: "1rem", gap: "1rem", borderColor: "{content.border.color}", info: { gap: "0.5rem" } };
var a12 = { gap: "0.5rem" };
var n9 = { height: "0.25rem" };
var d12 = { gap: "0.5rem" };
var i10 = { root: r27, header: o27, content: e22, file: t13, fileList: a12, progressbar: n9, basic: d12 };

// node_modules/@primeuix/themes/dist/aura/floatlabel/index.mjs
var o28 = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", activeColor: "{form.field.float.label.active.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", positionY: "{form.field.padding.y}", fontWeight: "500", active: { fontSize: "0.75rem", fontWeight: "400" } };
var i11 = { active: { top: "-1.25rem" } };
var r28 = { input: { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" }, active: { top: "{form.field.padding.y}" } };
var a13 = { borderRadius: "{border.radius.xs}", active: { background: "{form.field.background}", padding: "0 0.125rem" } };
var d13 = { root: o28, over: i11, in: r28, on: a13 };

// node_modules/@primeuix/themes/dist/aura/galleria/index.mjs
var o29 = { borderWidth: "1px", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", transitionDuration: "{transition.duration}" };
var r29 = { background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.100}", hoverColor: "{surface.0}", size: "3rem", gutter: "0.5rem", prev: { borderRadius: "50%" }, next: { borderRadius: "50%" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e23 = { size: "1.5rem" };
var t14 = { background: "{content.background}", padding: "1rem 0.25rem" };
var c10 = { size: "2rem", borderRadius: "{content.border.radius}", gutter: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var n10 = { size: "1rem" };
var a14 = { background: "rgba(0, 0, 0, 0.5)", color: "{surface.100}", padding: "1rem" };
var s7 = { gap: "0.5rem", padding: "1rem" };
var u3 = { width: "1rem", height: "1rem", activeBackground: "{primary.color}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var i12 = { background: "rgba(0, 0, 0, 0.5)" };
var d14 = { background: "rgba(255, 255, 255, 0.4)", hoverBackground: "rgba(255, 255, 255, 0.6)", activeBackground: "rgba(255, 255, 255, 0.9)" };
var g3 = { size: "3rem", gutter: "0.5rem", background: "rgba(255, 255, 255, 0.1)", hoverBackground: "rgba(255, 255, 255, 0.2)", color: "{surface.50}", hoverColor: "{surface.0}", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var f5 = { size: "1.5rem" };
var h3 = { light: { thumbnailNavButton: { hoverBackground: "{surface.100}", color: "{surface.600}", hoverColor: "{surface.700}" }, indicatorButton: { background: "{surface.200}", hoverBackground: "{surface.300}" } }, dark: { thumbnailNavButton: { hoverBackground: "{surface.700}", color: "{surface.400}", hoverColor: "{surface.0}" }, indicatorButton: { background: "{surface.700}", hoverBackground: "{surface.600}" } } };
var l8 = { root: o29, navButton: r29, navIcon: e23, thumbnailsContent: t14, thumbnailNavButton: c10, thumbnailNavButtonIcon: n10, caption: a14, indicatorList: s7, indicatorButton: u3, insetIndicatorList: i12, insetIndicatorButton: d14, closeButton: g3, closeButtonIcon: f5, colorScheme: h3 };

// node_modules/@primeuix/themes/dist/aura/iconfield/index.mjs
var o30 = { color: "{form.field.icon.color}" };
var r30 = { icon: o30 };

// node_modules/@primeuix/themes/dist/aura/iftalabel/index.mjs
var o31 = { color: "{form.field.float.label.color}", focusColor: "{form.field.float.label.focus.color}", invalidColor: "{form.field.float.label.invalid.color}", transitionDuration: "0.2s", positionX: "{form.field.padding.x}", top: "{form.field.padding.y}", fontSize: "0.75rem", fontWeight: "400" };
var l9 = { paddingTop: "1.5rem", paddingBottom: "{form.field.padding.y}" };
var i13 = { root: o31, input: l9 };

// node_modules/@primeuix/themes/dist/aura/image/index.mjs
var o32 = { transitionDuration: "{transition.duration}" };
var r31 = { icon: { size: "1.5rem" }, mask: { background: "{mask.background}", color: "{mask.color}" } };
var a15 = { position: { left: "auto", right: "1rem", top: "1rem", bottom: "auto" }, blur: "8px", background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)", borderWidth: "1px", borderRadius: "30px", padding: ".5rem", gap: "0.5rem" };
var i14 = { hoverBackground: "rgba(255,255,255,0.1)", color: "{surface.50}", hoverColor: "{surface.0}", size: "3rem", iconSize: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e24 = { root: o32, preview: r31, toolbar: a15, action: i14 };

// node_modules/@primeuix/themes/dist/aura/imagecompare/index.mjs
var o33 = { size: "15px", hoverSize: "30px", background: "rgba(255,255,255,0.3)", hoverBackground: "rgba(255,255,255,0.3)", borderColor: "unset", hoverBorderColor: "unset", borderWidth: "0", borderRadius: "50%", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "rgba(255,255,255,0.3)", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var r32 = { handle: o33 };

// node_modules/@primeuix/themes/dist/aura/inlinemessage/index.mjs
var r33 = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", gap: "0.5rem" };
var o34 = { fontWeight: "500" };
var e25 = { size: "1rem" };
var n11 = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)" }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)" }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)" }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)" }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)" }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)" }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)" }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)" }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)" }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)" } } };
var a16 = { root: r33, text: o34, icon: e25, colorScheme: n11 };

// node_modules/@primeuix/themes/dist/aura/inplace/index.mjs
var o35 = { padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{transition.duration}" };
var r34 = { hoverBackground: "{content.hover.background}", hoverColor: "{content.hover.color}" };
var n12 = { root: o35, display: r34 };

// node_modules/@primeuix/themes/dist/aura/inputchips/index.mjs
var o36 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}" };
var r35 = { borderRadius: "{border.radius.sm}" };
var d15 = { light: { chip: { focusBackground: "{surface.200}", color: "{surface.800}" } }, dark: { chip: { focusBackground: "{surface.700}", color: "{surface.0}" } } };
var f6 = { root: o36, chip: r35, colorScheme: d15 };

// node_modules/@primeuix/themes/dist/aura/inputgroup/index.mjs
var r36 = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.icon.color}", borderRadius: "{form.field.border.radius}", padding: "0.5rem", minWidth: "2.5rem" };
var o37 = { addon: r36 };

// node_modules/@primeuix/themes/dist/aura/inputnumber/index.mjs
var r37 = { transitionDuration: "{transition.duration}" };
var o38 = { width: "2.5rem", borderRadius: "{form.field.border.radius}", verticalPadding: "{form.field.padding.y}" };
var e26 = { light: { button: { background: "transparent", hoverBackground: "{surface.100}", activeBackground: "{surface.200}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.400}", hoverColor: "{surface.500}", activeColor: "{surface.600}" } }, dark: { button: { background: "transparent", hoverBackground: "{surface.800}", activeBackground: "{surface.700}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.border.color}", activeBorderColor: "{form.field.border.color}", color: "{surface.400}", hoverColor: "{surface.300}", activeColor: "{surface.200}" } } };
var a17 = { root: r37, button: o38, colorScheme: e26 };

// node_modules/@primeuix/themes/dist/aura/inputotp/index.mjs
var r38 = { gap: "0.5rem" };
var t15 = { width: "2.5rem", sm: { width: "2rem" }, lg: { width: "3rem" } };
var e27 = { root: r38, input: t15 };

// node_modules/@primeuix/themes/dist/aura/inputtext/index.mjs
var o39 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var d16 = { root: o39 };

// node_modules/@primeuix/themes/dist/aura/knob/index.mjs
var o40 = { transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var r39 = { background: "{primary.color}" };
var t16 = { background: "{content.border.color}" };
var n13 = { color: "{text.muted.color}" };
var c11 = { root: o40, value: r39, range: t16, text: n13 };

// node_modules/@primeuix/themes/dist/aura/listbox/index.mjs
var o41 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", borderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", shadow: "{form.field.shadow}", borderRadius: "{form.field.border.radius}", transitionDuration: "{form.field.transition.duration}" };
var r40 = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } };
var d17 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var i15 = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" };
var t17 = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" };
var e28 = { padding: "{list.option.padding}" };
var l10 = { light: { option: { stripedBackground: "{surface.50}" } }, dark: { option: { stripedBackground: "{surface.900}" } } };
var n14 = { root: o41, list: r40, option: d17, optionGroup: i15, checkmark: t17, emptyMessage: e28, colorScheme: l10 };

// node_modules/@primeuix/themes/dist/aura/megamenu/index.mjs
var o42 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", verticalOrientation: { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" }, horizontalOrientation: { padding: "0.5rem 0.75rem", gap: "0.5rem" }, transitionDuration: "{transition.duration}" };
var n15 = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" };
var i16 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } };
var a18 = { padding: "0", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", shadow: "{overlay.navigation.shadow}", gap: "0.5rem" };
var r41 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var t18 = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" };
var e29 = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" };
var c12 = { borderColor: "{content.border.color}" };
var d18 = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var g4 = { root: o42, baseItem: n15, item: i16, overlay: a18, submenu: r41, submenuLabel: t18, submenuIcon: e29, separator: c12, mobileButton: d18 };

// node_modules/@primeuix/themes/dist/aura/menu/index.mjs
var o43 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" };
var n16 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var a19 = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } };
var i17 = { padding: "{navigation.submenu.label.padding}", fontWeight: "{navigation.submenu.label.font.weight}", background: "{navigation.submenu.label.background}", color: "{navigation.submenu.label.color}" };
var t19 = { borderColor: "{content.border.color}" };
var r42 = { root: o43, list: n16, item: a19, submenuLabel: i17, separator: t19 };

// node_modules/@primeuix/themes/dist/aura/menubar/index.mjs
var o44 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.5rem 0.75rem", transitionDuration: "{transition.duration}" };
var i18 = { borderRadius: "{content.border.radius}", padding: "{navigation.item.padding}" };
var n17 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } };
var r43 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}", background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", mobileIndent: "1rem", icon: { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" } };
var a20 = { borderColor: "{content.border.color}" };
var t20 = { borderRadius: "50%", size: "1.75rem", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", hoverBackground: "{content.hover.background}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e30 = { root: o44, baseItem: i18, item: n17, submenu: r43, separator: a20, mobileButton: t20 };

// node_modules/@primeuix/themes/dist/aura/message/index.mjs
var o45 = { borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" };
var r44 = { padding: "0.5rem 0.75rem", gap: "0.5rem", sm: { padding: "0.375rem 0.625rem" }, lg: { padding: "0.625rem 0.875rem" } };
var e31 = { fontSize: "1rem", fontWeight: "500", sm: { fontSize: "0.875rem" }, lg: { fontSize: "1.125rem" } };
var n18 = { size: "1.125rem", sm: { size: "1rem" }, lg: { size: "1.25rem" } };
var l11 = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } };
var s8 = { size: "1rem", sm: { size: "0.875rem" }, lg: { size: "1.125rem" } };
var c13 = { root: { borderWidth: "1px" } };
var a21 = { content: { padding: "0" } };
var d19 = { light: { info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{blue.600}", shadow: "none" } }, outlined: { color: "{blue.600}", borderColor: "{blue.600}" }, simple: { color: "{blue.600}" } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{green.600}", shadow: "none" } }, outlined: { color: "{green.600}", borderColor: "{green.600}" }, simple: { color: "{green.600}" } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{yellow.600}", shadow: "none" } }, outlined: { color: "{yellow.600}", borderColor: "{yellow.600}" }, simple: { color: "{yellow.600}" } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{red.600}", shadow: "none" } }, outlined: { color: "{red.600}", borderColor: "{red.600}" }, simple: { color: "{red.600}" } }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.600}", shadow: "none" } }, outlined: { color: "{surface.500}", borderColor: "{surface.500}" }, simple: { color: "{surface.500}" } }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{surface.50}", shadow: "none" } }, outlined: { color: "{surface.950}", borderColor: "{surface.950}" }, simple: { color: "{surface.950}" } } }, dark: { info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{blue.500}", shadow: "none" } }, outlined: { color: "{blue.500}", borderColor: "{blue.500}" }, simple: { color: "{blue.500}" } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{green.500}", shadow: "none" } }, outlined: { color: "{green.500}", borderColor: "{green.500}" }, simple: { color: "{green.500}" } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{yellow.500}", shadow: "none" } }, outlined: { color: "{yellow.500}", borderColor: "{yellow.500}" }, simple: { color: "{yellow.500}" } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{red.500}", shadow: "none" } }, outlined: { color: "{red.500}", borderColor: "{red.500}" }, simple: { color: "{red.500}" } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.300}", shadow: "none" } }, outlined: { color: "{surface.400}", borderColor: "{surface.400}" }, simple: { color: "{surface.400}" } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{surface.950}", shadow: "none" } }, outlined: { color: "{surface.0}", borderColor: "{surface.0}" }, simple: { color: "{surface.0}" } } } };
var u4 = { root: o45, content: r44, text: e31, icon: n18, closeButton: l11, closeIcon: s8, outlined: c13, simple: a21, colorScheme: d19 };

// node_modules/@primeuix/themes/dist/aura/metergroup/index.mjs
var e32 = { borderRadius: "{content.border.radius}", gap: "1rem" };
var r45 = { background: "{content.border.color}", size: "0.5rem" };
var a22 = { gap: "0.5rem" };
var o46 = { size: "0.5rem" };
var l12 = { size: "1rem" };
var t21 = { verticalGap: "0.5rem", horizontalGap: "1rem" };
var b3 = { root: e32, meters: r45, label: a22, labelMarker: o46, labelIcon: l12, labelList: t21 };

// node_modules/@primeuix/themes/dist/aura/multiselect/index.mjs
var o47 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var d20 = { width: "2.5rem", color: "{form.field.icon.color}" };
var r46 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var l13 = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } };
var i19 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}", gap: "0.5rem" };
var e33 = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" };
var f7 = { color: "{form.field.icon.color}" };
var a23 = { borderRadius: "{border.radius.sm}" };
var c14 = { padding: "{list.option.padding}" };
var n19 = { root: o47, dropdown: d20, overlay: r46, list: l13, option: i19, optionGroup: e33, chip: a23, clearIcon: f7, emptyMessage: c14 };

// node_modules/@primeuix/themes/dist/aura/orderlist/index.mjs
var r47 = { gap: "1.125rem" };
var a24 = { gap: "0.5rem" };
var o48 = { root: r47, controls: a24 };

// node_modules/@primeuix/themes/dist/aura/organizationchart/index.mjs
var o49 = { gutter: "0.75rem", transitionDuration: "{transition.duration}" };
var r48 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{content.border.color}", color: "{content.color}", selectedColor: "{highlight.color}", hoverColor: "{content.hover.color}", padding: "0.75rem 1rem", toggleablePadding: "0.75rem 1rem 1.25rem 1rem", borderRadius: "{content.border.radius}" };
var e34 = { background: "{content.background}", hoverBackground: "{content.hover.background}", borderColor: "{content.border.color}", color: "{text.muted.color}", hoverColor: "{text.color}", size: "1.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t22 = { color: "{content.border.color}", borderRadius: "{content.border.radius}", height: "24px" };
var n20 = { root: o49, node: r48, nodeToggleButton: e34, connector: t22 };

// node_modules/@primeuix/themes/dist/aura/overlaybadge/index.mjs
var o50 = { outline: { width: "2px", color: "{content.background}" } };
var t23 = { root: o50 };

// node_modules/@primeuix/themes/dist/aura/paginator/index.mjs
var o51 = { padding: "0.5rem 1rem", gap: "0.25rem", borderRadius: "{content.border.radius}", background: "{content.background}", color: "{content.color}", transitionDuration: "{transition.duration}" };
var r49 = { background: "transparent", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}", width: "2.5rem", height: "2.5rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t24 = { color: "{text.muted.color}" };
var e35 = { maxWidth: "2.5rem" };
var n21 = { root: o51, navButton: r49, currentPageReport: t24, jumpToPageInput: e35 };

// node_modules/@primeuix/themes/dist/aura/panel/index.mjs
var r50 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}" };
var o52 = { background: "transparent", color: "{text.color}", padding: "1.125rem", borderColor: "{content.border.color}", borderWidth: "0", borderRadius: "0" };
var e36 = { padding: "0.375rem 1.125rem" };
var d21 = { fontWeight: "600" };
var t25 = { padding: "0 1.125rem 1.125rem 1.125rem" };
var n22 = { padding: "0 1.125rem 1.125rem 1.125rem" };
var a25 = { root: r50, header: o52, toggleableHeader: e36, title: d21, content: t25, footer: n22 };

// node_modules/@primeuix/themes/dist/aura/panelmenu/index.mjs
var o53 = { gap: "0.5rem", transitionDuration: "{transition.duration}" };
var r51 = { background: "{content.background}", borderColor: "{content.border.color}", borderWidth: "1px", color: "{content.color}", padding: "0.25rem 0.25rem", borderRadius: "{content.border.radius}", first: { borderWidth: "1px", topBorderRadius: "{content.border.radius}" }, last: { borderWidth: "1px", bottomBorderRadius: "{content.border.radius}" } };
var n23 = { focusBackground: "{navigation.item.focus.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", gap: "0.5rem", padding: "{navigation.item.padding}", borderRadius: "{content.border.radius}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}" } };
var i20 = { indent: "1rem" };
var t26 = { color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}" };
var a26 = { root: o53, panel: r51, item: n23, submenu: i20, submenuIcon: t26 };

// node_modules/@primeuix/themes/dist/aura/password/index.mjs
var r52 = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: ".75rem" };
var o54 = { color: "{form.field.icon.color}" };
var e37 = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", borderRadius: "{overlay.popover.border.radius}", color: "{overlay.popover.color}", padding: "{overlay.popover.padding}", shadow: "{overlay.popover.shadow}" };
var a27 = { gap: "0.5rem" };
var d22 = { light: { strength: { weakBackground: "{red.500}", mediumBackground: "{amber.500}", strongBackground: "{green.500}" } }, dark: { strength: { weakBackground: "{red.400}", mediumBackground: "{amber.400}", strongBackground: "{green.400}" } } };
var n24 = { meter: r52, icon: o54, overlay: e37, content: a27, colorScheme: d22 };

// node_modules/@primeuix/themes/dist/aura/picklist/index.mjs
var r53 = { gap: "1.125rem" };
var a28 = { gap: "0.5rem" };
var o55 = { root: r53, controls: a28 };

// node_modules/@primeuix/themes/dist/aura/popover/index.mjs
var o56 = { background: "{overlay.popover.background}", borderColor: "{overlay.popover.border.color}", color: "{overlay.popover.color}", borderRadius: "{overlay.popover.border.radius}", shadow: "{overlay.popover.shadow}", gutter: "10px", arrowOffset: "1.25rem" };
var r54 = { padding: "{overlay.popover.padding}" };
var e38 = { root: o56, content: r54 };

// node_modules/@primeuix/themes/dist/aura/progressbar/index.mjs
var r55 = { background: "{content.border.color}", borderRadius: "{content.border.radius}", height: "1.25rem" };
var o57 = { background: "{primary.color}" };
var e39 = { color: "{primary.contrast.color}", fontSize: "0.75rem", fontWeight: "600" };
var t27 = { root: r55, value: o57, label: e39 };

// node_modules/@primeuix/themes/dist/aura/progressspinner/index.mjs
var o58 = { light: { root: { colorOne: "{red.500}", colorTwo: "{blue.500}", colorThree: "{green.500}", colorFour: "{yellow.500}" } }, dark: { root: { colorOne: "{red.400}", colorTwo: "{blue.400}", colorThree: "{green.400}", colorFour: "{yellow.400}" } } };
var r56 = { colorScheme: o58 };

// node_modules/@primeuix/themes/dist/aura/radiobutton/index.mjs
var o59 = { width: "1.25rem", height: "1.25rem", background: "{form.field.background}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.border.color}", checkedBorderColor: "{primary.color}", checkedHoverBorderColor: "{primary.hover.color}", checkedFocusBorderColor: "{primary.color}", checkedDisabledBorderColor: "{form.field.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { width: "1rem", height: "1rem" }, lg: { width: "1.5rem", height: "1.5rem" } };
var r57 = { size: "0.75rem", checkedColor: "{primary.contrast.color}", checkedHoverColor: "{primary.contrast.color}", disabledColor: "{form.field.disabled.color}", sm: { size: "0.5rem" }, lg: { size: "1rem" } };
var e40 = { root: o59, icon: r57 };

// node_modules/@primeuix/themes/dist/aura/rating/index.mjs
var o60 = { gap: "0.25rem", transitionDuration: "{transition.duration}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var r58 = { size: "1rem", color: "{text.muted.color}", hoverColor: "{primary.color}", activeColor: "{primary.color}" };
var i21 = { root: o60, icon: r58 };

// node_modules/@primeuix/themes/dist/aura/ripple/index.mjs
var r59 = { light: { root: { background: "rgba(0,0,0,0.1)" } }, dark: { root: { background: "rgba(255,255,255,0.3)" } } };
var o61 = { colorScheme: r59 };

// node_modules/@primeuix/themes/dist/aura/scrollpanel/index.mjs
var r60 = { transitionDuration: "{transition.duration}" };
var o62 = { size: "9px", borderRadius: "{border.radius.sm}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var s9 = { light: { bar: { background: "{surface.100}" } }, dark: { bar: { background: "{surface.800}" } } };
var a29 = { root: r60, bar: o62, colorScheme: s9 };

// node_modules/@primeuix/themes/dist/aura/select/index.mjs
var o63 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var r61 = { width: "2.5rem", color: "{form.field.icon.color}" };
var d23 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var l14 = { padding: "{list.padding}", gap: "{list.gap}", header: { padding: "{list.header.padding}" } };
var i22 = { focusBackground: "{list.option.focus.background}", selectedBackground: "{list.option.selected.background}", selectedFocusBackground: "{list.option.selected.focus.background}", color: "{list.option.color}", focusColor: "{list.option.focus.color}", selectedColor: "{list.option.selected.color}", selectedFocusColor: "{list.option.selected.focus.color}", padding: "{list.option.padding}", borderRadius: "{list.option.border.radius}" };
var e41 = { background: "{list.option.group.background}", color: "{list.option.group.color}", fontWeight: "{list.option.group.font.weight}", padding: "{list.option.group.padding}" };
var f8 = { color: "{form.field.icon.color}" };
var c15 = { color: "{list.option.color}", gutterStart: "-0.375rem", gutterEnd: "0.375rem" };
var a30 = { padding: "{list.option.padding}" };
var n25 = { root: o63, dropdown: r61, overlay: d23, list: l14, option: i22, optionGroup: e41, clearIcon: f8, checkmark: c15, emptyMessage: a30 };

// node_modules/@primeuix/themes/dist/aura/selectbutton/index.mjs
var r62 = { borderRadius: "{form.field.border.radius}" };
var o64 = { light: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } }, dark: { root: { invalidBorderColor: "{form.field.invalid.border.color}" } } };
var d24 = { root: r62, colorScheme: o64 };

// node_modules/@primeuix/themes/dist/aura/skeleton/index.mjs
var r63 = { borderRadius: "{content.border.radius}" };
var a31 = { light: { root: { background: "{surface.200}", animationBackground: "rgba(255,255,255,0.4)" } }, dark: { root: { background: "rgba(255, 255, 255, 0.06)", animationBackground: "rgba(255, 255, 255, 0.04)" } } };
var o65 = { root: r63, colorScheme: a31 };

// node_modules/@primeuix/themes/dist/aura/slider/index.mjs
var o66 = { transitionDuration: "{transition.duration}" };
var r64 = { background: "{content.border.color}", borderRadius: "{content.border.radius}", size: "3px" };
var n26 = { background: "{primary.color}" };
var t28 = { width: "20px", height: "20px", borderRadius: "50%", background: "{content.border.color}", hoverBackground: "{content.border.color}", content: { borderRadius: "50%", hoverBackground: "{content.background}", width: "16px", height: "16px", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)" }, focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e42 = { light: { handle: { content: { background: "{surface.0}" } } }, dark: { handle: { content: { background: "{surface.950}" } } } };
var a32 = { root: o66, track: r64, range: n26, handle: t28, colorScheme: e42 };

// node_modules/@primeuix/themes/dist/aura/speeddial/index.mjs
var t29 = { gap: "0.5rem", transitionDuration: "{transition.duration}" };
var a33 = { root: t29 };

// node_modules/@primeuix/themes/dist/aura/splitbutton/index.mjs
var r65 = { borderRadius: "{form.field.border.radius}", roundedBorderRadius: "2rem", raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)" };
var d25 = { root: r65 };

// node_modules/@primeuix/themes/dist/aura/splitter/index.mjs
var o67 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", transitionDuration: "{transition.duration}" };
var r66 = { background: "{content.border.color}" };
var n27 = { size: "24px", background: "transparent", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var t30 = { root: o67, gutter: r66, handle: n27 };

// node_modules/@primeuix/themes/dist/aura/stepper/index.mjs
var o68 = { transitionDuration: "{transition.duration}" };
var r67 = { background: "{content.border.color}", activeBackground: "{primary.color}", margin: "0 0 0 1.625rem", size: "2px" };
var e43 = { padding: "0.5rem", gap: "1rem" };
var t31 = { padding: "0", borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" };
var n28 = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" };
var a34 = { background: "{content.background}", activeBackground: "{content.background}", borderColor: "{content.border.color}", activeBorderColor: "{content.border.color}", color: "{text.muted.color}", activeColor: "{primary.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" };
var c16 = { padding: "0.875rem 0.5rem 1.125rem 0.5rem" };
var d26 = { background: "{content.background}", color: "{content.color}", padding: "0", indent: "1rem" };
var i23 = { root: o68, separator: r67, step: e43, stepHeader: t31, stepTitle: n28, stepNumber: a34, steppanels: c16, steppanel: d26 };

// node_modules/@primeuix/themes/dist/aura/steps/index.mjs
var o69 = { transitionDuration: "{transition.duration}" };
var r68 = { background: "{content.border.color}" };
var t32 = { borderRadius: "{content.border.radius}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, gap: "0.5rem" };
var e44 = { color: "{text.muted.color}", activeColor: "{primary.color}", fontWeight: "500" };
var n29 = { background: "{content.background}", activeBackground: "{content.background}", borderColor: "{content.border.color}", activeBorderColor: "{content.border.color}", color: "{text.muted.color}", activeColor: "{primary.color}", size: "2rem", fontSize: "1.143rem", fontWeight: "500", borderRadius: "50%", shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" };
var c17 = { root: o69, separator: r68, itemLink: t32, itemLabel: e44, itemNumber: n29 };

// node_modules/@primeuix/themes/dist/aura/tabmenu/index.mjs
var o70 = { transitionDuration: "{transition.duration}" };
var r69 = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" };
var t33 = { background: "transparent", hoverBackground: "transparent", activeBackground: "transparent", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", hoverBorderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.125rem", fontWeight: "600", margin: "0 0 -1px 0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var e45 = { color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" };
var c18 = { height: "1px", bottom: "-1px", background: "{primary.color}" };
var n30 = { root: o70, tablist: r69, item: t33, itemIcon: e45, activeBar: c18 };

// node_modules/@primeuix/themes/dist/aura/tabs/index.mjs
var o71 = { transitionDuration: "{transition.duration}" };
var r70 = { borderWidth: "0 0 1px 0", background: "{content.background}", borderColor: "{content.border.color}" };
var t34 = { background: "transparent", hoverBackground: "transparent", activeBackground: "transparent", borderWidth: "0 0 1px 0", borderColor: "{content.border.color}", hoverBorderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}", padding: "1rem 1.125rem", fontWeight: "600", margin: "0 0 -1px 0", gap: "0.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var n31 = { background: "{content.background}", color: "{content.color}", padding: "0.875rem 1.125rem 1.125rem 1.125rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "inset {focus.ring.shadow}" } };
var c19 = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", width: "2.5rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var e46 = { height: "1px", bottom: "-1px", background: "{primary.color}" };
var a35 = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } };
var i24 = { root: o71, tablist: r70, tab: t34, tabpanel: n31, navButton: c19, activeBar: e46, colorScheme: a35 };

// node_modules/@primeuix/themes/dist/aura/tabview/index.mjs
var o72 = { transitionDuration: "{transition.duration}" };
var r71 = { background: "{content.background}", borderColor: "{content.border.color}" };
var t35 = { borderColor: "{content.border.color}", activeBorderColor: "{primary.color}", color: "{text.muted.color}", hoverColor: "{text.color}", activeColor: "{primary.color}" };
var n32 = { background: "{content.background}", color: "{content.color}" };
var a36 = { background: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}" };
var c20 = { light: { navButton: { shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)" } }, dark: { navButton: { shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)" } } };
var e47 = { root: o72, tabList: r71, tab: t35, tabPanel: n32, navButton: a36, colorScheme: c20 };

// node_modules/@primeuix/themes/dist/aura/tag/index.mjs
var r72 = { fontSize: "0.875rem", fontWeight: "700", padding: "0.25rem 0.5rem", gap: "0.25rem", borderRadius: "{content.border.radius}", roundedBorderRadius: "{border.radius.xl}" };
var o73 = { size: "0.75rem" };
var a37 = { light: { primary: { background: "{primary.100}", color: "{primary.700}" }, secondary: { background: "{surface.100}", color: "{surface.600}" }, success: { background: "{green.100}", color: "{green.700}" }, info: { background: "{sky.100}", color: "{sky.700}" }, warn: { background: "{orange.100}", color: "{orange.700}" }, danger: { background: "{red.100}", color: "{red.700}" }, contrast: { background: "{surface.950}", color: "{surface.0}" } }, dark: { primary: { background: "color-mix(in srgb, {primary.500}, transparent 84%)", color: "{primary.300}" }, secondary: { background: "{surface.800}", color: "{surface.300}" }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", color: "{green.300}" }, info: { background: "color-mix(in srgb, {sky.500}, transparent 84%)", color: "{sky.300}" }, warn: { background: "color-mix(in srgb, {orange.500}, transparent 84%)", color: "{orange.300}" }, danger: { background: "color-mix(in srgb, {red.500}, transparent 84%)", color: "{red.300}" }, contrast: { background: "{surface.0}", color: "{surface.950}" } } };
var n33 = { root: r72, icon: o73, colorScheme: a37 };

// node_modules/@primeuix/themes/dist/aura/terminal/index.mjs
var r73 = { background: "{form.field.background}", borderColor: "{form.field.border.color}", color: "{form.field.color}", height: "18rem", padding: "{form.field.padding.y} {form.field.padding.x}", borderRadius: "{form.field.border.radius}" };
var o74 = { gap: "0.25rem" };
var d27 = { margin: "2px 0" };
var e48 = { root: r73, prompt: o74, commandResponse: d27 };

// node_modules/@primeuix/themes/dist/aura/textarea/index.mjs
var o75 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var d28 = { root: o75 };

// node_modules/@primeuix/themes/dist/aura/tieredmenu/index.mjs
var o76 = { background: "{content.background}", borderColor: "{content.border.color}", color: "{content.color}", borderRadius: "{content.border.radius}", shadow: "{overlay.navigation.shadow}", transitionDuration: "{transition.duration}" };
var i25 = { padding: "{navigation.list.padding}", gap: "{navigation.list.gap}" };
var n34 = { focusBackground: "{navigation.item.focus.background}", activeBackground: "{navigation.item.active.background}", color: "{navigation.item.color}", focusColor: "{navigation.item.focus.color}", activeColor: "{navigation.item.active.color}", padding: "{navigation.item.padding}", borderRadius: "{navigation.item.border.radius}", gap: "{navigation.item.gap}", icon: { color: "{navigation.item.icon.color}", focusColor: "{navigation.item.icon.focus.color}", activeColor: "{navigation.item.icon.active.color}" } };
var a38 = { mobileIndent: "1rem" };
var t36 = { size: "{navigation.submenu.icon.size}", color: "{navigation.submenu.icon.color}", focusColor: "{navigation.submenu.icon.focus.color}", activeColor: "{navigation.submenu.icon.active.color}" };
var r74 = { borderColor: "{content.border.color}" };
var c21 = { root: o76, list: i25, item: n34, submenu: a38, submenuIcon: t36, separator: r74 };

// node_modules/@primeuix/themes/dist/aura/timeline/index.mjs
var e49 = { minHeight: "5rem" };
var r75 = { eventContent: { padding: "1rem 0" } };
var o77 = { eventContent: { padding: "0 1rem" } };
var n35 = { size: "1.125rem", borderRadius: "50%", borderWidth: "2px", background: "{content.background}", borderColor: "{content.border.color}", content: { borderRadius: "50%", size: "0.375rem", background: "{primary.color}", insetShadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)" } };
var t37 = { color: "{content.border.color}", size: "2px" };
var d29 = { event: e49, horizontal: r75, vertical: o77, eventMarker: n35, eventConnector: t37 };

// node_modules/@primeuix/themes/dist/aura/toast/index.mjs
var o78 = { width: "25rem", borderRadius: "{content.border.radius}", borderWidth: "1px", transitionDuration: "{transition.duration}" };
var r76 = { size: "1.125rem" };
var e50 = { padding: "{overlay.popover.padding}", gap: "0.5rem" };
var n36 = { gap: "0.5rem" };
var a39 = { fontWeight: "500", fontSize: "1rem" };
var s10 = { fontWeight: "500", fontSize: "0.875rem" };
var c22 = { width: "1.75rem", height: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", offset: "{focus.ring.offset}" } };
var l15 = { size: "1rem" };
var t38 = { light: { root: { blur: "1.5px" }, info: { background: "color-mix(in srgb, {blue.50}, transparent 5%)", borderColor: "{blue.200}", color: "{blue.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "{blue.100}", focusRing: { color: "{blue.600}", shadow: "none" } } }, success: { background: "color-mix(in srgb, {green.50}, transparent 5%)", borderColor: "{green.200}", color: "{green.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "{green.100}", focusRing: { color: "{green.600}", shadow: "none" } } }, warn: { background: "color-mix(in srgb,{yellow.50}, transparent 5%)", borderColor: "{yellow.200}", color: "{yellow.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "{yellow.100}", focusRing: { color: "{yellow.600}", shadow: "none" } } }, error: { background: "color-mix(in srgb, {red.50}, transparent 5%)", borderColor: "{red.200}", color: "{red.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "{red.100}", focusRing: { color: "{red.600}", shadow: "none" } } }, secondary: { background: "{surface.100}", borderColor: "{surface.200}", color: "{surface.600}", detailColor: "{surface.700}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.200}", focusRing: { color: "{surface.600}", shadow: "none" } } }, contrast: { background: "{surface.900}", borderColor: "{surface.950}", color: "{surface.50}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.800}", focusRing: { color: "{surface.50}", shadow: "none" } } } }, dark: { root: { blur: "10px" }, info: { background: "color-mix(in srgb, {blue.500}, transparent 84%)", borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)", color: "{blue.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{blue.500}", shadow: "none" } } }, success: { background: "color-mix(in srgb, {green.500}, transparent 84%)", borderColor: "color-mix(in srgb, {green.700}, transparent 64%)", color: "{green.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{green.500}", shadow: "none" } } }, warn: { background: "color-mix(in srgb, {yellow.500}, transparent 84%)", borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)", color: "{yellow.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{yellow.500}", shadow: "none" } } }, error: { background: "color-mix(in srgb, {red.500}, transparent 84%)", borderColor: "color-mix(in srgb, {red.700}, transparent 64%)", color: "{red.500}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)", closeButton: { hoverBackground: "rgba(255, 255, 255, 0.05)", focusRing: { color: "{red.500}", shadow: "none" } } }, secondary: { background: "{surface.800}", borderColor: "{surface.700}", color: "{surface.300}", detailColor: "{surface.0}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)", closeButton: { hoverBackground: "{surface.700}", focusRing: { color: "{surface.300}", shadow: "none" } } }, contrast: { background: "{surface.0}", borderColor: "{surface.100}", color: "{surface.950}", detailColor: "{surface.950}", shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)", closeButton: { hoverBackground: "{surface.100}", focusRing: { color: "{surface.950}", shadow: "none" } } } } };
var u5 = { root: o78, icon: r76, content: e50, text: n36, summary: a39, detail: s10, closeButton: c22, closeIcon: l15, colorScheme: t38 };

// node_modules/@primeuix/themes/dist/aura/togglebutton/index.mjs
var r77 = { padding: "0.25rem", borderRadius: "{content.border.radius}", gap: "0.5rem", fontWeight: "500", disabledBackground: "{form.field.disabled.background}", disabledBorderColor: "{form.field.disabled.background}", disabledColor: "{form.field.disabled.color}", invalidBorderColor: "{form.field.invalid.border.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", padding: "0.25rem" }, lg: { fontSize: "{form.field.lg.font.size}", padding: "0.25rem" } };
var o79 = { disabledColor: "{form.field.disabled.color}" };
var e51 = { padding: "0.25rem 0.75rem", borderRadius: "{content.border.radius}", checkedShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)", sm: { padding: "0.25rem 0.75rem" }, lg: { padding: "0.25rem 0.75rem" } };
var d30 = { light: { root: { background: "{surface.100}", checkedBackground: "{surface.100}", hoverBackground: "{surface.100}", borderColor: "{surface.100}", color: "{surface.500}", hoverColor: "{surface.700}", checkedColor: "{surface.900}", checkedBorderColor: "{surface.100}" }, content: { checkedBackground: "{surface.0}" }, icon: { color: "{surface.500}", hoverColor: "{surface.700}", checkedColor: "{surface.900}" } }, dark: { root: { background: "{surface.950}", checkedBackground: "{surface.950}", hoverBackground: "{surface.950}", borderColor: "{surface.950}", color: "{surface.400}", hoverColor: "{surface.300}", checkedColor: "{surface.0}", checkedBorderColor: "{surface.950}" }, content: { checkedBackground: "{surface.800}" }, icon: { color: "{surface.400}", hoverColor: "{surface.300}", checkedColor: "{surface.0}" } } };
var c23 = { root: r77, icon: o79, content: e51, colorScheme: d30 };

// node_modules/@primeuix/themes/dist/aura/toggleswitch/index.mjs
var r78 = { width: "2.5rem", height: "1.5rem", borderRadius: "30px", gap: "0.25rem", shadow: "{form.field.shadow}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" }, borderWidth: "1px", borderColor: "transparent", hoverBorderColor: "transparent", checkedBorderColor: "transparent", checkedHoverBorderColor: "transparent", invalidBorderColor: "{form.field.invalid.border.color}", transitionDuration: "{form.field.transition.duration}", slideDuration: "0.2s" };
var o80 = { borderRadius: "50%", size: "1rem" };
var e52 = { light: { root: { background: "{surface.300}", disabledBackground: "{form.field.disabled.background}", hoverBackground: "{surface.400}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.0}", disabledBackground: "{form.field.disabled.color}", hoverBackground: "{surface.0}", checkedBackground: "{surface.0}", checkedHoverBackground: "{surface.0}", color: "{text.muted.color}", hoverColor: "{text.color}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } }, dark: { root: { background: "{surface.700}", disabledBackground: "{surface.600}", hoverBackground: "{surface.600}", checkedBackground: "{primary.color}", checkedHoverBackground: "{primary.hover.color}" }, handle: { background: "{surface.400}", disabledBackground: "{surface.900}", hoverBackground: "{surface.300}", checkedBackground: "{surface.900}", checkedHoverBackground: "{surface.900}", color: "{surface.900}", hoverColor: "{surface.800}", checkedColor: "{primary.color}", checkedHoverColor: "{primary.hover.color}" } } };
var c24 = { root: r78, handle: o80, colorScheme: e52 };

// node_modules/@primeuix/themes/dist/aura/toolbar/index.mjs
var o81 = { background: "{content.background}", borderColor: "{content.border.color}", borderRadius: "{content.border.radius}", color: "{content.color}", gap: "0.5rem", padding: "0.75rem" };
var r79 = { root: o81 };

// node_modules/@primeuix/themes/dist/aura/tooltip/index.mjs
var r80 = { maxWidth: "12.5rem", gutter: "0.25rem", shadow: "{overlay.popover.shadow}", padding: "0.5rem 0.75rem", borderRadius: "{overlay.popover.border.radius}" };
var o82 = { light: { root: { background: "{surface.700}", color: "{surface.0}" } }, dark: { root: { background: "{surface.700}", color: "{surface.0}" } } };
var e53 = { root: r80, colorScheme: o82 };

// node_modules/@primeuix/themes/dist/aura/tree/index.mjs
var o83 = { background: "{content.background}", color: "{content.color}", padding: "1rem", gap: "2px", indent: "1rem", transitionDuration: "{transition.duration}" };
var r81 = { padding: "0.25rem 0.5rem", borderRadius: "{content.border.radius}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{text.color}", hoverColor: "{text.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" }, gap: "0.25rem" };
var e54 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedColor: "{highlight.color}" };
var t39 = { borderRadius: "50%", size: "1.75rem", hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", selectedHoverColor: "{primary.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var c25 = { size: "2rem" };
var n37 = { margin: "0 0 0.5rem 0" };
var d31 = { root: o83, node: r81, nodeIcon: e54, nodeToggleButton: t39, loadingIcon: c25, filter: n37 };

// node_modules/@primeuix/themes/dist/aura/treeselect/index.mjs
var o84 = { background: "{form.field.background}", disabledBackground: "{form.field.disabled.background}", filledBackground: "{form.field.filled.background}", filledHoverBackground: "{form.field.filled.hover.background}", filledFocusBackground: "{form.field.filled.focus.background}", borderColor: "{form.field.border.color}", hoverBorderColor: "{form.field.hover.border.color}", focusBorderColor: "{form.field.focus.border.color}", invalidBorderColor: "{form.field.invalid.border.color}", color: "{form.field.color}", disabledColor: "{form.field.disabled.color}", placeholderColor: "{form.field.placeholder.color}", invalidPlaceholderColor: "{form.field.invalid.placeholder.color}", shadow: "{form.field.shadow}", paddingX: "{form.field.padding.x}", paddingY: "{form.field.padding.y}", borderRadius: "{form.field.border.radius}", focusRing: { width: "{form.field.focus.ring.width}", style: "{form.field.focus.ring.style}", color: "{form.field.focus.ring.color}", offset: "{form.field.focus.ring.offset}", shadow: "{form.field.focus.ring.shadow}" }, transitionDuration: "{form.field.transition.duration}", sm: { fontSize: "{form.field.sm.font.size}", paddingX: "{form.field.sm.padding.x}", paddingY: "{form.field.sm.padding.y}" }, lg: { fontSize: "{form.field.lg.font.size}", paddingX: "{form.field.lg.padding.x}", paddingY: "{form.field.lg.padding.y}" } };
var r82 = { width: "2.5rem", color: "{form.field.icon.color}" };
var d32 = { background: "{overlay.select.background}", borderColor: "{overlay.select.border.color}", borderRadius: "{overlay.select.border.radius}", color: "{overlay.select.color}", shadow: "{overlay.select.shadow}" };
var l16 = { padding: "{list.padding}" };
var e55 = { padding: "{list.option.padding}" };
var i26 = { borderRadius: "{border.radius.sm}" };
var f9 = { color: "{form.field.icon.color}" };
var a40 = { root: o84, dropdown: r82, overlay: d32, tree: l16, emptyMessage: e55, chip: i26, clearIcon: f9 };

// node_modules/@primeuix/themes/dist/aura/treetable/index.mjs
var o85 = { transitionDuration: "{transition.duration}" };
var r83 = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" };
var e56 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", borderColor: "{treetable.border.color}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", gap: "0.5rem", padding: "0.75rem 1rem", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var t40 = { fontWeight: "600" };
var c26 = { background: "{content.background}", hoverBackground: "{content.hover.background}", selectedBackground: "{highlight.background}", color: "{content.color}", hoverColor: "{content.hover.color}", selectedColor: "{highlight.color}", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "-1px", shadow: "{focus.ring.shadow}" } };
var n38 = { borderColor: "{treetable.border.color}", padding: "0.75rem 1rem", gap: "0.5rem" };
var d33 = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", padding: "0.75rem 1rem" };
var l17 = { fontWeight: "600" };
var i27 = { background: "{content.background}", borderColor: "{treetable.border.color}", color: "{content.color}", borderWidth: "0 0 1px 0", padding: "0.75rem 1rem" };
var a41 = { width: "0.5rem" };
var g5 = { width: "1px", color: "{primary.color}" };
var s11 = { color: "{text.muted.color}", hoverColor: "{text.hover.muted.color}", size: "0.875rem" };
var u6 = { size: "2rem" };
var h4 = { hoverBackground: "{content.hover.background}", selectedHoverBackground: "{content.background}", color: "{text.muted.color}", hoverColor: "{text.color}", selectedHoverColor: "{primary.color}", size: "1.75rem", borderRadius: "50%", focusRing: { width: "{focus.ring.width}", style: "{focus.ring.style}", color: "{focus.ring.color}", offset: "{focus.ring.offset}", shadow: "{focus.ring.shadow}" } };
var b4 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" };
var f10 = { borderColor: "{content.border.color}", borderWidth: "0 0 1px 0" };
var m3 = { light: { root: { borderColor: "{content.border.color}" }, bodyCell: { selectedBorderColor: "{primary.100}" } }, dark: { root: { borderColor: "{surface.800}" }, bodyCell: { selectedBorderColor: "{primary.900}" } } };
var k3 = { root: o85, header: r83, headerCell: e56, columnTitle: t40, row: c26, bodyCell: n38, footerCell: d33, columnFooter: l17, footer: i27, columnResizer: a41, resizeIndicator: g5, sortIcon: s11, loadingIcon: u6, nodeToggleButton: h4, paginatorTop: b4, paginatorBottom: f10, colorScheme: m3 };

// node_modules/@primeuix/themes/dist/aura/virtualscroller/index.mjs
var o86 = { mask: { background: "{content.background}", color: "{text.muted.color}" }, icon: { size: "2rem" } };
var e57 = { loader: o86 };

// node_modules/@primeuix/themes/dist/aura/index.mjs
var r84 = Object.defineProperty;
var e58 = Object.defineProperties;
var m4 = Object.getOwnPropertyDescriptors;
var i28 = Object.getOwnPropertySymbols;
var t41 = Object.prototype.hasOwnProperty;
var a42 = Object.prototype.propertyIsEnumerable;
var o87 = (e59, m5, i29) => m5 in e59 ? r84(e59, m5, { enumerable: true, configurable: true, writable: true, value: i29 }) : e59[m5] = i29;
var Nr;
var Qr = (Nr = ((r85, e59) => {
  for (var m5 in e59 || (e59 = {})) t41.call(e59, m5) && o87(r85, m5, e59[m5]);
  if (i28) for (var m5 of i28(e59)) a42.call(e59, m5) && o87(r85, m5, e59[m5]);
  return r85;
})({}, e5), e58(Nr, m4({ components: { accordion: c, autocomplete: a, avatar: n, badge: d2, blockui: o6, breadcrumb: t3, button: e6, card: d3, carousel: t5, cascadeselect: f2, checkbox: e9, chip: s3, colorpicker: s4, confirmdialog: r15, confirmpopup: a6, contextmenu: c6, datatable: k, dataview: c8, datepicker: k2, dialog: e17, divider: t10, dock: d9, drawer: e19, editor: l7, fieldset: e21, fileupload: i10, floatlabel: d13, galleria: l8, iconfield: r30, iftalabel: i13, image: e24, imagecompare: r32, inlinemessage: a16, inplace: n12, inputchips: f6, inputgroup: o37, inputnumber: a17, inputotp: e27, inputtext: d16, knob: c11, listbox: n14, megamenu: g4, menu: r42, menubar: e30, message: u4, metergroup: b3, multiselect: n19, orderlist: o48, organizationchart: n20, overlaybadge: t23, paginator: n21, panel: a25, panelmenu: a26, password: n24, picklist: o55, popover: e38, progressbar: t27, progressspinner: r56, radiobutton: e40, rating: i21, ripple: o61, scrollpanel: a29, select: n25, selectbutton: d24, skeleton: o65, slider: a32, speeddial: a33, splitbutton: d25, splitter: t30, stepper: i23, steps: c17, tabmenu: n30, tabs: i24, tabview: e47, tag: n33, terminal: e48, textarea: d28, tieredmenu: c21, timeline: d29, toast: u5, togglebutton: c23, toggleswitch: c24, toolbar: r79, tooltip: e53, tree: d31, treeselect: a40, treetable: k3, virtualscroller: e57 } })));

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    MessageService,
    providePrimeNG({
      theme: {
        preset: Qr
      }
    })
  ]
};

// src/app/component/loader/loader.component.ts
var LoaderComponent = class _LoaderComponent {
  static \u0275fac = function LoaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoaderComponent, selectors: [["app-loader"]], decls: 7, vars: 0, consts: [[1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "bg-black/40", "backdrop-blur-sm"], [1, "flex", "flex-col", "items-center", "gap-4"], [1, "relative", "h-16", "w-16"], [1, "absolute", "inset-0", "rounded-full", "border-4", "border-white/20"], [1, "absolute", "inset-0", "rounded-full", "border-4", "border-t-white", "border-r-transparent", "border-b-transparent", "border-l-transparent", "animate-spin"], [1, "text-white", "text-lg", "font-semibold", "tracking-wide", "animate-pulse"]], template: function LoaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275domElement(3, "div", 3)(4, "div", 4);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "p", 5);
      \u0275\u0275text(6, " Chargement... ");
      \u0275\u0275domElementEnd()()();
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoaderComponent, [{
    type: Component,
    args: [{ selector: "app-loader", imports: [CommonModule], template: `
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div class="flex flex-col items-center gap-4">
        <!-- Spinner -->
        <div class="relative h-16 w-16">
          <div class="absolute inset-0 rounded-full border-4 border-white/20"></div>
          <div class="absolute inset-0 rounded-full border-4 border-t-white border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
        </div>
        
        <!-- Loading text -->
        <p class="text-white text-lg font-semibold tracking-wide animate-pulse">
          Chargement...
        </p>
      </div>
    </div>
  ` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoaderComponent, { className: "LoaderComponent", filePath: "src/app/component/loader/loader.component.ts", lineNumber: 29 });
})();

// src/app/app.component.ts
var _forTrack0 = ($index, $item) => $item.label;
function AppComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loader");
  }
}
function AppComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-tab", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const \u0275$index_10_r2 = ctx.$index;
    \u0275\u0275property("value", \u0275$index_10_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1.label);
  }
}
var AppComponent = class _AppComponent {
  router;
  title = "nat-kart";
  items = [];
  activeItem = 0;
  logoPath = "";
  loadingService = inject(LoadingService);
  constructor(router) {
    this.router = router;
  }
  ngOnInit() {
    this.logoPath = "assets/images/logos/logo-natsystem.png";
    this.items = [
      { label: "Ranking", route: "ranking" },
      { label: "Champion Wheel", route: "champion-wheel" },
      { label: "Console Wheel", route: "console-wheel" },
      { label: "Score Management", route: "score-management" },
      { label: "Console Management", route: "console-management" },
      { label: "Player Management", route: "player-management" },
      { label: "Admin", route: "admin" }
    ];
    const currentRoute = this.router.url.substring(1);
    const foundIndex = this.items.findIndex((item) => item["route"] === currentRoute);
    this.activeItem = foundIndex !== -1 ? foundIndex : 0;
  }
  onActiveItemChange(event) {
    const index = event.index ?? event.value ?? event;
    if (typeof index === "number" && this.items[index]) {
      this.activeItem = index;
      this.router.navigate([this.items[index]["route"]]);
    }
  }
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 7, vars: 2, consts: [[1, "card", "h-[5vh]"], [3, "valueChange", "value"], [3, "value"]], template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, AppComponent_Conditional_0_Template, 1, 0, "app-loader");
      \u0275\u0275elementStart(1, "div", 0)(2, "p-tabs", 1);
      \u0275\u0275listener("valueChange", function AppComponent_Template_p_tabs_valueChange_2_listener($event) {
        return ctx.onActiveItemChange($event);
      });
      \u0275\u0275elementStart(3, "p-tablist");
      \u0275\u0275repeaterCreate(4, AppComponent_For_5_Template, 2, 2, "p-tab", 2, _forTrack0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(6, "router-outlet");
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.loadingService.loading() ? 0 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.activeItem);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.items);
    }
  }, dependencies: [
    TabsModule,
    Tabs,
    TabList,
    Tab,
    ButtonModule,
    RouterOutlet,
    LoaderComponent
  ], styles: ["\n\n/*# sourceMappingURL=app.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", imports: [
      TabsModule,
      ButtonModule,
      RouterOutlet,
      LoaderComponent
    ], template: '@if (loadingService.loading()) {\r\n  <app-loader />\r\n}\r\n<div class="card h-[5vh]">\r\n  <p-tabs [value]="activeItem" (valueChange)="onActiveItemChange($event)">\r\n    <p-tablist>\r\n      @for (item of items; track item.label; let idx = $index) {\r\n      <p-tab [value]="idx">{{ item.label }}</p-tab>\r\n      }\r\n    </p-tablist>\r\n  </p-tabs>\r\n</div>\r\n<router-outlet></router-outlet>', styles: ["/* src/app/app.component.scss */\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 21 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
/*! Bundled license information:

@angular/platform-browser/fesm2022/dom_renderer.mjs:
@angular/platform-browser/fesm2022/browser.mjs:
@angular/platform-browser/fesm2022/platform-browser.mjs:
@angular/animations/fesm2022/util.mjs:
@angular/animations/fesm2022/browser.mjs:
@angular/platform-browser/fesm2022/animations.mjs:
@angular/router/fesm2022/router2.mjs:
@angular/router/fesm2022/router_module.mjs:
@angular/router/fesm2022/router.mjs:
  (**
   * @license Angular v20.3.15
   * (c) 2010-2025 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
//# sourceMappingURL=main.js.map
