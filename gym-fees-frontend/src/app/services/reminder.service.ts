import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ReminderService {
  private baseUrl = `${environment.apiBaseUrl}/api/reminders`;

  constructor(private http: HttpClient) {}

  list(): Observable<string[]> {
    return this.http.get<string[]>(this.baseUrl);
  }
}
