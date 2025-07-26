package com.example.gym.application;

import com.example.gym.application.dto.PackageDto;
import java.util.List;

public interface PackageService {
    PackageDto create(PackageDto dto);
    PackageDto get(Long id);
    List<PackageDto> list();
    PackageDto update(Long id, PackageDto dto);
    void delete(Long id);
}
