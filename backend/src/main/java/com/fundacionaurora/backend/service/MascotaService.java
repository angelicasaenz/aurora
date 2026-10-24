package com.fundacionaurora.backend.service;

import com.fundacionaurora.backend.model.Mascota;
import com.fundacionaurora.backend.repository.MascotaRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MascotaService {

    private final MascotaRepository mascotaRepository;

    public MascotaService(MascotaRepository mascotaRepository) {
        this.mascotaRepository = mascotaRepository;
    }

    public List<Mascota> listarMascotas() {
        return mascotaRepository.findAll();
    }
    public List<Mascota> listarPorEstado(String estado) {
        return mascotaRepository.findByEstado(estado);
    }
    public Optional<Mascota> obtenerMascotaPorId(Long id) {
        return mascotaRepository.findById(id);
    }

    public Mascota guardarMascota(Mascota mascota) {
        return mascotaRepository.save(mascota);
    }

    public void eliminarMascota(Long id) {
        mascotaRepository.deleteById(id);
    }
}