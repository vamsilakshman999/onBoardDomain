package com.example.gym.application;

import com.example.gym.application.dto.SubscriptionDto;
import java.util.Collection;

public interface ReminderService {
    Collection<String> getNotifications();
    void checkUpcomingDue();
    void markOverdue();
}
