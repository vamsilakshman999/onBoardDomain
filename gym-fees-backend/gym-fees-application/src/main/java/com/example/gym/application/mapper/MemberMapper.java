package com.example.gym.application.mapper;

import com.example.gym.application.dto.MemberDto;
import com.example.gym.domain.entity.MemberEntity;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    MemberDto toDto(MemberEntity entity);
    MemberEntity toEntity(MemberDto dto);
    void updateFromDto(MemberDto dto, @MappingTarget MemberEntity entity);
}
