import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReminderService, ReminderResponse } from '../services/reminder.service';
import { interval, Subscription as RxSub } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  selector: 'app-reminders',
  imports: [CommonModule, MatCardModule],
  templateUrl: './reminders.component.html'
})
export class RemindersComponent implements OnInit, OnDestroy {
  data: ReminderResponse = { upcomingDue: [], overdue: [] };
  sub?: RxSub;

  constructor(private reminderService: ReminderService) {}

  ngOnInit(): void {
    this.load();
    this.sub = interval(30000).subscribe(() => this.load());
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  load() {
    this.reminderService.list().subscribe(d => this.data = d);
  }
}
