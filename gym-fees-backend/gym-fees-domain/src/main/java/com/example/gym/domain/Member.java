package com.example.gym.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import java.time.Instant;
import java.util.UUID;
import lombok.Data;

@Entity
@Table(name = "members")
@Data
public class Member {

    @Id
    @GeneratedValue
    private UUID id;

    @NotBlank
    private String fullName;

    @Email
    private String email;

    private String mobile;

    private String photoUrl;

    private String notes;

    private boolean archived;

    private Instant createdAt;
}
