package com.fundacionaurora.backend.controller;

import com.fundacionaurora.backend.model.Catalogo;
import com.fundacionaurora.backend.service.CatalogoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/catalogos")
@CrossOrigin(origins = "*")
public class CatalogoController {

    private final CatalogoService catalogoService;

    public CatalogoController(CatalogoService catalogoService) {
        this.catalogoService = catalogoService;
    }

    @GetMapping
    public List<Catalogo> listarCatalogos() {
        return catalogoService.listarCatalogos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Catalogo> obtenerPorId(@PathVariable Long id) {
        return catalogoService.obtenerPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Catalogo> crearCatalogo(@RequestBody Catalogo catalogo) {
        Catalogo nuevo = catalogoService.guardarCatalogo(catalogo);
        return ResponseEntity.status(HttpStatus.CREATED).body(nuevo);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarCatalogo(@PathVariable Long id) {
        if (catalogoService.obtenerPorId(id).isPresent()) {
            catalogoService.eliminarCatalogo(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}