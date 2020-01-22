import { Injectable } from "@angular/core";
import { Order } from "../interfaces/order";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { NotificationService } from "../services/notification.service";

@Injectable()
export class PurchaseService {
	constructor(
		private httpService: HttpClient,
		private notificationService: NotificationService
	) {}

	public confirm(order: Order): Observable<Order> {
		this.notificationService.showSuccess(
			"Compra realizada com sucesso!",
			"Sucesso"
		);

		return this.httpService.post<Order>("order", order);
	}
}
