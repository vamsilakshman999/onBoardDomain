package com.example.gym.domain.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "members")
@Data
public class MemberEntity {
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

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<SubscriptionEntity> subscriptions = new ArrayList<>();
}
