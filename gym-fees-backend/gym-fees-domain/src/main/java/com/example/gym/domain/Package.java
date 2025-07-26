package com.example.gym.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.math.BigDecimal;
import lombok.Data;

@Entity
@Table(name = "packages")
@Data
public class Package {

    @Id
    private Long id;

    private String name;

    private int durationMonths;

    private BigDecimal baseFee;
}
