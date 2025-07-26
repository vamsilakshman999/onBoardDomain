import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Member {
  id: string;
  fullName: string;
  email: string;
  mobile: string;
}

@Injectable({ providedIn: 'root' })
export class MemberService {
  private baseUrl = `${environment.apiBaseUrl}/api/members`;

  constructor(private http: HttpClient) {}

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.baseUrl);
  }

  create(member: Member): Observable<Member> {
    return this.http.post<Member>(this.baseUrl, member);
  }

  update(id: string, member: Member): Observable<Member> {
    return this.http.put<Member>(`${this.baseUrl}/${id}`, member);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
