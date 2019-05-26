import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { registerLocaleData } from '@angular/common';
import { BriefDescription } from "./utils/brief-description.pipe";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import localePT from '@angular/common/locales/pt';
import localeExtraPT from '@angular/common/locales/extra/pt';

// Components
import { AppComponent } from './app.component';
import { TopComponent } from './components/top/top.component';
import { BotComponent } from './components/bot/bot.component';
import { HomeComponent } from './components/home/home.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { FunComponent } from './components/fun/fun.component';
import { OfferComponent } from './components/offer/offer.component';
import { HowToUseComponent } from './components/offer/how-to-use/how-to-use.component';
import { WhereIsComponent } from './components/offer/where-is/where-is.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { PurchaseSuccessComponent } from './components/purchase-success/purchase-success.component';
import { LoaderComponent } from './components/loader/loader.component';

import { InterceptorProviders } from "./interceptors/import.interceptor";

registerLocaleData(localePT, 'pt', localeExtraPT);

@NgModule({
	declarations: [
		AppComponent,
		TopComponent,
		BotComponent,
		HomeComponent,
		RestaurantComponent,
		FunComponent,
		OfferComponent,
		HowToUseComponent,
		WhereIsComponent,
		BriefDescription,
		PurchaseComponent,
		PurchaseSuccessComponent,
		LoaderComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		ToastrModule.forRoot(),
		RouterModule.forRoot(ROUTES)
	],
	providers: [
		InterceptorProviders,
		{ provide: LOCALE_ID, useValue: 'pt' } 
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
