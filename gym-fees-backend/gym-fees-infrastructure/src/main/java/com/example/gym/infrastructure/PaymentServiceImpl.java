package com.example.gym.infrastructure;

import com.example.gym.application.PaymentService;
import com.example.gym.application.GymMapper;
import com.example.gym.application.dto.PaymentDto;
import com.example.gym.domain.Payment;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class PaymentServiceImpl implements PaymentService {
    private final PaymentRepository repository;
    private final GymMapper mapper;

    public PaymentServiceImpl(PaymentRepository repository, GymMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    @Override
    public PaymentDto create(PaymentDto dto) {
        Payment entity = mapper.toEntity(dto);
        return mapper.toDto(repository.save(entity));
    }

    @Override
    public PaymentDto get(UUID id) {
        return repository.findById(id).map(mapper::toDto).orElse(null);
    }

    @Override
    public List<PaymentDto> list() {
        return repository.findAll().stream().map(mapper::toDto).toList();
    }

    @Override
    public PaymentDto update(UUID id, PaymentDto dto) {
        return repository.findById(id).map(p -> {
            mapper.updatePaymentFromDto(dto, p);
            return mapper.toDto(repository.save(p));
        }).orElse(null);
    }

    @Override
    public void delete(UUID id) {
        repository.deleteById(id);
    }
}
