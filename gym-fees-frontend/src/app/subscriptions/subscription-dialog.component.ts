import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from '../services/subscription.service';

@Component({
  selector: 'app-subscription-dialog',
  templateUrl: './subscription-dialog.component.html'
})
export class SubscriptionDialogComponent {
  form = this.fb.group({
    memberId: ['', Validators.required],
    packageId: [null, Validators.required],
    startDate: [null, Validators.required],
    endDate: [null],
    agreedFee: [0, Validators.required],
    status: ['ACTIVE']
  });

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<SubscriptionDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Subscription | null) {
    if (data) {
      this.form.patchValue(data);
    }
  }

  save() {
    if (this.form.valid) {
      this.dialogRef.close({ ...this.data, ...this.form.value });
    }
  }
}
