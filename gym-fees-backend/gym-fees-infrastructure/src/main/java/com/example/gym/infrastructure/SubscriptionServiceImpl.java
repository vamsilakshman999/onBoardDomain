package com.example.gym.infrastructure;

import com.example.gym.application.SubscriptionService;
import com.example.gym.application.GymMapper;
import com.example.gym.application.dto.SubscriptionDto;
import com.example.gym.domain.Subscription;
import com.example.gym.domain.Subscription.Status;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@Service
public class SubscriptionServiceImpl implements SubscriptionService {
    private final SubscriptionRepository repository;
    private final GymMapper mapper;

    public SubscriptionServiceImpl(SubscriptionRepository repository, GymMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    @Override
    public SubscriptionDto create(SubscriptionDto dto) {
        Subscription entity = mapper.toEntity(dto);
        entity.setId(UUID.randomUUID());
        if (entity.getEndDate() == null && entity.getStartDate() != null) {
            entity.setEndDate(entity.getStartDate().plusMonths(1));
        }
        entity.setStatus(Status.ACTIVE);
        return mapper.toDto(repository.save(entity));
    }

    @Override
    public SubscriptionDto get(UUID id) {
        return repository.findById(id).map(mapper::toDto).orElse(null);
    }

    @Override
    public List<SubscriptionDto> list() {
        return repository.findAll().stream().map(mapper::toDto).toList();
    }

    @Override
    public SubscriptionDto updateStatus(UUID id, SubscriptionDto dto) {
        return repository.findById(id).map(sub -> {
            mapper.updateSubscriptionFromDto(dto, sub);
            return mapper.toDto(repository.save(sub));
        }).orElse(null);
    }
}
