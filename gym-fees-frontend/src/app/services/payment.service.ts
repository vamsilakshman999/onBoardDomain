import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Payment {
  id: string;
  subscriptionId: string;
  paidAmount: number;
  paidOn: string;
  refundedAmount: number;
  refundReason: string;
}

@Injectable({ providedIn: 'root' })
export class PaymentService {
  private baseUrl = `${environment.apiBaseUrl}/api/payments`;

  constructor(private http: HttpClient) {}

  list(): Observable<Payment[]> {
    return this.http.get<Payment[]>(this.baseUrl);
  }
}
