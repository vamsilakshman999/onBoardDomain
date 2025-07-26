import { Component, OnInit } from '@angular/core';
import { PaymentService, Payment } from '../services/payment.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html'
})
export class PaymentsComponent implements OnInit {
  payments: Payment[] = [];

  constructor(private paymentService: PaymentService) {}

  ngOnInit(): void {
    this.paymentService.list().subscribe(data => this.payments = data);
  }
}
