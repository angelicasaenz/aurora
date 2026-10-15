package com.fundacionaurora.backend.controller;

import com.fundacionaurora.backend.model.Mascota;
import com.fundacionaurora.backend.service.MascotaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/mascotas") // Ruta mvn spring-boot:runbase de mascotas
@CrossOrigin(origins = "*") // conexión con el frontend
public class MascotaController {

    @Autowired
    private MascotaService mascotaService;

    // 1. Endpoint GET: Obtener todas las mascotas (Catálogo público)
    @GetMapping
    public List<Mascota> listarMascotas() {
        return mascotaService.listarMascotas();
    }

    // 2. Endpoint GET por ID: Obtener una mascota específica
    @GetMapping("/{id}")
    public Optional<Mascota> obtenerMascotaPorId(@PathVariable Long id) {
        return mascotaService.obtenerMascotaPorId(id);
    }

    // 3. Endpoint POST: Crear una nueva mascota
    @PostMapping
    public Mascota guardarMascota(@RequestBody Mascota mascota) {
        return mascotaService.guardarMascota(mascota);
    }

    // 4. Endpoint DELETE: Eliminar una mascota por ID
    @DeleteMapping("/{id}")
    public void eliminarMascota(@PathVariable Long id) {
        mascotaService.eliminarMascota(id);
    }
}