package com.example.gym.infrastructure;

import com.example.gym.application.ReminderService;
import com.example.gym.application.dto.ReminderResponse;
import com.example.gym.domain.entity.SubscriptionEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Collection;
import java.util.List;
import java.util.Queue;
import java.util.concurrent.ConcurrentLinkedQueue;

@Service
public class ReminderServiceImpl implements ReminderService {
    private final SubscriptionRepository subscriptionRepository;
    private final Queue<String> upcomingQueue = new ConcurrentLinkedQueue<>();
    private final Queue<String> overdueQueue = new ConcurrentLinkedQueue<>();

    public ReminderServiceImpl(SubscriptionRepository subscriptionRepository) {
        this.subscriptionRepository = subscriptionRepository;
    }

    @Override
    public ReminderResponse getReminders() {
        return new ReminderResponse(List.copyOf(upcomingQueue), List.copyOf(overdueQueue));
    }

    @Override
    @Scheduled(cron = "0 30 7 * * *")
    public void checkUpcomingDue() {
        LocalDate now = LocalDate.now();
        LocalDate inFiveDays = now.plusDays(5);
        subscriptionRepository.findByEndDateBetween(now, inFiveDays)
                .forEach(sub -> upcomingQueue.add("Subscription " + sub.getId() + " due on " + sub.getEndDate()));
    }

    @Override
    @Scheduled(cron = "0 0 8 * * *")
    public void markOverdue() {
        LocalDate today = LocalDate.now();
        subscriptionRepository.findByEndDateBeforeAndStatusNot(today, Subscription.Status.OVERDUE)
                .forEach(sub -> {
                    sub.setStatus(Subscription.Status.OVERDUE);
                    subscriptionRepository.save(sub);
                    overdueQueue.add("Subscription " + sub.getId() + " overdue");
                });
    }
}
