package com.fundacionaurora.backend.service;

import com.fundacionaurora.backend.model.Catalogo;
import com.fundacionaurora.backend.repository.CatalogoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CatalogoService {

    private final CatalogoRepository catalogoRepository;

    public CatalogoService(CatalogoRepository catalogoRepository) {
        this.catalogoRepository = catalogoRepository;
    }

    public List<Catalogo> listarCatalogos() {
        return catalogoRepository.findAll();
    }

    public Optional<Catalogo> obtenerPorId(Long id) {
        return catalogoRepository.findById(id);
    }

    public Catalogo guardarCatalogo(Catalogo catalogo) {
        return catalogoRepository.save(catalogo);
    }

    public void eliminarCatalogo(Long id) {
        catalogoRepository.deleteById(id);
    }
}