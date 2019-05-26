import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfferService } from '../../../services/offer.service';
import { take } from 'rxjs/operators';

@Component({
	selector: 'app-how-to-use',
	templateUrl: './how-to-use.component.html',
	styleUrls: ['./how-to-use.component.css'],
	providers: [OfferService]
})
export class HowToUseComponent implements OnInit {
	
	public howToUse: string = '';

	constructor(private route: ActivatedRoute, private offerService: OfferService) { }

	ngOnInit() {

		this.route.parent.params.pipe(take(1)).subscribe((params: Params) => {
			this.offerService.getHowToUseOfferById(params.id).pipe(take(1)).subscribe((description: string) => this.howToUse = description);
		});
	}
}
