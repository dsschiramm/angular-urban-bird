import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Components
import { HomeComponent } from "./components/home/home.component";
import { RestaurantComponent } from "./components/restaurant/restaurant.component";
import { FunComponent } from "./components/fun/fun.component";
import { OfferComponent } from "./components/offer/offer.component";
import { HowToUseComponent } from "./components/offer/how-to-use/how-to-use.component";
import { WhereIsComponent } from "./components/offer/where-is/where-is.component";
import { PurchaseComponent } from "./components/purchase/purchase.component";

const routes: Routes = [
	{ path: "", component: HomeComponent },
	{ path: "restaurant", component: RestaurantComponent },
	{ path: "fun", component: FunComponent },
	{ path: "offer", component: HomeComponent },
	{
		path: "offer/:id",
		component: OfferComponent,
		children: [
			{ path: "", component: HowToUseComponent },
			{ path: "how-to-use", component: HowToUseComponent },
			{ path: "where-is", component: WhereIsComponent }
		]
	},
	{ path: "purchase", component: PurchaseComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
