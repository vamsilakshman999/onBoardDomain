import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { Payment } from '../services/payment.service';

@Component({
  standalone: true,
  selector: 'app-payment-dialog',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule
  ],
  templateUrl: './payment-dialog.component.html'
})
export class PaymentDialogComponent {
  private fb = inject(FormBuilder);
  form = this.fb.group({
    paidAmount: [0, Validators.required],
    paidOn: [null as Date | null, Validators.required],
    refundedAmount: [0],
    refundReason: ['']
  });

  constructor(
              public dialogRef: MatDialogRef<PaymentDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Payment | null) {
    if (data) {
      this.form.patchValue({
        ...data,
        paidOn: data.paidOn ? new Date(data.paidOn) : null
      });
    }
  }

  save() {
    if (this.form.valid) {
      this.dialogRef.close({ ...this.data, ...this.form.value });
    }
  }
}
