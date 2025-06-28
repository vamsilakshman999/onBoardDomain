package com.example.gym.web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "com.example.gym")
public class GymFeesApplication {
    public static void main(String[] args) {
        SpringApplication.run(GymFeesApplication.class, args);
    }
}
