package com.example.gym.application.dto;

import com.example.gym.domain.Subscription.Status;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.UUID;

public record SubscriptionDto(
        UUID id,
        UUID memberId,
        Long packageId,
        LocalDate startDate,
        LocalDate endDate,
        BigDecimal agreedFee,
        Status status
) {}
