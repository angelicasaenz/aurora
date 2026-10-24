package com.fundacionaurora.backend.controller;

import com.fundacionaurora.backend.model.Mascota;
import com.fundacionaurora.backend.service.MascotaService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/mascotas")
@CrossOrigin(origins = "*") // conexión con el frontend
public class MascotaController {

    private final MascotaService mascotaService;

    public MascotaController(MascotaService mascotaService) {
        this.mascotaService = mascotaService;
    }
    // 1. Endpoint GET: Obtener todas las mascotas (Catálogo público)
    @GetMapping
    public List<Mascota> listarMascotas() {
        return mascotaService.listarMascotas();
    }

    // 2. Endpoint GET por Estado: Filtrar mascotas
    @GetMapping("/estado/{estado}")
    public List<Mascota> obtenerPorEstado(@PathVariable String estado) {
        return mascotaService.listarPorEstado(estado);
    }

    // 3. Endpoint GET por ID: Obtener una mascota específica
    @GetMapping("/{id}")
    public Optional<Mascota> obtenerMascotaPorId(@PathVariable Long id) {
        return mascotaService.obtenerMascotaPorId(id);
    }

    // 4. Endpoint POST: Crear una nueva mascota
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