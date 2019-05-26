import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
	providedIn: 'root'
})
export class NotificationService {

	
	constructor(private toastrService: ToastrService) { }

	public showSuccess(message, title) {
		this.toastrService.success(message, title);
	}

	public showError(message, title) {
		this.toastrService.error(message, title);
	}
}