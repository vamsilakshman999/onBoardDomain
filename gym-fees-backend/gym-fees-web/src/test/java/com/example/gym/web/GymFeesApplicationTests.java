package com.example.gym.web;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

@SpringBootTest          // boots Spring
@ActiveProfiles("h2")    // << run with the in-memory profile so no Postgres needed
class GymFeesApplicationTests {

    @Test
    void contextLoads() {
    }
}
