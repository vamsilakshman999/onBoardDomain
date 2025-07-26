package com.example.gym.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.UUID;
import lombok.Data;

@Entity
@Table(name = "payments")
@Data
public class Payment {

    @Id
    @GeneratedValue
    private UUID id;

    private UUID subscriptionId;

    private BigDecimal paidAmount;

    private LocalDate paidOn;

    private BigDecimal refundedAmount;

    private String refundReason;

}
