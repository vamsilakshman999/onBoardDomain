package com.example.gym.web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication(scanBasePackages = "com.example.gym")
@EnableJpaRepositories(basePackages = "com.example.gym.infrastructure")
@EntityScan(basePackages = "com.example.gym.domain.entity")
@EnableScheduling
public class GymFeesApplication {
    public static void main(String[] args) {
        SpringApplication.run(GymFeesApplication.class, args);
    }
}
