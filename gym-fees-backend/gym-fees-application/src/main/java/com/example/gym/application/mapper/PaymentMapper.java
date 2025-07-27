package com.example.gym.application.mapper;

import com.example.gym.application.dto.PaymentDto;
import com.example.gym.domain.entity.PaymentEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface PaymentMapper {
    @Mapping(source = "subscription.id", target = "subscriptionId")
    PaymentDto toDto(PaymentEntity entity);

    @Mapping(source = "subscriptionId", target = "subscription.id")
    PaymentEntity toEntity(PaymentDto dto);

    @Mapping(source = "subscriptionId", target = "subscription.id")
    void updateFromDto(PaymentDto dto, @MappingTarget PaymentEntity entity);
}
