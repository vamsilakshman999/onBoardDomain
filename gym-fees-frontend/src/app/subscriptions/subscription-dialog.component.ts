import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { Subscription } from '../services/subscription.service';

@Component({
  standalone: true,
  selector: 'app-subscription-dialog',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDialogModule
  ],
  templateUrl: './subscription-dialog.component.html'
})
export class SubscriptionDialogComponent {
  private fb = inject(FormBuilder);
  form = this.fb.group({
    memberId: ['', Validators.required],
    packageId: [null as number | null, Validators.required],
    startDate: [null as Date | null, Validators.required],
    endDate: [null as Date | null],
    agreedFee: [0, Validators.required],
    status: ['ACTIVE']
  });

  constructor(
              public dialogRef: MatDialogRef<SubscriptionDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Subscription | null) {
    if (data) {
      this.form.patchValue({
        ...data,
        startDate: data.startDate ? new Date(data.startDate) : null,
        endDate: data.endDate ? new Date(data.endDate) : null
      });
    }
  }

  save() {
    if (this.form.valid) {
      this.dialogRef.close({ ...this.data, ...this.form.value });
    }
  }
}
