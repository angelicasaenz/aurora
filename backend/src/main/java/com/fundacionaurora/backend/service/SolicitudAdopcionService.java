package com.fundacionaurora.backend.service;

import com.fundacionaurora.backend.model.EstadoSolicitud;
import com.fundacionaurora.backend.model.SolicitudAdopcion;
import com.fundacionaurora.backend.repository.SolicitudAdopcionRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SolicitudAdopcionService {

    private final SolicitudAdopcionRepository solicitudAdopcionRepository;

    public SolicitudAdopcionService(SolicitudAdopcionRepository solicitudAdopcionRepository) {
        this.solicitudAdopcionRepository = solicitudAdopcionRepository;
    }

    public List<SolicitudAdopcion> listarTodas() {
        return solicitudAdopcionRepository.findAll();
    }

    public Optional<SolicitudAdopcion> obtenerPorId(Long id) {
        return solicitudAdopcionRepository.findById(id);
    }

    public SolicitudAdopcion crearSolicitud(SolicitudAdopcion solicitud) {
        return solicitudAdopcionRepository.save(solicitud);
    }

    public Optional<SolicitudAdopcion> cambiarEstado(Long id, EstadoSolicitud nuevoEstado) {
        return solicitudAdopcionRepository.findById(id).map(solicitud -> {
            solicitud.setEstado(nuevoEstado);
            return solicitudAdopcionRepository.save(solicitud);
        });
    }

    public void eliminarSolicitud(Long id) {
        solicitudAdopcionRepository.deleteById(id);
    }
}