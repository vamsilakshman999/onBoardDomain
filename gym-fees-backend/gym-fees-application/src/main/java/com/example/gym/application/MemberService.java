package com.example.gym.application;

import com.example.gym.domain.Member;

import java.util.List;
import java.util.UUID;

public interface MemberService {
    Member create(Member member);
    Member get(UUID id);
    List<Member> list();
}
