import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { registerLocaleData } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import localePT from "@angular/common/locales/pt";
import localeExtraPT from "@angular/common/locales/extra/pt";
import { AppRoutingModule } from "./app-routing.module";
import { ToastrModule } from "ngx-toastr";
import { BriefDescription } from "./utils/brief-description.pipe";
import { InterceptorProviders } from "./interceptors/import.interceptor";

// Components
import { AppComponent } from "./app.component";
import { FunComponent } from "./components/fun/fun.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./components/home/home.component";
import { LoaderComponent } from "./components/loader/loader.component";
import { HeaderComponent } from "./components/header/header.component";
import { OfferComponent } from "./components/offer/offer.component";
import { PurchaseComponent } from "./components/purchase/purchase.component";
import { PurchaseSuccessComponent } from "./components/purchase-success/purchase-success.component";
import { RestaurantComponent } from "./components/restaurant/restaurant.component";
import { HowToUseComponent } from "./components/offer/how-to-use/how-to-use.component";
import { WhereIsComponent } from "./components/offer/where-is/where-is.component";

registerLocaleData(localePT, "pt", localeExtraPT);

@NgModule({
	declarations: [
		AppComponent,
		FunComponent,
		FooterComponent,
		HomeComponent,
		LoaderComponent,
		HeaderComponent,
		OfferComponent,
		PurchaseComponent,
		PurchaseSuccessComponent,
		RestaurantComponent,
		HowToUseComponent,
		WhereIsComponent,
		BriefDescription
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		ToastrModule.forRoot()
	],
	providers: [InterceptorProviders, { provide: LOCALE_ID, useValue: "pt" }],
	bootstrap: [AppComponent]
})
export class AppModule {}
