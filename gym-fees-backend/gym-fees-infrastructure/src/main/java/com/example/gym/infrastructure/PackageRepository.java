package com.example.gym.infrastructure;

import com.example.gym.domain.Package;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PackageRepository extends JpaRepository<Package, Long> {
}
