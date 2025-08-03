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


    @GetMapping
    public List<PackageDto> list() {
        return packageService.list();
    }


    @GetMapping("/{id}")
    public PackageDto get(@PathVariable("id") Long id) {
        return packageService.get(id);
    }

    @PutMapping("/{id}")
    public PackageDto update(@PathVariable("id") Long id, @RequestBody PackageDto dto) {
        return packageService.update(id, dto);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Long id) {
        packageService.delete(id);
    }
}
