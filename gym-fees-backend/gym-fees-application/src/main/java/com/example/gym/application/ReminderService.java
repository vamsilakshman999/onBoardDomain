package com.example.gym.application;

import com.example.gym.application.dto.ReminderResponse;

import java.util.Collection;

public interface ReminderService {
    ReminderResponse getReminders();
    void checkUpcomingDue();
    void markOverdue();
}
