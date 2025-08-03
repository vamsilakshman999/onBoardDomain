import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberService, Member } from '../services/member.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MemberDialogComponent } from './member-dialog.component';

@Component({
  standalone: true,
  selector: 'app-members',
  imports: [
    CommonModule,
    MatDialogModule,
    MatSnackBarModule,
    MemberDialogComponent
  ],
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  members: Member[] = [];
  loading = false;

  constructor(private memberService: MemberService,
              private dialog: MatDialog,
              private snack: MatSnackBar) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.loading = true;
    this.memberService.getMembers().subscribe({
      next: d => this.members = d,
      error: () => this.snack.open('Failed to load members', 'Close', { duration: 3000 }),
      complete: () => this.loading = false
    });
  }

  add() {
    const ref = this.dialog.open(MemberDialogComponent);
    ref.afterClosed().subscribe(result => {
      if (result) {
        this.memberService.create(result).subscribe({
          next: () => { this.snack.open('Saved', 'Close', {duration:2000}); this.load(); },
          error: () => this.snack.open('Save failed', 'Close', { duration: 3000 })
        });
      }
    });
  }

  edit(member: Member) {
    const ref = this.dialog.open(MemberDialogComponent, { data: member });
    ref.afterClosed().subscribe(result => {
      if (result) {
        this.memberService.update(member.id, result).subscribe({
          next: () => { this.snack.open('Updated', 'Close', {duration:2000}); this.load(); },
          error: () => this.snack.open('Update failed', 'Close', { duration: 3000 })
        });
      }
    });
  }

  remove(member: Member) {
    if (confirm('Delete member?')) {
      this.memberService.delete(member.id).subscribe({
        next: () => { this.snack.open('Deleted', 'Close', {duration:2000}); this.load(); },
        error: () => this.snack.open('Delete failed', 'Close', { duration: 3000 })
      });
    }
  }
}
