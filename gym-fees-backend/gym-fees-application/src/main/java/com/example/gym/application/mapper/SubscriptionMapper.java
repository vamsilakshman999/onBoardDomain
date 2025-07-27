package com.example.gym.application.mapper;

import com.example.gym.application.dto.SubscriptionDto;
import com.example.gym.domain.entity.SubscriptionEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface SubscriptionMapper {
    @Mapping(source = "member.id", target = "memberId")
    @Mapping(source = "pkg.id", target = "packageId")
    SubscriptionDto toDto(SubscriptionEntity entity);

    @Mapping(source = "memberId", target = "member.id")
    @Mapping(source = "packageId", target = "pkg.id")
    SubscriptionEntity toEntity(SubscriptionDto dto);

    @Mapping(source = "memberId", target = "member.id")
    @Mapping(source = "packageId", target = "pkg.id")
    void updateFromDto(SubscriptionDto dto, @MappingTarget SubscriptionEntity entity);
}
