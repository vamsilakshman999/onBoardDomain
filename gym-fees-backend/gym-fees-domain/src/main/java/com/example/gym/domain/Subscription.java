package com.example.gym.domain;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "subscriptions")
public class Subscription {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "agreed_fee", nullable = false)
	private BigDecimal agreedFee;

	private LocalDate startDate;
	private LocalDate endDate;

	protected Subscription() { }

	public Subscription(Long id, BigDecimal agreedFee, LocalDate startDate, LocalDate endDate) {
		this.id = id;
		this.agreedFee = agreedFee;
		this.startDate = startDate;
		this.endDate = endDate;
	}

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}

	public BigDecimal getAgreedFee() {
		return agreedFee;
	}
	public void setAgreedFee(BigDecimal agreedFee) {
		this.agreedFee = agreedFee;
	}

	public LocalDate getStartDate() {
		return startDate;
	}
	public void setStartDate(LocalDate startDate) {
		this.startDate = startDate;
	}

	public LocalDate getEndDate() {
		return endDate;
	}
	public void setEndDate(LocalDate endDate) {
		this.endDate = endDate;
	}
}
