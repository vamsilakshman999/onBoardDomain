package com.example.gym.web;

import com.example.gym.application.ReminderService;
import com.example.gym.application.dto.ReminderResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Collection;

@RestController
@RequestMapping("/api/reminders")
@CrossOrigin(origins = "http://localhost:4200")
public class ReminderController {
    private final ReminderService reminderService;

    public ReminderController(ReminderService reminderService) {
        this.reminderService = reminderService;
    }

    @GetMapping
    public ReminderResponse list() {
        return reminderService.getReminders();
    }
}
