package com.example.gym.infrastructure;

import com.example.gym.application.ReminderService;
import com.example.gym.domain.Subscription;
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
    private final Queue<String> notifications = new ConcurrentLinkedQueue<>();

    public ReminderServiceImpl(SubscriptionRepository subscriptionRepository) {
        this.subscriptionRepository = subscriptionRepository;
    }

    @Override
    public Collection<String> getNotifications() {
        return List.copyOf(notifications);
    }

    @Override
    @Scheduled(cron = "0 30 7 * * *")
    public void checkUpcomingDue() {
        LocalDate now = LocalDate.now();
        LocalDate inFiveDays = now.plusDays(5);
        subscriptionRepository.findByEndDateBetween(now, inFiveDays)
                .forEach(sub -> notifications.add("Subscription " + sub.getId() + " due on " + sub.getEndDate()));
    }

    @Override
    @Scheduled(cron = "0 0 8 * * *")
    public void markOverdue() {
        LocalDate today = LocalDate.now();
        subscriptionRepository.findByEndDateBeforeAndStatusNot(today, Subscription.Status.OVERDUE)
                .forEach(sub -> {
                    sub.setStatus(Subscription.Status.OVERDUE);
                    subscriptionRepository.save(sub);
                    notifications.add("Subscription " + sub.getId() + " overdue");
                });
    }
}
