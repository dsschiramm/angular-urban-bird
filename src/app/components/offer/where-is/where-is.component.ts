import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfferService } from '../../../services/offer.service';
import { take } from 'rxjs/operators';

@Component({
	selector: 'app-where-is',
	templateUrl: './where-is.component.html',
	styleUrls: ['./where-is.component.css'],
	providers: [OfferService]
})
export class WhereIsComponent implements OnInit {
	
	public whereIs = '';

	constructor(private route: ActivatedRoute, private offerService: OfferService) { }
	
	ngOnInit() {
		
		this.route.parent.params.pipe(take(1)).subscribe((params: Params) => {
			this.offerService.getWhereIsOfferById(params.id).pipe(take(1)).subscribe((description: string) => this.whereIs = description);
		});
	}
}
