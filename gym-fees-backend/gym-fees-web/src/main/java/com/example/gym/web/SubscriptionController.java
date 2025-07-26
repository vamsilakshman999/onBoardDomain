package com.example.gym.web;

import com.example.gym.application.SubscriptionService;
import com.example.gym.application.dto.SubscriptionDto;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/subscriptions")
@CrossOrigin(origins = "http://localhost:4200")
public class SubscriptionController {
    private final SubscriptionService subscriptionService;

    public SubscriptionController(SubscriptionService subscriptionService) {
        this.subscriptionService = subscriptionService;
    }

    @PostMapping
    public SubscriptionDto create(@RequestBody SubscriptionDto dto) {
        return subscriptionService.create(dto);
    }

    @GetMapping
    public List<SubscriptionDto> list() {
        return subscriptionService.list();
    }

    @GetMapping("/{id}")
    public SubscriptionDto get(@PathVariable UUID id) {
        return subscriptionService.get(id);
    }

    @PatchMapping("/{id}/status")
    public SubscriptionDto updateStatus(@PathVariable UUID id, @RequestBody SubscriptionDto dto) {
        return subscriptionService.updateStatus(id, dto);
    }

    @PutMapping("/{id}")
    public SubscriptionDto update(@PathVariable UUID id, @RequestBody SubscriptionDto dto) {
        return subscriptionService.update(id, dto);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable UUID id) {
        subscriptionService.delete(id);
    }
}
