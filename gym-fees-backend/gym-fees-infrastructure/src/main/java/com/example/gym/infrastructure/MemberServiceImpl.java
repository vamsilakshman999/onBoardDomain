package com.example.gym.infrastructure;

import com.example.gym.application.MemberService;
import com.example.gym.domain.Member;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;
import java.util.UUID;

@Service
public class MemberServiceImpl implements MemberService {

    private final MemberRepository repository;

    public MemberServiceImpl(MemberRepository repository) {
        this.repository = repository;
    }

    @Override
    public Member create(Member member) {
        member.setId(UUID.randomUUID());
        member.setCreatedAt(Instant.now());
        return repository.save(member);
    }

    @Override
    public Member get(UUID id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public List<Member> list() {
        return repository.findAll();
    }
}
