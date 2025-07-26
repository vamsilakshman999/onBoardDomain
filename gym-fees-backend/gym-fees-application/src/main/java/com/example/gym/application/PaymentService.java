package com.example.gym.application;

import com.example.gym.application.dto.PaymentDto;
import java.util.List;
import java.util.UUID;

public interface PaymentService {
    PaymentDto create(PaymentDto dto);
    PaymentDto get(UUID id);
    List<PaymentDto> list();
}
