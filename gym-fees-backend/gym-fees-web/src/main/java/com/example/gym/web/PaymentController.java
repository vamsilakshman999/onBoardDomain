package com.example.gym.web;

import com.example.gym.application.PaymentService;
import com.example.gym.application.dto.PaymentDto;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/payments")
public class PaymentController {
    private final PaymentService paymentService;

    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @PostMapping
    public PaymentDto create(@RequestBody PaymentDto dto) {
        return paymentService.create(dto);
    }

    @GetMapping
    public List<PaymentDto> list() {
        return paymentService.list();
    }

    @GetMapping("/{id}")
    public PaymentDto get(@PathVariable UUID id) {
        return paymentService.get(id);
    }
}
