package com.example.gym.infrastructure;

import com.example.gym.application.PackageService;
import com.example.gym.application.mapper.PackageMapper;
import com.example.gym.application.dto.PackageDto;
import com.example.gym.domain.entity.PackageEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PackageServiceImpl implements PackageService {
    private final PackageRepository repository;
    private final PackageMapper mapper;

    public PackageServiceImpl(PackageRepository repository, PackageMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    @Override
    public PackageDto create(PackageDto dto) {
        PackageEntity entity = mapper.toEntity(dto);
        return mapper.toDto(repository.save(entity));
    }

    @Override
    public PackageDto get(Long id) {
        return repository.findById(id).map(mapper::toDto).orElse(null);
    }

    @Override
    public List<PackageDto> list() {
        return repository.findAll().stream().map(mapper::toDto).toList();
    }

    @Override
    public PackageDto update(Long id, PackageDto dto) {
        return repository.findById(id).map(p -> {
            mapper.updateFromDto(dto, p);
            return mapper.toDto(repository.save(p));
        }).orElse(null);
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }
}
