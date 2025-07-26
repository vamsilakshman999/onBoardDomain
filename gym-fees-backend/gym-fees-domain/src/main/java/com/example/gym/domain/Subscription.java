package com.example.gym.domain;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.UUID;
import lombok.Data;

@Entity
@Table(name = "subscriptions")
@Data
public class Subscription {

    @Id
    private UUID id;

    private UUID memberId;

    private Long packageId;

    private LocalDate startDate;

    private LocalDate endDate;

    private BigDecimal agreedFee;

    @Enumerated(EnumType.STRING)
    private Status status;

    public enum Status { ACTIVE, FROZEN, PAID, OVERDUE }
}
