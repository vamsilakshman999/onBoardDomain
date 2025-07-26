package com.example.gym.application;

import com.example.gym.application.dto.MemberDto;

import java.util.List;
import java.util.UUID;

public interface MemberService {
    MemberDto create(MemberDto member);
    MemberDto get(UUID id);
    List<MemberDto> list();
}
