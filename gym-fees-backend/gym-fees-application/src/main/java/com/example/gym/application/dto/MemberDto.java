package com.example.gym.application.dto;

import java.time.Instant;
import java.util.UUID;

public record MemberDto(
        UUID id,
        String fullName,
        String email,
        String mobile,
        String photoUrl,
        String notes,
        boolean archived,
        Instant createdAt
) {}
