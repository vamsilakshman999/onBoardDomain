package com.example.gym.application.dto;

import java.math.BigDecimal;

public record PackageDto(
        Long id,
        String name,
        int durationMonths,
        BigDecimal baseFee
) {}
