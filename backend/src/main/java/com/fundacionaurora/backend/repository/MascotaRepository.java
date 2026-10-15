package com.fundacionaurora.backend.repository;

import com.fundacionaurora.backend.model.Mascota;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MascotaRepository extends JpaRepository<Mascota, Long> {

    // Método personalizado para filtrar mascotas por estado ("DISPONIBLE", "ADOPTADO")
    List<Mascota> findByEstado(String estado);
}
