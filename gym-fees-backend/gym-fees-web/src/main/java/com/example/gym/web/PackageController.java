package com.example.gym.web;

import com.example.gym.application.PackageService;
import com.example.gym.application.dto.PackageDto;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/packages")
@CrossOrigin(origins = "http://localhost:4200")
public class PackageController {
    private final PackageService packageService;

    public PackageController(PackageService packageService) {
        this.packageService = packageService;
    }

    @PostMapping
    public PackageDto create(@RequestBody PackageDto dto) {
        return packageService.create(dto);
    }

    @GetMapping("/{id}")
    public PackageDto get(@PathVariable Long id) {
        return packageService.get(id);
    }

    @GetMapping
    public List<PackageDto> list() {
        return packageService.list();
    }

    @PutMapping("/{id}")
    public PackageDto update(@PathVariable Long id, @RequestBody PackageDto dto) {
        return packageService.update(id, dto);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        packageService.delete(id);
    }
}
