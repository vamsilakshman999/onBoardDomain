package com.example.gym.infrastructure;

import com.example.gym.domain.Subscription;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

public interface SubscriptionRepository extends JpaRepository<Subscription, UUID> {
    List<Subscription> findByEndDateBetween(LocalDate start, LocalDate end);
    List<Subscription> findByEndDateBeforeAndStatusNot(LocalDate date, Subscription.Status status);
}
