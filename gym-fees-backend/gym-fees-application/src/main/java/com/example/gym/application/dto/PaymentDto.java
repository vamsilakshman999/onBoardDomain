package com.example.gym.application.dto;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.UUID;

public record PaymentDto(
        UUID id,
        UUID subscriptionId,
        BigDecimal paidAmount,
        LocalDate paidOn,
        BigDecimal refundedAmount,
        String refundReason
) {}
