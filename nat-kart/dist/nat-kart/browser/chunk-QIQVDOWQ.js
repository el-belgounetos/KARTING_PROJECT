import {
  ImageModule,
  SortIcon,
  SortableColumn,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  TableModule,
  Tabs,
  TabsModule
} from "./chunk-HPNAM2FW.js";
import {
  ApiService,
  Button,
  ButtonModule,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DefaultValueAccessor,
  FormsModule,
  InputNumber,
  InputNumberModule,
  InputText,
  InputTextModule,
  MessageService,
  NgClass,
  NgControlStatus,
  NgModel,
  PrimeTemplate,
  Toast,
  ToastModule,
  __spreadValues,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-OQZYVA4B.js";

// src/app/component/player-management/player-management.component.ts
var _c0 = () => [10, 25, 50];
var _c1 = () => ({ "min-width": "50rem" });
var _c2 = () => ["pseudo", "name", "firstname"];
var _c3 = (a0) => ({ "border-red-500": a0 });
function PlayerManagementComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "span", 38);
    \u0275\u0275element(2, "i", 39);
    \u0275\u0275elementStart(3, "input", 40);
    \u0275\u0275listener("input", function PlayerManagementComponent_ng_template_13_Template_input_input_3_listener($event) {
      \u0275\u0275restoreView(_r2);
      \u0275\u0275nextContext();
      const dt_r3 = \u0275\u0275reference(12);
      return \u0275\u0275resetView(dt_r3.filterGlobal($event.target.value, "contains"));
    });
    \u0275\u0275elementEnd()()();
  }
}
function PlayerManagementComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 41);
    \u0275\u0275text(2, "ID ");
    \u0275\u0275element(3, "p-sortIcon", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th");
    \u0275\u0275text(5, "Avatar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 43);
    \u0275\u0275text(7, "Pseudo");
    \u0275\u0275element(8, "p-sortIcon", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 45);
    \u0275\u0275text(10, "Nom ");
    \u0275\u0275element(11, "p-sortIcon", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 47);
    \u0275\u0275text(13, "Pr\xE9nom ");
    \u0275\u0275element(14, "p-sortIcon", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Modifier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Suppression");
    \u0275\u0275elementEnd()();
  }
}
function PlayerManagementComponent_ng_template_15_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 49);
  }
  if (rf & 2) {
    const player_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", "http://localhost:8080/images/players/" + player_r5.picture, \u0275\u0275sanitizeUrl)("alt", player_r5.pseudo);
  }
}
function PlayerManagementComponent_ng_template_15_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1, "Aucun");
    \u0275\u0275elementEnd();
  }
}
function PlayerManagementComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275conditionalCreate(4, PlayerManagementComponent_ng_template_15_Conditional_4_Template, 1, 2, "img", 49)(5, PlayerManagementComponent_ng_template_15_Conditional_5_Template, 2, 0, "span", 50);
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
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "p-button", 51);
    \u0275\u0275listener("onClick", function PlayerManagementComponent_ng_template_15_Template_p_button_onClick_15_listener() {
      const player_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.editPlayer(player_r5));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td")(17, "p-button", 52);
    \u0275\u0275listener("onClick", function PlayerManagementComponent_ng_template_15_Template_p_button_onClick_17_listener() {
      const player_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.deletePlayer(player_r5));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const player_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(player_r5.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(player_r5.picture ? 4 : 5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(player_r5.pseudo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(player_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(player_r5.firstname);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(player_r5.category || "-");
    \u0275\u0275advance(2);
    \u0275\u0275property("rounded", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("rounded", true);
  }
}
function PlayerManagementComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 53);
    \u0275\u0275text(2, "Aucun joueur trouv\xE9.");
    \u0275\u0275elementEnd()();
  }
}
function PlayerManagementComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "label", 29);
    \u0275\u0275text(2, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function PlayerManagementComponent_Conditional_22_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r5 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r5.player.id, $event) || (ctx_r5.player.id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r5.player.id);
    \u0275\u0275property("disabled", true);
  }
}
function PlayerManagementComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r5.validationErrors["pseudo"]);
  }
}
function PlayerManagementComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r5.validationErrors["name"]);
  }
}
function PlayerManagementComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r5.validationErrors["firstname"]);
  }
}
function PlayerManagementComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r5.validationErrors["age"]);
  }
}
function PlayerManagementComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r5.validationErrors["email"]);
  }
}
function PlayerManagementComponent_For_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275listener("click", function PlayerManagementComponent_For_58_Template_div_click_0_listener() {
      const img_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.selectImage(img_r9));
    });
    \u0275\u0275element(1, "img", 56);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const img_r9 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classProp("border-primary", ctx_r5.player.picture === img_r9)("border-transparent", ctx_r5.player.picture !== img_r9);
    \u0275\u0275advance();
    \u0275\u0275property("src", "http://localhost:8080/images/players/" + img_r9, \u0275\u0275sanitizeUrl);
  }
}
function PlayerManagementComponent_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1, " Image s\xE9lectionn\xE9e : ");
    \u0275\u0275elementStart(2, "span", 57);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r5.player.picture);
  }
}
function PlayerManagementComponent_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 58);
    \u0275\u0275listener("onClick", function PlayerManagementComponent_Conditional_61_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.cancelEdit());
    });
    \u0275\u0275elementEnd();
  }
}
var PlayerManagementComponent = class _PlayerManagementComponent {
  apiService;
  messageService;
  cdr;
  player = {
    name: "",
    firstname: "",
    age: 0,
    email: "",
    pseudo: "",
    picture: "",
    category: ""
  };
  availableImages = [];
  players = [];
  loading = false;
  isEditMode = false;
  selectedTabIndex = "0";
  // "0" = List, "1" = Create/Edit
  validationErrors = {};
  // Track field-specific errors
  constructor(apiService, messageService, cdr) {
    this.apiService = apiService;
    this.messageService = messageService;
    this.cdr = cdr;
  }
  ngOnInit() {
    this.loadImages();
    this.loadPlayers();
  }
  loadPlayers() {
    this.apiService.get("players").subscribe({
      next: (data) => {
        console.log("Players loaded:", data);
        if (data) {
          this.players = data;
          if (!this.isEditMode) {
            this.selectedTabIndex = this.players.length === 0 ? "1" : "0";
            console.log("Setting tab index to:", this.selectedTabIndex, "Players count:", this.players.length);
            this.cdr.detectChanges();
          }
        }
      },
      error: (err) => {
        console.error("Error loading players:", err);
        if (!this.isEditMode) {
          this.selectedTabIndex = "1";
          this.cdr.detectChanges();
        }
      }
    });
  }
  loadImages() {
    this.apiService.get("characters").subscribe((images) => {
      if (images) {
        this.availableImages = images;
      }
    });
  }
  selectImage(image) {
    this.player.picture = image;
  }
  onSubmit() {
    this.validationErrors = {};
    if (!this.isValid()) {
      this.messageService.add({
        severity: "warn",
        summary: "Attention",
        detail: "Veuillez remplir tous les champs obligatoires."
      });
      return;
    }
    this.loading = true;
    const apiCall = this.isEditMode ? this.apiService.put("players", this.player) : this.apiService.post("players", this.player);
    apiCall.subscribe({
      next: (response) => {
        this.messageService.add({
          severity: "success",
          summary: "Succ\xE8s",
          detail: this.isEditMode ? "Joueur modifi\xE9 avec succ\xE8s!" : "Joueur cr\xE9\xE9 avec succ\xE8s!"
        });
        this.resetForm();
        this.loadImages();
        this.loadPlayers();
        this.selectedTabIndex = "0";
        this.loading = false;
      },
      error: (err) => {
        if (err?.error?.errors) {
          this.validationErrors = err.error.errors;
          const errorCount = Object.keys(err.error.errors).length;
          this.messageService.add({
            severity: "error",
            summary: "Erreurs de validation",
            detail: `${errorCount} champ(s) invalide(s). Veuillez corriger les erreurs.`,
            life: 5e3
          });
        } else {
          const errorMessage = err.error?.message || "Une erreur est survenue";
          this.messageService.add({
            severity: "error",
            summary: "Erreur",
            detail: errorMessage
          });
        }
        this.loading = false;
      }
    });
  }
  isValid() {
    return !!(this.player.name && this.player.firstname && this.player.email && this.player.pseudo);
  }
  resetForm() {
    this.player = {
      name: "",
      firstname: "",
      age: 0,
      email: "",
      pseudo: "",
      picture: "",
      category: ""
    };
    this.validationErrors = {};
    this.isEditMode = false;
  }
  editPlayer(player) {
    this.player = __spreadValues({}, player);
    this.validationErrors = {};
    this.isEditMode = true;
    this.selectedTabIndex = "1";
  }
  deletePlayer(player) {
    if (confirm(`\xCAtes-vous s\xFBr de vouloir supprimer ${player.pseudo} ?`)) {
      this.apiService.delete(`players/${player.pseudo}`).subscribe({
        next: () => {
          this.messageService.add({
            severity: "success",
            summary: "Succ\xE8s",
            detail: "Joueur supprim\xE9 avec succ\xE8s"
          });
          this.loadPlayers();
          this.loadImages();
        },
        error: (err) => {
          console.error("Error deleting player:", err);
          this.messageService.add({
            severity: "error",
            summary: "Erreur",
            detail: "Impossible de supprimer le joueur"
          });
        }
      });
    }
  }
  cancelEdit() {
    this.resetForm();
    this.selectedTabIndex = "0";
    this.cdr.detectChanges();
  }
  static \u0275fac = function PlayerManagementComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlayerManagementComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlayerManagementComponent, selectors: [["app-player-management"]], decls: 64, vars: 42, consts: [["dt", ""], [1, "fixed", "inset-0", "w-full", "h-full", "bg-cover", "bg-center", "-z-10", "blur-[3px]", 2, "background-image", "url('http://localhost:8080/images/wallpapers/wallpaper4.jpeg')"], [1, "w-full", "h-[93vh]", "bg-[rgba(45,45,45,0.7)]", "flex", "flex-col", "items-center", "p-4", "overflow-y-auto", 2, "background-image", "linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)", "background-size", "30px 30px"], [1, "bg-gray-800/90", "p-8", "rounded-2xl", "shadow-2xl", "border", "border-white/10", "w-full", "max-w-6xl", "backdrop-blur-sm"], [3, "valueChange", "value"], ["value", "0"], ["value", "1"], ["styleClass", "p-datatable-sm", 3, "value", "paginator", "rows", "rowsPerPageOptions", "tableStyle", "globalFilterFields"], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "text-3xl", "font-bold", "text-white", "text-center", "mb-8"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-8"], [1, "flex", "flex-col", "gap-4"], [1, "flex", "flex-col", "gap-2"], ["for", "pseudo", 1, "text-white", "font-semibold"], ["pInputText", "", "id", "pseudo", "name", "pseudo", "autocomplete", "username", "placeholder", "Pseudo", 3, "ngModelChange", "ngModel", "disabled"], [1, "text-red-400"], ["for", "name", 1, "text-white", "font-semibold"], ["pInputText", "", "id", "name", "name", "name", "autocomplete", "family-name", "placeholder", "Nom", 3, "ngModelChange", "ngModel"], ["for", "firstname", 1, "text-white", "font-semibold"], ["pInputText", "", "id", "firstname", "name", "firstname", "autocomplete", "given-name", "placeholder", "Pr\xE9nom", 3, "ngModelChange", "ngModel"], ["for", "age", 1, "text-white", "font-semibold"], ["inputId", "age", "name", "age", "placeholder", "Age", "styleClass", "w-full", 3, "ngModelChange", "ngModel", "min", "max", "ngClass"], ["for", "email", 1, "text-white", "font-semibold"], ["pInputText", "", "id", "email", "name", "email", "autocomplete", "email", "placeholder", "Email", 3, "ngModelChange", "ngModel"], ["for", "category", 1, "text-white", "font-semibold"], ["pInputText", "", "id", "category", "name", "category", "placeholder", "Ex: Junior, Senior...", 3, "ngModelChange", "ngModel"], [1, "text-white", "font-semibold"], [1, "bg-gray-700/50", "p-4", "rounded-xl", "border", "border-white/10", "h-[400px]", "overflow-y-auto", "custom-scroll"], [1, "grid", "grid-cols-4", "gap-4"], [1, "cursor-pointer", "rounded-lg", "p-2", "transition-all", "hover:bg-white/10", "border-2", 3, "border-primary", "border-transparent"], [1, "text-white", "text-center", "mt-2"], [1, "flex", "justify-center", "gap-4", "mt-8"], ["label", "Annuler", "icon", "pi pi-times", "severity", "secondary", "styleClass", "px-8 py-3 text-lg"], ["icon", "pi pi-check", "styleClass", "px-8 py-3 text-lg", 3, "onClick", "label", "loading"], [1, "flex"], [1, "p-input-icon-left", "ml-auto"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Rechercher...", 3, "input"], ["pSortableColumn", "id"], ["field", "id"], ["pSortableColumn", "pseudo"], ["field", "pseudo"], ["pSortableColumn", "name"], ["field", "name"], ["pSortableColumn", "firstname"], ["field", "firstname"], ["width", "50", 1, "shadow-4", 3, "src", "alt"], [1, "text-gray-400", "italic"], ["icon", "pi pi-pencil", "severity", "info", "size", "small", 3, "onClick", "rounded"], ["icon", "pi pi-trash", "severity", "danger", "size", "small", 3, "onClick", "rounded"], ["colspan", "8", 1, "text-center", "p-4"], ["pInputText", "", 1, "opacity-60", "cursor-not-allowed", 3, "ngModelChange", "ngModel", "disabled"], [1, "cursor-pointer", "rounded-lg", "p-2", "transition-all", "hover:bg-white/10", "border-2", 3, "click"], [1, "w-full", "h-auto", "object-contain", 3, "src"], [1, "font-bold", "text-primary"], ["label", "Annuler", "icon", "pi pi-times", "severity", "secondary", "styleClass", "px-8 py-3 text-lg", 3, "onClick"]], template: function PlayerManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "div", 1);
      \u0275\u0275elementStart(1, "div", 2)(2, "div", 3)(3, "p-tabs", 4);
      \u0275\u0275twoWayListener("valueChange", function PlayerManagementComponent_Template_p_tabs_valueChange_3_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedTabIndex, $event) || (ctx.selectedTabIndex = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(4, "p-tablist")(5, "p-tab", 5);
      \u0275\u0275text(6, "Liste des joueurs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p-tab", 6);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "p-tabpanels")(10, "p-tabpanel", 5)(11, "p-table", 7, 0);
      \u0275\u0275template(13, PlayerManagementComponent_ng_template_13_Template, 4, 0, "ng-template", 8)(14, PlayerManagementComponent_ng_template_14_Template, 21, 0, "ng-template", 9)(15, PlayerManagementComponent_ng_template_15_Template, 18, 8, "ng-template", 10)(16, PlayerManagementComponent_ng_template_16_Template, 3, 0, "ng-template", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "p-tabpanel", 6)(18, "h2", 12);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 13)(21, "div", 14);
      \u0275\u0275conditionalCreate(22, PlayerManagementComponent_Conditional_22_Template, 4, 2, "div", 15);
      \u0275\u0275elementStart(23, "div", 15)(24, "label", 16);
      \u0275\u0275text(25, "Pseudo *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "input", 17);
      \u0275\u0275twoWayListener("ngModelChange", function PlayerManagementComponent_Template_input_ngModelChange_26_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.player.pseudo, $event) || (ctx.player.pseudo = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(27, PlayerManagementComponent_Conditional_27_Template, 2, 1, "small", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 15)(29, "label", 19);
      \u0275\u0275text(30, "Nom *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "input", 20);
      \u0275\u0275twoWayListener("ngModelChange", function PlayerManagementComponent_Template_input_ngModelChange_31_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.player.name, $event) || (ctx.player.name = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(32, PlayerManagementComponent_Conditional_32_Template, 2, 1, "small", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 15)(34, "label", 21);
      \u0275\u0275text(35, "Pr\xE9nom *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function PlayerManagementComponent_Template_input_ngModelChange_36_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.player.firstname, $event) || (ctx.player.firstname = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(37, PlayerManagementComponent_Conditional_37_Template, 2, 1, "small", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 15)(39, "label", 23);
      \u0275\u0275text(40, "Age *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "p-inputNumber", 24);
      \u0275\u0275twoWayListener("ngModelChange", function PlayerManagementComponent_Template_p_inputNumber_ngModelChange_41_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.player.age, $event) || (ctx.player.age = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(42, PlayerManagementComponent_Conditional_42_Template, 2, 1, "small", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 15)(44, "label", 25);
      \u0275\u0275text(45, "Email *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "input", 26);
      \u0275\u0275twoWayListener("ngModelChange", function PlayerManagementComponent_Template_input_ngModelChange_46_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.player.email, $event) || (ctx.player.email = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(47, PlayerManagementComponent_Conditional_47_Template, 2, 1, "small", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 15)(49, "label", 27);
      \u0275\u0275text(50, "Cat\xE9gorie");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "input", 28);
      \u0275\u0275twoWayListener("ngModelChange", function PlayerManagementComponent_Template_input_ngModelChange_51_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.player.category, $event) || (ctx.player.category = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(52, "div", 14)(53, "label", 29);
      \u0275\u0275text(54, "Choisir un avatar (Optionnel)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 30)(56, "div", 31);
      \u0275\u0275repeaterCreate(57, PlayerManagementComponent_For_58_Template, 2, 5, "div", 32, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(59, PlayerManagementComponent_Conditional_59_Template, 4, 1, "div", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "div", 34);
      \u0275\u0275conditionalCreate(61, PlayerManagementComponent_Conditional_61_Template, 1, 0, "p-button", 35);
      \u0275\u0275elementStart(62, "p-button", 36);
      \u0275\u0275listener("onClick", function PlayerManagementComponent_Template_p_button_onClick_62_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275element(63, "p-toast");
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("value", ctx.selectedTabIndex);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.isEditMode ? "Modification" : "Cr\xE9ation");
      \u0275\u0275advance(3);
      \u0275\u0275property("value", ctx.players)("paginator", true)("rows", 10)("rowsPerPageOptions", \u0275\u0275pureFunction0(37, _c0))("tableStyle", \u0275\u0275pureFunction0(38, _c1))("globalFilterFields", \u0275\u0275pureFunction0(39, _c2));
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Modification d'un joueur" : "Cr\xE9ation d'un joueur", " ");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isEditMode && ctx.player.id ? 22 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("border-red-500", ctx.validationErrors["pseudo"]);
      \u0275\u0275twoWayProperty("ngModel", ctx.player.pseudo);
      \u0275\u0275property("disabled", ctx.isEditMode);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.validationErrors["pseudo"] ? 27 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("border-red-500", ctx.validationErrors["name"]);
      \u0275\u0275twoWayProperty("ngModel", ctx.player.name);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.validationErrors["name"] ? 32 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("border-red-500", ctx.validationErrors["firstname"]);
      \u0275\u0275twoWayProperty("ngModel", ctx.player.firstname);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.validationErrors["firstname"] ? 37 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.player.age);
      \u0275\u0275property("min", 0)("max", 120)("ngClass", \u0275\u0275pureFunction1(40, _c3, ctx.validationErrors["age"]));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.validationErrors["age"] ? 42 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("border-red-500", ctx.validationErrors["email"]);
      \u0275\u0275twoWayProperty("ngModel", ctx.player.email);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.validationErrors["email"] ? 47 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.player.category);
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.availableImages);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.player.picture ? 59 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isEditMode ? 61 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("label", ctx.isEditMode ? "Modifier le joueur" : "Cr\xE9er le joueur")("loading", ctx.loading);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    InputTextModule,
    InputText,
    InputNumberModule,
    InputNumber,
    PrimeTemplate,
    ButtonModule,
    Button,
    ImageModule,
    ToastModule,
    Toast,
    TableModule,
    Table,
    SortableColumn,
    SortIcon,
    TabsModule,
    Tabs,
    TabPanels,
    TabPanel,
    TabList,
    Tab
  ], styles: ["\n\n.custom-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n.custom-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 4px;\n}\n.custom-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.3);\n  border-radius: 4px;\n}\n.custom-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: rgba(255, 255, 255, 0.5);\n}\n/*# sourceMappingURL=player-management.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlayerManagementComponent, [{
    type: Component,
    args: [{ selector: "app-player-management", standalone: true, imports: [
      CommonModule,
      FormsModule,
      InputTextModule,
      InputNumberModule,
      ButtonModule,
      ImageModule,
      ToastModule,
      TableModule,
      TabsModule
    ], template: `<div class="fixed inset-0 w-full h-full bg-cover bg-center -z-10 blur-[3px]"\r
    style="background-image: url('http://localhost:8080/images/wallpapers/wallpaper4.jpeg');"></div>\r
\r
<div class="w-full h-[93vh] bg-[rgba(45,45,45,0.7)] flex flex-col items-center p-4 overflow-y-auto"\r
    style="background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px); background-size: 30px 30px;">\r
\r
    <div class="bg-gray-800/90 p-8 rounded-2xl shadow-2xl border border-white/10 w-full max-w-6xl backdrop-blur-sm">\r
        <p-tabs [(value)]="selectedTabIndex">\r
            <p-tablist>\r
                <p-tab value="0">Liste des joueurs</p-tab>\r
                <p-tab value="1">{{ isEditMode ? 'Modification' : 'Cr\xE9ation' }}</p-tab>\r
            </p-tablist>\r
            <p-tabpanels>\r
                <!-- TAB 1: Liste des joueurs -->\r
                <p-tabpanel value="0">\r
                    <p-table [value]="players" styleClass="p-datatable-sm" [paginator]="true" [rows]="10"\r
                        [rowsPerPageOptions]="[10, 25, 50]" [tableStyle]="{ 'min-width': '50rem' }"\r
                        [globalFilterFields]="['pseudo', 'name', 'firstname']" #dt>\r
                        <ng-template pTemplate="caption">\r
                            <div class="flex">\r
                                <span class="p-input-icon-left ml-auto">\r
                                    <i class="pi pi-search"></i>\r
                                    <input pInputText type="text"\r
                                        (input)="dt.filterGlobal($any($event.target).value, 'contains')"\r
                                        placeholder="Rechercher..." />\r
                                </span>\r
                            </div>\r
                        </ng-template>\r
                        <ng-template pTemplate="header">\r
                            <tr>\r
                                <th pSortableColumn="id">ID <p-sortIcon field="id" /></th>\r
                                <th>Avatar</th>\r
                                <th pSortableColumn="pseudo">Pseudo<p-sortIcon field="pseudo" /></th>\r
                                <th pSortableColumn="name">Nom <p-sortIcon field="name" /></th>\r
                                <th pSortableColumn="firstname">Pr\xE9nom <p-sortIcon field="firstname" /></th>\r
                                <th>Cat\xE9gorie</th>\r
                                <th>Modifier</th>\r
                                <th>Suppression</th>\r
                            </tr>\r
                        </ng-template>\r
                        <ng-template pTemplate="body" let-player>\r
                            <tr>\r
                                <td>{{ player.id }}</td>\r
                                <td>\r
                                    @if (player.picture) {\r
                                    <img [src]="'http://localhost:8080/images/players/' + player.picture"\r
                                        [alt]="player.pseudo" width="50" class="shadow-4" />\r
                                    } @else {\r
                                    <span class="text-gray-400 italic">Aucun</span>\r
                                    }\r
                                </td>\r
                                <td>{{ player.pseudo }}</td>\r
                                <td>{{ player.name }}</td>\r
                                <td>{{ player.firstname }}</td>\r
                                <td>{{ player.category || '-' }}</td>\r
                                <td>\r
                                    <p-button icon="pi pi-pencil" severity="info" [rounded]="true"\r
                                        (onClick)="editPlayer(player)" size="small" />\r
                                </td>\r
                                <td>\r
                                    <p-button icon="pi pi-trash" severity="danger" [rounded]="true"\r
                                        (onClick)="deletePlayer(player)" size="small" />\r
                                </td>\r
                            </tr>\r
                        </ng-template>\r
                        <ng-template pTemplate="emptymessage">\r
                            <tr>\r
                                <td colspan="8" class="text-center p-4">Aucun joueur trouv\xE9.</td>\r
                            </tr>\r
                        </ng-template>\r
                    </p-table>\r
                </p-tabpanel>\r
\r
                <!-- TAB 2: Cr\xE9ation/Modification -->\r
                <p-tabpanel value="1">\r
                    <h2 class="text-3xl font-bold text-white text-center mb-8">\r
                        {{ isEditMode ? 'Modification d\\'un joueur' : 'Cr\xE9ation d\\'un joueur' }}\r
                    </h2>\r
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">\r
                        <!-- Form Fields -->\r
                        <div class="flex flex-col gap-4">\r
                            @if (isEditMode && player.id) {\r
                            <div class="flex flex-col gap-2">\r
                                <label class="text-white font-semibold">ID</label>\r
                                <input pInputText [(ngModel)]="player.id" [disabled]="true"\r
                                    class="opacity-60 cursor-not-allowed" />\r
                            </div>\r
                            }\r
\r
                            <div class="flex flex-col gap-2">\r
                                <label for="pseudo" class="text-white font-semibold">Pseudo *</label>\r
                                <input pInputText id="pseudo" name="pseudo" autocomplete="username"\r
                                    [(ngModel)]="player.pseudo" placeholder="Pseudo" [disabled]="isEditMode"\r
                                    [class.border-red-500]="validationErrors['pseudo']" />\r
                                @if (validationErrors['pseudo']) {\r
                                <small class="text-red-400">{{ validationErrors['pseudo'] }}</small>\r
                                }\r
                            </div>\r
\r
                            <div class="flex flex-col gap-2">\r
                                <label for="name" class="text-white font-semibold">Nom *</label>\r
                                <input pInputText id="name" name="name" autocomplete="family-name"\r
                                    [(ngModel)]="player.name" placeholder="Nom"\r
                                    [class.border-red-500]="validationErrors['name']" />\r
                                @if (validationErrors['name']) {\r
                                <small class="text-red-400">{{ validationErrors['name'] }}</small>\r
                                }\r
                            </div>\r
\r
                            <div class="flex flex-col gap-2">\r
                                <label for="firstname" class="text-white font-semibold">Pr\xE9nom *</label>\r
                                <input pInputText id="firstname" name="firstname" autocomplete="given-name"\r
                                    [(ngModel)]="player.firstname" placeholder="Pr\xE9nom"\r
                                    [class.border-red-500]="validationErrors['firstname']" />\r
                                @if (validationErrors['firstname']) {\r
                                <small class="text-red-400">{{ validationErrors['firstname'] }}</small>\r
                                }\r
                            </div>\r
\r
                            <div class="flex flex-col gap-2">\r
                                <label for="age" class="text-white font-semibold">Age *</label>\r
                                <p-inputNumber inputId="age" name="age" [(ngModel)]="player.age" [min]="0" [max]="120"\r
                                    placeholder="Age" styleClass="w-full"\r
                                    [ngClass]="{'border-red-500': validationErrors['age']}" />\r
                                @if (validationErrors['age']) {\r
                                <small class="text-red-400">{{ validationErrors['age'] }}</small>\r
                                }\r
                            </div>\r
\r
                            <div class="flex flex-col gap-2">\r
                                <label for="email" class="text-white font-semibold">Email *</label>\r
                                <input pInputText id="email" name="email" autocomplete="email"\r
                                    [(ngModel)]="player.email" placeholder="Email"\r
                                    [class.border-red-500]="validationErrors['email']" />\r
                                @if (validationErrors['email']) {\r
                                <small class="text-red-400">{{ validationErrors['email'] }}</small>\r
                                }\r
                            </div>\r
\r
                            <div class="flex flex-col gap-2">\r
                                <label for="category" class="text-white font-semibold">Cat\xE9gorie</label>\r
                                <input pInputText id="category" name="category" [(ngModel)]="player.category"\r
                                    placeholder="Ex: Junior, Senior..." />\r
                            </div>\r
                        </div>\r
\r
                        <!-- Image Selection -->\r
                        <div class="flex flex-col gap-4">\r
                            <label class="text-white font-semibold">Choisir un avatar (Optionnel)</label>\r
                            <div\r
                                class="bg-gray-700/50 p-4 rounded-xl border border-white/10 h-[400px] overflow-y-auto custom-scroll">\r
                                <div class="grid grid-cols-4 gap-4">\r
                                    @for (img of availableImages; track img) {\r
                                    <div class="cursor-pointer rounded-lg p-2 transition-all hover:bg-white/10 border-2"\r
                                        [class.border-primary]="player.picture === img"\r
                                        [class.border-transparent]="player.picture !== img" (click)="selectImage(img)">\r
                                        <img [src]="'http://localhost:8080/images/players/' + img"\r
                                            class="w-full h-auto object-contain" />\r
                                    </div>\r
                                    }\r
                                </div>\r
                            </div>\r
                            @if (player.picture) {\r
                            <div class="text-white text-center mt-2">\r
                                Image s\xE9lectionn\xE9e : <span class="font-bold text-primary">{{ player.picture }}</span>\r
                            </div>\r
                            }\r
                        </div>\r
                    </div>\r
\r
                    <div class="flex justify-center gap-4 mt-8">\r
                        @if (isEditMode) {\r
                        <p-button label="Annuler" icon="pi pi-times" severity="secondary" (onClick)="cancelEdit()"\r
                            styleClass="px-8 py-3 text-lg" />\r
                        }\r
                        <p-button [label]="isEditMode ? 'Modifier le joueur' : 'Cr\xE9er le joueur'" icon="pi pi-check"\r
                            [loading]="loading" (onClick)="onSubmit()" styleClass="px-8 py-3 text-lg" />\r
                    </div>\r
                </p-tabpanel>\r
            </p-tabpanels>\r
        </p-tabs>\r
    </div>\r
</div>\r
\r
<p-toast />`, styles: ["/* src/app/component/player-management/player-management.component.scss */\n.custom-scroll::-webkit-scrollbar {\n  width: 8px;\n}\n.custom-scroll::-webkit-scrollbar-track {\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 4px;\n}\n.custom-scroll::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.3);\n  border-radius: 4px;\n}\n.custom-scroll::-webkit-scrollbar-thumb:hover {\n  background: rgba(255, 255, 255, 0.5);\n}\n/*# sourceMappingURL=player-management.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: MessageService }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlayerManagementComponent, { className: "PlayerManagementComponent", filePath: "src/app/component/player-management/player-management.component.ts", lineNumber: 33 });
})();
export {
  PlayerManagementComponent
};
//# sourceMappingURL=chunk-QIQVDOWQ.js.map
