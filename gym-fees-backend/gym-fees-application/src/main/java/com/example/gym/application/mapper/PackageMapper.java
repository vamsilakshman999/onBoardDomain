package com.example.gym.application.mapper;

import com.example.gym.application.dto.PackageDto;
import com.example.gym.domain.entity.PackageEntity;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface PackageMapper {
    PackageDto toDto(PackageEntity entity);
    PackageEntity toEntity(PackageDto dto);
    void updateFromDto(PackageDto dto, @MappingTarget PackageEntity entity);
}
