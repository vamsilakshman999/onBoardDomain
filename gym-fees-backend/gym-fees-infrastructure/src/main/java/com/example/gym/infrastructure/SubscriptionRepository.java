package com.example.gym.infrastructure;

import com.example.gym.domain.entity.SubscriptionEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

public interface SubscriptionRepository extends JpaRepository<SubscriptionEntity, UUID> {
    List<SubscriptionEntity> findByEndDateBetween(LocalDate start, LocalDate end);
    List<SubscriptionEntity> findByEndDateBeforeAndStatusNot(LocalDate date, SubscriptionEntity.Status status);
}
