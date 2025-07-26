import { Component, OnInit } from '@angular/core';
import { ReminderService } from '../services/reminder.service';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html'
})
export class RemindersComponent implements OnInit {
  reminders: string[] = [];

  constructor(private reminderService: ReminderService) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.reminderService.list().subscribe(r => this.reminders = r);
  }
}
