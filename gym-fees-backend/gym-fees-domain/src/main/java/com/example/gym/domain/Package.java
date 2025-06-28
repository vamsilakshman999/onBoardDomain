package com.example.gym.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.math.BigDecimal;

@Entity
@Table(name = "packages")
public class Package {

    @Id
    private Long id;

    private String name;

    private int durationMonths;

    private BigDecimal baseFee;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getDurationMonths() {
        return durationMonths;
    }

    public void setDurationMonths(int durationMonths) {
        this.durationMonths = durationMonths;
    }

    public BigDecimal getBaseFee() {
        return baseFee;
    }

    public void setBaseFee(BigDecimal baseFee) {
        this.baseFee = baseFee;
    }
}
