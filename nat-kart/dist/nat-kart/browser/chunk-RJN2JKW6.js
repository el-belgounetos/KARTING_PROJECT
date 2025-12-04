import {
  ApiService,
  Button,
  ButtonModule,
  Checkbox,
  CheckboxModule,
  CommonModule,
  Component,
  FormsModule,
  InputNumber,
  InputNumberModule,
  MessageService,
  NgControlStatus,
  NgModel,
  Toast,
  ToastModule,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-OQZYVA4B.js";

// src/app/component/admin/admin.component.ts
var AdminComponent = class _AdminComponent {
  apiService;
  messageService;
  playerCount = 5;
  assignImage = true;
  loading = false;
  constructor(apiService, messageService) {
    this.apiService = apiService;
    this.messageService = messageService;
  }
  generatePlayers() {
    console.log("generatePlayers called, count:", this.playerCount, "assignImage:", this.assignImage);
    this.loading = true;
    this.apiService.post(`admin/generate-players/${this.playerCount}?assignImage=${this.assignImage}`, {}).subscribe({
      next: () => {
        console.log("generatePlayers: Success");
        this.messageService.add({
          severity: "success",
          summary: "Succ\xE8s",
          detail: `${this.playerCount} joueurs ont \xE9t\xE9 g\xE9n\xE9r\xE9s avec succ\xE8s !`
        });
        this.loading = false;
      },
      error: (err) => {
        console.error("generatePlayers: Error", err);
        this.messageService.add({
          severity: "error",
          summary: "Erreur",
          detail: "Une erreur est survenue lors de la g\xE9n\xE9ration des joueurs."
        });
        this.loading = false;
      }
    });
  }
  resetParticipants() {
    console.log("resetParticipants called");
    if (confirm("\xCAtes-vous s\xFBr de vouloir supprimer TOUS les participants ? Cette action est irr\xE9versible.")) {
      console.log("User confirmed reset");
      this.loading = true;
      this.apiService.delete("players").subscribe({
        next: () => {
          console.log("resetParticipants: Success");
          this.messageService.add({
            severity: "success",
            summary: "Succ\xE8s",
            detail: "Tous les participants ont \xE9t\xE9 supprim\xE9s"
          });
          this.loading = false;
        },
        error: (err) => {
          console.error("resetParticipants: Error", err);
          this.loading = false;
          this.messageService.add({
            severity: "error",
            summary: "Erreur",
            detail: "Erreur lors de la r\xE9initialisation"
          });
        }
      });
    } else {
      console.log("User cancelled reset");
    }
  }
  static \u0275fac = function AdminComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminComponent, selectors: [["app-admin"]], decls: 23, vars: 8, consts: [[1, "fixed", "inset-0", "w-full", "h-full", "bg-cover", "bg-center", "-z-10", "blur-[3px]", 2, "background-image", "url('http://localhost:8080/images/wallpapers/wallpaper4.jpeg')"], [1, "w-full", "h-[93vh]", "bg-[rgba(45,45,45,0.7)]", "flex", "flex-col", "items-center", "p-4", "overflow-y-auto", 2, "background-image", "linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)", "background-size", "30px 30px"], [1, "bg-gray-800/90", "p-8", "rounded-2xl", "shadow-2xl", "border", "border-white/10", "w-full", "max-w-2xl", "backdrop-blur-sm"], [1, "text-3xl", "font-bold", "text-white", "text-center", "mb-8"], [1, "flex", "flex-col", "gap-8"], [1, "bg-gray-700/50", "p-6", "rounded-xl", "border", "border-white/10"], [1, "text-xl", "font-bold", "text-white", "mb-4"], [1, "text-gray-300", "mb-6"], [1, "flex", "flex-col", "gap-4"], ["for", "count", 1, "text-white", "font-semibold"], ["inputId", "count", "name", "playerCount", "buttonLayout", "horizontal", "spinnerMode", "horizontal", "decrementButtonClass", "p-button-danger", "incrementButtonClass", "p-button-success", "incrementButtonIcon", "pi pi-plus", "decrementButtonIcon", "pi pi-minus", "styleClass", "w-full", 3, "ngModelChange", "ngModel", "min", "max", "showButtons"], [1, "flex", "items-center", "gap-4", "mt-4"], ["inputId", "assignImage", "name", "assignImage", 3, "ngModelChange", "ngModel", "binary"], ["for", "assignImage", 1, "text-white", "font-semibold", "cursor-pointer"], [1, "flex", "justify-center", "mt-6", "flex-col", "gap-4"], ["label", "G\xE9n\xE9rer les joueurs", "icon", "pi pi-cog", "styleClass", "w-full md:w-auto px-8 py-3", "severity", "warn", 3, "onClick", "loading"], ["label", "R\xE9initialiser les participants", "icon", "pi pi-trash", "severity", "danger", "styleClass", "w-full md:w-auto px-8 py-3", 3, "onClick", "loading"]], template: function AdminComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "div", 0);
      \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "h2", 3);
      \u0275\u0275text(4, "Administration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "div", 5)(7, "h3", 6);
      \u0275\u0275text(8, "G\xE9n\xE9rateur de joueurs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10, " G\xE9n\xE9rez automatiquement des joueurs pour tester l'application. Les avatars seront attribu\xE9s automatiquement s'ils sont disponibles. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 8)(12, "label", 9);
      \u0275\u0275text(13, "Nombre de joueurs \xE0 g\xE9n\xE9rer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "p-inputNumber", 10);
      \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_Template_p_inputNumber_ngModelChange_14_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.playerCount, $event) || (ctx.playerCount = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 11)(16, "p-checkbox", 12);
      \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_Template_p_checkbox_ngModelChange_16_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.assignImage, $event) || (ctx.assignImage = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "label", 13);
      \u0275\u0275text(18, "Attribuer des avatars");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 14)(20, "p-button", 15);
      \u0275\u0275listener("onClick", function AdminComponent_Template_p_button_onClick_20_listener() {
        return ctx.generatePlayers();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "p-button", 16);
      \u0275\u0275listener("onClick", function AdminComponent_Template_p_button_onClick_21_listener() {
        return ctx.resetParticipants();
      });
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275element(22, "p-toast");
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.playerCount);
      \u0275\u0275property("min", 1)("max", 50)("showButtons", true);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.assignImage);
      \u0275\u0275property("binary", true);
      \u0275\u0275advance(4);
      \u0275\u0275property("loading", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("loading", ctx.loading);
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    NgControlStatus,
    NgModel,
    InputNumberModule,
    InputNumber,
    CheckboxModule,
    Checkbox,
    ButtonModule,
    Button,
    ToastModule,
    Toast
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n/*# sourceMappingURL=admin.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminComponent, [{
    type: Component,
    args: [{ selector: "app-admin", standalone: true, imports: [
      CommonModule,
      FormsModule,
      InputNumberModule,
      CheckboxModule,
      ButtonModule,
      ToastModule
    ], template: `<div class="fixed inset-0 w-full h-full bg-cover bg-center -z-10 blur-[3px]"\r
    style="background-image: url('http://localhost:8080/images/wallpapers/wallpaper4.jpeg');"></div>\r
\r
<div class="w-full h-[93vh] bg-[rgba(45,45,45,0.7)] flex flex-col items-center p-4 overflow-y-auto"\r
    style="background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px); background-size: 30px 30px;">\r
\r
    <div class="bg-gray-800/90 p-8 rounded-2xl shadow-2xl border border-white/10 w-full max-w-2xl backdrop-blur-sm">\r
        <h2 class="text-3xl font-bold text-white text-center mb-8">Administration</h2>\r
\r
        <div class="flex flex-col gap-8">\r
            <div class="bg-gray-700/50 p-6 rounded-xl border border-white/10">\r
                <h3 class="text-xl font-bold text-white mb-4">G\xE9n\xE9rateur de joueurs</h3>\r
                <p class="text-gray-300 mb-6">\r
                    G\xE9n\xE9rez automatiquement des joueurs pour tester l'application.\r
                    Les avatars seront attribu\xE9s automatiquement s'ils sont disponibles.\r
                </p>\r
\r
                <div class="flex flex-col gap-4">\r
                    <label for="count" class="text-white font-semibold">Nombre de joueurs \xE0 g\xE9n\xE9rer</label>\r
                    <p-inputNumber inputId="count" [(ngModel)]="playerCount" name="playerCount" [min]="1" [max]="50"\r
                        [showButtons]="true" buttonLayout="horizontal" spinnerMode="horizontal"\r
                        decrementButtonClass="p-button-danger" incrementButtonClass="p-button-success"\r
                        incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" styleClass="w-full" />\r
                </div>\r
\r
                <div class="flex items-center gap-4 mt-4">\r
                    <p-checkbox [(ngModel)]="assignImage" [binary]="true" inputId="assignImage"\r
                        name="assignImage"></p-checkbox>\r
                    <label for="assignImage" class="text-white font-semibold cursor-pointer">Attribuer des\r
                        avatars</label>\r
                </div>\r
\r
                <div class="flex justify-center mt-6 flex-col gap-4">\r
                    <p-button label="G\xE9n\xE9rer les joueurs" icon="pi pi-cog" [loading]="loading"\r
                        (onClick)="generatePlayers()" styleClass="w-full md:w-auto px-8 py-3" severity="warn" />\r
\r
                    <p-button label="R\xE9initialiser les participants" icon="pi pi-trash" severity="danger"\r
                        [loading]="loading" (onClick)="resetParticipants()" styleClass="w-full md:w-auto px-8 py-3" />\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
\r
<p-toast />`, styles: ["/* src/app/component/admin/admin.component.scss */\n:host {\n  display: block;\n  width: 100%;\n}\n/*# sourceMappingURL=admin.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminComponent, { className: "AdminComponent", filePath: "src/app/component/admin/admin.component.ts", lineNumber: 25 });
})();
export {
  AdminComponent
};
//# sourceMappingURL=chunk-RJN2JKW6.js.map
