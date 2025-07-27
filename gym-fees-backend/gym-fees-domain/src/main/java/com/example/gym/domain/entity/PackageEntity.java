package com.example.gym.domain.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "packages")
@Data
public class PackageEntity {
    @Id
    @GeneratedValue
    private Long id;

    private String name;

    private int durationMonths;

    private BigDecimal baseFee;

    @OneToMany(mappedBy = "pkg", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<SubscriptionEntity> subscriptions = new ArrayList<>();
}
