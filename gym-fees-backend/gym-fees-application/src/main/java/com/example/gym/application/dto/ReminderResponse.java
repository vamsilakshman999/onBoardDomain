package com.example.gym.application.dto;

import java.util.List;

public record ReminderResponse(List<String> upcomingDue, List<String> overdue) {}
