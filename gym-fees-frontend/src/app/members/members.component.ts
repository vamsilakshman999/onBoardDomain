import { Component, OnInit } from '@angular/core';
import { MemberService, Member } from '../services/member.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html'
})
export class MembersComponent implements OnInit {
  members: Member[] = [];

  constructor(private memberService: MemberService) {}

  ngOnInit(): void {
    this.memberService.getMembers().subscribe(data => {
      this.members = data;
    });
  }
}
