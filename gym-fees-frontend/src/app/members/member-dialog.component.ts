import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { Member } from '../services/member.service';

@Component({
  selector: 'app-member-dialog',
  templateUrl: './member-dialog.component.html'
})
export class MemberDialogComponent {
  form = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', Validators.email],
    mobile: ['']
  });

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<MemberDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Member | null) {
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
