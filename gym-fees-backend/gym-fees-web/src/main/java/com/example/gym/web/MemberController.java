package com.example.gym.web;

import com.example.gym.application.MemberService;
import com.example.gym.application.dto.MemberDto;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/members")
@CrossOrigin(origins = "http://localhost:4200")
public class MemberController {

    private final MemberService memberService;

    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @PostMapping
    public MemberDto create(@RequestBody MemberDto member) {
        return memberService.create(member);
    }

    @GetMapping("/{id}")
    public MemberDto get(@PathVariable UUID id) {
        return memberService.get(id);
    }

    @GetMapping
    public List<MemberDto> list() {
        return memberService.list();
    }

    @PutMapping("/{id}")
    public MemberDto update(@PathVariable UUID id, @RequestBody MemberDto dto) {
        return memberService.update(id, dto);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable UUID id) {
        memberService.delete(id);
    }
}
