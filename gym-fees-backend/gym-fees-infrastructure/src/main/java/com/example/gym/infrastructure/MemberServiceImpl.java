package com.example.gym.infrastructure;

import com.example.gym.application.MemberService;
import com.example.gym.application.GymMapper;
import com.example.gym.application.dto.MemberDto;
import com.example.gym.domain.Member;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;
import java.util.UUID;

@Service
public class MemberServiceImpl implements MemberService {

    private final MemberRepository repository;
    private final GymMapper mapper;

    public MemberServiceImpl(MemberRepository repository, GymMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    @Override
    public MemberDto create(MemberDto member) {
        Member entity = mapper.toEntity(member);
        entity.setCreatedAt(Instant.now());
        return mapper.toDto(repository.save(entity));
    }

    @Override
    public MemberDto get(UUID id) {
        return repository.findById(id).map(mapper::toDto).orElse(null);
    }

    @Override
    public List<MemberDto> list() {
        return repository.findAll().stream().map(mapper::toDto).toList();
    }

    @Override
    public MemberDto update(UUID id, MemberDto dto) {
        return repository.findById(id).map(m -> {
            mapper.updateMemberFromDto(dto, m);
            return mapper.toDto(repository.save(m));
        }).orElse(null);
    }

    @Override
    public void delete(UUID id) {
        repository.deleteById(id);
    }
}
