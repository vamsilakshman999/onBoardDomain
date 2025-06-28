package com.example.gym.web;

import com.example.gym.application.MemberService;
import com.example.gym.domain.Member;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/members")
public class MemberController {

    private final MemberService memberService;

    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @PostMapping
    public Member create(@RequestBody Member member) {
        return memberService.create(member);
    }

    @GetMapping("/{id}")
    public Member get(@PathVariable UUID id) {
        return memberService.get(id);
    }

    @GetMapping
    public List<Member> list() {
        return memberService.list();
    }
}
