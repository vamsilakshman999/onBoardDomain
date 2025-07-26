package com.example.gym.application;

import com.example.gym.application.dto.*;
import com.example.gym.domain.*;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface GymMapper {
    MemberDto toDto(Member entity);
    Member toEntity(MemberDto dto);

    PackageDto toDto(Package entity);
    Package toEntity(PackageDto dto);

    SubscriptionDto toDto(Subscription entity);
    Subscription toEntity(SubscriptionDto dto);

    PaymentDto toDto(Payment entity);
    Payment toEntity(PaymentDto dto);

    void updateMemberFromDto(MemberDto dto, @MappingTarget Member entity);
    void updatePackageFromDto(PackageDto dto, @MappingTarget Package entity);
    void updateSubscriptionFromDto(SubscriptionDto dto, @MappingTarget Subscription entity);
    void updatePaymentFromDto(PaymentDto dto, @MappingTarget Payment entity);
}
