package com.fundacionaurora.backend.controller;

import com.fundacionaurora.backend.model.EstadoSolicitud;
import com.fundacionaurora.backend.model.SolicitudAdopcion;
import com.fundacionaurora.backend.service.SolicitudAdopcionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/solicitudes")
@CrossOrigin(origins = "*")
public class SolicitudAdopcionController {

    private final SolicitudAdopcionService solicitudAdopcionService;

    public SolicitudAdopcionController(SolicitudAdopcionService solicitudAdopcionService) {
        this.solicitudAdopcionService = solicitudAdopcionService;
    }

    // 1. Obtener todas las solicitudes
    @GetMapping
    public List<SolicitudAdopcion> listarTodas() {
        return solicitudAdopcionService.listarTodas();
    }

    // 2. Obtener una solicitud por ID
    @GetMapping("/{id}")
    public ResponseEntity<SolicitudAdopcion> obtenerPorId(@PathVariable Long id) {
        return solicitudAdopcionService.obtenerPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // 3. Crear una nueva solicitud de adopción
    @PostMapping
    public ResponseEntity<SolicitudAdopcion> crearSolicitud(@RequestBody SolicitudAdopcion solicitud) {
        SolicitudAdopcion nueva = solicitudAdopcionService.crearSolicitud(solicitud);
        return ResponseEntity.status(HttpStatus.CREATED).body(nueva);
    }

    // 4. Cambiar el estado de la solicitud (ej: APROBADA, RECHAZADA)
    @PatchMapping("/{id}/estado")
    public ResponseEntity<SolicitudAdopcion> cambiarEstado(
            @PathVariable Long id,
            @RequestParam EstadoSolicitud estado) {
        return solicitudAdopcionService.cambiarEstado(id, estado)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // 5. Eliminar una solicitud
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarSolicitud(@PathVariable Long id) {
        if (solicitudAdopcionService.obtenerPorId(id).isPresent()) {
            solicitudAdopcionService.eliminarSolicitud(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}