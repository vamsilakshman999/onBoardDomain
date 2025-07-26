package com.example.gym.application;

import com.example.gym.application.dto.SubscriptionDto;
import java.util.List;
import java.util.UUID;

public interface SubscriptionService {
    SubscriptionDto create(SubscriptionDto dto);
    SubscriptionDto get(UUID id);
    List<SubscriptionDto> list();
    SubscriptionDto updateStatus(UUID id, SubscriptionDto dto);
    SubscriptionDto update(UUID id, SubscriptionDto dto);
    void delete(UUID id);
}
